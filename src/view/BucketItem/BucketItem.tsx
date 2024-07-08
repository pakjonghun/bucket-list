import { fabric } from 'fabric';
import { Bucket } from '../../model/bucket';

export class BucketItem extends fabric.Group {
  id = '';
  constructor({ id, position, name, description }: Omit<Bucket, 'status'>) {
    const titleObj = new fabric.Textbox(name, {
      fontSize: 20,
      originX: 'center',
      originY: 'center',
      selectable: false,
    });

    const rect = new fabric.Rect({
      width: 100,
      height: 100,
      fill: 'red',
      originX: 'center',
      originY: 'center',
      selectable: false,
    });

    const descObj = new fabric.Textbox(description, {
      fontSize: 20,
      originX: 'center',
      originY: 'center',
      selectable: false,
    });

    super([rect, titleObj], {
      left: position.x,
      top: position.y,
      width: rect.width,
      height: rect.height,
      originX: 'center',
      originY: 'center',
      selectable: true,
      hasControls: false,
    });

    this.id = id;

    // this.rect = rect;
    // this.textObj = textObj;

    // this.animateMovement();
  }

  //   animateMovement() {
  //     const endX = this.left + 200; // 이동할 X 위치
  //     const endY = this.top + 200; // 이동할 Y 위치

  //     this.animate('left', endX, {
  //       onChange: this.canvas.renderAll.bind(this.canvas),
  //       duration: 2000,
  //       easing: fabric.util.ease.easeInOutQuad,
  //       onComplete: () => this.animateMovement(), // 애니메이션 반복
  //     });

  //     this.animate('top', endY, {
  //       onChange: this.canvas.renderAll.bind(this.canvas),
  //       duration: 2000,
  //       easing: fabric.util.ease.easeInOutQuad,
  //       onComplete: () => this.animateMovement(), // 애니메이션 반복
  //     });
  //   }
}
