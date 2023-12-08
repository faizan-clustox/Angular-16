import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../Models/Product';
import { ProductListComponent } from '../product-list/product-list.component';

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
  @Input() productListComp: ProductListComponent = undefined;
  product: Product;
  ngOnInit() {
    this.product = this.productListComp.selectedProduct;
  }
  @Input()
  showModal: boolean;
  closeModal() {
    this.product.showModal = false;
  }
}
