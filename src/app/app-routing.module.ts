import { HomePageComponent } from './home-page/home-page.component';
import { CreateAccountComponent } from './create-account/create-account.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', component: HomePageComponent},
  {path: 'create-account', component: CreateAccountComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
