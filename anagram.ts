function normalize(text: string): string {
  return text
    .replace(/[^a-z0-9]/gi, "")
    .toLowerCase()
    .split("")
    .sort()
    .join("");
}

function isAnagram(first: string, second: string): boolean {
  return normalize(first) === normalize(second);
}

console.log(isAnagram("listen", "silent")); // true
console.log(isAnagram("hello", "world")); // false
console.log(isAnagram("Dormitory", "Dirty Room"));

/* function normalize(text: string): string {
Declares a function named normalize.
text: string means the input must be a string.
: string after the parentheses means the function returns a string.
.replace(/[^a-z0-9]/gi, "")
.replace(...) creates a new string by replacing matched characters.
/[^a-z0-9]/gi is a regular expression:
^ inside square brackets means "not".
a-z0-9 means all letters a to z and digits 0 to 9.
g means "global" (replace every match, not just the first).
i means "case-insensitive" (match both uppercase and lowercase letters).
"" means replace matched characters with an empty string (remove them).
Removes any characters that are not letters or digits.
g is global, i is case-insensitive.
.toLowerCase()
Converts the string to lowercase so casing does not affect comparison.
.split("")
Turns the string into an array of individual characters.
.sort()
Sorts the characters alphabetically.
.join("")
Joins the sorted characters back into a string. */