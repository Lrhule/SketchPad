let colNum = 16;
let rowNum = 16;

let grid = document.getElementById("container")
grid.setAttribute("style", "grid-template-columns: repeat(" + colNum + ", 1fr); grid-template-rows: repeat(" + rowNum + ", 1fr);")



function genGrid() {
	for (var i = 0; i < (colNum * rowNum); i++){
		let cells = document.createElement("div")
		cells.setAttribute("id","cell" + i)
		grid.appendChild(cells);
		curr = 'cell' + i;
		document.getElementById(curr).addEventListener("mouseover", changeColor);	
	}
}

function changeColor(event) {
	this.style.backgroundColor = 'red';
}




genGrid();