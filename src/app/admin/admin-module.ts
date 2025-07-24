import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing-module';
import { Perfil } from './components/perfil/perfil';
import { User } from './components/user/user';
import { Role } from './components/role/role';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { TableModule } from 'primeng/table';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProgressBarModule } from 'primeng/progressbar';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { CategoriaComponent } from './components/inventario/categoria-component/categoria-component';
import { ProductoComponent } from './components/inventario/producto-component/producto-component';
import { Inventario } from './components/inventario/inventario';
import { BreadcrumbModule } from 'primeng/breadcrumb';
import { ToolbarModule } from 'primeng/toolbar';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { SelectModule } from 'primeng/select';
import { SucursalComponent } from './components/inventario/sucursal-component/sucursal-component';
import { AlmacenComponent } from './components/inventario/almacen-component/almacen-component';
import { TextareaModule } from 'primeng/textarea';
import { RadioButtonModule } from 'primeng/radiobutton';
import { InputNumberModule } from 'primeng/inputnumber';
import { DatePickerModule } from 'primeng/datepicker';
import { FileUploadModule } from 'primeng/fileupload';


@NgModule({
  declarations: [
    Perfil,
    User,
    Role,
    CategoriaComponent,
    ProductoComponent,
    Inventario,
    SucursalComponent,
    AlmacenComponent,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    ReactiveFormsModule,
    DialogModule,
    ButtonModule,
    InputTextModule,
    TableModule,
    ProgressBarModule,
    ProgressSpinnerModule,
    BreadcrumbModule,
    ToolbarModule,
    IconFieldModule,
    InputIconModule,
    FormsModule,
    SelectModule,
    TextareaModule,
    RadioButtonModule,
    InputNumberModule,
    DatePickerModule,
    FileUploadModule
  ]
})
export class AdminModule { }
