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

var nameVal = "";
var amountVal = 0.00;
var numWishes = 0;

// <div id="progressbar">
// 				<div></div>
// 			</div>
// 			<div id="wishText">IKEA Lamp</div>

function makeWish(nameValue, amountValue){
	var wish = document.getElementById("wishes");
	
	var newWish = document.createElement('div');
	newWish.setAttribute("id", "wish"+String(numWishes+1));

	var progressDiv = document.createElement('div');
	progressDiv.setAttribute("id", "progressbar");

	var wishText = document.createElement('p');
	wishText.setAttribute("id", "wishText");
	wishText.innerHTML = nameValue;

	var wishAmt = document.createElement('p');
	wishAmt.setAttribute("id", "wishAmount");
	wishAmt.innerHTML = "$" + amountValue;

	var editIcon = document.createElement('input');
	editIcon.setAttribute("type", "image");
	editIcon.setAttribute("src", "icons/edit.png");
	editIcon.setAttribute("id", "editIcon");

	// var editBtn = document.createElement('button');
	// editBtn.setAttribute('id', 'editBtn');
	// editBtn.appendChild(editIcon);

	newWish.appendChild(progressDiv);
	newWish.appendChild(editIcon);
	newWish.appendChild(wishText);
	newWish.appendChild(wishAmt);

	wish.appendChild(newWish);
	numWishes++;
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

	document.getElementById('wishes').style.display = "none"
	//makeWish();
	createPopUp();
});

$(document).on('click', "#cancelBtn", function(evt)
{
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
	document.getElementById("addWish").disabled = false;
	document.getElementById('wishes').style.display = "block"
	return false;
	//makeWish();
	//createPopUp();
});

$(document).on('click', "#saveBtn", function(evt)
{
	var wishlistTitle = document.getElementById("title");
	wishlistTitle.style.display = "block";
	makeWish(document.getElementById('nameInput').value, document.getElementById('amountInput').value);
	nameVal = document.getElementById('nameInput').value;
	amountVal = document.getElementById('amountInput').value;
	document.getElementById("wishTitle").parentNode.removeChild(document.getElementById("wishTitle"));
	document.getElementById("nameLabel").parentNode.removeChild(document.getElementById("nameLabel"));
	document.getElementById("nameInput").parentNode.removeChild(document.getElementById("nameInput"));
	document.getElementById("amountLabel").parentNode.removeChild(document.getElementById("amountLabel"));
	document.getElementById("amountInput").parentNode.removeChild(document.getElementById("amountInput"));
	document.getElementById("saveBtn").parentNode.removeChild(document.getElementById("saveBtn"));
	document.getElementById("cancelBtn").parentNode.removeChild(document.getElementById("cancelBtn"));

	document.getElementById("popup").style.display = "none";
	document.getElementById("addWish").disabled = false;
	document.getElementById('wishes').style.display = "block"
	return false;
	//makeWish();
	//createPopUp();
});


function createUpdatePopUp()
{
	var update = document.getElementById("update");

	var title = document.createElement("div");
	title.setAttribute("id", "wishTitle");
	title.innerHTML = "Update Wish";

	var deleteIcon = document.createElement('input');
	deleteIcon.setAttribute("type", "image");
	deleteIcon.setAttribute("src", "icons/delete.png");
	deleteIcon.setAttribute("id", "deleteIcon");

	var nameLabel = document.createElement("div");
	nameLabel.setAttribute("id", "nameLabel");
	nameLabel.innerHTML = "Name:";

	var nameInput = document.createElement("input");
	nameInput.setAttribute("id", "nameInput");
	nameInput.setAttribute("value", nameVal);

	var amountLabel = document.createElement("div");
	amountLabel.setAttribute("id", "amountLabel");
	amountLabel.innerHTML = "Amount:";

	var amountInput = document.createElement("input");
	amountInput.setAttribute("id", "amountInput");
	

	var saveBtn = document.createElement("button");
	saveBtn.setAttribute("id", "saveUpdateBtn");
	saveBtn.innerHTML = "Save";

	var cancelBtn = document.createElement("button");
	cancelBtn.setAttribute("id", "cancelUpdateBtn");
	cancelBtn.innerHTML = "Cancel";


	update.appendChild(title);
	update.appendChild(deleteIcon);
	update.appendChild(nameLabel);
	update.appendChild(nameInput);
	update.appendChild(amountLabel);
	update.appendChild(amountInput);
	update.appendChild(cancelBtn);
	update.appendChild(saveBtn);

	console.log("edit icon clicked");
}

$(document).on('click', "#editIcon", function(evt)
{
	var x = document.getElementById("update");
	x.style.display = "block";
	var wishlistTitle = document.getElementById("title");
	wishlistTitle.style.display = "none";
	document.getElementById("addWish").disabled = true;

	document.getElementById('wishes').style.display = "none"
	//makeWish();
	createUpdatePopUp();
	amountInput.setAttribute("value", amountVal);
});

$(document).on('click', "#cancelUpdateBtn", function(evt)
{
	var wishlistTitle = document.getElementById("title");
	wishlistTitle.style.display = "block";
	document.getElementById("wishTitle").parentNode.removeChild(document.getElementById("wishTitle"));
	document.getElementById("deleteIcon").parentNode.removeChild(document.getElementById("deleteIcon"));
	document.getElementById("nameLabel").parentNode.removeChild(document.getElementById("nameLabel"));
	document.getElementById("nameInput").parentNode.removeChild(document.getElementById("nameInput"));
	document.getElementById("amountLabel").parentNode.removeChild(document.getElementById("amountLabel"));
	document.getElementById("amountInput").parentNode.removeChild(document.getElementById("amountInput"));
	document.getElementById("saveUpdateBtn").parentNode.removeChild(document.getElementById("saveUpdateBtn"));
	document.getElementById("cancelUpdateBtn").parentNode.removeChild(document.getElementById("cancelUpdateBtn"));

	document.getElementById("update").style.display = "none";
	document.getElementById("addWish").disabled = false;
	document.getElementById('wishes').style.display = "block";
	return false;
	//makeWish();
	//createPopUp();
});

$(document).on('click', "#saveUpdateBtn", function(evt)
{
	var wishlistTitle = document.getElementById("title");
	wishlistTitle.style.display = "block";
	//makeWish(document.getElementById('nameInput').value, document.getElementById('amountInput').value);
	nameVal = document.getElementById('nameInput').value;
	amountVal = document.getElementById('amountInput').value;
	document.getElementById("wishTitle").parentNode.removeChild(document.getElementById("wishTitle"));
	document.getElementById("deleteIcon").parentNode.removeChild(document.getElementById("deleteIcon"));
	document.getElementById("nameLabel").parentNode.removeChild(document.getElementById("nameLabel"));
	document.getElementById("nameInput").parentNode.removeChild(document.getElementById("nameInput"));
	document.getElementById("amountLabel").parentNode.removeChild(document.getElementById("amountLabel"));
	document.getElementById("amountInput").parentNode.removeChild(document.getElementById("amountInput"));
	document.getElementById("saveUpdateBtn").parentNode.removeChild(document.getElementById("saveUpdateBtn"));
	document.getElementById("cancelUpdateBtn").parentNode.removeChild(document.getElementById("cancelUpdateBtn"));

	document.getElementById("update").style.display = "none";
	document.getElementById("addWish").disabled = false;
	document.getElementById('wishes').style.display = "block";
	return false;
	//makeWish();
	//createPopUp();
});

$(document).on('click', "#deleteIcon", function(evt)
{
	var wishlistTitle = document.getElementById("title");
	wishlistTitle.style.display = "block";
	document.getElementById("wish" + String(numWishes)).parentNode.removeChild(document.getElementById("wish" + String(numWishes)));

	document.getElementById("wishTitle").parentNode.removeChild(document.getElementById("wishTitle"));
	document.getElementById("deleteIcon").parentNode.removeChild(document.getElementById("deleteIcon"));
	document.getElementById("nameLabel").parentNode.removeChild(document.getElementById("nameLabel"));
	document.getElementById("nameInput").parentNode.removeChild(document.getElementById("nameInput"));
	document.getElementById("amountLabel").parentNode.removeChild(document.getElementById("amountLabel"));
	document.getElementById("amountInput").parentNode.removeChild(document.getElementById("amountInput"));
	document.getElementById("saveUpdateBtn").parentNode.removeChild(document.getElementById("saveUpdateBtn"));
	document.getElementById("cancelUpdateBtn").parentNode.removeChild(document.getElementById("cancelUpdateBtn"));

	document.getElementById("update").style.display = "none";
	document.getElementById("addWish").disabled = false;
	document.getElementById('wishes').style.display = "block";
	return false;
});
