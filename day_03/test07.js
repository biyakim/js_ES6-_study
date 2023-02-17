console.log("==map + filter + reduce 중첩 사용과 함수형 사고==")

const add2 = (a, b) => a + b;
console.log(reduce(add2, map(p => p.price, filter( p => p.price < 20000, products))));

console.log(reduce(add2, filter(n => n >= 20000, map(p => p.price , products))));
