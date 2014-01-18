var $_GET = function (parameter) {

	var queryString, regex, variableString, value;

	queryString = document.URL;
	regex = new RegExp("(" + parameter + "=){1}(.(?!\&))*(.(?=\&))?");

	if (regex.test(queryString)) {

		variableString = regex.exec(queryString);
		value = variableString[0].substr(parameter.length + 1);

	}else{

		value = false;

	}

	return value;
};