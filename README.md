## Install

```
npm install
```

## Build

```
npm run build
```

## Run tests

```
npm test
```
or
```
npm run test-watch
```
## Run

Open dist/index.html in any modern browser.

## Commands

Available commands are `PLACE`, `MOVE`, `LEFT`, `RIGHT`, and `REPORT`. Commands are case-insensitive. The syntax for all commands except `PLACE` is simply the command name itself. For `PLACE`, the syntax is `PLACE X, Y, ORIENTATION` where `ORIENTATION` is one of `NORTH`, `SOUTH`, `EAST`, or `WEST`, and `X` and `Y` are integers between 0 and 4. The commas are optional, so you can type `PLACE 2 3 NORTH` instead.