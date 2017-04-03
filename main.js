function select_borough() {
	var w = document.myBorough.borough.selectedIndex;
	//the next variable "selected_borough" does not start with var, it is a global variable and works outside this function.
	selected_borough = document.myBorough.borough.options[w].value;
	//alert(selected_borough);
	// alert(w); //selects the index position of the choice
	$("#" + selected_borough).show('slowly');
	$("#borough").prop("disabled", true);
	$('html, body').animate({
		scrollTop: $("#borough").offset().top
	}, 1000);

};

function resetBorough() {
	$("#" + selected_borough).hide('slowly');
	$("#borough").prop("disabled", false);
	$('select option:first-child').attr('selected', 'selected');
	$("#where").hide('slowly');

}


function select_house() {
	//alert("i Live in the bronx!")
	var b = document.myBronxHouse.bronxHouses.selectedIndex;
	selected_house = document.myBronxHouse.bronxHouses.options[b].value;
	// alert(selected_house);
};

function select_house_brooklyn() {
	//alert("i Live in the bronx!")
	var b = document.myBrooklynHouse.brooklynHouses.selectedIndex;
	selected_house = document.myBrooklynHouse.brooklynHouses.options[b].value;
	// alert(selected_house);
};

function select_house_manhattan() {
	//alert("i Live in the bronx!")
	var b = document.myManhattanHouse.manhattanHouses.selectedIndex;
	selected_house = document.myManhattanHouse.manhattanHouses.options[b].value;
	// alert(selected_house);
};

function select_house_queens() {
	//alert("i Live in the bronx!")
	var b = document.myQueensHouse.queensHouses.selectedIndex;
	selected_house = document.myQueensHouse.queensHouses.options[b].value;
	// alert(selected_house);
};

function select_house_statenIsland() {
	//alert("i Live in the bronx!")
	var b = document.myStatenIslandHouse.statenIslandHouses.selectedIndex;
	selected_house = document.myStatenIslandHouse.statenIslandHouses.options[b].value;
	// alert(selected_house);
};

function show_where() {
	$("#where").show('slowly');
	$('html, body').animate({
		scrollTop: $("#where").offset().top
	}, 1000);
};

var ball = "<li>"

function validate(form) {
	namelist = "";
	with(document.where_mold) {
		for (var i = 0; i < mold.length; i++) {
			if (mold[i].checked) {
				namelist += ball + mold[i].value + "\n";
			}
		}
	}
	if (namelist == "") {
		//alert("select mold");
	} else {
		//alert(namelist);
		rooms = namelist;
		$("#contactInfo").show('slowly');
		$('html, body').animate({
			scrollTop: $("#contactInfo").offset().top
		}, 1000);
	}
	return false;
}

function get_name() {
	tenantName = document.getElementById("myName").value;
	//alert(tenantName);
	write_form();
}

function write_form() {
	//alert("Form done")
	//get_checked();
	//alert(rooms);
	var date = Date(); //for formatted date use moment.js
	var intro = "<p>To Whom it May Concern:</p>";
	var name = "<p>My name is " + tenantName + ".</p>"
	var live_here = "<p>I live in the " + selected_house + " houses.</p> ";
	var notify = "<p>I hereby notify you that I have mold in my:</p> ";
	var action = "<p>I'm aware of the Baez v. NYCHA case and request that NYCHA immediately remedy the mold situation!"

	var form_letter = document.getElementById("letter");
	letter.innerHTML = (date + intro + name + live_here + notify + rooms + action);
	$("#letter").show('slowly');
	$('html, body').animate({
		scrollTop: $("#letter").offset().top
	}, 1000);
};
