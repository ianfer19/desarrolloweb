import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminCarritoComponent } from './components/admin-carrito/admin-carrito.component';
import { AdminDogsComponent } from './components/admin-dogs/admin-dogs.component';


const routes: Routes = [
  {
    path:'',
    component: AdminDogsComponent
  },{
    path:'carrito',
    component: AdminCarritoComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
