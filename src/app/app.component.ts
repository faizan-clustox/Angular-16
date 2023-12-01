import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FormsModule } from '@angular/forms';
import { SearchComponent } from './components/search/search.component';
import { Container } from "./components/container/container.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [
        CommonModule,
        RouterOutlet,
        NavbarComponent,
        FormsModule,
        SearchComponent,
        Container
    ]
})
export class AppComponent {
  title = 'Angular-16';
}
