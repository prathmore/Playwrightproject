type bvalue=boolean;
type zipcode= string | number;


let txzip:zipcode=123456

console.log(txzip)


type adminperson = {
    username: string
}

type normalperson = {
    fullname: string,
    userid: number
}

type id = {
    onlyid: number
}

type mine = (adminperson | normalperson) & id

let emp: mine = {
    username: "prath",
    userid:1234,
    onlyid: 5311
}

console.log(emp)