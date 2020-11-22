function addSavings() {
	var amount = parseInt(document.getElementById('amt'));
	var currAmt = document.getElementById('currAmount');
	var currAmountInteger = parseInt(amount);

	currAmt.setAttribute("text", amt+currAmountInteger);
}

$(document).on('click', "#plusBTN", function(evt)
{
	addSavings();
	console.log("clicked");
});


// function subtractSavings() {
// 	var amount = document.getElementById('amt');
// }



// $(document).on('click', "#minusBTN", function(evt)
// {
// 	subtractSavings();
// });