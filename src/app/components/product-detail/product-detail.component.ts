import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../Models/Product';

@Component({
  selector: 'product-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css',
})
export class ProductDetailComponent {
  @Input()
  selectedProduct: Product;
  @Input()
  products: Product[];
  @Input()
  showModal: boolean;
  closeModal() {
    console.log('Before', this.products);
    this.selectedProduct.showModal = false;
    console.log('After', this.products);
  }
  openModal() {
    // this.showModal = this.selectedProduct.showModal;
    this.selectedProduct.showModal = true;
  }
}
