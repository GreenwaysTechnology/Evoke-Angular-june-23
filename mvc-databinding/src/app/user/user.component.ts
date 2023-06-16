import { Component } from '@angular/core';
import { User } from './user.type';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {
  //model-data : primitive
  userId: number = 100
  userName: string = 'Subramanian'
  status: boolean = true
  //object
  user:User = {
    id: 1,
    name: 'Robert',
    status: true,
    address: {
      city: 'New york'
    }
  }
}
