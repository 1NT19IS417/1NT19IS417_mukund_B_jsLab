//Title: Js Function for the Regex Program
//Author:Mukund.G USN:1NT19IS417
//Date: 10/06/21

const inp_field = {
  username: /^[a-z\d]{5,12}$/i,
  email: /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/,
  password: /^[#\w@_-]{8,20}$/,
  telephone: /^\d{10}$/,
  profilename: /^[a-z\d-]{8,20}$/,
};

const validate = (field, regex) => {
  regex.test(field.value)
    ? (field.className = "valid")
    : (field.className = "invalid");
};

let keys = document.querySelectorAll("input");
keys.forEach((item) =>
  item.addEventListener("keyup", (e) => {
    validate(e.target, inp_field[e.target.attributes.name.value]);
  })
);
document.addEventListener("click", () => console.log("click"));
