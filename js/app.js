$( document ).ready(function() {
	console.log("doc is ready");	

	$("#proAnswerReveal").click(function(){
		$("#conAnswerBoxes").removeClass("answerOpen");
		$("#proAnswerBoxes").toggleClass("answerOpen");
	});

	$("#conAnswerReveal").click(function(){
		$("#proAnswerBoxes").removeClass("answerOpen");
		$("#conAnswerBoxes").toggleClass("answerOpen");
	});

	// CREATE A REFERENCE TO FIREBASE
	var argueRef = new Firebase('https://blistering-heat-1060.firebaseio.com/');

	// REGISTER DOM ELEMENTS FOR PRO
	var proTitleField = $('#proTitleInput');
	var proArguementField = $('#proArgumentInput');
  	var proArguementTitleList = $('#proPastArgumentsTitle');
  	var proArguementContentList = $('#proPastArguments');

	// REGISTER DOM ELEMENTS FOR CON
	var conTitleField = $('#conTitleInput');
	var conArguementField = $('#conArgumentInput');
  	var conArguementTitleList = $('#conPastArgumentsTitle');
  	var conArguementContentList = $('#conPastArguments');






   // LISTEN FOR KEYPRESS EVENT
	$("#proAnswerBoxes").submit(function(e){
    			
      	e.preventDefault();

		console.log("here")
		var something = $("#proTitleInput").val().trim().length
		console.log(something)

		console.log("user submitted something!");
		var proUserTitle = proTitleField.val();
		var proUserArgument = proArguementField.val();

		argueRef.push({protitle: proUserTitle, proargue: proUserArgument});
	    proArguementField.val("");
	    proTitleField.val("")

	});

	$("#conAnswerBoxes").submit(function(e){
    			
      	e.preventDefault();

		console.log("here")
		var something = $("#conTitleInput").val().trim().length
		console.log(something)

		console.log("user submitted something!");

		var conUserTitle = conTitleField.val();
		var conUserArgument = conArguementField.val();

	    argueRef.push({contitle: conUserTitle, conargue: conUserArgument});
	   	conArguementField.val("");
	   	conTitleField.val("")
	});


      //SAVE DATA TO FIREBASE AND EMPTY FIELD
	     


		// Add a callback that is triggered for each chat message.
		argueRef.on('child_added', function (snapshot) {
	  		//GET DATA
	    	var data = snapshot.val();

			var argumentElement = ("<div class='argument'>");
	    	var proArguementTitleElement = ("<h5 class='arguement-title' class='proPastArgumentsTitle'>");
	    	var conArguementTitleElement = ("<h5 class='arguement-title' class='conPastArgumentsTitle'>");
	    	var closeTitle = ("</h5>")
	    	var proArguementContentElement = ("<p class='argument-content' class='proPastArguments'>");
	    	var conArguementContentElement = ("<p class='argument-content' class='conPastArguments'>");
	    	var closeArgumentP = ("</p>")
	    	var closeArgumentElement = ("</div>")

	    	if (data.proargue != null) {
	    		var proTitle = data.protitle;
	    		var proArguement = data.proargue;
	    		console.log("proTitle", proTitle);
	    		console.log("proTitle", proArguement);
	    		$(".pro").append(argumentElement+proArguementTitleElement+proTitle+closeTitle+proArguementContentElement+proArguement+closeArgumentP+closeArgumentElement);

	    	}
	    	else {
	    		var conTitle = data.contitle;
	    		var conArguement = data.conargue;
	    		console.log("conTitle", conTitle);
	    		console.log("conTitle", conArguement);
	    		$(".con").append(argumentElement+conArguementTitleElement+conTitle+closeTitle+conArguementContentElement+conArguement+closeArgumentP+closeArgumentElement);

	    	}
 	    	

	    	//CREATE ELEMENTS MESSAGE & SANITIZE TEXT

	   
	    	// var uniqueArgumentId = 
	    	// $(".proPastArgumentsTitle").html("TEST CONTENT");
	    	// $(".proPastArguments").html(proArguement);
	    	// nameElement.text(username);
	    	// messageElement.text(message).prepend(nameElement);


	});
});
	

// when the page is ready
// call firebase api
// check firebase for content to fill
// fill content
// 
//  
// 
// remove default action of click submit
// When user clicks submit
// take content of user input fields and send to firebase
// check firebase api
// Pull new content into the arguement and argument title divs

// <!-- CHAT JAVACRIPT -->
// <script>
//   // CREATE A REFERENCE TO FIREBASE
//   var messagesRef = new Firebase('https://blistering-heat-1060.firebaseio.com/');

//   // REGISTER DOM ELEMENTS
//   var messageField = $('#messageInput');
//   var nameField = $('#nameInput');
//   var messageList = $('#example-messages');

//   // LISTEN FOR KEYPRESS EVENT
//   messageField.keypress(function (e) {
//     if (e.keyCode == 13) {
//       //FIELD VALUES
//       var username = nameField.val();
//       var message = messageField.val();

//       //SAVE DATA TO FIREBASE AND EMPTY FIELD
//       messagesRef.push({name:username, text:message});
//       messageField.val('');
//     }
//   });
//   // Add a callback that is triggered for each chat message.
//   messagesRef.limitToLast(10).on('child_added', function (snapshot) {
//     //GET DATA
//     var data = snapshot.val();
//     var username = data.name || "anonymous";
//     var message = data.text;

//     //CREATE ELEMENTS MESSAGE & SANITIZE TEXT
//     var messageElement = $("<li>");
//     var nameElement = $("<strong class='example-chat-username'></strong>")
//     nameElement.text(username);
//     messageElement.text(message).prepend(nameElement);

//     //ADD MESSAGE
//     messageList.append(messageElement)

//     //SCROLL TO BOTTOM OF MESSAGE LIST
//     messageList[0].scrollTop = messageList[0].scrollHeight;
//   });
