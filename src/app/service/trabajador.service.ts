import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Trabajador } from '../model/trabajador';
import { Subject } from 'rxjs';


const base_url = environment.base
@Injectable({
  providedIn: 'root'
})
export class TrabajadorService {
  private url = `${base_url}/trabajadores`
  private listaCambio = new Subject<Trabajador[]>()
  private confirmarEliminacion = new Subject<Boolean>()
  constructor(private http: HttpClient) { }
  list() {
    let token = sessionStorage.getItem("token");
    return this.http.get<Trabajador[]>(this.url, { headers: new HttpHeaders().set('Authorization', `Bearer ${token}`).set('Content-Type', 'application/json') });
  }
  insert(trabajador: Trabajador) {
    let token = sessionStorage.getItem("token");
    return this.http.post(this.url, trabajador, { headers: new HttpHeaders().set('Authorization', `Bearer ${token}`).set('Content-Type', 'application/json') });
  }
  setList(listaNueva: Trabajador[]) {
    this.listaCambio.next(listaNueva);
  }
  getList() {
    return this.listaCambio.asObservable();
  }
  listId(id: number) {
    let token = sessionStorage.getItem("token");
    return this.http.get<Trabajador>(`${this.url}/${id}`, {
      headers: new HttpHeaders().set('Authorization', `Bearer ${token}`).set('Content-Type', 'application/json')
    });
  }
  update(aut: Trabajador) {
    let token = sessionStorage.getItem("token");
    return this.http.put(this.url, aut, { headers: new HttpHeaders().set('Authorization', `Bearer ${token}`).set('Content-Type', 'application/json') });
  }
  //http- HttpClientModule: get-post-put-delete, hacer un cuadro comparativo

  delete(id: number) {
    let token = sessionStorage.getItem("token");
    return this.http.delete(`${this.url}/${id}`, {
      headers: new HttpHeaders().set('Authorization', `Bearer ${token}`).set('Content-Type', 'application/json')
    });
  }

  getConfirmDelete() {
    return this.confirmarEliminacion.asObservable();
  }
  setConfirmDelete(estado: Boolean) {
    this.confirmarEliminacion.next(estado);
  }
}
