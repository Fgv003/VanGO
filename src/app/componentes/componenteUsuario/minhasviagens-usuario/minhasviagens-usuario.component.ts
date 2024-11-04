import { Component } from '@angular/core';

@Component({
  selector: 'app-minhasviagens-usuario',
  templateUrl: './minhasviagens-usuario.component.html',
  styleUrl: './minhasviagens-usuario.component.scss'
})
export class MinhasviagensUsuarioComponent {
  diasSemana: string[] = [];
  informacao: string = '';

  constructor() {
    this.gerarDiasSemana();
  }
  
  gerarDiasSemana() {
    const hoje = new Date();
    this.diasSemana = [];

    for (let i = 0; i < 7; i++) {
      const dia = new Date(hoje);
      dia.setDate(hoje.getDate() + i);
      const diaFormatado = `${String(dia.getDate()).padStart(2, '0')}/${String(dia.getMonth() + 1).padStart(2, '0')}`;
      this.diasSemana.push(diaFormatado);
    }
  }

  mostrarInformacao(dia: string) {
    this.informacao = `Informações sobre ${dia}`;
  }
}
