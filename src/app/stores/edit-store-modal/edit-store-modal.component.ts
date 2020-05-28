import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material';
import {Store} from '../../services/store.model';
import {cloneDeep} from 'lodash';

@Component({
  selector: 'app-store-modal',
  templateUrl: './edit-store-modal.component.html',
  styleUrls: ['./edit-store-modal.component.scss']
})
export class EditStoreModalComponent {
  dialogData: Store;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: Store) {
    this.dialogData = cloneDeep(this.data);
  }
}
