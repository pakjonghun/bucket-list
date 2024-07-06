import * as fabric from 'fabric';

export class BucketItem extends fabric.Group {
  constructor(options = {}, title: string, description: string) {
    const rect = new fabric.Rect({
      width: 100,
      height: 100,
      fill: 'red',
      originX: 'center',
      originY: 'center',
    });

    const titleObj = new fabric.Textbox(title, {
      fontSize: 20,
      originX: 'center',
      originY: 'center',
    });

    const descObj = new fabric.Textbox(description, {
      fontSize: 20,
      originX: 'center',
      originY: 'center',
    });

    super([rect, titleObj], {
      ...options,
      width: rect.width,
      height: rect.height,
      originX: 'center',
      originY: 'center',
    });

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
