import { Component } from '@angular/core';
import {Store} from '../store.model';
import {MatDialogRef} from '@angular/material';

@Component({
  selector: 'app-create-store-modal',
  templateUrl: './create-store-modal.component.html',
  styleUrls: ['./create-store-modal.component.scss']
})
export class CreateStoreModalComponent {
  dialogData: Store = new Store();

  constructor(private dialogRef: MatDialogRef<any>) { }

  close() {
    this.dialogRef.close();
  }

}
