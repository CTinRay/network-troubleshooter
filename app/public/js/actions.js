        
var troubleshooter = {

    done: function () {
        console.log("TroubleShooter--Done");
    },

    contact: function () {
        var run = function(){
	        Offline.check();
	        console.log("The connection is " + Offline.state );
	    };
	    setInterval(run, 800);
    }
};