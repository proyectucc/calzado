import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { HttpClientModule } from '@angular/common/http';
<<<<<<< HEAD
import { FormsModule } from '@angular/forms';
=======
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
>>>>>>> a10aff708f28cc5ac704be656126cb5711c77a4e

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatRadioModule } from '@angular/material/radio';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSelectModule } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';
<<<<<<< HEAD
import { ReactiveFormsModule } from '@angular/forms';
=======
>>>>>>> a10aff708f28cc5ac704be656126cb5711c77a4e
import { MatDatepickerModule } from '@angular/material/datepicker';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
<<<<<<< HEAD
=======
import {MatDialogModule} from '@angular/material/dialog';
>>>>>>> a10aff708f28cc5ac704be656126cb5711c77a4e
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
<<<<<<< HEAD
=======
import { ModalCreacionComponent } from './components/modal/modal-creacion/modal-creacion.component';
import { ListUserComponent } from './components/usuarios/list-user/list-user.component';
import { CreateUserComponent } from './components/usuarios/create-user/create-user.component';
import { EditUserComponent } from './components/usuarios/edit-user/edit-user.component';
import { MatButtonModule } from '@angular/material/button';
import { ModalComponent } from './components/modal/modal/modal.component';
>>>>>>> a10aff708f28cc5ac704be656126cb5711c77a4e

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
<<<<<<< HEAD
=======
    ModalCreacionComponent,
    ListUserComponent,
    CreateUserComponent,
    EditUserComponent
>>>>>>> a10aff708f28cc5ac704be656126cb5711c77a4e
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    MatInputModule,
    MatRadioModule,
    MatCheckboxModule,
    MatSelectModule,
    MatIconModule,
    MatDatepickerModule,
    MatTableModule,
    MatTabsModule,
    NgbModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
<<<<<<< HEAD
    NgxDatatableModule
  ],
=======
    NgxDatatableModule,
    MatDialogModule,
    MatButtonModule
  ],
  entryComponents: [ ModalComponent ],
>>>>>>> a10aff708f28cc5ac704be656126cb5711c77a4e
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
