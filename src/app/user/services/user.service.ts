import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import {
  Achievement,
  Commentario,
  Incidence,
  MeetUP,
  ScheduledMessage,
  User,
} from 'src/app/public/interfaces/interfaces';
import {} from '../../public/interfaces/interfaces';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private baseUrl: string = environment.baseUrl;

  constructor(private http: HttpClient) {}

  /**
   * Actualiza los datos del usuario
   * @returns datos del usuario
   */
  updateUser() {
    const url = `${this.baseUrl}/user`;
    let token = JSON.parse(<string>localStorage.getItem('token'));
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.get<User>(url, { headers });
  }

  /**
   * Recupera los comentarios de la comunidad
   * @returns lista de comentarios de la comunidad
   */
  buscarComentariosComunidad() {
    const url = `${this.baseUrl}/commentsCommunity`;

    const opcion = new HttpHeaders();
    opcion.append('Access-Control-Allow-Origin', '*');

    return this.http.get<Commentario[]>(url, { headers: opcion });
  }

  /**
   * Crea un nuevo comentario
   * @param text
   * @returns
   */
  crearComentario(text: String) {
    const url = `${this.baseUrl}/commentsCommunity`;
    const body = {
      text: text,
    };
    let token = JSON.parse(<string>localStorage.getItem('token'));
    const opcion = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    opcion.append('Access-Control-Allow-Origin', '*');
    return this.http.post<Commentario>(url, body, { headers: opcion });
  }

  /**
   * Crea una incidencia de un comentario
   * @param subject
   * @param text
   * @returns
   */
  sendIncidence(subject: String, text: String) {
    const url = `${this.baseUrl}/incidence`;
    const body = {
      text: text,
      subject: subject,
    };
    let token = JSON.parse(<string>localStorage.getItem('token'));
    const opcion = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    opcion.append('Access-Control-Allow-Origin', '*');
    return this.http.post<Incidence>(url, body, { headers: opcion });
  }

  /**
   * Asocia un comentario a una incidencia
   * @param idIncidencia
   * @param comentario
   * @returns
   */
  addComentario(idIncidencia: number, comentario: Commentario) {
    const url = `${this.baseUrl}/incidence/${idIncidencia}`;
    let token = JSON.parse(<string>localStorage.getItem('token'));
    const opcion = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    opcion.append('Access-Control-Allow-Origin', '*');
    return this.http.put<Commentario>(url, comentario, { headers: opcion });
  }

  /**
   * Recupera un comentario por su id
   * @param idC
   * @returns Un comentario
   */
  buscarComentariosPorId(idC: string) {
    const url = `${this.baseUrl}/commentsCommunity/${idC}`;

    const opcion = new HttpHeaders();
    opcion.append('Access-Control-Allow-Origin', '*');

    return this.http.get<Commentario>(url, { headers: opcion });
  }

  /**
   * Recupera todos los usuarios registrados
   * @returns lista de todos los usuarios
   */
  mostrarUsuarios() {
    const url = `${this.baseUrl}/users`;
    let token = JSON.parse(<string>localStorage.getItem('token'));
    const opcion = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    opcion.append('Access-Control-Allow-Origin', '*');

    return this.http.get<User[]>(url, { headers: opcion });
  }

  /**
   * Recupera todos los logros existentes
   * @returns lista de logros
   */
  buscarLogros() {
    const url = `${this.baseUrl}/achievement`;

    let token = JSON.parse(<string>localStorage.getItem('token'));
    const opcion = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    opcion.append('Access-Control-Allow-Origin', '*');

    return this.http.get<Achievement[]>(url, { headers: opcion });
  }

  /**
   * Recupera todas las penalizaciones existentes
   * @returns lista de penalizaciones
   */
  buscarPenalizaciones() {
    const url = `${this.baseUrl}/penalty`;

    let token = JSON.parse(<string>localStorage.getItem('token'));
    const opcion = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    opcion.append('Access-Control-Allow-Origin', '*');

    return this.http.get<Achievement[]>(url, { headers: opcion });
  }

  /**
   * Recupera todos los meet ups existentes a partir de la fecha de hoy
   * @returns lista de meet ups
   */
  buscarMeetUps() {
    const url = `${this.baseUrl}/meetUps`;

    let token = JSON.parse(<string>localStorage.getItem('token'));
    const opcion = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    opcion.append('Access-Control-Allow-Origin', '*');

    return this.http.get<MeetUP[]>(url, { headers: opcion });
  }

  /**
   * Actualiza la información del usuario cuando este fuma.
   * @param cigarettes
   * @returns ususario con su info actualizada
   */
  userSmoked(cigarettes: number, user: User) {
    const url = `${this.baseUrl}/user?cigarettes=${cigarettes}`;
    let token = JSON.parse(<string>localStorage.getItem('token'));
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    let envioVacio = null;
    return this.http.put<User>(url, envioVacio, { headers });
  }

  /**
   * Modifica los datos iniciales del usuario (dinero que gastaba como fumador y cigarros que fumaba al día)
   * @param user
   * @param cigarettes
   * @param money
   * @returns usuario con los datos modificados
   */
  changeExSmokerData(user: User, cigarettes: number, money: number) {
    const url = `${this.baseUrl}/user?money=${money}&cigarettes=${cigarettes}`;
    let token = JSON.parse(<string>localStorage.getItem('token'));
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    let envioVacio = null;
    return this.http.put<User>(url, envioVacio, { headers });
  }

  /**
   * Modifica la imagen de usuario pasándole la url que genera Cloudinary
   * @param user
   * @param urlImage
   * @returns usuario con la imagen guardada
   */
  modifyUserProfileImage(user: User, urlImage: string) {
    const url = `${this.baseUrl}/user?urlImage=${urlImage}`;
    let token = JSON.parse(<string>localStorage.getItem('token'));
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    let envioVacio = null;
    return this.http.put<User>(url, envioVacio, { headers });
  }

  /**
   * Resetea los valores del usuario para que pueda volver a empezar con su tracking para dejar de fumar
   * @param user
   * @returns user con valores a 0 excepto los iniciales de registro
   */
  reset(user: User) {
    const url = `${this.baseUrl}/user?reset=${true}`;
    let token = JSON.parse(<string>localStorage.getItem('token'));
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    let envioVacio = null;
    return this.http.put<User>(url, envioVacio, { headers });
  }

  /**
   *
   * @param busqueda
   * @returns el usuario que hemos indicado si existiese en la base de datos
   */
     buscarUsuariosCoincidentes(busqueda:String){
      const url = `${this.baseUrl}/users?username=${busqueda}`;
      let token = JSON.parse(<string>localStorage.getItem('token'));
      const opcion = new HttpHeaders().set('Authorization', `Bearer ${token}`);
      opcion.append('Access-Control-Allow-Origin', '*');
      return this.http.get<User[]>(url, { headers: opcion });
    }

    /**
     * Busca usuarios por por username que sean amigos del usuario logueado
     * @param busqueda
     * @returns array de usuarios
     */
    searchFriends(busqueda:String){
      const url = `${this.baseUrl}/users?friend=${busqueda}`;
      let token = JSON.parse(<string>localStorage.getItem('token'));
      const opcion = new HttpHeaders().set('Authorization', `Bearer ${token}`);
      opcion.append('Access-Control-Allow-Origin', '*');
      return this.http.get<User[]>(url, { headers: opcion });
    }

    /**
     * Busca entre los amigos del usuario a aquellos que coincidan con la búsqueda
     * introducida y no se hayan incluido ya en el grupo.
     * @param busqueda
     * @param group
     * @returns array de usuarios
     */
    searchFriendsForGroup(busqueda:String, group:User[]){
      const url = `${this.baseUrl}/users?friend=${busqueda}`;
      let token = JSON.parse(<string>localStorage.getItem('token'));
      const opcion = new HttpHeaders().set('Authorization', `Bearer ${token}`);
      opcion.append('Access-Control-Allow-Origin', '*');
      return this.http.post<User[]>(url, group, { headers: opcion });
    }

    /**
     * Busca a los amigos del usuario que no se hayan incluido en el grupo
     * Se usa para añadir un miembro más a un grupo
     * @param busqueda
     * @param idGroup
     * @returns lista de users
     */
    searchFriendsNotInGroup(busqueda:string, idGroup: number){
      const url = `${this.baseUrl}/users?friend=${busqueda}?group=${idGroup}`;
      let token = JSON.parse(<string>localStorage.getItem('token'));
      const opcion = new HttpHeaders().set('Authorization', `Bearer ${token}`);
      opcion.append('Access-Control-Allow-Origin', '*');
      return this.http.get<User[]>(url, { headers: opcion });
    }

  /**
   * Cambia la propiedad de message del usuario a false una vez que este ya ha leído el mensaje mandado el lunes
   * @param user
   * @param message
   * @returns usuario seteado
   */
  changeMessageProperty(user: User, message: Boolean) {
    const url = `${this.baseUrl}/user?message=${message}`;
    let token = JSON.parse(<string>localStorage.getItem('token'));
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    let envioVacio = null;
    return this.http.put<User>(url, envioVacio, { headers });
  }

  /**
   * Consigue el mensaje programado para el usuario.
   * @returns mensaje programado
   */
  loadScheduledMessage(){
    const url = `${this.baseUrl}/scheduledMessage`;
    let token = JSON.parse(<string>localStorage.getItem('token'));
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.get<ScheduledMessage>(url, { headers });
  }

  /**
   * Agrega el usuario seleccionado a los amigos del usuario que lo selecciona
   * @param user
   * @returns
   */
    addFriend(user: User){
      const url = `${this.baseUrl}/user`;
      let envioVacio = null;
      let token = JSON.parse(<string>localStorage.getItem('token'));
      const opcion = new HttpHeaders().set('Authorization', `Bearer ${token}`);
      opcion.append('Access-Control-Allow-Origin', '*');
      return this.http.post<User>(url, envioVacio, { headers: opcion });
    }

    /**
     *
     * @returns devuelve una lsita con todos los amigos del usuario
     */
    getAllFriends(){
      const url = `${this.baseUrl}/friend`;
      let token = JSON.parse(<string>localStorage.getItem('token'));
      const opcion = new HttpHeaders().set('Authorization', `Bearer ${token}`);
      opcion.append('Access-Control-Allow-Origin', '*');
      return this.http.get<User[]>(url, { headers: opcion });
    }

    /**
     * Indica que asistira al meet up
     * @param id 
     * @returns  meet up
     */
    asistenciaMeetUp(id:number){
      let verdadero = true;
      const url = `${this.baseUrl}/meetUp/${id}?choice=${verdadero}`;
      let envioVacio = null;
      let token = JSON.parse(<string>localStorage.getItem('token'));
      const opcion = new HttpHeaders().set('Authorization', `Bearer ${token}`);
      opcion.append('Access-Control-Allow-Origin', '*');
      return this.http.post<MeetUP>(url, envioVacio, { headers: opcion });

    }

  /**
   * Indica que no asistira al meet up
   * @param id 
   * @returns 
   */
    noAsistenciaMeetUp(id:number){
      let falso = false;
      const url = `${this.baseUrl}/meetUp/${id}?choice=${falso}`;
      let envioVacio = null;
      let token = JSON.parse(<string>localStorage.getItem('token'));
      const opcion = new HttpHeaders().set('Authorization', `Bearer ${token}`);
      opcion.append('Access-Control-Allow-Origin', '*');
      return this.http.post<MeetUP>(url, envioVacio, { headers: opcion });
    }
    /**
     * Crea un nuevo meet up
     * @param title 
     * @param description 
     * @param date 
     * @param type 
     * @param place 
     * @returns  meet up
     */
    createMeetUp(title:string, description:string, date:string, type:string, place:string){
      const url = `${this.baseUrl}/meetUp`;

      let body = {
        title:title,
        description:description,
        date:date,
        type:type,
        place:place
      }

      let token = JSON.parse(<string>localStorage.getItem('token'));
      const opcion = new HttpHeaders().set('Authorization', `Bearer ${token}`);
      opcion.append('Access-Control-Allow-Origin', '*');
      return this.http.post<MeetUP>(url, body, { headers: opcion });
    }

    /**
     * Cambia la contraseña 
     * @param password 
     * @returns 
     */
    changePass(password:string){
      const url = `${this.baseUrl}/user`;
      let body = {
        password:password
      }
      let token = JSON.parse(<string>localStorage.getItem('token'));
      const opcion = new HttpHeaders().set('Authorization', `Bearer ${token}`);
      opcion.append('Access-Control-Allow-Origin', '*');
      return this.http.put<User>(url, body, { headers: opcion });
    }

    /**
     * 
     * @returns Lista de los meet ups a los que asiste el usuario
     */
    getAllMeetUpsUserAttendance(){
      let verdadero = true;
      const url = `${this.baseUrl}/meetUp?choice=${verdadero}`;
      let token = JSON.parse(<string>localStorage.getItem('token'));
      const opcion = new HttpHeaders().set('Authorization', `Bearer ${token}`);
      opcion.append('Access-Control-Allow-Origin', '*');
      return this.http.get<MeetUP[]>(url, { headers: opcion });

    }

    /**
     * 
     * @returns Lista de los meet ups a los que no asiste en usuario
     */
    getAllMeetUpsUserNotAttendance(){
      let falso = false;
      const url = `${this.baseUrl}/meetUp?choice=${falso}`;
      let token = JSON.parse(<string>localStorage.getItem('token'));
      const opcion = new HttpHeaders().set('Authorization', `Bearer ${token}`);
      opcion.append('Access-Control-Allow-Origin', '*');
      return this.http.get<MeetUP[]>(url, { headers: opcion });
    }

}

