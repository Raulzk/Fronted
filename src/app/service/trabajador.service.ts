import { HttpClient } from '@angular/common/http';
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
    return this.http.get<Trabajador[]>(this.url);
  }
  insert(trabajador: Trabajador) {
    return this.http.post(this.url, trabajador);
  }
  setList(listaNueva: Trabajador[]) {
    this.listaCambio.next(listaNueva);
  }
  getList() {
    return this.listaCambio.asObservable();
  }
  listId(id: number) {
    return this.http.get<Trabajador>(`${this.url}/${id}`);
  }
  update(aut: Trabajador) {
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
}
