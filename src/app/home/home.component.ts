import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Aviokarte } from '../avio-karte/avio-karte/aviokarte';

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
 
   aviokarteData: Aviokarte[] =[];

   ngOnInit(): void {
       this.aviokarteData=[
         {title:'Let za San Francisko',
         description:'San Francisko - grad u severnoj Kaliforniji, poznat je i kao jedan od najslikovitijih i najliberalnijih gradova SAD-a.',
         image:'../../assets/images/sanfrancisko.jpg',
         price:'720 eur',
         supplies:22},
         {title:'Let za Cikago',
           description:'Čikago - grad nebodera i treći po veličini grad u Americi, poznat je i kao “grad vetrova” zbog jakih vetrova koji duvaju sa jezera Mičigen',
           image:'../../assets/images/cikago.jpg',
           price:'567 eur',
           supplies:19},
         {title:'Let za Los Andjeles',
           description:'Los Anđeles - drugi po veličini grad Sjedinjenih Američkih Država, svakako je najpoznatiji po Holivudu ali i kao grad novca, filma, glamura i poznatih stanovnika',
           image:'../../assets/images/la.jpg',
           price:'731 eur',
           supplies:7},
         {title:'Let za Majami',
           description:'Majami - smešten u jugoistočnom delu američke savezne države Florida, jedan je od najpopularnijih gradova u Americi.',
           image:'../../assets/images/majami.jpg',
           price:'681 eur',
           supplies:6},
         {title:'Let za Njujork',
           description:'Njujork- grad u kojem ćete imati osećaj kao da se nalazite u centru sveta. Smešten na istočnoj obali SAD-a, poznat je kao grad koji nikada ne spava.',
           image:'../../assets/images/njujork.jpg',
           price:'518 eur',
           supplies:5},
         {title:'Let za Dubai',
           description:'Dubai – jedan od najbogatijih gradova na svetu, prestonica je istoimenog Emirata smeštenog na obalama Persijskog zaliva. ',
           image:'../../assets/images/dubai.jpg',
           price:'343 eur',
           supplies:9}]
   
   
   
   
     console.log('HomeComponent is initialized with data:', this.aviokarteData) //to sto je ovaj dobio od home komponente, to se i ispisuje
     
   
   }
   
   


    showAvioKarte = false;
   
    constructor(private router: Router) {}

    onAvioKarteClick(): void {
  // this.showAvioKarte=true;
  //this.showAvioKarte = !this.showAvioKarte
 
  //console.log('Data in the HomeComponent', this.aviokarteData);
  //this.router.navigate(['/aviokarte']) 

  this.router.navigate(['/aviokarte'], {
    queryParams: { aviokarteData: JSON.stringify(this.aviokarteData) },
  });
  
  }

}
