import { Component, OnInit, Input } from '@angular/core';
import { CartCountService } from '../services/cart-count.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit{
  cartTotal:number = 0;
  fullName: string = '';
  phoneNumber: string = '';
  payment: string = '';
  address: string = '';
  changing: boolean = false;
  totalPrice: number = 0;

  
  constructor(private cartCount: CartCountService){

  }

  ngOnInit(): void {
    this.cartTotal = this.cartCount.getCartCount()
    this.cartCount.getCart().forEach(item => {
      this.totalPrice += item.price;
    });
  }

  onSubmit():void{
    this.cartCount.resetCartCount();
  }

  onChange(event: Event){
    console.log(event);
    this.changing = true;
  }



}
