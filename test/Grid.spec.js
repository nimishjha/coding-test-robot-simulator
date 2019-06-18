import assert from 'assert';
import Grid from '../src/Grid';

describe("Grid", () => {
	let grid = null;

 	beforeEach(() => {
		grid = new Grid(5, 5);
	});

 	describe("isValidPosition", () => {
		it("should return true for a valid position", done => {
			assert.equal(grid.isValidPosition(4, 4), true);
			done();
		});

		it("should return false for an invalid position", done => {
			assert.equal(grid.isValidPosition(4, -1), false);
			done();
		});
 	});

});