// add whatever parameters you deem necessary
function averagePair(arr, num) {
    if (arr.length < 1) return false;
    let i = 0;
    let j = arr.length - 1;
    while (i < j) {
        let avg = (arr[i] + arr[j]) / 2;
        if (num == avg) return true;
        if (num > avg) {
            i++;
        } else {
            j--
        };
    }
    return false;
}
