
document.getElementById("add-todo").addEventListener("submit", function(e){
    e.preventDefault();
    var message = document.
    console.log(message);
    //const subItem = createSubItem(e);
   // document.getElementById("list").appendChild(subItem);
});



var list = createitem = (value)=>{
   var listItem = document.createElement("li");
   var itemValue = document.createElement("div");
    itemValue.innerHTML = document.getElementById("title").value;
    listItem.appendChild(itemValue);
return listItem;
}