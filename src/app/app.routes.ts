import { Routes } from '@angular/router';
import { CountriesComponent } from './countries/countries.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
    {
        path:'',
        component:HomeComponent
    },
      {
        path:'Countries',
        component:CountriesComponent
      },
];
