import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { orderBy } from 'lodash';
import { MatDialog } from '@angular/material';
import { Product } from './product.model';
import { ProductService } from './product.service';
import { EditProductModalComponent } from './edit-product-modal/edit-product-modal.component';
import { DeleteProductModalComponent } from './delete-product-modal/delete-product-modal.component';
import { CreateProductModalComponent } from './create-product-modal/create-product-modal.component';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  storeId: string;
  products: Product[];

  constructor(
    private router: Router,
    private productsService: ProductService,
    public dialog: MatDialog
  ) { }

  ngOnInit() {
    this.storeId = this.router.routerState.snapshot.url.split('/')[2];
    this.getProductsForStore();
  }

  getProductsForStore(): void {
    this.productsService.getProductsForStore(parseInt(this.storeId)).subscribe(products => {
        this.products = orderBy(products, 'id', 'ASC');
      }
    );
  }

  search(event): void {
    if (!!event.srcElement.value) {
      this.productsService.findProducts(event.srcElement.value, this.storeId)
        .subscribe(products => this.products = orderBy(products, 'id', 'ASC'));
    } else {
      this.getProductsForStore();
    }
  }

  createProduct() {
    const dialogRef = this.dialog.open(CreateProductModalComponent);
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        result.storeId = this.storeId;
        this.productsService.createProduct(result).subscribe(res => this.getProductsForStore());
      }
    });
  }

  editProduct(product: Product): void {
    const dialogRef = this.dialog.open(EditProductModalComponent, {
      data: product,
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result !== product) {
        this.productsService.editProduct(result).subscribe(res => this.getProductsForStore());
      }
    });
  }

  deleteProduct(product: Product) {
    const dialogRef = this.dialog.open(DeleteProductModalComponent, { data: product });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.productsService.deleteProduct(product.id).subscribe(() => this.getProductsForStore());
      }
    });
  }
}
