firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
  	document.getElementById("status").innerHTML = "Hello " + user.displayName;
  	document.getElementById("logout").innerHTML = "Log Out";
  	var verify = user.emailVerified;

	// if(verify){
    console.log("yay");
		document.getElementById("event1").style.display = "block";
		document.getElementById("event2").style.display = "block";
		document.getElementById("event3").style.display = "block";
		document.getElementById("event4").style.display = "block";
		document.getElementById("event5").style.display = "block";
		document.getElementById("event6").style.display = "block";
		document.getElementById("event7").style.display = "block";
		document.getElementById("event8").style.display = "block";
		document.getElementById("event9").style.display = "block";
		document.getElementById("event10").style.display = "block";
		document.getElementById("event11").style.display = "block";
		document.getElementById("event12").style.display = "block";

	// }
	// else{
  //   console.log("dfshkfhsjkhfsk");
	// 	document.getElementById("event1").style.display = "none";
	// 	document.getElementById("event2").style.display = "none";
	// 	document.getElementById("event3").style.display = "none";
	// 	document.getElementById("event4").style.display = "none";
	// 	document.getElementById("event5").style.display = "none";
	// 	document.getElementById("event6").style.display = "none";
	// 	document.getElementById("event7").style.display = "none";
	// 	document.getElementById("event8").style.display = "none";
	// 	document.getElementById("event9").style.display = "none";
	// 	document.getElementById("event10").style.display = "none";
	// 	document.getElementById("event11").style.display = "none";
	// 	document.getElementById("event12").style.display = "none";
  //
  //
	// }
    // User is signed in.
  } else {
  	document.getElementById("status").innerHTML = "SignUp/Login";
  	document.getElementById("logout").innerHTML = "";
  		document.getElementById("event1").style.display = "none";
		document.getElementById("event2").style.display = "none";
		document.getElementById("event3").style.display = "none";
		document.getElementById("event4").style.display = "none";
		document.getElementById("event5").style.display = "none";
		document.getElementById("event6").style.display = "none";
		document.getElementById("event7").style.display = "none";
		document.getElementById("event8").style.display = "none";
		document.getElementById("event9").style.display = "none";
		document.getElementById("event10").style.display = "none";
		document.getElementById("event11").style.display = "none";
		document.getElementById("event12").style.display = "none";


    // No user is signed in.
  }
});


function logout(){
		firebase.auth().signOut().then(function() {
	  // Sign-out successful.
	}).catch(function(error) {
	  // An error happened.
	});
}
