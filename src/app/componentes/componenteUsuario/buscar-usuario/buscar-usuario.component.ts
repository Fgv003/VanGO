import { Component } from '@angular/core';

@Component({
  selector: 'app-buscar-usuario',
  templateUrl: './buscar-usuario.component.html',
  styleUrl: './buscar-usuario.component.scss'
})
export class BuscarUsuarioComponent {
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
