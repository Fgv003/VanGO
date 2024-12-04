import { Component } from '@angular/core';
import { ApiService } from '../../../service/api.service';  // Importe o ApiService
import { Usuario } from '../../../models/usuario.model';  // Importe o modelo de Usuário

@Component({
  selector: 'app-cadastro-usuario',
  templateUrl: './cadastro-usuario.component.html',
  styleUrls: ['./cadastro-usuario.component.scss']  // Corrigido de 'styleUrl' para 'styleUrls'
})
export class CadastroUsuarioComponent {
  usuario: Usuario = {
    name: '',
    endereco: '',
    telefone: '',
    email: '',
    password: '',
    idade: 0,
    periodoAula: '',
    instituicaoDeEnsino: ''
  };

  constructor(private apiService: ApiService) {}  // Injeta o ApiService no construtor

  onSubmit() {

    console.log(this.usuario)
    // Envia os dados para o backend via serviço ApiService
    this.apiService.postAddUsuario(this.usuario).subscribe(
      (data: Usuario) => {
        alert('Passageiro cadastrado com sucesso!');
        console.log('Dados do Passageiro cadastrado:', data);
        // Resetar os campos do formulário
        this.usuario = { name: '', endereco:'', telefone:'', email: '', password: '', idade: 0, periodoAula:'', instituicaoDeEnsino:'' };
      },
      (error) => {
        console.error('Erro ao Passageiro usuário:', error);
        alert('Erro ao cadastrar Passageiro!');
      }
    );
  }
}
