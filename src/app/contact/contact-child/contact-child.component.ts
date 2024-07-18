import { Component,Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {ServicesService} from '../../services.service'

@Component({
  selector: 'app-contact-child',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './contact-child.component.html',
  styleUrl: './contact-child.component.css'
})
export class ContactChildComponent {
@Input() parentdetail = {
  name : '',
  contact : '',
}
contact_childdata='';
constructor (private ss : ServicesService) {}
onrecive(){
  this.ss.data$.subscribe(res =>{
    alert(res);
    this.contact_childdata=res;
  })
}

}
