function storage(arg){
	var results = false;

	if(typeof(Storage) !== "undefined"){

		if(typeof(arg.name) === "undefined"){
			arg.name = '';
		};

		if(typeof(arg.value) === "undefined"){
			arg.value = '';
		};

		if(typeof(arg.method) === "undefined"){
			arg.method = 'get';
		};

		switch(arg.method.toLowerCase()){
			case 'post':
			case 'create':

				if(localStorage.getItem(arg.name) === null && arg.name !== '*'){
					localStorage.setItem(arg.name, arg.value);
					results = true;
				};

				break;
			case 'update':

				if(localStorage.getItem(arg.name) !== null){
					localStorage.setItem(arg.name, arg.value);
					results = true;
				};

				break;
			case 'delete':

				if(localStorage.getItem(arg.name) !== null){
					localStorage.removeItem(arg.name);
					results = true;
				}else if(localStorage.length > 0){
					if(arg.name === '*' || arg.name === 'all'){
						localStorage.clear();
						results = true;
					}
				};

				break;
			default: // read || get

				if(localStorage.getItem(arg.name) !== null){
					results = localStorage.getItem(arg.name);
				};

				break;
		};
	};

	return results;
};