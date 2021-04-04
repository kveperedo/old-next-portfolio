export const throttle = (func: Function, timeFrame: number) => {
	var lastTime = 0;
	return function () {
		var now = Date.now();
		if (now - lastTime >= timeFrame) {
			func();
			lastTime = now;
		}
	};
};
