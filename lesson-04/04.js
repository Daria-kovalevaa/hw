/*
Напишите функцию `doubleEachCharacter`, которая принимает строку и возвращает новую строку, где каждый символ из исходной строки повторяется дважды.

Входные данные:

- **`str`**: Строка, символы которой нужно удвоить.

Выходные данные:

- Новая строка с каждым символом, повторенным дважды.

Пример работы функции: `doubleEachCharacter('hello')` вернёт `'hheelllloo'`
*/


function doubleEachCharacter(str) {
  const copy = []
  const newArray = str.split('')
  for (let i = 0; i <= newArray.length - 1; i++) {
    copy.push(newArray[i] + newArray[i])
  }
  return copy.join('')
}