import { Component } from '@angular/core';
import { ApiService } from '../../../service/api.service';
import { Enterprise } from '../../../models/enterprise.model';

@Component({
  selector: 'app-cadastro-empresa',
  templateUrl: './cadastro-empresa.component.html',
  styleUrls: ['./cadastro-empresa.component.scss']
})
export class CadastroEmpresaComponent {
  // Inicializa a empresa com um id padrão
  empresa: Enterprise = {
    id: 0, // Inicialize com um valor padrão
    nameEnterprise: '',
    cnpj: '',
    endereco: '',
    telephone: '',
    email: '',
    password: '123' // Senha padrão, se necessário
  };

  constructor(private apiService: ApiService) {}

  postEnterprise() {
    // O ID será gerado pelo backend, portanto não inclua `id` na requisição.
    this.apiService.postAddEnterprise(this.empresa).subscribe(
      (data: Enterprise) => {
        alert('Empresa cadastrada com sucesso!  - Senha padrão: 123');
        console.log('Dados da empresa cadastrada:', data);
      },
      (error) => {
        console.error('Erro ao cadastrar empresa:', error);
        alert('Erro ao cadastrar empresa!');
      }
    );
  }

  onSubmit() {
    this.postEnterprise();
  }

  private generateId(): number {
    return Math.floor(Math.random() * 100) + 1; // Gera um id aleatório entre 1 e 10000
  }
}
