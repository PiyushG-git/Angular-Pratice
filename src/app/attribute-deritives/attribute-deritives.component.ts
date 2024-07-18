import { CommonModule } from '@angular/common';
import { FactoryTarget } from '@angular/compiler';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-attribute-deritives',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './attribute-deritives.component.html',
  styleUrl: './attribute-deritives.component.css'
})
export class AttributeDeritivesComponent {
user ='InActive'
UserNameEnter='';
PasswordEnter='';


HomePage=true;
LoginPage=false;

  UserName='Piyush'
  Password='Gupta'

  onsignin(){
    this.HomePage=false;
    this.LoginPage=true;

  }


onLogin(){
  if((this.UserNameEnter == this.UserName) && (this.PasswordEnter == this.Password)){
    this.user='Active';
    this.HomePage=true;
    this.LoginPage=false;
    alert("Welcome" + this.UserName + this.Password );
  }
  else{
    alert("Invaild Username and Password");
  }
}

Logout(){
  this.user="InActive";
  alert("You are SuccessFully Logout");
}

}
