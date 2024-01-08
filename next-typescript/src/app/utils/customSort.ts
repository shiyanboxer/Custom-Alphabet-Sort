export function customSort(input: string, customAlphabet: string): string {
  if (new Set(customAlphabet).size !== 26) {
      throw new Error("Custom alphabet must contain all 26 letters");
  }

  const charPositions = new Map<string, number>();
  customAlphabet.toLowerCase().split('').forEach((char, index) => {
      charPositions.set(char, index);
  });

  return input.toLowerCase().split('').sort((a, b) => {
      return (charPositions.get(a) ?? 0) - (charPositions.get(b) ?? 0);
  }).join('');
}
