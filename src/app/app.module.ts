import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';;
import {MatButtonModule} from '@angular/material/button';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatRadioModule } from '@angular/material/radio';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSelectModule } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';
import { ReactiveFormsModule } from '@angular/forms';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from './components/login/login.component';
import { RegistroEmpleadoComponent } from './components/registro-empleado/registro-empleado.component';
import { RegistroProveedorComponent } from './components/registro-proveedor/registro-proveedor.component';
import { NosotrosComponent } from './components/nosotros/nosotros.component';
import { HeaderLoginComponent } from './components/header-login/header-login.component';
import { CreacionComponent } from './components/creacion/creacion.component';
import { InformesComponent } from './components/informes/informes.component';
import { ListComponent } from './components/creacion/list/list.component';
import { ProductosComponent } from './components/productos/productos.component';
import { CreacionProductosComponent } from './components/productos/creacion-productos/creacion-productos.component';
import { ListarProductosComponent } from './components/productos/listar-productos/listar-productos.component';
import { RolesComponent } from './components/roles/roles.component';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { EditComponent } from './components/creacion/edit/edit.component';
import { VentasComponent } from './components/ventas/ventas.component';
import { RegistroClienteComponent } from './components/registro-cliente/registro-cliente.component';
import { CreacionVentaComponent } from './components/ventas/creacion-venta/creacion-venta.component';
import { ListVentaComponent } from './components/ventas/list-venta/list-venta.component';
import { ListClienteComponent } from './components/registro-cliente/list-cliente/list-cliente.component';
import { EditClienteComponent } from './components/registro-cliente/edit-cliente/edit-cliente.component';
import { ModalCreacionComponent } from './components/modal/modal-creacion/modal-creacion.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    HomeComponent,
    LoginComponent,
    RegistroEmpleadoComponent,
    RegistroProveedorComponent,
    NosotrosComponent,
    HeaderLoginComponent,
    CreacionComponent,
    InformesComponent,
    ListComponent,
    ProductosComponent,
    CreacionProductosComponent,
    ListarProductosComponent,
    RolesComponent,
    EditComponent,
    VentasComponent,
    RegistroClienteComponent,
    CreacionVentaComponent,
    ListVentaComponent,
    ListClienteComponent,
    EditClienteComponent,
    ModalCreacionComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    MatInputModule,
    MatRadioModule,
    MatCheckboxModule,
    MatSelectModule,
    MatButtonModule,
    MatIconModule,
    MatDatepickerModule,
    MatTableModule,
    MatTabsModule,
    NgbModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    NgxDatatableModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
