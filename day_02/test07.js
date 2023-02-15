console.log("==for...of, 전개 연산자, 구조 분해, 나머지 연산자==")
console.log("...odds(10) : ",...odds(10));
console.log("[...odds(10), ...odds(20)] : ",[...odds(10), ...odds(20)]);

const [head, ...tail] = odds(5);
console.log("head : ",head);
console.log("tail : ",tail);

const [a1,b, ...rest] = odds(10);
console.log("a1 : ",a1);
console.log("b : ",b);
console.log("rest : ",rest);