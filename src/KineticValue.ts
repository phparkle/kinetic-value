export default class KineticValue {
  private y: number = 0;
  private dy: number = 0;
  private t: number = 0;
  private dt: number = 0;
  private e: number;
  private id: number = 0;
  private a: boolean;

  constructor(initialValue: number, timeout: number = 50, now = performance.now()) {
    this.e = timeout;
    this.a = false;
    this.set(initialValue, now);
  }

  public get() {
    return this.y;
  }

  public set(value: number, now = performance.now()) {
    this.dy = this.a ? value - this.y : 0;
    this.y = value;
    
    this.dt = this.a ? now - this.t : 0;
    this.t = now;

    this.a = true;
    clearTimeout(this.id);
    setTimeout(this.stop, this.e);
  }

  public velocity() {
    return this.dt ? 1000 * this.dy / this.dt : 0;
  }

  public stop = () => {
    this.dy = 0;
    this.dt = 0;
    this.a = false;
  }
}
