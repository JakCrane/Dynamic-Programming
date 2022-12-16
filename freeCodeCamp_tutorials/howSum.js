const howSum = (targetSum, numbers, ls = []) => {
    for (let num of numbers) {
        ls.push(num)
        a = targetSum - num;
        if (a < 0) continue
        if (a == 0) return true
        val = howSum(a, numbers, ls)
        console.log(val)
        
        if (val[0] == true) return [true, ls]
        ls.pop()
    }
    return(false)
}
console.log(howSum(28,[3,4]))