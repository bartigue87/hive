const accountToggle = document.getElementById("account-toggle");
const closer = document.getElementById("closer");
let num = 2;

function toggleAccount() {
  if (num === 2) {
    accountToggle.style.visibility = "visible";
    num = 1;
  } else {
    accountToggle.style.visibility = "hidden";
    num = 2;
  }
  console.log(num);
}
