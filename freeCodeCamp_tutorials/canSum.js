const canSum = (targetSum, numbers, memo={}) => {
    if (targetSum in memo) return memo[targetSum]
    for (let num of numbers) {
        a = targetSum - num;
        if (a < 0) continue
        if (a == 0) return true
        if (canSum(a, numbers, memo)==true) return true  
    }
    memo[targetSum] = false
    console.log(memo)
    return false
}
console.log(canSum(301, [3,28]))

//https://www.youtube.com/watch?v=oBt53YbR9Kk&ab_channel=freeCodeCamp.org 1hr 26m