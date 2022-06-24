import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorPageComponent } from './error-page/error-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { ShopingListPageComponent } from './shoping-list-page/shoping-list-page.component';

const routes: Routes = [
  {path:'login',component:LoginPageComponent},
  {path:'shopinglist',component:ShopingListPageComponent},
  {path:'**',component:ErrorPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
