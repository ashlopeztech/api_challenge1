$( document ).ready(function() {
 		var  step_1 = $.post( "http://challenge.code2040.org/api/register", 
 			{ token: "53a950ad6b0a3f43d9dd1fd2364c3d32", github: "https://github.com/ashlopeztech/api_challenge1" })
  				.done(function( data ) {
     				alert( "Data Loaded: " + data );
  		});

  		var step_2 = $.post( "http://challenge.code2040.org/api/reverse", { token: "53a950ad6b0a3f43d9dd1fd2364c3d32" })
  		.done(function( data ) {
     		 alert( "Data Loaded: " + data );

     		 var reverseString= function(data_unreversed){
     		 	 
     		 	 var splitString = data_unreversed.split("");
				 console.log("Data is tunred into an array");

     		 	 var reverseArray = splitString.reverse();
     		 	 console.log("Data is reversed");

     		 	 var joinArray = reverseArray.join("")
     		 	 console.log("Data is joined as as array again");

     		 	 return joinArray
     		  }


     		 alert(reverseString(data));

     		 /*var reversed_data= reverseString(data)


     		 var post_reversed = $.post( "http://challenge.code2040.org/api/reverse/validate", 
 				{ token: "53a950ad6b0a3f43d9dd1fd2364c3d32", string: "'+ reversed_data +'" })
  				 .done(function( data ) {
     				alert( "Data Loaded: " + data ); */




     		 
    	});


  		 


});

  


