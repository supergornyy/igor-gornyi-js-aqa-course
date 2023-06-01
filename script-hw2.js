let n

// 
console.log('Виведіть в консоль числа від 1 до n використовуючи цикл for. (Дано: n = 10)')
n = 10
for (let i = 1; i <= n; i++) {
    console.log(i);
}

// 
console.log('')
console.log('Напишіть цикл, який обчислює суму чисел від 1 до n. (Дано: n = 100)')
n = 100
let sum = 0
for (let i = 1; i <= n; i++) {
    sum = sum + i
}
console.log(sum)

// 
n = 10
console.log('')
console.log('Використовуючи цикл while, виведіть в консоль числа від n до 1. (Дано: n = 10)')
while (n) { 
    console.log(n);
    n--;
}

// 
n = 50
console.log('')
console.log('Напишіть цикл, який виводить всі парні числа від 1 до n. (Дано: n = 50)')
for (let i = 2; i <= n; i++) {
    if (i % 2 == 0) {
        console.log(i)
    }
}

// 
n = 10
let res = 0
console.log('')
console.log('Виведіть в консоль таблицю множення від 1 до n використовуючи вкладені цикли. (Дано: n = 10)')
for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n; j++) {
        res = (j * i)
        console.log(i, 'x', j, ' =', res)       
    }
} 

// 
n = 7
console.log('')
console.log('Обчисліть факторіал числа n, використовуючи цикл. (Дано: n = 7)')
let resFact = 1;
for (i = 0; i < n; i++) {
    resFact = resFact * (n - i)
}
console.log(n + '! = ' + resFact)

// 
n = 10
let f0 = 0, f1 = 1, fx
console.log('')
console.log('Виведіть перші n чисел послідовності Фібоначчі. (Дано: n = 10)')
for (let i=0; i <= n; i++) {
    f1 = f0 + f1;
    f0 = f1 - f0;
    console.log(f0)
}


//
n = 100
console.log('')
console.log('Виведіть всі прості числа від 1 до n. (Дано: n = 100)')
simpleNum:
for (let i=2; i <= n; i++) {
    for (let j = 2; j < i; j++)    
        if (i%j === 0) {
            continue simpleNum
        }
    console.log(i)
}

// 
n = 100
console.log('')
console.log('Створіть масив чисел від 1 до n, а потім виведіть тільки ті числа, що діляться на 5 без остачі. Дано: n = 100')
let array1 = [];
for (let i = 1; i <= n; i++) {
    if (i%5 === 0) {
        array1.push(i);
    }
}
console.log('The array is:', array1)

// 
console.log('')
console.log('Дано масив чисел. Обчисліть суму чисел в цьому масиві. (Дано: масив = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10])')
let array2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let arrSum = 0
for (i = 0; i < array2.length; i++) {
    arrSum += array2[i]
}
console.log('The sum is =', arrSum)
