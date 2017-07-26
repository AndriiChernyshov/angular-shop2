import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Resolve } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { Product } from '../models/product.model';
import { ProductService } from '../services/product.service';

@Injectable()
export class ProductResolveGuard implements CanActivate {

  constructor(
    private productService: ProductService,
    private router: Router
  ){

  }


  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return true;
  }

  resolve(route: ActivatedRouteSnapshot): Promise<Product>{
    const id = route.params['id'];
    if(id === undefined)
      return null;

    return this.productService.findById(id).then(product => {
      if(product)
      {
        return product;
      }
      else{
        this.router.navigate(['/admin']);
        return null;
      }
      
    } );
  }
}
