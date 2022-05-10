import { Component, OnInit } from '@angular/core';
import{Piloto}from 'src/app/models/piloto.ts/piloto'

@Component({
  selector: 'app-cardpilotos',
  templateUrl: './cardpilotos.component.html',
  styleUrls: ['./card.pilotos.component.css']
})
export class CardpilotoComponent implements OnInit {

  public pilotos:Piloto[]=[
    
  ]

  constructor() { }

  ngOnInit(): void {
  }

}