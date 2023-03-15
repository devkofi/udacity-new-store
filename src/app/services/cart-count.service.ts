import { Injectable } from '@angular/core';
import { Product } from '../types/types';

@Injectable({
  providedIn: 'root'
})
export class CartCountService {
  cart: Product[] = [];
  constructor() { }

 
  getCartCount():number{
    return this.cart.length;
  }

  add(product: Product){
    this.cart.push(product);
    console.log(this.cart)
  }

  getCart(): Product[]{
    return this.cart;
  }

  resetCartCount():void{
    this.cart = [];
  }

  totalCost():number{
    let cost = 0;

    this.cart.forEach((item)=>{
      cost += item.price;
    })

    return cost;
  }

}
