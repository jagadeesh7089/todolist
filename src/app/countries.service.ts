import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {

  constructor( private http:HttpClient) { }

  getallcountries(){
   return   this.http.get('https://restcountries.com/v3.1/all')
  }

  getcountry(cca3:any){
    return this.http.get(`https://restcountries.com/v3.1/alpha/${cca3}`)
  }
}
