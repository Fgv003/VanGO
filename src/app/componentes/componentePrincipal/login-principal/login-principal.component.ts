import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-principal',
  templateUrl: './login-principal.component.html',
  styleUrl: './login-principal.component.scss'
})
export class LoginPrincipalComponent {
  usuario = '';
  senha = '';
  erro: boolean = false;

  constructor(private router : Router) {}
  verificarLogin(){
      if (this.usuario == 'admin' && this.senha == 'admin') {
        this.router.navigate(['/gerenciamento-empresa']);
      } else if(this.usuario == 'abc@gmail.com' && this.senha == '12345'){
        this.router.navigate(['/minhasrotas-motorista'])
      }else {
        alert("Digite o login correto")
      }
  }
}

