// add whatever parameters you deem necessary

// return O(n log n)
function countPairs(arr, num) {
    arr.sort((a,b) => a-b);
    let total = 0;
    let start = 0;
    let end = arr.length -1;
    while(start < end) {
        let sum = arr[start] + arr[end];
        if(num === sum){
            total++;
            start++;
            end--;
        } else if(num < sum) {
            end--;
        }else{
            start++;
        }
    }
    return total;
}
