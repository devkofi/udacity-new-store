import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { GetCurrentProductService } from '../services/get-current-product.service';
import { Product } from '../types/types';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit{
  product: Product;

  @Output() addToCart = new EventEmitter();

  constructor(private getProduct: GetCurrentProductService){

  }

  ngOnInit(): void {
    this.product = this.getProduct.getCurrentProduct()
  }
}
