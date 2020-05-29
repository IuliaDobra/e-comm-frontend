import { Component } from '@angular/core';
import { StoreService } from '../services/store.service';
import {Store} from '../services/store.model';
import {MatDialog} from '@angular/material';
import {EditStoreModalComponent} from './edit-store-modal/edit-store-modal.component';
import {orderBy} from 'lodash';
import {CreateStoreModalComponent} from './create-store-modal/create-store-modal.component';
import {DeleteStoreModalComponent} from './delete-store-modal/delete-store-modal.component';

@Component({
  selector: 'app-stores',
  templateUrl: './stores.component.html',
  styleUrls: ['./stores.component.scss']
})
export class StoresComponent {
  stores: Store[] = [];

  constructor(
    private storeService: StoreService,
    public dialog: MatDialog,
    ) {
    this.populateStores();
  }

  populateStores() {
    this.storeService.getAllStores()
      .subscribe(stores => this.stores = orderBy(stores, 'id', 'ASC'));
  }

  search(event) {
    if (!!event.srcElement.value) {
      this.storeService.findStores(event.srcElement.value).then(stores => this.stores = orderBy(stores, 'id', 'ASC'));
    } else {
      this.populateStores();
    }
  }

  openDialog(store: Store) {
    const dialogRef = this.dialog.open(EditStoreModalComponent, {
      data: store,
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result !== store) {
        this.storeService.editStore(result).then(res => this.populateStores());
      }
    });
  }

  addStore() {
    const dialogRef = this.dialog.open(CreateStoreModalComponent);
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.storeService.addStore(result).then(res => this.populateStores());
      }
    });
  }

  deleteStore(store: Store) {
    const dialogRef = this.dialog.open(DeleteStoreModalComponent, { data: store });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.storeService.deleteStore(store.id).then(() => this.populateStores());
      }
    });
  }
}
