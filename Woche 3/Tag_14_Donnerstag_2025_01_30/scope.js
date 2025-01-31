// global scope
let a = 10;

{
  // local scope
  let a = 20;
  console.log(a); // 20
  {
    a = 30;
    console.log(a); // 30
  }
  console.log(a); // 30
}

// global scope
console.log(a) // 10