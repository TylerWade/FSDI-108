import { Injectable } from '@angular/core';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  userList: User[] = [];

  constructor() {
    // defalut user
    var user = new User();
    user.email = 'admin@mail.com';
    user.password = 'password';
    user.firstName = 'Admin';
    user.lastName = 'User';
    this.userList.push(user);
  }

  public saveUser(user: User) {
    this.userList.push(user);
  }

  public getAllUsers() {
    return this.userList;
  }
}
