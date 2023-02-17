console.log("==filter==")

const filter = (f, iter) => {
    let res = [];
    for(const a of iter) {
        if(f(a)) res.push(a);
}
    return res;
}

// let over20000 = [];
// for(const p of products) {
//     if(p.price >= 20000) over20000.push(p);
// }
// console.log(...over20000);

console.log(...filter(p => p.price < 20000, products));
console.log(...filter(p => p.price >= 20000, products));

console.log(filter(n => n % 2, [1,2,3,4]));

console.log(filter(n => n % 2, function *() {
    yield 1;
    yield 2;
    yield 3;
    yield 4;
    yield 5;

} ()));