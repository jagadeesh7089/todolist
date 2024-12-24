import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor( private http:HttpClient) { }

  getallproducts(){
    return this.http.get('http://localhost:4000/products')
  }
}
