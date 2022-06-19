import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class UsuarioServiceService {

  constructor(private http: HttpClient) { }

  url = 'http://localhost:9090/api/usuario/login';

  /**
   * Iniciar Sesión, Envía los parámetros de usuario y clave al servicio
   * @param formData
   */
  login(formData: FormData){
    return this.http.post(this.url, formData);
  }
}
