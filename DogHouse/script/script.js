let today = new Date();
let date = today.getDate()+'.'+(today.getMonth()+1)+'.'+today.getFullYear()+'.';

document.getElementById("date").innerHTML = date;

let random = Math.ceil(Math.random() * 6); 

document.getElementById("meme").src = "images/memes/"+random+".jpg";
