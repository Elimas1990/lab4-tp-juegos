import { Component, OnInit } from '@angular/core';
import { Router, RouterModule, Routes } from '@angular/router';
import { AuthService } from 'src/app/servicios/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  public usuario:any;
  constructor(private route:Router,
    public authService:AuthService) { 
      this.usuario=this.authService.usuario
      
    }
  linkear(){
      this.authService.usuario="pepa"
      this.usuario=this.authService.usuario
      this.route.navigate(['login'])
  }
  ngOnInit(): void {
  }

}
