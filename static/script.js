var x = 5;
var y = 7;
var z = x + y;
console.log(z);

var A = "Hello "
var B = "world!"
var C = A + B
console.log(C);

function SumNPrint(x1, x2){
    var x3 = x1 + x2
    return x3
}
console.log(SumNPrint(x, y));
console.log(SumNPrint(A, B));

let cLength = C.length
if (cLength > z){
    console.log(C);
}
if (cLength < z){
    console.log(z);
}
if (cLength == z){
    console.log("good job!");
}

var L1 = ['Watermelon', 'Pineapple', 'Pear', 'Banana'];
var L2 = ['Apple', 'Banana', 'Kiwi', 'Orange'];

// function findTheBanana(a) {
//     for (var i=0; i< a.length; i++) {
//         if (a[i] == "Banana") {
//             alert("found the Banana in " + i)
//         }
//     } 
// }
// findTheBanana(L1);
// findTheBanana(L2);
//                 //pathing it 
// L1.forEach(part =>{
//     if (part == "Banana") {
//         alert("We found the Banana in the first array")
//     }
// });
// L2.forEach(part => {
//     if (part == "Banana") {
//         alert("We found the Banana in the second array")
//     }
// });
function greetingFunc(){
    var d, h, E;
    d = new Date();
    h = d.getHours();
    E = document.getElementById("greetings");
    if (h<12) {
        E.innerHTML = "Good morning, I am Rita";
    }
    else if (12<h && h<18) {
        E.innerHTML = "Good afternoon, I am Rita";
    }
    else if (18<h && h<20) {
        E.innerHTML ="Good evening, I am Rita";
    }
    else if (20<h && h<24 && 0<h &&h<5) {
        E.innerHTML = "Good night, I am Rita";
    }
    }
greetingFunc();

function addYear(){
    var y, d, E;
    d = new Date(); //new data object
    y = d.getFullYear(); //extract the year
    E = document.getElementById("copyYear"); //look for my id
    E.innerHTML += y;
    
}
function showList(){
    document.getElementById("listFun").style.display = "block";
    document.getElementById("buttonFun").style.display = "None";
}

$("#more").click(function(){
    $("#more").hide();
    $("#extend").show();
    $("#less").show();
});
$("#less").click(function(){
    $("#less").hide();
    $("#extend").hide();
    $("#more").show();

});

// function checkForm() {
//     var name, email, comment;
//     name = document.getElementbyId("name")
//     email = document.getElementbyId("lemail")
//     comment = document.getElementbyId("comments")
//     if (!name.checkValidity()){
//         document.getElementById("name").innerHTML = name.validationMessage;
//     }
//     if (!name.checkValidity()){
//         document.getElementById("lemail").innerHTML = lemail.validationMessage;
//     }
//     if (!name.checkValidity()){
//         document.getElementById("comments").innerHTML = comments.validationMessage;
//     }
// }

function validate() {
    var userName = document.getElementById("UserName");
    var userEmail = document.getElementById("UserEmail");
    var userText = document.getElementById("Usertext");
    var msg = document.getElementById("ValidateMessage");
    if (!userName.checkValidity() || !userEmail.checkValidity() || !userText.checkValidity()) {
        msg.innerHTML = "Please fill out the form correctly so I can get back to you :)";
    }
 }