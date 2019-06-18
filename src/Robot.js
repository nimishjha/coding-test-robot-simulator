const Robot = function() {
	this.state = {
		x: null,
		y: null,
		orientation: null,
		grid: null,
	};

	const setGrid = (grid) => {
		this.state.grid = grid;
	};

	const hasBeenInitialised = () => {
		return typeof this.state.x === 'number' && typeof this.state.y === 'number' && isValidOrientation(this.state.orientation);
	};

	const place = (x, y, orientation) => {
		if(this.state.grid.isValidPosition(x, y) && isValidOrientation(orientation)) {
			Object.assign(this.state, { x: x, y: y, orientation: orientation});
			return "OK";
		} else {
			return "Invalid position or orientation";
		}
	};

	const isValidOrientation = (orientation) => {
		return ["NORTH", "SOUTH", "EAST", "WEST"].includes(orientation);
	};

	const turnLeft = () => {
		if(!hasBeenInitialised()) return "Cannot turn, need a PLACE command first";
		switch(this.state.orientation) {
			case 'NORTH': this.state.orientation = 'WEST'; break;
			case 'SOUTH': this.state.orientation = 'EAST'; break;
			case 'EAST': this.state.orientation = 'NORTH'; break;
			case 'WEST': this.state.orientation = 'SOUTH'; break;
		}
		return "OK";
	};

	const turnRight = () => {
		if(!hasBeenInitialised()) return "Cannot turn, need a PLACE command first";
		switch(this.state.orientation) {
			case 'NORTH': this.state.orientation = 'EAST'; break;
			case 'SOUTH': this.state.orientation = 'WEST'; break;
			case 'EAST': this.state.orientation = 'SOUTH'; break;
			case 'WEST': this.state.orientation = 'NORTH'; break;
		}
		return "OK";
	};

	const move = () => {
		if(!hasBeenInitialised()) return "Cannot move, need a PLACE command first";
		let x = this.state.x;
		let y = this.state.y;
		switch(this.state.orientation) {
			case 'NORTH': y++; break;
			case 'SOUTH': y--; break;
			case 'EAST': x++; break;
			case 'WEST': x--; break;
		}
		if(this.state.grid.isValidPosition(x, y))
		{
			place(x, y, this.state.orientation);
			return "OK";
		}
		return "Cannot move in that direction";
	};

	const report = () => {
		if(!hasBeenInitialised()) return "Nothing to report, need a PLACE command first";
		const status = this.state.x + ", " + this.state.y + ", " + this.state.orientation;
		return status;
	};

	return {
		setGrid: setGrid,
		place: place,
		turnLeft: turnLeft,
		turnRight: turnRight,
		move: move,
		report: report,
	};
};

export default Robot;
