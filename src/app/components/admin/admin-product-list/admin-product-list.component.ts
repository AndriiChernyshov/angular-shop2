import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CurrencyPipe } from '@angular/common';

import { Product } from '../../../models/product.model';
import { ProductService } from '../../../services/product.service';
import { ConfirmDialogService } from '../../../services/confirm-dialog.service';

@Component({
  selector: 'app-admin-product-list',
  templateUrl: './admin-product-list.component.html',
  styleUrls: ['./admin-product-list.component.css']
})
export class AdminProductListComponent implements OnInit {

  public products: Product[];

  constructor(
    private router: Router,
    private productService: ProductService,
    private confirmDialogService: ConfirmDialogService
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
    this.confirmDialogService.confirm("Please confirm that you want to delete " + product.name)
    .then((val) => {
      if(val)
          this.productService.deleteProduct(product.id);
      })
  }

  public addProduct(): void{
    this.router.navigate(['/admin/product-add']);
  }
}
