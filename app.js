// Chapter 46 , 48 (Events)

// Q#1
// function calc(){
//     alert("event function is working....")
// }

// Q#2
// var element1 = document.getElementById("element1");
// var element2 = document.getElementById("element2");

// element2.addEventListener("click",function(){
//     element1.style.display="none";
// });

// Q#3
// var link = document.getElementById("link");
// function changecolortored(){
//     link.style.color = "green";
// }
// function changecolortoblue(){
//     link.style.color = "blue";
// }
// link.onmouseover = changecolortored;
// link.onmouseout = changecolortoblue;

// Q#5
// var sound = new Audio("https://example.com/sound.mp3");
// function playsound(){
//     sound.play();
// }

// Q#6
// function opennewwindow() {
//   window.open("https://www.youtube.com", "_blank");
// }

// Q#7
// function btn() {
//   alert("hello, this is javascript");
// }

// Q#8

// var button = document.getElementById("color-button");
// var normalColor = "blue";
// var hoverColor = "green";
// button.style.backgroundColor = normalColor;
// button.addEventListener("mouseover", function () {
//   button.style.backgroundColor = hoverColor;
// });
// button.addEventListener("mouseout", function () {
//   button.style.backgroundColor = normalColor;
// });

// Q#9
// var button = document.getElementById("sound-button");
// var sound = new Audio("sound.mp3");
// button.addEventListener("click", function () {
//   sound.play();
// });

// Q#10
// var element = document.getElementById("myElement");
// function showAlert() {
//   alert("you moved the mouse over the element!");
// }
// element.addEventListener("mouseenter", showAlert);

// Q#11
// var element = document.getElementById("myElement1");
// function hideElement() {
//   element.style.display = "none";
// }
// element.addEventListener("mouseleave", hideElement);

// Q#12

// var link = document.getElementById("myLink");
// function openWindow() {
//   var x = event.clientX;
//   var y = event.clientY;

//   var width = x + 100;
//   var height = y + 100;

//   var newWindow = window.open(
//     "",
//     "",
//     "width=" + width + ",height=" + height + ",left=" + x + ",top=" + y
//   );
//   newWindow.document.write("<h1>this is a new window</h1>");
//   newWindow.document.write(
//     "<p>you can close thisw window by clicking the button below</p>"
//   );
//   newWindow.document.write("<button id='closeButton'>close</button>");

//   var closeButton = newWindow.document.getElementById("closeButton");

//   function closeWindow() {
//     newWindow.close();
//   }
//   closeButton.addEventListener("click", closeWindow);
// }
// link.addEventListener("click", openWindow);

// Chapter 49-50 (Reading and setting field values)
// Q#1
// var input = document.getElementById("myInput");
// var button = document.getElementById("myButton");

// function printInput() {
//   var value = input.value;
//   console.log(value);
// }
// button.addEventListener("click", printInput);

// Q#2
// var firstChecked = document.querySelector(".messageCheckbox:checked");
// console.log("firstChecked.value");
// console.log("firstChecked.checked");

// var allChecked = document.querySelectorAll(".messagecheckbox:checked");
// for (var i = 0; i < allChecked.length; i++) {
//   console.log("allChecked[i].value");
//   console.log("allChecked[i].checked");
// }

// Q#3

// var select = document.getElementById("select-box");
// select.addEventListener("change", function () {
//   var value = select.value;
//   console.log("value");
// });

// Q#4

// var field = document.getElementById("field");
// field.value = "some text";

// Q#5

// var status = document.getElementById("status1");
// var married = prompt("are you amrried? (yes/No)");
// married = married.toLowerCase();

// if (married === "no" || married === "false") {
//   status1.value = "available";
// }

// Q#6
// let name1 = prompt("what is your name? ");
// name1 = name1 || "Anonymous";
// console.log("Hello" + name1);

// Q#7
function validateform() {
  var name = document.getElementById("name");
  var email = document.getElementById("email");
  var password = document.getElementById("password");
  var confirmpassword = document.getElementById("confirmpassword");
  var nameerror = document.getElementById("nameerror");
  var emailerror = document.getElementById("emailerror");
  var passworderror = document.getElementById("passworderror");
  var confirmpassworderror = document.getElementById("confirmpassworderror");

  nameerror.innerHTML = "";
  emailerror.innerHTML = "";
  passworderror.innerHTML = "";
  confirmpassworderror.innerHTML = "";
  var valid = true;
  if (name.value == "") {
    nameerror.innerHTML = "name cannot be empty";
  } else if (name.value.length < 3) {
    nameerror.innerHTML = "name must be atleast 3 characters long";
    valid = false;
  }
  if (email.value == "") {
    emailerror.innerHTML = "email cannot be empty";
    valid = false;
  } else if (!email.value.includes("@")) {
    emailerror.innerHTML = "email must contain @ symbol";
    valid = false;
  }
  if (password.value == "") {
    passworderror.innerHTML = "password cannot be empty";
    valid = false;
  } else if (password.value.length < 8) {
    passworderror.innerHTML = "password must be atleast 8 characters long";
    valid = false;
  }
  if (confirmpassword.value == "") {
    confirmpassworderror.innerHTML = "confirmpassword cannot be empty";
    valid = false;
  } else if (confirmpassword.value != password.value) {
    confirmpassworderror.innerHTML = "confirmpassword must match password";
    valid = false;
  }
  return valid;
}
