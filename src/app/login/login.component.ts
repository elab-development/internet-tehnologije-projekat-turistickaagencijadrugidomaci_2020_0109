import { Component } from '@angular/core';
import {Router} from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  username: string ='';
  password: string ='';

  constructor(private router:Router){}

  login(): void {
    if(this.username === 'user' && this.password==='password'){
      this.router.navigate(['/home']);
    }else{
      alert('Invalid credentials. Please try again!')
    }
  }
}
