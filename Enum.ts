enum environment{
    QA="www.google.com",
    Dev="www.imageone.com",
    prod="ww.prod.com"

}

function env(input:string)
{
    if (input==environment.QA)
    {
          console.log(`value entered is ${input}`)
    }

    else if (input==environment.Dev)
    {
        console.log(`value entered is ${input}`)
    }
   else if (input==environment.prod)
    {
        console.log(`value entered is ${input}`)
    }
   else{
    console.log("wrong input entered")
   }
    
}


env(environment.QA)