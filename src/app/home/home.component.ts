import { Component, OnInit, inject, signal } from '@angular/core';
import { ProductService } from '../services/product.service';
import { RouterLink } from '@angular/router';
import { Product } from '../interfaces/product.interface';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  products = signal<Product[]>([]);
  productService = inject(ProductService);

  ngOnInit() {
    this.productService.getProducts().subscribe({
      next: (products) => {
        this.products.set(products);
      },
    });
  }
}
