import { Component } from '@angular/core';

@Component({
  selector: 'app-cadastro-motorista',
  templateUrl: './cadastro-motorista.component.html',
  styleUrl: './cadastro-motorista.component.scss'
})
export class CadastroMotoristaComponent {
  motorista = {
      nome: '',
      rg: '',
      cpf: '',
      dataNascimento: '',
      endereco: '', 
      telefone: '',
      email: '', 
      senha: '',
      idade: null,
      cnh: '',
      categoriaCnh: '',
      validade: null,
      vanId: null,
  };

  vans = [
    { id: 1, modelo: 'Van A' },
    { id: 2, modelo: 'Van B' },
    { id: 3, modelo: 'Van C' }
  ];

  onSubmit() {
    // Lógica para processar o cadastro do motorista
    console.log('Motorista cadastrado:', this.motorista);
    // Aqui você pode adicionar lógica para enviar os dados para um serviço, por exemplo.
  }
}
