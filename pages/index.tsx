
export default function Home() {
  return ("Hello World")
}

export function fill<T>(array:any[], value:T):T[]{
  return array.map(() => value)
}

const result = fill([1,2,3], "a")
console.log(result)

const values = fill(["a","b","c"], 4)
values.map(x => x / 2)
console.log(values)
