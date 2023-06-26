import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Cliente } from '../model/cliente';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const base_url = environment.base
@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  private url = `${base_url}/clientes`
  private confirmarEliminacion = new Subject<Boolean>()
  private listaCambio = new Subject<Cliente[]>()
  constructor(private http: HttpClient) { }
  list() {
    let token = sessionStorage.getItem("token");
    return this.http.get<Cliente[]>(this.url, { headers: new HttpHeaders().set('Authorization', `Bearer ${token}`).set('Content-Type', 'application/json') });
  }
  insert(author: Cliente) {
    let token = sessionStorage.getItem("token");
    return this.http.post(this.url, author, { headers: new HttpHeaders().set('Authorization', `Bearer ${token}`).set('Content-Type', 'application/json') });
  }

  setList(listaNueva: Cliente[]) {
    this.listaCambio.next(listaNueva);
  }
  getList() {
    return this.listaCambio.asObservable();
  }
  listId(id: number) {
    let token = sessionStorage.getItem("token");
    return this.http.get<Cliente>(`${this.url}/${id}`, {
      headers: new HttpHeaders().set('Authorization', `Bearer ${token}`).set('Content-Type', 'application/json')
    });
  }
  update(aut: Cliente) {
    let token = sessionStorage.getItem("token");
    return this.http.put(this.url, aut, { headers: new HttpHeaders().set('Authorization', `Bearer ${token}`).set('Content-Type', 'application/json') });
  }
  //http- HttpClientModule: get-post-put-delete, hacer un cuadro comparativo

  delete(id: number) {
    let token = sessionStorage.getItem("token");
    return this.http.delete(`${this.url}/${id}`, {
      headers: new HttpHeaders().set('Authorization', `Bearer ${token}`).set('Content-Type', 'application/json')
    })
  }

  getConfirmDelete() {
    return this.confirmarEliminacion.asObservable();
  }
  setConfirmDelete(estado: Boolean) {
    this.confirmarEliminacion.next(estado);
  }

  // validar  
  validateCliente(correo: string, dni: string) {
    return this.http.get<Cliente>(this.url + "/correo/" + correo + "/dni/" + dni);
  }
  editUser(id: number, cliente: Cliente) {
    return this.http.put<Cliente>(this.url + "/" + id.toString(), cliente);
  }
  validateRepeatUsername(correo: string) {
    return this.http.get<Cliente>(this.url + "/correo/" + correo);
  }
  changePassword(id: number, cliente: Cliente) {
    return this.http.put<Cliente>(this.url + "/" + id.toString() + "/dni", cliente);
  }
  changeImage(id: number, cliente: Cliente) {
    return this.http.put<Cliente>(this.url + "/" + id.toString() + "/image", cliente);
  }
  changeCont(id: number, cliente: Cliente) {
    return this.http.put<Cliente>(this.url + "/" + id.toString() + "/cont", cliente);
  }
}
