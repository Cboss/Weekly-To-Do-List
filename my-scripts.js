// store data to an array on local browser storage
var myList = (JSON.parse(localStorage.getItem("myData")) || [])

// create list items to save as an object
function createItem (){
	var newItem = {text: window.prompt("Add new item to the list"), style:"none"}
	myList.push(newItem)
	localStorage.setItem("myData", JSON.stringify(myList))
	printItem(newItem)
}

// print items to screen
function printItem(item){
	var p = document.createElement("p")
	p.innerHTML = item.text
	p.className = item.style
	p.onclick = function() {
		this.className = item.style = (this.className == "none") ? "strike" : "invisible"
		localStorage.setItem("myData", JSON.stringify(myList))
	}
	document.getElementById("myDiv").appendChild(p)
}

// loop and print list
for (x=0; x < myList.length; x++) {printItem(myList[x])}