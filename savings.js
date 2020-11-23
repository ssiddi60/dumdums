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
	if(parseInt(document.getElementById('currAmount').innerHTML) == 0.00){
	document.getElementById("minusBTN").disabled = true;
	document.getElementById('minusBTN').style.background = "#D3D3D3";
	} else {
	document.getElementById("minusBTN").disabled = false;
	document.getElementById('minusBTN').style.background = "#EA9999";
	}
	if (parseInt(document.getElementById('currAmount').innerHTML) < 0){
		document.getElementById('currAmount').innerHTML = 0.00
	}
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
	if(parseInt(document.getElementById('currAmount').innerHTML) == 0.00){
	document.getElementById("minusBTN").disabled = true;
	document.getElementById('minusBTN').style.background = "#D3D3D3";
	} else {
	document.getElementById("minusBTN").disabled = false;
	document.getElementById('minusBTN').style.background = "#EA9999";
	}
	if (parseInt(document.getElementById('currAmount').innerHTML) < 0){
		document.getElementById('currAmount').innerHTML = 0.00
	}
});

$(document).ready(function(){
	if(parseInt(document.getElementById('currAmount').innerHTML) == 0.00){
	document.getElementById("minusBTN").disabled = true;
	document.getElementById('minusBTN').style.background = "#D3D3D3";
} else {
	document.getElementById("minusBTN").disabled = false;
	document.getElementById('minusBTN').style.background = "#EA9999";
}
});
