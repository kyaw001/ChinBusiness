
function printErr(elementIDs, errorsMsg){
    document.getElementById(elementIDs).innerHTML = errorsMsg;
}
function validatingForm(){
    var name =document.contactForm.name.value;
    var phone = document.contactForm.phnum.value;
    var email = document.contactForm.email.value;
    var inquiry = document.contactForm.inquiry.value;
    var subject = document.contactForm.subject.value;

    var nameErr = phnumErr = inquiryErr = subjectErr= emailErr = true;
      

    if(name == ""){
        printErr ("nameErr","Please enter your name");
    } else {
        var regex = /^[a-zA-Z\s]+$/;
        if(regex.test(name) == false){
            printErr ("nameErr","Please enter only text, not number or other special charaters");
        } else {
            printErr("nameErr","");
            nameErr = false;
        }
    }

    if ( isNaN(phone)){
        printErr("phnumErr", "Please enter the valid phone number");
    } else {
        if(phone.length == 10){
            printErr("phnumErr", "");
            phnumErr = false;
        } else {
            printErr("phnumErr", "Phone number must be 10 digit numbers");
        }

    }

    if(inquiry=="default"){
        printErr ("inquiryErr", "Please select one of the options");
    } else {
        printErr ("inquiryErr", "");
        inquiryErr = false;
    }

    var regex =/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (email== "") {
        printErr("emailErr","");
        emailErr = false;
    } else if (!regex.test(email)) {
        printErr ("emailErr", "Please enter valid email address");
            
    } else {
            printErr ("emailErr", "");
            emailErr = false;
        
    }
    


    if(subject ==""){
        printErr ("subjectErr", "Please write something about inquiry");
    } else {
        printErr ("subjectErr", "");
        subjectErr = false;
    }

    if(nameErr || phnumErr || subjectErr || inquiryErr || emailErr == true){
        alert("Please fill all the fields");
        return false;
    } else {
     /* function clearAllInputs(event) {
         var allInputs = document.querySelectorAll('input');
         allInputs.forEach(singleInput => singleInput.value = '');
         output.innerHTML += "Form submitted and cleared successfully! <br>";
      }
    */
      
      alert("Form submitted and you will be contacted shortly! <br>", sendEmail());
      
      return true;
   }

}

function sendEmail() {
    var params = {
        name :document.contactForm.name.value,
        phnum : document.contactForm.phnum.value,
        email : document.contactForm.email.value,
        inquiry: document.contactForm.inquiry.value,
        subject : document.contactForm.subject.value

    };

    const  serviceID = "service_s30scup";
    const  templateID= "template_0l8elll";
    emailjs.send(serviceID, templateID, params)
    .then(function(res) {
        alert(res.status);
    }).catch((err) => {
        alert(err.message);   
    });

}
