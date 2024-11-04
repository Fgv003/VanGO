import { Component } from '@angular/core';

@Component({
  selector: 'app-cadastro-usuario',
  templateUrl: './cadastro-usuario.component.html',
  styleUrl: './cadastro-usuario.component.scss'
})
export class CadastroUsuarioComponent {
  usuario = {
    nome: '',
    endereco: '',
    telefone: '',
    email: '',
    senha: '',
    idade: null,
    periodoAula: '',
    instituicaoDeEnsino: '',
  };

  onSubmit() {
    // Aqui você pode adicionar a lógica para enviar os dados do usuário
    console.log('Usuário cadastrado:', this.usuario);
    // Resetar o formulário, se necessário
    this.usuario = { nome: '', endereco:'', telefone:'', email: '', senha: '', idade: null, periodoAula:'', instituicaoDeEnsino:'' };
  }
}
