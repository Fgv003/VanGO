import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavbarPrincipalComponent } from './componentes/componentePrincipal/navbar-principal/navbar-principal.component';
import { LoginPrincipalComponent } from './componentes/componentePrincipal/login-principal/login-principal.component';
import { CadastroPrincipalComponent } from './componentes/componentePrincipal/cadastro-principal/cadastro-principal.component';
import { HomePrincipalComponent } from './componentes/componentePrincipal/home-principal/home-principal.component';
import { NavbarEmpresaComponent } from './componentes/componenteEmpresa/navbar-empresa/navbar-empresa.component';
import { CadastroVanComponent } from './componentes/componenteEmpresa/cadastro-van/cadastro-van.component';
import { CadastroMotoristaComponent } from './componentes/componenteEmpresa/cadastro-motorista/cadastro-motorista.component';
import { PerfilEmpresaComponent } from './componentes/componenteEmpresa/perfil-empresa/perfil-empresa.component';
import { BeneficiosPrincipalComponent } from './componentes/componentePrincipal/beneficios-principal/beneficios-principal.component';
import { SobrenosPrincipalComponent } from './componentes/componentePrincipal/sobrenos-principal/sobrenos-principal.component';
import { CadastroEmpresaComponent } from './componentes/componentePrincipal/cadastro-empresa/cadastro-empresa.component';
import { CadastroUsuarioComponent } from './componentes/componentePrincipal/cadastro-usuario/cadastro-usuario.component';
import { GerenciamentoEmpresaComponent } from './componentes/componenteEmpresa/gerenciamento-empresa/gerenciamento-empresa.component';
import { NavbarUsuarioComponent } from './componentes/componenteUsuario/navbar-usuario/navbar-usuario.component';
import { PerfilUsuarioComponent } from './componentes/componenteUsuario/perfil-usuario/perfil-usuario.component';
import { BuscarUsuarioComponent } from './componentes/componenteUsuario/buscar-usuario/buscar-usuario.component';
import { MinhasviagensUsuarioComponent } from './componentes/componenteUsuario/minhasviagens-usuario/minhasviagens-usuario.component';
import { NotificacaoUsuarioComponent } from './componentes/componenteUsuario/notificacao-usuario/notificacao-usuario.component';
import { PerfilMotoristaComponent } from './componentes/componenteMotorista/perfil-motorista/perfil-motorista.component';
import { MinhasrotasMotoristaComponent } from './componentes/componenteMotorista/minhasrotas-motorista/minhasrotas-motorista.component';
import { HistoricoMotoristaComponent } from './componentes/componenteMotorista/historico-motorista/historico-motorista.component';
import { MensagemMotoristaComponent } from './componentes/componenteMotorista/mensagem-motorista/mensagem-motorista.component';
import { NavbarMotoristaComponent } from './componentes/componenteMotorista/navbar-motorista/navbar-motorista.component';
import { provideHttpClient, withFetch } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    NavbarPrincipalComponent,
    LoginPrincipalComponent,
    CadastroPrincipalComponent,
    HomePrincipalComponent,
    NavbarEmpresaComponent,
    CadastroVanComponent,
    CadastroMotoristaComponent,
    PerfilEmpresaComponent,
    BeneficiosPrincipalComponent,
    SobrenosPrincipalComponent,
    CadastroEmpresaComponent,
    CadastroUsuarioComponent,
    GerenciamentoEmpresaComponent,
    NavbarUsuarioComponent,
    PerfilUsuarioComponent,
    BuscarUsuarioComponent,
    MinhasviagensUsuarioComponent,
    NotificacaoUsuarioComponent,
    PerfilMotoristaComponent,
    MinhasrotasMotoristaComponent,
    HistoricoMotoristaComponent,
    MensagemMotoristaComponent,
    NavbarMotoristaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule
  ],
  providers: [
    provideClientHydration(),
    provideHttpClient(withFetch())
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
