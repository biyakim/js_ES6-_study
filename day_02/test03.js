console.log("==사용자 정의 이터러블, 이터러블/이터레이터 프로토콜 정의==")

const iterable = {
    [Symbol.iterator]() {
        let i = 3;
        return {
            next() {
                return i == 0 ? {done: true} : {value: i--, done: false}
            },
            [Symbol.iterator]() {
                return this;
            }
        }
    }
};
let iterator = iterable[Symbol.iterator]();
iterator.next();
iterator.next();
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());

for(const a of iterable) console.log("const a of iterable : ",a);

// const arr2 = [1,2,3];
// let iter2 = arr2[Symbol.iterator]();
// // iter2.next();
// console.log(iter2[Symbol.iterator]() == iter2);
// for(const a of arr2) {
//     console.log("const a of arr2 : ",a);
// }

for(const a of document.querySelectorAll('*')) console.log(a);
const all = document.querySelectorAll('*');
let iter3 = all[Symbol.iterator]();
console.log(iter3.next());
console.log(iter3.next());
console.log(iter3.next());
