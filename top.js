let user;

function yourName() {
  user = prompt("What is your name?");
  return document.write(user);
}

function guessANumber(){
  let answer;

  while(answer != 7){
    answer = prompt("Guess a number between 1 and 10")

    if(answer != 7){
alert("Try again")
    }else {
alert("Congratulations, you are correct!")
    }
  }
}

guessANumber()

function timeOfDay(param1, param2) {
  let time = prompt("Hi " + user + ", what hour is it? (0 - 23)");

  let message;

  if (time < 12) {
    message = "Good morning, " + user + param1;
  } else if (time <= 18) {
    message = "Good afternoon " + user + param2;
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

function displayRating(){
  let output = ""

  let rating = prompt("Rate our cookies on a scale of 1-5, how many stars?")

for(let i = 0; i < rating; i++){
  output += "<https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/Golden_star_2.svg/2139px-Golden_star_2.svg.png' alt='rating star'>";
}
return document.write(output)
}