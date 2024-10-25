function sendMail(){
    let person ={
        name : document.getElementById("name").value, 
        email : document.getElementById("email").value,
        phone : document.getElementById("phone").value,
        message : document.getElementById("message").value,
    }
    emailjs.send('service_ui2igo6','template_c89fe9a',person).then(function(response) {
        alert("Email Sent!..");
    }, function(error) {
        alert("Failed to send email! " + JSON.stringify(error));
    });
}  
    
    
  /*  
    (alert("Email Sent!.."))
}*/