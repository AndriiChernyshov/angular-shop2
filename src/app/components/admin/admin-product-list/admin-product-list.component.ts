import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CurrencyPipe } from '@angular/common';

import { Product } from '../../../models/product.model';
import { ProductService } from '../../../services/product.service';

@Component({
  selector: 'app-admin-product-list',
  templateUrl: './admin-product-list.component.html',
  styleUrls: ['./admin-product-list.component.css']
})
export class AdminProductListComponent implements OnInit {

  public products: Product[];

  constructor(
    private router: Router,
    private productService: ProductService
  ) 
  {
   
  }

  ngOnInit() {
     this.productService.getAllProducts()
    .then(products => this.products = products)
    .catch((err) => console.log(err));
  }

  public editProduct(product: Product): void{
    const link = ['/admin/product-edit', product.id];
    this.router.navigate(link);
  }

  public deleteProduct(product: Product): void{

  }

  public addProduct(): void{
    this.router.navigate(['/admin/product-add']);
  }
}
