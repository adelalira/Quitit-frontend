import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Commentario, User } from 'src/app/public/interfaces/interfaces';
import { AccesibilityService } from 'src/app/shared/services/accesibility.service';
import Swal from 'sweetalert2';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-comments-community',
  templateUrl: './comments-community.component.html',
  styleUrls: ['./comments-community.component.css'],
})
export class CommentsCommunityComponent implements OnInit {
  constructor(private userService: UserService, private router: Router, private accesibilityService: AccesibilityService) {}

  @ViewChild('scrollBottom')
  private scrollBottom!: ElementRef;
  user: User = JSON.parse(<string>localStorage.getItem('user'));
  comentarios: Commentario[] = [];
  text: string = '';
  dyslexia: boolean = false;
  cursor: boolean = false;
  spacing: boolean = false;

  ngOnInit(): void {
    this.mostrarComentariosComunidad();
    setInterval(() => this.mostrarComentariosComunidad(), 10000);
    this.scrollToBottom();
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

  ngAfterViewChecked() {
    this.scrollToBottom();
  }

  /**
   * Nos envia al compoenente de incidencias
   * @param id
   */
  enviarIncidencia(id: number) {
    this.router.navigateByUrl(`/commentsCommunity/${id}/incidence`);
  }

  /**
   * Muestra todos los comentarios de la comunidad
   */
  mostrarComentariosComunidad() {
    this.userService.buscarComentariosComunidad().subscribe({
      next: (resp) => {
        this.comentarios = resp;
      },
      error: (e) => {
        Swal.fire({
          title: 'Error',
          icon: 'error',
          text: 'There are no services available at this time',
          confirmButtonColor: '##52ab98',
        });
      },
    });
  }

  /**
   * Crea un comentario en el chat de la comunidad
   */
  crearComentario() {
    if (this.text == null || this.text.trim() == '') {
      Swal.fire({
        title: 'Error',
        icon: 'error',
        text: 'You must enter the comment before submitting it',
        confirmButtonColor: '#52ab98',
      });
    } else {
      this.userService.crearComentario(this.text).subscribe({
        next: (resp) => {
          this.comentarios.push(resp);
          this.text = '';
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
  }

  /**
   * Scroll del chat
   */
  scrollToBottom(): void {
    try {
      this.scrollBottom.nativeElement.scrollTop =
        this.scrollBottom.nativeElement.scrollHeight;
    } catch (err) {}
  }
}
