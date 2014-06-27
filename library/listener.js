var listener = {
    event: {},
    inter: {
        num: 0
    },
    create: function (name, value) { // listener.create('name', 'value');
        "use strict";
        this.event[name.replace(/-/g, "")] = value;
    },
    dispatch: function (name, func, loop, listenOnce, delay) { // listener.dispatch('name', func, 2, true, 50000);
        "use strict";
        var widow = window,
			that = this,
			i = 0,
			num;
        loop = loop || 1; // 0 === infinite loops;
        delay = delay || 1000;
        that.inter.num = that.inter.num + 1;
        num = that.inter.num;
        that.inter[name + num] = widow.setInterval(function () {
            if (String(that.event.hasOwnProperty(name)) !== 'false') {
                i += 1;
                func(that.event[name]);
                if (loop > 0 && i === loop) {
                    widow.clearInterval(that.inter[name + num]);
                    delete that.inter[name + num];
                }
                if (listenOnce) {
                    delete that.event[name];
                }
            }
        }, delay);
    },
    remove: function (name) { // listener.remove('name');
        "use strict";
        var that = this;
        window.clearInterval(that.inter[name]);
        delete that.event[name];
    }
};
