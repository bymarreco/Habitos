import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-livros',
  templateUrl: './livros.component.html',
  styleUrls: ['./livros.component.css']
})
export class LivrosComponent implements OnInit {

  titulo = 'Livros';

  public livros = [
    {id: 1 ,nome: "Meditações", autor: 'Marco Aurélio', nota:10 , paginas: 132 , categoria:'Filosofia'},
    {id: 2 ,nome: "A arte de Viver", autor: 'Epicuro', nota:9 , paginas:35 , categoria:'Filosofia'},
    {id: 3 ,nome: "Sobre a Ira", autor: 'Epicteto', nota:8 , paginas:150 , categoria:'Auto-Ajuda'},
  ];

  constructor() { }

  ngOnInit() {
  }

}
