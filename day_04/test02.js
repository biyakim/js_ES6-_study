//일급 함수 : 함수를 값으로 다룰 수 있다
var f1 = function(a) {
    return a * a;
}
console.log(f1);

var f2 = add;
console.log(f2);

function f3(f) {
    return f();
}

console.log(f3(function() { return 10;}));

console.log(f3(function() { return 20;}));

//add_maker

function add_maker(a) {
    return function(b) {
        return a + b;
    }
}

var add10 = add_maker(10);

console.log(add10(20));

var add5 = add_maker(5);
var add15 = add_maker(15);

console.log(add5(10));
console.log(add15(10));

console.log(add10(20))

function f4(f1,f2,f3) {
    return f3(f1() + f2());
}
console.log(
    f4(
        function() { return 2;},
        function() { return 1;},
        function(a) {return a * a; }));