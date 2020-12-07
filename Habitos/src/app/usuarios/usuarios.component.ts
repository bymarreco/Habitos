import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {

  titulo = 'Usuarios';

  public usuarios = [
    {nome: "Lucas"},
    {nome: "Daniel"},
    {nome: "Chaves"},
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
