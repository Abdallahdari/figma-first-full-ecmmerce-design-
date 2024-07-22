const nameee = document.getElementById("name");
const email = document.getElementById("email"); // Fixed the ID
const pass = document.getElementById("pass");
const btn_cre = document.getElementById("btn-creat");

btn_cre.addEventListener("click", function (e) {
  e.preventDefault();
  if (nameee.value !== "" && email.value !== "" && pass.value !== "") {
    window.location = "welcome.html";
  } else {
    alert("you need to fill the part");
  }
});
