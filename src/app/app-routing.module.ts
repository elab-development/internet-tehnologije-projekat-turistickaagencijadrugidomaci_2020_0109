import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AvioKarteComponent } from './avio-karte/avio-karte.component';
import { AranzmanComponent } from './aranzman/aranzman.component';
import { BookiranjeComponent } from './bookiranje/bookiranje.component';

const routes: Routes = [
  {path:'login', component:LoginComponent},
  {path: 'home', component: HomeComponent,}, 
  {path:'aviokarte', component:AvioKarteComponent},
  {path: 'aranzman', component: AranzmanComponent },  // Add this line
  {path:'booking', component:BookiranjeComponent},
  { path: '', redirectTo: '/login', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
