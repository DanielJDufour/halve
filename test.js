const test = require("flug");
const halve = require("./halve.js");

test("even integer with rounding", ({ eq }) => {
  const n = 100;
  const [a, b] = halve(n, { round: true });
  eq(a, 50);
  eq(b, 50);
});

test("even integer without rounding", ({ eq }) => {
  const n = 100;
  const [a, b] = halve(n, { round: false });
  eq(a, 50);
  eq(b, 50);
});

test("odd integer with rounding", ({ eq }) => {
  const n = 5;
  const [a, b] = halve(n, { round: true });
  eq(a, 3);
  eq(b, 2);
});

test("odd integer without rounding", ({ eq }) => {
  const n = 5;
  const [a, b] = halve(n, { round: false });
  eq(a, 2.5);
  eq(b, 2.5);
});

test("decimal with rounding", ({ eq }) => {
  let error;
  try {
    const n = 2.5;
    const [a, b] = halve(n, { round: true });
  } catch (err) {
    error = err;
  }
  eq(error.message, `[halve] can't divide decimal number "2.5" into two integers`);
});

test("decimal without rounding", ({ eq }) => {
  const n = 2.5;
  const [a, b] = halve(n, { round: false });
  eq(a, 1.25);
  eq(b, 1.25);
});
