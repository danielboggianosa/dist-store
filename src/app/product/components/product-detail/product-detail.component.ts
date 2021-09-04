import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { ProductsService } from './../../../core/services/products/products.service';
import { Product, ProductResolved } from './../../../core/models/product.model';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

  product: Product = {
    id: '',
    title: '',
    price: 0,
    description: '',
    image: ''
  };
  errorMessage!: string;

  constructor(
    private route: ActivatedRoute,
    private productsService: ProductsService
  ) { }

  ngOnInit() {
    const resolvedData: ProductResolved = this.route.snapshot.data['resolvedData']
    this.errorMessage = resolvedData.error
    this.onProductRetreived(resolvedData.product!)
  }

  onProductRetreived(product: Product): void {
    this.product = product
  }

  createProduct() {
    const newProduct: Product = {
      id: '222',
      title: 'nuevo desde angular',
      image: 'assets/images/banner-1.jpg',
      price: 3000,
      description: 'nuevo producto'
    };
    this.productsService.createProduct(newProduct)
      .subscribe(product => {
        console.log(product);
      });
  }

  updateProduct() {
    const updateProduct: Partial<Product> = {
      price: 555555,
      description: 'edicion titulo'
    };
    this.productsService.updateProduct('2', updateProduct)
      .subscribe(product => {
        console.log(product);
      });
  }

  deleteProduct() {
    this.productsService.deleteProduct('222')
      .subscribe(rta => {
        console.log(rta);
      });
  }

}
