import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import {Store} from './store.model';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StoreService {
  baseUrl = environment.baseUrl;

  constructor(private http: HttpClient) {}

  getAllStores(): Observable<any> {
    return this.http.get(`${this.baseUrl}/stores`);
  }

  editStore(store: Store): Promise<any> {
    return this.http.patch(`${this.baseUrl}/stores/${store.id}`, {
      address: store.address,
      iban: store.iban,
      bank: store.bank,
      phone_number: store.phone_number,
      e_mail: store.e_mail,
    }).toPromise();
  }

  deleteStore(id: number): Promise<any> {
    return this.http.delete(`${this.baseUrl}/stores/${id}`).toPromise();
  }

  findStores(searchValue: string): Promise<any> {
    return this.http.get(`${this.baseUrl}/stores?search=${searchValue}`).toPromise();
  }
}
