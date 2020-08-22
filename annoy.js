// var answer = prompt("Are we there yet?");

// while(answer === "yes" %% answer !== "yeah"){
// 	var answer = prompt("are we there yet?");
// }

// if(answer === "yes"){
// 	alert("We finally made it!");
// } else{

// }

//Version 2 
var answer = prompt("Are we there yet?");

while(answer.indexOf("yes") === -1){
	var answer = prompt("are we there yet?");
}

alert("We finally made it!");
