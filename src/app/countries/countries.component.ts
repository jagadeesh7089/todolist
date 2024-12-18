import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { CountriesService } from '../countries.service';
import { CommonModule } from '@angular/common';
import { CountryComponent } from '../country/country.component';

@Component({
  selector: 'app-countries',
  imports: [CommonModule,CountryComponent],
  templateUrl: './countries.component.html',
  styleUrl: './countries.component.css'
})
export class CountriesComponent {
   countries:any;
   constructor(public  countryservices:CountriesService){}
  
   ngOnInit(){
    this.countryservices.getallcountries().subscribe((res:any)=>{
      // console.log(res)
      this.countries=res
      console.log(this.countries)
   })

   

   }


}
