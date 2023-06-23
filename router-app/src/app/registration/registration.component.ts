import { Component } from '@angular/core';
import { UserModel } from './user.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styles: [
  ]
})
export class RegistrationComponent {
  //user Model Object with default values
  cities = ["New York", "New Delhi", "Banaglore", "Washing Don DC", "Mumbai"]
  user = new UserModel(1, 'Subramanian', new Date(), 0, this.cities[0])
  submitted: boolean = false;

  constructor(private router: Router) { }

  public save() {
    console.log(this.user)
    this.submitted = !this.submitted
    // this.router.navigate(['registrationsuccess', { id:this.user.id,name:this.user.name }],)
  }
}
