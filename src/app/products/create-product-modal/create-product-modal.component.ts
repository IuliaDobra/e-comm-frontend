import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { Product } from '../product.model';

@Component({
  selector: 'app-create-product-modal',
  templateUrl: './create-product-modal.component.html',
  styleUrls: ['./create-product-modal.component.scss']
})
export class CreateProductModalComponent {
  dialogData: Product = new Product();

  constructor(private dialogRef: MatDialogRef<any>) { }

  close() {
    this.dialogRef.close();
  }

}
