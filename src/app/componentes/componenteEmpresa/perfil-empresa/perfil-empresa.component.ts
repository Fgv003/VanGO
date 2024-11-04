import { Component } from '@angular/core';

@Component({
  selector: 'app-perfil-empresa',
  templateUrl: './perfil-empresa.component.html',
  styleUrl: './perfil-empresa.component.scss'
})
export class PerfilEmpresaComponent {
  empresa = {
    nome: '',
    cnpj: '',
    endereco: '',
    telefone: '',
    email: ''
  };

  ngOnInit() {
    this.empresa = {
      nome: 'Empresa Exemplo',
      cnpj: '12.345.678/0001-90',
      endereco: 'Rua Exemplo, 123',
      telefone: '(11) 98765-4321',
      email: 'contato@empresaexemplo.com'
    };
  }
}
