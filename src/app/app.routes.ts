import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { NagivateComponent } from './nagivate/nagivate.component';
import { AuthGuard } from './shared/authguard.guard';

export const routes: Routes = [
    // {path:'' ,component:LoginComponent},
    {path:'' ,component:NagivateComponent},
    {path:'home' , component:HomeComponent, canActivate:[AuthGuard]},
    {path:'Contact' , component:ContactComponent},
];
