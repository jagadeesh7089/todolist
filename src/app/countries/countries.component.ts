import { Component } from '@angular/core';
import { CountriesService } from '../countries.service';
import { CountryComponent } from '../country/country.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-countries',
  imports: [CountryComponent,CommonModule],
  templateUrl: './countries.component.html',
  styleUrl: './countries.component.css'
})
export class CountriesComponent {
  allcountries:any;
    constructor( private countryser:CountriesService){}

    ngOnInit(){
      this.countryser.getallcountries().subscribe((res)=>{
        console.log(res)
        this.allcountries=res
      })
    }
}
