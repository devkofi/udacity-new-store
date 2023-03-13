import { Component, Input, Output, OnInit, EventEmitter  } from '@angular/core';
import { Product } from '../types';

@Component({
  selector: 'app-product-display',
  templateUrl: './product-display.component.html',
  styleUrls: ['./product-display.component.css']
})
export class ProductDisplayComponent implements OnInit{
  @Input() product: Product;

  @Output() addToCart = new EventEmitter();

  contructor(){

  }

  ngOnInit(): void {
    
  }

  shout(product: Product):void{
    alert(product.name);
  }

}
