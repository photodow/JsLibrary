var listener = {
	event: {},
	inter: {},
	create: function (name, value) {
		"use strict";
		this.event[name] = value;
	},
	dispatch: function (name, func, loop, delay) {
		"use strict";
		var $window = window,
			$this = this,
			i = 0;
		loop = loop || 1; // 0 === infinite loops;
		delay = delay || 1000;
		$this.inter[name] = $window.setInterval(function () {
			if ($this.event.hasOwnProperty(name)) {
				i += 1;
				func($this.event[name]);
				if (loop > 0 && i === loop) {
					$window.clearInterval($this.inter[name]);
				}
				delete $this.event[name];
			}
		}, delay);
	},
	remove: function (name) {
		"use strict";
		var $window = window,
			$this = this;
		$window.clearInterval($this.inter[name]);
		delete $this.event[name];
	}
};