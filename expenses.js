// Load google charts
google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChart);

// Draw the chart and set the chart values
function drawChart() {
var arrExpenses = [
	['Expenses', 'Amount'],
	['Rent', 700],
	['Utilities', 100],
	['Groceries', 200],
	]
var data = google.visualization.arrayToDataTable(arrExpenses);

	// Optional; add a title and set the width and height of the chart
	var options = {width:250, height:200, legend:'none', chartArea:{width:'90%',height:'90%'}, backgroundColor: '#EDF6F9'};

	// Display the chart inside the <div> element with id="piechart"
	var chart = new google.visualization.PieChart(document.getElementById('piechart'));

	function selectHandler() {
		var selectedItem = chart.getSelection()[0];
		if (selectedItem) {
			var topping = data.getValue(selectedItem.row, 0);

		}
	}

	google.visualization.events.addListener(chart, 'select', selectHandler);    

	chart.draw(data, options);
}

