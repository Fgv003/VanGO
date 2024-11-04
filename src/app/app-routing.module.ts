import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroPrincipalComponent } from './componentes/componentePrincipal/cadastro-principal/cadastro-principal.component';
import { HomePrincipalComponent } from './componentes/componentePrincipal/home-principal/home-principal.component';
import { LoginPrincipalComponent } from './componentes/componentePrincipal/login-principal/login-principal.component';
import { BeneficiosPrincipalComponent } from './componentes/componentePrincipal/beneficios-principal/beneficios-principal.component';
import { SobrenosPrincipalComponent } from './componentes/componentePrincipal/sobrenos-principal/sobrenos-principal.component';
import { CadastroEmpresaComponent } from './componentes/componentePrincipal/cadastro-empresa/cadastro-empresa.component';
import { CadastroUsuarioComponent } from './componentes/componentePrincipal/cadastro-usuario/cadastro-usuario.component';
import { CadastroVanComponent } from './componentes/componenteEmpresa/cadastro-van/cadastro-van.component';
import { CadastroMotoristaComponent } from './componentes/componenteEmpresa/cadastro-motorista/cadastro-motorista.component';
import { PerfilEmpresaComponent } from './componentes/componenteEmpresa/perfil-empresa/perfil-empresa.component';
import { GerenciamentoEmpresaComponent } from './componentes/componenteEmpresa/gerenciamento-empresa/gerenciamento-empresa.component';
import { PerfilUsuarioComponent } from './componentes/componenteUsuario/perfil-usuario/perfil-usuario.component';
import { PerfilMotoristaComponent } from './componentes/componenteMotorista/perfil-motorista/perfil-motorista.component';
import { MinhasrotasMotoristaComponent } from './componentes/componenteMotorista/minhasrotas-motorista/minhasrotas-motorista.component';
import { HistoricoMotoristaComponent } from './componentes/componenteMotorista/historico-motorista/historico-motorista.component';
import { MensagemMotoristaComponent } from './componentes/componenteMotorista/mensagem-motorista/mensagem-motorista.component';
import { BuscarUsuarioComponent } from './componentes/componenteUsuario/buscar-usuario/buscar-usuario.component';
import { MinhasviagensUsuarioComponent } from './componentes/componenteUsuario/minhasviagens-usuario/minhasviagens-usuario.component';
import { NotificacaoUsuarioComponent } from './componentes/componenteUsuario/notificacao-usuario/notificacao-usuario.component';

const routes: Routes = [
  {path: '', component: HomePrincipalComponent},
  {path: 'home', component: HomePrincipalComponent },
  {path: 'cadastro', component: CadastroPrincipalComponent},
  {path: 'login', component: LoginPrincipalComponent},
  {path: 'beneficios', component: BeneficiosPrincipalComponent},
  {path: 'sobrenos', component: SobrenosPrincipalComponent},
  {path: 'cadastro-empresa', component: CadastroEmpresaComponent},
  {path: 'cadastro-usuario', component: CadastroUsuarioComponent},
  {path: 'cadastro-van', component: CadastroVanComponent},
  {path: 'cadastro-motorista', component: CadastroMotoristaComponent},
  {path: 'perfil-empresa', component: PerfilEmpresaComponent},
  {path: 'gerenciamento-empresa', component: GerenciamentoEmpresaComponent},
  {path: 'perfil-motorista', component: PerfilMotoristaComponent},
  {path: 'minhasrotas-motorista', component: MinhasrotasMotoristaComponent},
  {path: 'historico-motorista', component: HistoricoMotoristaComponent},
  {path: 'mensagem-motorista', component: MensagemMotoristaComponent},
  {path: 'perfil-usuario', component: PerfilUsuarioComponent},
  {path: 'buscar-usuario', component: BuscarUsuarioComponent},
  {path: 'minhasviagens-usuario', component: MinhasviagensUsuarioComponent},
  {path: 'notificacao-usuario', component: NotificacaoUsuarioComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
