import KineticValue from "../src";

describe("get", () => {
  it("returns the initial value", () => {
    const a = new KineticValue(0);
    expect(a.get()).toBe(0);

    const b = new KineticValue(100);
    expect(b.get()).toBe(100);
  });
});

describe("set", () => {
  it("updates the value", () => {
    const a = new KineticValue(0);
    const b = new KineticValue(100);

    a.set(10);
    expect(a.get()).toBe(10);
    expect(b.get()).toBe(100);
    
    b.set(110);
    expect(a.get()).toBe(10);
    expect(b.get()).toBe(110);

    a.set(20);
    expect(a.get()).toBe(20);
    expect(b.get()).toBe(110);
  });
});

describe("velocity", () => {
  it("is initially 0", () => {
    const a = new KineticValue(0);
    const b = new KineticValue(100);

    expect(a.velocity()).toBe(0);
    expect(b.velocity()).toBe(0);
  });

  it("returns the instantaneous velocity", () => {
    let t = performance.now();
    let y = 0;
    const a = new KineticValue(0, 50, t);

    for (let i = 0; i < 50; i++) {
      t += 20;
      y += 10;
      a.set(y, t);
      expect(a.velocity(t)).toBeCloseTo(500);
    }
  });

  it("returns 0 after timeout", () => {
    let t = performance.now();
    const a = new KineticValue(0, 50, t);

    t += 20;
    a.set(10, t);
    expect(a.velocity(t)).toBeCloseTo(500);
    expect(a.velocity(t + 60)).toBe(0);
  });

  it("returns 0 after calling stop", () => {
    let t = performance.now();
    const a = new KineticValue(0, 50, t);

    t += 20;
    a.set(10, t);
    expect(a.velocity()).toBeCloseTo(500);

    a.stop();
    expect(a.velocity()).toBe(0);
  });
});
