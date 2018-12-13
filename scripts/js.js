//if (2*4 ==7) {
  //  console.log("Верно!")
//} else {
  //  console.log("Не верно!")
//}

let num = 50;

if (num < 49) {
    console.log("Не верно!")
} else if (num > 100) {
    console.log("Много!")
} else {
    console.log("Верно!")
};

(num == 50) ? console.log("Верно!") : console.log("Не верно!");

switch (num) {
    case num < 49:
        console.log("Не верно!");
        break;
    case num > 100:
        console.log("Много!");
        break;
    case num > 80:
        console.log("Все еще много!");
        break;
    case 50:
        console.log("Верно!");
        break;
    default:
        console.log("Что-то пошло не так!");
        break;
}

let numb = 45;
//while (numb < 55) {
//    console.log(numb);
//    numb++;
//}

do {
    console.log(numb);
    numb++;
}
while (numb < 55);

for (let i = 1; i < 8; i++) {
    if (i == 6) {
        continue
    }
    console.log(i)
}