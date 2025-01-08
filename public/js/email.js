function sendMail() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;
	
    if (!name || !email || !message) {
        alert("Please fill in all fields before sending the message.");
        return; // Prevent the email from being sent if any field is empty
    }
	var params = {
        to_name: 'Misgina',
        subject: 'Contact from Portfolio',
		from_name: document.getElementById("name").value,
		from_email: document.getElementById("email").value,
		message: document.getElementById("message").value,
	};

	const serviceId = "service_hhkaepm";
	const templateId = "template_t3e3xjk";

	emailjs
		.send(serviceId, templateId, params)
		.then((res) => {
			document.getElementById("name").value = "";
			document.getElementById("email").value = "";
			document.getElementById("message").value = "";
			console.log("email response: ", res);
			alert("Your message has been sent");
		})
		.catch((error) => {
			console.log("error response: ", error);
		});
}
