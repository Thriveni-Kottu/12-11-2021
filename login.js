function validate()
{
    var email = document.getElementById('email').value;
    var pattern = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
    
    if (email.match(pattern))
    {
      alert("valid email address!");
     
    }
    else
    {
      alert("you have entered an invalid email address!");
      
    }
    var password = document.getElementById('password').value;
    var pwdpattern =  /^[a-zA-Z0-9!@#$%^&*]{6,16}$/;
    if (password.match(pwdpattern))
    {
        alert("valid password");
        
    }
    else
    {
        alert("inavalid password");
        
    }

}
