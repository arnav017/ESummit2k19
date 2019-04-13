var i = 2;
var j;




function login_func() {
  document.getElementById("registration").style.display = "none";
  document.getElementById("login").style.display = "block";
  document.getElementById("conti").style.display = "none";
  document.getElementById("accomodation_yes").style.display = "none";
  document.getElementById("accomodation_no").style.display = "none";

}

function register_fun() {
  document.getElementById("login").style.display = "none";
  document.getElementById("registration").style.display = "block";
  document.getElementById("conti").style.display = "none";

}

function contingent() {
  document.getElementById("login").style.display = "none";
  document.getElementById("registration").style.display = "none";
  document.getElementById("conti").style.display = "block";

}

function addMember() {
  if (i < 12) {
    a = document.getElementById("member");
    b = document.createElement("input");
    c = document.createElement("label");
    b.setAttribute("type", "text");
    b.setAttribute("id", "memberemail" + ((i++) + 3));
    b.setAttribute("class", "form-control");
    b.setAttribute("placeholder", "Email of member" + (i + 3));

    a.appendChild(c)
    a.appendChild(b);
  } else {
    alert("Maximum 15 members are allowed in contingent");
  }

}


function login() {

  var email = document.getElementById("email_login").value;
  var password = document.getElementById("password_login").value;
  firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    if (errorCode === 'auth/wrong-password') {
      alert('Wrong password.');
    } else if (errorCode === 'auth/user-not-found') {
      alert('User not registered');
    } else {
      alert(errorMessage);
    }
    //window.alert("Error : "+ errorMessage);
  });
  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      window.location.href = "index.html";
    }
  });

  //no need of creating a go-back button
  // a = document.getElementById("goback_button_login");
  // b = document.createElement("button");
  // b.setAttribute("class","btn oneMusic-btn mt-30");
  // c = document.createTextNode("Go Back");
  // b.appendChild(c);
  // a.appendChild(b);
}



function getValueIndi() {
  window.indiaccomodation = document.getElementById("accomodation").value;
  //get value and display payment button

  if (window.indiaccomodation == 'yes') {
    document.getElementById("accomodation_yes").style.display = "block";
    document.getElementById("accomodation_no").style.display = "none";
    console.log("yess");
  } else if (window.indiaccomodation == 'no') {
    document.getElementById("accomodation_no").style.display = "block";
    document.getElementById("accomodation_yes").style.display = "none";
    console.log("nope");
  } else {
    console.log("accomodation preference not selceted" + window.indiaccomodation)
  }
  //console.log(indiaccomodation);
}

function create() {
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;
  var name = document.getElementById("name").value;
  var college = document.querySelector('input[name="college"]:checked').value;
  var phone = document.getElementById("phone").value;
  if (college == "Other") {
    college = document.getElementById("collegename").value;
  }

  firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // ...
    window.alert("Error : " + errorMessage);
  }).then(function verification() {
    var user = firebase.auth().currentUser;

    // user.sendEmailVerification().then(function() {
    //   // Email sent.
    //   window.alert("Successfully Registered. Verification Mail Sent, Please Verify Your E-mail");
    // }).catch(function(error) {
    //   console.log(error);
    // });


    console.log(name);
    user.updateProfile({
      displayName: name
    }).then(function() {
      // Update successful.
    }).catch(function(error) {
      // An error happened.
    });


    console.log(college + email);
    var database = firebase.database();
    var ref = database.ref("individual");
    var detail = {
      name: name,
      email: user.email,
      college: college,
      phone: phone,
      accomodation: window.indiaccomodation
    }
    ref.push(detail);



  });

  // var n = window.indiaccomodation.localeCompare("yes");
  //
  //
  // if(n==0)
  // {
  // 	a = document.getElementById("accomodation_yes");
  // 	b = document.createElement("button");
  // 	b.setAttribute("class","btn oneMusic-btn mt-30");
  // 	c = document.createTextNode("Continue for payment");
  // 	b.appendChild(c);
  // 	a.appendChild(b);
  // }
  // else{
  // 	a = document.getElementById("accomodation_no");
  // 	b = document.createElement("butgetValueInditon");
  // 	b.setAttribute("class","btn oneMusic-btn mt-30");
  // 	c = document.createTextNode("Continue for payment");
  // 	b.appendChild(c);
  // 	a.appendChild(b);
  // }
  window.location.href = "index.html	";
}



function getValue() {

  window.accomo = document.getElementById("leaderaccomodation").value;
  console.log(accomo);
}

function contiCreate() {
  var leaderemail = document.getElementById("leaderemail").value;
  var leaderpassword = document.getElementById("leaderpassword").value;
  var leadername = document.getElementById("leadername").value;
  var conticollege = document.getElementById("conticollege").value;
  var leaderphone = document.getElementById("leaderphone").value;
  var memberemail = " ";
  for (j = 1; j < i; j++) {
    var mail = document.getElementById("memberemail" + (j)).value;
    memberemail += mail + " ";
  }
  console.log(memberemail);
  firebase.auth().createUserWithEmailAndPassword(leaderemail, leaderpassword).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // ...
    window.alert("Error : " + errorMessage);
  }).then(function verification() {
    var user = firebase.auth().currentUser;

    user.sendEmailVerification().then(function() {
      // Email sent.
      window.alert("Verification Sent, Please Verify Your E-mail");
    }).catch(function(error) {
      console.log(error);
    });


    console.log(leadername);
    user.updateProfile({
      displayName: leadername
    }).then(function() {
      // Update successful.
    }).catch(function(error) {
      // An error happened.
    });


    console.log(leadername);
    var database = firebase.database();
    var ref = database.ref("contingent");
    var detail = {
      leadername: leadername,
      leaderemail: user.email,
      conticollege: conticollege,
      leaderphone: leaderphone,
      memberemail: memberemail,
      accomodation: window.accomo

    }
    ref.push(detail);
    a = document.getElementById("goback_button_conti");
    b = document.createElement("button");
    b.setAttribute("class", "btn oneMusic-btn mt-30");
    c = document.createTextNode("Go Back");
    b.appendChild(c);
    a.appendChild(b);
  });
}

function collegeAdded() {
  a = document.querySelector('input[name="college"]:checked').value;
  if (a == 'HBTU') {
    document.getElementById("button_register_hbtu").style.display = "block";
    document.getElementById("accomodation_no").style.display = "none";
    document.getElementById("accomodation_yes").style.display = "none";
    document.getElementById('accomodationForOthers').style.display = "none";
    document.getElementById('collegeName').style.display = "none";
    document.getElementById('rollNumber').style.display = "block";
    document.getElementById('email').setAttribute('placeholder', "Enter your email registered in ERP-HBTU");
    document.getElementById('accomodationForOthers').style.display = "none";
    console.log('hbtu');
  } else if (a == 'Other') {
    document.getElementById("accomodation").value = "none"
    document.getElementById("button_register_hbtu").style.display = "none";
    document.getElementById('accomodationForOthers').style.display = "block";
    document.getElementById('email').setAttribute('placeholder', "Enter email for verification");
    document.getElementById('accomodationForOthers').style.display = "block";
    document.getElementById('collegeName').style.display = "block";
    document.getElementById('rollNumber').style.display = "none";
    console.log('other');
  } else {
    console.log("some error occured in getting college");
  }
}

function pay() {
  /* Start client-defined Callback Handler Functions */
  function onOpenHandler() {
    console.log('Payments Modal is Opened');
  }

  function onCloseHandler() {
    console.log('Payments Modal is Closed');
  }

  function onPaymentSuccessHandler(response) {
    create();
    alert('Payment Success');
    console.log('Payment Success Response', response);
  }

  function onPaymentFailureHandler(response) {
    alert('Payment Failure');
    console.log('Payment Failure Response', response);
  }
  /* End client-defined Callback Handler Functions */

  /* Configuring Handlers */
  Instamojo.configure({
    purpose: "testing123",
    buyer_name: "Sample Saxena",
    send_sms: true,
    phone: "7618922251",
    send_email: true,
    email: "arnavsrivastava017@gmail.com",
    redirect_url: "https://ecellhbtu.in/index.html#events",
    webhook: "https://ecellhbtu.in/instamojoWebhook.js",
    handlers: {
      onOpen: onOpenHandler,
      onClose: onCloseHandler,
      onSuccess: onPaymentSuccessHandler,
      onFailure: onPaymentFailureHandler
    }
  });
}

function onNoAccomodationPayment() {
  validate();
  pay();
  Instamojo.open('https://www.instamojo.com/@ecellhbtu/l490298cda7754e4aa4b044fd7b962b2a/');
}

function onYesAccomodationPayment() {
  validate();
  pay();
  Instamojo.open('https://www.instamojo.com/@ecellhbtu/l49cb7732206942c492b4f3e707fd50aa/');
}

function validate() {
  var name = document.getElementById("name").value;
  var college = document.getElementById("collegename").value;
  var email = document.getElementById("email").value;
  var phone = document.getElementById("leaderphone").value;
  var password = document.getElementById("password").value;
  if (name == "") {
    console.log(name);
    alert("Please provide your name!");
    name.focus();
    return false;
  }
  if (college == "") {
    console.log(name);
    alert("Please provide your college name!");
    name.focus();
    return false;
  }
  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
    console.log("email is " + email);
  } else {
    return (false);
    alert("You have entered an invalid email address!");
  }
  if (password == "") {
    console.log(name);
    alert("Please enter a suitable password!");
    name.focus();
    return false;
  }
  if (password.length < 6) {
    alert("The password should be atleast 6 characters long!");
    name.focus();
    return false;
  }

  return (true);
}
