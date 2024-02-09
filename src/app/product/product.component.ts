import { Component, Input, OnInit, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Product } from '../interfaces/product.interface';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss',
})
export class ProductComponent implements OnInit {
  @Input({
    alias: 'productId',
    transform: (val: string) => Number(val),
  })
  id!: number;
  product = signal<Product | null>(null);
  productService = inject(ProductService);

  ngOnInit(): void {
    if (!this.id) {
      // do something here
      return;
    }
    this.productService.getProductById(this.id).subscribe((product) => {
      this.product.set(product);
    });
  }
}
