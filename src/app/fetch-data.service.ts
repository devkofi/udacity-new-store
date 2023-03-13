import { Injectable, OnInit } from '@angular/core';
import { Product } from './types';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class FetchDataService {
  constructor(private http: HttpClient) { }

  getData():Observable<Product[]> {
    return this.http.get<Product[]>('./assets/data.json');
  }

  // getData(){
  //   fetch('./assets/data.json').then(res => res.json())
  //   .then(jsonData => {
  //     products = jsonData;
  //   });
  // }
}
