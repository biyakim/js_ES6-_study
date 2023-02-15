console.log("==기존과 달라진 ES6에서의 리스트 순회==")
const list = [1,2,3];
for(var i = 0; i< list.length; i++) {
    console.log("list[i] : ", list[i]);
}

const str = 'abc';
for(var i = 0; i< str.length; i++) {
    console.log("str[i] : ", str[i]);
}
 //기존과 달라진 ES6에서의 리스트 순회
 console.log("기존과 달라진 ES6에서의 리스트 순회");
for(const a of list) {
    console.log("const a of list : ",a);
}

for(const a of str) {
    console.log("const a of str",a);
}
