import Grid from './Grid';
import Robot from './Robot';

const RobotSimulator = function(x, y) {
	this.table = new Grid(x, y);
	this.robot = new Robot();
	this.robot.setGrid(this.table);

	const handleCommandInput = (evt) => {
		const command = this.inputField.value;
		if(!command.length) return;
		clearStatus();
		switch(evt.keyCode) {
			case 13: run(command); break;
		}
	};

	const clearInput = () => {
		this.inputField.value = '';
	};

	const showStatus = (str) => {
		this.statusField.textContent = str;
	};

	const clearStatus = () => {
		this.statusField.textContent = '';
	};

	const trim = (s) => {
		return s.replace(/^\s+/, '').replace(/\s+$/, '');
	};

	const run = (command) => {
		const parsedCommand = parse(command);
		const action = parsedCommand[0];
		switch(action) {
			case 'PLACE':
				if(!parsedCommand.toString().match(/PLACE,\d,\d,(NORTH|SOUTH|EAST|WEST)/)) {
					showStatus("Invalid command; syntax is PLACE X, Y, ORIENTATION");
					return;
				}
				showStatus(this.robot.place.apply(this, parsedCommand.slice(1)));
				clearInput();
				break;
			case 'MOVE':
				showStatus(this.robot.move());
				clearInput();
				break;
			case 'REPORT':
				showStatus(this.robot.report());
				clearInput();
				break;
			case 'LEFT':
				showStatus(this.robot.turnLeft());
				clearInput();
				break;
			case 'RIGHT':
				showStatus(this.robot.turnRight());
				clearInput();
				break;
			default:
				showStatus("Invalid command. Available commands are PLACE, MOVE, LEFT, RIGHT, and REPORT.");
				break;
		}
	};

	const parse = (command) => {
		let s = trim(command.replace(/,/g, ' ').replace(/\s+/g, ' ')).toUpperCase();
		let args = s.split(' ');
		let parsedCommand = [];
		for(let i = 0, ii = args.length; i < ii; i++) {
			let arg = args[i];
			if(!isNaN(Number(arg)))
				parsedCommand.push(Number(arg));
			else
				parsedCommand.push(arg);
		}
		return parsedCommand;
	};

	const init = () => {
		this.inputField = document.getElementById("command");
		this.statusField = document.getElementById("status");
		if(!this.inputField || !this.statusField) {
			throw new Error("Couldn't find required element in DOM");
			return;
		}
		this.inputField.addEventListener("keydown", handleCommandInput, false);
		this.inputField.focus();
	};

	return {
		init: init,
	};

};

export default RobotSimulator;
