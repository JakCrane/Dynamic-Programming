function hexToRGB(hexcode) {
    let vals = []
    let processedHexCode = [[hexcode[1],hexcode[2]],[hexcode[3],hexcode[4]],[hexcode[5],hexcode[6]]]
    for (let code of processedHexCode) {
        console.log(charToHexNum(code[0]));
        vals.push(charToHexNum(code[0])*16 + charToHexNum(code[1]));
    }
    
    function charToHexNum(a) {
        if (!isNaN(parseInt(a))) {return parseInt(a);}
        switch (a) {
            case 'A':
                return 10
            case 'B':
                return 11
            case 'C':
                return 12
            case 'D':
                return 13
            case 'E':
                return 14
            case 'F':
                return 15
        }
    }
    return `"rgb(${vals[0]} ${vals[1]} ${vals[2]})"`
}
//console.log(hexToRGB('#0A3F00'))

var a = 1;
function f() {
    function n() {
        alert(a)
    }
    
}
f()