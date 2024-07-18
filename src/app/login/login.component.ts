import { Component } from '@angular/core';
import {FormsModule} from'@angular/forms';
import { LoginChildComponent } from './login-child/login-child.component';
import { RouterLink } from '@angular/router';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule,LoginChildComponent,RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  constructor (private r:Router){}
  username = '';
  password = '';
  childData='';
onLogin(){
alert('USERNAME = '+this.username +'!! PASSWORD = '+ this.password+' !! Thankyou !!');
}


onRecieveData(event:any){
  this.childData = event;
  
}


onContact(){
this.r.navigate(['Contact']);
}
}
