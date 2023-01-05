//still need to memoize

const howSum = (targetSum, numbers, ls = []) => {
    for (let num of numbers) {
        ls.push(num)
        a = targetSum - num;
        if (a < 0) {ls.pop(); continue}
        if (a == 0) return ls
        if (howSum(a, numbers, ls) != null) return ls
    }
    ls.pop()
    return(null)
}
console.log(howSum(2,[5,3,4,7]))