// С помощью цикла while найдите сумму чисел от 1 до 20
// Результат присвойте переменной sum
const MIN = 1
const MAX = 20
let x = MIN
let y = 1
while (x < MAX) {
    x = x + 1
    y = y + x
}
// your code
let sum = y
console.log (sum)
