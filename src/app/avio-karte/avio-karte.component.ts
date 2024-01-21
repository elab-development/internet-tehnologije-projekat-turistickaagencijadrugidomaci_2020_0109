import { Component, Input } from '@angular/core';
import { Aviokarte } from './avio-karte/aviokarte';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-avio-karte',
  templateUrl: './avio-karte.component.html',
  styleUrl: './avio-karte.component.scss'
})
export class AvioKarteComponent {
 //uobicajeni nacin u Angularu da prosledimo podatke iz app (roditeljske komp)
  //u child komponentu
  //! - property ce biti inicijalizovani i nece biti null ili undefined
//aviokarteData: Aviokarte[] =[]
@Input() aviokarta!:Aviokarte
 //prihvatanje podataka od roditelja:
@Input() aviokarteData: Aviokarte[]=[]; // input dekorator dobija child komponenta
//kako bi pokupila podatke iz roditeljske komponente
constructor(private route:ActivatedRoute){}
//ispis podataka
pagedAviokarteList: Aviokarte[]=[]; // aviokarte za jedan page
pageSize: number = 3; //zelimo da imamo 3 aviokarte po stranici

currentPage: number = 1;

ngOnInit(): void {
  this.route.queryParams.subscribe((params)=>{
    if(params['aviokarteData']){
        this.aviokarteData = JSON.parse(params['aviokarteData']);
        //this.pageChanged(1);
    }
    
  });
  
  //cim je ovo ispisan, on je primio te podatke
  console.log('Aviokarte data is initialized with data:', this.aviokarteData) //to sto je ovaj dobio od home komponente, to se i ispisuje
   //this.aviokarteData = this.aviokarteData;

}
}
