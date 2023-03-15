import { Component, OnInit, Input } from '@angular/core';
import { CartCountService } from '../services/cart-count.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit{
  cartItems:number = 0;
  fullName: string = '';
  phoneNumber: string = '';
  payment: string = '';
  address: string = '';
  changing: boolean = false;
  totalPrice: string = '';

  
  constructor(private cartCount: CartCountService){

  }

  ngOnInit(): void {
    let cost = 0
    this.cartItems = this.cartCount.getCartCount()
    this.cartCount.getCart().forEach(item => {
      cost += item.price;
    });
    this.totalPrice = cost.toFixed(2)
  }

  onSubmit():void{
    this.cartCount.resetCartCount();
  }

  onChange(event: Event){
    console.log(event);
    this.changing = true;
  }

  getTotalCost():string{
    return this.totalPrice;
  }



}
