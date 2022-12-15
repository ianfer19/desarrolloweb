import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeCarComponent } from './components/home-car/home-car.component';
import { HomeDogsComponent } from './components/home-dogs/home-dogs.component';

const routes: Routes = [
  {
    path:'',
    component: HomeDogsComponent
  },
  {
    path:'carrito',
    component: HomeCarComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
