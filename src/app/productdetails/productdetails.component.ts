import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-productdetails',
  imports: [],
  templateUrl: './productdetails.component.html',
  styleUrl: './productdetails.component.css'
})
export class ProductdetailsComponent {
  product:any

    constructor(private pr:ActivatedRoute){}

    ngOnInit(){
      this.pr.queryParams.subscribe((res)=>{
          console.log(res)
          this.product=res
      })
    }
}
