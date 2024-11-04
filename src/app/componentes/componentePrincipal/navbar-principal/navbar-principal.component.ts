import { Component } from '@angular/core';
import { NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-navbar-principal',
  templateUrl: './navbar-principal.component.html',
  styleUrl: './navbar-principal.component.scss'
})
export class NavbarPrincipalComponent {
  isMenuCollapsed = true;
}
