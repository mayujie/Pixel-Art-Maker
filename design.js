/*
1.Select color input 2.Select size input 3.When size is submitted by the user, call makeGrid()
 */

function makeGrid() {

	//variables get number of rows and columns as input
	var rows = $("#inputHeight").val();
	var columns = $("#inputWeight").val();

	//Get the grid table
	var table = $("#pixelCanvas");

	//Reset to empty grid table --if one table already created
	table.children().remove();

	//get grid rows
	for(var i = 0; i < rows; i++){
		table.append("<tr></tr>");//<tr> tag defines a row in table
		//get grid columns
		for (var j = 0; j < columns; j++){
			table.children().last().append("<td></td>");//<td> tag defines a standard cell in each row
		}
	}

	//listener for the click cell events
	table.on('click', "td", function(){
		//get color from html color picker
		var color = $("input[type = 'color']").val();
		//transfer color to cell been clicked
		$(this).attr("bgcolor", color);
	});
	table.on('dblclick', 'td',function(){
   		$(this).attr('bgcolor','#ffffff');
  	});
}

//listener for button click to triggers makeGrid() method
$("input[type='submit']").click(function(m){
	m.preventDefault();//Required to avoid submit and page reload ,line instructs the browser not to perform the default action
	makeGrid();
});
