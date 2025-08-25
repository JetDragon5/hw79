
var guestName = document.getElementById("inputName").value;
var listView = false;
var testNum = 1;
guestsList = [];



function submit(){
//shows the sort button and hides the finish button

var guestName = document.getElementById("inputName").value;
guestsList.push(guestName + " <br> ");


guestsList.sort();
console.log(guestName);
console.log(guestsList);
document.getElementById("namE").textContent = guestName + " has been added to the list";


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


function search(){
var searchedName = document.getElementById("inputSearch").value;
var found = 0;
let j;
for (j=0; j<guestsList.length; j++)
{
    if(searchedName==guestsList[j]){
        found=found+1
    }
}
console.log("found name ''" + searchedName + "' " + found + " times")

}








function remove(){

}



