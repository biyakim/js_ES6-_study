console.log("==제너레이터와 이터레이터==")
function *gen() {
    yield 1;
    if(false) yield 2;
    yield 3;
    return 100; //순회를 돌리면 나오지 않음
}
let iter = gen();
console.log(iter[Symbol.iterator]() == iter);
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());

for(const a of gen()) console.log("const a of gen() : ",a);