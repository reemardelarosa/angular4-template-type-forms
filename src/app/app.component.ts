import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('f') userForm: NgForm;
  subscriptions = ['', 'basic', 'advanced', 'pro'];
  subscription = 'advanced';
  email = '';
  submitted = false

   user ={
    email: '',
    subscription: '',
    secret: '',
   };

  onSubmit() {
    console.log(this.userForm);
    this.submitted = true;
    this.user.email = this.userForm.value.email;
    this.user.subscription = this.userForm.value.subscription;
    this.user.secret = this.userForm.value.secret;

    this.userForm.reset();
  }
}
