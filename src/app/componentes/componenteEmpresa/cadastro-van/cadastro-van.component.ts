import { Component } from '@angular/core';

@Component({
  selector: 'app-cadastro-van',
  templateUrl: './cadastro-van.component.html',
  styleUrl: './cadastro-van.component.scss'
})
export class CadastroVanComponent {
  van = {
    placa: '',
    ano: '',
    cor: '',
    lugares: ''
  };

  onSubmit() {
      console.log('Usuário cadastrado:', this.van);
    this.van = { placa: '', ano: '', cor: '', lugares: '' };
  }

}
