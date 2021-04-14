import { Component, OnInit } from '@angular/core';
import { Router, RouterModule, Routes } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/servicios/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  public user: Observable<any>=this.authService.auth.user;
  constructor(private route:Router,
    public authService:AuthService) { 
      
    }

  async desloguear(){
    try{
      this.authService.logout();
      this.route.navigate(['login']);
    }
    catch(error){
      console.log(error)
    }
  }
  async ngOnInit() {

  }


}
