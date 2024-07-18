import { ɵnormalizeQueryParams } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {Router} from '@angular/router';
import {NavigationExtras} from '@angular/router';


@Component({
  selector: 'app-nagivate',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './nagivate.component.html',
  styleUrl: './nagivate.component.css'
})
export class NagivateComponent {
  constructor (private route:Router){}
  
  u_enter='';
  p_enter='';
  username='Piyush';
  password='Gupta';



  onLogin(){
    if((this.u_enter==this.username) && (this.p_enter==this.password)){
    this.route.navigate(['home']);
    alert("SuccessFully Login");
    }

        else if((this.u_enter=='') || (this.p_enter=='')){
          if((this.u_enter=='')&&(this.p_enter=='')){
            alert("Enter Username and Enter Password");
          }
          else if((this.u_enter=='')){
            alert("Enter Username");
          }
          else if(this.p_enter==''){
            alert("Enter Password");
          }


    }
    else if((this.u_enter!=this.username) && (this.p_enter==this.password)){
      alert("Invalid Username . Enter Correct Username");
    }
    else if((this.u_enter==this.username) && (this.p_enter!=this.password)){
      alert("Invalid Password . Enter Correct Password");
    }
    else if((this.u_enter==' ') && (this.p_enter==this.password)){
      alert("Enter Username");
    }
    else{
      alert("Invalid Username and Password");
    }

  }
  //sent only one data using navigation method
  onsent(){
    this.route.navigate(['home'],
      {queryParams:{'user':this.u_enter}}
    );

//sent object using navigation method
  }
  onsetdata(){
    const obj : NavigationExtras = {
      queryParams : {
        'user':this.u_enter,
        'Pass':this.p_enter,
        
      }
    }
    this.route.navigate(['home'],obj);
  }


  //Authguard

  onAuthGaurd(){
    localStorage.setItem('username',this.u_enter);
    this.route.navigate(['home']);
  }

}
