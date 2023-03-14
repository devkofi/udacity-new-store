import { Component, OnInit, Input } from '@angular/core';
import { CartCountService } from '../cart-count.service';
import { Product } from '../types';

@Component({
  selector: 'app-cartlist',
  templateUrl: './cartlist.component.html',
  styleUrls: ['./cartlist.component.css']
})
export class CartlistComponent implements OnInit{

  carts: Product[];  
  constructor(private cartService: CartCountService){

  }

  ngOnInit(): void {
    this.carts = this.cartService.getCart()
  }

  remove(product: Product):void{
    const index = this.carts.indexOf(product, 0);
    if (index > -1) {
      this.carts.splice(index, 1);
    }
  }
}
