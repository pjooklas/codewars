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
    const strArray = Array.from(text.toLowerCase());
    const findDuplicates = arr => arr.filter((item, index) => arr.indexOf(item) != index);
    return [...new Set(findDuplicates(strArray))].length;
};
console.log(duplicateCount("Indivisibility"));


///////////////////Remove First and Last Character///////////////////////////////////
// https://www.codewars.com/kata/56bc28ad5bdaeb48760009b0

function removeChar(str) {
    return str.slice(1, -1);
};
removeChar('eloquent');


///////////////////Sum of two lowest positive integers///////////////////////////////////
// https://www.codewars.com/kata/558fc85d8fd1938afb000014

function sumTwoSmallestNumbers(numbers) {
    numbers.sort((a, b) => a - b);
    return numbers[0] + numbers[1];
}

console.log(sumTwoSmallestNumbers([52, 76, 14, 12, 4]));


///////////////////Mumbling///////////////////////////////////
// https://www.codewars.com/kata/5667e8f4e3f572a8f2000039

function accum(s) {
    const accumArray = s.split('');
    const newAccumArray = [];

    for (let i = 0; i < accumArray.length; i++) {
        let accummed = '';
        do {
            accummed += accumArray[i];
        } while (accummed.length - 1 < i);
        accummed = accummed[0].toUpperCase() + accummed.substring(1).toLowerCase();
        newAccumArray.push(accummed);
    }
    return newAccumArray.join('-');
}

console.log(accum("ZpglnRxqenU"));


///////////////////Be Concise I - The Ternary Operator///////////////////////////////////
// https://www.codewars.com/kata/56f3f6a82010832b02000f38

function describeAge(age) {
    let s = "You're a(n) ";
    return age <= 12 ?
        `${s}kid` :
        age <= 17 ?
        `${s}teenager` :
        age <= 64 ?
        `${s}adult` :
        `${s}elderly`;
}

console.log(describeAge(60));

///////////////////Be Concise II - I Need Squares///////////////////////////////////
// https://www.codewars.com/kata/56f4f7cfaf5b1f8cd100060e

function squaresOnly(a) {
    return r = a.filter(b => Math.sqrt(b) % 1 === 0);
}

console.log(squaresOnly([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10])); //[0, 1, 4, 9]


///////////////////Be Concise III - Sum Squares///////////////////////////////////
// https://www.codewars.com/kata/56f8fe6a2e6c0dc83b0008a7

function sumSquares(a) {
    return r = a.reduce((t, s) => t + Math.pow(s, 2), 0);
}

console.log(sumSquares([11, 13, 15, 18, 2])); //843