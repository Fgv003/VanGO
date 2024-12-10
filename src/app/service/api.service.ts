import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Driver } from '../models/driver.model';
import { Vehicle } from '../models/vehicle.model';
import { Enterprise } from '../models/enterprise.model';
import { Usuario } from '../models/usuario.model';

@Injectable({
  providedIn: 'root', // O serviço estará disponível globalmente na aplicação
})
export class ApiService {
  private apiUrl = 'http://localhost:8080'; // URL base do seu backend

  constructor(private http: HttpClient) {}

  // Método para obter um motorista específico pelo ID
  getDriverById(id: number): Observable<Driver> {
    return this.http.get<Driver>(`${this.apiUrl}/drivers/${id}`);
  }

  // Método para obter todas as empresas
  getEnterprises(): Observable<Enterprise[]> {
    return this.http.get<Enterprise[]>(`${this.apiUrl}/enterprises`);
  }

  // Método para obter todos os passageiros
  getPassengers(): Observable<Usuario[]> {
    return this.http.get<Usuario[]>(`${this.apiUrl}/passengers`);
  }

  // Método para cadastrar um novo usuário
  postAddUsuario(usuario: Usuario): Observable<Usuario> {
    return this.http.post<Usuario>(`${this.apiUrl}/passengers`, usuario);
  }

  // Método para obter uma empresa específica pelo ID
  getEnterpriseById(id: number): Observable<Enterprise> {
    return this.http.get<Enterprise>(`${this.apiUrl}/enterprise/${id}`);
  }

  // Método para adicionar uma nova empresa com base no ID (se aplicável)
  postAddEnterprise(enterprise: Enterprise): Observable<Enterprise> {
    // A URL não deve conter o ID, pois o backend provavelmente irá gerar o ID
    return this.http.post<Enterprise>(`${this.apiUrl}/enterprises`, enterprise);
  }

  // Função para obter as vans da empresa
  getVehiclesByEnterprise(empresaId: number): Observable<Vehicle[]> {
    return this.http.get<Vehicle[]>(`${this.apiUrl}/enterprises/${empresaId}/vehicles`);
  }

  // Função para obter os motoristas da empresa
  getDriversByEnterprise(empresaId: number): Observable<Driver[]> {
    return this.http.get<Driver[]>(`${this.apiUrl}/enterprises/${empresaId}/drivers`);
  }

  // Método para cadastrar a van
  cadastrarVan(van: any, empresaId: number): Observable<any> {
    const url = `${this.apiUrl}/enterprises/${empresaId}/vehicles`;  // Rota para cadastrar a van
    return this.http.post(url, van);
  }
}