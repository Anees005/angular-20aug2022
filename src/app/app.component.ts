import { Component } from '@angular/core';

enum Location {
  NORTH = 'north',
  SOUTH = 'south',
}
interface Contact {
  city: string | number;
  location: Location;
}

@Component({
  selector: 'tri-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  // public name = "praveen";

  name: string | number = 49789273948234;

  contact: Contact[] = [
    {
      city: 'delhi',
      location: Location.NORTH,
    },
    {
      city: 'bangalore',
      location: Location.NORTH,
    },
  ];

  private company = 'edureka';

  hello(name: string): string {
    this.name = 480923;
    return '';
  }
}
