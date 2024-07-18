import { Component,Input,Output,EventEmitter } from '@angular/core';
import {FormsModule} from'@angular/forms';

@Component({
  selector: 'app-home-child',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './home-child.component.html',
  styleUrl: './home-child.component.css'
})
export class HomeChildComponent {
  //Current Adrress to  Permenant Address
  @Input() SameasPermanentaddress = {
    Permanent_flatno : '',
    Permanent_Building : '',
    Permanent_Landmark : '',
    Permanent_City : '',
    Permanent_Pincode : '',
    Permanent_State : '',
  }
Permanent_flatno='';
Permanent_Building='';
Permanent_Landmark='';
Permanent_City='';
Permanent_Pincode='';
Permanent_State='';
// Permanent_flatno=' ';
// Permanent_Building=' ';
// Permanent_Landmark=' ';
// Permanent_City=' ';
// Permanent_Pincode=' ';
// Permanent_State=' ';

// onEnter(){
// this.Permanent_flatno=this.Permanent_flatno1;
// this.Permanent_Building=this.Permanent_Building1;
// this.Permanent_Landmark=this.Permanent_Landmark1;
// this.Permanent_City=this.Permanent_City1;
// this.Permanent_Pincode=this.Permanent_Pincode1;
// this.Permanent_State=this.Permanent_State1;
// }

//Current Address to Permanent Address
@Output() SameasCurrentAddress = new EventEmitter();
// sentCurrentAddress = {
//   Permanent_flatno_sent : '',
//   Permanent_Building_sent : '',
//   Permanent_Landmark_sent : '',
//   Permanent_City_sent : '',
//   Permanent_Pincode_sent : '',
//   Permanent_State_sent : '',
// }

onEnter(event:any){
  const sentCurrentAddress =this.SameasPermanentaddress;
  this.SameasCurrentAddress.emit(sentCurrentAddress)
}
}

