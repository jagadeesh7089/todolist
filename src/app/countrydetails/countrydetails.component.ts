import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CountriesService } from '../countries.service';

@Component({
  selector: 'app-countrydetails',
  imports: [],
  templateUrl: './countrydetails.component.html',
  styleUrl: './countrydetails.component.css'
})
export class CountrydetailsComponent {
  country:any;
   constructor( private pr:ActivatedRoute, private countser:CountriesService){}

   ngOnInit(){
     this.pr.params.subscribe((res)=>{
        console.log(res)

        this.countser.getcountry(res['cca3']).subscribe((res)=>{

            this.country=res
            console.log(this.country)
        })



     })
   }

}
