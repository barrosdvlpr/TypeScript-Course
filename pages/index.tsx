
type Salutation = {greeting:string, name:string}

export default function greet({greeting, name}:Salutation):string {
  return `${greeting}, ${name}!`
} 

const message:string = greet({greeting:"Hello", name:"John"})

console.log(message)