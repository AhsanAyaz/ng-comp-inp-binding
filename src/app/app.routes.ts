import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    loadComponent: async () => {
      const m = await import('./home/home.component');
      return m.HomeComponent;
    },
  },
  {
    path: 'products/:productId',
    pathMatch: 'full',
    loadComponent: async () => {
      const m = await import('./product/product.component');
      return m.ProductComponent;
    },
  },
];
