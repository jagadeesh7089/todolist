import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CountriesService } from '../countries.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-countrydetails',
  imports: [CommonModule],
  templateUrl: './countrydetails.component.html',
  styleUrl: './countrydetails.component.css'
})
export class CountrydetailsComponent {
  countrydata:any
  constructor(public pr:ActivatedRoute, public countryservices:CountriesService){}

  ngOnInit(){
    this.pr.params.subscribe((res)=>{
      console.log(res['code'])
      this.countryservices.getcountry(res['code']).subscribe((res)=>{
          this.countrydata=res
          console.log(res)
      })

    })
  }
}
