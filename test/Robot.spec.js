import assert from 'assert';
import Robot from '../src/Robot';
import Grid from '../src/Grid';

describe("Robot", () => {
	let robot = null;
	let grid = null;

 	beforeEach(() => {
		robot = new Robot();
		grid = new Grid(5, 5);
		robot.setGrid(grid);
	});

 	describe("place", () => {
		it("should correctly execute the PLACE command", done => {
			robot.place(0, 0, "NORTH");
			assert.equal(robot.report(), "0, 0, NORTH");
			done();
		});

		it("should refuse to place the robot when a coordinate is greater than the grid's size", done => {
			assert.equal(robot.place(0, 5, "NORTH"), "Invalid position or orientation");
			done();
		});

		it("should refuse to place the robot at a negative coordinate", done => {
			assert.equal(robot.place(-1, 0, "NORTH"), "Invalid position or orientation");
			done();
		});
 	});

 	describe("turnLeft", () => {
		it("should reject a turn command when the robot hasn't been placed", done => {
			assert.equal(robot.turnLeft(), "Cannot turn, need a PLACE command first");
			done();
		});

		it("should execute a left turn when facing north", done => {
			robot.place(0, 0, "NORTH");
			robot.turnLeft();
			assert.equal(robot.report(), "0, 0, WEST");
			done();
		});

		it("should execute a left turn when facing south", done => {
			robot.place(0, 0, "SOUTH");
			robot.turnLeft();
			assert.equal(robot.report(), "0, 0, EAST");
			done();
		});

		it("should execute a left turn when facing east", done => {
			robot.place(0, 0, "EAST");
			robot.turnLeft();
			assert.equal(robot.report(), "0, 0, NORTH");
			done();
		});

		it("should execute a left turn when facing west", done => {
			robot.place(0, 0, "WEST");
			robot.turnLeft();
			assert.equal(robot.report(), "0, 0, SOUTH");
			done();
		});
 	});

 	describe("turnRight", () => {
		it("should reject a turn command when the robot hasn't been placed", done => {
			assert.equal(robot.turnRight(), "Cannot turn, need a PLACE command first");
			done();
		});

		it("should execute a right turn when facing north", done => {
			robot.place(0, 0, "NORTH");
			robot.turnRight();
			assert.equal(robot.report(), "0, 0, EAST");
			done();
		});

		it("should execute a right turn when facing south", done => {
			robot.place(0, 0, "SOUTH");
			robot.turnRight();
			assert.equal(robot.report(), "0, 0, WEST");
			done();
		});

		it("should execute a right turn when facing east", done => {
			robot.place(0, 0, "EAST");
			robot.turnRight();
			assert.equal(robot.report(), "0, 0, SOUTH");
			done();
		});

		it("should execute a right turn when facing west", done => {
			robot.place(0, 0, "WEST");
			robot.turnRight();
			assert.equal(robot.report(), "0, 0, NORTH");
			done();
		});
 	});

 	describe("move", () => {
		it("should reject a command to move west when at the western edge of the grid", done => {
			robot.place(0, 2, "WEST");
			assert.equal(robot.move(), "Cannot move in that direction");
			done();
		});

		it("should reject a command to move south when at the southern edge of the grid", done => {
			robot.place(2, 0, "SOUTH");
			assert.equal(robot.move(), "Cannot move in that direction");
			done();
		});

		it("should reject a command to move east when at the eastern edge of the grid", done => {
			robot.place(4, 2, "EAST");
			assert.equal(robot.move(), "Cannot move in that direction");
			done();
		});

		it("should reject a command to move north when at the northern edge of the grid", done => {
			robot.place(2, 4, "NORTH");
			assert.equal(robot.move(), "Cannot move in that direction");
			done();
		});
 	});

 	describe("report", () => {
		it("should respond correctly when called without having placed the robot first", done => {
			assert.equal(robot.report(), "Nothing to report, need a PLACE command first");
			done();
		});
 	});

});