function validate(e) {

  const $firstName = document.getElementById("first_name").value;
  const $lastName = document.getElementById("last_name").value;
  const $email = document.getElementById("email").value;
  const $phoneNumber = document.getElementById("phone").value;
  const $password = document.getElementById("password").value;
  const $confirmPassword = document.getElementById("confirm_password").value;

  const firstName = document.getElementById("first_name_error");
  const lastName = document.getElementById("last_name_error");
  const email = document.getElementById("email_error");
  const phoneNumber = document.getElementById("phone_error");
  const password = document.getElementById("password_error");
  const confirmPassword = document.getElementById("confirm_password_error");
  const passwordMatch = document.getElementById("password_match");

  if(!$firstName || !$lastName || !$email || !$phoneNumber || !$password || !$confirmPassword ){
      e.preventDefault();
  }

  if ($firstName === "") {
    firstName.textContent = "Please enter first name";
  } else {
    firstName.textContent = "";
  }

  if ($lastName === "") {
    lastName.textContent = "Please enter last name";
  } else {
    lastName.textContent = "";
  }

  if ($email === "") {
    email.textContent = "Please enter email";
  } else {
    email.textContent = "";
  }

  if ($phoneNumber === "") {
    phoneNumber.textContent = "Please enter phone number";
  } else {
    phoneNumber.textContent = "";
  }

  if ($password === "") {
    password.textContent = "Please enter password";
  } else {
    password.textContent = "";
  }

  if ($confirmPassword === "") {
    confirmPassword.textContent = "Please confirm password";
  } else {
    confirmPassword.textContent = "";
  }

  if ($password !== $confirmPassword) {
    passwordMatch.textContent = "Passwords do not match";
  } else {
    passwordMatch.textContent = "";
  }
}


window.onload = () => {
  const submitBtn = document.querySelector(".submitBtn");
  submitBtn.addEventListener("click", validate);
};
