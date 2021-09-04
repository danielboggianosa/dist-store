import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { ProductResolved, Product } from '../../models/product.model';
import { ProductsService } from './products.service';

@Injectable({
  providedIn: 'root'
})
export class ProductResolverService implements Resolve<ProductResolved> {

  constructor(private productsService: ProductsService){}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) : Observable<ProductResolved>{
    const id = route.paramMap.get('id')!;
    if( isNaN(+id)){
      const error = `Product id was not a number: ${id}`;
      console.log(error);
      return of({product: null, error});
    }
    return this.productsService.getProduct(id)
    .pipe(
      map((product: Product) => ({product})),
      catchError(error => {
        const message = `Retrieval error: ${error}`;
        console.log(message)
        return of({product: null, error: message})
      })
    )
  }


}
