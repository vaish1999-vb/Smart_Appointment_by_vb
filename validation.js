// shorthand for $(document).ready();
$(function(){

    function validateForm(form){
      var email = document.Reset.email;
      var password = document.Reset.password;
      var validEmail = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/; 
      var containsDigit = /\d/;
      var containsCap = /[A-Z]/;
      var valPassLen = document.Reset.password.length;
  
      var invalid = [];
        
        if (password.length === 0){invalid.push("Password cannot be blank");
        }
  
        if (password.length < 8){invalid.push("Password must be at least 8 characters long");
        } 
  
        if (!containsCap.test(password)){invalid.push("Password must have at least one capital letter");
        } 
  
        if (containsDigit.test(password)){invalid.push("Password must have at least one numeric character (0-9)");
        } 
  
        if (invalid.length !== 0) {
          $("#errors ul").append($('<li>invalid.join("\n")</li>'));
            // return false;
        }
        // return true;
  
    // $('.submit').click(function(){
    //   validateForm();
    //  });
  
    }
  
  
    });