import { Component } from '@angular/core';

@Component({
  selector: 'app-aranzman',
  templateUrl: './aranzman.component.html',
  styleUrl: './aranzman.component.scss'
})
export class AranzmanComponent {
  funkcija():void{
    const res= alert("Kako biste uspesno zakazali aranžman, posetite karticu Naručivanje!")
  }

 funkcija_novo():void{
  const poruka = prompt("Unesite svoju mejl adresu ukoliko zelite da dobijete informacije o novim anranžmanima.")
  if(poruka!=null){
    console.log(poruka)
  }

 }

 isClicked:boolean = false;
 promenaBoje():void{
  this.isClicked = !this.isClicked //inicijalno je false, kada se klikne, prebacuje se na true
 }

 isClicked1:boolean = false;
 promenaBoje1():void{
  this.isClicked1 = !this.isClicked1 //inicijalno je false, kada se klikne, prebacuje se na true
 }

 isClicked2:boolean = false;
 promenaBoje2():void{
  this.isClicked2 = !this.isClicked2 //inicijalno je false, kada se klikne, prebacuje se na true
 }



isClicked3:boolean=false;
promenaBoje3():void{
 this.isClicked3=!this.isClicked3
}


//ngStyle atributska direktiva.

naglasenStilSignal:boolean = false;

textStyle:any = {

  'color':'black',
  'font-size':'16px',
  'font-weight':'normal'

};

naglaseniStilTeksta():void{
  this.naglasenStilSignal = !this.naglasenStilSignal;

  this.textStyle = this.naglasenStilSignal ? {
    'color': 'blue',
    'font-size': '20px',
    'font-weight': 'bold'
  } : {
    'color': 'red',
    'font-size': '16px',
    'font-weight': 'normal'

  };


}





}
