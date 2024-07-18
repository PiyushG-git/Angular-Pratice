import { Component } from '@angular/core';
import { HomeChildComponent } from './home-child/home-child.component';
import {FormsModule} from'@angular/forms';
import {ActivatedRoute} from '@angular/router'


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HomeChildComponent,FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
constructor (private ac:ActivatedRoute){}

Current_flatno='';
Current_Building='';
Current_Landmark='';
Current_City='';
Current_Pincode='';
Current_State='';

CurrentAddress = {
  Current_flatno_sent:'',
  Current_Building_sent:'',
  Current_Landmark_sent:'',
  Current_City_sent:'',
  Current_Pincode_sent:'',
  Current_State_sent:'',
}

onSent(event:any){
  this.CurrentAddress = {
Current_flatno_sent: this.Current_flatno,
Current_Building_sent: this.Current_Building,
Current_Landmark_sent: this.Current_Landmark,
Current_City_sent: this.Current_City,
Current_Pincode_sent: this.Current_Pincode,
Current_State_sent: this.Current_State,
  }
}
onRecieveData(event:any){
  this.Current_flatno = event.Current_flatno_sent;
  this.Current_Building=event.Current_Building_sent;
  this.Current_Landmark=event.Current_Landmark_sent;
  this.Current_City=event.Current_City_sent;
  this.Current_Pincode=event.Current_Pincode_sent;
  this.Current_State=event.Current_Pincode_sent;
  
}
onfetch(){
  this.ac.queryParams.subscribe(res =>{
    alert(res['user']);
    this.Current_flatno=res['user'];
    this.Current_Landmark=res['Pass'];
  })
  
}

}
