export default function Sum(...numbers: number[]): number {
  return numbers.reduce((a, b) => a + b, 0);
}
