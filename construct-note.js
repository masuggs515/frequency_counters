// add whatever parameters you deem necessary
function constructNote(str1, str2) {
    if (str2.length === 0) return false;

    const str1Freqs = createFreqCount(str1);
    const str2Freqs = createFreqCount(str2);

    for (let char of str1Freqs.keys()) {
        if (!str2Freqs.has(char)) return false;
        if(str1Freqs.get(char) > str2Freqs.get(char)) return false;
    }
    return true;
}

function createFreqCount(str) {
    const freq = new Map();

    for (let char of str) {
        let charCount = freq.get(char) || 0;
        freq.set(char, charCount + 1);
    };

    return freq;
};
