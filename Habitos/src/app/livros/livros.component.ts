import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-livros',
  templateUrl: './livros.component.html',
  styleUrls: ['./livros.component.css']
})
export class LivrosComponent implements OnInit {

  titulo = 'Livros';

  public livros = [
    {nome: "Meditações"},
    {nome: "A arte de Viver"},
    {nome: "Sobre a Ira"},
  ];

  constructor() { }

  ngOnInit() {
  }

}
