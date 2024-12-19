import { Routes } from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { EproductsComponent } from './eproducts/eproducts.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
    
    { 
        path: '', 
        component:HomeComponent,
        children:[
            {
                path:'products',
                component:ProductsComponent
            },
            {
                path:'eproducts',
                component:EproductsComponent
            }
        ]
    }
];
