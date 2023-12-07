import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProductComponent } from './product/product.component';
import { FilterComponent } from './filter/filter.component';
import { Product } from '../Models/Product';

@Component({
  selector: 'product-list',
  standalone: true,
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css',
  imports: [CommonModule, FormsModule, ProductComponent, FilterComponent],
})
export class ProductListComponent {
  selectedProduct: Product;
  showModal: boolean;
  onItemClick() {
    this.showModal = true;
  }
  productList = [
    {
      id: 1,
      name: 'Smartphone X',
      price: '$699.99',
      desc: 'Flagship smartphone with a stunning display and powerful camera.',
      color: 'Midnight Black',
      imgUrl: '/assets/images/iphoneX.png',
      is_in_inventory: true,
      showModal: true,
    },
    {
      id: 2,
      name: 'Laptop Pro',
      price: '$1299.99',
      desc: 'High-performance laptop with a sleek design and fast processors.',
      color: 'Space Gray',
      imgUrl: '/assets/images/laptopPro.png',
      is_in_inventory: true,
      showModal: true,
    },
    {
      id: 3,
      name: 'Wireless Earbuds',
      price: '$149.99',
      desc: 'True wireless earbuds with noise-cancellation and long battery life.',
      color: 'White',
      imgUrl: '/assets/images/wirelessEar.png',
      is_in_inventory: true,
      showModal: true,
    },
    {
      id: 4,
      name: 'Ultra HD TV',
      price: '$1999.99',
      desc: 'Immersive 4K television with HDR support for a cinematic experience.',
      color: 'Silver',
      imgUrl: '/assets/images/uhdTV.png',
      is_in_inventory: false,
      showModal: true,
    },
  ];

  totalItems = this.productList.length;
  inStock = this.productList.filter((p) => p.is_in_inventory === true).length;
  outOfStock = this.totalItems - this.inStock;

  @Input()
  searchText: string = '';

  selectedRadioButton: string = 'all';
  onFilterChange(e: string) {
    this.selectedRadioButton = e;
  }
}
