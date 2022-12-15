import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeDogsComponent } from './components/home-dogs/home-dogs.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { HomeCarComponent } from './components/home-car/home-car.component';


@NgModule({
  declarations: [
    HomeDogsComponent,
    HomeCarComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule
  ]
})
export class HomeModule { }
