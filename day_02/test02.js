console.log("==Array, Set, Map을 통해 알아보는 이터러블/이터레이터 프로토콜==")
console.log("Array를 통해 알아보기")
//Array를 통해 알아보기
const arr = [1,2,3];
let iter1 = arr[Symbol.iterator]();
for(const a of arr) {
    console.log("array : ",a);
}
console.log("Set을 통해 알아보기")
//Set을 통해 알아보기
const set = new Set([1,2,3]);
for(const a of set) {
    console.log("set : ",a);
}

console.log("Map을 통해 알아보기")
//Map을 통해 알아보기
const map = new Map([['a',1],['b',2],['c',3]]);
// var iter2 = map[Symbol.iterator]();
// iter2.next();
// for(const a of iter2) {
//     console.log("map : ",a);
// }
for(const a of map.keys()) console.log(a); // a,b,c
for(const a of map.values()) console.log(a); 
for(const a of map.entries()) console.log(a);