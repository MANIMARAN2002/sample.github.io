function loginUser() {
    var formData = $('#gf').serialize();
    
    $.ajax({
      type: 'POST',
      url: 'php/login.php',
      data: formData,
      dataType: 'json',
      encode: true
    })
    .done(function(data) {
      console.log(data);
      if(data.success) {
        window.location.replace("profile.html");
        alert('Login successful!');
      } else {
        alert(data.error);
      }
    });
  }
  
  $(document).ready(function() {
    $('#gf').submit(function(event) {
      event.preventDefault();
      loginUser();
    });
  });
  
const container = document.querySelector(".container"),
      pwShowHide = document.querySelectorAll(".showHidePw"),
      pwFields = document.querySelectorAll(".password"),
      login = document.querySelector(".login-link");
    //   js code to show/hide password and change icon
    pwShowHide.forEach(eyeIcon =>{
        eyeIcon.addEventListener("click", ()=>{
            pwFields.forEach(pwField =>{
                if(pwField.type ==="password"){
                    pwField.type = "text";

                    pwShowHide.forEach(icon =>{
                        icon.classList.replace("uil-eye-slash", "uil-eye");
                    })  
                }else{
                    pwField.type = "password";

                    pwShowHide.forEach(icon =>{
                        icon.classList.replace("uil-eye", "uil-eye-slash");
                    })
                }
            }) 
        })
    })



   
      