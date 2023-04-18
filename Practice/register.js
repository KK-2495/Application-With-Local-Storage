

function register(event) {
    event.preventDefault();

    var name = document.getElementById("userName").value;
    var email = document.getElementById("userEmail").value;
    var pass = document.getElementById("userPass").value;
    var confirmPass = document.getElementById("userConfirmPass").value;    


    if(name && email && pass && confirmPass){
        if(pass >= 8 && confirmPass >= 8){
            if(pass == confirmPass){
                var userData = {uName: name, uEmail: email, uPass: pass, cUPass: confirmPass};
                
              
              
              
                alert("Registration Successful");
                document.getElementById("userName").value = "";
                document.getElementById("userEmail").value = "";
                document.getElementById("userPass").value = "";
                document.getElementById("userConfirmPass").value = "";
            }else{
                alert("Password does not match");
            }
        }else{
            alert("Password should be atleast 8 characters");
        }
    }else{
        alert("Please fill all the details");
    }






}