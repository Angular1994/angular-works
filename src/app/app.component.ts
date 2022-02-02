import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular';
  Celsius: number;
  Faranheet: number;

  convert(e: any, type: any) {
    console.log(e, type);
    if (type === 'c') {
      this.Faranheet = e * (9 / 5) + 32;
    } else if (type === 'f') {
      this.Celsius = (e - 32) * (5 / 9);
    } else {
      this.Faranheet = null;
      this.Celsius = null;
    }
  }
}
