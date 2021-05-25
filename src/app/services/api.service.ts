import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private httpClient: HttpClient) {}

  getClients(): Observable<any> {
    return this.httpClient.get(
      'https://mighty-oasis-32829.herokuapp.com/api/clients'
    );
  }

  getAccountForSelectedClient(SelectedClientId: string): Observable<any> {
    let params1 = new HttpParams().set('client', SelectedClientId);
    return this.httpClient.get(
      'https://mighty-oasis-32829.herokuapp.com/api/accounts',
      { params: params1 }
    );
  }
}
