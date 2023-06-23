import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styles: [
  ]
})
export class DashboardComponent {

  constructor(private router:Router){}

  public goToProducts(){
      this.router.navigate(['products'])
  }
  public goToCategory(){
    this.router.navigate(['category'])

  }
  public goToCustomer(){
    this.router.navigate(['customers'])

  }
  public goToWelcome(){
    this.router.navigate(['welcome'])

  }
}
