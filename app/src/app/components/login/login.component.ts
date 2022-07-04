import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {Title} from "@angular/platform-browser";
import {Router} from "@angular/router";
import {UsuarioServiceService} from "../../services/loginService/usuario-service.service";
import {Usuario} from "../../entity/Usuario";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form: FormGroup;
  mensajeInicio = 'Verificación de Credenciales';

  constructor(public fb: FormBuilder, private service: UsuarioServiceService, private titleService: Title, private router: Router) {
    this.form = this.fb.group({
      usuario: [''],
      clave: [''],
    });
  }

  ngOnInit(): void {
    this.titleService.setTitle("Iniciar Sesión")
  }

  loginForm() {
    const formData: any = new FormData();
    formData.append('usuario', this.form.get('usuario')?.value);
    formData.append('clave', this.form.get('clave')?.value);
    this.service.login(formData).subscribe(() => {
      this.mensajeInicio = 'Credenciales Correctas';
      this.router.navigate(['/start']);
    })
  }
}
