export default class ParallaxError extends Error {
  constructor() {
    super();
    this.prefix = "ParallaxError";
  }

  throw(msg) {
    throw new Error(`${this.prefix}: ${msg}`);
  }
}
