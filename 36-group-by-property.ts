// 36. Group objects by property
interface User {
  name: string;
  department: string;
}

function groupByProperty(arr: User[], property: keyof User): Record<string, User[]> {
  return arr.reduce((acc, obj) => {
    const key = String(obj[property]);
    acc[key] = (acc[key] || []).concat(obj);
    return acc;
  }, {} as Record<string, User[]>);
}

const users: User[] = [
  { name: "Alice", department: "IT" },
  { name: "Bob", department: "HR" },
  { name: "Charlie", department: "IT" },
];

console.log(groupByProperty(users, "department"));
