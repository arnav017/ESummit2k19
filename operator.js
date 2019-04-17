function operatorlogin() {

  var name = document.getElementById("name").value;
  var authoriser = document.getElementById("authoriser").value;
  var description = document.getElementById("desc").value;
  var password = document.getElementById("password").value;
  sessionStorage.operator = name;
  if (password == "6cYZ7eHR7?P+fmM&") {
    document.getElementById("oplogin").disabled = true;
    var database = firebase.database();
    var ref = database.ref("operator");

    var detail = {
      operatorName: name,
      authoriser: authoriser,
      description: description
    }
    console.log(detail);
    ref.push(detail).then(function() {
      setTimeout(function() {
        window.location.href = "operatorRegistration1618929895656251.html";
      }, 500);
    });

    //.then(alert("registration successful, please proceed to events page"));
  } else {
    alert("wrong password");
  }
  return false;
}

function registerByOperator() {
  console.log(sessionStorage.operator);
  if (sessionStorage.operator == "" || typeof sessionStorage.operator == 'undefined') {
    alert("Not authorised to access this page...kindly fuck off !!! ");
  } else {
    if(validate()){
    var name = document.getElementById("name").value;
    var college = document.getElementById("collegename").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var password = document.getElementById("password").value;
    var accomodation = document.getElementById("accomodation").value

    firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
        alert("student registration successful by operator " + sessionStorage.operator + ", please proceed to home page");
      }
    });
    var database = firebase.database();
    var ref = database.ref("individual");

    firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // ...
      window.alert("Error : " + errorMessage);
    }).then(function verification() {
        var user = firebase.auth().currentUser;
        console.log(name);
        user.updateProfile({
          displayName: name
        }).then(function() {
          // Update successful.
        }).catch(function(error) {
          // An error happened.
        });
        console.log("gjlk");
        var detail = {
          name: name,
          email: user.email,
          college: college,
          phone: phone,
          accomodation: accomodation,
          operator : sessionStorage.operator
        }
        console.log(detail);
        ref.push(detail);
      });
    }
  }
  }
  function validate() {
    var name = document.getElementById("name").value;
    var college = document.getElementById("collegename").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var password = document.getElementById("password").value;
    var accomodation = document.getElementById("accomodation").value;

    if (name == "") {
      console.log(name);
      alert("Please provide your name!");
      return false;
    }
    if (college == "") {
      console.log(name);
      alert("Please provide your college!");
      return false;
    }
    if (phone.length < 1) {
      alert("Please provide your phone!");
      return false;
    }
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
    } else {
      return (false);
      alert("You have entered an invalid email address!");
    }
    if (password == "") {
      console.log(name);
      alert("Please enter a suitable password!");
      return false;
    }
    if (password.length < 6) {
      alert("The password should be atleast 6 characters long!");
      name.focus();
      return false;
    }
    if (accomodation == "") {
      console.log(name);
      alert("Please select accomodation!");
      return false;
    }

    return (true);
  }
