var contactFormURL = "https://docs.google.com/forms/d/1M5hfCZmdP1zNFttbXoJfeGJ0gUxriESh6yaX2z1XNpY/viewform";

function hideWelcomeOverlay () {
	var d = document.getElementById("welcome");
	d.className = d.className + " inactive";
}

function redirectToContactForm () {
	window.location = contactFormURL;	
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