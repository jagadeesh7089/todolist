import { Component } from '@angular/core';
import { ProductComponent } from '../product/product.component';
import { ProductsService } from '../products.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-products',
  imports: [ProductComponent,CommonModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {

  products:any
  constructor( public product:ProductsService){}

  ngOnInit(){
    this.product.getallproducts().subscribe((res)=>{
      console.log(res)
      this.products=res
    })
  }

}
