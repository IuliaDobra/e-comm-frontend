import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';
import { Product } from '../product.model';
import { cloneDeep } from 'lodash';

@Component({
  selector: 'app-edit-product-modal',
  templateUrl: './edit-product-modal.component.html',
  styleUrls: ['./edit-product-modal.component.scss']
})
export class EditProductModalComponent {
  dialogData: Product;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: Product) {
    this.dialogData = cloneDeep(this.data);
  }
}
