export function shuffle<T>(arr: T[]): T[] {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = randomInt(0, i);
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

export function randomInt(min: number, max: number) {
  return Math.floor(min + randomFloat(0, max - min + 1));
}

export function randomFloat(min: number, max: number) {
  return min + Math.random() * (max - min);
}

export function nameof<T>(name: Extract<keyof T, string>): string {
  return name;
}
