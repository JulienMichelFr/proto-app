import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Element} from '../interfaces/element';

@Component({
  selector: 'app-element-editor',
  templateUrl: './element-editor.component.html',
  styleUrls: ['./element-editor.component.scss']
})
export class ElementEditorComponent implements OnInit {

  display = {
    outputs: true,
    inputs: true,
    childs: true,
  };

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

  toggleDisplay (key: string) {
    this.display[key] = !this.display[key];
  }
}
