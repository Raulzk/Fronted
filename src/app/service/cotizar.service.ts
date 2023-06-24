import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Cotizar } from '../model/cotizar';
import { HttpClient, HttpHeaders } from '@angular/common/http';
const base_url = environment.base
@Injectable({
  providedIn: 'root'
})
export class CotizarService {
  private url = `${base_url}/cotizars`
  private confirmarEliminacion = new Subject<Boolean>()
  private listaCambio = new Subject<Cotizar[]>()
  constructor(private http: HttpClient) { }
  list() {
    let token = sessionStorage.getItem("token");
    return this.http.get<Cotizar[]>(this.url, { headers: new HttpHeaders().set('Authorization', `Bearer ${token}`).set('Content-Type', 'application/json') });
  }
  insert(cotizar: Cotizar) {
    let token = sessionStorage.getItem("token");
    return this.http.post(this.url, cotizar, { headers: new HttpHeaders().set('Authorization', `Bearer ${token}`).set('Content-Type', 'application/json') });
  }

  setList(listaNueva: Cotizar[]) {
    this.listaCambio.next(listaNueva);
  }
  getList() {
    return this.listaCambio.asObservable();
  }
  listId(id: number) {
    let token = sessionStorage.getItem("token");
    return this.http.get<Cotizar>(`${this.url, { headers: new HttpHeaders().set('Authorization', `Bearer ${token}`).set('Content-Type', 'application/json') }}/${id}`);
  }
  update(aut: Cotizar) {
    let token = sessionStorage.getItem("token");
    return this.http.put(this.url, aut, { headers: new HttpHeaders().set('Authorization', `Bearer ${token}`).set('Content-Type', 'application/json') });
  }
  delete(id: number) {
    let token = sessionStorage.getItem("token");
    return this.http.delete(`${this.url, { headers: new HttpHeaders().set('Authorization', `Bearer ${token}`).set('Content-Type', 'application/json') }}/${id}`)
  }

  getConfirmDelete() {
    return this.confirmarEliminacion.asObservable();
  }
  setConfirmDelete(estado: Boolean) {
    this.confirmarEliminacion.next(estado);
  }
}
