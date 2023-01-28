let randomArray = [];
for (let i = 0; i < 100; i++) {
  let randomNum = Math.floor(Math.random() * 50) + 1;
  randomArray.push(randomNum);
}
console.log(randomArray)

let evenArray = [];
let oddArray = [];
for (let i = 0; i < randomArray.length; i++) {
  if (i % 2 === 0) {
    evenArray.push(randomArray[i]);
  } else {
    oddArray.push(randomArray[i]);
  }
}
console.log(evenArray)
console.log(oddArray)

let evenMin = Math.min(...evenArray);
let evenMax = Math.max(...evenArray);
let evenTotal = evenArray.reduce((a, b) => a + b, 0);
let evenAvg = evenTotal / evenArray.length;
console.log(evenMin)
console.log(evenMax)
console.log(evenTotal)
console.log(evenAvg)

let oddMin = Math.min(...oddArray);
let oddMax = Math.max(...oddArray);
let oddTotal = oddArray.reduce((a, b) => a + b, 0);
let oddAvg = oddTotal / oddArray.length;
console.log(oddMin)
console.log(oddMax)
console.log(oddTotal)
console.log(oddAvg)

if (evenMin > oddMin) {
    console.log("Min lebih besar pada array genap");
  } else {
    console.log("Min lebih besar pada array ganjil");
  }
  
  if (evenMax > oddMax) {
    console.log("Max lebih besar pada array genap");
  } else {
    console.log("Max lebih besar pada array ganjil");
  }
  
  if (evenTotal === oddTotal) {
    console.log("Total sama antara array genap dan ganjil");
  }
  
  if (evenAvg > oddAvg) {
    console.log("Rata-rata lebih besar pada array genap");
  } else {
    console.log("Rata-rata lebih besar pada array ganjil");
  }
  

