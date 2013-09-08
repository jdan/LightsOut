function Board(canvas) {
  this.cells = this._createMatrix(Board.GRID_WIDTH, Board.GRID_HEIGHT);

  this.art = new Art(canvas, Board.CELL_WIDTH, Board.CELL_PADDING);
  this.canvas = canvas;
}

Board.CELL_WIDTH = 160;
Board.CELL_PADDING = 20;
Board.GRID_WIDTH = 5;
Board.GRID_HEIGHT = 5;

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

Board.prototype.init = function () {
  this.canvas.onclick = this.handleClickEvent.bind(this);
  this.show();
}

Board.prototype.handleClickEvent = function (e) {
  var rect = this.canvas.getBoundingClientRect();
  var x = (e.clientX - rect.left) * 2;
  var y = (e.clientY - rect.top) * 2;

  var cell = this.getCellFromCoordinates(x, y);
  console.log(cell);
}

Board.prototype.getCellFromCoordinates = function (x, y) {
  var tile = Board.CELL_WIDTH + Board.CELL_PADDING;

  if (x > (Board.CELL_WIDTH + Board.CELL_PADDING) * Board.GRID_WIDTH) return null;
  if (y > (Board.CELL_WIDTH + Board.CELL_PADDING) * Board.GRID_WIDTH) return null;

  if (x % tile > Board.CELL_PADDING && y % tile > Board.CELL_PADDING) {
    return [Math.floor(x / tile), Math.floor(y / tile)];
  } else {
    return null;
  }
}

Board.prototype.show = function () {
  var i, j;
  for (i = 0; i < Board.GRID_WIDTH; i++) {
    for (j = 0; j < Board.GRID_HEIGHT; j++) {
      this.art.drawCell(i, j);
    }
  }
};
