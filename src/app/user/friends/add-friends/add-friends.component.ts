import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/public/interfaces/interfaces';
import { AccesibilityService } from 'src/app/shared/services/accesibility.service';
import Swal from 'sweetalert2';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-add-friends',
  templateUrl: './add-friends.component.html',
  styleUrls: ['./add-friends.component.css'],
})
export class AddFriendsComponent implements OnInit {
  usuariosEncontrados!: User[];
  busqueda!: String;
  usuarioRecibido: boolean = false;
  dyslexia: boolean = false;
  cursor: boolean = false;
  spacing: boolean = false;

  constructor(private userService: UserService, private accesibilityService: AccesibilityService) {}

  ngOnInit(): void {
    this.accesibilityService.searchChangesBoolean().subscribe((opcion) =>{
      this.dyslexia = opcion;
    })
    this.accesibilityService.searchChangesCursor().subscribe((opcion) =>{
      this.cursor = opcion;
    })
    this.accesibilityService.searchChangesSpacing().subscribe(option => {
      this.spacing = option;
    })
  }

  /**
   * Busca un usuario por su username
   */
  buscarUser() {
    this.userService.buscarUsuariosCoincidentes(this.busqueda).subscribe({
      next: (resp) => {
        this.usuariosEncontrados = resp;
        this.usuarioRecibido = true;
      },
      error: (e) => {
        Swal.fire({
          title: 'Error',
          icon: 'error',
          text: 'There are no results that match your search',
          confirmButtonColor: '##52ab98',
        });
      },
    });
  }

  /**
   * Añade un usuario a amigo
   * @param usuario 
   */
  addFriend(usuario: User) {
    this.userService.addFriend(usuario).subscribe({
      next: (resp) => {
        localStorage.setItem('user', JSON.stringify(resp));
        Swal.fire({
          title: 'Success',
          icon: 'success',
          text: 'The user has been added to your friends list',
          confirmButtonColor: '#52ab98',
        });
       //se renueva la lista de usuarios encontrados para que no apareciendo el usuario agregado
       this.usuariosEncontrados = this.usuariosEncontrados.filter(function(x) { return x != usuario });
      },
      error: (resp) => {
        if (resp.message == null) {
          this.buscarUser();
        } else {
          Swal.fire({
            title: 'Error',
            icon: 'error',
            text: 'An error has occured. Please try again later',
            confirmButtonColor: '#52ab98',
          });
        }
      },
    });
  }
}
