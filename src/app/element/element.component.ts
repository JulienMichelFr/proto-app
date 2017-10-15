import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Element} from '../interfaces/element';

@Component({
  selector: 'app-element',
  templateUrl: './element.component.html',
  styleUrls: ['./element.component.scss']
})
export class ElementComponent implements OnInit {

  @Input() element: Element;
  @Output() removeElement = new EventEmitter();

  constructor() {
  }

  ngOnInit() {
  }

  remove() {
    this.removeElement.emit();
  }

  add() {
    if (!this.element.elements) {
      this.element.elements = [];
    }
    this.element.elements.push({name: ''});
  }

  handleRemove(index) {
    this.element.elements.splice(index, 1);
  }

}
