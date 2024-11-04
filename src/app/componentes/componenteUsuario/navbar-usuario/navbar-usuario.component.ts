import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar-usuario',
  templateUrl: './navbar-usuario.component.html',
  styleUrl: './navbar-usuario.component.scss'
})
export class NavbarUsuarioComponent {
  isMenuCollapsed: boolean = false;
}
