import { Component, OnInit } from '@angular/core';
import { CartCountService } from '../cart-count.service';
import { ShowalertService } from '../showalert.service';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.css']
})
export class ConfirmationComponent implements OnInit{

  constructor(private cartService: CartCountService, private alertService: ShowalertService){

  }

  ngOnInit(): void {
    this.alertService.hideAlert();
    this.alertService.hideDeleteAlert();
    this.cartService.resetCartCount();
  }

}
