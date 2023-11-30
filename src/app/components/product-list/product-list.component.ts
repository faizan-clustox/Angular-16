import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'product-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css',
})
export class ProductListComponent {
  product = {
    name: 'iPhone 13',
    price: 998,
    color: 'Matte Blue',
    discountedPercent: 9.5,
  };

  getDiscountedPrice() {
    return (
      this.product.price -
      (this.product.discountedPercent * this.product.price) / 100
    );
  }
}
