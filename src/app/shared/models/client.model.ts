import { Account } from './account.model';

export class Client {
  id: string;
  name: string;
  firstname: string;
  address: string;
  birthday: Date;
  accounts: Account[];
}
