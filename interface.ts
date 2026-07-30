interface person {
    firstname:string,
    lastname:string
}

interface individual extends person{
    phoneno:number
}

let profile:individual={
    firstname:"Prath",
    lastname:"MOre",
    phoneno:1234567890

}

console.log(profile)

