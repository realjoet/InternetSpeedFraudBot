var imageAddr = "http://www.kenrockwell.com/contax/images/g2/examples/31120037-5mb.jpg"; 
var downloadSize = 4995374; //bytes

window.onload = function() {
    var oProgress = document.getElementById("progress");
    window.setTimeout(MeasureConnectionSpeed, 1);
};

function MeasureConnectionSpeed() {
  var oProgress = document.getElementById("progress");
  var startTime, endTime;
  var download = new Image();
  download.onload = function () {
      endTime = (new Date()).getTime();
      showResults();
  }
  
  download.onerror = function (err, msg) {
      oProgress.innerHTML = "Invalid image, or error downloading";
  }
  
  startTime = (new Date()).getTime();
  var cacheBuster = "?nnn=" + startTime;
  download.src = imageAddr + cacheBuster;
  
  function showResults(byteType) {
    var duration = (endTime - startTime) / 1000;
    var bitsLoaded = downloadSize * 8;
    var speedBps = (bitsLoaded / duration).toFixed(2);
    var speedKbps = (speedBps / 1024).toFixed(2);
    var speedMbps = (speedKbps / 1024).toFixed(2);
    var speed;
    if (byteType === "bps") {
    	oProgress.innerHTML = "Your connection speed is: <br />" + 
      speedBps + " bps<br />";
      speed = speedBps;
    } else if (byteType === "kbps") {
    	oProgress.innerHTML = "Your connection speed is: <br />" + 
      speedKbps + " kbps<br />";
      speed = speedKbps;
    } else if (byteType === "mbps") {
    	oProgress.innerHTML = "Your connection speed is: <br />" + 
      speedMbps + " Mbps<br />";
      speed = speedMbps;
    } else {
    	alert("Yo pick what speed your package is");
    }
    return speed;
  }

}

var checkProvider = function(el) {
	var provider = $(el).val();
	var twitterHandle = "";

	switch(provider) {
		case 'Comcast':
			twitterHandle="comcastcares";
			break;
		case 'CenturyLink':
			twitterHandle="centurylink";
			break;
		case 'Att':
			twitterHandle="attbusinesscare";
			break;
		case 'DirecTv':
			twitterHandle="directvservice";
			break;
		case 'Internet Service Provider':
			alert('Please select your Internet Service Provider');
	}

	var twitterCopy = "@" + twitterHandle + " internet is slower than what I'm paying for. FIX IT!";
	$('.twitter-share-button').data('text', twitterCopy);

}

$(function(){

	var servicePlan = Math.floor(parseInt($("#service-plan").val()));
	// var measuredSpeed = MeasureConnectionSpeed();
  // console.log("measuredSpeed: " + measuredSpeed);

	// while (servicePlan < measuredSpeed) {
	// 	measureConnectionSpeed();
	// }

	$( "#service-provider" ).change(function() {
	    checkProvider(this);
	});

	$('#twitter-share-button').click(function() {
		var newString = $('.twitter-share-button').data('text');
		var url = 'https://twitter.com/intent/tweet?original_referer=&text=' + newString;


		//window.open(url, 'width=700,height=500');
		window.open(url,'1418086192731','width=700,height=500,/toolbar=0,menubar=0,location=0,status=1,scrollbars=1,resizable=1,left=0,top=0');

	});


});