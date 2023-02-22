//외부 다형성
console.log([1,2,3,4].map(function(val){
    return val * 2;
})
);

console.log([1,2,3,4].filter(function(val){
    return val % 2;
})
);

console.log(document.querySelectorAll('*'))

// console.log(
//     _map(document.querySelectorAll('*'), function(node) {
//         return node.nodeName;
//     })
// );

//내부 다형성
_map([1,2,3,4], function(v) {
    return v + 10;
})