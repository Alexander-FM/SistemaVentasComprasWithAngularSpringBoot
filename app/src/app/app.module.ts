import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {UsuarioServiceService} from "./services/loginService/usuario-service.service";
import {HttpClientModule} from "@angular/common/http";
import { StartComponent } from './components/start/start.component';
import { CategoriaComponent } from './components/categoria/categoria.component';
import { MarcaComponent } from './components/marca/marca.component';
import { ProductoComponent } from './components/producto/producto.component';
import { AppRoutingModule} from "./app-routing.module";
import { NavbarComponent } from './components/start/navbar/navbar.component';
import { AsideComponent } from './components/start/aside/aside.component';
import { FooterComponent } from './components/start/footer/footer.component';
import { LoginComponent } from './components/login/login.component';
import {AppComponent} from "./app.component";

@NgModule({
  declarations: [
    AppComponent,
    StartComponent,
    CategoriaComponent,
    MarcaComponent,
    ProductoComponent,
    NavbarComponent,
    AsideComponent,
    FooterComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [UsuarioServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
