console.log("==이터러블 프로토콜을 따른 map의 다형성1==")

console.log("[1,2,3].map(a => a + 1) : ",[1,2,3].map(a => a + 1));
console.log(map(el => el.nodeName, document.querySelectorAll('*')));

// const it = document.querySelectorAll('*')[Symbol.iterator]();
// console.log(it.next());
// console.log(it.next());
// console.log(it.next());
// console.log(it.next());
// console.log(it.next());

function *gen() {
    yield 2;
    if(false) yield 3;
    yield 4;
}
console.log(map(a => a * a, gen()));