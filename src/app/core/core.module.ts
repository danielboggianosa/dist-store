import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsService } from './services/products/products.service';
import { ProductResolverService } from './services/products/product-resolver.service';


@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    ProductsService,
    ProductResolverService
  ]
})
export class CoreModule { }
