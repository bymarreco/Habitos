import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-jogos',
  templateUrl: './jogos.component.html',
  styleUrls: ['./jogos.component.css']
})
export class JogosComponent implements OnInit {

  titulo = 'Jogos';

  public jogos = [
    {id: 1 ,nome: "Assassins Creed", nota:10 , tempo:32 , plataforma:"PC" },
    {id: 2 ,nome: "Dark Souls", nota:8 , tempo:15 , plataforma:"XBOX One" },
    {id: 3 ,nome: "Gears 5", nota:9 , tempo:25 , plataforma:"PC" },
  ];

  constructor() { }

  ngOnInit() {
  }

}
