function _reduce(list, iter, memo) {
    if(arguments.length == 2) {
        memo = list[0];
        list = list.slice(1);
    }
    _each(list, function(val) {
        memo = iter(memo, val);
    });
    return memo;
}
console.log(
    _reduce([1,2,3,4], add,0)
); //10




