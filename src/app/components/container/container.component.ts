import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponent } from '../search/search.component';
import { ProductListComponent } from '../product-list/product-list.component';

@Component({
  selector: 'container',
  standalone: true,
  templateUrl: './container.component.html',
  styleUrl: './container.component.css',
  imports: [CommonModule, SearchComponent, ProductListComponent],
})
export class Container {
  searchText: string = '';

  onSearchChange(event: string) {
    console.log(event);
    this.searchText = event;
  }
}
