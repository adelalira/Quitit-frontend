import { Component, OnInit } from '@angular/core';
import { Penalty, User } from 'src/app/public/interfaces/interfaces';
import Swal from 'sweetalert2';
import { UserService } from '../services/user.service';
import { AccesibilityService } from 'src/app/shared/services/accesibility.service';

@Component({
  selector: 'app-penalties',
  templateUrl: './penalties.component.html',
  styleUrls: ['./penalties.component.css'],
})
export class PenaltiesComponent implements OnInit {
  penalties: Penalty[] = [];
  ruta: string = '../../../assets/penalties/';
  user: User = JSON.parse(<string>localStorage.getItem('user'));
  blur: boolean = false;
  dyslexia: boolean = false;
  cursor: boolean = false;
  spacing: boolean = false;

  constructor(private userService: UserService, private accesibilityService: AccesibilityService) {}

  ngOnInit(): void {
    this.cargarPenalizaciones();
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
   * Recupera todas las penalizaciones que existen en la base de datos
   */
  cargarPenalizaciones() {
    this.userService.buscarPenalizaciones().subscribe({
      next: (resp) => {
        this.penalties = resp;
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
   * Set the percentage of progress for every achievement.
   * @param objective
   * @param type
   * @returns percentage to show
   */
  cargaPorcentaje(objective: number, type: string) {
    let percentage: number;
    if (type == 'days') {
      percentage = (100 * this.user.smokingDays) / objective;
    } else {
      percentage = (100 * this.user.cigarettesSmoked) / objective;
    }
    this.blur = percentage >= 100 ? false : true;
    return percentage.toString();
  }
}
