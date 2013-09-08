function Board(canvas) {
  this.cells = this._createMatrix(5, 5);

  this.art = new Art(canvas);
  this.canvas = canvas;
}

Board.cellWidth = 160;
Board.cellPadding = 20;

Board.prototype._createMatrix = function (width, height, opt_val) {
  var m = [];
  var i, j, row;

  for (i = 0; i < width; i++) {
    row = [];
    for (j = 0; j < height; j++) {
      row.push(opt_val);
    }
    m.push(row);
  }

  return m;
}

Board.prototype.show = function () {
  var i, j;
  for (i = 0; i < this.cells.length; i++) {
    for (j = 0; j < this.cells[i].length; j++) {
      this.art.drawSquare(
        (Board.cellWidth + Board.cellPadding) * i + Board.cellPadding,
        (Board.cellWidth + Board.cellPadding) * j + Board.cellPadding,
        Board.cellWidth,
        Board.cellWidth);
    }
  }
};
