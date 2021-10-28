function halve(n, { round = false } = { round: false }) {
  const half = n / 2;
  if (round) {
    if (!Number.isInteger(n)) throw new Error(`[halve] can't divide decimal number \"${n}\" into two integers`);
    return [Math.ceil(half), Math.floor(half)];
  } else {
    return [half, half];
  }
}

if (typeof module === "object") module.exports = halve;
if (typeof self === "object") self.halve = halve;
if (typeof window === "object") window.halve = halve;
