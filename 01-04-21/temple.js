const b1 = document.getElementById("b1");
const b2 = document.getElementById("b2");
const b3 = document.getElementById("b3");
const b4 = document.getElementById("b4");
let flag = false;

colors = ["red", "green", "blue", "black"];

b1.addEventListener("mouseenter", () => {
  console.log("Entered Road");
});

b2.addEventListener("mouseenter", () => {
  console.log("Entered Temple Premises");
});

b3.addEventListener("mouseenter", () => {
  console.log("Entered Passageway");
});

b4.addEventListener("mouseenter", () => {
  console.log("Entered Sanctum , leave without clicking and die");
});

b4.addEventListener("click", () => {
  flag = true;
});

b4.addEventListener("mouseleave", () => {
  if (!flag) {
    console.log("Dead");
  } else {
    console.log("Alive");
    flag = false;
  }
});
