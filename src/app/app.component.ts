import { WebapiResource } from './resources/webapi-resource';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'clsimulator';
  constructor() {
    const resource = new WebapiResource('api1');
    let counter = 0;

    setInterval( () => {
      console.log('executing timeout');
        resource.acceptRequest(`req${counter++}`);
    }, 1000);
  }
}

