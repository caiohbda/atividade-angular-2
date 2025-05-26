import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

interface User {
  nome: string;
  idade: string;
  status: boolean;
}

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent {
  @Output() adicionar = new EventEmitter<User>();

  novoUsuario: User = {
    nome: '',
    idade: '',
    status: true,
  };

  adicionarUsuario() {
    if (this.novoUsuario.nome && this.novoUsuario.idade && !isNaN(Number(this.novoUsuario.idade))) {
      this.adicionar.emit({ ...this.novoUsuario });
      this.novoUsuario = { nome: '', idade: '', status: true };
    } else {
      alert('Por favor, preencha o nome e uma idade válida.');
    }
  }
}