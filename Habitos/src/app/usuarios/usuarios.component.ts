import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {

  public titulo = 'Usuarios';
  public usuarioSelecionado: string;

  public usuarios = [
    {id:1 ,nome: "Lucas", sobrenome: 'Rech'},
    {id:2 ,nome: "Daniel", sobrenome: 'teste'},
    {id:3 ,nome: "Chaves", sobrenome: 'mario'},
  ];

  constructor() { }

  ngOnInit(): void {
  }

  usuarioSelect(usuario: any){
    this.usuarioSelecionado = usuario.nome;
  }

  voltar(){
    this.usuarioSelecionado = '';
  }
}
