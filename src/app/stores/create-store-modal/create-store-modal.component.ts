import { Component, OnInit } from '@angular/core';
import {Store} from '../../services/store.model';
import {MatDialogRef} from '@angular/material';

@Component({
  selector: 'app-create-store-modal',
  templateUrl: './create-store-modal.component.html',
  styleUrls: ['./create-store-modal.component.scss']
})
export class CreateStoreModalComponent implements OnInit {
  dialogData: Store = new Store();

  constructor(private dialogRef: MatDialogRef<any>) { }

  ngOnInit() {
  }

  close() {
    this.dialogRef.close();
  }

}
