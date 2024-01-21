import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  prikupiPodatke(){
    const userInput = prompt('Unesite svoj mejl kako biste dobijali najnovije ponude:');
    if (userInput!==null){
         console.log('Rezultat: ', userInput);
    }
  }
 
   slike: string[] = ['../../assets/images/planina1.jpg', '../../assets/images/planina2.jpg', '../../assets/images/skijas.jpg']
   selektovanaSlika: string = '../../assets/images/planina1.jpg'
 
   prikaziSliku(slika:string){
    this.selektovanaSlika = slika;   
   }
 


   

}
