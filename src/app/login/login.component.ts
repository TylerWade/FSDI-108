import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email = '';
  password = '';
  showLoginError = false;

  constructor(private data: DataService) { }

  ngOnInit() { }


  validateLogin() {
    console.log('Validating login', this.email, this.password);

    // get this list of users
    var allUsers = this.data.getAllUsers();

    // validate the credentials against all users on the array
    /*
    */
    var validCreds = false;

    for (var i = 0; i < allUsers.length; i++) {
      var aUser = allUsers[i];

      // compare
      if (this.email == aUser.email && this.password == aUser.password) {
        console.log('username verified');
        validCreds = true;
        this.showLoginError = false; // hide the alert
        //this.router.navigate(['user/about']);
      }
    }

    if (!validCreds) {
      console.log('Access Denied');
      this.showLoginError = true;
    }
  }
}

/**
 *  create a component called about
 *  regster the compnent on the routing array / student
 * on the html of the new component put your info
 * create a new option on the menu Aboutme
 * 
 */