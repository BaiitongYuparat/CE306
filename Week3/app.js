//Workshop 3.1
let score = 59;

if (score >= 80) {
  console.log("A");
}
if (score >= 70 ) {
  console.log("B");
}
if (score >= 60 ) {
  console.log("C");
}
if (score >= 50 ) {
  console.log("D");
}
if (score < 50) {
  console.log("F");
}

//Workshop 3.2
let Price = 500;
let percentage = 30;
let discount = Price * ( percentage / 100);
let total = Price - discount;

//ราคาที่รวมกับเปอร์เซ็น
console.log(total)

//ราคาที่ตามเงือนไข
if (total <= 0) {
    console.log("0")
}
else if (total <= 500) {
    console.log(total+50)
}
else{
    console.log(total * 90 /100)
}



//Workshop 3.3

let students =[{
    name : "Phuwin" , 
    grade : 3.89
},
{
    name : "Fourth" ,
    grade : 4.00
},
{
    name : "Gemini" ,
    grade : 3.99
}
];

students.forEach((student, index) => {
  console.log(`Student ${index + 1}: ${student.name}, Grade: ${student.grade}`);
});

function showStudentCount() {
  console.log(`Total students: ${students.length}`);
}
showStudentCount();

//Workshop 3.4
let products = [{
  Price: 500,
  discount: 20
},
{
  Price: 90,
  discount: 45
},
{
  Price: 250,
  discount: 90
},
{
  Price: 100,
  discount: 10
},
{
  Price: 400,
  discount: 70
},
]

function calculateTotal() {
  let discountedprice = 0;

  products.forEach(product => {
    const  sumprices = product.Price - (product.Price * (product.discount / 100));
    discountedprice += sumprices;
    console.log(`Product Price: ${product.Price}, Discount: ${product.discount}%, Final Price: ${sumprices}`);
  });

  console.log(`Total price after discounts: ${discountedprice}`);
}
calculateTotal();

//Workshop 3.5
 let student = [{
    nickname : "Book" ,
    score : 30
 },
 {
    nickname : "Jimmy" ,
    score : 40
 },
 {
    nickname : "Force" ,
    score : 29
 },
 {
    nickname : "Nanon" ,
    score : 28
 },
 {
    nickname : "Ice" ,
    score : 30
 },
 {
    nickname : "Sea" ,
    score : 32
 },
];

function filterPassedStudents(minscore) {

  student.forEach(student => {
    if (student.score >= minscore) {
      console.log(`Student ${student.nickname} passed with score ${student.score}`);
    }
  });
}

filterPassedStudents(40);