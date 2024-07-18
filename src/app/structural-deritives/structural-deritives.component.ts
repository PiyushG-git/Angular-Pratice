import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-structural-deritives',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './structural-deritives.component.html',
  styleUrl: './structural-deritives.component.css'
})
export class StructuralDeritivesComponent {

  UserNameEnter='';
  PasswordEnter='';
  UserName='Piyush'
  Password='Gupta'


  LoginPage=true;
  undobutton=false;
  hidebutton=false;

  onHide(){
    this.LoginPage=false;
    this.undobutton=true;
    this.hidebutton=false;
  }

  onUndo(){
    this.LoginPage=true;
    this.hidebutton=true;
    this.undobutton=false;

  }

  onLogin(){
    if((this.UserNameEnter == this.UserName) && (this.PasswordEnter == this.Password)){
      this.undobutton=true;
      this.LoginPage=false;
    }
    else{
      alert("Invalid Username/Password");
    }
  }

}
