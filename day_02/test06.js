console.log("==odds==")
function *infinity(i = 0) {
    while(true) yield i++;
}

function *limit(l, iter) {
    for(const a of iter) {
        yield a;
        if(a == l) return;
    }
}

function *odds(l) {
    for(const a of limit(l, infinity(1))) {
        if(a % 2) yield a;
    }
    // for(let i = 0; i < l; i++) {
    //     if(i % 2) yield i;
    // }
}

let iter4 = odds(10);
console.log(iter4.next());
console.log(iter4.next());
console.log(iter4.next());
console.log(iter4.next());
console.log(iter4.next());
console.log(iter4.next());

for(const a of odds(40)) console.log(a);
