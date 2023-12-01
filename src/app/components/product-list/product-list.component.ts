import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponent } from "../search/search.component";

@Component({
    selector: 'product-list',
    standalone: true,
    templateUrl: './product-list.component.html',
    styleUrl: './product-list.component.css',
    imports: [CommonModule, SearchComponent]
})
export class ProductListComponent {
  product = {
    name: 'iPhone 13',
    price: 998,
    color: 'Matte Blue',
    discountedPercent: 9.5,
    inStock: 10,
    yourCart: 0,
  };

  getDiscountedPrice() {
    return (
      this.product.price -
      (this.product.discountedPercent * this.product.price) / 100
    );
  }

  addItemToCart() {
    this.product.inStock = this.product.inStock - 1;
    this.product.yourCart++;
  }
  removeItemFromCart() {
    this.product.inStock = this.product.inStock + 1;
    this.product.yourCart--;
  }
}
