import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreacionComponent } from './components/creacion/creacion.component';
import { ListComponent } from './components/creacion/list/list.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderLoginComponent } from './components/header-login/header-login.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { InformesComponent } from './components/informes/informes.component';
import { LoginComponent } from './components/login/login.component';
import { NosotrosComponent } from './components/nosotros/nosotros.component';
import { CreacionProductosComponent } from './components/productos/creacion-productos/creacion-productos.component';
import { ListarProductosComponent } from './components/productos/listar-productos/listar-productos.component';
import { ProductosComponent } from './components/productos/productos.component';
import { RegistroEmpleadoComponent } from './components/registro-empleado/registro-empleado.component';
import { RegistroProveedorComponent } from './components/registro-proveedor/registro-proveedor.component';
import { RolesComponent } from './components/roles/roles.component';

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
  { path: 'productos', component: ProductosComponent},
  { path: 'listar-productos', component: ListarProductosComponent},
  { path: 'creacion-productos', component: CreacionProductosComponent},
  { path: 'roles', component: RolesComponent},
  { path: '**', pathMatch: 'full', redirectTo: 'login' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
