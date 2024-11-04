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
    // Aqui, atribua um id válido. Você pode definir uma lógica para incrementá-lo ou gerenciá-lo conforme necessário.
    this.empresa.id = this.generateId(); // Gera um id

    this.apiService.postAddEnterprise(this.empresa).subscribe(
      (data: Enterprise) => {
        alert('Empresa cadastrada com sucesso!');
        console.log('Dados da empresa cadastrada:', data);
      },
    );
  }

  onSubmit() {
    this.postEnterprise();
  }

  // Método para gerar um ID de forma dinâmica (apenas exemplo, você deve gerenciar isso conforme sua lógica de negócio)
  private generateId(): number {
    // Aqui você pode implementar a lógica para gerar um ID. Exemplo simples:
    return Math.floor(Math.random() * 10000) + 1; // Gera um id aleatório entre 1 e 10000
  }
}
