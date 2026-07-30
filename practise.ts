function thirdlargest(arr:number[]):number
{
  const result= [...new Set(arr)].sort((a,b)=>b-a)
  return result[4]
}

console.log(thirdlargest([254,4,564,242]))

function largest(arr2:number[]):number{
    return Math.max(...arr2)
}

function pyramid(n:number):void{

    for(let i=1;i<=n;i++)
    {
        console.log("*".repeat(i)) 
    }
}

pyramid(10)

function repeatchar(str:string, times:number)
{
    return str.split("").map(char => char.repeat(times)).join("")
}

console.log(repeatchar("abc", 2))