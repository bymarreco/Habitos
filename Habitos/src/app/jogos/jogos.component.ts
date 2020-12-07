import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-jogos',
  templateUrl: './jogos.component.html',
  styleUrls: ['./jogos.component.css']
})
export class JogosComponent implements OnInit {

  titulo = 'Jogos';

  public jogos = [
    {nome: "Assassins Creed"},
    {nome: "Dark Souls"},
    {nome: "Gears 5"},
  ];

  constructor() { }

  ngOnInit() {
  }

}
