function _reduce(list, iter, memo) {
    _each(list, function(val) {
        memo = iter(memo, val);
    });
    return memo;
}
console.log(
    _reduce([1,2,3,4], add,0)
); //10




