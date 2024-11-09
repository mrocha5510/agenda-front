import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { addContacto } from '../interfaces/contactos.interface';

@Injectable({
  providedIn: 'root'
})
export class ContactosService {
  API_URL: string = "http://127.0.0.1:8000/api/";
  Observable: any;

  constructor( private httpClient: HttpClient) { }

  getContactos(): Observable<any>{
    return this.httpClient.get(this.API_URL+"contactos").pipe(res => res);
  }

  createContacto(contacto: addContacto) {
    console.log(contacto);
    return this.httpClient.post(this.API_URL+"contacto", contacto);
  }

  updateContacto(contacto: addContacto) {
    return this.httpClient.put(this.API_URL+"contacto/"+contacto.id, contacto);
  }

  deleteContacto(id: string | number) {
    return this.httpClient.delete(this.API_URL+"contacto/"+id);
  }
}
