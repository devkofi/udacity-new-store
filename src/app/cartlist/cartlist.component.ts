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
}
