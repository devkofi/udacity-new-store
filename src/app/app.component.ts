import { Component, OnInit } from '@angular/core';
import { FetchDataService } from './fetch-data.service';
import { Product } from './types';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'udacity-new-store';
  products:Product[]=[];
  cart:Product[]=[];

  constructor(private fetchData: FetchDataService){

  }

  ngOnInit(): void {
    this.fetchData.getData()
      .subscribe(res => this.products = res);
  }

  addCart(product: Product):void{
    this.cart.push(product);
  }

  countItems():number{
    return this.cart.length;
  }
  
}
