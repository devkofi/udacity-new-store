import { Component, OnInit, Input } from '@angular/core';
import { ShowalertService } from '../services/showalert.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit{
  @Input() countCart: number = 0;
  
  constructor(private alertService: ShowalertService){

  }

  ngOnInit(){

  }

  getAlert():boolean{
    return this.alertService.getAlert();
  }

  resetAlert(){
    this.alertService.hideAlert()
  }

  getDeleteAlert():boolean{
    return this.alertService.getDeleteAlert();
  }

  resetDeleteAlert(){
    this.alertService.hideDeleteAlert()
  }
}
