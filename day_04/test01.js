//순수 함수 
//특징 : 항상 동일한 인자를 넣으면 동일한 결과를 리턴함
//       순수함수는 평가 시점이 중요하지 않다.
function add(a,b){
    return a + b;
}
console.log(add(10,5));
console.log(add(10,5));
console.log(add(10,5));

var c = 10;
function add2(a,b) {
    return a + b + c;
}
console.log(add2(10,2));//22
console.log(add2(10,3));
console.log(add2(10,4));
//순수 함수가 아님
c = 20;
console.log(add2(10,2));//32
console.log(add2(10,3));
console.log(add2(10,4));

var c1 = 20;
function add3(a, b) {
    c1 = b;
    return a + b;
}
console.log("c : ", c1);
console.log(add3(20,30)); 
console.log("c : ", c1);
// console.log(add3(20,30)); 
// console.log(add3(20,30)); 

var obj1 = {val: 10};
function add4(obj, b) {
    obj.val += b;
}
console.log(obj1.val);
add4(obj1,20);
console.log(obj1.val);

//다시 순수 함수
var obj2 = {val : 10};
function add5(obj, b) {
    return {val : obj.val + b }
}
console.log(obj2.val);
var obj3 = add5(obj2, 20);
console.log(obj2.val);
console.log(obj3.val);

