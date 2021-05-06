var rep = [];
var a, b;
const btn = document.getElementById("btn");
btn.addEventListener("click", (e) => {
  a = prompt("Enter number of row");
  b = prompt("Enter number of columns");
  matrix(a, b);
});
function matrix(a, b) {
  for (var i = 0; i < a; i++) {
    rep[i] = [];
  }

  for (var i = 0; i < a; i++) {
    for (var j = 0; j < b; j++) {
      rep[i][j] = prompt(`enter element for row ${i} and column ${j}`);
    }
  }

  for (var i = 0; i < a; i++) {
    for (var j = 0; j < b; j++) {
      console.log(rep[i][j]);
    }
  }
}
