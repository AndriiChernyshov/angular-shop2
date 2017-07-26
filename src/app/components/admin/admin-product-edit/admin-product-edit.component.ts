import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Product } from '../../../models/product.model';
import { ProductService } from '../../../services/product.service';

@Component({
  selector: 'app-admin-product-edit',
  templateUrl: './admin-product-edit.component.html',
  styleUrls: ['./admin-product-edit.component.css']
})
export class AdminProductEditComponent implements OnInit {

  private id: number;
  private selectedProduct: Product;
  private caption: string;

  constructor(
    private productService: ProductService,
    private route: ActivatedRoute,
    private router: Router
  ) { 
    /*
    this.selectedProduct = new Product();

    this.route.params.subscribe(params => {this.id = params['id'];});

    
    this.route.data.forEach( (data: {product: Product}) => {
        this.selectedProduct = Object.assign({}, data.product)
    }
    );
    
    console.log(this.selectedProduct);
    console.log(this.id);
    */
  }

  ngOnInit() {
    console.log(this.route.data);

    this.selectedProduct = new Product();
    this.route.data.forEach( (data: {product: Product}) => {
         this.selectedProduct = Object.assign({}, data.product)
    });

    console.log(this.selectedProduct);
    if(this.selectedProduct && this.selectedProduct.id > 0)
      this.caption = "Edit Product";
    else
      this.caption = "Add New Product";
    }
/*
  saveProduct() {
    const product = new Product();
    product.id = this.selectedProduct.id;
    product.name = this.selectedProduct.name;
    product.price = this.selectedProduct.price;
      

    if (product.id) {
      this.productService.updateUser(product);
      // if success
      this.selectedProduct = product;
      this.router.navigate(['./../']);
    } 
    else {
      this.productService.addUser(product);
      // if success
      this.selectedProduct = product;
      this.router.navigate(['./../']);
    }
  }
*/
  goBack() {
    this.router.navigate(['./../'], { relativeTo: this.route });
  }

}
