import { Component, OnInit } from '@angular/core';
import { User } from '../../../public/interfaces/interfaces';
import { UserService } from '../../services/user.service';
import Swal from 'sweetalert2';
import { AccesibilityService } from 'src/app/shared/services/accesibility.service';

@Component({
  selector: 'app-exsmoker-data',
  templateUrl: './exsmoker-data.component.html',
  styleUrls: ['./exsmoker-data.component.css'],
})
export class ExsmokerDataComponent implements OnInit {
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

  user: User = JSON.parse(<string>localStorage.getItem('user'));
  modificando: boolean = false;
  cigarettes: number = this.user.cigarettesBeforePerDay;
  money: number = this.user.moneyPerDay;
  dyslexia: boolean = false;
  cursor: boolean = false;
  spacing: boolean = false;

  /**
   * Busca los datos del usuario
   */
  getUserData() {
    this.userService.updateUser().subscribe({
      next: (resp) => {
        this.user = resp;
      },
      error: (resp) => {
        Swal.fire({
          title: 'Error',
          icon: 'error',
          text: resp.error.mensaje,
          confirmButtonColor: '#52ab98',
        });
      },
    });
  }

  showInputs() {
    this.modificando = true;
  }

  /**
   * Resetea los datos del usuario excepto los de registro
   */
  reset() {
    this.userService.reset(this.user).subscribe({
      next: resp =>{
        this.user = resp;
      },
      error: (resp) => {
        Swal.fire({
          title: 'Error',
          icon: 'error',
          text: resp.error.mensaje,
          confirmButtonColor: '#52ab98',
        });
      },
    })
  }

  /**
   * Cambia los datos de exfumador que el usuario estableció al registrarse (dinero al día y cigarros fumados al día)
   */
  changeExSmokerData() {
    this.userService
      .changeExSmokerData(this.user, this.cigarettes, this.money)
      .subscribe({
        next: (resp) => {
          this.user = resp;
        },
        error: (resp) => {
          Swal.fire({
            title: 'Error',
            icon: 'error',
            text: resp.error.mensaje,
            confirmButtonColor: '#52ab98',
          });
        },
      });
    this.modificando = false;
  }
}
