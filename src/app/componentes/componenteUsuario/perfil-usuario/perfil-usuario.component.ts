import { Component } from '@angular/core';

@Component({
  selector: 'app-perfil-usuario',
  templateUrl: './perfil-usuario.component.html',
  styleUrl: './perfil-usuario.component.scss'
})
export class PerfilUsuarioComponent {
  usuario = {
    nome: '',
    endereco: '',
    telefone: '',
    email: '',
    senha: '',
    idade: '',
      
  };

  ngOnInit() {
    this.usuario = {
        nome: 'Julia ',
        endereco: 'Rua b',
        telefone: '9999-9999',
        email: 'julia@exemple.com',
        senha: '123',
        idade: '47'
      };
  }
}
