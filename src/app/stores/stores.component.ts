import { Component } from '@angular/core';
import { StoreService } from '../services/store.service';
import {Store} from '../services/store.model';

@Component({
  selector: 'app-stores',
  templateUrl: './stores.component.html',
  styleUrls: ['./stores.component.scss']
})
export class StoresComponent {
  stores: Store[] = [];

  constructor(private storeService: StoreService) {
    this.storeService.getAllStores()
      .then(stores => this.stores = stores)
      .catch(error => console.log(error.message));
  }
}
