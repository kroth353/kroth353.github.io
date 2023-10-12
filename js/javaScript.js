window.onload = function() {
    emailjs.init("_ZsZk3LwLHnxw6maa");

    document.getElementById('contact-form').addEventListener('submit', function(event) {
        let userEmail = document.getElementById('userEmail');
        let userPhone = document.getElementById('userPhone');
        let emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        let phoneRegex = /^\d{3}-\d{3}-\d{4}$/;
        event.preventDefault();
        let errorMessage = "Please enter a valid:\n";

        if(!userName || document.getElementById('userName').value.trim() == ""){
            errorMessage += " name.\n";
        }
        if(!userPhone || !phoneRegex.test(userPhone.value)){
            errorMessage += " phone number.\n";
        }
        if(!userEmail || !emailRegex.test(userEmail.value)){
            errorMessage += " email address.\n";
        }
        if(!userMessage || document.getElementById('userMessage').value.trim() == ""){
            errorMessage += " message.\n";
        }
        if(!errorMessage == "Please enter a valid:\n"){
            document.getElementById('error').innerHTML = errorMessage;
        }
        else{
            emailjs.send("service_sks2nxi","template_ctt9eks",this);
            console.log("Email sent!");
            input.setAttribute(userName, "");
        }
    });
};
