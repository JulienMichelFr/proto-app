export interface ElementInput {
  name: string;
  type: string;
  required: boolean;
}

export interface ElementOutput {
  name: string;
  type: string;
}

export interface Element {
  name: string;
  elements?: Element[];
  inputs?: ElementInput[];
  outputs?: ElementOutput[];
}
