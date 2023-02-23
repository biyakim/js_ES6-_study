//커링
// 1. _curry, -curryr
function _curry(fn) {
    return function(a, b) {
        return arguments.length == 2 ? fn(a, b) : function(b) { return fn(a, b);};
    }
}

function _curryr(fn) {
    return function(a,b) {
        return arguments.length == 2 ? fn(a, b) : function(b) { return fn(b, a);};
    }
}

var add = _curry(function(a ,b) {
    return a + b;
});

var add10 = add(10);
console.log(add10(5));
var add5 = add(5);


console.log(add(5)(3));
console.log(add5(3));
console.log(add(10)(3));

console.log(add(1,2));

var sub = _curryr(function(a, b) {
    return a - b;
})

console.log(sub(10,5));

var sub10 = sub(10);
console.log(sub10(5));

//_get 만들어 좀 더 간단하게 하기
var _get = _curryr(function _get(obj, key) {
    return obj == null ? undefined : obj[key];
});


// console.log(
//     _map(
//         _filter(users, function(user){ return user.age >= 30; }),
//         _get('name')));

// console.log(
//     _map(
//         _filter(users, function(user){ return user.age < 30; }),
//         _get('age')));
        // function(user) { return user.age; }));

// var user1 = users[0];
// console.log(user1.name);
// console.log(_get(user1,'name'));
// console.log(_get('name')(user1));

// var get_name = _get('name');

// console.log(get_name(user1));
// console.log(get_name(users[3]));
// console.log(get_name(users[4]));

