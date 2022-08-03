function compare_passwords() {
  const pass_input = document.querySelector("#password");
  const pass_confirm_input = document.querySelector("#password-confirm");

  if (pass_input.value !== "" && pass_confirm_input.value !== "") {
    if (pass_input.value !== pass_confirm_input.value) {
      pass_input.classList.add("error");
      pass_confirm_input.classList.add("error");
    }
    else {
      pass_input.classList.add("match");
      pass_confirm_input.classList.add("match");
    }
  }
}

const submit_btn = document.querySelector(".create-acct-btn");
let no_match = document.createElement("p");

submit_btn.addEventListener('click', () => {
  compare_passwords();
});

