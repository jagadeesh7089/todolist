import { Routes } from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { EproductsComponent } from './eproducts/eproducts.component';
import { AppComponent } from './app.component';

export const routes: Routes = [
    {
        path:'',
        component:AppComponent
    },

    {
        path:'products',
        component:ProductsComponent
    },
    {
        path:'eproducts',
        component:EproductsComponent
    },
];
