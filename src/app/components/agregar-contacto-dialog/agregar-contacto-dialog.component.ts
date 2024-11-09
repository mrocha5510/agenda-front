import { Component,inject } from '@angular/core';
import {
  MAT_DIALOG_DATA,
  MatDialog,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogRef,
  MatDialogTitle,
} from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {FormsModule} from '@angular/forms';
import {MatButtonModule} from '@angular/material/button'; 
import { addContacto } from '../../interfaces/contactos.interface';
import { Telefonos } from '../../interfaces/telefonos.interface';

@Component({
  selector: 'app-agregar-contacto-dialog',
  standalone: true,
  imports: [
    MatDialogTitle,
    MatDialogContent,
    MatDialogActions,
    MatDialogClose,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatButtonModule],
  templateUrl: './agregar-contacto-dialog.component.html',
  styleUrl: './agregar-contacto-dialog.component.css'
})
export class AgregarContactoDialogComponent {
  readonly dialogRef = inject(MatDialogRef<AgregarContactoDialogComponent>);
  data = inject(MAT_DIALOG_DATA);

  public dataTelefono:Telefonos = {
      telefono:""
  };

  data_response :addContacto={
    id: 0,
    nombre: "",
    nota: "",
    fecha_cumpleanios: "",
    pagina_web: "",
    empresa: ""
  };
  cancelar(): void {
    this.dialogRef.close();
  }

 onSubmit() {
    this.dataTelefono.telefono = this.data.telefono;

    this.data_response.id =this.data.id;
    this.data_response.nombre =this.data.nombre;
    this.data_response.nota =this.data.nota;
    this.data_response.fecha_cumpleanios =this.data.fecha_cumpleanios;
    this.data_response.pagina_web =this.data.pagina_web;
    this.data_response.empresa =this.data.empresa;

    this.dialogRef.close({ data: this.data_response });
  }

}
