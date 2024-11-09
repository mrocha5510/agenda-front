import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ContactosComponent } from './components/contactos/contactos.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ContactosComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'front-agenda';
}
