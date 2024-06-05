const inputs = document.querySelectorAll("input");

const patterns = {
  firstName: /^[A-Z][a-zA-Z'’-]*$/,
  lastName: /^[A-Z][a-zA-Z'’-]*$/,
  email: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
  message: /^[A-Z][a-zA-Z'’-]*$/,
};

function validate(field, regex) {
  // console.log(regex.test(field.value))
  if (regex.test(field.value)) {
    field.className = "valid";
  } else {
    field.className = "Invalid";
  }
}

inputs.forEach((input) => {
  input.addEventListener("keyup", (e) => {
    // console.log(e.target.attributes.name.value);
    validate(e.target, patterns[e.target.attributes.name.value]);
  });
});
