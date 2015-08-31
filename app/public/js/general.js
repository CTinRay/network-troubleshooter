var contactFormURL = "https://docs.google.com/forms/d/1M5hfCZmdP1zNFttbXoJfeGJ0gUxriESh6yaX2z1XNpY/viewform";

function hideWelcomeOverlay () {
	var welcomeOverlay = document.getElementById("welcome");

	// apply hide animation
	welcomeOverlay.className = welcomeOverlay.className + " inactive";

	// hide the element when the animation is finished.
	setTimeout( 
		function(){ 
			welcomeOverlay.className = welcomeOverlay.className + " hide" 
		}
	, 500);
}

function redirectToContactForm () {
	window.location = contactFormURL;	
}

function execute (action) {
	switch(action){
		case 'done':
			break;
		case 'contact':
			break;
	}
}
function loadPage (targetPage) {
	
	switch(targetPage){
		case 'DIY':
			hideWelcomeOverlay();
			break;
		case 'contact':
			redirectToContactForm();
			break;
	}
}