//your JS code here. If required.
let element=document.getElementById("button");
element.addEventListener("click",removing);
let color=document.getElementById("colorSelect");
let onee=document.getElementById("one");
let twoo=document.getElementById("two");
let three=document.getElementById("three");
let fourr=document.getElementById("four");
function removing(){
color.remove(color.selectedIndex);
	
}