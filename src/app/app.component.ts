import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'CallForCode';
  location = {};
  ngOnInit() {
    this.getLocation();
  }
  getLocation() {
    if (window.navigator.geolocation) {
      window.navigator.geolocation.getCurrentPosition((pos) => this.setPosition(pos))
      return this.location;
    };
  }

  setPosition(position) {
    this.location = position.coords;
    console.log(position.coords);
  }
}
