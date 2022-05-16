export function useRandomSelections(options, numSelections) {

    const randIndexes = [];
    while (randIndexes.length < numSelections) {
        const idx = Math.floor(Math.random() * options.length);
        if (!randIndexes.includes(idx)) {
            randIndexes.push(idx);
        }
    }
    return randIndexes.map(idx => options[idx]);
}