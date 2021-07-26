// add whatever parameters you deem necessary
function sameFrequency(num1, num2) {
    if(num1.length !== num2.length) return false;

    let num1Freq = createFreqCount(num1.toString().split(''));
    let num2Freq = createFreqCount(num2.toString().split(''));

    for( let key of num1Freq.keys()){
        if(!num2Freq.has(key)) return false;
        if(num2Freq.get(key) !== num1Freq.get(key)) return false;
    }

    return true;
};

function createFreqCount (num) {
    const freq = new Map();

    for(let val of num){
        let valCount = freq.get(val) || 0;
        freq.set(val, valCount + 1);
    };

    return freq;
};