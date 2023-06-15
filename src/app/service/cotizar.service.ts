import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Cotizar } from '../model/cotizar';
import { HttpClient } from '@angular/common/http';
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
    return this.http.get<Cotizar[]>(this.url);
  }
  insert(cotizar: Cotizar) {
    return this.http.post(this.url, cotizar);
  }

  setList(listaNueva: Cotizar[]) {
    this.listaCambio.next(listaNueva);
  }
  getList() {
    return this.listaCambio.asObservable();
  }
  listId(id: number) {
    return this.http.get<Cotizar>(`${this.url}/${id}`);
  }
  update(aut: Cotizar) {
    return this.http.put(this.url, aut);
  }
  delete(id: number) {
    return this.http.delete(`${this.url}/${id}`)
  }

  getConfirmDelete() {
    return this.confirmarEliminacion.asObservable();
  }
  setConfirmDelete(estado: Boolean) {
    this.confirmarEliminacion.next(estado);
  }
}
