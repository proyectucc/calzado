import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreacionComponent } from './creacion/creacion.component';
import { ListComponent } from './creacion/list/list.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderLoginComponent } from './header-login/header-login.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { InformesComponent } from './informes/informes.component';
import { LoginComponent } from './login/login.component';
import { NosotrosComponent } from './nosotros/nosotros.component';
import { RegistroEmpleadoComponent } from './registro-empleado/registro-empleado.component';
import { RegistroProveedorComponent } from './registro-proveedor/registro-proveedor.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: 'informes', component: InformesComponent },
  { path: 'nosotros', component: NosotrosComponent },
  { path: 'creacion', component: CreacionComponent },
  { path: 'regisprov', component: RegistroProveedorComponent},
  { path: 'regisemp', component: RegistroEmpleadoComponent},
  { path: 'footer', component: FooterComponent},
  { path: 'header', component: HeaderComponent},
  { path: 'list', component: ListComponent},
  { path: 'headerlogin', component: HeaderLoginComponent},
  { path: '**', pathMatch: 'full', redirectTo: 'login' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
