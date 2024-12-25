import { Component } from '@angular/core';
import { ProductsService } from '../products.service';
import { CommonModule } from '@angular/common';
import { ProductComponent } from '../product/product.component';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-products',
  imports: [CommonModule,ProductComponent,RouterLink],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {
  allproducts:any;
  constructor(private prodser:ProductsService){}

  ngOnInit(){
    
    this.prodser.getallproducts().subscribe((res)=>{
      this.allproducts=res
    })
  }
}
