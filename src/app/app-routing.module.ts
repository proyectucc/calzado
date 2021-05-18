import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreacionComponent } from './components/creacion/creacion.component';
import { EditComponent } from './components/creacion/edit/edit.component';
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
import { CreacionVentaComponent } from './components/ventas/creacion-venta/creacion-venta.component';
import { VentasComponent } from './components/ventas/ventas.component';
import { RegistroClienteComponent } from './components/registro-cliente/registro-cliente.component';
import { ListClienteComponent} from './components/registro-cliente/list-cliente/list-cliente.component';
import { ListVentaComponent } from './components/ventas/list-venta/list-venta.component';
import { EditClienteComponent } from './components/registro-cliente/edit-cliente/edit-cliente.component';

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
  { path: 'listado-usuarios', component: ListComponent},
  { path: 'headerlogin', component: HeaderLoginComponent},
  { path: 'productos', component: ProductosComponent},
  { path: 'listar-productos', component: ListarProductosComponent},
  { path: 'creacion-productos', component: CreacionProductosComponent},
  { path: 'edit-empl/:id', component: EditComponent},
  { path: 'roles', component: RolesComponent},
  { path: 'moduloventas', component: VentasComponent},
  { path: 'regisclien', component: RegistroClienteComponent},
  { path: 'creacionventa', component: CreacionVentaComponent},
  { path: 'listado-clientes', component: ListClienteComponent},
  { path: 'listado-ventas', component: ListVentaComponent},
  { path: 'edit-client/:id', component: EditClienteComponent},
  { path: '**', pathMatch: 'full', redirectTo: 'login' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
