/**
 * Returns an Art object given an HTML canvas element.
 */
function Art(canvas) {
  this.canvas = canvas
  this.ctx = canvas.getContext('2d');
}

/**
 * Draws a square
 */
Art.prototype.drawSquare = function (x, y, w, h) {
  this.ctx.fillStyle = '#66b5ff';
  this.ctx.fillRect(x, y, w, h);
}
