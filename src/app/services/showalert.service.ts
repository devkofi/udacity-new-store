import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ShowalertService {
  successAlert = false;
  deleteAlert = false;
  constructor() { }

  getAlert():boolean{
    return this.successAlert;
  }

  getDeleteAlert():boolean{
    return this.deleteAlert;
  }

  showAlert(){
    this.successAlert = true;
  }

  hideAlert(){
    this.successAlert = false;
  }

  showDeleteAlert(){
    this.deleteAlert = true;
  }

  hideDeleteAlert(){
    this.deleteAlert = false;
  }


}
