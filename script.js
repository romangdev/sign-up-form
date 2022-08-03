function compare_passwords() {
  if (pass_input.value !== "" && pass_confirm_input.value !== "") {
    if (pass_input.value !== pass_confirm_input.value) {
      pass_input.classList.remove("match");
      pass_confirm_input.classList.remove("match");
      pass_input.classList.add("error");
      pass_confirm_input.classList.add("error");
      password_fields.appendChild(no_match);
      submit_btn.disabled = true;
    }
    else {
      pass_input.classList.remove("error");
      pass_confirm_input.classList.remove("error");
      pass_input.classList.add("match");
      pass_confirm_input.classList.add("match");
      password_fields.removeChild(no_match);
      submit_btn.disabled = false;
    }
  }
}

const pass_input = document.querySelector("#password");
const pass_confirm_input = document.querySelector("#password-confirm");
const password_fields = document.querySelector(".input-fields");
const submit_btn = document.querySelector(".create-acct-btn");
const no_match = document.createElement("p");
const text = document.createTextNode("* Passwords do not match");

no_match.appendChild(text);
no_match.classList.add("no-match-text");
no_match.style.fontSize = "0.8rem"

pass_input.addEventListener("keyup", () => {
  compare_passwords();
})

pass_confirm_input.addEventListener("keyup", () => {
  compare_passwords();
})
