
function deleteDuplicates(array){

    "use strict";

    const sum = (arrCount, valCount) => {

        let elSum = 0;

        for (let i = 0, j = arrCount.length; i < j; i += 1) {

            if (arrCount[i] === valCount) {
                elSum += 1;
            }
        }

        return elSum;
    };


    let arrUnique = [];


    for(let a = 0; a < array.length; a++) {

        let elCount = sum(array, array[a]);

        if(!(elCount > 1)) {
            arrUnique[arrUnique.length] = array[a];
        }
    }

    return arrUnique;
}


function FailPass(array){

    "use strict";

    let mark1 = 0;
    let mark2 = 0;
    let result1 = 0;
    let result2 = 0;


    for(let i = 0 ; i < array.length ; i++){

        if(array[i] < 50){

            mark1++;
            result1 = result1 + array[i];

        }

        if(array[i] >= 50){

            mark2++;
            result2 = result2 + array[i];

        }
    }
    if(mark1 === 0) {

        result1 = -1;
    }
    else {

        result1 = Math.round(result1/mark1);
    }
    if(mark2 === 0){

        result2 = -1;
    }
    else {

        result2 = Math.round(result2/mark2);
    }

    let avg = [result1 , result2];
    return avg;
}


function checkDate(string) {

    "use strict";

    let month = false ;
    let month2 = false;
    let date = false;
    let date2 = false;
    let m = [];

    m["January"] = 31;
    m["February"] = 28;
    m["March"]= 31;
    m["April"]= 30;
    m["May"]= 31;
    m["June"]= 30;
    m["July"]= 31;
    m["August"]= 31;
    m["September"]= 30;
    m["October"]= 31;
    m["November"]= 30;
    m["December"]= 31;


    let datecount = 0;
    let mstring = "";


    for (i of string) {

        if (!month && !date) {
            if (i == ' ')continue;
            else {
                month = true;
                mstring += i;
            }
        }
        else if (!date && month) {
            if (i === ' ' && !month2) {
                month2 = true;
            }
            else if(i === ' ' && month2) continue;

            else if(!month2) {
                mstring += i;
            }
            else {
                if(i < 0 || i > 9)return false;
                date = 1;
                datecount = (datecount * 10) + Number(i);
            }

        }
        else if(!date2) {
            if (i === ' ') {
                date2 = 1;
            }
            else {
                if(i < 0 || i > 9)return false;
                datecount = datecount * 10 + Number(i);
            }
        }
        else {
            if (i === ' ') continue;
            else {
                return false;
            }
        }
    }

    if(m[mstring] >= datecount && datecount > 0)return true;
    else return false;
}


function dateDiff(str_date1, str_date2){

    let date1 = Date.parse(str_date1);
    let date2 = Date.parse(str_date2);
    return (date2 - date1) / 1000 / 60 / 60 / 24;
}



function SwapCharacters (string,c1,c2) {

    "use strict";

    let length = string.length;

    let store = [];

    let i = 0;


    for(i = 0; i < length; i++){

        let character = string.charAt(i);

        store [i] = character;

    }

    for(i = 0; i < length; i++){

        if(store [i] == c1){

            store [i] = c2;

        }

        else if(store [i] == c2){


            store [i] = c1;

        }

    }

    let updStr="";

    for( i = 0; i < length; i++){

        updStr += store [i];

    }

    return updStr;
}


function moveLetters(string){

    "use strict";

    let newArr = "";
    let upCase = "";
    let lowCase = "";

    for (let i = 0; i < string.length; i++){

        if (string.charCodeAt(i) >= 65 && string.charCodeAt(i) <= 90){

            upCase += string [i];
        }

        else{

            lowCase += string [i];
        }

    }

    newArr += upCase;

    newArr += lowCase;

    return newArr;
}


function stringToNumber(string) {

    "use strict";

    return + string;
}


function SortMe (arr, str) {

    "use strict";

    if ( str === "Asc") {

        let arrSort = false;

        while (!arrSort) {

            arrSort = true;

            for (let i = 1; i < arr.length; i++){

                if (arr [i - 1] > arr [i]) {

                    arrSort  = false;

                    let element = arr [i - 1];

                    arr [i - 1] = arr [i];

                    arr [i] = element;
                }
            }
        }

        return arr;
    }

    else if (str === "Des") {

        for (let a = 1; a < arr.length; a++){

            let secElement = arr[a];

            for (var b = a - 1; b >= 0 && (arr [b] < secElement); b--){

                arr[b + 1] = arr[b];
            }

            arr[b + 1] = secElement;
        }


        return arr;

    }

    else if (str === "None") {

        return arr;
    }
}



function RepeatingChars(str) {

    "use strict";

    for (let i = 0; i < str.length - 1; i++){

        for (let j = i + 1; j < str.length; j++){

            if (str[i] === str[j]){
                return str[i];
            }
        }
    }
    return -1;
}




function CapitalizeLetter(string){

    "use strict";

    let str = "";
    let letter = "";

    for (let i = 0; i < string.length; i++) {
        let newLetter = string[i];
        let letterCode = newLetter.codePointAt(0);
        let letterCapitalize = false;

        if (letterCode >= 97){
            if(letter === " "){
                letterCapitalize = true;
            }
            else if (i === 0){
                letterCapitalize = true;
            }
        }

        letter = newLetter;

        if (letterCapitalize){
            newLetter = String.fromCodePoint(letterCode-32);
        }

        str += newLetter;
    }
    return str;
}