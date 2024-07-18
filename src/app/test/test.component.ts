import { Component } from '@angular/core';
import {FormsModule } from '@angular/forms'
import { EMPTY } from 'rxjs';
import { EMPTY_OBSERVER } from 'rxjs/internal/Subscriber';

@Component({
  selector: 'app-test',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './test.component.html',
  styleUrl: './test.component.css'
})
export class TestComponent {
formheading="FORM";
first_name="FIRST NAME";
first_name_e="";
middle_name="MIDDLE NAME";
middle_name_e="";
last_name="LAST NAME";
last_name_e="";
company_name="COMPANY NAME";
company_name_e="";
contact_name="CONTACT";
contact_name_e="";
d_o_b="DATE OF BIRTH";
d_o_b_e="";
age="AGE";
age_e="";
designation="DESIGNATION";
designation_e="";
gender="GENDER";
gender_e="";
adress="ADDRESS";
flat_no="";
buliding_name="";
landmark="";
city="";
pincode="";
state="";
save="SAVE";
submit="SUBMIT";
cancel="CANCEL";
onsave(){
alert("Hello !!  I am "+ this.first_name_e + this.middle_name_e + this.last_name_e + ".  I am  working in "+ this.company_name_e + "company. " + "   My designation is "+ this.designation_e + ".   My contact no. =  " + this.contact_name_e + "My Date Of Birth is "+ this.d_o_b_e + "My Gender is "+this.gender_e +  "I am leave in "+ this.flat_no +" "+ this. buliding_name +" "+ this.landmark +" "+ this.city +" "+ this.state + "  Pincode = " + this.pincode);
}
onsubmit(){
alert("You are Successsfully Resigeter");
}
oncancel(){

this.first_name_e=' ';

this.middle_name_e="";

this.last_name_e="";

this.company_name_e="";

this.contact_name_e="";

this.d_o_b_e="";

this.age_e="";

this.designation_e="";

this.gender_e="";

this.flat_no="";
this.buliding_name="";
this.landmark="";
this.city="";
this.pincode="";
this.state="";

}

}
