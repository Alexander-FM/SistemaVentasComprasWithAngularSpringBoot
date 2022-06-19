import {Component, OnInit} from '@angular/core';
import {Title} from "@angular/platform-browser";
import {FormBuilder, FormGroup} from "@angular/forms";
import {UsuarioServiceService} from "../../services/loginService/usuario-service.service";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  form: FormGroup;
  constructor(public fb: FormBuilder, private service: UsuarioServiceService, private titleService:Title) {
    this.form = this.fb.group({
      usuario: [''],
      clave: [''],
    });
  }

  ngOnInit(): void {
    this.titleService.setTitle("Iniciar Sesión")
  }

  loginForm(){
    var formData: any = new FormData();
    formData.append('usuario', this.form.get('usuario')?.value);
    formData.append('clave', this.form.get('clave')?.value);
    this.service.login(formData).subscribe(data => {
      alert("Crendenciales Correctas");
    })
  }
}
