import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './components/login/app.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {UsuarioServiceService} from "./services/loginService/usuario-service.service";
import {HttpClientModule} from "@angular/common/http";
import { StartComponent } from './components/start/start.component';
import { CategoriaComponent } from './components/categoria/categoria.component';
import { MarcaComponent } from './components/marca/marca.component';
import { ProductoComponent } from './components/producto/producto.component';

@NgModule({
  declarations: [
    AppComponent,
    StartComponent,
    CategoriaComponent,
    MarcaComponent,
    ProductoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [UsuarioServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
