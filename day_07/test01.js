function _pipe() {
    var fns = arguments;
    return function(arg) {
        return _reduce(fns, function(arg, fn) {
            return fn(arg);
        },arg)
    }
}

function _go(arg) {
    var fns = _rest(arguments);
    return _pipe.apply(null, fns)(arg);
}
var f1 = _pipe(
    function() { return a + 1;}, // 1 + 1
    function() { return a * 2; }); // 2 * 2;
console.log(f1(1));

_go(1,
    function() { return a + 1;}, // 1 + 1
    function() { return a * 2; }, // 2 * 2;
console.log);
