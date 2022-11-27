import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdministracionRoutingModule } from './administracion-routing.module';
import { FormsModule, ReactiveFormsModule} from '@angular/forms'

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AdministracionRoutingModule,
    FormsModule, 
    ReactiveFormsModule
  ]
})
export class AdministracionModule { }
