
var guestName = document.getElementById("inputName").value;
var listView = false;
var testNum = 1;
guestsList = ["Plain Cheese", "Classic Pepperoni", "Meat Supreme", "Veggie Supreme"];



function submit(){
//shows the sort button and hides the finish button

var guestName = document.getElementById("inputName").value;
guestsList.push("(suggested)" + guestName +  "<br>");


guestsList.sort();
console.log(guestName);
console.log(guestsList);
document.getElementById("namE").textContent = guestName + " has been added to the topping suggestion inbox";


document.getElementById("list").innerHTML = guestsList;
document.getElementById("list").style.visibility = "hidden";

document.getElementById("listButton").textContent = "Show List";
listView = false;
}







function listToggle(){
//arranges the names alphabetically
guestsList.sort();
console.log(guestsList);



if (listView == false){
document.getElementById("list").style.visibility = "visible";
document.getElementById("list").innerHTML = guestsList;
listView = true;
console.log(listView);
document.getElementById("listButton").textContent = "Hide List";

} else{



   
document.getElementById("listButton").textContent = "Show List";
document.getElementById("list").style.visibility = "hidden";
listView = false;
console.log(listView);


}






}














