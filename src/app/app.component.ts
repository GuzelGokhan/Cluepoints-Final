import { Component, OnInit } from '@angular/core';
import { ApiService } from './services/api.service';
import { Client } from './shared/models/client.model';
import { Account } from './shared/models/account.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  constructor(private _apiService: ApiService) {}

  listClient: Client[];
  listAccount: Account[];
  selectedClient: number;

  ngOnInit() {
    this._apiService.getClients().subscribe((data) => {
      this.listClient = data;
    });
  }

  onSelectedClient(SelectedClientId: any): void {
    this._apiService
      .getAccountForSelectedClient(SelectedClientId)
      .subscribe((data) => {
        this.listAccount = data;
      });
  }
}
