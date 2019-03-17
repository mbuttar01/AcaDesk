
function clicked(){

	var user = document.getElementById('username');
	var pass = document.getElementById('password');

	var coruser = "Hansell";
	var corpass = "ManhattanCollege";

	if(user.value == coruser) {

		if(pass.value == corpass) {

			alert("You are now logged in as " + user.value);
			window.open("index.html");
		} else {

			alert("Incorrect Username or Password!");
		}

	} else {

		alert("Incorrect Username or Password!");
	}
}