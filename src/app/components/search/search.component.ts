import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Component, EventEmitter, Input, Output } from '@angular/core';
@Component({
  selector: 'search',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css',
})
export class SearchComponent {
  searchText: string = '';

  @Output()
  onSearchChange: EventEmitter<string> = new EventEmitter<string>();

  onSearchTextChange() {
    this.onSearchChange.emit(this.searchText);
  }
}
