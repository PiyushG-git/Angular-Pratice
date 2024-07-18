import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { TestComponent } from './test/test.component';
import { ContactComponent } from './contact/contact.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { StructuralDeritivesComponent } from './structural-deritives/structural-deritives.component';
import { AttributeDeritivesComponent } from './attribute-deritives/attribute-deritives.component';
import { NagivateComponent } from './nagivate/nagivate.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,LoginComponent,HomeComponent,TestComponent,ContactComponent,AboutusComponent,StructuralDeritivesComponent,AttributeDeritivesComponent,NagivateComponent
    
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'basic';
  formtitle="username";
  firstname="PIYUSH";
}
