$(document).ready(function() {
	google.charts.load('current', {'packages':['corechart']});
	google.charts.setOnLoadCallback(drawChart);

drawChart();		
});

var selectedCategory = "";
var expenses = [
	['Expenses', 'Amount'],
	['Rent', 700],
	];
var newCategoryName = "";
var newCategoryAmt = 0;




// Draw the chart and set the chart values
function drawChart() {
	var data = google.visualization.arrayToDataTable(expenses);

	// Optional; add a title and set the width and height of the chart
	var options = {width:250, height:200, legend:'none', fontSize: 15, chartArea:{width:'75%',height:'75%'}, backgroundColor: '#EDF6F9'};

	// Display the chart inside the <div> element with id="piechart"
	var chart = new google.visualization.PieChart(document.getElementById('piechart'));

	function selectHandler() {
	var selectedItem = chart.getSelection()[0];
	if (selectedItem) {
	var topping = data.getValue(selectedItem.row, 0);
	selectedCategory = topping;
	console.log(selectedCategory);
	console.log(window.location.href);
	}

	}

	google.visualization.events.addListener(chart, 'select', selectHandler);    
	chart.draw(data, options);
}




// function loadCategory(){
// 	currentCategory = JSON.parse(window.localStorage.getItem('selectedItem'))
// 	document.getElementById("categoryForm").value = currentCategory;
// 	console.log("category: " + selectedCategory);
// }

// <h1 id="addCategoryTitle" >Add Category</h1>
// 			<label for="category" id="categoryLabel">Category</label>
// 			<input id="categoryForm" type="text"  name="category" value="Name"><br>
// 			<label for="categoryAmt" id="amtLabel">Amount $</label>
// 			<input id="amtForm" type="text"  name="categoryAmt" value="0">

// 			<a href="expenses.html"> <button id="saveBTN"> Save </button> </a>
// 			<a href="expenses.html"> <button id="cancelBTN"> Cancel </button> </a>
// 			<script>
// 				$(document).on('click', "#saveBTN", function(evt){
					
// 				});
// 				$(document).on('click', "#saveBTN", function(evt){

// 				});
// 			</script>
// 		</div>
function findIndexOfNewCategory(){
for (var x = 0; x < expenses.length; x++){
	if (expenses[x][0] == selectedCategory){
		return x;
	}
}

}

function makeUpdatePopUp(){
	var updatepopup = document.getElementById("updatepopup");

	var title = document.createElement("div");
	title.setAttribute("id", "wishTitle");
	title.innerHTML = "Update Category";

	var deleteIcon = document.createElement('input');
	deleteIcon.setAttribute("type", "image");
	deleteIcon.setAttribute("src", "icons/delete.png");
	deleteIcon.setAttribute("id", "deleteIcon");

	var nameLabel = document.createElement("div");
	nameLabel.setAttribute("id", "nameLabel");
	nameLabel.innerHTML = "Name:";

	var nameInput = document.createElement("input");
	nameInput.setAttribute("id", "nameInput");
	nameInput.setAttribute("value", selectedCategory);

	var amountLabel = document.createElement("div");
	amountLabel.setAttribute("id", "amountLabel");
	amountLabel.innerHTML = "Amount:";

	var indexOf = findIndexOfNewCategory();

	var amountInput = document.createElement("input");
	amountInput.setAttribute("id", "amountInput");
	amountInput.setAttribute("value", expenses[indexOf][1]);

	var saveBtn = document.createElement("button");
	saveBtn.setAttribute("id", "saveUpdateBtn");
	saveBtn.innerHTML = "Save";

	var cancelBtn = document.createElement("button");
	cancelBtn.setAttribute("id", "cancelUpdateBtn");
	cancelBtn.innerHTML = "Cancel";

	updatepopup.appendChild(title);
	updatepopup.appendChild(deleteIcon);
	updatepopup.appendChild(nameLabel);
	updatepopup.appendChild(nameInput);
	updatepopup.appendChild(amountLabel);
	updatepopup.appendChild(amountInput);
	updatepopup.appendChild(cancelBtn);
	updatepopup.appendChild(saveBtn);
}

function makePopUp(){
	var popup = document.getElementById("popup");

	var title = document.createElement("div");
	title.setAttribute("id", "wishTitle");
	title.innerHTML = "Add New Category";

	var nameLabel = document.createElement("div");
	nameLabel.setAttribute("id", "nameLabel");
	nameLabel.innerHTML = "Name:";

	var nameInput = document.createElement("input");
	nameInput.setAttribute("id", "nameInput");

	var amountLabel = document.createElement("div");
	amountLabel.setAttribute("id", "amountLabel");
	amountLabel.innerHTML = "Amount:";

	var amountInput = document.createElement("input");
	amountInput.setAttribute("id", "amountInput");
	
	var saveBtn = document.createElement("button");
	saveBtn.setAttribute("id", "saveBtn");
	saveBtn.innerHTML = "Save";

	var cancelBtn = document.createElement("button");
	cancelBtn.setAttribute("id", "cancelBtn");
	cancelBtn.innerHTML = "Cancel";

	popup.appendChild(title);
	popup.appendChild(nameLabel);
	popup.appendChild(nameInput);
	popup.appendChild(amountLabel);
	popup.appendChild(amountInput);
	popup.appendChild(cancelBtn);
	popup.appendChild(saveBtn);
}

$(document).on('click', "#addBTN", function(evt){
	var x = document.getElementById("popup");
	x.style.display = "block";
	var wishlistTitle = document.getElementById("title");
	wishlistTitle.style.display = "none";
	document.getElementById("addBTN").disabled = true;

	document.getElementById('piechart').style.display = "none"
	makePopUp();
});

$(document).on('click', "#updateBTN", function(evt){
	var x = document.getElementById("updatepopup");
	x.style.display = "block";
	var wishlistTitle = document.getElementById("title");
	wishlistTitle.style.display = "none";
	document.getElementById("updateBTN").disabled = true;

	document.getElementById('piechart').style.display = "none"
	makeUpdatePopUp();
});

$(document).on('click', "#saveBtn", function(evt){
	console.log("New Category Added");
	var wishlistTitle = document.getElementById("title");
	wishlistTitle.style.display = "block";
	newCategoryName = document.getElementById('nameInput').value;
	newCategoryAmt = parseInt(document.getElementById('amountInput').value);
	expenses.push([String(newCategoryName), newCategoryAmt]);
	drawChart();

	document.getElementById("wishTitle").parentNode.removeChild(document.getElementById("wishTitle"));
	document.getElementById("nameLabel").parentNode.removeChild(document.getElementById("nameLabel"));
	document.getElementById("nameInput").parentNode.removeChild(document.getElementById("nameInput"));
	document.getElementById("amountLabel").parentNode.removeChild(document.getElementById("amountLabel"));
	document.getElementById("amountInput").parentNode.removeChild(document.getElementById("amountInput"));
	document.getElementById("saveBtn").parentNode.removeChild(document.getElementById("saveBtn"));
	document.getElementById("cancelBtn").parentNode.removeChild(document.getElementById("cancelBtn"));

	document.getElementById("popup").style.display = "none";
	document.getElementById("addBTN").disabled = false;
	document.getElementById('piechart').style.display = "block"
	return false;
});

$(document).on('click', "#cancelBtn", function(evt){
	var wishlistTitle = document.getElementById("title");
	wishlistTitle.style.display = "block";
	document.getElementById("wishTitle").parentNode.removeChild(document.getElementById("wishTitle"));
	document.getElementById("nameLabel").parentNode.removeChild(document.getElementById("nameLabel"));
	document.getElementById("nameInput").parentNode.removeChild(document.getElementById("nameInput"));
	document.getElementById("amountLabel").parentNode.removeChild(document.getElementById("amountLabel"));
	document.getElementById("amountInput").parentNode.removeChild(document.getElementById("amountInput"));
	document.getElementById("saveBtn").parentNode.removeChild(document.getElementById("saveBtn"));
	document.getElementById("cancelBtn").parentNode.removeChild(document.getElementById("cancelBtn"));

	document.getElementById("popup").style.display = "none";
	document.getElementById("addBTN").disabled = false;
	document.getElementById('piechart').style.display = "block"
	return false;
});

$(document).on('click', "#saveUpdateBtn", function(evt){
	console.log("Updated Category");
	var wishlistTitle = document.getElementById("title");
	wishlistTitle.style.display = "block";
	newCategoryName = document.getElementById('nameInput').value;
	newCategoryAmt = parseInt(document.getElementById('amountInput').value);
	var indexOf = findIndexOfNewCategory();
	expenses[indexOf][0] = newCategoryName;
	expenses[indexOf][1] = newCategoryAmt;
	drawChart();

	document.getElementById("wishTitle").parentNode.removeChild(document.getElementById("wishTitle"));
	document.getElementById("nameLabel").parentNode.removeChild(document.getElementById("nameLabel"));
	document.getElementById("nameInput").parentNode.removeChild(document.getElementById("nameInput"));
	document.getElementById("amountLabel").parentNode.removeChild(document.getElementById("amountLabel"));
	document.getElementById("amountInput").parentNode.removeChild(document.getElementById("amountInput"));
	document.getElementById("saveUpdateBtn").parentNode.removeChild(document.getElementById("saveUpdateBtn"));
	document.getElementById("cancelUpdateBtn").parentNode.removeChild(document.getElementById("cancelUpdateBtn"));
	document.getElementById("deleteIcon").parentNode.removeChild(document.getElementById("deleteIcon"));

	document.getElementById("updatepopup").style.display = "none";
	document.getElementById("updateBTN").disabled = false;
	document.getElementById('piechart').style.display = "block"
	return false;
});

$(document).on('click', "#cancelUpdateBtn", function(evt){
	var wishlistTitle = document.getElementById("title");
	wishlistTitle.style.display = "block";
	document.getElementById("wishTitle").parentNode.removeChild(document.getElementById("wishTitle"));
	document.getElementById("nameLabel").parentNode.removeChild(document.getElementById("nameLabel"));
	document.getElementById("nameInput").parentNode.removeChild(document.getElementById("nameInput"));
	document.getElementById("amountLabel").parentNode.removeChild(document.getElementById("amountLabel"));
	document.getElementById("amountInput").parentNode.removeChild(document.getElementById("amountInput"));
	document.getElementById("saveUpdateBtn").parentNode.removeChild(document.getElementById("saveUpdateBtn"));
	document.getElementById("cancelUpdateBtn").parentNode.removeChild(document.getElementById("cancelUpdateBtn"));
	document.getElementById("deleteIcon").parentNode.removeChild(document.getElementById("deleteIcon"));

	document.getElementById("updatepopup").style.display = "none";
	document.getElementById("updateBTN").disabled = false;
	document.getElementById('piechart').style.display = "block"
	console.log("cancel update");
	return false;
});

$(document).on('click', "#deleteIcon", function(evt)
{
	var wishlistTitle = document.getElementById("title");
	wishlistTitle.style.display = "block";
	newCategoryName = document.getElementById('nameInput').value;
	newCategoryAmt = parseInt(document.getElementById('amountInput').value);
	var indexOf = findIndexOfNewCategory();
	expenses.splice(indexOf, 1);
	drawChart();

	document.getElementById("wishTitle").parentNode.removeChild(document.getElementById("wishTitle"));
	document.getElementById("deleteIcon").parentNode.removeChild(document.getElementById("deleteIcon"));
	document.getElementById("nameLabel").parentNode.removeChild(document.getElementById("nameLabel"));
	document.getElementById("nameInput").parentNode.removeChild(document.getElementById("nameInput"));
	document.getElementById("amountLabel").parentNode.removeChild(document.getElementById("amountLabel"));
	document.getElementById("amountInput").parentNode.removeChild(document.getElementById("amountInput"));
	document.getElementById("saveUpdateBtn").parentNode.removeChild(document.getElementById("saveUpdateBtn"));
	document.getElementById("cancelUpdateBtn").parentNode.removeChild(document.getElementById("cancelUpdateBtn"));

	document.getElementById("updatepopup").style.display = "none";
	document.getElementById("updateBTN").disabled = false;
	document.getElementById('piechart').style.display = "block";
	return false;
});

