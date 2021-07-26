// add whatever parameters you deem necessary
function twoArrayObject(letters, nums) {
    let j = 0;
    let obj = {}
    for(let char of letters){
        obj[char] = nums[j] || null;
        j++;
    };
    return obj;
}
