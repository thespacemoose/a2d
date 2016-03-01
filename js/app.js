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

	$("#startNew").click(function(){
		console.log("trying to open");
		$(".topicTitleForm").toggleClass("formOpen");
	});


	// CREATE A REFERENCE TO FIREBASE
	var argueRef = new Firebase('https://blistering-heat-1060.firebaseio.com/');
	var titleRef = new Firebase('https://a2dname.firebaseio.com')

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

	$("#topicTitleButton").click(function(e){
		  	e.preventDefault();
		  	console.log("user trying to change topic")
		  	// return confirm("DO YOU REALLY WANT TO DO THIS? This will erase the current debate and all arguments associated with it!!!");
		  	$("h3").empty();
		   	$(".argumentElement").remove();
		  	var newTopic = $("#topicTitleInputArea").val();
		  	console.log(newTopic);
<<<<<<< HEAD
=======
		  	// $("h3").append(newTopic);
>>>>>>> origin/gh-pages
		  	$(".argument").remove();
		  	$("#topicTitleInputArea").val("");
		  	$(".topicTitleForm").removeClass("formOpen");

		  	titleRef.set(null);
		  	titleRef.push({debateTitle: newTopic});
		  	argueRef.set(null);
		});



   // LISTEN FOR KEYPRESS EVENT & SAVE DATA TO FIREBASE AND EMPTY FIELD

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
<<<<<<< HEAD
=======
	});

>>>>>>> origin/gh-pages

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
		});
		titleRef.on('child_added', function (snapshotTitle) {
			var dataTitle = snapshotTitle.val();

			var databaseTitle = dataTitle.debateTitle;
			console.log(databaseTitle);
			$("h3").append(databaseTitle);
		});	
<<<<<<< HEAD
=======





>>>>>>> origin/gh-pages




});
	
