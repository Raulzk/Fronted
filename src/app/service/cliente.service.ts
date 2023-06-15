import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Cliente } from '../model/cliente';
import { HttpClient } from '@angular/common/http';

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
    return this.http.get<Cliente[]>(this.url);
  }
  insert(author: Cliente) {
    return this.http.post(this.url, author);
  }

  setList(listaNueva: Cliente[]) {
    this.listaCambio.next(listaNueva);
  }
  getList() {
    return this.listaCambio.asObservable();
  }
  listId(id: number) {
    return this.http.get<Cliente>(`${this.url}/${id}`);
  }
  update(aut: Cliente) {
    return this.http.put(this.url, aut);
  }
  //http- HttpClientModule: get-post-put-delete, hacer un cuadro comparativo

  delete(id: number) {
    return this.http.delete(`${this.url}/${id}`)
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
