function yourName(){
    let user = prompt("What is your name? ")
    return document.write(user)
}

function timeOfDay(){
    let time = prompt("Hi, " + user + ", what hour is it? (0 - 23)");

    let message; 

    if(time < 12){
        message = "Good morning " + user;
    } else if(time <= 18){
        message - "Good afternoon " + user;
    } else if(time < 24){
        message = "Good night " + user;
    } else{
        message = "That hour does not exist ";
    }
    console.log(message);
    return message
}
