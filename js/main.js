var id = 1; // unique id for list items

$(document).ready(function(e) {
	editButton();

	$("tbody").on("click", ".cross", function() {
		$(this).closest("tr").remove();
	});

	$("button").on("click", getInput);

	$("tbody").on("click", ".box", function() {
		$(this).closest("tr").find("span").toggleClass("checked");
	});

});

// triggered on Enter
$(document).on("keydown", function(e) {
	if(e.keyCode === 13) {
		getInput();
	}
});



// Toggle delete icon when edit button is clicked
function editButton() {
	$(".edit").on("click", "span", function() {
		$(".cross").toggle();
	});
}


// Obtaining customer input and then calling addItem() with the input
function getInput() {
	var custInput = $(".custinput");
	var input = custInput.val();

	if ((input !== "") && ($.trim(input) !== "")) {
		addItem(input);
		custInput.val("");
	}
}


/******************************************************************************
	adding item to the list
	increment id counter for unique id
*******************************************************************************/
function addItem(message) {

	$(".cross").hide(); // hiding the delete icon
	var des ="<input type='hidden' class='qu' value=''  ><input type='hidden' class='pr' value=''  ><input type='hidden' class='de' value=''  >";
	
	var checkbox = "<td class=\"check\">" + "<input type=\"checkbox\" id=\"item" + id + "\" class=\"box\">" + "<label for=\"item" + id + "\" class=\"check-label\"></label></td>";

	var content = "<td class=\"content\"><span>" + message + "</span></td>";

	var delIcon = "<td><img src=\"img/cross.png\" alt=\"cross\" class=\"cross\"></td>";

	$("tbody").append("<tr id='idlist"+id+"' data-srcid='"+id+"'>" + des + checkbox + content + delIcon + "</tr>");

	id++;
}

$("#tablelist").on('click', 'tr', function() {
	var srcid = $(this).attr("data-srcid");
	// console.log(srcid);
    var qu = $(this).find('.qu').val();
    var pr = $(this).find('.pr').val();
	var de = $(this).find('.de').val();
	$('#Input1').val(qu);
	$('#Input2').val(pr);
	$('#Input3').val(de);
	$('#srcid').val(srcid);
	$( ".formd" ).show();
});

$(".formd").on('click', '#changelist', function() {
   
	var i1 = $('#Input1').val();
	var i2 = $('#Input2').val();
	var i3 = $('#Input3').val();
	var i4 = $('#srcid').val();

	 $('#idlist'+i4).find('.qu').val(i1);
     $('#idlist'+i4).find('.pr').val(i2);
	 $('#idlist'+i4).find('.de').val(i3);

	$( ".formd" ).hide();
});