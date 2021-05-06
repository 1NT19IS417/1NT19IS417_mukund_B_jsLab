function ten(m, n) {
  if (m === 10 || n === 10) {
    return true;
  }
  if (m + n === 10) {
    return tr;
  }

  return m === 10 || n == 10 || m + n === 10 ? true : false;
}

var res = ten(1, 1);
console.log(res);

function score(x, y, z) {
  return 3 * x + 1 * y + 0 * z;
}
console.log(score(1, 2, 3));
