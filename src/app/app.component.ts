import { Component } from '@angular/core';
import {Element} from './interfaces/element';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  element: Element = {
    name: 'app-root'
  };
}
