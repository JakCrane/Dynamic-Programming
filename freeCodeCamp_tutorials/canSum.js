const canSum = (targetSum, numbers, memo={}) => {
    if (targetSum in memo) return memo[targetSum]
    for (let num of numbers) {
        a = targetSum - num;
        if (a < 0) continue
        if (a == 0) return true
        if (canSum(a, numbers, memo)==true) return true  
    }
    memo[targetSum] = false
    return false
}
console.log(canSum(300, [2,28]))