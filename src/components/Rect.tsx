import { fabric } from 'fabric';

export class CustomRect extends fabric.Rect {
  constructor() {
    super({
      backgroundColor: 'blue',
    });
  }
}
