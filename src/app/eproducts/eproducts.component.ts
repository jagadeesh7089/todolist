import { Component } from '@angular/core';
import { EproductsService } from '../eproducts.service';
import { CommonModule } from '@angular/common';
import { EproductComponent } from '../eproduct/eproduct.component';

@Component({
  selector: 'app-eproducts',
  imports: [CommonModule, EproductComponent],
  templateUrl: './eproducts.component.html',
  styleUrl: './eproducts.component.css'
})
export class EproductsComponent {
  products:any;
  constructor( public eproductsservice:EproductsService ){}
  ngOnInit(){
    this.eproductsservice.getalleproducts().subscribe((res)=>{
      console.log(res)
      this.products=res

    })
  }
}
