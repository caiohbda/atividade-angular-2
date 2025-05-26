import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

interface User {
  nome: string;
  idade: string;
  status: boolean;
}

@Component({
  selector: 'app-tabela',
  imports: [CommonModule],
  templateUrl: './tabela.component.html',
  styleUrls: ['./tabela.component.scss']
})
export class TabelaComponent {

  color = "red";

  usuarioComDetalhes: string | null = null;

  ListaUser: User[] = [
    {
      nome: "Caua",
      idade: "12",
      status: true
    },
    {
      nome: "Pedro",
      idade: "13",
      status: false
    },
    {
      nome: "Gabriel",
      idade: "14",
      status: true
    }
  ];

  mostrarDetalhes(nome: string) {
    if (this.usuarioComDetalhes === nome) {
      this.usuarioComDetalhes = null;
    } else {
      this.usuarioComDetalhes = nome; 
    }
  }

}
