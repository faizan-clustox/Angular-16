import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'filter',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.css',
})
export class FilterComponent {
  @Input()
  all: number = 0;
  @Input()
  inStock: number = 0;
  @Input()
  outOfStock: number = 0;

  selectedRadioButton: string = 'all';

  @Output() selectedRadioButtonOut: EventEmitter<string> =
    new EventEmitter<string>();

  onRadioButtonChange() {
    this.selectedRadioButtonOut.emit(this.selectedRadioButton);
  }
}
