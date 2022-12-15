import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'admin',
    loadChildren:()=>import(`./modules/admin/admin.module`).then(m => m.AdminModule)
  }, {
    path:'auth',
    loadChildren:()=>import(`./modules/auth/auth.module`).then(m => m.AuthModule)
  },  {
    path:'home',
    loadChildren:()=>import(`./modules/home/home.module`).then(m => m.HomeModule)
  },{
    path:'',
    loadChildren:()=>import(`./modules/auth/auth.module`).then(m => m.AuthModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
