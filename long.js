const namee = document.getElementById("name-login");
const password = document.getElementById("Password-login");
const btnlogin = document.getElementById("login-btn");

// console.log(loginn, namee, password, btnlogin);

const data1 = {
  Email: "abdallah",
  pin: "4423",
};

btnlogin.addEventListener("click", function (e) {
  e.preventDefault();
  if (namee.value === "" || password.value === "") {
    console.log("no email or password entered");
  } else if (namee.value === data1.Email && password.value === data1.pin) {
    window.location.href = "user1.html";
  } else {
    alert("wrong username or password");
  }
});
