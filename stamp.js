/*
Origo Stamp App

Developed by Jarrod Hammond
*/

// Variable declaration
var started = false;
var canvas, context;
var stampId = '';
var lastStampId = '';

function init() {
	canvas = $('canvas').get(0);
	context = canvas.getContext('2d');
	
	// Auto-adjust canvas size to fit window.
	canvas.width  = window.innerWidth;
	canvas.height = window.innerHeight;

	canvas.addEventListener('click', onClick, false);

	
	// Events for toolbar buttons.
	$('#robot').get(0).addEventListener('click', function(e) { onStamp(e.target.id); }, false);
	$('#sheep').get(0).addEventListener('click', function(e) { onStamp(e.target.id); }, false);
	$('#strawberry').get(0).addEventListener('click', function(e) { onStamp(e.target.id); }, false);
}

function onClick(e) {
	if (stampId.length > 0) {
		context.drawImage($(stampId).get(0), e.pageX - 40, e.pageY - 60, 80, 80);
	}
}

function onStamp(id) {
	// Update the stamp image.
	stampId = '#' + id;

    if (lastStampId == stampId) {
        // If user clicks the selected stamp again, deselect it.
        stampId = '';
    }

	$(lastStampId).css("border", "0px solid white");
	$(stampId).css("border", "4px dotted yellow");

	// Deselect last stamp once a new stamp is selected.
	lastStampId = stampId;	
}