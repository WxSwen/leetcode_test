// 暂时保存全排列
// function permutate(str) {
//     var result = [];
 
//     if(str.length > 1) {
//         var left = str[0];
//         var rest = str.slice(1, str.length);
//         var preResult = permutate(rest);

//         for(var i=0; i<preResult.length; i++) {
//             for(var j=0; j<preResult[i].length + 1; j++) {
//                 var tmp = preResult[i].slice(0, j) + left + preResult[i].slice(j, preResult[i].length);
                
//                 result.push(tmp);
//             }
//         }
//     } else if (str.length == 1) {
//         return [str];
//     }
//     return result;
// }

// permutate('abc');

/**
 * @param {string} s
 * @param {string[]} words
 * @return {number[]}
 */

// 空间复杂度过高 堆栈溢出
// var findSubstring = function(s, words) {
//     let wordsList = permutate(words);
//     let res = [];
    
//     wordsList.forEach( i => {
//         res = [...res, ...getIndex(s, i.join(''))];
//     })

//     let set = new Set(res);
//     return [...set];
// };

// function permutate(list) {
//     if(list.length === 0) return list;
//     if(list.length === 1) return [list];

//     let left = list.slice(0, 1), rest = list.slice(1), result = [];
//     let preResult = permutate(rest);

//     for(let i = 0; i < preResult.length; i++) {
//         for(let j = 0; j < preResult[i].length + 1; j++) {
//             var tmp1 = preResult[i].slice(0, j);
//             var tmp2 = preResult[i].slice(j, preResult[i].length);
//             tmp = [...tmp1, ...left, ...tmp2];
//             result.push(tmp)
//         }
//     }
//     return result;
// }

// function getIndex(s, regStr) {
//     let res = [], len = 0;
//     while(s.length >= regStr.length) {
//         let idx = s.indexOf(regStr);
//         if(idx !== -1) {
//             res.push(idx + len);
//             len += idx + 1;
//             s = s.substring(idx + 1);
//         } else {
//             break;
//         }
//     }
//     return res;
// }

// 1504ms
// var findSubstring = function(s, words) {
//     if(s.length == 0 || words.length ==0){
//         return [];
//     }
//     var len = words.length * words[0].length;
//     var commonStr = words.sort().toString();

//     if(s.length < len){
//         return [];
//     }
//     var result = [];
//     for(let i = 0; i < s.length - len + 1; i++){
//         str = s.substr(i, len);
//         if(isConcatenation(str, words)){
//             result.push(i);
//         }
//     }

//     function isConcatenation(str, words){
//         var arr = [];
//         var re = new RegExp('[a-zA-Z]{' + words[0].length +'}','g');
//         str.replace(re,i=>{arr.push(i)});
//         return arr.sort().toString() === commonStr;
//     }

//     return result;
// };


// 104ms
var findSubstring = function(s, words) {
    var hm = new Map();
    var ans = [];

    if (words.length === 0) return ans;

    var windowSize = 0;
    var wordSize = words[0].length;

    for (let word of words) {
        windowSize += word.length;
        hm.set(word, hm.has(word) ? hm.get(word) + 1: 1);
    }

    var begin = 0, end = 0, counter = hm.size;

    for (let i = 0; i < wordSize; i++) {
        let cm = new Map(hm);
        begin = i;
        end = i;
        counter = cm.size;
        
        while (end + wordSize - 1 < s.length) {
        let lastWord = s.substr(end, wordSize);

        if (cm.has(lastWord)) {
            cm.set(lastWord, cm.get(lastWord) - 1);
            if (cm.get(lastWord) === 0) counter--;
        }

        if (end + wordSize - begin === windowSize) {
            if (counter === 0) ans.push(begin);

            let firstWord = s.substr(begin, wordSize);

            if (cm.has(firstWord)) {
            cm.set(firstWord, cm.get(firstWord) + 1);
            if (cm.get(firstWord) > 0) counter++;
            }

            begin += wordSize;
        }

        end += wordSize;
        }
    }

    return ans;
};

console.log(findSubstring("abababab", ["a","b"]));