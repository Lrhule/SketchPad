if (sessionStorage.getItem('colNum') == undefined || sessionStorage.getItem('rowNum') == undefined ) //check if there is user input from previous refresh
		{
			sessionStorage.setItem('colNum', 16) // set defaults 
			sessionStorage.setItem('rowNum', 16)
		}

let colNum = sessionStorage.getItem('colNum');    //pull previous input
let rowNum = sessionStorage.getItem('rowNum');
let grid = document.getElementById("container")

function genGrid() {
		
		grid.setAttribute("style", "grid-template-columns: repeat(" + colNum + ", 1fr); grid-template-rows: repeat(" + rowNum + ", 1fr);")  //set size of css grid via attribute
		document.getElementById("subBtn").addEventListener("click", resetGrid)
	}


function genCells() {
	for (var i = 0; i < (colNum * rowNum); i++){
		let cells = document.createElement("div")			//creates div and gives cell id 
		cells.setAttribute("id","cell" + i)					
		grid.appendChild(cells);							//adds div to grid div 
		let curr = 'cell' + i;
		document.getElementById(curr).addEventListener("mouseover", changeColor);	//adds listener to cells to call change color function on hover
	}
}

function changeColor(event) {
	this.style.backgroundColor = 'red';
}

function resetGrid() {
	colNum = document.getElementById("usrCols").value;
    rowNum = document.getElementById("usrRows").value;
    $('#container').empty();								// removes all cells 
    sessionStorage.setItem('colNum', colNum)				//stores user input for next page load 
    sessionStorage.setItem('rowNum', rowNum)
    genGrid();
    genCells();
}






genGrid();
genCells();