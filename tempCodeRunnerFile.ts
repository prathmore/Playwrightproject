function repeatchar(str:string, times:number)
{
    return str.split("").map(char => char.repeat(times)).join("")
}

console.log(repeatchar("abc", 2))