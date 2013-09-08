/**
 * Returns an Art object given an HTML canvas element.
 */
function Art(canvas, cellWidth, cellPadding) {
  this.canvas = canvas;
  this.ctx = canvas.getContext('2d');
  this.cellWidth = cellWidth;
  this.cellPadding = cellPadding;
}

/**
 * Draws a cell
 */
Art.prototype.drawCell = function (i, j) {
  this.drawSquare(
    (this.cellWidth + this.cellPadding) * i + this.cellPadding, 
    (this.cellWidth + this.cellPadding) * j + this.cellPadding, 
    this.cellWidth, 
    this.cellWidth);
}

/**
 * Draws a square
 */
Art.prototype.drawSquare = function (x, y, w, h) {
  this.ctx.fillStyle = '#66b5ff';
  this.ctx.fillRect(x, y, w, h);
}
