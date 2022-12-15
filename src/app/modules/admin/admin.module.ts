import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminDogsComponent } from './components/admin-dogs/admin-dogs.component';
import { AdminCarritoComponent } from './components/admin-carrito/admin-carrito.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    AdminDogsComponent,
    AdminCarritoComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    SharedModule
  ]
})
export class AdminModule { }
