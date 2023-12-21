export function customSort(input: string, customAlphabet: string): string {
    if (new Set(customAlphabet).size !== 26) {
        throw new Error("Custom alphabet must contain all 26 letters");
    }

    const charPositions = new Map<string, number>();
    for (let i = 0; i < customAlphabet.length; i++) {
        charPositions.set(customAlphabet[i], i);
    }

    return input.split('').sort((a, b) => {
        return (charPositions.get(a.toLowerCase()) ?? 0) - (charPositions.get(b.toLowerCase()) ?? 0);
    }).join('').toLowerCase();
}
