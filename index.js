// https://www.codewars.com/kata/54ff3102c1bad923760001f3
// Vowels Count

function getCount(str) {
    var vowelsCount = 0;
    for (let i = 0; i < str.length; i++) {
        str[i] == 'a' || str[i] == 'e' || str[i] == 'i' || str[i] == 'o' || str[i] == 'u' ?
            vowelsCount++ :
            vowelsCount;
    };
    console.log(vowelsCount);
}
getCount('abracadabra');

/////////////////////// String repeat/////////////////////////////////
// https://www.codewars.com/kata/57a0e5c372292dd76d000d7e


function repeatStr(n, s) {
    console.log(s.repeat(n));
}
repeatStr(2, "ha ");

///////////////////Credit Card Mask///////////////////////////////////
// https://www.codewars.com/kata/5412509bd436bd33920011bc

// return masked string
function maskify(cc) {
    for (let i = 0; i < cc.length - 4; i++) {
        cc = cc.replace(cc[i], '#');
    }
    return cc;
}
console.log(maskify("64607935616"));


///////////////////Count the number of Duplicate///////////////////////////////////
// https://www.codewars.com/kata/54bf1c2cd5b56cc47f0007a1

function duplicateCount(text) {
    let strArray = Array.from(text.toLowerCase());
    let findDuplicates = arr => arr.filter((item, index) => arr.indexOf(item) != index);
    return [...new Set(findDuplicates(strArray))].length;
};
console.log(duplicateCount("Indivisibility"));