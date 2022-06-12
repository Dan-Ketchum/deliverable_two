/*
Prompt name (name)
Prompt 3 or 6 holes (holecount)
Loop 3 or 6 asking for number of putts for specific holes
Add cumulative score (print total) 
If (total is =9 or =18 then par
    If total is <9 then under par
    if total is >9 then over par
    
ending messages (print )


*/

let username = prompt("Welcome to GC mini golf! What is your name?");
console.log("The username is " + username);
let holes = prompt("Hi, " + username + "! Would you like to play 3 or 6 holes?");
console.log("The number of holes is " + holes);
let total = 0;
for (let i = 0; i < holes; i++) {
    let putts = Number( prompt("How many putts for hole "+ (i+1)+ "? (par: 3)" ) );
    total += putts;
}
console.log("The total strokes were " + total + ".");

if (holes == 3 && total === 9) {
        console.log("Good game, " + username + ". Your total par was: 0.")
}
if (holes == 3 && total<9) {
        console.log("Great job, " + username + ". Your total par was: -" + (9-total))
}
if (holes == 3 && total>9) {
        console.log("Nice try, " + username + ". Your total par was: +" + (total-9))
    }
if (holes == 6 && total === 18) {
        console.log("Good game, " + username + ". Your total par was: 0.")
}
if (holes == 6 && total<18) {
        console.log("Great job, " + username + ". Your total par was: -" + (18-total))
}
if (holes == 6 && total>18) {
        console.log("Nice try, " + username + ". Your total par was: +" + (total-18))
    }