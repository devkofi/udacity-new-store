import { Component, Input, Output, OnInit, EventEmitter  } from '@angular/core';
import { ShowalertService } from '../services/showalert.service';
import { Product } from '../types/types';

@Component({
  selector: 'app-product-display',
  templateUrl: './product-display.component.html',
  styleUrls: ['./product-display.component.css']
})
export class ProductDisplayComponent implements OnInit{
  @Input() product: Product;

  @Output() addToCart = new EventEmitter();

  @Output()addCurrentProduct = new EventEmitter()

  constructor(private showAlertService: ShowalertService){

  }

  ngOnInit(): void {

  }

  showAlert():void{
    this.showAlertService.showAlert()
  }


}
