import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EproductsService {

  constructor( public http:HttpClient) { }
  
  getalleproducts(){
   return  this.http.get('http://localhost:4000/products')
  }
}
