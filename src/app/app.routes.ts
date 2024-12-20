import { Routes } from '@angular/router';
import { CountriesComponent } from './countries/countries.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CountrydetailsComponent } from './countrydetails/countrydetails.component';

export const routes: Routes = [
    {
        path:'',
        component:HomeComponent,
        children:[
          {
            path:'Countries',
            component:CountriesComponent,
            children:[
              {
                path:'countriesdetails/:code',
                component:CountrydetailsComponent
              }
            ]
           
          },
          
         
        ]
    },
      
];
