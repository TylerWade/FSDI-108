import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { DataService } from '../data.service';

@Component({
  selector: 'app-registeruser',
  templateUrl: './registeruser.component.html',
  styleUrls: ['./registeruser.component.css']
})
export class RegisteruserComponent implements OnInit {
  passwordRetype = '';
  userModel: User = new User();

  constructor(private data: DataService) { }

  ngOnInit() {
  }

  save() {
    console.log('Saving new user');
    console.log(this.userModel);

    this.data.saveUser(this.userModel);
    console.log('user saved');

    //clear the form
    this.userModel = new User();
    this.passwordRetype = '';
  }
}
