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

  handleRemove(index: number) {
    this.element.elements.splice(index, 1);
  }

  addInput () {
    if (!this.element.inputs) {
      this.element.inputs = [];
    }
    this.element.inputs.push({
      name: '',
      type: '',
      required: false
    });
  }

  addOutput () {
    if (!this.element.outputs) {
      this.element.outputs = [];
    }
    this.element.outputs.push({
      name: '',
      type: ''
    });
  }

  removeInput (index: number) {
    this.element.inputs.splice(index, 1);
  }

  removeOutput (index: number) {
    this.element.outputs.splice(index, 1);
  }

}
