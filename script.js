/*Задание 1:
Программа должна произнести простую фразу, например: «Привет мир!» */
console.log('Hello World')
alert('Hello World')

/*Задание 2:
Задайте значения двух целых переменных (a и b)  и определите: 
a - b,
a + 2,
a * b,
a / b
a % b
a ** b

Все рузультаты сохраните в разные переменные и выведите в консоль. */
let a = 10;
let b = 5;
let sum1 = a - b;
console.log(sum1);
let sum2 = a + 2;
console.log(sum2);
let sum3 = a * b;
console.log(sum3);
let sum4 = a / b;
console.log(sum4);
let sum5 = a % b;
console.log(sum5);
let sum6 = a ** b;
console.log(sum6);

/*Задание 3:
Напишите программу  выполняющую деление первого введенного с клавиатуры (prompt) числа  на второе. */
let num1 = prompt("введите первое число!");
let num2 = prompt("введите второе число!");
document.write(num1, " / ", num2, " = ", num1/num2);

/*Задание 4:
Попросите ввести с клавиатуры число, сравните  его с числом 10. 
Результат сравнения выведите на экран (больше 10 или меньше 10). */

let c = prompt("Введите, пожалуйста, число");
let d = 10;

if (c>d) {
   document.write("Ваше число больше 10");
}
else if (c==d) {
    document.write('Ваше число равно 10')
}
else{
    document.write("Ваше число меньше 10");
}

/*Задание 5:
Напишите скрипт, который находит площадь прямоугольника высота 23см. (в числовую переменную height),
шириной 10см (в числовую переменную width), значение площади должно хранится в числовой переменной s. */
let height = 23;
let width = 10;
let s = height * width;
console.log(`Площадь прямоугольника, ${s} см`);

/* Задание 6:
Создайте 4 переменных name, surname, city, country.
Выведите в консоль предложения типа:
"Привет, меня зовут {name} {surname}, я проживаю в стране {country}, город - {city}" */
let name = "Alex";
let surname = "Konovalov";
let city = "Aleksandriya";
let country = "Ukraine";
console.log(`Привет, меня зовут ${name} ${surname}, я проживаю в стране ${country}, город - ${city}`);

/* Задание 7:
Перепишите задание 6 так, чтобы значение переменных пользователь вводил с клавиатуры. */
let name1 = prompt("Ваше имя");
let surname1 = prompt("Укажите Вашу фамилию");
let city1 = prompt("Из какого Вы города?");
let country1 = prompt("В какой стране проживаете?");
console.log(`Привет, меня зовут ${name1} ${surname1}, я проживаю в стране ${country1}, город - ${city1}`);

/* Задание 8:
Просчитайте результат выражения:
при х = 3 и y = 20 */
let x = 3;
let y = 20;
let sum = ((72 * y) + (22 * x)) / 4 + 232;
console.log(sum);

/* Задание 9:
Просчитайте результат выражения:
при х = 16 и y = 20 */
let x1 = 16;
let y1 = 20;
let sum10 = ((((100 * y1) / 2) + (5 * (x1/5)) - 55) * 6 );
console.log(sum10);

/*Задание 10:
Напишите программу вычисление объема (V) и площади (S) цилиндра.
Радиусом r и высотой h. */

var h = prompt("Введите высоту цилиндра, см:");
var r = prompt("Введите радиус цилиндра, см:");
var v = Math.PI * Math.pow(r, 2) * h;//обьем цилиндра
var s1 = 2 * Math.PI * r *(h + r);//площадь цилиндра

document.write(`Обьем цилиндра =  ${v} см <br/>`);
document.write(`Площадь цилиндра=  ${s1} см <br/>`);
