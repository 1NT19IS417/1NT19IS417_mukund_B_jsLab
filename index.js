var arr = [];
var len = 0;

function delayreload() {
  location.reload();
}

for (let i = 0; i < 15; i++) {
  var div = document.createElement("div");
  div.id = i + 1;
  div.className = "grid-item";
  var textnode = document.createTextNode(i + 1);
  div.appendChild(textnode);
  document.getElementById("You clicked on the container").appendChild(div);
}

let divs = document.querySelectorAll("div");
console.log(divs);
divs.forEach((div) => {
  div.addEventListener("click", (e) => {
    arr.push(div.id);
    div.style.visibility = "initial";
    len = arr.length;
    if (arr[len - 1] <= arr[len - 2]) {
      document.getElementById("output").innerHTML =
        "You have Missed a Step on the Grass";
      window.setTimeout(() => location.reload(), 3000);
    } else {
      console.log(arr[len - 1]);
    }
    if (arr[len - 1] == 14 && len == 14) {
      document.getElementById("output").innerHTML =
        "You have Followed Along the Path Of the grass";
    }
    e.stopPropagation();
    if (arr[len - 1] <= arr[len - 2]) {
      console.log("You have Played the game");
    }
  });
});
