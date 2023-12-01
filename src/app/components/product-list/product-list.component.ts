import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'product-list',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css',
})
export class ProductListComponent {
  productList = [
    {
      name: 'Smartphone X',
      price: '$699.99',
      desc: 'Flagship smartphone with a stunning display and powerful camera.',
      color: 'Midnight Black',
      imgUrl: '/assets/images/iphoneX.png',
    },
    {
      name: 'Laptop Pro',
      price: '$1299.99',
      desc: 'High-performance laptop with a sleek design and fast processors.',
      color: 'Space Gray',
      imgUrl: '/assets/images/laptopPro.png',
    },
    {
      name: 'Wireless Earbuds',
      price: '$149.99',
      desc: 'True wireless earbuds with noise-cancellation and long battery life.',
      color: 'White',
      imgUrl: '/assets/images/wirelessEar.png',
    },
    {
      name: 'Ultra HD TV',
      price: '$1999.99',
      desc: 'Immersive 4K television with HDR support for a cinematic experience.',
      color: 'Silver',
      imgUrl: '/assets/images/uhdTV.png',
    },
  ];
}
