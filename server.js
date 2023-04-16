

var arrayData = [];

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

  // console.log(userData);

  if (name && email && password && confirmPassword) {
    if (password.length >= 8 && confirmPassword.length >= 8) {
      if (password == confirmPassword) {
        var userData = {
          userName: name,
          userEmail: email,
          userPassword: password,
          confirmPassword: confirmPassword,
        };
        arrayData.push(userData);
        // console.log(userData);
        //now store data into LS(local storage)//
        localStorage.setItem("Users", JSON.stringify(arrayData));
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

function collectData() {
  console.log(JSON.parse(localStorage.getItem("Users")));
}
