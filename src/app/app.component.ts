import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { EproductsComponent } from './eproducts/eproducts.component';

@Component({
  selector: 'app-root',
  imports: [RouterLink,RouterOutlet,],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'todolist';


}
