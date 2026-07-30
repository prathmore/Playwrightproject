function reverse(str:string)
{
    let word=str.split("").reverse().join("")
    console.log(word)
}

reverse("Hello")