export default class KineticValue {
  private y: number = 0;
  private dy: number = 0;
  private t: number = 0;
  private dt: number = 0;
  private e: number;

  constructor(initialValue: number, timeout: number = 50, now = performance.now()) {
    this.e = timeout;
    this.set(initialValue, now);
  }

  public get() {
    return this.y;
  }

  public set(value: number, now = performance.now()) {
    this.dy = value - this.y;
    this.y = value;
    
    this.dt = now - this.t;
    this.t = now;

    if (this.dt > this.e) this.dt = 0;
  }

  public velocity(now = performance.now()) {
    if (!this.dt || now - this.t > this.e) return 0;
    return 1000 * this.dy / this.dt;
  }

  public stop = () => {
    this.dt = 0;
  }
}
