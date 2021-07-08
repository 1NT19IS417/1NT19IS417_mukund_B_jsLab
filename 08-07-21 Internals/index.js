var fro = document.getElementById("from");
var To = document.getElementById("to");
var sign = document.getElementById("sig");

var ar = [];
const sub = () => {
  var data = {
    from: from.value,
    To: to.value,
    sign: sig.value,
  };
  console.log(data);
  ar.push(data);
  console.log(ar);

  nam.value = "";
  reg.value = "";
  sign.value = "";
};

const show = () => {
  var output = "";
  ar.forEach((ele) => {
    output += `<h3> No of signals </h3><p>No of Signals :${ele.sign}</p>`;
  });

  document.getElementById("out").innerHTML = output;
};
