import { Injectable } from '@angular/core';
import { Aviokarte } from './avio-karte/aviokarte';

@Injectable({
  providedIn: 'root'
})
export class KupovinaKarataService {

  constructor() { }

  private chartItems: Aviokarte[] = []

  addToChart(item:any):void{
    this.chartItems.push(item);
  }
  
  removeFromCart(index:number):void{
    if(index>=0 && index<this.chartItems.length){
      this.chartItems.splice(index,1);
    }
  
  }
  
  getChartItems(): Aviokarte[]{
    return this.chartItems;
  }
  
  getTotalPrice(){
    let totalPrice=0;
    for (let i=0; i<this.chartItems.length; i++){
      totalPrice +=  parseInt(this.chartItems[i].price,10);
      
    }
    return totalPrice
  }
  
  
  
  
  
  
  


}
