import axios from "axios";

function sendHelpData(schema) {
	console.log("chsmea ye hai", schema);
	axios
		.post("http://localhost:5000/api/create-help-form", schema)
		.then((response) => console.log(response.data))
		.catch((error) => console.log(error));
}

export default sendHelpData;
