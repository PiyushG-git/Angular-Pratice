import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
// import { AuthService } from "../services/auth.service";

@Injectable({
  providedIn: 'root'
})
export class AuthGuard {
  constructor(private router: Router) {}
  username="";


  canActivate(): boolean {
    this.username=localStorage.getItem('username') || '';
    if (this.username=='Piyush') {
      return true;
    } else {
      this.router.navigate(['/Contact']);
      return false;
    }
  }
}