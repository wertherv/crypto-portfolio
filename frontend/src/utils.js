export function percentDifference(a, b) {
  return +(100 * Math.abs((a - b) / ((a + b) / 2))).toFixed(2);
}

export function capitalize(string) {
  return string.charAt(0).toUpperCase() + string.substr(1);
}
