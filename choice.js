$(function(){

$( "#serviceprovider" ).change(function() {
    
		var option = $("#serviceprovider").val();
		var twitterHandle = "";

		switch(option) {
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

});

	

	$('#twitter-share-button').click(function() {
		var newString = $('.twitter-share-button').data('text');
		var url = 'https://twitter.com/intent/tweet?original_referer=&text=' + newString;


		//window.open(url, 'width=700,height=500');
		window.open(url,'1418086192731','width=700,height=500,/toolbar=0,menubar=0,location=0,status=1,scrollbars=1,resizable=1,left=0,top=0');

	});


});