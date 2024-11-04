import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { ApiService } from './service/api.service'; // Caminho atualizado para a pasta 'services'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  showNavbarPrincipal: boolean = false;
  showNavbarUsuario: boolean = false;
  showNavbarMotorista: boolean = false;
  showNavbarEmpresa: boolean = false;
  title = 'VanGo';
  message = ""

  //constructor(private apiService: ApiService) {}

  // ngOnInit() {
  //   this.apiService.getAllDrivers().subscribe((data: string) => {
  //     this.message = data;
  //   });
  // }

  constructor(private router: Router) {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe((event: NavigationEnd) => {
      const currentRoute = event.urlAfterRedirects;

      // Lógica para mostrar as navbars
      this.showNavbarPrincipal = currentRoute === '/home' || currentRoute === '/cadastro' || currentRoute === '/login' || currentRoute === '/beneficios' || currentRoute === '/sobrenos' || currentRoute === '/cadastro-empresa' || currentRoute === '/cadastro-usuario' || currentRoute === '/';
      this.showNavbarUsuario= currentRoute === '/buscar-usuario' || currentRoute === '/minhasviagens-usuario' || currentRoute === '/notificacao-usuario' || currentRoute === '/perfil-usuario';
      this.showNavbarMotorista = currentRoute === '/perfil-motorista' || currentRoute === '/minhasrotas-motorista' || currentRoute === '/mensagem-motorista' || currentRoute === '/historico-motorista' ;
      this.showNavbarEmpresa = currentRoute === '/perfil-empresa' || currentRoute === '/cadastro-motorista' || currentRoute === '/cadastro-van' || currentRoute === '/gerenciamento-empresa';
    });
  }
}
