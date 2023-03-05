const prompt = require("prompt-sync")({ sigint:true});
const userName = prompt("Whats your name?");

if (userName === "thomas") {
  const userAge = prompt("What's your age?");

  if (parseInt(userAge) === 34) {
    console.log("ID confirmed.  Welcome Thomas");
  } else {
    console.log("Wrong ID, drop down that coconut!!");
  }
} else {
  console.log("Wrong ID, drop down that coconut!!");
}
