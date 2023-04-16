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
