import { Component } from '@angular/core';
import { StoreService } from '../services/store.service';
import {Store} from '../services/store.model';
import {MatDialog} from '@angular/material';
import {EditStoreModalComponent} from './edit-store-modal/edit-store-modal.component';
import {orderBy} from 'lodash';

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
    console.log(event.srcElement.value);
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

  deleteStore(id: number) {
    this.storeService.deleteStore(id).then(() => this.populateStores());
  }
}
