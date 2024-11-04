import { Component } from '@angular/core';
import { ApiService } from '../../../service/api.service';
import { Driver } from '../../../models/driver.model';
import { Vehicle } from '../../../models/vehicle.model';
import { error } from 'console';

@Component({
  selector: 'app-gerenciamento-empresa',
  templateUrl: './gerenciamento-empresa.component.html',
  styleUrl: './gerenciamento-empresa.component.scss'
})
export class GerenciamentoEmpresaComponent {

  // constructor(private apiService: ApiService) {}

  // driver: Driver | null = null;
  // vehicles: Vehicle[] = []
  
  // ngOnInit(): void {
  //   // O método será chamado automaticamente ao inicializar o componente
  //   const driverId = 1; 
  //   this.fetchDrivers(driverId);
  // }

  // fetchDrivers(id: number) {
  //   this.apiService.getDriverById(id).subscribe((data: Driver) => {
  //     this.driver = data; // Atualiza a lista de motoristas com os dados retornados
  //   })
  // }

  // fetchVehiclesById(){
  //   this.apiService.getAllVehicles().subscribe((data: Vehicle[]) =>{
  //     this.vehicles = data }
  //     , error => {
  //       console.error('Erro ao carregar motoristas:', error); // Tratamento de erro
  //     })
  // }
  active = 1;

  registros: any[] = [];
  

  constructor() {
    this.loadRegistros();
  }
  loadRegistros() {
    
    this.registros = [
      { idMotorista: 1, motorista: 'João Silva', idVan: 101, placa: 'ABC-1234', lugares: 10 },
      { idMotorista: 2, motorista: 'Maria Oliveira', idVan: 102, placa: 'XYZ-5678', lugares: 15 },
      // Adicione mais registros conforme necessário
    ];
  }

  vans = [
    { placa: 'ABC1234', ano: 2020, cor: 'Vermelha', lugares: 12 },
    { placa: 'XYZ5678', ano: 2021, cor: 'Preta', lugares: 15 },
  ];
  motoristas = [
    { nome: 'João Silva', endereco: 'Rua A, 123', telefone: '123456789', email: 'joao@email.com', idade: 30, cnh: '12345678900', categoriaCnh: 'B', validade: new Date('2025-05-01'), veiculoCadastrado: 'ABC1234' },
    { nome: 'Maria Souza', endereco: 'Rua B, 456', telefone: '987654321', email: 'maria@email.com', idade: 28, cnh: '09876543210', categoriaCnh: 'D', validade: new Date('2024-11-15'), veiculoCadastrado: 'XYZ5678' },
  ];

  editarVan() {
    console.log('Editar van:');
  }

  excluirVan() {
    console.log('Excluir van:');
  }

  editarMotorista() {
    console.log('Editar motorista:');
  }

  excluirMotorista() {
    console.log('Excluir motorista:');
}
}
