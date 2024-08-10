emailjs.init({
	publicKey: "PQUVZKvgCVVPDie3Q",
});

function emailSend() {
	var param = {
		name: document.getElementById("name").value,
		email: document.getElementById("email").value,
		tel: document.getElementById("tel").value,
		message: document.getElementById("message").value
	};
	emailjs
		.send("service_pzehzos", "template_zhshzjh", param)
		.then(function (res) {
			alert("Success !", res.status);
		});
}
