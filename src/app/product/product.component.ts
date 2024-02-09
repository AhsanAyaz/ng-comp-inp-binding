import { Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Product } from '../interfaces/product.interface';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss',
})
export class ProductComponent {}
