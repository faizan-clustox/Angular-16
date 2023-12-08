import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  ViewChild,
  Component,
  EventEmitter,
  Input,
  Output,
  ElementRef,
} from '@angular/core';
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

  @ViewChild('searchInput') inputEl: ElementRef;

  onSearchTextChange() {
    this.searchText = this.inputEl.nativeElement.value;
    this.onSearchChange.emit(this.searchText);
  }
}
