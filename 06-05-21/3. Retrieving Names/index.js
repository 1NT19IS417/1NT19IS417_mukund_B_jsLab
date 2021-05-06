document
  .getElementsByClassName("inputvals")[0]
  .addEventListener("change", (event) => {
    first = event.target.value;
  });

document
  .getElementsByClassName("inputvals")[1]
  .addEventListener("change", (event) => {
    alert(first + " " + event.target.value);
  });
