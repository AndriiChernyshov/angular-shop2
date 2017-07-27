import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Product } from '../../../models/product.model';
import { ProductService } from '../../../services/product.service';
import { ConfirmDialogService } from '../../../services/confirm-dialog.service';


@Component({
  selector: 'app-admin-product-edit',
  templateUrl: './admin-product-edit.component.html',
  styleUrls: ['./admin-product-edit.component.css']
})
export class AdminProductEditComponent implements OnInit {

  private id: number;
  private selectedProduct: Product;
  private oldProduct: Product;
  private caption: string;

  constructor(
    private productService: ProductService,
    private confirmDialogService: ConfirmDialogService,
    private route: ActivatedRoute,
    private router: Router
  ) { 
    /* ProductResolve guard lookup for the product.
    this.route.params.subscribe(params => {this.id = params['id'];});
    */
  }

  ngOnInit() {

    this.selectedProduct = new Product();
    this.route.data.forEach( (data: {product: Product}) => {
         this.selectedProduct = Object.assign({}, data.product);
         this.oldProduct = Object.assign({}, data.product);
    });

    if(this.selectedProduct && this.selectedProduct.id > 0)
      this.caption = "Edit Product";
    else
      this.caption = "Add New Product";
    }

  saveProduct() {
    const product = new Product();
    
    product.id = this.selectedProduct ? this.selectedProduct.id : undefined;
    product.name = this.selectedProduct.name;
    product.price = this.selectedProduct.price;
      

    if (product.id) {
      this.productService.updateProduct(product);
    } 
    else {
      this.productService.addProduct(product);
    }
    
    this.oldProduct = Object.assign({}, product);
    this.router.navigate(['/admin/']);
  }

  goBack() {
    this.router.navigate(['/admin/'], { relativeTo: this.route });
  }

  canDeactivate(): Promise<boolean> | boolean {
    if (this.selectedProduct && this.oldProduct &&
      this.oldProduct.name != this.selectedProduct.name ||
      this.oldProduct.price != this.selectedProduct.price
    ) {
      if (this.selectedProduct.name || this.selectedProduct.price)
        return this.confirmDialogService.confirm("You have unsaved changes. Do you want to leave the page?");
    }

    return true;
  }


}
