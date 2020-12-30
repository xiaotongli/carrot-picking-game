class Head {
  constructor(el) {
    this.node = document.createElement('div');
    this.node.setAttribute('id', 'head');
    el.appendChild(this.node);

    this.currentDirection = 'right';
    this.SPEED = 250;

    this.node.style.top = 0;
    this.node.style.left = 0;

    this.prevPositions = [];

    setTimeout(this.move.bind(this), this.SPEED);
  }

  move() {
    const head = this.node;
    const direction = this.currentDirection;

    let topPosition = Number(head.style.top.replace('px', ''));
    let leftPosition = Number(head.style.left.replace('px', ''));

    if (direction === 'right') {
      head.style.left = `${(leftPosition += 50)}px`;
    } else if (direction === 'left') {
      head.style.left = `${(leftPosition -= 50)}px`;
    } else if (direction === 'top') {
      head.style.top = `${(topPosition -= 50)}px`;
    } else {
      head.style.top = `${(topPosition += 50)}px`;
    }  

    // RETURN TO: define what 'ending the game' means (score, pop-up window, etc)
    if (leftPosition > 650 || leftPosition < 0 || topPosition < 0 || topPosition > 650) { console.log('end game'); } 

    setTimeout(this.move.bind(this), this.SPEED);

    this.prevPositions.unshift({'top': head.style.top, 'left': head.style.left});
  }
}
