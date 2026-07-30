function uppercasearray(uppercasearray: string[]): string {
    return uppercasearray.map(str => str.toUpperCase()).join("");
}


console.log(uppercasearray(["hello", "world", "typescript"]));