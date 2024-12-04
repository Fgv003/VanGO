import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../../../service/api.service';
import { Enterprise } from '../../../models/enterprise.model';
import { Usuario } from '../../../models/usuario.model';

@Component({
  selector: 'app-login-principal',
  templateUrl: './login-principal.component.html',
  styleUrls: ['./login-principal.component.scss']
})
export class LoginPrincipalComponent {
  usuario = '';
  senha = '';
  erro: boolean = false;

  constructor(private router: Router, private apiService: ApiService) {}

  verificarLogin() {
    this.apiService.getEnterprises().subscribe(
      (enterprises: Enterprise[]) => {
        const empresaEncontrada = enterprises.find(
          (enterprise) => enterprise.email === this.usuario && enterprise.password === this.senha
        );

        if (empresaEncontrada) {
          // Salvar o ID da empresa no localStorage (ou sessionStorage)
          localStorage.setItem('empresaId', empresaEncontrada.id!.toString());
          
          // Redireciona para a página de gerenciamento de empresas
          this.router.navigate(['/gerenciamento-empresa']);
        } else {
          this.apiService.getPassengers().subscribe(
            (usuarios: Usuario[]) => {
              const usuarioEncontrado = usuarios.find(
                (usuario) => usuario.email === this.usuario && usuario.password === this.senha
              );

              if (usuarioEncontrado) {
                this.router.navigate(['/minhasrotas-motorista']);
              } else {
                this.erro = true;
                alert('Login ou senha incorretos');
              }
            },
            (error) => {
              console.error('Erro ao buscar usuários:', error);
              this.erro = true;
              alert('Erro ao verificar login');
            }
          );
        }
      },
      (error) => {
        console.error('Erro ao buscar empresas:', error);
        this.erro = true;
        alert('Erro ao verificar login');
      }
    );
  }
}
