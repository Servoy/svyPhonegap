var Bridge = new function() {
	this.init = function() {
		if (window.addEventListener) {
			window.addEventListener('message', methodCallback, false);
		} else if (window.attachEvent) {
			window.attachEvent('onmessage', methodCallback);
		}

		function methodCallback(event) {
			var method = event.data.method;
			var params = event.data.params;

			try {
				params = JSON.parse(params);
			} catch (e) {
				params = event.data.params;
			}

			var methodArgs = [];
			if (Array.isArray(params)) {
				for (var x = 0; x < params.length; x++) {
					//TODO: can maybe be removed when https://support.servoy.com/browse/SVY-8940 is looked at
					//this is now required, because untyped objects are simply ignored
					if (params[x] instanceof Object) {
						params[x].svyType = 'object';
					}
					methodArgs.push(params[x]);
				}
			} else if (params instanceof Object) {
				params.svyType = 'object';
				methodArgs.push(params);
			} else {
				methodArgs.push(params);
			}

			if (isFunction(method)) {
				eval("(" + method + ")").apply(null, methodArgs);
			} else if (isServoyFunction(method)) {
				// remove wrapping of quotes as this seems to be a problem with the camera
				// window.executeInlineScript(method.formname, method.script, wrapStringsWithQuotes(params));
				window.executeInlineScript(method.formname, method.script, methodArgs);
			}

			function isFunction(stringFunction) {
				try {
					return eval("(" + stringFunction + ")") instanceof Function;
				} catch (error) {
					return false;
				}
			}

			function isServoyFunction(stringFunction) {
				return stringFunction instanceof Object && stringFunction.hasOwnProperty("script");
			}

			function wrapStringsWithQuotes(parameters) {
				for (var i = 0; i < parameters.length; i++) {
					var param = parameters[i];
					if (typeof param == 'string') {
						parameters[i] = "\"" + param.replace(/"/g, "\\\"") + "\"";
					}
				}

				return parameters;
			}
		}
	}

	this.executeMethod = function(method, callbackMethod, params) {

		if (/^function\s*[a-z0-9_\$]*\s*\([^)]*\)\s*\{\s*\[native code\]\s*\}/i.test(method.toString())) {
			throw "Calls to \"native code\" function are not supported! Please wrap the code around a custom function.";
		}

		var message = { };
		message.method = method.toString();
		if (callbackMethod instanceof Function) {
			message.callbackMethod = callbackMethod.toString();
		} else {
			message.callbackMethod = callbackMethod;
		}

		message.params = [];

		if (params) {
			for (var i = 0; i < params.length; i++) {
				if (params[i] instanceof Function) {
					message.params.push(params[i].toString());
					continue;
				}
				message.params.push(params[i]);
			}
		}
		console.log(message);
		window.parent.postMessage(message, '*');

	}
}