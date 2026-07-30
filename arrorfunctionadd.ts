

function add(a:number, b:number, callback:any) {
    return callback(a, b);
    //callback(a,b);
}

function callback(a:number, b:number) {
    return a + b;
}

console.log(add(3, 5, callback));