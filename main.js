


$( document ).ready(function() {
 		var  step_1 = $.post( "http://challenge.code2040.org/api/register", 
 			{ token: "53a950ad6b0a3f43d9dd1fd2364c3d32", github: "https://github.com/ashlopeztech/api_challenge1" })
  				.done(function( data ) {
     				alert( "alert 1"+"Data Loaded: " + data );
  		});


  
  		var step_2 = $.post( "http://challenge.code2040.org/api/reverse", { token: "53a950ad6b0a3f43d9dd1fd2364c3d32" })
  		.done(function( data ) {
     		 alert( " alert 2: Data Loaded: " + data );

           var reverseString= function(data_unreversed){
           
           var splitString = data_unreversed.split("");
           console.log("Data is tunred into an array");

           var reverseArray = splitString.reverse();
           console.log("Data is reversed");

           var joinArray = reverseArray.join("")
           console.log("Data is joined as an array again");

           return joinArray

     		  };


          alert("alert 3testing");
          
          alert( "alert 4"+reverseString(data));

          var global_data= reverseString(data);
          alert("alert5"+global_data);


          var  step2_half = $.post( "http://challenge.code2040.org/api/reverse/validate", 
        { token: "53a950ad6b0a3f43d9dd1fd2364c3d32", string: global_data })
          .done(function( data ) {
            alert( "alert 6"+"Data Loaded: " + data );
      });



          });
           
          

       


     		 /*var post_reversed = $.post( "http://challenge.code2040.org/api/reverse/validate", 
 				    { token: "53a950ad6b0a3f43d9dd1fd2364c3d32", string: reverseString(data) })
  				 .done(function( data ) {
     				alert( "Data Loaded: " + data );
     			};*/
	 
    	


  		 


});

  


