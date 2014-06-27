function $_GET (parameter) {

    var queryString, regex, variableString, value;

    queryString = document.location.search;
    regex = new RegExp("(" + parameter + "=){1}(.(?!\&))*(.(?=\&))?");

    if (regex.test(queryString)) {
        variableString = regex.exec(queryString);
        value = decodeURIComponent(variableString[0].substr(parameter.length + 1));
    } else {
        value = false;
    }

    return value;
};
