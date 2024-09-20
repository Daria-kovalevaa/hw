/*
Напишите функцию `findUniqueElements`, которая принимает массив и возвращает новый массив, содержащий только уникальные элементы из исходного массива.

**Входные данные:**

- **`array`**: Массив, который может содержать повторяющиеся элементы.

**Выходные данные:**

- Массив, содержащий только уникальные элементы из исходного массива.

**Пример использования:**
`findUniqueElements([1, 2, 3, 2, 1, 4])` вернёт `[1, 2, 3, 4]`.

Подсказка: можно использовать функцию `includesElement`, которую мы написали ранее. Переписывать её не нужно, она доступна по всему проекту за счёт hoisting.
*/
// let numbers = [1,2,3,3,3,4,5,2,1]
function findUniqueElements(value, index, self) {
return self.indexOf(value)=== index;
}
let unique = numbers.filter(findUniqueElements)
console.log(unique)
//   let a = findUniqueElements[1, 2, 3, 2, 1, 4]
//   console.log(a);