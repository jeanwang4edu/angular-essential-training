import { Component } from '@angular/core';

@Component({
    selector: 'mw-app',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = 'Media Watch List';
  desc = 'Keeping track of the media I want to watch.';
}

