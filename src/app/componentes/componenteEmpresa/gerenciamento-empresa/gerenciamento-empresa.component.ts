import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../service/api.service';
import { Vehicle } from '../../../models/vehicle.model';
import { Driver } from '../../../models/driver.model';

@Component({
  selector: 'app-gerenciamento-empresa',
  templateUrl: './gerenciamento-empresa.component.html',
  styleUrls: ['./gerenciamento-empresa.component.scss']
})
export class GerenciamentoEmpresaComponent implements OnInit {

  vans: Vehicle[] = [];
  motoristas: Driver[] = [];
  registros: any[] = []; // Mock de registros
  empresaId: number | null = null; // ID da empresa
  active: number = 1; // Estado de "ativo" da empresa (suponho que seja isso que você quer)

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    // Verificação para garantir que o código seja executado apenas no lado do cliente
    if (typeof window !== 'undefined' && window.localStorage) {
      // Recupera o ID da empresa do localStorage
      this.empresaId = 1;
      this.active = 1; // Verificando o status ativo

      if (this.empresaId) {
        
        this.loadVans();
        this.loadDrivers();
        setTimeout(() => this.loadRegistros(), 500);
        //this.loadRegistros(); // Carregar os registros mockados
      } else {
        alert('Erro: Empresa não ativa ou ID da empresa não encontrado!');
      }
    } else {
      console.error('localStorage não está disponível');
      // Tratar a ausência de localStorage conforme necessário
    }
  }

  loadVans() {
    if (this.empresaId) {
      this.apiService.getVehiclesByEnterprise(this.empresaId).subscribe(
        (vehicles: any[]) => {
          // Mapeia os dados da API para o formato esperado no HTML
          this.vans = vehicles.map(vehicle => ({
            placa: vehicle.plate,
            ano: vehicle.vehicle_year,
            cor: vehicle.color,
            qtdLugares: vehicle.quantityPlaces,
            modelo: vehicle.model,
            ativa: vehicle.active, // Adiciona o status
          }));
        },
        (error) => {
          console.error('Erro ao carregar vans:', error);
          alert('Erro ao carregar vans.');
        }
      );
    }
  }

  loadDrivers() {
    if (this.empresaId) {
      this.apiService.getDriversByEnterprise(this.empresaId).subscribe(
        (drivers: any[]) => {
          // Mapeia os dados da API para o formato da interface Driver
          this.motoristas = drivers.map(driver => ({
            name: driver.name,
            address: driver.address
              ? `${driver.address.address}, ${driver.address.number}, ${driver.address.neighborhood}, ${driver.address.city}-${driver.address.state}`
              : 'Endereço não informado',
            telephone: driver.telephone || 'Não informado',
            email: driver.email || 'Não informado',
            age: driver.age || 'Não informado',
            cnh: driver.cnh || 'Não informado',
            cnhCategory: driver.cnhCategory || 'Não informado',
            validityCnh: driver.validityCnh
              ? new Date(driver.validityCnh).toLocaleDateString()
              : 'Não informado',
            vehicle: driver.vehicle
              ? `${driver.vehicle.model} - Placa: ${driver.vehicle.plate}`
              : 'Nenhum veículo cadastrado',
          }));
        },
        (error) => {
          console.error('Erro ao carregar motoristas:', error);
          alert('Erro ao carregar motoristas.');
        }
      );
    }
  }
  

  loadRegistros() {
    // Verifique se motoristas e vans foram carregados antes de consolidar
    if (this.motoristas.length > 0 && this.vans.length > 0) {
      this.registros = this.motoristas.map((motorista, index) => {
        const van = this.vans[index]; // Associa motoristas e vans por índice (ou crie outra lógica)
  
        return {
          idMotorista: index + 1, // Um identificador único
          motorista: motorista.name || 'Nome não informado',
          telefone: motorista.telephone || 'Telefone não informado',
          idVan: index + 1, // ID da van associado
          placa: van?.placa || 'Sem van associada',
          modelo: van?.modelo || 'Modelo não informado',
          cor: van?.cor || 'Cor não informada',
          lugares: van?.qtdLugares || 0,
        };
      });
    } else {
      console.warn('Motoristas ou vans ainda não foram carregados.');
    }
  }

  // Exemplo de função para editar a van
  editarVan(placa: string) {
    console.log(`Editar van com placa ${placa}`);
  }

  // Exemplo de função para excluir a van
  excluirVan(placa: string) {
    console.log(`Excluir van com placa ${placa}`);
  }

  // Exemplo de função para editar o motorista
  editarMotorista(nome: string) {
    console.log(`Editar motorista ${nome}`);
  }

  // Exemplo de função para excluir o motorista
  excluirMotorista(nome: string) {
    console.log(`Excluir motorista ${nome}`);
  }
}
