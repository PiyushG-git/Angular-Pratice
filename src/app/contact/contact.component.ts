import { Component } from '@angular/core';
import { ContactChildComponent } from './contact-child/contact-child.component';
import { FormsModule } from '@angular/forms';
import {ServicesService} from '../services.service'
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ContactChildComponent,FormsModule,RouterLink],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  detail = {
    name : '',
    contact : '',
  }
  name_enter='';
  contact_enter='';
  onsent(event:any){
    this.detail.name=this.name_enter;
    this.detail.contact=this.contact_enter;
  }
constructor (private obj: ServicesService) {}
contactdata='';
contactdata2='';
  onsave(){
this.obj.setData(this.contactdata);
this.obj.setData(this.contactdata2);
  }

  onhome(){
    
  }



}
