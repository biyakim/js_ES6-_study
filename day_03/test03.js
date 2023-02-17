console.log("==이터러블 프로토콜을 따른 map의 다형성2==")

let m = new Map();
m.set('a', 10);
m.set('b', 20);
// const it = m[Symbol.iterator]();
// console.log(it.next());
// console.log(it.next());
// console.log(it.next());
console.log(new Map(map(([k,a]) =>[k, a * 2] , m)));