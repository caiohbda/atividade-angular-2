import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormComponent } from "../form/form.component";
import { FormsModule } from '@angular/forms';

interface User {
  nome: string;
  idade: string;
  status: boolean;
}

@Component({
  selector: 'app-tabela',
  standalone: true,
  imports: [CommonModule, FormComponent, FormsModule],
  templateUrl: './tabela.component.html',
  styleUrls: ['./tabela.component.scss']
})
export class TabelaComponent {
  color = "red";
  usuarioComDetalhes: string | null = null;

  ListaUser: User[] = [];

  mostrarDetalhes(nome: string) {
    if (this.usuarioComDetalhes === nome) {
      this.usuarioComDetalhes = null;
    } else {
      this.usuarioComDetalhes = nome;
    }
  }

  adicionarUsuario(user: User) {
    if (user.nome && user.idade) {
      this.ListaUser.push(user);
    }
  }
  
  atualizarStatus(index: number) {
    this.ListaUser[index].status = !this.ListaUser[index].status;
  }

  removerUsuario(index: number) {
    this.ListaUser.splice(index, 1);
  }
}