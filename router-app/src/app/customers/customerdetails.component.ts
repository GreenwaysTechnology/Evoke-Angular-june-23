import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-customerdetails',
  templateUrl: './customerdetails.component.html',
  styles: [
  ]
})
export class CustomerdetailsComponent {
  id!: string
  constructor(private route: ActivatedRoute) { }
  ngOnInit(): void {
    this.route.params.subscribe({
      next: params => {
        this.id = params['id']
        //api call to get that particular comment
      }
    })
  }
}
