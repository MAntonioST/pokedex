import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ListComponent } from './views/list/list.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,ListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'pokedex';
}
