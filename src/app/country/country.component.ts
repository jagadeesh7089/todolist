import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-country',
  imports: [],
  templateUrl: './country.component.html',
  styleUrl: './country.component.css'
})
export class CountryComponent {
 @ Input() country:any

 
}
