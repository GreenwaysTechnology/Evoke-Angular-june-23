import { Component } from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent {
    //variable to be passed to the child
    title:string = "Hello"
    name:string = "Subramanian Murugan"
}
