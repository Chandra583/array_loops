let num = [3, 54, 54, 25, 2]

// for(let i=0; i<num.length; i++)
//   {
//     console.log(num[i])
//   }
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
