export function randomNum(from: number, to: number): number {
  return Math.floor(Math.random() * Math.abs(to - from)) + from;
}
