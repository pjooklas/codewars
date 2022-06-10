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


///////////////////Parse nice int from char problem///////////////////////////////////
// https://www.codewars.com/kata/557cd6882bfa3c8a9f0000c1

function getAge(inputString) {
    return parseInt(inputString[0]);
}

console.log(getAge(5));


/////////////////// longest_palindrome ///////////////////////////////////
// https://www.codewars.com/kata/54bb6f887e5a80180900046b/javascript

longestPalindrome = function(s) {
    if (s.length == 1) {
        return 1;
    } else if (s.length > 1) {
        const wordArray = s.toString().split(' ');
        const palindromeArray = [];

        wordArray.forEach(a => {
            let wordForwards = '';
            let wordBackwards = '';
            for (let i = 0; i <= a.length - 1; i++) {
                for (let k = 0; k <= a.length; k++) {
                    wordForwards = a.substring(i, k);
                    wordBackwards = a.split("").reverse().join("").substring(a.length - i, a.length - k);
                    if (wordForwards == wordBackwards && wordForwards.length > 0) {
                        palindromeArray.push(wordForwards);
                    }
                }
            }
        });

        palindromeArray.sort((a, b) => a.length - b.length);
        let answer = palindromeArray[palindromeArray.length - 1].length;
        return answer;
    } else {
        return 0;
    }
}


console.log(longestPalindrome("aa")); //9


/////////////////// Multiples of 3 or 5 ///////////////////////////////////
// https://www.codewars.com/kata/514b92a657cdc65150000006/
console.log('---');

function solution(number) {
    if (number) {
        const setas = new Set;
        for (let i = 0; i < number; i++) {
            if (i % 3 == 0 || i % 5 == 0) {
                setas.add(i);
            }
        }
        let ats = Array.from(setas).reduce((a, b) => a + b, 0);
        return ats;
    } else {
        return 0;
    }

}

console.log(solution(10));


/////////////////// Who likes it? ///////////////////////////////////
// https://www.codewars.com/kata/5266876b8f4bf2da9b000362

function likes(names) {
    return names.length > 3 ? `${names[0]}, ${names[1]} and ${names.length-2} others like this` :
        names.length == 3 ?
        `${names[0]}, ${names[1]} and ${names[2]} like this` :
        names.length == 2 ?
        `${names[0]} and ${names[1]} like this` :
        names.length == 1 ?
        `${names[0]} likes this` :
        'no one likes this';
}

console.log(likes(['Alex', 'Jacob', 'Mark', 'Max']));


/////////////////// Stop gninnipS My sdroW! ///////////////////////////////////
// https://www.codewars.com/kata/5264d2b162488dc400000001

function spinWords(string) {
    const zodziai = string.split(' ');
    const atsakymas = [];
    for (let i = 0; i < zodziai.length; i++) {
        zodziai[i].length >= 5 ? atsakymas.push(zodziai[i].split("").reverse().join("")) : atsakymas.push(zodziai[i]);
    }
    return atsakymas.join(' ');
}

console.log(spinWords("This is another test"));


/////////////////// Bit Counting ///////////////////////////////////
// https://www.codewars.com/kata/526571aae218b8ee490006f4

var countBits = function(n) {
    let count = 0;
    for (let i = 0; i < n.toString(2).length; i++) {
        if (n.toString(2)[i] == 1) {
            count++;
        }
    }
    return count;
};

console.log(countBits(1234));


/////////////////// How many pages in a book? ///////////////////////////////////
// https://www.codewars.com/kata/622de76d28bf330057cd6af8
console.log('---');

function amountOfPages(summary) {
    let sum = '';
    let n = 0;
    do {
        n++;
        sum += n;
    } while (sum.length < summary);

    return n;
}

console.log(amountOfPages(25));


/////////////////// ISBN-10 Validation ///////////////////////////////////
// https://www.codewars.com/kata/51fc12de24a9d8cb0e000001
console.log('---');

function validISBN10(isbn) {
    const allowed = '0123456789X';
    let sum = 0;

    for (const symbol of isbn) {
        if (!allowed.includes(symbol)) {
            return false;
        }
    }
    if (isbn.length != 10) {
        return false;
    }
    if (isbn.includes('X')) {
        if (isbn.indexOf('X') !== 9) {
            return false;
        }
    }

    for (let i = 1; i < 11; i++) {
        let iks = isbn[i - 1] == 'X' ? 10 : isbn[i - 1];
        sum += i * iks;
    }

    if (sum % 11 == 0) {
        return true;
    } else return false;

}

console.log(validISBN10("081650363X7"));

/////////////////// Your order, please ///////////////////////////////////
// https://www.codewars.com/kata/55c45be3b2079eccff00010f
console.log('---');

function order(words) {
    const array = words.split(' ');
    const sortedArray = [];
    // console.log(array);

    // for (let i = 0; i < array.length; i++) {
    //     if (array[i]) {
    //         console.log(array[i].contains('/\[i]/'));
    //     }
    // }
    console.log(sortedArray);
}

console.log(order("is2 Thi1s T4est 3a"));


/////////////////// Recursive Replication ///////////////////////////////////
// https://www.codewars.com/kata/57547f9182655569ab0008c4
console.log('---');


function replicate(times, number) {
    const array = [];
    const count = times - 1;

    if (times < 0) {
        return [];
    }
    if (count > 0) {
        const replikatas = replicate(count, number);
        array.push(...replikatas);
    }
    array.push(number);

    return array;
}

console.log(replicate(-1, 12));


/////////////////// Get list sum recursively ///////////////////////////////////
// https://www.codewars.com/kata/57a84137cf1fa5f9f80000d6

function sumR(x) {
    return x.length > 0 ? x.reduce((t, a) => t + a) : 0;
}

console.log(sumR([1, 1]));



/////////////////// Sum of positive ///////////////////////////////////
// https://www.codewars.com/kata/5715eaedb436cf5606000381
console.log('---');

function positiveSum(arr) {
    if (arr.filter(a => a > 0).length < 1) {
        return 0;
    }
    return arr.filter(a => a > 0).reduce((t, b) => t + b)
}

console.log(positiveSum([1, 2, 3, 4, 5])); //15


/////////////////// Find the odd int ///////////////////////////////////
// https://www.codewars.com/kata/54da5a58ea159efa38000836
console.log('---');

function findOdd(A) {

    let arrObj = {};

    for (let i = 0; i < A.length; i++) {
        if (arrObj[A[i]] == undefined) {
            arrObj[A[i]] = 1;
        } else {
            arrObj[A[i]] = arrObj[A[i]] + 1;
        }
    }

    for (const key in arrObj) {
        if ((arrObj[key] % 2)) {
            return +key;
        }
    }
}

console.log(findOdd([20, 1, -1, 2, -2, 3, 3, 5, 5, 1, 2, 4, 20, 4, -1, -2, 5])); //5


/////////////////// Array.diff ///////////////////////////////////
// https://www.codewars.com/kata/523f5d21c841566fde000009
console.log('---');

function arrayDiff(a, b) {
    let newArr = a;
    for (let i = 0; i < b.length; i++) {
        newArr = newArr.filter(x => x != b[i]);
    }
    return newArr;
}

console.log(arrayDiff([1, 2, 3], [1, 2]));


/////////////////// Isograms ///////////////////////////////////
// https://www.codewars.com/kata/54ba84be607a92aa900000f1
console.log('---');

function isIsogram(str) {
    const string = str.toLowerCase();
    let arrObj = {};

    for (let i = 0; i < string.length; i++) {
        if (arrObj[string[i]] == undefined) {
            arrObj[string[i]] = 1;
        } else {
            return false;
        }
    }
    return true;
}

console.log(isIsogram("Dermatoglyphics")); //true


/////////////////// Find The Parity Outlier ///////////////////////////////////
// https://www.codewars.com/kata/5526fc09a1bbd946250002dc
console.log('---');

function findOutlier(integers) {
    let odd = [];
    let even = [];
    for (let i = 0; i < integers.length; i++) {
        if (integers[i] % 2) {
            odd.push(integers[i]);
        } else {
            even.push(integers[i]);
        }
    }
    return odd.length > even.length ? even[0] : odd[0];
}

console.log(findOutlier([2, 6, 8, 10, 3])); //3


/////////////////// Duplicate Encoder ///////////////////////////////////
// https://www.codewars.com/kata/54b42f9314d9229fd6000d9c
console.log('---');

function duplicateEncode(word) {
    word = word.toLowerCase();
    let countSymbols = {};
    let dublicateString = '';

    for (let i = 0; i < word.length; i++) {
        if (countSymbols[word[i]] == undefined) {
            countSymbols[word[i]] = 1;
        } else {
            countSymbols[word[i]] += 1;
        }
    }

    for (let i = 0; i < word.length; i++) {
        if (countSymbols[word[i]] == 1) {
            dublicateString += '(';
        } else {
            dublicateString += ')';
        }
    }

    return dublicateString;
}

console.log(duplicateEncode("recede")); //()()()


/////////////////// Replace With Alphabet Position ///////////////////////////////////
// https://www.codewars.com/kata/546f922b54af40e1e90001da
console.log('---');

function alphabetPosition(text) {
    text = text.toLowerCase();
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    let alphabetSymbolsPosition = '';

    for (let i = 0; i < text.length; i++) {
        if (alphabet.includes(text[i])) {
            alphabetSymbolsPosition += alphabet.indexOf(text[i]) + 1 + ' ';
        }
    }

    return alphabetSymbolsPosition.trim();
}

console.log(alphabetPosition("The sunset sets at twelve o' clock."));
//"20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11"


/////////////////// Persistent Bugger. ///////////////////////////////////
// https://www.codewars.com/kata/55bf01e5a717a0d57e0000ec
console.log('---');

function persistence(num) {
    for (var i = 0; num > 9; i++) {
        num = num.toString().split('').reduce((t, c) => c * t);
    }
    return i;
}

console.log(persistence(999));


/////////////////// Remove String Spaces ///////////////////////////////////
// https://www.codewars.com/kata/57eae20f5500ad98e50002c5
console.log('---');

function noSpace(x) {
    return x.replace(/\s/g, '');
}
console.log(noSpace('8 j 8   mBliB8g  imjB8B8  jl  B'));


/////////////////// Your order, please ///////////////////////////////////
// https://www.codewars.com/kata/55c45be3b2079eccff00010f
console.log('---');

function order(words) {
    let wordsArray = words.split(' ');
    let resultArray = [];
    let resultObj = {};

    for (let i = 1; i < wordsArray.length + 1; i++) {
        resultObj[+(wordsArray[i - 1].split('').filter(x => +x))] = wordsArray[i - 1];
    }

    for (let i = 1; i < wordsArray.length + 2; i++) {
        resultArray.push(resultObj[i - 1]);
    }

    return words.length != 0 ? resultArray.join(' ').trim() : '';
}

console.log(order("4of Fo1r pe6ople g3ood th5e the2")); // "Thi1s is2 3a T4est"


/////////////////// Simple Pig Latin ///////////////////////////////////
// https://www.codewars.com/kata/520b9d2ad5c005041100000f
console.log('---');

function pigIt(str) {
    let wordsArray = str.split(' ');
    let resultArray = [];

    for (let word of wordsArray) {
        let newWord = '';

        if (/^[a-zA-Z]+$/.test(word)) {
            if (word.length == 1) {
                newWord = word + 'ay';
            } else {
                newWord = word.slice(1) + word[0] + 'ay';
            }
        } else {
            resultArray.push(word);
        }

        resultArray.push(newWord);
    }

    return resultArray.join(' ').trim();
}

console.log(pigIt('Pig latin is cool')); //'igPay atinlay siay oolcay'


/////////////////// Moving Zeros To The End ///////////////////////////////////
// https://www.codewars.com/kata/52597aa56021e91c93000cb0
console.log('---');

function moveZeros(arr) {
    let resultArra = [];
    let countZeros = 0;

    for (const element of arr) {
        if (element !== 0) {
            resultArra.push(element);
        } else {
            countZeros++;
        }
    }

    for (let i = 0; i < countZeros; i++) {
        resultArra.push(0);
    }

    return resultArra;
}

console.log(moveZeros([false, 1, 0, 1, 2, 0, 1, 3, "a"])); // [false,1,1,2,1,3,"a",0,0]