function getTimezone (date) {

    var timezones, timezone;

    if (typeof date === 'string') {
        date = new Date(date);
    }
    
    function isDST (date) {
    
        var jan, jul, stdTimezoneOffset;
    
        if (typeof date === 'string') {
            date = new Date(date);
        }
    
        jan = new Date(date.getFullYear(), 0, 1);
        jul = new Date(date.getFullYear(), 6, 1);
        stdTimezoneOffset = Math.max(jan.getTimezoneOffset(), jul.getTimezoneOffset());
    
        return date.getTimezoneOffset() < stdTimezoneOffset;
    }

    if (date.isDST()) {
        timezones = ['EDT', 'CDT', 'MDT', 'PDT']; // daylight saving time
    } else {
        timezones = ['EST', 'CST', 'MST', 'PST']; // standard time
    }
    
    timezone = date.getTimezoneOffset() / 60;

    if ((isDST(date) && timezone === 4) || (!isDST(date) && timezone === 5)) {
        timezone = timezones[0];
    } else if ((isDST(date) && timezone === 5) || (!isDST(date) && timezone === 6)) {
        timezone = timezones[1];
    } else if ((isDST(date) && timezone === 6) || (!isDST(date) && timezone === 7)) {
        timezone = timezones[2];
    } else if ((isDST(date) && timezone === 7) || (!isDST(date) && timezone === 8)) {
        timezone = timezones[3];
    }

    return timezone;
}
