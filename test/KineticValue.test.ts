import KineticValue from "../src/KineticValue";

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
    let now = performance.now();
    const a = new KineticValue(0, now);

    now += 1000;
    a.set(200, now);
    expect(a.velocity()).toBeCloseTo(200);

    now += 500;
    a.set(400, now);
    expect(a.velocity()).toBeCloseTo(400);

    now += 100;
    a.set(401, now);
    expect(a.velocity()).toBeCloseTo(10);
  });
});
