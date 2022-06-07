import { Component } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter, Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  public subscriber!: Subscription;


  registeredUserRoutes: string[] = [
    'groupArea',
    'userArea',
    'settings',
    'friends',
    'meetUps',
    'achievements',
    'penalties',
    'rankingCommunity',
    'commentsCommunity',
  ];
  userNotRegisteredRoutes: string[] = [
    'login',
    'register',
    'home',
    'contactUs',
    '',
  ];
  administratorRoutes: string[] = [
    'administratorDashboard',
    'showUsers',
    'incidences',
  ];
  menuIndicator: string = ''; //atributo usado como @Input para mostrar un menú u otro. Los valores serán 'administrator', 'registeredUser', 'userNotRegistered'
  routerAux: boolean = false; //atributo para mostrar el router auxiliar en un div estructurado en dos columnas, dejando el lado izquierdo para el submenú
  routeRef = this.route;
  /**
   * Comprueba todos los cambios que se producen en la ruta-
   * De esta manera podemos mostrar un menú y otro enviando el valor indicado del atributo "registrado".
   * @param router
   */
  constructor(private router: Router, private route: ActivatedRoute) {
    this.subscriber = this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe((event) => {
        this.checkRoute();
      });

  }

  ngOnDestroy() {
    this.subscriber?.unsubscribe();
  }

  /**
   * Método para comprobar las rutas y asignar el valor al atributo que determina el tipo de menú que se mostrará.
   */
  checkRoute() {
    let route = this.router.url.split('?')[0].split('/').pop(); //consigo la última parte de la url
    
    if (route != undefined) {
      //es necesario hacer esta comprobación para que no nos diga que puede ser undefined
      if (this.administratorRoutes.includes(route)) {
        this.menuIndicator = 'administrator';
      } else if (this.userNotRegisteredRoutes.includes(route)) {
        this.menuIndicator = 'userNotRegistered';
      } else {
        this.menuIndicator = 'registeredUser';
      }
    }

    if (route?.includes('settings')) {
      this.routerAux = true;
    } else {
      this.routerAux = false;
    }
  }

  /**
   * Método temporal para arreglar las rutas tras pasar por el router outlet auxiliar
   * @param route
   * @returns route corregida sin el añadido del router auxiliar --> (router:ruta)
   */
  checkAUxRouter(route: string | undefined) {
    let routeResult = '';
    if (route != undefined) {
      if (
        !route.includes('/settings(setting:') &&
        route.includes('(setting:')
      ) {
        routeResult = route.split('(')[0];
      }
    }
    return routeResult;
  }
}
