import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JwtRequest } from '../model/jwtRequest';
import { JwtHelperService } from '@auth0/angular-jwt';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  login(request: JwtRequest) {
    return this.http.post("http://localhost:8080/authenticate", request);
  }
  verificar() {
    let token = sessionStorage.getItem("token");
    return token != null;

  }
  showRole() {
    let token = sessionStorage.getItem("token");
    if (token !== null) {
      const helper = new JwtHelperService();
      const decodedToken = helper.decodeToken(token);
      return decodedToken?.role;
    } else {
      // Manejar el caso cuando no hay un token presente
      return null; // O cualquier otro valor predeterminado o acción
    }
  }
}
