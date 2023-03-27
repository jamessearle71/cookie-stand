let user;

function yourName() {
  user = prompt("What is your name?");
  return document.write(user);
}

function timeOfDay() {
  let time = prompt("Hi " + user + ", what hour is it? (0 - 23)");

  let message;

  if (time < 12) {
    message = "Good morning, " + user;
  } else if (time <= 18) {
    message = "Good afternoon " + user;
  } else if (time < 24) {
    message = "Good night " + user;
  } else {
    message = "That hour does not exist " + user;
  }
  console.log(message);
  return message;
}

let myFavPets = ("Dog", "Cat", "Goldfish")

for(let i = 0; i < myFavPets.length; i++){
    console.log("I love my pet " + myFavPets[i])
}