import { Component, OnInit, Input } from '@angular/core';
import { CartCountService } from '../cart-count.service';
import { FetchDataService } from '../fetch-data.service';
import { GetCurrentProductService } from '../get-current-product.service';
import { Product } from '../types';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  products: Product[] = []

  constructor(
    private fetchData: FetchDataService, 
    private cartService: CartCountService, 
    private currentProductService: GetCurrentProductService){
    
  }

  ngOnInit(): void {
    this.fetchData.getData()
      .subscribe(res => this.products = res);
  }

  addCart(product: Product):void{
    this.cartService.add(product);
    console.log("============ CART =============")
    console.log(this.cartService.getCart())
    console.log("============ CART =============")
  }

  addCurrentProduct(product: Product):void{
    this.currentProductService.addCurrentProduct(product);
  }
}
