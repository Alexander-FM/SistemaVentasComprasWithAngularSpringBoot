import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {StartComponent} from "./components/start/start.component";
import {LoginComponent} from "./components/login/login.component";

/** Estas son las rutas*/
const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'start', component: StartComponent},
  {path: '**', pathMatch: 'full', redirectTo: 'login'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
