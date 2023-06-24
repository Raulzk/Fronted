import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { JwtRequest } from 'src/app/model/jwtRequest';
import { ClienteService } from 'src/app/service/cliente.service';
import { LoginService } from 'src/app/service/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private loginService: LoginService, private router: Router, private snackBar: MatSnackBar) { }
  username: string = ""
  password: string = ""
  mensaje: string = ""
  ngOnInit(): void {
  }
  login() {
    let request = new JwtRequest();
    request.username = this.username;
    request.password = this.password;
    this.loginService.login(request).subscribe((data: any) => {
      sessionStorage.setItem("token", data.jwttoken);
      this.router.navigate(['pages/autores']);
    }, error => {
      this.mensaje = "Credenciales incorrectas!!!"
      this.snackBar.open(this.mensaje, "Aviso", { duration: 2000 });
    });
  }

  /*form: FormGroup;
  loading = false

  constructor(private fb: FormBuilder, private _snackbar: MatSnackBar, private router: Router) {
    this.form = this.fb.group({
      usuario: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  ngOnInit(): void {

  }

  ingresar(): void {
    const usuario = this.form.value.usuario;
    const password = this.form.value.password;


    console.log(usuario);
    console.log(password)

    if (usuario == "grupo2" && password == "grupo2") {
      this.router.navigate(['ListaTrabajadores'])
      this.loginFalso();
    }
    else {
      this.error();
      this.form.reset();
    }

  }

  error(): void {
    this._snackbar.open("El usuario o contraseña ingresado son inválidos", '', {
      duration: 5000,
      horizontalPosition: 'center',
      verticalPosition: 'bottom'
    })
  }

  loginFalso(): void {
    this.loading = true;
    setTimeout(() => {
      this.loading = false;
    }, 1500);
  }
*/
}
