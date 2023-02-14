console.log("==고차함수==");
const apply1 = f => f(1);
const add2 = a => a + 2;
console.log(apply1(add2));
console.log(apply1(a => a - 1));

const times = (f, n) => {
    let i = -1;
    while(++i < n) f(i);
}

times(console.log,3);
times(a => console.log(a + 10),3);

const addMaker = a => b => a + b;
const add20 = addMaker(10)
console.log(add20(5));
console.log(add20(10));


