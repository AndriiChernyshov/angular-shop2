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
    this.products = productService.getAllProducts();
  }

  ngOnInit() {
  }

  public editProduct(product: Product): void{
    const link = ['/admin/product-edit', product.id];
    this.router.navigate(link);
  }
}
