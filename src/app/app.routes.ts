import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from './auth.guard';
import { CountriesComponent } from './countries/countries.component';
import { ProductsComponent } from './products/products.component';


export const routes: Routes = [
    {
        path:'',
        redirectTo:'login',
        pathMatch:'full'
    },
    {
        path:'login',
        component:LoginComponent
    },
    {
        path:'home',
        component:HomeComponent,
        canActivate:[AuthGuard],
        children:[
            {
                path:'countries',
                component:CountriesComponent
            },
            {
                path:'products',
                component:ProductsComponent
            }
        ]
    }


];
