//let num = 20;

//function showFirstMessage(text) {
 //   alert(text);
 //   let num = 10;
 //   console.log(num);
//}

//showFirstMessage("Hello World!");
//onsole.log(num);

/*  let calc = function (a,b) {
    return (a + b);
} */

/* let calc = (a,b) => a+b;

console.log(calc(3,4));
console.log(calc(5,4)); 

function retVar () {
    let num = 50;
    return num;
}

let anotherNum = retVar();
console.log(anotherNum);

let str = "test";
console.log(str.length);

console.log(str.toUpperCase());
console.log(str.toLowerCase());

let twelve = "12.2px";
//console.log(Math.round(twelve));
console.log(parseInt(twelve));
console.log(parseFloat(twelve)); */


// callback ф-ии
function first() {
    setTimeout( function() {
        console.log(1);
    }, 500 );
}

function second() {
    console.log(2);
}

first();
second();

function learnJS(lang, callback) {
    console.log("Я учу " + lang);
    callback();
}

function done() {
    console.log("Я прошел 3й урок!")
}

learnJS("JavaScript", done); 
