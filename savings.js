function addSavings() {
	var amount = document.getElementById('amt');
	var amt = amount.value;
	var currAmt = document.getElementById('currAmount');
	var currAmountInteger = parseInt(amount);
	console.log("CurrAmt: " + amt);
	currAmt.innerHTML = parseInt(amt)+parseInt(currAmt.innerHTML);
}

$(document).on('click', "#plusBTN", function(evt)
{
	addSavings();
});

function subtractSavings() {
	var amount = document.getElementById('amt');
	var amt = amount.value;
	var currAmt = document.getElementById('currAmount');
	var currAmountInteger = parseInt(amount);
	console.log("CurrAmt: " + amt);
	currAmt.innerHTML = parseInt(currAmt.innerHTML)-parseInt(amt);
}

$(document).on('click', "#minusBTN", function(evt)
{
	subtractSavings();
});