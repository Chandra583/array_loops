let num = [3, 54, 54, 25, 2]

for(let i=0; i<num.length; i++)
  {
    console.log(num[i])
  }
num.forEach((i) => {
  console.log(i)
})

//array from
let name = "chandra";
let arr = Array.from(name);
console.log(typeof arr, arr)
arr.forEach((a)=>{
  console.log(a);
})

let ch = [11,45,77,85,41]
for(let i of ch){
  console.log(i)
}

let a = 45;
console.log(a)