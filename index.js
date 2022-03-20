// https://www.codewars.com/kata/54ff3102c1bad923760001f3

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