function storage(arg) {
    'use strict';

    var results = false;

    if (Storage !== undefined) {

        if (arg.name === undefined) {
            arg.name = '';
        }

        if (arg.value === undefined) {
            arg.value = '';
        }

        if (arg.method === undefined) {
            arg.method = 'get';
        }

        switch (arg.method.toLowerCase()) {
        case 'post':
        case 'create':

            if (localStorage.getItem(arg.name) === null && arg.name !== '*') {
                localStorage.setItem(arg.name, arg.value);
                results = true;
            }

            break;
        case 'update':

            if (localStorage.getItem(arg.name) !== null) {
                localStorage.setItem(arg.name, arg.value);
                results = true;
            }

            break;
        case 'delete':

            if (localStorage.getItem(arg.name) !== null) {
                localStorage.removeItem(arg.name);
                results = true;
            } else if (localStorage.length > 0) {
                if (arg.name === '*' || arg.name === 'all') {
                    localStorage.clear();
                    results = true;
                }
            }

            break;
        default: // read || get

            if (localStorage.getItem(arg.name) !== null) {
                results = localStorage.getItem(arg.name);
            }

            break;
        }
    }

    return results;
}
