import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
  // styles:[              // We can use either styleURLs or inline Styles
  //   `
          // h3{
          //   color: dodgerblue;
          // }
  //   `
  // ]
})
export class AppComponent {
  name = 'first_app';
}
