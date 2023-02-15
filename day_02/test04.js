console.log("==전개 연산자==")
const a = [1,2];
// a[Symbol.iterator] = null;
// console.log("[...a,...[3,4]] : ",[...a,...[3,4]]);
console.log("[...a,...arr,...set,...map.values()] : ",[...a,...arr,...set,...map.values()]);