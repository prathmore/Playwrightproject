let palindrome=(str:string)=>
{
    let word=str.split("").reverse().join("")
    console.log(word)
    if(word===str)
    {
        
        console.log(`${word} is a palindrome`)
    }
    else{
        console.log(`${word} is not a palindrome`)
    }
}

palindrome("Hello");
palindrome("racecar")
palindrome("level")