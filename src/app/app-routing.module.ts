import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AvioKarteComponent } from './avio-karte/avio-karte.component';

const routes: Routes = [
  {path:'login', component:LoginComponent},
  {path: 'home', component: HomeComponent,}, 
  {path:'aviokarte', component:AvioKarteComponent},
  { path: '', redirectTo: '/login', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
