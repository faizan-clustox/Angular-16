import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../Models/Product';
@Component({
  selector: 'product',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css',
})
export class ProductComponent {
  @Input()
  product: Product;
  @Input()
  showModal: boolean;

  openModal() {
    this.product.showModal = true;
    console.log(this.product);
  }
}
