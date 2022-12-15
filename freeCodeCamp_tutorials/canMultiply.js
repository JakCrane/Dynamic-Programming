const canMultiply = (targetVal, numbers) => {
    let a = 0
    for (let i = 0; i <= numbers.length-1; i++) {
        if (numbers[i] == 1) continue
        a = targetVal/numbers[i]
        if (a == 1) return true
        if (Number.isInteger(a)) return canMultiply(a,numbers)
    }
    return false
}
console.log(canMultiply(7, [5,3,4,7]))