import { Component } from '@angular/core';
import { ApiService } from '../../../service/api.service';  // Importe o serviço correto

@Component({
  selector: 'app-cadastro-van',
  templateUrl: './cadastro-van.component.html',
  styleUrls: ['./cadastro-van.component.scss']
})
export class CadastroVanComponent {
  van = {
    placa: '',
    ano: '',
    cor: '',
    lugares: ''
  };

  empresaId = 1; // Defina o ID da empresa (pode ser recuperado de outra forma, se necessário)

  constructor(private apiService: ApiService) { }

  onSubmit() {
    // Agora passando o empresaId junto com a van
    this.apiService.cadastrarVan(this.van, this.empresaId).subscribe(
      (response) => {
        console.log('Van cadastrada com sucesso:', response);
        // Limpa os campos do formulário após o cadastro
        this.van = { placa: '', ano: '', cor: '', lugares: '' };
      },
      (error) => {
        console.error('Erro ao cadastrar van:', error);
      }
    );
  }
}
