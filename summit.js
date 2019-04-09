function create(){
	var email = document.getElementById("email").value;
	var password = document.getElementById("password").value;
	var name = document.getElementById("name").value;
	var college = document.getElementById("college").value;
	var phone = document.getElementById("phone").value;

	firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
  // ...
  window.alert("Error : "+ errorMessage);
	}).then(function verification(){
			var user = firebase.auth().currentUser;

		user.sendEmailVerification().then(function() {
		  // Email sent.
		  window.alert("Verification Sent, Please Verify Your E-mail");
		}).catch(function(error) {
		  console.log(error);
		});


		user.updateProfile({
		  displayName: name
		}).then(function() {
		  // Update successful.
		}).catch(function(error) {
		  // An error happened.
		});

	
		var database = firebase.database();
		var ref = database.ref("college");
		var detail = {
			name: name,
			email: user.email,
			college: college,
			phone: phone
		}
		ref.push(detail);
		document.getElementById("goback").innerHTML = "Your Registration is Complete !! Please Verify Your E-mail before Event Registration, Events Registration Link will be provided soon !!";

	});

	}
