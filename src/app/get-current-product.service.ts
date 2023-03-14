import { Injectable } from '@angular/core';
import { Product } from './types';

@Injectable({
  providedIn: 'root'
})
export class GetCurrentProductService {
  
  currentProduct: Product;
  constructor() { }

  getCurrentProduct(): Product{
    return this.currentProduct;
  }

  addCurrentProduct(product:Product):void{
    this.currentProduct = product
  }
}
