# kinetic-value

> Tiny and performant class for tracking the instantaneous velocity of a continuously changing value.

## Install

```sh
npm install kinetic-value
```

## Usage

```js
import KineticValue from "kinetic-value";

// Create a kinetic value
const kv = new KineticValue(0);

setInterval(() => {
  // Increment by 50 every 100ms
  kv.set(kv.get() + 10);

  // Velocity will be about 500
  console.log(kv.velocity());
}, 100);
```

## API Reference

### new KineticValue(initialValue: number)

Creates a new kinetic value.

### get()

Returns the current tracked value.

### set(value: number)

Updates the tracked value.

### velocity()

Returns the instantaneous velocity of the tracked value in units / second.

## Author

- [@phparkle](https://www.github.com/phparkle)
