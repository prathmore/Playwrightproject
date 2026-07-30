function displayvalue(value:number):number
function displayvalue(value:string):string
function displayvalue(value:boolean):boolean

function displayvalue(value:number|string|boolean):any
{
    return value;
}

console.log(displayvalue(100))
console.log(displayvalue("prathamesh"))
console.log(displayvalue(false))
