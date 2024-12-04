import { Address } from "cluster";

export interface Enterprise {
    id?: number;
    name: string;
    cnpj: string;
    endereco: string;
    telephone: string;
    email: string;
    password: string;
}