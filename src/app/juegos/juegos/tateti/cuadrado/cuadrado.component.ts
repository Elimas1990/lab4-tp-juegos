import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-cuadrado',
  templateUrl: './cuadrado.component.html',
  styleUrls: ['./cuadrado.component.css']
})
export class CuadradoComponent implements OnInit {
  @Input() value:'X' | 'O';
  constructor() { }

  ngOnInit(): void {
  }

}
