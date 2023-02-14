console.log("==일급 함수==");
const add5 = a => a + 5;
console.log("add5 : ", add5);
console.log("add5(5) : ", add5(5));

const f1 = () => () => 1;
console.log("f1() : ", f1());

const f2 = f1();
console.log("f2 : ", f2);
console.log("f2() : ", f2());