import { Component } from '@angular/core';

@Component({
  selector: 'app-perfil-motorista',
  templateUrl: './perfil-motorista.component.html',
  styleUrl: './perfil-motorista.component.scss'
})
export class PerfilMotoristaComponent {
  motorista = {
    nome: '',
    endereco: '',
    telefone: '',
    email: '',
    senha: '',
    idade: '',
    cnh: '',
    catcnh: '',
    validade: '',
    van: '',
    
  };

  ngOnInit() {
    this.motorista = {
        nome: 'João Motorista',
        endereco: 'Rua A',
        telefone: '9999-9999',
        email: 'jmotorista@exemple.com',
        senha: '123',
        idade: '47',
        cnh: '1234',
        catcnh: 'D',
        validade: '01/12/2027',
        van: 'VAN01'

    };
  }

}
