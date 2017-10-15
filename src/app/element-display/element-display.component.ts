import {Component, Input, OnInit} from '@angular/core';
import {Element} from '../interfaces/element';

@Component({
  selector: 'app-element-display',
  templateUrl: './element-display.component.html',
  styleUrls: ['./element-display.component.scss']
})
export class ElementDisplayComponent implements OnInit {

  @Input() element: Element;

  constructor() {
  }

  ngOnInit() {
  }

  get start() {
    return `
<${this.element.name} ${this.element.outputs ? this.element.outputs.reduce((acc, o) => {
      if (!o.name) {
        return acc;
      }
      acc += `(${o.name})="${o.type}" `;
      return acc;
    }, '') : ''}
    ${this.element.inputs ? this.element.inputs.reduce((acc, i) => {
      if (!i.name) {
        return acc;
      }
      acc += `[${i.name}]="${i.type}" `;
      return acc;
    }, '') : ''}>`;
  }



  get end () {
    return `</${this.element.name}>`;
}
}
