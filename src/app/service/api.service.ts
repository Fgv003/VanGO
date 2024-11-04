import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Driver } from '../models/driver.model';
import { Vehicle } from '../models/vehicle.model';
import { Enterprise } from '../models/enterprise.model';

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

  // Método para obter uma empresa específica pelo ID
  getEnterpriseById(id: number): Observable<Enterprise> {
    return this.http.get<Enterprise>(`${this.apiUrl}/enterprise/${id}`);
  }

  // Método para adicionar uma nova empresa com base no ID (se aplicável)
  postAddEnterprise(enterprise: Enterprise): Observable<Enterprise> {
    return this.http.post<Enterprise>(`${this.apiUrl}/enterprise/`, enterprise);
  }
}