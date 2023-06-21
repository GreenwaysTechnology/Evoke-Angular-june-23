import { Component } from '@angular/core';

@Component({
  selector: 'app-myevents',
  templateUrl: './myevents.component.html',
  styles: [
  ]
})
export class MyeventsComponent {

  greet: string = ""
  name: string = ""
  city: string = "Chennai"
  //attribute binding
  myLogo: string = "favicon.ico"
  isHidden: boolean = true

  //Listener
  onClick() {
    console.log('button is clicked')
  }
  updateGreet(message: any) {
    this.greet = message
  }
  //evt means event object, through which you can access text box value
  onRead(evt: any) {
    this.name = evt.target.value
  }
  showOrHide() {
    this.isHidden = !this.isHidden
  }
}
