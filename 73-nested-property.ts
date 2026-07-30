// 73. Find nested property safely
function getNestedProperty(obj: any, path: string): any {
  const keys = path.split(".");
  let current = obj;
  for (const key of keys) {
    if (current === null || current === undefined) {
      return undefined;
    }
    current = current[key];
  }
  return current;
}

const data = { user: { profile: { name: "John" } } };
console.log(getNestedProperty(data, "user.profile.name")); // John
console.log(getNestedProperty(data, "user.email")); // undefined
