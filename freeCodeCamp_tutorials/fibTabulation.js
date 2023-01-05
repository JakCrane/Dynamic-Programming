const fibtab = (n) => {
    if (n < 1) return 'error'
    if (n <= 2) return 1
    const tab = new Array(n+2).fill(0);
    tab[0] = 0
    tab[1] = 1
    for (let i = 0; i < tab.length-2; i++) {
        tab[i+1] += tab[i]
        tab[i+2] += tab[i]
    }
    tab.pop()
    return [tab[n], tab]
}
console.log(fibtab(33))
