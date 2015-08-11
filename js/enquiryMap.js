
var model = model || {};
model.enquiryMap =  {
    issue:{
	title: "Issue:",
	enquiry: "What is the issue?",
	situation:[
	    {
		answer: "Can not connect to internet.",
		next: "accessibility"
	    },
	    {
		answer: "Slow speed.",
		next: "slowSpeed"
	    }
	]
    },

    accessibility: {
	title: "Accessibility",	    
	enquiry: "Can you open the network register page?",
	situation: [		    
	    {
		answer: "Yes",
		next: "os"
	    },
	    {
		answer: "No",
		next: "networkIcon"
	    }
	]
    },
    
    os: {
	title: "Operation System",
	enquiry: "What is your operation system?",
	situation: [
	    {
		answer: "Linux or Mac",
		next: "unixLike"
	    },
	    {
		answer: "Windows",
		next: "networkIcon"
	    },
	    {
		answer: "I don't know",
		next: "Windows"
	    }
	]	
    },
    networkIcon: {
	title: "Windows Network Icon",
	enquiry: "What is the icon?",
	situation: [
	    {
		answer: "Yellow triangle",
		next: "register"
	    },
	    {
		answer: "Red X",
		next: "hardware"
	    }
	]
    },

    hardware: {
	title: "Hardware",
	enquiry: "If your roomate can connect to the internet, try to connect to the internet using their cable and socket. Can you connect?",
	situation: [
	    {
		answer: "Yes",
		next: "cabelOrSocket"
	    },
	    {
		answer: "No",
		next: "computerHardware"
	    }			
	]
    },

    cabelOrSocket: {
	title: "Your cable or socket may be broken",
	enquiry: "Borrow the cable from your roommate, plug it in your computer and your socket. Can you connect to internet now?",
	situation: [
	    {
		answer: "Yes",
		next: "cableBroken"
	    },
	    {
		answer: "No",
		next: "socketBroken"
	    }
	]
    },

    cableBroken: {
	title: "Your cable may be broken",
	enquiry: "Try to get another one~",
	situation: [
	    {
		answer: "Finish",
		next: "finish"
	    }
	]
    },

    computerHardware: {
	title: "Computer Hardware",
	enquiry: "Your computer hardware may be broken.",
	situation: [
	    {
		answer: "Ok Bye~",
		next: "bye"
	    },
	    {
		answer: "I believe it is not my computer's problem. Contact the network management assistant",
		next: "contact"
	    }
	]
    },
    
    ip: {
	title: "What is the IP you get",
	enquiry: "What is the IP you get?",
	situation: [
	    {
		answer: "140.112.XX.XX",
		next: "block"
	    },
	    {
		answer: "172.XX.XX.XX",
		next: "registerAgain"
	    },
	    {
		answer: "169.XX.XX.XX",
		next: "dhcp"
	    },
	    {
		answer: "10.XX.XX.XX",
		next: "dhcp"
	    },
	    {
		answer: "192.168.XX.XX",
		next: "dhcp"
	    },
	    {
		answer: "other",
		next: "contact"
	    },
	    {
		answer: "I don't know",
		next: "contact"
	    }
	]
    },	
    
    register:{
	title: "Do you register?",
	enquiry: "Have you register?",
	situation: [
	    {
		answer: "Yes",
		next: "ip"
	    },
	    {
		answer: "No",
		next: "registerGuide"
	    },
	    {
		answer: "I am not sure.",
		next: "registerAgain"
	    }
	]
    },

    registerGuide: {
	title: "Register",
	enquiry: "Now go back to your room, using the network from the socket on the wall. Try if you can go to the register page. And blah~",
	situation:[
	    {
		answer: "Yes, it connect successfully!",
		next: "finish"
	    },
	    {
		answer: "No, I can not open the registery page",
		next: "ip"
	    },
	    {
		answer: "No, I can not connect to the Internet after regeration.",
		next: "ip"
	    }
	]
    },

    dhcp: {
	title: "DHCP Setting",
	enquiry: "Check if you have turn on the DHCP. Blah~~~~",
	situation: [
	    {
		answer: "Yes, I can connect to the internet now.",
		next: "finish"
	    },
	    {
		answer: "No, I still can not connect to the net. I get IP 140.112.XX.XX",
		next: "block"
	    },
	    {
		answer: "No, I still can not connect to the net. I get IP other than 140.112.XX.XX",
		next: "setIP"
	    },
	    {
		answer: "This trouble shooter can not help me. Contact the network management assistant.",
		next: "contact"
	    }
	]
    },

    block: {
	title: "Check if your IP is blocked",
	enquiry: "Go to the page. See if you have been blocked",
	situation: [
	    {
		answer: "Yes, I am on the list",
		next: "scan"
	    },
	    {
		answer: "No, I am not blocked.",
		next: "contact"
	    }
	]
    },

    setIP: {
	title: "Manually set your IP",
	enquiry: "Go to the rester page to see what is your IP. Then set your IP manually.",
	situation: [
	    {
		answer: "I successfully connect to the Net",
		next: "finish"
	    },
	    {
		answer: "Contact the network management assistant",
		next: "contact"
	    }
	]
    },

    scan: {
	title: "Scan your computer.",
	enquiry: "Install one anti-virus software and scan your computer. If you don't have anti-virus software, you can download one from NTU CC. After you find out and remove the virus, please contact the network management assistant. ( If you are blocked many time, the network management assistant may suggest that you reinstall the operation of your computer. )"
    },
    
    contact: {
	title: "Contact the network management assistant.",
	situation: [
	]		
    },
    
    finish: {
	title: "finish"
	
    }

};





