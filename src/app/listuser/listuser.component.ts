import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { User } from '../user';

@Component({
  selector: 'app-listuser',
  templateUrl: './listuser.component.html',
  styleUrls: ['./listuser.component.css']
})
export class ListuserComponent implements OnInit {
  allUsers: User[] = [];

  constructor(private data: DataService) {
    console.log('the list of users');

    this.allUsers = data.getAllUsers();

    console.log(this.allUsers);
  }

  ngOnInit() {
  }

}
