const Grid = function(xSize, ySize) {
	if(xSize < 1 || ySize < 1) {
		throw new Error("x and y sizes must be at least 1");
		return;
	}
	this.xSize = xSize;
	this.ySize = ySize;
	const isValidPosition = (x, y) => !(x < 0 || y < 0 || x >= this.xSize || y >= this.ySize);
	return {
		isValidPosition: isValidPosition,
	};
};

export default Grid;
