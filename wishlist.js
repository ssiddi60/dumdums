var i = 0;
function move() {
  if (i == 0) {
    i = 1;
    var elem = document.getElementById("myBar");
    var width = 77;
    var id = setInterval(frame, 10);
    function frame() {
      if (width >= 100) {
        clearInterval(id);
        i = 0;
      } else {
        width++;
        elem.style.width = 77 + "%";
        elem.innerHTML = width + "%";
      }
    }
  }
}

// <div id="progressbar">
// 				<div></div>
// 			</div>
// 			<div id="wishText">IKEA Lamp</div>

function makeWish(){
	var wish = document.getElementById("wish1");
	
	var progressDiv = document.createElement('div');
	progressDiv.setAttribute("id", "progressbar");

	var wishText = document.createElement('p');
	wishText.setAttribute("id", "wishText");
	wishText.innerHTML = "IKEA Couch";

	var wishAmt = document.createElement('p');
	wishAmt.setAttribute("id", "wishAmount");
	wishAmt.innerHTML = "100.00";

	wish.appendChild(progressDiv);
	wish.appendChild(wishText);
	wish.appendChild(wishAmt);
}

function createPopUp(){
	var popup = document.getElementById("popup");

	var title = document.createElement("div");
	title.setAttribute("id", "wishTitle");
	title.innerHTML = "Add New Wish";

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

$(document).on('click', "#addWish", function(evt)
{
	var x = document.getElementById("popup");
	x.style.display = "block";
	var wishlistTitle = document.getElementById("title");
	wishlistTitle.style.display = "none";
	document.getElementById("addWish").disabled = true;
	//makeWish();
	createPopUp();
});

$(document).on('click', "#cancelBtn", function(evt)
{
	document.getElementById("wishTitle").parentNode.removeChild(document.getElementById("wishTitle"));
	document.getElementById("nameLabel").parentNode.removeChild(document.getElementById("nameLabel"));
	document.getElementById("nameInput").parentNode.removeChild(document.getElementById("nameInput"));
	document.getElementById("amountLabel").parentNode.removeChild(document.getElementById("amountLabel"));
	document.getElementById("amountInput").parentNode.removeChild(document.getElementById("amountInput"));
	document.getElementById("saveBtn").parentNode.removeChild(document.getElementById("saveBtn"));
	document.getElementById("cancelBtn").parentNode.removeChild(document.getElementById("cancelBtn"));

	document.getElementById("popup").style.display = "none";
	document.getElementById("title").style.display = "display";
	document.getElementById("addWish").disabled = false;
	return false;
	//makeWish();
	//createPopUp();
});