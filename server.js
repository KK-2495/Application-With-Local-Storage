function register(event) {
  event.preventDefault();
  // console.log(document.getElementById("userName").value);
  var name = document.getElementById("userName").value;
  // console.log(name, " - is your User Name")
  var email = document.getElementById("userEmail").value;
  // console.log(email, " - is your User Email")
  var password = document.getElementById("userPassword").value;
  // console.log(password, " - is your User Password")
  var confirmPassword = document.getElementById("userConfirmPassword").value;
  // console.log(confirmPassword, " - is your ConfirmedPassword")

  // var LS = JSON.parse(localStorage.getItem("Users"))  || [];
  // // console.log(LS)
  // var userData = {
  //   userName: name,
  //   userEmail: email,
  //   userPassword: password,
  //   confirmPassword: confirmPassword,
  // };
  // LS.push(userData);
  // localStorage.setItem("Users", JSON.stringify(LS));
  // console.log(LS);

  // flagForEmail = false;

  // for(i=0; i<LS.length; i++){
  //   console.log(LS);
  //   if(LS[i].userEmail == email)
  //   flagForEmail = true;
  // }
  // if(!flagForEmail){
  //   alert("Registration Succesful");
  // }else {
  //   alert("Email already exists in Local Storage");
  // }
  // alert("Email exists in Local storage");

  if (name && email && password && confirmPassword) {
    if (password.length >= 8 && confirmPassword.length >= 8) {
      if (password == confirmPassword) {
        var userData = {
          userName: name,
          userEmail: email,
          userPassword: password,
          confirmPassword: confirmPassword,
        };
        var LS = JSON.parse(localStorage.getItem("Users")) || [];
        var flagForEmail = false;
        for (var i = 0; i < LS.length; i++) {
          if (LS[i].userEmail == email) {
            flagForEmail = true;
          }
        }
        if (!flagForEmail) {
          LS.push(userData);
          localStorage.setItem("Users", JSON.stringify(LS));

          alert("Registration Succesful");
          document.getElementById("userName").value = "";
          document.getElementById("userEmail").value = "";
          document.getElementById("userPassword").value = "";
          document.getElementById("userConfirmPassword").value = "";
        } else {
          alert("Email already exists in local storage");
        }

        // console.log(userData);
        // now store data into LS(local storage)//
        // JSON.stringify(); //converts object into Json//
        // JSON.parse();   // converts Json into Object//
        // localStorage.setItem(key, value)  //to save into LS(local storage)//
        // localStorage.getItem(key)       //to get data from LS//
        // localStorage.removeItem(key)    //to remove data from LS//
      } else {
        console.log("Passwords does not match");
      }
    } else {
      console.log("password should be atleast 8");
    }
  } else {
    console.log("Please fill all your details");
  }
}
// Step 1  : Get user typed data from html to JS = Completed
// Step 2 : Get all users data into JS from LS = Completed
// Step 3 : Iterate all users (LS) with user typed data 
// Step 4 : If email & password both match at same time then
//  show user suceess

function login(event) {
  event.preventDefault();
  var email = document.getElementById("userEmail").value;
  var password = document.getElementById("userPassword").value;
  // alert(email,password);
  var LSlogin = JSON.parse(localStorage.getItem("Users"));
  // console.log(LSlogin);

  var currentUser;
  var flagForUser = false;
  for(var i=0; i<LSlogin.length; i++){
    // console.log(LSlogin[i].userEmail);
    if(LSlogin[i].userEmail == email && LSlogin[i].userPassword == password){
      flagForUser = true;
      currentUser = LSlogin[i];
    }
  }
  if(flagForUser == true){
    // console.log(currentUser);
    localStorage.setItem("currentUser", JSON.stringify(currentUser))
    window.location.href = './home.html';
    alert("Login Successful.")
  }else{
    alert("Credential does not match")
  }

}

// step 1: create an empty object (currentUser)
// step 2: check if the email and password are the same as the account in the local storage. If they are the same, then assign the object data present in the DB to the empty object created (currentUser)
// step 3: set the object currentUser in the local storage once flag is true.