export default class KineticValue {
  private y: number = 0;
  private dy: number = 0;
  private t: number = 0;
  private dt: number = 0;

  constructor(initialValue: number, now = performance.now()) {
    this.y = initialValue;
    this.t = now;
  }

  public get() {
    return this.y;
  }

  public set(value: number, now = performance.now()) {
    this.dt = now - this.t;
    this.t = now;

    this.dy = value - this.y;
    this.y = value;
  }

  public velocity() {
    return this.dt ? 1000 * this.dy / this.dt : 0;
  }
}
