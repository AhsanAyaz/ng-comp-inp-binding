import { Component, inject, signal } from '@angular/core';
import { ProductService } from '../services/product.service';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Product } from '../interfaces/product.interface';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss',
})
export class ProductComponent {
  id!: number;
  product = signal<Product | null>(null);
  productNormal: Product | null = null;
  productService = inject(ProductService);
  activatedRoute = inject(ActivatedRoute);

  ngOnInit() {
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    if (!id) {
      // do something
      return;
    }
    this.id = Number(id);
    this.productService.getProductById(this.id).subscribe((product) => {
      this.product.set(product);
      this.productNormal = product;
    });
  }

  goBack() {}
}
