import { Component, OnInit } from '@angular/core';
import { CartCountService } from './cart-count.service';
import { FetchDataService } from './fetch-data.service';
import { Product } from './types';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'udacity-new-store';
  constructor(private cartCount: CartCountService){

  }

  ngOnInit(): void {
    
  }

  countItems():number{
    return this.cartCount.getCartCount();
  }

  
}
