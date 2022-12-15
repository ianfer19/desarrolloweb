import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeDogsComponent } from '../home/components/home-dogs/home-dogs.component';
import { AuthLoginComponent } from './components/auth-login/auth-login.component';

const routes: Routes = [
  {
    path:'',
    component: AuthLoginComponent
  },{
    path:'home',
    component: HomeDogsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
