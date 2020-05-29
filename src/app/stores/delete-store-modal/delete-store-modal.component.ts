import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';
import { Store } from '../../services/store.model';

@Component({
  selector: 'app-delete-store',
  templateUrl: './delete-store-modal.component.html',
  styleUrls: ['./delete-store-modal.component.scss']
})
export class DeleteStoreModalComponent {

  constructor(@Inject(MAT_DIALOG_DATA) public data: Store) { }

}
