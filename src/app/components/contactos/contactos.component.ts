import { Component, OnInit,inject } from '@angular/core';
import { ContactosService } from '../../services/contactos.service';
import { addContacto, ContactosInterface } from '../../interfaces/contactos.interface';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import {MatFormFieldModule} from '@angular/material/form-field'; 
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import { MatDialog,  MatDialogActions,  MatDialogClose,  MatDialogContent,  MatDialogRef,  MatDialogTitle} from '@angular/material/dialog';
import { AgregarContactoDialogComponent } from '../agregar-contacto-dialog/agregar-contacto-dialog.component';
import {FormsModule} from '@angular/forms';
import {MatButtonModule} from '@angular/material/button'; 
import { Telefonos } from '../../interfaces/telefonos.interface';

@Component({
  selector: 'app-contactos',
  standalone: true,
  imports: [MatTableModule, MatPaginatorModule,MatFormFieldModule,MatInputModule,MatIconModule,FormsModule,MatButtonModule],
  templateUrl: './contactos.component.html',
  styleUrl: './contactos.component.css'
})
export class ContactosComponent implements OnInit{

  contactosList: ContactosInterface[]=[];
  contacto: ContactosInterface[]=[];
  readonly dialog = inject(MatDialog);

  public dataTelefono:Telefonos = {
      telefono:""
  };

  public dataContacto:addContacto = {
      id: 0,
      nombre: "",
      nota: "",
      fecha_cumpleanios: "",
      pagina_web: "",
      empresa: ""
  };



  constructor(private contactosService: ContactosService){}

  ngOnInit(): void {
    this.getContactos()
    //this.addContacto(this.dataContacto);
  }

  dataSource: any;
  getContactos(){
    this.contactosService.getContactos().subscribe({
      next: (result) =>{
        this.contactosList = result.contacto;
        this.dataSource = new MatTableDataSource(this.contactosList);
      },
      error:(err)=>{
        console.log(err);
        
      }
    })
  }
  displayedColumns: string[] = ['id', 'nombre', 'nota', 'fecha_cumpleanios', 'pagina_web', 'empresa', 'opciones'];
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(AgregarContactoDialogComponent, {
      data: this.dataContacto,
    }).afterClosed()
    .subscribe(response => {      
      this.addContacto(response.data);
    });;
  }

  addContacto(data_contacto:addContacto){
    this.contactosService.createContacto(data_contacto).subscribe({
      next: (result) =>{
      },
      error:(err)=>{
        console.log(err);
        
      }
    })
  }

  editar(editar:addContacto){
    const dialogRef = this.dialog.open(AgregarContactoDialogComponent, {
      data: editar,
    }).afterClosed()
    .subscribe(response => {      
      this.updContacto(response.data);
    });
  }

  updContacto(data_contacto:addContacto){
    this.contactosService.updateContacto(data_contacto).subscribe({
      next: (result) =>{
      },
      error:(err)=>{
        console.log(err);
        
      }
    })
  }

  eliminar(id:number){
    this.contactosService.deleteContacto(id).subscribe({
      next: (result) =>{
        this.getContactos();
      },
      error:(err)=>{
        console.log(err);
        
      }
    })
  }
}
