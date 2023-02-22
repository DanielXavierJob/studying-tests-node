import {
  describe,
  it,
  before,
  beforeEach,
  afterEach,
  after,
  mock,
} from "node:test";
// import Debug from "debug";
import { deepStrictEqual } from "node:assert";
import { setTimeout } from "node:timers/promises";
// const debug = Debug("test:index");

function sum(...args) {
  return args.reduce((after, next) => after + next, 0);
}

class Timer {
  async sumDelayed(...args) {
    setTimeout(1000)
    return sum(args);
  }
}

describe("Using Node.js only!!", () => {
  // before(() => debug('vou rodar antes de todo mundo!!'))
  // beforeEach(() => debug('vou rodar antes de cada teste!'))
  // after(() => debug('vou rodar depois de todo mundo!'))
  // afterEach(() => debug('vou rodar depois de cada teste!'))

  it("it should sum many values", () => {
    const expected = 20;
    const current = sum(5, 5, 5, 5);
    deepStrictEqual(current, expected);
  });

  it("it should sum values after a second", () => {
    const timer = new Timer();
    const promise = timer.sumDelayed(4,5)
    console.log(promise)
    // const fn = mock();
  });
});
