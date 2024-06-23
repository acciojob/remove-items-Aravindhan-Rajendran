//your JS code here. If required.
let element=document.getElementById("button");
let color=document.getElementById("colorSelect");
element.addEventListener("click",function(){
color.remove(color.selectedIndex);
});

