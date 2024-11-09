import { Telefonos } from "./telefonos.interface";

export interface ContactosInterface{
    id: number;
    nombre: string;
    nota: string;
    fecha_cumpleanios: string;
    pagina_web: string;
    empresa: string;
    created_at: string;
    updated_at: string;

}

export interface addContacto{
    id: number;
    nombre: string;
    nota: string;
    fecha_cumpleanios: string;
    pagina_web: string;
    empresa: string;

}