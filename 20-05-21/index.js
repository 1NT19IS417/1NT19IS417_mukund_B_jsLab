let employees = [
  { name: "Himanshu", salary: 95000, joinDate: "July 19, 2001" },
  { name: "Rahul", salary: 75000, joinDate: "August 15, 2004" },
  { name: "Dravid", salary: 80000, joinDate: "December 12, 2003" },
];

//To sort Based on Salary
employees.sort(function (x, y) {
  return x.salary - y.salary;
});

console.table(employees);

//To Sort Based on Name Order
employees.sort(function (x, y) {
  let a = x.name.toUpperCase(),
    b = y.name.toUpperCase();
  return a == b ? 0 : a > b ? 1 : -1;
});

console.table(employees);

//Sorting based on Date of Joining
employees.sort(function (x, y) {
  let a = new Date(x.joinDate),
    b = new Date(y.joinDate);
  return a - b;
});

console.table(employees);
