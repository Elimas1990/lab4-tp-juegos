import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-restart',
  templateUrl: './restart.component.html',
  styleUrls: ['./restart.component.css']
})
export class RestartComponent implements OnInit {

  constructor() {
    console.log('restart')
   }

  ngOnInit(): void {
  }

}