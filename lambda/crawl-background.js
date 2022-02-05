(function(e, a) { for(var i in a) e[i] = a[i]; }(exports, /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 53);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var bind = __webpack_require__(3);

/*global toString:true*/

// utils is a library of generic helper functions non-specific to axios

var toString = Object.prototype.toString;

/**
 * Determine if a value is an Array
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an Array, otherwise false
 */
function isArray(val) {
  return toString.call(val) === '[object Array]';
}

/**
 * Determine if a value is undefined
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if the value is undefined, otherwise false
 */
function isUndefined(val) {
  return typeof val === 'undefined';
}

/**
 * Determine if a value is a Buffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Buffer, otherwise false
 */
function isBuffer(val) {
  return val !== null && !isUndefined(val) && val.constructor !== null && !isUndefined(val.constructor)
    && typeof val.constructor.isBuffer === 'function' && val.constructor.isBuffer(val);
}

/**
 * Determine if a value is an ArrayBuffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an ArrayBuffer, otherwise false
 */
function isArrayBuffer(val) {
  return toString.call(val) === '[object ArrayBuffer]';
}

/**
 * Determine if a value is a FormData
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an FormData, otherwise false
 */
function isFormData(val) {
  return (typeof FormData !== 'undefined') && (val instanceof FormData);
}

/**
 * Determine if a value is a view on an ArrayBuffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a view on an ArrayBuffer, otherwise false
 */
function isArrayBufferView(val) {
  var result;
  if ((typeof ArrayBuffer !== 'undefined') && (ArrayBuffer.isView)) {
    result = ArrayBuffer.isView(val);
  } else {
    result = (val) && (val.buffer) && (val.buffer instanceof ArrayBuffer);
  }
  return result;
}

/**
 * Determine if a value is a String
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a String, otherwise false
 */
function isString(val) {
  return typeof val === 'string';
}

/**
 * Determine if a value is a Number
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Number, otherwise false
 */
function isNumber(val) {
  return typeof val === 'number';
}

/**
 * Determine if a value is an Object
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an Object, otherwise false
 */
function isObject(val) {
  return val !== null && typeof val === 'object';
}

/**
 * Determine if a value is a Date
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Date, otherwise false
 */
function isDate(val) {
  return toString.call(val) === '[object Date]';
}

/**
 * Determine if a value is a File
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a File, otherwise false
 */
function isFile(val) {
  return toString.call(val) === '[object File]';
}

/**
 * Determine if a value is a Blob
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Blob, otherwise false
 */
function isBlob(val) {
  return toString.call(val) === '[object Blob]';
}

/**
 * Determine if a value is a Function
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Function, otherwise false
 */
function isFunction(val) {
  return toString.call(val) === '[object Function]';
}

/**
 * Determine if a value is a Stream
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Stream, otherwise false
 */
function isStream(val) {
  return isObject(val) && isFunction(val.pipe);
}

/**
 * Determine if a value is a URLSearchParams object
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a URLSearchParams object, otherwise false
 */
function isURLSearchParams(val) {
  return typeof URLSearchParams !== 'undefined' && val instanceof URLSearchParams;
}

/**
 * Trim excess whitespace off the beginning and end of a string
 *
 * @param {String} str The String to trim
 * @returns {String} The String freed of excess whitespace
 */
function trim(str) {
  return str.replace(/^\s*/, '').replace(/\s*$/, '');
}

/**
 * Determine if we're running in a standard browser environment
 *
 * This allows axios to run in a web worker, and react-native.
 * Both environments support XMLHttpRequest, but not fully standard globals.
 *
 * web workers:
 *  typeof window -> undefined
 *  typeof document -> undefined
 *
 * react-native:
 *  navigator.product -> 'ReactNative'
 * nativescript
 *  navigator.product -> 'NativeScript' or 'NS'
 */
function isStandardBrowserEnv() {
  if (typeof navigator !== 'undefined' && (navigator.product === 'ReactNative' ||
                                           navigator.product === 'NativeScript' ||
                                           navigator.product === 'NS')) {
    return false;
  }
  return (
    typeof window !== 'undefined' &&
    typeof document !== 'undefined'
  );
}

/**
 * Iterate over an Array or an Object invoking a function for each item.
 *
 * If `obj` is an Array callback will be called passing
 * the value, index, and complete array for each item.
 *
 * If 'obj' is an Object callback will be called passing
 * the value, key, and complete object for each property.
 *
 * @param {Object|Array} obj The object to iterate
 * @param {Function} fn The callback to invoke for each item
 */
function forEach(obj, fn) {
  // Don't bother if no value provided
  if (obj === null || typeof obj === 'undefined') {
    return;
  }

  // Force an array if not already something iterable
  if (typeof obj !== 'object') {
    /*eslint no-param-reassign:0*/
    obj = [obj];
  }

  if (isArray(obj)) {
    // Iterate over array values
    for (var i = 0, l = obj.length; i < l; i++) {
      fn.call(null, obj[i], i, obj);
    }
  } else {
    // Iterate over object keys
    for (var key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        fn.call(null, obj[key], key, obj);
      }
    }
  }
}

/**
 * Accepts varargs expecting each argument to be an object, then
 * immutably merges the properties of each object and returns result.
 *
 * When multiple objects contain the same key the later object in
 * the arguments list will take precedence.
 *
 * Example:
 *
 * ```js
 * var result = merge({foo: 123}, {foo: 456});
 * console.log(result.foo); // outputs 456
 * ```
 *
 * @param {Object} obj1 Object to merge
 * @returns {Object} Result of all merge properties
 */
function merge(/* obj1, obj2, obj3, ... */) {
  var result = {};
  function assignValue(val, key) {
    if (typeof result[key] === 'object' && typeof val === 'object') {
      result[key] = merge(result[key], val);
    } else {
      result[key] = val;
    }
  }

  for (var i = 0, l = arguments.length; i < l; i++) {
    forEach(arguments[i], assignValue);
  }
  return result;
}

/**
 * Function equal to merge with the difference being that no reference
 * to original objects is kept.
 *
 * @see merge
 * @param {Object} obj1 Object to merge
 * @returns {Object} Result of all merge properties
 */
function deepMerge(/* obj1, obj2, obj3, ... */) {
  var result = {};
  function assignValue(val, key) {
    if (typeof result[key] === 'object' && typeof val === 'object') {
      result[key] = deepMerge(result[key], val);
    } else if (typeof val === 'object') {
      result[key] = deepMerge({}, val);
    } else {
      result[key] = val;
    }
  }

  for (var i = 0, l = arguments.length; i < l; i++) {
    forEach(arguments[i], assignValue);
  }
  return result;
}

/**
 * Extends object a by mutably adding to it the properties of object b.
 *
 * @param {Object} a The object to be extended
 * @param {Object} b The object to copy properties from
 * @param {Object} thisArg The object to bind function to
 * @return {Object} The resulting value of object a
 */
function extend(a, b, thisArg) {
  forEach(b, function assignValue(val, key) {
    if (thisArg && typeof val === 'function') {
      a[key] = bind(val, thisArg);
    } else {
      a[key] = val;
    }
  });
  return a;
}

module.exports = {
  isArray: isArray,
  isArrayBuffer: isArrayBuffer,
  isBuffer: isBuffer,
  isFormData: isFormData,
  isArrayBufferView: isArrayBufferView,
  isString: isString,
  isNumber: isNumber,
  isObject: isObject,
  isUndefined: isUndefined,
  isDate: isDate,
  isFile: isFile,
  isBlob: isBlob,
  isFunction: isFunction,
  isStream: isStream,
  isURLSearchParams: isURLSearchParams,
  isStandardBrowserEnv: isStandardBrowserEnv,
  forEach: forEach,
  merge: merge,
  deepMerge: deepMerge,
  extend: extend,
  trim: trim
};


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0);

function encode(val) {
  return encodeURIComponent(val).
    replace(/%40/gi, '@').
    replace(/%3A/gi, ':').
    replace(/%24/g, '$').
    replace(/%2C/gi, ',').
    replace(/%20/g, '+').
    replace(/%5B/gi, '[').
    replace(/%5D/gi, ']');
}

/**
 * Build a URL by appending params to the end
 *
 * @param {string} url The base of the url (e.g., http://www.google.com)
 * @param {object} [params] The params to be appended
 * @returns {string} The formatted url
 */
module.exports = function buildURL(url, params, paramsSerializer) {
  /*eslint no-param-reassign:0*/
  if (!params) {
    return url;
  }

  var serializedParams;
  if (paramsSerializer) {
    serializedParams = paramsSerializer(params);
  } else if (utils.isURLSearchParams(params)) {
    serializedParams = params.toString();
  } else {
    var parts = [];

    utils.forEach(params, function serialize(val, key) {
      if (val === null || typeof val === 'undefined') {
        return;
      }

      if (utils.isArray(val)) {
        key = key + '[]';
      } else {
        val = [val];
      }

      utils.forEach(val, function parseValue(v) {
        if (utils.isDate(v)) {
          v = v.toISOString();
        } else if (utils.isObject(v)) {
          v = JSON.stringify(v);
        }
        parts.push(encode(key) + '=' + encode(v));
      });
    });

    serializedParams = parts.join('&');
  }

  if (serializedParams) {
    var hashmarkIndex = url.indexOf('#');
    if (hashmarkIndex !== -1) {
      url = url.slice(0, hashmarkIndex);
    }

    url += (url.indexOf('?') === -1 ? '?' : '&') + serializedParams;
  }

  return url;
};


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var enhanceError = __webpack_require__(7);

/**
 * Create an Error with the specified message, config, error code, request and response.
 *
 * @param {string} message The error message.
 * @param {Object} config The config.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 * @param {Object} [request] The request.
 * @param {Object} [response] The response.
 * @returns {Error} The created error.
 */
module.exports = function createError(message, config, code, request, response) {
  var error = new Error(message);
  return enhanceError(error, config, code, request, response);
};


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function bind(fn, thisArg) {
  return function wrap() {
    var args = new Array(arguments.length);
    for (var i = 0; i < args.length; i++) {
      args[i] = arguments[i];
    }
    return fn.apply(thisArg, args);
  };
};


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function isCancel(value) {
  return !!(value && value.__CANCEL__);
};


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0);
var normalizeHeaderName = __webpack_require__(25);

var DEFAULT_CONTENT_TYPE = {
  'Content-Type': 'application/x-www-form-urlencoded'
};

function setContentTypeIfUnset(headers, value) {
  if (!utils.isUndefined(headers) && utils.isUndefined(headers['Content-Type'])) {
    headers['Content-Type'] = value;
  }
}

function getDefaultAdapter() {
  var adapter;
  if (typeof XMLHttpRequest !== 'undefined') {
    // For browsers use XHR adapter
    adapter = __webpack_require__(26);
  } else if (typeof process !== 'undefined' && Object.prototype.toString.call(process) === '[object process]') {
    // For node use HTTP adapter
    adapter = __webpack_require__(32);
  }
  return adapter;
}

var defaults = {
  adapter: getDefaultAdapter(),

  transformRequest: [function transformRequest(data, headers) {
    normalizeHeaderName(headers, 'Accept');
    normalizeHeaderName(headers, 'Content-Type');
    if (utils.isFormData(data) ||
      utils.isArrayBuffer(data) ||
      utils.isBuffer(data) ||
      utils.isStream(data) ||
      utils.isFile(data) ||
      utils.isBlob(data)
    ) {
      return data;
    }
    if (utils.isArrayBufferView(data)) {
      return data.buffer;
    }
    if (utils.isURLSearchParams(data)) {
      setContentTypeIfUnset(headers, 'application/x-www-form-urlencoded;charset=utf-8');
      return data.toString();
    }
    if (utils.isObject(data)) {
      setContentTypeIfUnset(headers, 'application/json;charset=utf-8');
      return JSON.stringify(data);
    }
    return data;
  }],

  transformResponse: [function transformResponse(data) {
    /*eslint no-param-reassign:0*/
    if (typeof data === 'string') {
      try {
        data = JSON.parse(data);
      } catch (e) { /* Ignore */ }
    }
    return data;
  }],

  /**
   * A timeout in milliseconds to abort a request. If set to 0 (default) a
   * timeout is not created.
   */
  timeout: 0,

  xsrfCookieName: 'XSRF-TOKEN',
  xsrfHeaderName: 'X-XSRF-TOKEN',

  maxContentLength: -1,

  validateStatus: function validateStatus(status) {
    return status >= 200 && status < 300;
  }
};

defaults.headers = {
  common: {
    'Accept': 'application/json, text/plain, */*'
  }
};

utils.forEach(['delete', 'get', 'head'], function forEachMethodNoData(method) {
  defaults.headers[method] = {};
});

utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
  defaults.headers[method] = utils.merge(DEFAULT_CONTENT_TYPE);
});

module.exports = defaults;


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var createError = __webpack_require__(2);

/**
 * Resolve or reject a Promise based on response status.
 *
 * @param {Function} resolve A function that resolves the promise.
 * @param {Function} reject A function that rejects the promise.
 * @param {object} response The response.
 */
module.exports = function settle(resolve, reject, response) {
  var validateStatus = response.config.validateStatus;
  if (!validateStatus || validateStatus(response.status)) {
    resolve(response);
  } else {
    reject(createError(
      'Request failed with status code ' + response.status,
      response.config,
      null,
      response.request,
      response
    ));
  }
};


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Update an Error with the specified config, error code, and response.
 *
 * @param {Error} error The error to update.
 * @param {Object} config The config.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 * @param {Object} [request] The request.
 * @param {Object} [response] The response.
 * @returns {Error} The error.
 */
module.exports = function enhanceError(error, config, code, request, response) {
  error.config = config;
  if (code) {
    error.code = code;
  }

  error.request = request;
  error.response = response;
  error.isAxiosError = true;

  error.toJSON = function() {
    return {
      // Standard
      message: this.message,
      name: this.name,
      // Microsoft
      description: this.description,
      number: this.number,
      // Mozilla
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      // Axios
      config: this.config,
      code: this.code
    };
  };
  return error;
};


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isAbsoluteURL = __webpack_require__(27);
var combineURLs = __webpack_require__(28);

/**
 * Creates a new URL by combining the baseURL with the requestedURL,
 * only when the requestedURL is not already an absolute URL.
 * If the requestURL is absolute, this function returns the requestedURL untouched.
 *
 * @param {string} baseURL The base URL
 * @param {string} requestedURL Absolute or relative URL to combine
 * @returns {string} The combined full path
 */
module.exports = function buildFullPath(baseURL, requestedURL) {
  if (baseURL && !isAbsoluteURL(requestedURL)) {
    return combineURLs(baseURL, requestedURL);
  }
  return requestedURL;
};


/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("http");

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = require("https");

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

var url = __webpack_require__(12);
var http = __webpack_require__(9);
var https = __webpack_require__(10);
var assert = __webpack_require__(33);
var Writable = __webpack_require__(34).Writable;
var debug = __webpack_require__(35)("follow-redirects");

// RFC7231§4.2.1: Of the request methods defined by this specification,
// the GET, HEAD, OPTIONS, and TRACE methods are defined to be safe.
var SAFE_METHODS = { GET: true, HEAD: true, OPTIONS: true, TRACE: true };

// Create handlers that pass events from native requests
var eventHandlers = Object.create(null);
["abort", "aborted", "error", "socket", "timeout"].forEach(function (event) {
  eventHandlers[event] = function (arg) {
    this._redirectable.emit(event, arg);
  };
});

// An HTTP(S) request that can be redirected
function RedirectableRequest(options, responseCallback) {
  // Initialize the request
  Writable.call(this);
  options.headers = options.headers || {};
  this._options = options;
  this._redirectCount = 0;
  this._redirects = [];
  this._requestBodyLength = 0;
  this._requestBodyBuffers = [];

  // Since http.request treats host as an alias of hostname,
  // but the url module interprets host as hostname plus port,
  // eliminate the host property to avoid confusion.
  if (options.host) {
    // Use hostname if set, because it has precedence
    if (!options.hostname) {
      options.hostname = options.host;
    }
    delete options.host;
  }

  // Attach a callback if passed
  if (responseCallback) {
    this.on("response", responseCallback);
  }

  // React to responses of native requests
  var self = this;
  this._onNativeResponse = function (response) {
    self._processResponse(response);
  };

  // Complete the URL object when necessary
  if (!options.pathname && options.path) {
    var searchPos = options.path.indexOf("?");
    if (searchPos < 0) {
      options.pathname = options.path;
    }
    else {
      options.pathname = options.path.substring(0, searchPos);
      options.search = options.path.substring(searchPos);
    }
  }

  // Perform the first request
  this._performRequest();
}
RedirectableRequest.prototype = Object.create(Writable.prototype);

// Writes buffered data to the current native request
RedirectableRequest.prototype.write = function (data, encoding, callback) {
  // Validate input and shift parameters if necessary
  if (!(typeof data === "string" || typeof data === "object" && ("length" in data))) {
    throw new Error("data should be a string, Buffer or Uint8Array");
  }
  if (typeof encoding === "function") {
    callback = encoding;
    encoding = null;
  }

  // Ignore empty buffers, since writing them doesn't invoke the callback
  // https://github.com/nodejs/node/issues/22066
  if (data.length === 0) {
    if (callback) {
      callback();
    }
    return;
  }
  // Only write when we don't exceed the maximum body length
  if (this._requestBodyLength + data.length <= this._options.maxBodyLength) {
    this._requestBodyLength += data.length;
    this._requestBodyBuffers.push({ data: data, encoding: encoding });
    this._currentRequest.write(data, encoding, callback);
  }
  // Error when we exceed the maximum body length
  else {
    this.emit("error", new Error("Request body larger than maxBodyLength limit"));
    this.abort();
  }
};

// Ends the current native request
RedirectableRequest.prototype.end = function (data, encoding, callback) {
  // Shift parameters if necessary
  if (typeof data === "function") {
    callback = data;
    data = encoding = null;
  }
  else if (typeof encoding === "function") {
    callback = encoding;
    encoding = null;
  }

  // Write data and end
  var currentRequest = this._currentRequest;
  this.write(data || "", encoding, function () {
    currentRequest.end(null, null, callback);
  });
};

// Sets a header value on the current native request
RedirectableRequest.prototype.setHeader = function (name, value) {
  this._options.headers[name] = value;
  this._currentRequest.setHeader(name, value);
};

// Clears a header value on the current native request
RedirectableRequest.prototype.removeHeader = function (name) {
  delete this._options.headers[name];
  this._currentRequest.removeHeader(name);
};

// Proxy all other public ClientRequest methods
[
  "abort", "flushHeaders", "getHeader",
  "setNoDelay", "setSocketKeepAlive", "setTimeout",
].forEach(function (method) {
  RedirectableRequest.prototype[method] = function (a, b) {
    return this._currentRequest[method](a, b);
  };
});

// Proxy all public ClientRequest properties
["aborted", "connection", "socket"].forEach(function (property) {
  Object.defineProperty(RedirectableRequest.prototype, property, {
    get: function () { return this._currentRequest[property]; },
  });
});

// Executes the next native request (initial or redirect)
RedirectableRequest.prototype._performRequest = function () {
  // Load the native protocol
  var protocol = this._options.protocol;
  var nativeProtocol = this._options.nativeProtocols[protocol];
  if (!nativeProtocol) {
    this.emit("error", new Error("Unsupported protocol " + protocol));
    return;
  }

  // If specified, use the agent corresponding to the protocol
  // (HTTP and HTTPS use different types of agents)
  if (this._options.agents) {
    var scheme = protocol.substr(0, protocol.length - 1);
    this._options.agent = this._options.agents[scheme];
  }

  // Create the native request
  var request = this._currentRequest =
        nativeProtocol.request(this._options, this._onNativeResponse);
  this._currentUrl = url.format(this._options);

  // Set up event handlers
  request._redirectable = this;
  for (var event in eventHandlers) {
    /* istanbul ignore else */
    if (event) {
      request.on(event, eventHandlers[event]);
    }
  }

  // End a redirected request
  // (The first request must be ended explicitly with RedirectableRequest#end)
  if (this._isRedirect) {
    // Write the request entity and end.
    var i = 0;
    var buffers = this._requestBodyBuffers;
    (function writeNext() {
      if (i < buffers.length) {
        var buffer = buffers[i++];
        request.write(buffer.data, buffer.encoding, writeNext);
      }
      else {
        request.end();
      }
    }());
  }
};

// Processes a response from the current native request
RedirectableRequest.prototype._processResponse = function (response) {
  // Store the redirected response
  if (this._options.trackRedirects) {
    this._redirects.push({
      url: this._currentUrl,
      headers: response.headers,
      statusCode: response.statusCode,
    });
  }

  // RFC7231§6.4: The 3xx (Redirection) class of status code indicates
  // that further action needs to be taken by the user agent in order to
  // fulfill the request. If a Location header field is provided,
  // the user agent MAY automatically redirect its request to the URI
  // referenced by the Location field value,
  // even if the specific status code is not understood.
  var location = response.headers.location;
  if (location && this._options.followRedirects !== false &&
      response.statusCode >= 300 && response.statusCode < 400) {
    // RFC7231§6.4: A client SHOULD detect and intervene
    // in cyclical redirections (i.e., "infinite" redirection loops).
    if (++this._redirectCount > this._options.maxRedirects) {
      this.emit("error", new Error("Max redirects exceeded."));
      return;
    }

    // RFC7231§6.4: Automatic redirection needs to done with
    // care for methods not known to be safe […],
    // since the user might not wish to redirect an unsafe request.
    // RFC7231§6.4.7: The 307 (Temporary Redirect) status code indicates
    // that the target resource resides temporarily under a different URI
    // and the user agent MUST NOT change the request method
    // if it performs an automatic redirection to that URI.
    var header;
    var headers = this._options.headers;
    if (response.statusCode !== 307 && !(this._options.method in SAFE_METHODS)) {
      this._options.method = "GET";
      // Drop a possible entity and headers related to it
      this._requestBodyBuffers = [];
      for (header in headers) {
        if (/^content-/i.test(header)) {
          delete headers[header];
        }
      }
    }

    // Drop the Host header, as the redirect might lead to a different host
    if (!this._isRedirect) {
      for (header in headers) {
        if (/^host$/i.test(header)) {
          delete headers[header];
        }
      }
    }

    // Perform the redirected request
    var redirectUrl = url.resolve(this._currentUrl, location);
    debug("redirecting to", redirectUrl);
    Object.assign(this._options, url.parse(redirectUrl));
    this._isRedirect = true;
    this._performRequest();

    // Discard the remainder of the response to avoid waiting for data
    response.destroy();
  }
  else {
    // The response is not a redirect; return it as-is
    response.responseUrl = this._currentUrl;
    response.redirects = this._redirects;
    this.emit("response", response);

    // Clean up
    this._requestBodyBuffers = [];
  }
};

// Wraps the key/value object of protocols with redirect functionality
function wrap(protocols) {
  // Default settings
  var exports = {
    maxRedirects: 21,
    maxBodyLength: 10 * 1024 * 1024,
  };

  // Wrap each protocol
  var nativeProtocols = {};
  Object.keys(protocols).forEach(function (scheme) {
    var protocol = scheme + ":";
    var nativeProtocol = nativeProtocols[protocol] = protocols[scheme];
    var wrappedProtocol = exports[scheme] = Object.create(nativeProtocol);

    // Executes a request, following redirects
    wrappedProtocol.request = function (options, callback) {
      if (typeof options === "string") {
        options = url.parse(options);
        options.maxRedirects = exports.maxRedirects;
      }
      else {
        options = Object.assign({
          protocol: protocol,
          maxRedirects: exports.maxRedirects,
          maxBodyLength: exports.maxBodyLength,
        }, options);
      }
      options.nativeProtocols = nativeProtocols;
      assert.equal(options.protocol, protocol, "protocol mismatch");
      debug("options", options);
      return new RedirectableRequest(options, callback);
    };

    // Executes a GET request, following redirects
    wrappedProtocol.get = function (options, callback) {
      var request = wrappedProtocol.request(options, callback);
      request.end();
      return request;
    };
  });
  return exports;
}

// Exports
module.exports = wrap({ http: http, https: https });
module.exports.wrap = wrap;


/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = require("url");

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {


/**
 * This is the common logic for both the Node.js and web browser
 * implementations of `debug()`.
 *
 * Expose `debug()` as the module.
 */

exports = module.exports = createDebug.debug = createDebug['default'] = createDebug;
exports.coerce = coerce;
exports.disable = disable;
exports.enable = enable;
exports.enabled = enabled;
exports.humanize = __webpack_require__(37);

/**
 * Active `debug` instances.
 */
exports.instances = [];

/**
 * The currently active debug mode names, and names to skip.
 */

exports.names = [];
exports.skips = [];

/**
 * Map of special "%n" handling functions, for the debug "format" argument.
 *
 * Valid key names are a single, lower or upper-case letter, i.e. "n" and "N".
 */

exports.formatters = {};

/**
 * Select a color.
 * @param {String} namespace
 * @return {Number}
 * @api private
 */

function selectColor(namespace) {
  var hash = 0, i;

  for (i in namespace) {
    hash  = ((hash << 5) - hash) + namespace.charCodeAt(i);
    hash |= 0; // Convert to 32bit integer
  }

  return exports.colors[Math.abs(hash) % exports.colors.length];
}

/**
 * Create a debugger with the given `namespace`.
 *
 * @param {String} namespace
 * @return {Function}
 * @api public
 */

function createDebug(namespace) {

  var prevTime;

  function debug() {
    // disabled?
    if (!debug.enabled) return;

    var self = debug;

    // set `diff` timestamp
    var curr = +new Date();
    var ms = curr - (prevTime || curr);
    self.diff = ms;
    self.prev = prevTime;
    self.curr = curr;
    prevTime = curr;

    // turn the `arguments` into a proper Array
    var args = new Array(arguments.length);
    for (var i = 0; i < args.length; i++) {
      args[i] = arguments[i];
    }

    args[0] = exports.coerce(args[0]);

    if ('string' !== typeof args[0]) {
      // anything else let's inspect with %O
      args.unshift('%O');
    }

    // apply any `formatters` transformations
    var index = 0;
    args[0] = args[0].replace(/%([a-zA-Z%])/g, function(match, format) {
      // if we encounter an escaped % then don't increase the array index
      if (match === '%%') return match;
      index++;
      var formatter = exports.formatters[format];
      if ('function' === typeof formatter) {
        var val = args[index];
        match = formatter.call(self, val);

        // now we need to remove `args[index]` since it's inlined in the `format`
        args.splice(index, 1);
        index--;
      }
      return match;
    });

    // apply env-specific formatting (colors, etc.)
    exports.formatArgs.call(self, args);

    var logFn = debug.log || exports.log || console.log.bind(console);
    logFn.apply(self, args);
  }

  debug.namespace = namespace;
  debug.enabled = exports.enabled(namespace);
  debug.useColors = exports.useColors();
  debug.color = selectColor(namespace);
  debug.destroy = destroy;

  // env-specific initialization logic for debug instances
  if ('function' === typeof exports.init) {
    exports.init(debug);
  }

  exports.instances.push(debug);

  return debug;
}

function destroy () {
  var index = exports.instances.indexOf(this);
  if (index !== -1) {
    exports.instances.splice(index, 1);
    return true;
  } else {
    return false;
  }
}

/**
 * Enables a debug mode by namespaces. This can include modes
 * separated by a colon and wildcards.
 *
 * @param {String} namespaces
 * @api public
 */

function enable(namespaces) {
  exports.save(namespaces);

  exports.names = [];
  exports.skips = [];

  var i;
  var split = (typeof namespaces === 'string' ? namespaces : '').split(/[\s,]+/);
  var len = split.length;

  for (i = 0; i < len; i++) {
    if (!split[i]) continue; // ignore empty strings
    namespaces = split[i].replace(/\*/g, '.*?');
    if (namespaces[0] === '-') {
      exports.skips.push(new RegExp('^' + namespaces.substr(1) + '$'));
    } else {
      exports.names.push(new RegExp('^' + namespaces + '$'));
    }
  }

  for (i = 0; i < exports.instances.length; i++) {
    var instance = exports.instances[i];
    instance.enabled = exports.enabled(instance.namespace);
  }
}

/**
 * Disable debug output.
 *
 * @api public
 */

function disable() {
  exports.enable('');
}

/**
 * Returns true if the given mode name is enabled, false otherwise.
 *
 * @param {String} name
 * @return {Boolean}
 * @api public
 */

function enabled(name) {
  if (name[name.length - 1] === '*') {
    return true;
  }
  var i, len;
  for (i = 0, len = exports.skips.length; i < len; i++) {
    if (exports.skips[i].test(name)) {
      return false;
    }
  }
  for (i = 0, len = exports.names.length; i < len; i++) {
    if (exports.names[i].test(name)) {
      return true;
    }
  }
  return false;
}

/**
 * Coerce `val`.
 *
 * @param {Mixed} val
 * @return {Mixed}
 * @api private
 */

function coerce(val) {
  if (val instanceof Error) return val.stack || val.message;
  return val;
}


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0);

/**
 * Config-specific merge-function which creates a new config-object
 * by merging two configuration objects together.
 *
 * @param {Object} config1
 * @param {Object} config2
 * @returns {Object} New object resulting from merging config2 to config1
 */
module.exports = function mergeConfig(config1, config2) {
  // eslint-disable-next-line no-param-reassign
  config2 = config2 || {};
  var config = {};

  var valueFromConfig2Keys = ['url', 'method', 'params', 'data'];
  var mergeDeepPropertiesKeys = ['headers', 'auth', 'proxy'];
  var defaultToConfig2Keys = [
    'baseURL', 'url', 'transformRequest', 'transformResponse', 'paramsSerializer',
    'timeout', 'withCredentials', 'adapter', 'responseType', 'xsrfCookieName',
    'xsrfHeaderName', 'onUploadProgress', 'onDownloadProgress',
    'maxContentLength', 'validateStatus', 'maxRedirects', 'httpAgent',
    'httpsAgent', 'cancelToken', 'socketPath'
  ];

  utils.forEach(valueFromConfig2Keys, function valueFromConfig2(prop) {
    if (typeof config2[prop] !== 'undefined') {
      config[prop] = config2[prop];
    }
  });

  utils.forEach(mergeDeepPropertiesKeys, function mergeDeepProperties(prop) {
    if (utils.isObject(config2[prop])) {
      config[prop] = utils.deepMerge(config1[prop], config2[prop]);
    } else if (typeof config2[prop] !== 'undefined') {
      config[prop] = config2[prop];
    } else if (utils.isObject(config1[prop])) {
      config[prop] = utils.deepMerge(config1[prop]);
    } else if (typeof config1[prop] !== 'undefined') {
      config[prop] = config1[prop];
    }
  });

  utils.forEach(defaultToConfig2Keys, function defaultToConfig2(prop) {
    if (typeof config2[prop] !== 'undefined') {
      config[prop] = config2[prop];
    } else if (typeof config1[prop] !== 'undefined') {
      config[prop] = config1[prop];
    }
  });

  var axiosKeys = valueFromConfig2Keys
    .concat(mergeDeepPropertiesKeys)
    .concat(defaultToConfig2Keys);

  var otherKeys = Object
    .keys(config2)
    .filter(function filterAxiosKeys(key) {
      return axiosKeys.indexOf(key) === -1;
    });

  utils.forEach(otherKeys, function otherKeysDefaultToConfig2(prop) {
    if (typeof config2[prop] !== 'undefined') {
      config[prop] = config2[prop];
    } else if (typeof config1[prop] !== 'undefined') {
      config[prop] = config1[prop];
    }
  });

  return config;
};


/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * A `Cancel` is an object that is thrown when an operation is canceled.
 *
 * @class
 * @param {string=} message The message.
 */
function Cancel(message) {
  this.message = message;
}

Cancel.prototype.toString = function toString() {
  return 'Cancel' + (this.message ? ': ' + this.message : '');
};

Cancel.prototype.__CANCEL__ = true;

module.exports = Cancel;


/***/ }),
/* 16 */
/***/ (function(module, exports) {

module.exports = require("fs");

/***/ }),
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TheMostCommon3000", function() { return TheMostCommon3000; });
// https://www.ef.com/wwen/english-resources/english-vocabulary/top-3000-words/
const TheMostCommon3000 = {
  a: 1,
  abandon: 1,
  ability: 1,
  able: 1,
  abortion: 1,
  about: 1,
  above: 1,
  abroad: 1,
  absence: 1,
  absolute: 1,
  absolutely: 1,
  absorb: 1,
  abuse: 1,
  academic: 1,
  accept: 1,
  access: 1,
  accident: 1,
  accompany: 1,
  accomplish: 1,
  according: 1,
  account: 1,
  accurate: 1,
  accuse: 1,
  achieve: 1,
  achievement: 1,
  acid: 1,
  acknowledge: 1,
  acquire: 1,
  across: 1,
  act: 1,
  action: 1,
  active: 1,
  activist: 1,
  activity: 1,
  actor: 1,
  actress: 1,
  actual: 1,
  actually: 1,
  ad: 1,
  adapt: 1,
  add: 1,
  addition: 1,
  additional: 1,
  address: 1,
  adequate: 1,
  adjust: 1,
  adjustment: 1,
  administration: 1,
  administrator: 1,
  admire: 1,
  admission: 1,
  admit: 1,
  adolescent: 1,
  adopt: 1,
  adult: 1,
  advance: 1,
  advanced: 1,
  advantage: 1,
  adventure: 1,
  advertising: 1,
  advice: 1,
  advise: 1,
  adviser: 1,
  advocate: 1,
  affair: 1,
  affect: 1,
  afford: 1,
  afraid: 1,
  African: 1,
  "African-American": 1,
  after: 1,
  afternoon: 1,
  again: 1,
  against: 1,
  age: 1,
  agency: 1,
  agenda: 1,
  agent: 1,
  aggressive: 1,
  ago: 1,
  agree: 1,
  agreement: 1,
  agricultural: 1,
  ah: 1,
  ahead: 1,
  aid: 1,
  aide: 1,
  AIDS: 1,
  aim: 1,
  air: 1,
  aircraft: 1,
  airline: 1,
  airport: 1,
  album: 1,
  alcohol: 1,
  alive: 1,
  all: 1,
  alliance: 1,
  allow: 1,
  ally: 1,
  almost: 1,
  alone: 1,
  along: 1,
  already: 1,
  also: 1,
  alter: 1,
  alternative: 1,
  although: 1,
  always: 1,
  AM: 1,
  amazing: 1,
  American: 1,
  among: 1,
  amount: 1,
  analysis: 1,
  analyst: 1,
  analyze: 1,
  ancient: 1,
  and: 1,
  anger: 1,
  angle: 1,
  angry: 1,
  animal: 1,
  anniversary: 1,
  announce: 1,
  annual: 1,
  another: 1,
  answer: 1,
  anticipate: 1,
  anxiety: 1,
  any: 1,
  anybody: 1,
  anymore: 1,
  anyone: 1,
  anything: 1,
  anyway: 1,
  anywhere: 1,
  apart: 1,
  apartment: 1,
  apparent: 1,
  apparently: 1,
  appeal: 1,
  appear: 1,
  appearance: 1,
  apple: 1,
  application: 1,
  apply: 1,
  appoint: 1,
  appointment: 1,
  appreciate: 1,
  approach: 1,
  appropriate: 1,
  approval: 1,
  approve: 1,
  approximately: 1,
  Arab: 1,
  architect: 1,
  area: 1,
  argue: 1,
  argument: 1,
  arise: 1,
  arm: 1,
  armed: 1,
  army: 1,
  around: 1,
  arrange: 1,
  arrangement: 1,
  arrest: 1,
  arrival: 1,
  arrive: 1,
  art: 1,
  article: 1,
  artist: 1,
  artistic: 1,
  as: 1,
  Asian: 1,
  aside: 1,
  ask: 1,
  asleep: 1,
  aspect: 1,
  assault: 1,
  assert: 1,
  assess: 1,
  assessment: 1,
  asset: 1,
  assign: 1,
  assignment: 1,
  assist: 1,
  assistance: 1,
  assistant: 1,
  associate: 1,
  association: 1,
  assume: 1,
  assumption: 1,
  assure: 1,
  at: 1,
  athlete: 1,
  athletic: 1,
  atmosphere: 1,
  attach: 1,
  attack: 1,
  attempt: 1,
  attend: 1,
  attention: 1,
  attitude: 1,
  attorney: 1,
  attract: 1,
  attractive: 1,
  attribute: 1,
  audience: 1,
  author: 1,
  authority: 1,
  auto: 1,
  available: 1,
  average: 1,
  avoid: 1,
  award: 1,
  aware: 1,
  awareness: 1,
  away: 1,
  awful: 1,
  baby: 1,
  back: 1,
  background: 1,
  bad: 1,
  badly: 1,
  bag: 1,
  bake: 1,
  balance: 1,
  ball: 1,
  ban: 1,
  band: 1,
  bank: 1,
  bar: 1,
  barely: 1,
  barrel: 1,
  barrier: 1,
  base: 1,
  baseball: 1,
  basic: 1,
  basically: 1,
  basis: 1,
  basket: 1,
  basketball: 1,
  bathroom: 1,
  battery: 1,
  battle: 1,
  be: 1,
  beach: 1,
  bean: 1,
  bear: 1,
  beat: 1,
  beautiful: 1,
  beauty: 1,
  because: 1,
  become: 1,
  bed: 1,
  bedroom: 1,
  beer: 1,
  before: 1,
  begin: 1,
  beginning: 1,
  behavior: 1,
  behind: 1,
  being: 1,
  belief: 1,
  believe: 1,
  bell: 1,
  belong: 1,
  below: 1,
  belt: 1,
  bench: 1,
  bend: 1,
  beneath: 1,
  benefit: 1,
  beside: 1,
  besides: 1,
  best: 1,
  bet: 1,
  better: 1,
  between: 1,
  beyond: 1,
  Bible: 1,
  big: 1,
  bike: 1,
  bill: 1,
  billion: 1,
  bind: 1,
  biological: 1,
  bird: 1,
  birth: 1,
  birthday: 1,
  bit: 1,
  bite: 1,
  black: 1,
  blade: 1,
  blame: 1,
  blanket: 1,
  blind: 1,
  block: 1,
  blood: 1,
  blow: 1,
  blue: 1,
  board: 1,
  boat: 1,
  body: 1,
  bomb: 1,
  bombing: 1,
  bond: 1,
  bone: 1,
  book: 1,
  boom: 1,
  boot: 1,
  border: 1,
  born: 1,
  borrow: 1,
  boss: 1,
  both: 1,
  bother: 1,
  bottle: 1,
  bottom: 1,
  boundary: 1,
  bowl: 1,
  box: 1,
  boy: 1,
  boyfriend: 1,
  brain: 1,
  branch: 1,
  brand: 1,
  bread: 1,
  break: 1,
  breakfast: 1,
  breast: 1,
  breath: 1,
  breathe: 1,
  brick: 1,
  bridge: 1,
  brief: 1,
  briefly: 1,
  bright: 1,
  brilliant: 1,
  bring: 1,
  British: 1,
  broad: 1,
  broken: 1,
  brother: 1,
  brown: 1,
  brush: 1,
  buck: 1,
  budget: 1,
  build: 1,
  building: 1,
  bullet: 1,
  bunch: 1,
  burden: 1,
  burn: 1,
  bury: 1,
  bus: 1,
  business: 1,
  busy: 1,
  but: 1,
  butter: 1,
  button: 1,
  buy: 1,
  buyer: 1,
  by: 1,
  cabin: 1,
  cabinet: 1,
  cable: 1,
  cake: 1,
  calculate: 1,
  call: 1,
  camera: 1,
  camp: 1,
  campaign: 1,
  campus: 1,
  can: 1,
  Canadian: 1,
  cancer: 1,
  candidate: 1,
  cap: 1,
  capability: 1,
  capable: 1,
  capacity: 1,
  capital: 1,
  captain: 1,
  capture: 1,
  car: 1,
  carbon: 1,
  card: 1,
  care: 1,
  career: 1,
  careful: 1,
  carefully: 1,
  carrier: 1,
  carry: 1,
  case: 1,
  cash: 1,
  cast: 1,
  cat: 1,
  catch: 1,
  category: 1,
  Catholic: 1,
  cause: 1,
  ceiling: 1,
  celebrate: 1,
  celebration: 1,
  celebrity: 1,
  cell: 1,
  center: 1,
  central: 1,
  century: 1,
  CEO: 1,
  ceremony: 1,
  certain: 1,
  certainly: 1,
  chain: 1,
  chair: 1,
  chairman: 1,
  challenge: 1,
  chamber: 1,
  champion: 1,
  championship: 1,
  chance: 1,
  change: 1,
  changing: 1,
  channel: 1,
  chapter: 1,
  character: 1,
  characteristic: 1,
  characterize: 1,
  charge: 1,
  charity: 1,
  chart: 1,
  chase: 1,
  cheap: 1,
  check: 1,
  cheek: 1,
  cheese: 1,
  chef: 1,
  chemical: 1,
  chest: 1,
  chicken: 1,
  chief: 1,
  child: 1,
  childhood: 1,
  Chinese: 1,
  chip: 1,
  chocolate: 1,
  choice: 1,
  cholesterol: 1,
  choose: 1,
  Christian: 1,
  Christmas: 1,
  church: 1,
  cigarette: 1,
  circle: 1,
  circumstance: 1,
  cite: 1,
  citizen: 1,
  city: 1,
  civil: 1,
  civilian: 1,
  claim: 1,
  class: 1,
  classic: 1,
  classroom: 1,
  clean: 1,
  clear: 1,
  clearly: 1,
  client: 1,
  climate: 1,
  climb: 1,
  clinic: 1,
  clinical: 1,
  clock: 1,
  close: 1,
  closely: 1,
  closer: 1,
  clothes: 1,
  clothing: 1,
  cloud: 1,
  club: 1,
  clue: 1,
  cluster: 1,
  coach: 1,
  coal: 1,
  coalition: 1,
  coast: 1,
  coat: 1,
  code: 1,
  coffee: 1,
  cognitive: 1,
  cold: 1,
  collapse: 1,
  colleague: 1,
  collect: 1,
  collection: 1,
  collective: 1,
  college: 1,
  colonial: 1,
  color: 1,
  column: 1,
  combination: 1,
  combine: 1,
  come: 1,
  comedy: 1,
  comfort: 1,
  comfortable: 1,
  command: 1,
  commander: 1,
  comment: 1,
  commercial: 1,
  commission: 1,
  commit: 1,
  commitment: 1,
  committee: 1,
  common: 1,
  communicate: 1,
  communication: 1,
  community: 1,
  company: 1,
  compare: 1,
  comparison: 1,
  compete: 1,
  competition: 1,
  competitive: 1,
  competitor: 1,
  complain: 1,
  complaint: 1,
  complete: 1,
  completely: 1,
  complex: 1,
  complicated: 1,
  component: 1,
  compose: 1,
  composition: 1,
  comprehensive: 1,
  computer: 1,
  concentrate: 1,
  concentration: 1,
  concept: 1,
  concern: 1,
  concerned: 1,
  concert: 1,
  conclude: 1,
  conclusion: 1,
  concrete: 1,
  condition: 1,
  conduct: 1,
  conference: 1,
  confidence: 1,
  confident: 1,
  confirm: 1,
  conflict: 1,
  confront: 1,
  confusion: 1,
  Congress: 1,
  congressional: 1,
  connect: 1,
  connection: 1,
  consciousness: 1,
  consensus: 1,
  consequence: 1,
  conservative: 1,
  consider: 1,
  considerable: 1,
  consideration: 1,
  consist: 1,
  consistent: 1,
  constant: 1,
  constantly: 1,
  constitute: 1,
  constitutional: 1,
  construct: 1,
  construction: 1,
  consultant: 1,
  consume: 1,
  consumer: 1,
  consumption: 1,
  contact: 1,
  contain: 1,
  container: 1,
  contemporary: 1,
  content: 1,
  contest: 1,
  context: 1,
  continue: 1,
  continued: 1,
  contract: 1,
  contrast: 1,
  contribute: 1,
  contribution: 1,
  control: 1,
  controversial: 1,
  controversy: 1,
  convention: 1,
  conventional: 1,
  conversation: 1,
  convert: 1,
  conviction: 1,
  convince: 1,
  cook: 1,
  cookie: 1,
  cooking: 1,
  cool: 1,
  cooperation: 1,
  cop: 1,
  cope: 1,
  copy: 1,
  core: 1,
  corn: 1,
  corner: 1,
  corporate: 1,
  corporation: 1,
  correct: 1,
  correspondent: 1,
  cost: 1,
  cotton: 1,
  couch: 1,
  could: 1,
  council: 1,
  counselor: 1,
  count: 1,
  counter: 1,
  country: 1,
  county: 1,
  couple: 1,
  courage: 1,
  course: 1,
  court: 1,
  cousin: 1,
  cover: 1,
  coverage: 1,
  cow: 1,
  crack: 1,
  craft: 1,
  crash: 1,
  crazy: 1,
  cream: 1,
  create: 1,
  creation: 1,
  creative: 1,
  creature: 1,
  credit: 1,
  crew: 1,
  crime: 1,
  criminal: 1,
  crisis: 1,
  criteria: 1,
  critic: 1,
  critical: 1,
  criticism: 1,
  criticize: 1,
  crop: 1,
  cross: 1,
  crowd: 1,
  crucial: 1,
  cry: 1,
  cultural: 1,
  culture: 1,
  cup: 1,
  curious: 1,
  current: 1,
  currently: 1,
  curriculum: 1,
  custom: 1,
  customer: 1,
  cut: 1,
  cycle: 1,
  dad: 1,
  daily: 1,
  damage: 1,
  dance: 1,
  danger: 1,
  dangerous: 1,
  dare: 1,
  dark: 1,
  darkness: 1,
  data: 1,
  date: 1,
  daughter: 1,
  day: 1,
  dead: 1,
  deal: 1,
  dealer: 1,
  dear: 1,
  death: 1,
  debate: 1,
  debt: 1,
  decade: 1,
  decide: 1,
  decision: 1,
  deck: 1,
  declare: 1,
  decline: 1,
  decrease: 1,
  deep: 1,
  deeply: 1,
  deer: 1,
  defeat: 1,
  defend: 1,
  defendant: 1,
  defense: 1,
  defensive: 1,
  deficit: 1,
  define: 1,
  definitely: 1,
  definition: 1,
  degree: 1,
  delay: 1,
  deliver: 1,
  delivery: 1,
  demand: 1,
  democracy: 1,
  Democrat: 1,
  democratic: 1,
  demonstrate: 1,
  demonstration: 1,
  deny: 1,
  department: 1,
  depend: 1,
  dependent: 1,
  depending: 1,
  depict: 1,
  depression: 1,
  depth: 1,
  deputy: 1,
  derive: 1,
  describe: 1,
  description: 1,
  desert: 1,
  deserve: 1,
  design: 1,
  designer: 1,
  desire: 1,
  desk: 1,
  desperate: 1,
  despite: 1,
  destroy: 1,
  destruction: 1,
  detail: 1,
  detailed: 1,
  detect: 1,
  determine: 1,
  develop: 1,
  developing: 1,
  development: 1,
  device: 1,
  devote: 1,
  dialogue: 1,
  die: 1,
  diet: 1,
  differ: 1,
  difference: 1,
  different: 1,
  differently: 1,
  difficult: 1,
  difficulty: 1,
  dig: 1,
  digital: 1,
  dimension: 1,
  dining: 1,
  dinner: 1,
  direct: 1,
  direction: 1,
  directly: 1,
  director: 1,
  dirt: 1,
  dirty: 1,
  disability: 1,
  disagree: 1,
  disappear: 1,
  disaster: 1,
  discipline: 1,
  discourse: 1,
  discover: 1,
  discovery: 1,
  discrimination: 1,
  discuss: 1,
  discussion: 1,
  disease: 1,
  dish: 1,
  dismiss: 1,
  disorder: 1,
  display: 1,
  dispute: 1,
  distance: 1,
  distant: 1,
  distinct: 1,
  distinction: 1,
  distinguish: 1,
  distribute: 1,
  distribution: 1,
  district: 1,
  diverse: 1,
  diversity: 1,
  divide: 1,
  division: 1,
  divorce: 1,
  DNA: 1,
  do: 1,
  doctor: 1,
  document: 1,
  dog: 1,
  domestic: 1,
  dominant: 1,
  dominate: 1,
  door: 1,
  double: 1,
  doubt: 1,
  down: 1,
  downtown: 1,
  dozen: 1,
  draft: 1,
  drag: 1,
  drama: 1,
  dramatic: 1,
  dramatically: 1,
  draw: 1,
  drawing: 1,
  dream: 1,
  dress: 1,
  drink: 1,
  drive: 1,
  driver: 1,
  drop: 1,
  drug: 1,
  dry: 1,
  due: 1,
  during: 1,
  dust: 1,
  duty: 1,
  each: 1,
  eager: 1,
  ear: 1,
  early: 1,
  earn: 1,
  earnings: 1,
  earth: 1,
  ease: 1,
  easily: 1,
  east: 1,
  eastern: 1,
  easy: 1,
  eat: 1,
  economic: 1,
  economics: 1,
  economist: 1,
  economy: 1,
  edge: 1,
  edition: 1,
  editor: 1,
  educate: 1,
  education: 1,
  educational: 1,
  educator: 1,
  effect: 1,
  effective: 1,
  effectively: 1,
  efficiency: 1,
  efficient: 1,
  effort: 1,
  egg: 1,
  eight: 1,
  either: 1,
  elderly: 1,
  elect: 1,
  election: 1,
  electric: 1,
  electricity: 1,
  electronic: 1,
  element: 1,
  elementary: 1,
  eliminate: 1,
  elite: 1,
  else: 1,
  elsewhere: 1,
  "e-mail": 1,
  embrace: 1,
  emerge: 1,
  emergency: 1,
  emission: 1,
  emotion: 1,
  emotional: 1,
  emphasis: 1,
  emphasize: 1,
  employ: 1,
  employee: 1,
  employer: 1,
  employment: 1,
  empty: 1,
  enable: 1,
  encounter: 1,
  encourage: 1,
  end: 1,
  enemy: 1,
  energy: 1,
  enforcement: 1,
  engage: 1,
  engine: 1,
  engineer: 1,
  engineering: 1,
  English: 1,
  enhance: 1,
  enjoy: 1,
  enormous: 1,
  enough: 1,
  ensure: 1,
  enter: 1,
  enterprise: 1,
  entertainment: 1,
  entire: 1,
  entirely: 1,
  entrance: 1,
  entry: 1,
  environment: 1,
  environmental: 1,
  episode: 1,
  equal: 1,
  equally: 1,
  equipment: 1,
  era: 1,
  error: 1,
  escape: 1,
  especially: 1,
  essay: 1,
  essential: 1,
  essentially: 1,
  establish: 1,
  establishment: 1,
  estate: 1,
  estimate: 1,
  etc: 1,
  ethics: 1,
  ethnic: 1,
  European: 1,
  evaluate: 1,
  evaluation: 1,
  even: 1,
  evening: 1,
  event: 1,
  eventually: 1,
  ever: 1,
  every: 1,
  everybody: 1,
  everyday: 1,
  everyone: 1,
  everything: 1,
  everywhere: 1,
  evidence: 1,
  evolution: 1,
  evolve: 1,
  exact: 1,
  exactly: 1,
  examination: 1,
  examine: 1,
  example: 1,
  exceed: 1,
  excellent: 1,
  except: 1,
  exception: 1,
  exchange: 1,
  exciting: 1,
  executive: 1,
  exercise: 1,
  exhibit: 1,
  exhibition: 1,
  exist: 1,
  existence: 1,
  existing: 1,
  expand: 1,
  expansion: 1,
  expect: 1,
  expectation: 1,
  expense: 1,
  expensive: 1,
  experience: 1,
  experiment: 1,
  expert: 1,
  explain: 1,
  explanation: 1,
  explode: 1,
  explore: 1,
  explosion: 1,
  expose: 1,
  exposure: 1,
  express: 1,
  expression: 1,
  extend: 1,
  extension: 1,
  extensive: 1,
  extent: 1,
  external: 1,
  extra: 1,
  extraordinary: 1,
  extreme: 1,
  extremely: 1,
  eye: 1,
  fabric: 1,
  face: 1,
  facility: 1,
  fact: 1,
  factor: 1,
  factory: 1,
  faculty: 1,
  fade: 1,
  fail: 1,
  failure: 1,
  fair: 1,
  fairly: 1,
  faith: 1,
  fall: 1,
  false: 1,
  familiar: 1,
  family: 1,
  famous: 1,
  fan: 1,
  fantasy: 1,
  far: 1,
  farm: 1,
  farmer: 1,
  fashion: 1,
  fast: 1,
  fat: 1,
  fate: 1,
  father: 1,
  fault: 1,
  favor: 1,
  favorite: 1,
  fear: 1,
  feature: 1,
  federal: 1,
  fee: 1,
  feed: 1,
  feel: 1,
  feeling: 1,
  fellow: 1,
  female: 1,
  fence: 1,
  few: 1,
  fewer: 1,
  fiber: 1,
  fiction: 1,
  field: 1,
  fifteen: 1,
  fifth: 1,
  fifty: 1,
  fight: 1,
  fighter: 1,
  fighting: 1,
  figure: 1,
  file: 1,
  fill: 1,
  film: 1,
  final: 1,
  finally: 1,
  finance: 1,
  financial: 1,
  find: 1,
  finding: 1,
  fine: 1,
  finger: 1,
  finish: 1,
  fire: 1,
  firm: 1,
  first: 1,
  fish: 1,
  fishing: 1,
  fit: 1,
  fitness: 1,
  five: 1,
  fix: 1,
  flag: 1,
  flame: 1,
  flat: 1,
  flavor: 1,
  flee: 1,
  flesh: 1,
  flight: 1,
  float: 1,
  floor: 1,
  flow: 1,
  flower: 1,
  fly: 1,
  focus: 1,
  folk: 1,
  follow: 1,
  following: 1,
  food: 1,
  foot: 1,
  football: 1,
  for: 1,
  force: 1,
  foreign: 1,
  forest: 1,
  forever: 1,
  forget: 1,
  form: 1,
  formal: 1,
  formation: 1,
  former: 1,
  formula: 1,
  forth: 1,
  fortune: 1,
  forward: 1,
  found: 1,
  foundation: 1,
  founder: 1,
  four: 1,
  fourth: 1,
  frame: 1,
  framework: 1,
  free: 1,
  freedom: 1,
  freeze: 1,
  French: 1,
  frequency: 1,
  frequent: 1,
  frequently: 1,
  fresh: 1,
  friend: 1,
  friendly: 1,
  friendship: 1,
  from: 1,
  front: 1,
  fruit: 1,
  frustration: 1,
  fuel: 1,
  full: 1,
  fully: 1,
  fun: 1,
  function: 1,
  fund: 1,
  fundamental: 1,
  funding: 1,
  funeral: 1,
  funny: 1,
  furniture: 1,
  furthermore: 1,
  future: 1,
  gain: 1,
  galaxy: 1,
  gallery: 1,
  game: 1,
  gang: 1,
  gap: 1,
  garage: 1,
  garden: 1,
  garlic: 1,
  gas: 1,
  gate: 1,
  gather: 1,
  gay: 1,
  gaze: 1,
  gear: 1,
  gender: 1,
  gene: 1,
  general: 1,
  generally: 1,
  generate: 1,
  generation: 1,
  genetic: 1,
  gentleman: 1,
  gently: 1,
  German: 1,
  gesture: 1,
  get: 1,
  ghost: 1,
  giant: 1,
  gift: 1,
  gifted: 1,
  girl: 1,
  girlfriend: 1,
  give: 1,
  given: 1,
  glad: 1,
  glance: 1,
  glass: 1,
  global: 1,
  glove: 1,
  go: 1,
  goal: 1,
  God: 1,
  gold: 1,
  golden: 1,
  golf: 1,
  good: 1,
  government: 1,
  governor: 1,
  grab: 1,
  grade: 1,
  gradually: 1,
  graduate: 1,
  grain: 1,
  grand: 1,
  grandfather: 1,
  grandmother: 1,
  grant: 1,
  grass: 1,
  grave: 1,
  gray: 1,
  great: 1,
  greatest: 1,
  green: 1,
  grocery: 1,
  ground: 1,
  group: 1,
  grow: 1,
  growing: 1,
  growth: 1,
  guarantee: 1,
  guard: 1,
  guess: 1,
  guest: 1,
  guide: 1,
  guideline: 1,
  guilty: 1,
  gun: 1,
  guy: 1,
  habit: 1,
  habitat: 1,
  hair: 1,
  half: 1,
  hall: 1,
  hand: 1,
  handful: 1,
  handle: 1,
  hang: 1,
  happen: 1,
  happy: 1,
  hard: 1,
  hardly: 1,
  hat: 1,
  hate: 1,
  have: 1,
  he: 1,
  head: 1,
  headline: 1,
  headquarters: 1,
  health: 1,
  healthy: 1,
  hear: 1,
  hearing: 1,
  heart: 1,
  heat: 1,
  heaven: 1,
  heavily: 1,
  heavy: 1,
  heel: 1,
  height: 1,
  helicopter: 1,
  hell: 1,
  hello: 1,
  help: 1,
  helpful: 1,
  her: 1,
  here: 1,
  heritage: 1,
  hero: 1,
  herself: 1,
  hey: 1,
  hi: 1,
  hide: 1,
  high: 1,
  highlight: 1,
  highly: 1,
  highway: 1,
  hill: 1,
  him: 1,
  himself: 1,
  hip: 1,
  hire: 1,
  his: 1,
  historian: 1,
  historic: 1,
  historical: 1,
  history: 1,
  hit: 1,
  hold: 1,
  hole: 1,
  holiday: 1,
  holy: 1,
  home: 1,
  homeless: 1,
  honest: 1,
  honey: 1,
  honor: 1,
  hope: 1,
  horizon: 1,
  horror: 1,
  horse: 1,
  hospital: 1,
  host: 1,
  hot: 1,
  hotel: 1,
  hour: 1,
  house: 1,
  household: 1,
  housing: 1,
  how: 1,
  however: 1,
  huge: 1,
  human: 1,
  humor: 1,
  hundred: 1,
  hungry: 1,
  hunter: 1,
  hunting: 1,
  hurt: 1,
  husband: 1,
  hypothesis: 1,
  I: 1,
  ice: 1,
  idea: 1,
  ideal: 1,
  identification: 1,
  identify: 1,
  identity: 1,
  ie: 1,
  if: 1,
  ignore: 1,
  ill: 1,
  illegal: 1,
  illness: 1,
  illustrate: 1,
  image: 1,
  imagination: 1,
  imagine: 1,
  immediate: 1,
  immediately: 1,
  immigrant: 1,
  immigration: 1,
  impact: 1,
  implement: 1,
  implication: 1,
  imply: 1,
  importance: 1,
  important: 1,
  impose: 1,
  impossible: 1,
  impress: 1,
  impression: 1,
  impressive: 1,
  improve: 1,
  improvement: 1,
  in: 1,
  incentive: 1,
  incident: 1,
  include: 1,
  including: 1,
  income: 1,
  incorporate: 1,
  increase: 1,
  increased: 1,
  increasing: 1,
  increasingly: 1,
  incredible: 1,
  indeed: 1,
  independence: 1,
  independent: 1,
  index: 1,
  Indian: 1,
  indicate: 1,
  indication: 1,
  individual: 1,
  industrial: 1,
  industry: 1,
  infant: 1,
  infection: 1,
  inflation: 1,
  influence: 1,
  inform: 1,
  information: 1,
  ingredient: 1,
  initial: 1,
  initially: 1,
  initiative: 1,
  injury: 1,
  inner: 1,
  innocent: 1,
  inquiry: 1,
  inside: 1,
  insight: 1,
  insist: 1,
  inspire: 1,
  install: 1,
  instance: 1,
  instead: 1,
  institution: 1,
  institutional: 1,
  instruction: 1,
  instructor: 1,
  instrument: 1,
  insurance: 1,
  intellectual: 1,
  intelligence: 1,
  intend: 1,
  intense: 1,
  intensity: 1,
  intention: 1,
  interaction: 1,
  interest: 1,
  interested: 1,
  interesting: 1,
  internal: 1,
  international: 1,
  Internet: 1,
  interpret: 1,
  interpretation: 1,
  intervention: 1,
  interview: 1,
  into: 1,
  introduce: 1,
  introduction: 1,
  invasion: 1,
  invest: 1,
  investigate: 1,
  investigation: 1,
  investigator: 1,
  investment: 1,
  investor: 1,
  invite: 1,
  involve: 1,
  involved: 1,
  involvement: 1,
  Iraqi: 1,
  Irish: 1,
  iron: 1,
  Islamic: 1,
  island: 1,
  Israeli: 1,
  issue: 1,
  it: 1,
  Italian: 1,
  item: 1,
  its: 1,
  itself: 1,
  jacket: 1,
  jail: 1,
  Japanese: 1,
  jet: 1,
  Jew: 1,
  Jewish: 1,
  job: 1,
  join: 1,
  joint: 1,
  joke: 1,
  journal: 1,
  journalist: 1,
  journey: 1,
  joy: 1,
  judge: 1,
  judgment: 1,
  juice: 1,
  jump: 1,
  junior: 1,
  jury: 1,
  just: 1,
  justice: 1,
  justify: 1,
  keep: 1,
  key: 1,
  kick: 1,
  kid: 1,
  kill: 1,
  killer: 1,
  killing: 1,
  kind: 1,
  king: 1,
  kiss: 1,
  kitchen: 1,
  knee: 1,
  knife: 1,
  knock: 1,
  know: 1,
  knowledge: 1,
  lab: 1,
  label: 1,
  labor: 1,
  laboratory: 1,
  lack: 1,
  lady: 1,
  lake: 1,
  land: 1,
  landscape: 1,
  language: 1,
  lap: 1,
  large: 1,
  largely: 1,
  last: 1,
  late: 1,
  later: 1,
  Latin: 1,
  latter: 1,
  laugh: 1,
  launch: 1,
  law: 1,
  lawn: 1,
  lawsuit: 1,
  lawyer: 1,
  lay: 1,
  layer: 1,
  lead: 1,
  leader: 1,
  leadership: 1,
  leading: 1,
  leaf: 1,
  league: 1,
  lean: 1,
  learn: 1,
  learning: 1,
  least: 1,
  leather: 1,
  leave: 1,
  left: 1,
  leg: 1,
  legacy: 1,
  legal: 1,
  legend: 1,
  legislation: 1,
  legitimate: 1,
  lemon: 1,
  length: 1,
  less: 1,
  lesson: 1,
  let: 1,
  letter: 1,
  level: 1,
  liberal: 1,
  library: 1,
  license: 1,
  lie: 1,
  life: 1,
  lifestyle: 1,
  lifetime: 1,
  lift: 1,
  light: 1,
  like: 1,
  likely: 1,
  limit: 1,
  limitation: 1,
  limited: 1,
  line: 1,
  link: 1,
  lip: 1,
  list: 1,
  listen: 1,
  literally: 1,
  literary: 1,
  literature: 1,
  little: 1,
  live: 1,
  living: 1,
  load: 1,
  loan: 1,
  local: 1,
  locate: 1,
  location: 1,
  lock: 1,
  long: 1,
  "long-term": 1,
  look: 1,
  loose: 1,
  lose: 1,
  loss: 1,
  lost: 1,
  lot: 1,
  lots: 1,
  loud: 1,
  love: 1,
  lovely: 1,
  lover: 1,
  low: 1,
  lower: 1,
  luck: 1,
  lucky: 1,
  lunch: 1,
  lung: 1,
  machine: 1,
  mad: 1,
  magazine: 1,
  mail: 1,
  main: 1,
  mainly: 1,
  maintain: 1,
  maintenance: 1,
  major: 1,
  majority: 1,
  make: 1,
  maker: 1,
  makeup: 1,
  male: 1,
  mall: 1,
  man: 1,
  manage: 1,
  management: 1,
  manager: 1,
  manner: 1,
  manufacturer: 1,
  manufacturing: 1,
  many: 1,
  map: 1,
  margin: 1,
  mark: 1,
  market: 1,
  marketing: 1,
  marriage: 1,
  married: 1,
  marry: 1,
  mask: 1,
  mass: 1,
  massive: 1,
  master: 1,
  match: 1,
  material: 1,
  math: 1,
  matter: 1,
  may: 1,
  maybe: 1,
  mayor: 1,
  me: 1,
  meal: 1,
  mean: 1,
  meaning: 1,
  meanwhile: 1,
  measure: 1,
  measurement: 1,
  meat: 1,
  mechanism: 1,
  media: 1,
  medical: 1,
  medication: 1,
  medicine: 1,
  medium: 1,
  meet: 1,
  meeting: 1,
  member: 1,
  membership: 1,
  memory: 1,
  mental: 1,
  mention: 1,
  menu: 1,
  mere: 1,
  merely: 1,
  mess: 1,
  message: 1,
  metal: 1,
  meter: 1,
  method: 1,
  Mexican: 1,
  middle: 1,
  might: 1,
  military: 1,
  milk: 1,
  million: 1,
  mind: 1,
  mine: 1,
  minister: 1,
  minor: 1,
  minority: 1,
  minute: 1,
  miracle: 1,
  mirror: 1,
  miss: 1,
  missile: 1,
  mission: 1,
  mistake: 1,
  mix: 1,
  mixture: 1,
  "mm-hmm": 1,
  mode: 1,
  model: 1,
  moderate: 1,
  modern: 1,
  modest: 1,
  mom: 1,
  moment: 1,
  money: 1,
  monitor: 1,
  month: 1,
  mood: 1,
  moon: 1,
  moral: 1,
  more: 1,
  moreover: 1,
  morning: 1,
  mortgage: 1,
  most: 1,
  mostly: 1,
  mother: 1,
  motion: 1,
  motivation: 1,
  motor: 1,
  mount: 1,
  mountain: 1,
  mouse: 1,
  mouth: 1,
  move: 1,
  movement: 1,
  movie: 1,
  Mr: 1,
  Mrs: 1,
  Ms: 1,
  much: 1,
  multiple: 1,
  murder: 1,
  muscle: 1,
  museum: 1,
  music: 1,
  musical: 1,
  musician: 1,
  Muslim: 1,
  must: 1,
  mutual: 1,
  my: 1,
  myself: 1,
  mystery: 1,
  myth: 1,
  naked: 1,
  name: 1,
  narrative: 1,
  narrow: 1,
  nation: 1,
  national: 1,
  native: 1,
  natural: 1,
  naturally: 1,
  nature: 1,
  near: 1,
  nearby: 1,
  nearly: 1,
  necessarily: 1,
  necessary: 1,
  neck: 1,
  need: 1,
  negative: 1,
  negotiate: 1,
  negotiation: 1,
  neighbor: 1,
  neighborhood: 1,
  neither: 1,
  nerve: 1,
  nervous: 1,
  net: 1,
  network: 1,
  never: 1,
  nevertheless: 1,
  new: 1,
  newly: 1,
  news: 1,
  newspaper: 1,
  next: 1,
  nice: 1,
  night: 1,
  nine: 1,
  no: 1,
  nobody: 1,
  nod: 1,
  noise: 1,
  nomination: 1,
  none: 1,
  nonetheless: 1,
  nor: 1,
  normal: 1,
  normally: 1,
  north: 1,
  northern: 1,
  nose: 1,
  not: 1,
  note: 1,
  nothing: 1,
  notice: 1,
  notion: 1,
  novel: 1,
  now: 1,
  nowhere: 1,
  "n't": 1,
  nuclear: 1,
  number: 1,
  numerous: 1,
  nurse: 1,
  nut: 1,
  object: 1,
  objective: 1,
  obligation: 1,
  observation: 1,
  observe: 1,
  observer: 1,
  obtain: 1,
  obvious: 1,
  obviously: 1,
  occasion: 1,
  occasionally: 1,
  occupation: 1,
  occupy: 1,
  occur: 1,
  ocean: 1,
  odd: 1,
  odds: 1,
  of: 1,
  off: 1,
  offense: 1,
  offensive: 1,
  offer: 1,
  office: 1,
  officer: 1,
  official: 1,
  often: 1,
  oh: 1,
  oil: 1,
  ok: 1,
  okay: 1,
  old: 1,
  Olympic: 1,
  on: 1,
  once: 1,
  one: 1,
  ongoing: 1,
  onion: 1,
  online: 1,
  only: 1,
  onto: 1,
  open: 1,
  opening: 1,
  operate: 1,
  operating: 1,
  operation: 1,
  operator: 1,
  opinion: 1,
  opponent: 1,
  opportunity: 1,
  oppose: 1,
  opposite: 1,
  opposition: 1,
  option: 1,
  or: 1,
  orange: 1,
  order: 1,
  ordinary: 1,
  organic: 1,
  organization: 1,
  organize: 1,
  orientation: 1,
  origin: 1,
  original: 1,
  originally: 1,
  other: 1,
  others: 1,
  otherwise: 1,
  ought: 1,
  our: 1,
  ourselves: 1,
  out: 1,
  outcome: 1,
  outside: 1,
  oven: 1,
  over: 1,
  overall: 1,
  overcome: 1,
  overlook: 1,
  owe: 1,
  own: 1,
  owner: 1,
  pace: 1,
  pack: 1,
  package: 1,
  page: 1,
  pain: 1,
  painful: 1,
  paint: 1,
  painter: 1,
  painting: 1,
  pair: 1,
  pale: 1,
  Palestinian: 1,
  palm: 1,
  pan: 1,
  panel: 1,
  pant: 1,
  paper: 1,
  parent: 1,
  park: 1,
  parking: 1,
  part: 1,
  participant: 1,
  participate: 1,
  participation: 1,
  particular: 1,
  particularly: 1,
  partly: 1,
  partner: 1,
  partnership: 1,
  party: 1,
  pass: 1,
  passage: 1,
  passenger: 1,
  passion: 1,
  past: 1,
  patch: 1,
  path: 1,
  patient: 1,
  pattern: 1,
  pause: 1,
  pay: 1,
  payment: 1,
  PC: 1,
  peace: 1,
  peak: 1,
  peer: 1,
  penalty: 1,
  people: 1,
  pepper: 1,
  per: 1,
  perceive: 1,
  percentage: 1,
  perception: 1,
  perfect: 1,
  perfectly: 1,
  perform: 1,
  performance: 1,
  perhaps: 1,
  period: 1,
  permanent: 1,
  permission: 1,
  permit: 1,
  person: 1,
  personal: 1,
  personality: 1,
  personally: 1,
  personnel: 1,
  perspective: 1,
  persuade: 1,
  pet: 1,
  phase: 1,
  phenomenon: 1,
  philosophy: 1,
  phone: 1,
  photo: 1,
  photograph: 1,
  photographer: 1,
  phrase: 1,
  physical: 1,
  physically: 1,
  physician: 1,
  piano: 1,
  pick: 1,
  picture: 1,
  pie: 1,
  piece: 1,
  pile: 1,
  pilot: 1,
  pine: 1,
  pink: 1,
  pipe: 1,
  pitch: 1,
  place: 1,
  plan: 1,
  plane: 1,
  planet: 1,
  planning: 1,
  plant: 1,
  plastic: 1,
  plate: 1,
  platform: 1,
  play: 1,
  player: 1,
  please: 1,
  pleasure: 1,
  plenty: 1,
  plot: 1,
  plus: 1,
  PM: 1,
  pocket: 1,
  poem: 1,
  poet: 1,
  poetry: 1,
  point: 1,
  pole: 1,
  police: 1,
  policy: 1,
  political: 1,
  politically: 1,
  politician: 1,
  politics: 1,
  poll: 1,
  pollution: 1,
  pool: 1,
  poor: 1,
  pop: 1,
  popular: 1,
  population: 1,
  porch: 1,
  port: 1,
  portion: 1,
  portrait: 1,
  portray: 1,
  pose: 1,
  position: 1,
  positive: 1,
  possess: 1,
  possibility: 1,
  possible: 1,
  possibly: 1,
  post: 1,
  pot: 1,
  potato: 1,
  potential: 1,
  potentially: 1,
  pound: 1,
  pour: 1,
  poverty: 1,
  powder: 1,
  power: 1,
  powerful: 1,
  practical: 1,
  practice: 1,
  pray: 1,
  prayer: 1,
  precisely: 1,
  predict: 1,
  prefer: 1,
  preference: 1,
  pregnancy: 1,
  pregnant: 1,
  preparation: 1,
  prepare: 1,
  prescription: 1,
  presence: 1,
  present: 1,
  presentation: 1,
  preserve: 1,
  president: 1,
  presidential: 1,
  press: 1,
  pressure: 1,
  pretend: 1,
  pretty: 1,
  prevent: 1,
  previous: 1,
  previously: 1,
  price: 1,
  pride: 1,
  priest: 1,
  primarily: 1,
  primary: 1,
  prime: 1,
  principal: 1,
  principle: 1,
  print: 1,
  prior: 1,
  priority: 1,
  prison: 1,
  prisoner: 1,
  privacy: 1,
  private: 1,
  probably: 1,
  problem: 1,
  procedure: 1,
  proceed: 1,
  process: 1,
  produce: 1,
  producer: 1,
  product: 1,
  production: 1,
  profession: 1,
  professional: 1,
  professor: 1,
  profile: 1,
  profit: 1,
  program: 1,
  progress: 1,
  project: 1,
  prominent: 1,
  promise: 1,
  promote: 1,
  prompt: 1,
  proof: 1,
  proper: 1,
  properly: 1,
  property: 1,
  proportion: 1,
  proposal: 1,
  propose: 1,
  proposed: 1,
  prosecutor: 1,
  prospect: 1,
  protect: 1,
  protection: 1,
  protein: 1,
  protest: 1,
  proud: 1,
  prove: 1,
  provide: 1,
  provider: 1,
  province: 1,
  provision: 1,
  psychological: 1,
  psychologist: 1,
  psychology: 1,
  public: 1,
  publication: 1,
  publicly: 1,
  publish: 1,
  publisher: 1,
  pull: 1,
  punishment: 1,
  purchase: 1,
  pure: 1,
  purpose: 1,
  pursue: 1,
  push: 1,
  put: 1,
  qualify: 1,
  quality: 1,
  quarter: 1,
  quarterback: 1,
  question: 1,
  quick: 1,
  quickly: 1,
  quiet: 1,
  quietly: 1,
  quit: 1,
  quite: 1,
  quote: 1,
  race: 1,
  racial: 1,
  radical: 1,
  radio: 1,
  rail: 1,
  rain: 1,
  raise: 1,
  range: 1,
  rank: 1,
  rapid: 1,
  rapidly: 1,
  rare: 1,
  rarely: 1,
  rate: 1,
  rather: 1,
  rating: 1,
  ratio: 1,
  raw: 1,
  reach: 1,
  react: 1,
  reaction: 1,
  read: 1,
  reader: 1,
  reading: 1,
  ready: 1,
  real: 1,
  reality: 1,
  realize: 1,
  really: 1,
  reason: 1,
  reasonable: 1,
  recall: 1,
  receive: 1,
  recent: 1,
  recently: 1,
  recipe: 1,
  recognition: 1,
  recognize: 1,
  recommend: 1,
  recommendation: 1,
  record: 1,
  recording: 1,
  recover: 1,
  recovery: 1,
  recruit: 1,
  red: 1,
  reduce: 1,
  reduction: 1,
  refer: 1,
  reference: 1,
  reflect: 1,
  reflection: 1,
  reform: 1,
  refugee: 1,
  refuse: 1,
  regard: 1,
  regarding: 1,
  regardless: 1,
  regime: 1,
  region: 1,
  regional: 1,
  register: 1,
  regular: 1,
  regularly: 1,
  regulate: 1,
  regulation: 1,
  reinforce: 1,
  reject: 1,
  relate: 1,
  relation: 1,
  relationship: 1,
  relative: 1,
  relatively: 1,
  relax: 1,
  release: 1,
  relevant: 1,
  relief: 1,
  religion: 1,
  religious: 1,
  rely: 1,
  remain: 1,
  remaining: 1,
  remarkable: 1,
  remember: 1,
  remind: 1,
  remote: 1,
  remove: 1,
  repeat: 1,
  repeatedly: 1,
  replace: 1,
  reply: 1,
  report: 1,
  reporter: 1,
  represent: 1,
  representation: 1,
  representative: 1,
  Republican: 1,
  reputation: 1,
  request: 1,
  require: 1,
  requirement: 1,
  research: 1,
  researcher: 1,
  resemble: 1,
  reservation: 1,
  resident: 1,
  resist: 1,
  resistance: 1,
  resolution: 1,
  resolve: 1,
  resort: 1,
  resource: 1,
  respect: 1,
  respond: 1,
  respondent: 1,
  response: 1,
  responsibility: 1,
  responsible: 1,
  rest: 1,
  restaurant: 1,
  restore: 1,
  restriction: 1,
  result: 1,
  retain: 1,
  retire: 1,
  retirement: 1,
  return: 1,
  reveal: 1,
  revenue: 1,
  review: 1,
  revolution: 1,
  rhythm: 1,
  rice: 1,
  rich: 1,
  rid: 1,
  ride: 1,
  rifle: 1,
  right: 1,
  ring: 1,
  rise: 1,
  risk: 1,
  river: 1,
  road: 1,
  rock: 1,
  role: 1,
  roll: 1,
  romantic: 1,
  roof: 1,
  room: 1,
  root: 1,
  rope: 1,
  rose: 1,
  rough: 1,
  roughly: 1,
  round: 1,
  route: 1,
  routine: 1,
  row: 1,
  rub: 1,
  rule: 1,
  run: 1,
  running: 1,
  rural: 1,
  rush: 1,
  Russian: 1,
  sacred: 1,
  sad: 1,
  safe: 1,
  safety: 1,
  sake: 1,
  salad: 1,
  salary: 1,
  sale: 1,
  sales: 1,
  salt: 1,
  same: 1,
  sample: 1,
  sanction: 1,
  sand: 1,
  satellite: 1,
  satisfaction: 1,
  satisfy: 1,
  sauce: 1,
  save: 1,
  saving: 1,
  say: 1,
  scale: 1,
  scandal: 1,
  scared: 1,
  scenario: 1,
  scene: 1,
  schedule: 1,
  scheme: 1,
  scholar: 1,
  scholarship: 1,
  school: 1,
  science: 1,
  scientific: 1,
  scientist: 1,
  scope: 1,
  score: 1,
  scream: 1,
  screen: 1,
  script: 1,
  sea: 1,
  search: 1,
  season: 1,
  seat: 1,
  second: 1,
  secret: 1,
  secretary: 1,
  section: 1,
  sector: 1,
  secure: 1,
  security: 1,
  see: 1,
  seed: 1,
  seek: 1,
  seem: 1,
  segment: 1,
  seize: 1,
  select: 1,
  selection: 1,
  self: 1,
  sell: 1,
  Senate: 1,
  senator: 1,
  send: 1,
  senior: 1,
  sense: 1,
  sensitive: 1,
  sentence: 1,
  separate: 1,
  sequence: 1,
  series: 1,
  serious: 1,
  seriously: 1,
  serve: 1,
  service: 1,
  session: 1,
  set: 1,
  setting: 1,
  settle: 1,
  settlement: 1,
  seven: 1,
  several: 1,
  severe: 1,
  sex: 1,
  sexual: 1,
  shade: 1,
  shadow: 1,
  shake: 1,
  shall: 1,
  shape: 1,
  share: 1,
  sharp: 1,
  she: 1,
  sheet: 1,
  shelf: 1,
  shell: 1,
  shelter: 1,
  shift: 1,
  shine: 1,
  ship: 1,
  shirt: 1,
  shit: 1,
  shock: 1,
  shoe: 1,
  shoot: 1,
  shooting: 1,
  shop: 1,
  shopping: 1,
  shore: 1,
  short: 1,
  shortly: 1,
  shot: 1,
  should: 1,
  shoulder: 1,
  shout: 1,
  show: 1,
  shower: 1,
  shrug: 1,
  shut: 1,
  sick: 1,
  side: 1,
  sigh: 1,
  sight: 1,
  sign: 1,
  signal: 1,
  significance: 1,
  significant: 1,
  significantly: 1,
  silence: 1,
  silent: 1,
  silver: 1,
  similar: 1,
  similarly: 1,
  simple: 1,
  simply: 1,
  sin: 1,
  since: 1,
  sing: 1,
  singer: 1,
  single: 1,
  sink: 1,
  sir: 1,
  sister: 1,
  sit: 1,
  site: 1,
  situation: 1,
  six: 1,
  size: 1,
  ski: 1,
  skill: 1,
  skin: 1,
  sky: 1,
  slave: 1,
  sleep: 1,
  slice: 1,
  slide: 1,
  slight: 1,
  slightly: 1,
  slip: 1,
  slow: 1,
  slowly: 1,
  small: 1,
  smart: 1,
  smell: 1,
  smile: 1,
  smoke: 1,
  smooth: 1,
  snap: 1,
  snow: 1,
  so: 1,
  "so-called": 1,
  soccer: 1,
  social: 1,
  society: 1,
  soft: 1,
  software: 1,
  soil: 1,
  solar: 1,
  soldier: 1,
  solid: 1,
  solution: 1,
  solve: 1,
  some: 1,
  somebody: 1,
  somehow: 1,
  someone: 1,
  something: 1,
  sometimes: 1,
  somewhat: 1,
  somewhere: 1,
  son: 1,
  song: 1,
  soon: 1,
  sophisticated: 1,
  sorry: 1,
  sort: 1,
  soul: 1,
  sound: 1,
  soup: 1,
  source: 1,
  south: 1,
  southern: 1,
  Soviet: 1,
  space: 1,
  Spanish: 1,
  speak: 1,
  speaker: 1,
  special: 1,
  specialist: 1,
  species: 1,
  specific: 1,
  specifically: 1,
  speech: 1,
  speed: 1,
  spend: 1,
  spending: 1,
  spin: 1,
  spirit: 1,
  spiritual: 1,
  split: 1,
  spokesman: 1,
  sport: 1,
  spot: 1,
  spread: 1,
  spring: 1,
  square: 1,
  squeeze: 1,
  stability: 1,
  stable: 1,
  staff: 1,
  stage: 1,
  stair: 1,
  stake: 1,
  stand: 1,
  standard: 1,
  standing: 1,
  star: 1,
  stare: 1,
  start: 1,
  state: 1,
  statement: 1,
  station: 1,
  statistics: 1,
  status: 1,
  stay: 1,
  steady: 1,
  steal: 1,
  steel: 1,
  step: 1,
  stick: 1,
  still: 1,
  stir: 1,
  stock: 1,
  stomach: 1,
  stone: 1,
  stop: 1,
  storage: 1,
  store: 1,
  storm: 1,
  story: 1,
  straight: 1,
  strange: 1,
  stranger: 1,
  strategic: 1,
  strategy: 1,
  stream: 1,
  street: 1,
  strength: 1,
  strengthen: 1,
  stress: 1,
  stretch: 1,
  strike: 1,
  string: 1,
  strip: 1,
  stroke: 1,
  strong: 1,
  strongly: 1,
  structure: 1,
  struggle: 1,
  student: 1,
  studio: 1,
  study: 1,
  stuff: 1,
  stupid: 1,
  style: 1,
  subject: 1,
  submit: 1,
  subsequent: 1,
  substance: 1,
  substantial: 1,
  succeed: 1,
  success: 1,
  successful: 1,
  successfully: 1,
  such: 1,
  sudden: 1,
  suddenly: 1,
  sue: 1,
  suffer: 1,
  sufficient: 1,
  sugar: 1,
  suggest: 1,
  suggestion: 1,
  suicide: 1,
  suit: 1,
  summer: 1,
  summit: 1,
  sun: 1,
  super: 1,
  supply: 1,
  support: 1,
  supporter: 1,
  suppose: 1,
  supposed: 1,
  Supreme: 1,
  sure: 1,
  surely: 1,
  surface: 1,
  surgery: 1,
  surprise: 1,
  surprised: 1,
  surprising: 1,
  surprisingly: 1,
  surround: 1,
  survey: 1,
  survival: 1,
  survive: 1,
  survivor: 1,
  suspect: 1,
  sustain: 1,
  swear: 1,
  sweep: 1,
  sweet: 1,
  swim: 1,
  swing: 1,
  switch: 1,
  symbol: 1,
  symptom: 1,
  system: 1,
  table: 1,
  tablespoon: 1,
  tactic: 1,
  tail: 1,
  take: 1,
  tale: 1,
  talent: 1,
  talk: 1,
  tall: 1,
  tank: 1,
  tap: 1,
  tape: 1,
  target: 1,
  task: 1,
  taste: 1,
  tax: 1,
  taxpayer: 1,
  tea: 1,
  teach: 1,
  teacher: 1,
  teaching: 1,
  team: 1,
  tear: 1,
  teaspoon: 1,
  technical: 1,
  technique: 1,
  technology: 1,
  teen: 1,
  teenager: 1,
  telephone: 1,
  telescope: 1,
  television: 1,
  tell: 1,
  temperature: 1,
  temporary: 1,
  ten: 1,
  tend: 1,
  tendency: 1,
  tennis: 1,
  tension: 1,
  tent: 1,
  term: 1,
  terms: 1,
  terrible: 1,
  territory: 1,
  terror: 1,
  terrorism: 1,
  terrorist: 1,
  test: 1,
  testify: 1,
  testimony: 1,
  testing: 1,
  text: 1,
  than: 1,
  thank: 1,
  thanks: 1,
  that: 1,
  the: 1,
  theater: 1,
  their: 1,
  them: 1,
  theme: 1,
  themselves: 1,
  then: 1,
  theory: 1,
  therapy: 1,
  there: 1,
  therefore: 1,
  these: 1,
  they: 1,
  thick: 1,
  thin: 1,
  thing: 1,
  think: 1,
  thinking: 1,
  third: 1,
  thirty: 1,
  this: 1,
  those: 1,
  though: 1,
  thought: 1,
  thousand: 1,
  threat: 1,
  threaten: 1,
  three: 1,
  throat: 1,
  through: 1,
  throughout: 1,
  throw: 1,
  thus: 1,
  ticket: 1,
  tie: 1,
  tight: 1,
  time: 1,
  tiny: 1,
  tip: 1,
  tire: 1,
  tired: 1,
  tissue: 1,
  title: 1,
  to: 1,
  tobacco: 1,
  today: 1,
  toe: 1,
  together: 1,
  tomato: 1,
  tomorrow: 1,
  tone: 1,
  tongue: 1,
  tonight: 1,
  too: 1,
  tool: 1,
  tooth: 1,
  top: 1,
  topic: 1,
  toss: 1,
  total: 1,
  totally: 1,
  touch: 1,
  tough: 1,
  tour: 1,
  tourist: 1,
  tournament: 1,
  toward: 1,
  towards: 1,
  tower: 1,
  town: 1,
  toy: 1,
  trace: 1,
  track: 1,
  trade: 1,
  tradition: 1,
  traditional: 1,
  traffic: 1,
  tragedy: 1,
  trail: 1,
  train: 1,
  training: 1,
  transfer: 1,
  transform: 1,
  transformation: 1,
  transition: 1,
  translate: 1,
  transportation: 1,
  travel: 1,
  treat: 1,
  treatment: 1,
  treaty: 1,
  tree: 1,
  tremendous: 1,
  trend: 1,
  trial: 1,
  tribe: 1,
  trick: 1,
  trip: 1,
  troop: 1,
  trouble: 1,
  truck: 1,
  true: 1,
  truly: 1,
  trust: 1,
  truth: 1,
  try: 1,
  tube: 1,
  tunnel: 1,
  turn: 1,
  TV: 1,
  twelve: 1,
  twenty: 1,
  twice: 1,
  twin: 1,
  two: 1,
  type: 1,
  typical: 1,
  typically: 1,
  ugly: 1,
  ultimate: 1,
  ultimately: 1,
  unable: 1,
  uncle: 1,
  under: 1,
  undergo: 1,
  understand: 1,
  understanding: 1,
  unfortunately: 1,
  uniform: 1,
  union: 1,
  unique: 1,
  unit: 1,
  United: 1,
  universal: 1,
  universe: 1,
  university: 1,
  unknown: 1,
  unless: 1,
  unlike: 1,
  unlikely: 1,
  until: 1,
  unusual: 1,
  up: 1,
  upon: 1,
  upper: 1,
  urban: 1,
  urge: 1,
  us: 1,
  use: 1,
  used: 1,
  useful: 1,
  user: 1,
  usual: 1,
  usually: 1,
  utility: 1,
  vacation: 1,
  valley: 1,
  valuable: 1,
  value: 1,
  variable: 1,
  variation: 1,
  variety: 1,
  various: 1,
  vary: 1,
  vast: 1,
  vegetable: 1,
  vehicle: 1,
  venture: 1,
  version: 1,
  versus: 1,
  very: 1,
  vessel: 1,
  veteran: 1,
  via: 1,
  victim: 1,
  victory: 1,
  video: 1,
  view: 1,
  viewer: 1,
  village: 1,
  violate: 1,
  violation: 1,
  violence: 1,
  violent: 1,
  virtually: 1,
  virtue: 1,
  virus: 1,
  visible: 1,
  vision: 1,
  visit: 1,
  visitor: 1,
  visual: 1,
  vital: 1,
  voice: 1,
  volume: 1,
  volunteer: 1,
  vote: 1,
  voter: 1,
  vs: 1,
  vulnerable: 1,
  wage: 1,
  wait: 1,
  wake: 1,
  walk: 1,
  wall: 1,
  wander: 1,
  want: 1,
  war: 1,
  warm: 1,
  warn: 1,
  warning: 1,
  wash: 1,
  waste: 1,
  watch: 1,
  water: 1,
  wave: 1,
  way: 1,
  we: 1,
  weak: 1,
  wealth: 1,
  wealthy: 1,
  weapon: 1,
  wear: 1,
  weather: 1,
  wedding: 1,
  week: 1,
  weekend: 1,
  weekly: 1,
  weigh: 1,
  weight: 1,
  welcome: 1,
  welfare: 1,
  well: 1,
  west: 1,
  western: 1,
  wet: 1,
  what: 1,
  whatever: 1,
  wheel: 1,
  when: 1,
  whenever: 1,
  where: 1,
  whereas: 1,
  whether: 1,
  which: 1,
  while: 1,
  whisper: 1,
  white: 1,
  who: 1,
  whole: 1,
  whom: 1,
  whose: 1,
  why: 1,
  wide: 1,
  widely: 1,
  widespread: 1,
  wife: 1,
  wild: 1,
  will: 1,
  willing: 1,
  win: 1,
  wind: 1,
  window: 1,
  wine: 1,
  wing: 1,
  winner: 1,
  winter: 1,
  wipe: 1,
  wire: 1,
  wisdom: 1,
  wise: 1,
  wish: 1,
  with: 1,
  withdraw: 1,
  within: 1,
  without: 1,
  witness: 1,
  woman: 1,
  wonder: 1,
  wonderful: 1,
  wood: 1,
  wooden: 1,
  word: 1,
  work: 1,
  worker: 1,
  working: 1,
  works: 1,
  workshop: 1,
  world: 1,
  worried: 1,
  worry: 1,
  worth: 1,
  would: 1,
  wound: 1,
  wrap: 1,
  write: 1,
  writer: 1,
  writing: 1,
  wrong: 1,
  yard: 1,
  yeah: 1,
  year: 1,
  yell: 1,
  yellow: 1,
  yes: 1,
  yesterday: 1,
  yet: 1,
  yield: 1,
  you: 1,
  young: 1,
  your: 1,
  yours: 1,
  yourself: 1,
  youth: 1,
  zone: 1
};

/***/ }),
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initCrawler", function() { return initCrawler; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "singleWordToDisplay", function() { return singleWordToDisplay; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadSingleWord", function() { return loadSingleWord; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TraverseNode", function() { return TraverseNode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadDictionaryAndChildren", function() { return loadDictionaryAndChildren; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "traverseCluster", function() { return traverseCluster; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadCluster", function() { return loadCluster; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadCommonWord", function() { return loadCommonWord; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadCommonWords", function() { return loadCommonWords; });
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const axios = __webpack_require__(19);

const fs = __webpack_require__(16);

const finder = __webpack_require__(48);

const API_DAILY_LIMIT = 25000;
let MAX_WORDS;
let CACHE_CLUSTERS;
let MAX_NODE_FREQUENCY;
let TRAVERSE_SIMILAR;
let cacheIsInitialized = false;
let totalWordsLastDay = 0;
let cacheInitIsError = false;

async function lazyInitCache() {
  if (!cacheIsInitialized) {
    cacheIsInitialized = true;
    let curtime = new Date(); // 86400000 milliseconds (24 hours)

    totalWordsLastDay = await finder.findFiles("cache/words", curtime - 86400000);
    console.log("lazyInitCache  totalWordsLastDay : " + totalWordsLastDay + " errors:" + finder.errors);
  }

  if (totalWordsLastDay >= API_DAILY_LIMIT) {
    if (!cacheInitIsError) {
      console.error("Could not proxy more request to API file/single  totalWordsLastDay >= API_DAILY_LIMIT :  " + totalWordsLastDay + " >= " + API_DAILY_LIMIT + "\n");
    }

    cacheInitIsError = true;
    return false;
  } else {
    totalWordsLastDay++;
    return true;
  }
}

async function initCrawler(_MAX_WORDS, _CACHE_CLUSTERS, _MAX_NODE_FREQUENCY, _TRAVERSE_SIMILAR) {
  MAX_WORDS = _MAX_WORDS;
  CACHE_CLUSTERS = _CACHE_CLUSTERS;
  MAX_NODE_FREQUENCY = _MAX_NODE_FREQUENCY;
  TRAVERSE_SIMILAR = _TRAVERSE_SIMILAR;

  if (!fs.existsSync("cache/words")) {
    fs.mkdirSync("cache/words", {
      recursive: true
    });
  }

  if (!fs.existsSync("cache/clusters")) {
    fs.mkdirSync("cache/clusters");
  }
}
function singleWordToDisplay(data) {
  // create new array to push data to
  let results = [];
  let result = {
    frequency: data.frequency,
    pronunciation: data.pronunciation,
    results,
    etc: ""
  };
  if (data.results) data.results.map(def => {
    let definitionArray = [];
    let definition = {
      partOfSpeech: def.partOfSpeech,
      properties: definitionArray
    }; // creates array of keys in object

    const keys = Object.keys(def);
    keys.map(key => {
      // builds regex that looks for capital letters
      // The response parameters are in camelCase, so we need to ID
      // the capital letters and add spaces instead so the 
      // front end can easily display the parameter labels
      const regex = /(?=[A-Z])/; // creates presentable label

      const label = key.split(regex).join(' ').toLowerCase(); // grabs the value for the parameter from the
      // definition object in response

      const value = def[key]; // constructs new object to send to frontend

      let newObj = {
        label,
        value,
        isString: typeof value === 'string' ? true : false
      };
      definitionArray.push(newObj);
    });
    results.push(definition);
  });
  return result;
}
async function loadSingleWord(word, asobject) {
  const wfpath = `cache/words/${word}`;

  if (fs.existsSync(wfpath)) {
    //console.log("From cache file/single "+wfpath+"  asobject:"+asobject+"...\n");
    let ijson = fs.readFileSync(wfpath).toString();

    try {
      let data = JSON.parse(ijson);

      if (asobject) {
        return data;
      } else {
        let result = singleWordToDisplay(data);
        const ojson = JSON.stringify(result); // modified

        return ojson;
      }
    } catch (e) {
      console.warn("Delete invalid file : " + wfpath, e);
      fs.unlinkSync(wfpath);
    }
  }

  let success = await lazyInitCache();

  if (!success) {
    return null;
  } // send request to the WordsAPI


  const response = await axios({
    "method": "GET",
    "url": `https://wordsapiv1.p.rapidapi.com/words/${word}`,
    "headers": {
      "content-type": "application/octet-stream",
      "x-rapidapi-host": "wordsapiv1.p.rapidapi.com",
      "x-rapidapi-key": process.env.RAPIDAPI_KEY
    }
  });
  totalWordsLastDay++;
  const djson = JSON.stringify(response.data); // original

  fs.writeFile(wfpath, djson, err => {
    if (err) {
      console.error("Cache file/single " + wfpath + "  asobject:" + asobject + " write failure : " + err + "\n");
    } else {
      console.log("Cache file/single " + wfpath + "  asobject:" + asobject + " written successfully\n");
    }
  });

  if (asobject) {
    return response.data;
  } else {
    let result = singleWordToDisplay(response.data);
    const ojson = JSON.stringify(result); // modified

    return ojson;
  }
}
class TraverseNode {
  constructor(by_def, entry, val, level) {
    _defineProperty(this, "entry", void 0);

    _defineProperty(this, "val", void 0);

    _defineProperty(this, "level", void 0);

    _defineProperty(this, "partOfSpeech", void 0);

    _defineProperty(this, "definition", void 0);

    _defineProperty(this, "synonyms", void 0);

    _defineProperty(this, "similar", void 0);

    _defineProperty(this, "words", void 0);

    _defineProperty(this, "key", void 0);

    this.entry = entry;
    this.val = val;
    this.level = level;
    this.definition = val.definition;
    this.synonyms = [];
    this.similar = [];
    this.words = [];
    this.add(by_def);
  }

  add(by_def) {
    this.partOfSpeech = this.val.partOfSpeech;
    this.synonyms.push.apply(this.synonyms, this.val.synonyms);
    this.synonyms.push(this.entry.word);
    this.synonyms.sort();
    this.similar.push.apply(this.similar, this.val.similarTo);
    this.similar.sort();
    this.words.push.apply(this.words, this.synonyms);
    this.words.push.apply(this.words, this.similar);
    this.key = this.level + ":::::::" + this.synonyms.length + "::::::" + this.synonyms.join(", ");

    if (!by_def[this.val.definition]) {
      by_def[this.val.definition] = this;
    }
  }

  compress() {
    delete this.val;
    delete this.key;
    delete this.words;
  }

}
;
async function loadDictionaryAndChildren(tresult, word, traversion) {
  const by_def = tresult.by_def;
  const entry = await loadSingleWord(word, true);

  if (!entry || traversion.level > 1 && entry.frequency && entry.frequency >= MAX_NODE_FREQUENCY) {
    return true;
  }

  for (let key in entry.results) {
    const val = entry.results[key];
    let node = new TraverseNode(by_def, entry, val, traversion.level);

    if (TRAVERSE_SIMILAR) {
      traversion.wordsbreadthfirst.push.apply(traversion.wordsbreadthfirst, node.words);
    } else {
      traversion.wordsbreadthfirst.push.apply(traversion.wordsbreadthfirst, node.synonyms);
    }
  }

  return true;
}
async function traverseCluster(tresult, word) {
  let traversion = {
    level: 1,
    wordsbreadthfirst: [word]
  };
  tresult.noWords = 0;
  tresult.master = await loadSingleWord(word, true);

  do {
    var previouslevelchildwords = traversion.wordsbreadthfirst.concat([]);
    traversion.wordsbreadthfirst = [];
    let promises = [];

    for (let w of previouslevelchildwords) {
      if (tresult.by_w[w]) {} else if (tresult.noWords >= MAX_WORDS) {
        console.log("Level " + traversion.level + " finished. Completed.");
        return;
      } else {
        tresult.noWords++;
        tresult.by_w[w] = 1;
        console.log(tresult.noWords + "/" + MAX_WORDS);
        let nodepromise = loadDictionaryAndChildren(tresult, w, traversion);
        promises.push(nodepromise);
      }
    }

    await Promise.all(promises);
    console.log("Level " + traversion.level + " finished.");
    traversion.level++;
  } while (traversion.wordsbreadthfirst.length);
}
async function loadCluster(word, asobject) {
  const cfpath = `cache/clusters/${word}`;

  if (CACHE_CLUSTERS && fs.existsSync(cfpath)) {
    let ijson = fs.readFileSync(cfpath).toString();
    let result = JSON.parse(ijson);
    console.log("From cache file/cluster " + cfpath + "  asobject:" + asobject + "...\n");

    if (asobject) {
      return result;
    } else {
      return ijson;
    }
  } else {
    const by_def = {};
    const by_w = {};
    const by_key = [];
    let tresult = {
      by_def,
      by_w
    };
    const entry = await traverseCluster(tresult, word);
    by_key.push.apply(by_key, Object.values(by_def));

    const cmp = (firstEl, secondEl) => {
      return firstEl.key.localeCompare(secondEl.key);
    };

    by_key.sort(cmp);

    for (let defobj of by_key) {
      defobj.compress();
    }

    let result = {
      noClusterEntries: by_key.length,
      results: by_key
    };

    if (tresult.master) {
      result.frequency = tresult.master.frequency;
      result.pronunciation = tresult.master.pronunciation;
    }

    let cjson;

    if (CACHE_CLUSTERS) {
      cjson = JSON.stringify(result);
      fs.writeFile(cfpath, cjson, err => {
        if (err) {
          console.error("Cluster file/cluster " + cfpath + "  write failure : " + err + "\n");
        } else {
          console.log("Cluster file/cluster " + cfpath + "  written successfully\n");
        }
      });
    }

    if (asobject) {
      return result;
    } else {
      if (!cjson) {
        cjson = JSON.stringify(result);
      }

      return cjson;
    }
  }
}
async function loadCommonWord(result, word, noWords) {
  const entry = await loadSingleWord(word, true);

  if (entry) {
    result.noWords++;
    console.log(result.noWords + "/" + noWords);

    for (let key in entry.results) {
      const val = entry.results[key];
      const synonyms = [].concat(val.synonyms);
      synonyms.sort();
      const definition = {
        partOfSpeech: val.partOfSpeech,
        definition: val.definition,
        synonyms
      };
      result.noDefinitions++;
      result.results.push(definition);
    }
  }
}
async function loadCommonWords() {
  const cw = __webpack_require__(17); // create new array to push data to


  let results = [];
  let result = {
    noWords: 0,
    noDefinitions: 0,
    results
  };
  let promises = [];
  let noWords = Object.keys(cw.TheMostCommon3000).length;

  for (let commonWord in cw.TheMostCommon3000) {
    promises.push(loadCommonWord(result, commonWord, noWords));
  }

  await Promise.all(promises);
  return result;
}

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(20);

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0);
var bind = __webpack_require__(3);
var Axios = __webpack_require__(21);
var mergeConfig = __webpack_require__(14);
var defaults = __webpack_require__(5);

/**
 * Create an instance of Axios
 *
 * @param {Object} defaultConfig The default config for the instance
 * @return {Axios} A new instance of Axios
 */
function createInstance(defaultConfig) {
  var context = new Axios(defaultConfig);
  var instance = bind(Axios.prototype.request, context);

  // Copy axios.prototype to instance
  utils.extend(instance, Axios.prototype, context);

  // Copy context to instance
  utils.extend(instance, context);

  return instance;
}

// Create the default instance to be exported
var axios = createInstance(defaults);

// Expose Axios class to allow class inheritance
axios.Axios = Axios;

// Factory for creating new instances
axios.create = function create(instanceConfig) {
  return createInstance(mergeConfig(axios.defaults, instanceConfig));
};

// Expose Cancel & CancelToken
axios.Cancel = __webpack_require__(15);
axios.CancelToken = __webpack_require__(46);
axios.isCancel = __webpack_require__(4);

// Expose all/spread
axios.all = function all(promises) {
  return Promise.all(promises);
};
axios.spread = __webpack_require__(47);

module.exports = axios;

// Allow use of default import syntax in TypeScript
module.exports.default = axios;


/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0);
var buildURL = __webpack_require__(1);
var InterceptorManager = __webpack_require__(22);
var dispatchRequest = __webpack_require__(23);
var mergeConfig = __webpack_require__(14);

/**
 * Create a new instance of Axios
 *
 * @param {Object} instanceConfig The default config for the instance
 */
function Axios(instanceConfig) {
  this.defaults = instanceConfig;
  this.interceptors = {
    request: new InterceptorManager(),
    response: new InterceptorManager()
  };
}

/**
 * Dispatch a request
 *
 * @param {Object} config The config specific for this request (merged with this.defaults)
 */
Axios.prototype.request = function request(config) {
  /*eslint no-param-reassign:0*/
  // Allow for axios('example/url'[, config]) a la fetch API
  if (typeof config === 'string') {
    config = arguments[1] || {};
    config.url = arguments[0];
  } else {
    config = config || {};
  }

  config = mergeConfig(this.defaults, config);

  // Set config.method
  if (config.method) {
    config.method = config.method.toLowerCase();
  } else if (this.defaults.method) {
    config.method = this.defaults.method.toLowerCase();
  } else {
    config.method = 'get';
  }

  // Hook up interceptors middleware
  var chain = [dispatchRequest, undefined];
  var promise = Promise.resolve(config);

  this.interceptors.request.forEach(function unshiftRequestInterceptors(interceptor) {
    chain.unshift(interceptor.fulfilled, interceptor.rejected);
  });

  this.interceptors.response.forEach(function pushResponseInterceptors(interceptor) {
    chain.push(interceptor.fulfilled, interceptor.rejected);
  });

  while (chain.length) {
    promise = promise.then(chain.shift(), chain.shift());
  }

  return promise;
};

Axios.prototype.getUri = function getUri(config) {
  config = mergeConfig(this.defaults, config);
  return buildURL(config.url, config.params, config.paramsSerializer).replace(/^\?/, '');
};

// Provide aliases for supported request methods
utils.forEach(['delete', 'get', 'head', 'options'], function forEachMethodNoData(method) {
  /*eslint func-names:0*/
  Axios.prototype[method] = function(url, config) {
    return this.request(utils.merge(config || {}, {
      method: method,
      url: url
    }));
  };
});

utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
  /*eslint func-names:0*/
  Axios.prototype[method] = function(url, data, config) {
    return this.request(utils.merge(config || {}, {
      method: method,
      url: url,
      data: data
    }));
  };
});

module.exports = Axios;


/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0);

function InterceptorManager() {
  this.handlers = [];
}

/**
 * Add a new interceptor to the stack
 *
 * @param {Function} fulfilled The function to handle `then` for a `Promise`
 * @param {Function} rejected The function to handle `reject` for a `Promise`
 *
 * @return {Number} An ID used to remove interceptor later
 */
InterceptorManager.prototype.use = function use(fulfilled, rejected) {
  this.handlers.push({
    fulfilled: fulfilled,
    rejected: rejected
  });
  return this.handlers.length - 1;
};

/**
 * Remove an interceptor from the stack
 *
 * @param {Number} id The ID that was returned by `use`
 */
InterceptorManager.prototype.eject = function eject(id) {
  if (this.handlers[id]) {
    this.handlers[id] = null;
  }
};

/**
 * Iterate over all the registered interceptors
 *
 * This method is particularly useful for skipping over any
 * interceptors that may have become `null` calling `eject`.
 *
 * @param {Function} fn The function to call for each interceptor
 */
InterceptorManager.prototype.forEach = function forEach(fn) {
  utils.forEach(this.handlers, function forEachHandler(h) {
    if (h !== null) {
      fn(h);
    }
  });
};

module.exports = InterceptorManager;


/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0);
var transformData = __webpack_require__(24);
var isCancel = __webpack_require__(4);
var defaults = __webpack_require__(5);

/**
 * Throws a `Cancel` if cancellation has been requested.
 */
function throwIfCancellationRequested(config) {
  if (config.cancelToken) {
    config.cancelToken.throwIfRequested();
  }
}

/**
 * Dispatch a request to the server using the configured adapter.
 *
 * @param {object} config The config that is to be used for the request
 * @returns {Promise} The Promise to be fulfilled
 */
module.exports = function dispatchRequest(config) {
  throwIfCancellationRequested(config);

  // Ensure headers exist
  config.headers = config.headers || {};

  // Transform request data
  config.data = transformData(
    config.data,
    config.headers,
    config.transformRequest
  );

  // Flatten headers
  config.headers = utils.merge(
    config.headers.common || {},
    config.headers[config.method] || {},
    config.headers
  );

  utils.forEach(
    ['delete', 'get', 'head', 'post', 'put', 'patch', 'common'],
    function cleanHeaderConfig(method) {
      delete config.headers[method];
    }
  );

  var adapter = config.adapter || defaults.adapter;

  return adapter(config).then(function onAdapterResolution(response) {
    throwIfCancellationRequested(config);

    // Transform response data
    response.data = transformData(
      response.data,
      response.headers,
      config.transformResponse
    );

    return response;
  }, function onAdapterRejection(reason) {
    if (!isCancel(reason)) {
      throwIfCancellationRequested(config);

      // Transform response data
      if (reason && reason.response) {
        reason.response.data = transformData(
          reason.response.data,
          reason.response.headers,
          config.transformResponse
        );
      }
    }

    return Promise.reject(reason);
  });
};


/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0);

/**
 * Transform the data for a request or a response
 *
 * @param {Object|String} data The data to be transformed
 * @param {Array} headers The headers for the request or response
 * @param {Array|Function} fns A single function or Array of functions
 * @returns {*} The resulting transformed data
 */
module.exports = function transformData(data, headers, fns) {
  /*eslint no-param-reassign:0*/
  utils.forEach(fns, function transform(fn) {
    data = fn(data, headers);
  });

  return data;
};


/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0);

module.exports = function normalizeHeaderName(headers, normalizedName) {
  utils.forEach(headers, function processHeader(value, name) {
    if (name !== normalizedName && name.toUpperCase() === normalizedName.toUpperCase()) {
      headers[normalizedName] = value;
      delete headers[name];
    }
  });
};


/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0);
var settle = __webpack_require__(6);
var buildURL = __webpack_require__(1);
var buildFullPath = __webpack_require__(8);
var parseHeaders = __webpack_require__(29);
var isURLSameOrigin = __webpack_require__(30);
var createError = __webpack_require__(2);

module.exports = function xhrAdapter(config) {
  return new Promise(function dispatchXhrRequest(resolve, reject) {
    var requestData = config.data;
    var requestHeaders = config.headers;

    if (utils.isFormData(requestData)) {
      delete requestHeaders['Content-Type']; // Let the browser set it
    }

    var request = new XMLHttpRequest();

    // HTTP basic authentication
    if (config.auth) {
      var username = config.auth.username || '';
      var password = config.auth.password || '';
      requestHeaders.Authorization = 'Basic ' + btoa(username + ':' + password);
    }

    var fullPath = buildFullPath(config.baseURL, config.url);
    request.open(config.method.toUpperCase(), buildURL(fullPath, config.params, config.paramsSerializer), true);

    // Set the request timeout in MS
    request.timeout = config.timeout;

    // Listen for ready state
    request.onreadystatechange = function handleLoad() {
      if (!request || request.readyState !== 4) {
        return;
      }

      // The request errored out and we didn't get a response, this will be
      // handled by onerror instead
      // With one exception: request that using file: protocol, most browsers
      // will return status as 0 even though it's a successful request
      if (request.status === 0 && !(request.responseURL && request.responseURL.indexOf('file:') === 0)) {
        return;
      }

      // Prepare the response
      var responseHeaders = 'getAllResponseHeaders' in request ? parseHeaders(request.getAllResponseHeaders()) : null;
      var responseData = !config.responseType || config.responseType === 'text' ? request.responseText : request.response;
      var response = {
        data: responseData,
        status: request.status,
        statusText: request.statusText,
        headers: responseHeaders,
        config: config,
        request: request
      };

      settle(resolve, reject, response);

      // Clean up request
      request = null;
    };

    // Handle browser request cancellation (as opposed to a manual cancellation)
    request.onabort = function handleAbort() {
      if (!request) {
        return;
      }

      reject(createError('Request aborted', config, 'ECONNABORTED', request));

      // Clean up request
      request = null;
    };

    // Handle low level network errors
    request.onerror = function handleError() {
      // Real errors are hidden from us by the browser
      // onerror should only fire if it's a network error
      reject(createError('Network Error', config, null, request));

      // Clean up request
      request = null;
    };

    // Handle timeout
    request.ontimeout = function handleTimeout() {
      var timeoutErrorMessage = 'timeout of ' + config.timeout + 'ms exceeded';
      if (config.timeoutErrorMessage) {
        timeoutErrorMessage = config.timeoutErrorMessage;
      }
      reject(createError(timeoutErrorMessage, config, 'ECONNABORTED',
        request));

      // Clean up request
      request = null;
    };

    // Add xsrf header
    // This is only done if running in a standard browser environment.
    // Specifically not if we're in a web worker, or react-native.
    if (utils.isStandardBrowserEnv()) {
      var cookies = __webpack_require__(31);

      // Add xsrf header
      var xsrfValue = (config.withCredentials || isURLSameOrigin(fullPath)) && config.xsrfCookieName ?
        cookies.read(config.xsrfCookieName) :
        undefined;

      if (xsrfValue) {
        requestHeaders[config.xsrfHeaderName] = xsrfValue;
      }
    }

    // Add headers to the request
    if ('setRequestHeader' in request) {
      utils.forEach(requestHeaders, function setRequestHeader(val, key) {
        if (typeof requestData === 'undefined' && key.toLowerCase() === 'content-type') {
          // Remove Content-Type if data is undefined
          delete requestHeaders[key];
        } else {
          // Otherwise add header to the request
          request.setRequestHeader(key, val);
        }
      });
    }

    // Add withCredentials to request if needed
    if (!utils.isUndefined(config.withCredentials)) {
      request.withCredentials = !!config.withCredentials;
    }

    // Add responseType to request if needed
    if (config.responseType) {
      try {
        request.responseType = config.responseType;
      } catch (e) {
        // Expected DOMException thrown by browsers not compatible XMLHttpRequest Level 2.
        // But, this can be suppressed for 'json' type as it can be parsed by default 'transformResponse' function.
        if (config.responseType !== 'json') {
          throw e;
        }
      }
    }

    // Handle progress if needed
    if (typeof config.onDownloadProgress === 'function') {
      request.addEventListener('progress', config.onDownloadProgress);
    }

    // Not all browsers support upload events
    if (typeof config.onUploadProgress === 'function' && request.upload) {
      request.upload.addEventListener('progress', config.onUploadProgress);
    }

    if (config.cancelToken) {
      // Handle cancellation
      config.cancelToken.promise.then(function onCanceled(cancel) {
        if (!request) {
          return;
        }

        request.abort();
        reject(cancel);
        // Clean up request
        request = null;
      });
    }

    if (requestData === undefined) {
      requestData = null;
    }

    // Send the request
    request.send(requestData);
  });
};


/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Determines whether the specified URL is absolute
 *
 * @param {string} url The URL to test
 * @returns {boolean} True if the specified URL is absolute, otherwise false
 */
module.exports = function isAbsoluteURL(url) {
  // A URL is considered absolute if it begins with "<scheme>://" or "//" (protocol-relative URL).
  // RFC 3986 defines scheme name as a sequence of characters beginning with a letter and followed
  // by any combination of letters, digits, plus, period, or hyphen.
  return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(url);
};


/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Creates a new URL by combining the specified URLs
 *
 * @param {string} baseURL The base URL
 * @param {string} relativeURL The relative URL
 * @returns {string} The combined URL
 */
module.exports = function combineURLs(baseURL, relativeURL) {
  return relativeURL
    ? baseURL.replace(/\/+$/, '') + '/' + relativeURL.replace(/^\/+/, '')
    : baseURL;
};


/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0);

// Headers whose duplicates are ignored by node
// c.f. https://nodejs.org/api/http.html#http_message_headers
var ignoreDuplicateOf = [
  'age', 'authorization', 'content-length', 'content-type', 'etag',
  'expires', 'from', 'host', 'if-modified-since', 'if-unmodified-since',
  'last-modified', 'location', 'max-forwards', 'proxy-authorization',
  'referer', 'retry-after', 'user-agent'
];

/**
 * Parse headers into an object
 *
 * ```
 * Date: Wed, 27 Aug 2014 08:58:49 GMT
 * Content-Type: application/json
 * Connection: keep-alive
 * Transfer-Encoding: chunked
 * ```
 *
 * @param {String} headers Headers needing to be parsed
 * @returns {Object} Headers parsed into an object
 */
module.exports = function parseHeaders(headers) {
  var parsed = {};
  var key;
  var val;
  var i;

  if (!headers) { return parsed; }

  utils.forEach(headers.split('\n'), function parser(line) {
    i = line.indexOf(':');
    key = utils.trim(line.substr(0, i)).toLowerCase();
    val = utils.trim(line.substr(i + 1));

    if (key) {
      if (parsed[key] && ignoreDuplicateOf.indexOf(key) >= 0) {
        return;
      }
      if (key === 'set-cookie') {
        parsed[key] = (parsed[key] ? parsed[key] : []).concat([val]);
      } else {
        parsed[key] = parsed[key] ? parsed[key] + ', ' + val : val;
      }
    }
  });

  return parsed;
};


/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0);

module.exports = (
  utils.isStandardBrowserEnv() ?

  // Standard browser envs have full support of the APIs needed to test
  // whether the request URL is of the same origin as current location.
    (function standardBrowserEnv() {
      var msie = /(msie|trident)/i.test(navigator.userAgent);
      var urlParsingNode = document.createElement('a');
      var originURL;

      /**
    * Parse a URL to discover it's components
    *
    * @param {String} url The URL to be parsed
    * @returns {Object}
    */
      function resolveURL(url) {
        var href = url;

        if (msie) {
        // IE needs attribute set twice to normalize properties
          urlParsingNode.setAttribute('href', href);
          href = urlParsingNode.href;
        }

        urlParsingNode.setAttribute('href', href);

        // urlParsingNode provides the UrlUtils interface - http://url.spec.whatwg.org/#urlutils
        return {
          href: urlParsingNode.href,
          protocol: urlParsingNode.protocol ? urlParsingNode.protocol.replace(/:$/, '') : '',
          host: urlParsingNode.host,
          search: urlParsingNode.search ? urlParsingNode.search.replace(/^\?/, '') : '',
          hash: urlParsingNode.hash ? urlParsingNode.hash.replace(/^#/, '') : '',
          hostname: urlParsingNode.hostname,
          port: urlParsingNode.port,
          pathname: (urlParsingNode.pathname.charAt(0) === '/') ?
            urlParsingNode.pathname :
            '/' + urlParsingNode.pathname
        };
      }

      originURL = resolveURL(window.location.href);

      /**
    * Determine if a URL shares the same origin as the current location
    *
    * @param {String} requestURL The URL to test
    * @returns {boolean} True if URL shares the same origin, otherwise false
    */
      return function isURLSameOrigin(requestURL) {
        var parsed = (utils.isString(requestURL)) ? resolveURL(requestURL) : requestURL;
        return (parsed.protocol === originURL.protocol &&
            parsed.host === originURL.host);
      };
    })() :

  // Non standard browser envs (web workers, react-native) lack needed support.
    (function nonStandardBrowserEnv() {
      return function isURLSameOrigin() {
        return true;
      };
    })()
);


/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0);

module.exports = (
  utils.isStandardBrowserEnv() ?

  // Standard browser envs support document.cookie
    (function standardBrowserEnv() {
      return {
        write: function write(name, value, expires, path, domain, secure) {
          var cookie = [];
          cookie.push(name + '=' + encodeURIComponent(value));

          if (utils.isNumber(expires)) {
            cookie.push('expires=' + new Date(expires).toGMTString());
          }

          if (utils.isString(path)) {
            cookie.push('path=' + path);
          }

          if (utils.isString(domain)) {
            cookie.push('domain=' + domain);
          }

          if (secure === true) {
            cookie.push('secure');
          }

          document.cookie = cookie.join('; ');
        },

        read: function read(name) {
          var match = document.cookie.match(new RegExp('(^|;\\s*)(' + name + ')=([^;]*)'));
          return (match ? decodeURIComponent(match[3]) : null);
        },

        remove: function remove(name) {
          this.write(name, '', Date.now() - 86400000);
        }
      };
    })() :

  // Non standard browser env (web workers, react-native) lack needed support.
    (function nonStandardBrowserEnv() {
      return {
        write: function write() {},
        read: function read() { return null; },
        remove: function remove() {}
      };
    })()
);


/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0);
var settle = __webpack_require__(6);
var buildFullPath = __webpack_require__(8);
var buildURL = __webpack_require__(1);
var http = __webpack_require__(9);
var https = __webpack_require__(10);
var httpFollow = __webpack_require__(11).http;
var httpsFollow = __webpack_require__(11).https;
var url = __webpack_require__(12);
var zlib = __webpack_require__(44);
var pkg = __webpack_require__(45);
var createError = __webpack_require__(2);
var enhanceError = __webpack_require__(7);

var isHttps = /https:?/;

/*eslint consistent-return:0*/
module.exports = function httpAdapter(config) {
  return new Promise(function dispatchHttpRequest(resolvePromise, rejectPromise) {
    var resolve = function resolve(value) {
      resolvePromise(value);
    };
    var reject = function reject(value) {
      rejectPromise(value);
    };
    var data = config.data;
    var headers = config.headers;

    // Set User-Agent (required by some servers)
    // Only set header if it hasn't been set in config
    // See https://github.com/axios/axios/issues/69
    if (!headers['User-Agent'] && !headers['user-agent']) {
      headers['User-Agent'] = 'axios/' + pkg.version;
    }

    if (data && !utils.isStream(data)) {
      if (Buffer.isBuffer(data)) {
        // Nothing to do...
      } else if (utils.isArrayBuffer(data)) {
        data = Buffer.from(new Uint8Array(data));
      } else if (utils.isString(data)) {
        data = Buffer.from(data, 'utf-8');
      } else {
        return reject(createError(
          'Data after transformation must be a string, an ArrayBuffer, a Buffer, or a Stream',
          config
        ));
      }

      // Add Content-Length header if data exists
      headers['Content-Length'] = data.length;
    }

    // HTTP basic authentication
    var auth = undefined;
    if (config.auth) {
      var username = config.auth.username || '';
      var password = config.auth.password || '';
      auth = username + ':' + password;
    }

    // Parse url
    var fullPath = buildFullPath(config.baseURL, config.url);
    var parsed = url.parse(fullPath);
    var protocol = parsed.protocol || 'http:';

    if (!auth && parsed.auth) {
      var urlAuth = parsed.auth.split(':');
      var urlUsername = urlAuth[0] || '';
      var urlPassword = urlAuth[1] || '';
      auth = urlUsername + ':' + urlPassword;
    }

    if (auth) {
      delete headers.Authorization;
    }

    var isHttpsRequest = isHttps.test(protocol);
    var agent = isHttpsRequest ? config.httpsAgent : config.httpAgent;

    var options = {
      path: buildURL(parsed.path, config.params, config.paramsSerializer).replace(/^\?/, ''),
      method: config.method.toUpperCase(),
      headers: headers,
      agent: agent,
      agents: { http: config.httpAgent, https: config.httpsAgent },
      auth: auth
    };

    if (config.socketPath) {
      options.socketPath = config.socketPath;
    } else {
      options.hostname = parsed.hostname;
      options.port = parsed.port;
    }

    var proxy = config.proxy;
    if (!proxy && proxy !== false) {
      var proxyEnv = protocol.slice(0, -1) + '_proxy';
      var proxyUrl = process.env[proxyEnv] || process.env[proxyEnv.toUpperCase()];
      if (proxyUrl) {
        var parsedProxyUrl = url.parse(proxyUrl);
        var noProxyEnv = process.env.no_proxy || process.env.NO_PROXY;
        var shouldProxy = true;

        if (noProxyEnv) {
          var noProxy = noProxyEnv.split(',').map(function trim(s) {
            return s.trim();
          });

          shouldProxy = !noProxy.some(function proxyMatch(proxyElement) {
            if (!proxyElement) {
              return false;
            }
            if (proxyElement === '*') {
              return true;
            }
            if (proxyElement[0] === '.' &&
                parsed.hostname.substr(parsed.hostname.length - proxyElement.length) === proxyElement) {
              return true;
            }

            return parsed.hostname === proxyElement;
          });
        }


        if (shouldProxy) {
          proxy = {
            host: parsedProxyUrl.hostname,
            port: parsedProxyUrl.port
          };

          if (parsedProxyUrl.auth) {
            var proxyUrlAuth = parsedProxyUrl.auth.split(':');
            proxy.auth = {
              username: proxyUrlAuth[0],
              password: proxyUrlAuth[1]
            };
          }
        }
      }
    }

    if (proxy) {
      options.hostname = proxy.host;
      options.host = proxy.host;
      options.headers.host = parsed.hostname + (parsed.port ? ':' + parsed.port : '');
      options.port = proxy.port;
      options.path = protocol + '//' + parsed.hostname + (parsed.port ? ':' + parsed.port : '') + options.path;

      // Basic proxy authorization
      if (proxy.auth) {
        var base64 = Buffer.from(proxy.auth.username + ':' + proxy.auth.password, 'utf8').toString('base64');
        options.headers['Proxy-Authorization'] = 'Basic ' + base64;
      }
    }

    var transport;
    var isHttpsProxy = isHttpsRequest && (proxy ? isHttps.test(proxy.protocol) : true);
    if (config.transport) {
      transport = config.transport;
    } else if (config.maxRedirects === 0) {
      transport = isHttpsProxy ? https : http;
    } else {
      if (config.maxRedirects) {
        options.maxRedirects = config.maxRedirects;
      }
      transport = isHttpsProxy ? httpsFollow : httpFollow;
    }

    if (config.maxContentLength && config.maxContentLength > -1) {
      options.maxBodyLength = config.maxContentLength;
    }

    // Create the request
    var req = transport.request(options, function handleResponse(res) {
      if (req.aborted) return;

      // uncompress the response body transparently if required
      var stream = res;
      switch (res.headers['content-encoding']) {
      /*eslint default-case:0*/
      case 'gzip':
      case 'compress':
      case 'deflate':
        // add the unzipper to the body stream processing pipeline
        stream = (res.statusCode === 204) ? stream : stream.pipe(zlib.createUnzip());

        // remove the content-encoding in order to not confuse downstream operations
        delete res.headers['content-encoding'];
        break;
      }

      // return the last request in case of redirects
      var lastRequest = res.req || req;

      var response = {
        status: res.statusCode,
        statusText: res.statusMessage,
        headers: res.headers,
        config: config,
        request: lastRequest
      };

      if (config.responseType === 'stream') {
        response.data = stream;
        settle(resolve, reject, response);
      } else {
        var responseBuffer = [];
        stream.on('data', function handleStreamData(chunk) {
          responseBuffer.push(chunk);

          // make sure the content length is not over the maxContentLength if specified
          if (config.maxContentLength > -1 && Buffer.concat(responseBuffer).length > config.maxContentLength) {
            stream.destroy();
            reject(createError('maxContentLength size of ' + config.maxContentLength + ' exceeded',
              config, null, lastRequest));
          }
        });

        stream.on('error', function handleStreamError(err) {
          if (req.aborted) return;
          reject(enhanceError(err, config, null, lastRequest));
        });

        stream.on('end', function handleStreamEnd() {
          var responseData = Buffer.concat(responseBuffer);
          if (config.responseType !== 'arraybuffer') {
            responseData = responseData.toString(config.responseEncoding);
          }

          response.data = responseData;
          settle(resolve, reject, response);
        });
      }
    });

    // Handle errors
    req.on('error', function handleRequestError(err) {
      if (req.aborted) return;
      reject(enhanceError(err, config, null, req));
    });

    // Handle request timeout
    if (config.timeout) {
      // Sometime, the response will be very slow, and does not respond, the connect event will be block by event loop system.
      // And timer callback will be fired, and abort() will be invoked before connection, then get "socket hang up" and code ECONNRESET.
      // At this time, if we have a large number of request, nodejs will hang up some socket on background. and the number will up and up.
      // And then these socket which be hang up will devoring CPU little by little.
      // ClientRequest.setTimeout will be fired on the specify milliseconds, and can make sure that abort() will be fired after connect.
      req.setTimeout(config.timeout, function handleRequestTimeout() {
        req.abort();
        reject(createError('timeout of ' + config.timeout + 'ms exceeded', config, 'ECONNABORTED', req));
      });
    }

    if (config.cancelToken) {
      // Handle cancellation
      config.cancelToken.promise.then(function onCanceled(cancel) {
        if (req.aborted) return;

        req.abort();
        reject(cancel);
      });
    }

    // Send the request
    if (utils.isStream(data)) {
      data.on('error', function handleStreamError(err) {
        reject(enhanceError(err, config, null, req));
      }).pipe(req);
    } else {
      req.end(data);
    }
  });
};


/***/ }),
/* 33 */
/***/ (function(module, exports) {

module.exports = require("assert");

/***/ }),
/* 34 */
/***/ (function(module, exports) {

module.exports = require("stream");

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Detect Electron renderer process, which is node, but we should
 * treat as a browser.
 */

if (typeof process === 'undefined' || process.type === 'renderer') {
  module.exports = __webpack_require__(36);
} else {
  module.exports = __webpack_require__(38);
}


/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * This is the web browser implementation of `debug()`.
 *
 * Expose `debug()` as the module.
 */

exports = module.exports = __webpack_require__(13);
exports.log = log;
exports.formatArgs = formatArgs;
exports.save = save;
exports.load = load;
exports.useColors = useColors;
exports.storage = 'undefined' != typeof chrome
               && 'undefined' != typeof chrome.storage
                  ? chrome.storage.local
                  : localstorage();

/**
 * Colors.
 */

exports.colors = [
  '#0000CC', '#0000FF', '#0033CC', '#0033FF', '#0066CC', '#0066FF', '#0099CC',
  '#0099FF', '#00CC00', '#00CC33', '#00CC66', '#00CC99', '#00CCCC', '#00CCFF',
  '#3300CC', '#3300FF', '#3333CC', '#3333FF', '#3366CC', '#3366FF', '#3399CC',
  '#3399FF', '#33CC00', '#33CC33', '#33CC66', '#33CC99', '#33CCCC', '#33CCFF',
  '#6600CC', '#6600FF', '#6633CC', '#6633FF', '#66CC00', '#66CC33', '#9900CC',
  '#9900FF', '#9933CC', '#9933FF', '#99CC00', '#99CC33', '#CC0000', '#CC0033',
  '#CC0066', '#CC0099', '#CC00CC', '#CC00FF', '#CC3300', '#CC3333', '#CC3366',
  '#CC3399', '#CC33CC', '#CC33FF', '#CC6600', '#CC6633', '#CC9900', '#CC9933',
  '#CCCC00', '#CCCC33', '#FF0000', '#FF0033', '#FF0066', '#FF0099', '#FF00CC',
  '#FF00FF', '#FF3300', '#FF3333', '#FF3366', '#FF3399', '#FF33CC', '#FF33FF',
  '#FF6600', '#FF6633', '#FF9900', '#FF9933', '#FFCC00', '#FFCC33'
];

/**
 * Currently only WebKit-based Web Inspectors, Firefox >= v31,
 * and the Firebug extension (any Firefox version) are known
 * to support "%c" CSS customizations.
 *
 * TODO: add a `localStorage` variable to explicitly enable/disable colors
 */

function useColors() {
  // NB: In an Electron preload script, document will be defined but not fully
  // initialized. Since we know we're in Chrome, we'll just detect this case
  // explicitly
  if (typeof window !== 'undefined' && window.process && window.process.type === 'renderer') {
    return true;
  }

  // Internet Explorer and Edge do not support colors.
  if (typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/)) {
    return false;
  }

  // is webkit? http://stackoverflow.com/a/16459606/376773
  // document is undefined in react-native: https://github.com/facebook/react-native/pull/1632
  return (typeof document !== 'undefined' && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance) ||
    // is firebug? http://stackoverflow.com/a/398120/376773
    (typeof window !== 'undefined' && window.console && (window.console.firebug || (window.console.exception && window.console.table))) ||
    // is firefox >= v31?
    // https://developer.mozilla.org/en-US/docs/Tools/Web_Console#Styling_messages
    (typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31) ||
    // double check webkit in userAgent just in case we are in a worker
    (typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/));
}

/**
 * Map %j to `JSON.stringify()`, since no Web Inspectors do that by default.
 */

exports.formatters.j = function(v) {
  try {
    return JSON.stringify(v);
  } catch (err) {
    return '[UnexpectedJSONParseError]: ' + err.message;
  }
};


/**
 * Colorize log arguments if enabled.
 *
 * @api public
 */

function formatArgs(args) {
  var useColors = this.useColors;

  args[0] = (useColors ? '%c' : '')
    + this.namespace
    + (useColors ? ' %c' : ' ')
    + args[0]
    + (useColors ? '%c ' : ' ')
    + '+' + exports.humanize(this.diff);

  if (!useColors) return;

  var c = 'color: ' + this.color;
  args.splice(1, 0, c, 'color: inherit')

  // the final "%c" is somewhat tricky, because there could be other
  // arguments passed either before or after the %c, so we need to
  // figure out the correct index to insert the CSS into
  var index = 0;
  var lastC = 0;
  args[0].replace(/%[a-zA-Z%]/g, function(match) {
    if ('%%' === match) return;
    index++;
    if ('%c' === match) {
      // we only are interested in the *last* %c
      // (the user may have provided their own)
      lastC = index;
    }
  });

  args.splice(lastC, 0, c);
}

/**
 * Invokes `console.log()` when available.
 * No-op when `console.log` is not a "function".
 *
 * @api public
 */

function log() {
  // this hackery is required for IE8/9, where
  // the `console.log` function doesn't have 'apply'
  return 'object' === typeof console
    && console.log
    && Function.prototype.apply.call(console.log, console, arguments);
}

/**
 * Save `namespaces`.
 *
 * @param {String} namespaces
 * @api private
 */

function save(namespaces) {
  try {
    if (null == namespaces) {
      exports.storage.removeItem('debug');
    } else {
      exports.storage.debug = namespaces;
    }
  } catch(e) {}
}

/**
 * Load `namespaces`.
 *
 * @return {String} returns the previously persisted debug modes
 * @api private
 */

function load() {
  var r;
  try {
    r = exports.storage.debug;
  } catch(e) {}

  // If debug isn't set in LS, and we're in Electron, try to load $DEBUG
  if (!r && typeof process !== 'undefined' && 'env' in process) {
    r = process.env.DEBUG;
  }

  return r;
}

/**
 * Enable namespaces listed in `localStorage.debug` initially.
 */

exports.enable(load());

/**
 * Localstorage attempts to return the localstorage.
 *
 * This is necessary because safari throws
 * when a user disables cookies/localstorage
 * and you attempt to access it.
 *
 * @return {LocalStorage}
 * @api private
 */

function localstorage() {
  try {
    return window.localStorage;
  } catch (e) {}
}


/***/ }),
/* 37 */
/***/ (function(module, exports) {

/**
 * Helpers.
 */

var s = 1000;
var m = s * 60;
var h = m * 60;
var d = h * 24;
var y = d * 365.25;

/**
 * Parse or format the given `val`.
 *
 * Options:
 *
 *  - `long` verbose formatting [false]
 *
 * @param {String|Number} val
 * @param {Object} [options]
 * @throws {Error} throw an error if val is not a non-empty string or a number
 * @return {String|Number}
 * @api public
 */

module.exports = function(val, options) {
  options = options || {};
  var type = typeof val;
  if (type === 'string' && val.length > 0) {
    return parse(val);
  } else if (type === 'number' && isNaN(val) === false) {
    return options.long ? fmtLong(val) : fmtShort(val);
  }
  throw new Error(
    'val is not a non-empty string or a valid number. val=' +
      JSON.stringify(val)
  );
};

/**
 * Parse the given `str` and return milliseconds.
 *
 * @param {String} str
 * @return {Number}
 * @api private
 */

function parse(str) {
  str = String(str);
  if (str.length > 100) {
    return;
  }
  var match = /^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(
    str
  );
  if (!match) {
    return;
  }
  var n = parseFloat(match[1]);
  var type = (match[2] || 'ms').toLowerCase();
  switch (type) {
    case 'years':
    case 'year':
    case 'yrs':
    case 'yr':
    case 'y':
      return n * y;
    case 'days':
    case 'day':
    case 'd':
      return n * d;
    case 'hours':
    case 'hour':
    case 'hrs':
    case 'hr':
    case 'h':
      return n * h;
    case 'minutes':
    case 'minute':
    case 'mins':
    case 'min':
    case 'm':
      return n * m;
    case 'seconds':
    case 'second':
    case 'secs':
    case 'sec':
    case 's':
      return n * s;
    case 'milliseconds':
    case 'millisecond':
    case 'msecs':
    case 'msec':
    case 'ms':
      return n;
    default:
      return undefined;
  }
}

/**
 * Short format for `ms`.
 *
 * @param {Number} ms
 * @return {String}
 * @api private
 */

function fmtShort(ms) {
  if (ms >= d) {
    return Math.round(ms / d) + 'd';
  }
  if (ms >= h) {
    return Math.round(ms / h) + 'h';
  }
  if (ms >= m) {
    return Math.round(ms / m) + 'm';
  }
  if (ms >= s) {
    return Math.round(ms / s) + 's';
  }
  return ms + 'ms';
}

/**
 * Long format for `ms`.
 *
 * @param {Number} ms
 * @return {String}
 * @api private
 */

function fmtLong(ms) {
  return plural(ms, d, 'day') ||
    plural(ms, h, 'hour') ||
    plural(ms, m, 'minute') ||
    plural(ms, s, 'second') ||
    ms + ' ms';
}

/**
 * Pluralization helper.
 */

function plural(ms, n, name) {
  if (ms < n) {
    return;
  }
  if (ms < n * 1.5) {
    return Math.floor(ms / n) + ' ' + name;
  }
  return Math.ceil(ms / n) + ' ' + name + 's';
}


/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Module dependencies.
 */

var tty = __webpack_require__(39);
var util = __webpack_require__(40);

/**
 * This is the Node.js implementation of `debug()`.
 *
 * Expose `debug()` as the module.
 */

exports = module.exports = __webpack_require__(13);
exports.init = init;
exports.log = log;
exports.formatArgs = formatArgs;
exports.save = save;
exports.load = load;
exports.useColors = useColors;

/**
 * Colors.
 */

exports.colors = [ 6, 2, 3, 4, 5, 1 ];

try {
  var supportsColor = __webpack_require__(41);
  if (supportsColor && supportsColor.level >= 2) {
    exports.colors = [
      20, 21, 26, 27, 32, 33, 38, 39, 40, 41, 42, 43, 44, 45, 56, 57, 62, 63, 68,
      69, 74, 75, 76, 77, 78, 79, 80, 81, 92, 93, 98, 99, 112, 113, 128, 129, 134,
      135, 148, 149, 160, 161, 162, 163, 164, 165, 166, 167, 168, 169, 170, 171,
      172, 173, 178, 179, 184, 185, 196, 197, 198, 199, 200, 201, 202, 203, 204,
      205, 206, 207, 208, 209, 214, 215, 220, 221
    ];
  }
} catch (err) {
  // swallow - we only care if `supports-color` is available; it doesn't have to be.
}

/**
 * Build up the default `inspectOpts` object from the environment variables.
 *
 *   $ DEBUG_COLORS=no DEBUG_DEPTH=10 DEBUG_SHOW_HIDDEN=enabled node script.js
 */

exports.inspectOpts = Object.keys(process.env).filter(function (key) {
  return /^debug_/i.test(key);
}).reduce(function (obj, key) {
  // camel-case
  var prop = key
    .substring(6)
    .toLowerCase()
    .replace(/_([a-z])/g, function (_, k) { return k.toUpperCase() });

  // coerce string value into JS value
  var val = process.env[key];
  if (/^(yes|on|true|enabled)$/i.test(val)) val = true;
  else if (/^(no|off|false|disabled)$/i.test(val)) val = false;
  else if (val === 'null') val = null;
  else val = Number(val);

  obj[prop] = val;
  return obj;
}, {});

/**
 * Is stdout a TTY? Colored output is enabled when `true`.
 */

function useColors() {
  return 'colors' in exports.inspectOpts
    ? Boolean(exports.inspectOpts.colors)
    : tty.isatty(process.stderr.fd);
}

/**
 * Map %o to `util.inspect()`, all on a single line.
 */

exports.formatters.o = function(v) {
  this.inspectOpts.colors = this.useColors;
  return util.inspect(v, this.inspectOpts)
    .split('\n').map(function(str) {
      return str.trim()
    }).join(' ');
};

/**
 * Map %o to `util.inspect()`, allowing multiple lines if needed.
 */

exports.formatters.O = function(v) {
  this.inspectOpts.colors = this.useColors;
  return util.inspect(v, this.inspectOpts);
};

/**
 * Adds ANSI color escape codes if enabled.
 *
 * @api public
 */

function formatArgs(args) {
  var name = this.namespace;
  var useColors = this.useColors;

  if (useColors) {
    var c = this.color;
    var colorCode = '\u001b[3' + (c < 8 ? c : '8;5;' + c);
    var prefix = '  ' + colorCode + ';1m' + name + ' ' + '\u001b[0m';

    args[0] = prefix + args[0].split('\n').join('\n' + prefix);
    args.push(colorCode + 'm+' + exports.humanize(this.diff) + '\u001b[0m');
  } else {
    args[0] = getDate() + name + ' ' + args[0];
  }
}

function getDate() {
  if (exports.inspectOpts.hideDate) {
    return '';
  } else {
    return new Date().toISOString() + ' ';
  }
}

/**
 * Invokes `util.format()` with the specified arguments and writes to stderr.
 */

function log() {
  return process.stderr.write(util.format.apply(util, arguments) + '\n');
}

/**
 * Save `namespaces`.
 *
 * @param {String} namespaces
 * @api private
 */

function save(namespaces) {
  if (null == namespaces) {
    // If you set a process.env field to null or undefined, it gets cast to the
    // string 'null' or 'undefined'. Just delete instead.
    delete process.env.DEBUG;
  } else {
    process.env.DEBUG = namespaces;
  }
}

/**
 * Load `namespaces`.
 *
 * @return {String} returns the previously persisted debug modes
 * @api private
 */

function load() {
  return process.env.DEBUG;
}

/**
 * Init logic for `debug` instances.
 *
 * Create a new `inspectOpts` object in case `useColors` is set
 * differently for a particular `debug` instance.
 */

function init (debug) {
  debug.inspectOpts = {};

  var keys = Object.keys(exports.inspectOpts);
  for (var i = 0; i < keys.length; i++) {
    debug.inspectOpts[keys[i]] = exports.inspectOpts[keys[i]];
  }
}

/**
 * Enable namespaces listed in `process.env.DEBUG` initially.
 */

exports.enable(load());


/***/ }),
/* 39 */
/***/ (function(module, exports) {

module.exports = require("tty");

/***/ }),
/* 40 */
/***/ (function(module, exports) {

module.exports = require("util");

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

const os = __webpack_require__(42);
const hasFlag = __webpack_require__(43);

const env = process.env;

let forceColor;
if (hasFlag('no-color') ||
	hasFlag('no-colors') ||
	hasFlag('color=false')) {
	forceColor = false;
} else if (hasFlag('color') ||
	hasFlag('colors') ||
	hasFlag('color=true') ||
	hasFlag('color=always')) {
	forceColor = true;
}
if ('FORCE_COLOR' in env) {
	forceColor = env.FORCE_COLOR.length === 0 || parseInt(env.FORCE_COLOR, 10) !== 0;
}

function translateLevel(level) {
	if (level === 0) {
		return false;
	}

	return {
		level,
		hasBasic: true,
		has256: level >= 2,
		has16m: level >= 3
	};
}

function supportsColor(stream) {
	if (forceColor === false) {
		return 0;
	}

	if (hasFlag('color=16m') ||
		hasFlag('color=full') ||
		hasFlag('color=truecolor')) {
		return 3;
	}

	if (hasFlag('color=256')) {
		return 2;
	}

	if (stream && !stream.isTTY && forceColor !== true) {
		return 0;
	}

	const min = forceColor ? 1 : 0;

	if (process.platform === 'win32') {
		// Node.js 7.5.0 is the first version of Node.js to include a patch to
		// libuv that enables 256 color output on Windows. Anything earlier and it
		// won't work. However, here we target Node.js 8 at minimum as it is an LTS
		// release, and Node.js 7 is not. Windows 10 build 10586 is the first Windows
		// release that supports 256 colors. Windows 10 build 14931 is the first release
		// that supports 16m/TrueColor.
		const osRelease = os.release().split('.');
		if (
			Number(process.versions.node.split('.')[0]) >= 8 &&
			Number(osRelease[0]) >= 10 &&
			Number(osRelease[2]) >= 10586
		) {
			return Number(osRelease[2]) >= 14931 ? 3 : 2;
		}

		return 1;
	}

	if ('CI' in env) {
		if (['TRAVIS', 'CIRCLECI', 'APPVEYOR', 'GITLAB_CI'].some(sign => sign in env) || env.CI_NAME === 'codeship') {
			return 1;
		}

		return min;
	}

	if ('TEAMCITY_VERSION' in env) {
		return /^(9\.(0*[1-9]\d*)\.|\d{2,}\.)/.test(env.TEAMCITY_VERSION) ? 1 : 0;
	}

	if (env.COLORTERM === 'truecolor') {
		return 3;
	}

	if ('TERM_PROGRAM' in env) {
		const version = parseInt((env.TERM_PROGRAM_VERSION || '').split('.')[0], 10);

		switch (env.TERM_PROGRAM) {
			case 'iTerm.app':
				return version >= 3 ? 3 : 2;
			case 'Apple_Terminal':
				return 2;
			// No default
		}
	}

	if (/-256(color)?$/i.test(env.TERM)) {
		return 2;
	}

	if (/^screen|^xterm|^vt100|^vt220|^rxvt|color|ansi|cygwin|linux/i.test(env.TERM)) {
		return 1;
	}

	if ('COLORTERM' in env) {
		return 1;
	}

	if (env.TERM === 'dumb') {
		return min;
	}

	return min;
}

function getSupportLevel(stream) {
	const level = supportsColor(stream);
	return translateLevel(level);
}

module.exports = {
	supportsColor: getSupportLevel,
	stdout: getSupportLevel(process.stdout),
	stderr: getSupportLevel(process.stderr)
};


/***/ }),
/* 42 */
/***/ (function(module, exports) {

module.exports = require("os");

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

module.exports = (flag, argv) => {
	argv = argv || process.argv;
	const prefix = flag.startsWith('-') ? '' : (flag.length === 1 ? '-' : '--');
	const pos = argv.indexOf(prefix + flag);
	const terminatorPos = argv.indexOf('--');
	return pos !== -1 && (terminatorPos === -1 ? true : pos < terminatorPos);
};


/***/ }),
/* 44 */
/***/ (function(module, exports) {

module.exports = require("zlib");

/***/ }),
/* 45 */
/***/ (function(module) {

module.exports = JSON.parse("{\"name\":\"axios\",\"version\":\"0.19.2\",\"description\":\"Promise based HTTP client for the browser and node.js\",\"main\":\"index.js\",\"scripts\":{\"test\":\"grunt test && bundlesize\",\"start\":\"node ./sandbox/server.js\",\"build\":\"NODE_ENV=production grunt build\",\"preversion\":\"npm test\",\"version\":\"npm run build && grunt version && git add -A dist && git add CHANGELOG.md bower.json package.json\",\"postversion\":\"git push && git push --tags\",\"examples\":\"node ./examples/server.js\",\"coveralls\":\"cat coverage/lcov.info | ./node_modules/coveralls/bin/coveralls.js\",\"fix\":\"eslint --fix lib/**/*.js\"},\"repository\":{\"type\":\"git\",\"url\":\"https://github.com/axios/axios.git\"},\"keywords\":[\"xhr\",\"http\",\"ajax\",\"promise\",\"node\"],\"author\":\"Matt Zabriskie\",\"license\":\"MIT\",\"bugs\":{\"url\":\"https://github.com/axios/axios/issues\"},\"homepage\":\"https://github.com/axios/axios\",\"devDependencies\":{\"bundlesize\":\"^0.17.0\",\"coveralls\":\"^3.0.0\",\"es6-promise\":\"^4.2.4\",\"grunt\":\"^1.0.2\",\"grunt-banner\":\"^0.6.0\",\"grunt-cli\":\"^1.2.0\",\"grunt-contrib-clean\":\"^1.1.0\",\"grunt-contrib-watch\":\"^1.0.0\",\"grunt-eslint\":\"^20.1.0\",\"grunt-karma\":\"^2.0.0\",\"grunt-mocha-test\":\"^0.13.3\",\"grunt-ts\":\"^6.0.0-beta.19\",\"grunt-webpack\":\"^1.0.18\",\"istanbul-instrumenter-loader\":\"^1.0.0\",\"jasmine-core\":\"^2.4.1\",\"karma\":\"^1.3.0\",\"karma-chrome-launcher\":\"^2.2.0\",\"karma-coverage\":\"^1.1.1\",\"karma-firefox-launcher\":\"^1.1.0\",\"karma-jasmine\":\"^1.1.1\",\"karma-jasmine-ajax\":\"^0.1.13\",\"karma-opera-launcher\":\"^1.0.0\",\"karma-safari-launcher\":\"^1.0.0\",\"karma-sauce-launcher\":\"^1.2.0\",\"karma-sinon\":\"^1.0.5\",\"karma-sourcemap-loader\":\"^0.3.7\",\"karma-webpack\":\"^1.7.0\",\"load-grunt-tasks\":\"^3.5.2\",\"minimist\":\"^1.2.0\",\"mocha\":\"^5.2.0\",\"sinon\":\"^4.5.0\",\"typescript\":\"^2.8.1\",\"url-search-params\":\"^0.10.0\",\"webpack\":\"^1.13.1\",\"webpack-dev-server\":\"^1.14.1\"},\"browser\":{\"./lib/adapters/http.js\":\"./lib/adapters/xhr.js\"},\"typings\":\"./index.d.ts\",\"dependencies\":{\"follow-redirects\":\"1.5.10\"},\"bundlesize\":[{\"path\":\"./dist/axios.min.js\",\"threshold\":\"5kB\"}]}");

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Cancel = __webpack_require__(15);

/**
 * A `CancelToken` is an object that can be used to request cancellation of an operation.
 *
 * @class
 * @param {Function} executor The executor function.
 */
function CancelToken(executor) {
  if (typeof executor !== 'function') {
    throw new TypeError('executor must be a function.');
  }

  var resolvePromise;
  this.promise = new Promise(function promiseExecutor(resolve) {
    resolvePromise = resolve;
  });

  var token = this;
  executor(function cancel(message) {
    if (token.reason) {
      // Cancellation has already been requested
      return;
    }

    token.reason = new Cancel(message);
    resolvePromise(token.reason);
  });
}

/**
 * Throws a `Cancel` if cancellation has been requested.
 */
CancelToken.prototype.throwIfRequested = function throwIfRequested() {
  if (this.reason) {
    throw this.reason;
  }
};

/**
 * Returns an object that contains a new `CancelToken` and a function that, when called,
 * cancels the `CancelToken`.
 */
CancelToken.source = function source() {
  var cancel;
  var token = new CancelToken(function executor(c) {
    cancel = c;
  });
  return {
    token: token,
    cancel: cancel
  };
};

module.exports = CancelToken;


/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Syntactic sugar for invoking a function and expanding an array for arguments.
 *
 * Common use case would be to use `Function.prototype.apply`.
 *
 *  ```js
 *  function f(x, y, z) {}
 *  var args = [1, 2, 3];
 *  f.apply(null, args);
 *  ```
 *
 * With `spread` this example can be re-written.
 *
 *  ```js
 *  spread(function(x, y, z) {})([1, 2, 3]);
 *  ```
 *
 * @param {Function} callback
 * @returns {Function}
 */
module.exports = function spread(callback) {
  return function wrap(arr) {
    return callback.apply(null, arr);
  };
};


/***/ }),
/* 48 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cnt", function() { return cnt; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "errors", function() { return errors; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "findFiles", function() { return findFiles; });
const FindFiles = __webpack_require__(49);

let cnt = 0,
    errors = 0;
function findFiles(rootFolder, fileModifiedDate, onFile) {
  var finder = new FindFiles({
    rootFolder,
    fileModifiedDate
  });
  var result, resolve, reject;
  cnt = 0;
  errors = 0;
  finder.on("match", function (strPath, stat) {
    if (onFile) onFile(strPath, stat);
    cnt++;
  });
  finder.on("complete", function () {
    resolve(cnt);
  });
  finder.on("patherror", function (err, strPath) {
    console.log("Error for Path " + strPath + " " + err); // Note that an error in accessing a particular file does not stop the whole show

    errors++;
  });
  finder.on("error", function (err) {
    console.log("Global Error " + err);
    errors++;
  });
  result = new Promise((_resolve, _reject) => {
    resolve = _resolve;
    reject = _reject;
    finder.startSearch();
  });
  return result;
}

/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const fs_1 = __importDefault(__webpack_require__(16));
const async_1 = __importDefault(__webpack_require__(50));
const path_1 = __importDefault(__webpack_require__(51));
const events_1 = __importDefault(__webpack_require__(52));
var EventEmitter = events_1.default.EventEmitter;
/***
 * This class recursively finds files that match the filter function passed to the constructor
 * An alternative constructor takes a fileModifiedDate and returns all files that have been modified since that date
 * this class emits a number of events
 * on "match" is emitted for every path that matches
 */
class finder extends EventEmitter {
    constructor(options) {
        super();
        if (options.fileModifiedDate) {
            options.filterFunction = (strPath, fsStat) => {
                return (fsStat.mtime > options.fileModifiedDate);
            };
        }
        if (!options.filterFunction) {
            options.filterFunction = () => true;
        }
        this.options = options;
    }
    startSearch() {
        this.recurseFolder(this.options.rootFolder, (err) => {
            if (err) {
                this.emit("error", err);
                return;
            }
            //console.log("This Should Call when everything is finished");
            this.emit("complete");
        });
    }
    recurseFolder(strFolderName, folderCompleteCallback) {
        fs_1.default.readdir(strFolderName, (err, files) => {
            if (err) {
                this.onPathError(err, strFolderName);
                return folderCompleteCallback(err);
            }
            if (!files) {
                return folderCompleteCallback(null); // This is just an empty folder
            }
            async_1.default.each(files, (file, callback) => {
                try {
                    var strPath = path_1.default.join(strFolderName, file);
                }
                catch (e) {
                    this.onPathError(e, strPath);
                    return callback(null); // Don't return error to callback or we will miss other files in directory
                }
                this.onFileFound(strPath, callback);
            }, (err) => {
                if (err) {
                    this.onPathError(err, strFolderName);
                }
                //                    if(strFolderName.length < 20)
                //                        console.log("finished " + strFolderName);
                return folderCompleteCallback(err);
            });
        });
    }
    onFileFound(strPath, callback) {
        fs_1.default.lstat(strPath, (err, stat) => {
            if (err) {
                this.onPathError(err, strPath);
                return callback(null); // Don't return error to callback or we will miss other files in directory
            }
            if (!stat) {
                this.onPathError(new Error("Could not get stat for file " + strPath), strPath);
                return callback(null); // Don't return error to callback or we will miss other files in directory
            }
            if (stat.isDirectory()) {
                this.checkMatch(strPath, stat);
                this.recurseFolder(strPath, (err) => {
                    if (err) {
                        this.onPathError(err, strPath);
                    }
                    return callback(null);
                });
            }
            else {
                this.checkMatch(strPath, stat);
                return callback(null);
            }
        });
    }
    checkMatch(strPath, stat) {
        try {
            if (this.options.filterFunction(strPath, stat)) {
                this.emit("match", strPath, stat);
            }
        }
        catch (e) {
            this.onPathError(e, strPath);
        }
    }
    onPathError(err, strPath) {
        try {
            this.emit("patherror", err, strPath);
        }
        catch (e) {
            //Already emitted a path error and the handler failed must not throw error or other files will fail to process too
            this.emit("error", new Error("Error in path Error Handler" + e));
        }
    }
}
module.exports = finder;
//# sourceMappingURL=node-find-files.js.map

/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*global setImmediate: false, setTimeout: false, console: false */
(function () {

    var async = {};

    // global on the server, window in the browser
    var root, previous_async;

    root = this;
    if (root != null) {
      previous_async = root.async;
    }

    async.noConflict = function () {
        root.async = previous_async;
        return async;
    };

    function only_once(fn) {
        var called = false;
        return function() {
            if (called) throw new Error("Callback was already called.");
            called = true;
            fn.apply(root, arguments);
        }
    }

    //// cross-browser compatiblity functions ////

    var _each = function (arr, iterator) {
        if (arr.forEach) {
            return arr.forEach(iterator);
        }
        for (var i = 0; i < arr.length; i += 1) {
            iterator(arr[i], i, arr);
        }
    };

    var _map = function (arr, iterator) {
        if (arr.map) {
            return arr.map(iterator);
        }
        var results = [];
        _each(arr, function (x, i, a) {
            results.push(iterator(x, i, a));
        });
        return results;
    };

    var _reduce = function (arr, iterator, memo) {
        if (arr.reduce) {
            return arr.reduce(iterator, memo);
        }
        _each(arr, function (x, i, a) {
            memo = iterator(memo, x, i, a);
        });
        return memo;
    };

    var _keys = function (obj) {
        if (Object.keys) {
            return Object.keys(obj);
        }
        var keys = [];
        for (var k in obj) {
            if (obj.hasOwnProperty(k)) {
                keys.push(k);
            }
        }
        return keys;
    };

    //// exported async module functions ////

    //// nextTick implementation with browser-compatible fallback ////
    if (typeof process === 'undefined' || !(process.nextTick)) {
        if (typeof setImmediate === 'function') {
            async.nextTick = function (fn) {
                setImmediate(fn);
            };
        }
        else {
            async.nextTick = function (fn) {
                setTimeout(fn, 0);
            };
        }
    }
    else {
        async.nextTick = process.nextTick;
    }

    async.each = function (arr, iterator, callback) {
        callback = callback || function () {};
        if (!arr.length) {
            return callback();
        }
        var completed = 0;
        _each(arr, function (x) {
            iterator(x, only_once(function (err) {
                if (err) {
                    callback(err);
                    callback = function () {};
                }
                else {
                    completed += 1;
                    if (completed >= arr.length) {
                        callback(null);
                    }
                }
            }));
        });
    };
    async.forEach = async.each;

    async.eachSeries = function (arr, iterator, callback) {
        callback = callback || function () {};
        if (!arr.length) {
            return callback();
        }
        var completed = 0;
        var iterate = function () {
            var sync = true;
            iterator(arr[completed], function (err) {
                if (err) {
                    callback(err);
                    callback = function () {};
                }
                else {
                    completed += 1;
                    if (completed >= arr.length) {
                        callback(null);
                    }
                    else {
                        if (sync) {
                            async.nextTick(iterate);
                        }
                        else {
                            iterate();
                        }
                    }
                }
            });
            sync = false;
        };
        iterate();
    };
    async.forEachSeries = async.eachSeries;

    async.eachLimit = function (arr, limit, iterator, callback) {
        var fn = _eachLimit(limit);
        fn.apply(null, [arr, iterator, callback]);
    };
    async.forEachLimit = async.eachLimit;

    var _eachLimit = function (limit) {

        return function (arr, iterator, callback) {
            callback = callback || function () {};
            if (!arr.length || limit <= 0) {
                return callback();
            }
            var completed = 0;
            var started = 0;
            var running = 0;

            (function replenish () {
                if (completed >= arr.length) {
                    return callback();
                }

                while (running < limit && started < arr.length) {
                    started += 1;
                    running += 1;
                    iterator(arr[started - 1], function (err) {
                        if (err) {
                            callback(err);
                            callback = function () {};
                        }
                        else {
                            completed += 1;
                            running -= 1;
                            if (completed >= arr.length) {
                                callback();
                            }
                            else {
                                replenish();
                            }
                        }
                    });
                }
            })();
        };
    };


    var doParallel = function (fn) {
        return function () {
            var args = Array.prototype.slice.call(arguments);
            return fn.apply(null, [async.each].concat(args));
        };
    };
    var doParallelLimit = function(limit, fn) {
        return function () {
            var args = Array.prototype.slice.call(arguments);
            return fn.apply(null, [_eachLimit(limit)].concat(args));
        };
    };
    var doSeries = function (fn) {
        return function () {
            var args = Array.prototype.slice.call(arguments);
            return fn.apply(null, [async.eachSeries].concat(args));
        };
    };


    var _asyncMap = function (eachfn, arr, iterator, callback) {
        var results = [];
        arr = _map(arr, function (x, i) {
            return {index: i, value: x};
        });
        eachfn(arr, function (x, callback) {
            iterator(x.value, function (err, v) {
                results[x.index] = v;
                callback(err);
            });
        }, function (err) {
            callback(err, results);
        });
    };
    async.map = doParallel(_asyncMap);
    async.mapSeries = doSeries(_asyncMap);
    async.mapLimit = function (arr, limit, iterator, callback) {
        return _mapLimit(limit)(arr, iterator, callback);
    };

    var _mapLimit = function(limit) {
        return doParallelLimit(limit, _asyncMap);
    };

    // reduce only has a series version, as doing reduce in parallel won't
    // work in many situations.
    async.reduce = function (arr, memo, iterator, callback) {
        async.eachSeries(arr, function (x, callback) {
            iterator(memo, x, function (err, v) {
                memo = v;
                callback(err);
            });
        }, function (err) {
            callback(err, memo);
        });
    };
    // inject alias
    async.inject = async.reduce;
    // foldl alias
    async.foldl = async.reduce;

    async.reduceRight = function (arr, memo, iterator, callback) {
        var reversed = _map(arr, function (x) {
            return x;
        }).reverse();
        async.reduce(reversed, memo, iterator, callback);
    };
    // foldr alias
    async.foldr = async.reduceRight;

    var _filter = function (eachfn, arr, iterator, callback) {
        var results = [];
        arr = _map(arr, function (x, i) {
            return {index: i, value: x};
        });
        eachfn(arr, function (x, callback) {
            iterator(x.value, function (v) {
                if (v) {
                    results.push(x);
                }
                callback();
            });
        }, function (err) {
            callback(_map(results.sort(function (a, b) {
                return a.index - b.index;
            }), function (x) {
                return x.value;
            }));
        });
    };
    async.filter = doParallel(_filter);
    async.filterSeries = doSeries(_filter);
    // select alias
    async.select = async.filter;
    async.selectSeries = async.filterSeries;

    var _reject = function (eachfn, arr, iterator, callback) {
        var results = [];
        arr = _map(arr, function (x, i) {
            return {index: i, value: x};
        });
        eachfn(arr, function (x, callback) {
            iterator(x.value, function (v) {
                if (!v) {
                    results.push(x);
                }
                callback();
            });
        }, function (err) {
            callback(_map(results.sort(function (a, b) {
                return a.index - b.index;
            }), function (x) {
                return x.value;
            }));
        });
    };
    async.reject = doParallel(_reject);
    async.rejectSeries = doSeries(_reject);

    var _detect = function (eachfn, arr, iterator, main_callback) {
        eachfn(arr, function (x, callback) {
            iterator(x, function (result) {
                if (result) {
                    main_callback(x);
                    main_callback = function () {};
                }
                else {
                    callback();
                }
            });
        }, function (err) {
            main_callback();
        });
    };
    async.detect = doParallel(_detect);
    async.detectSeries = doSeries(_detect);

    async.some = function (arr, iterator, main_callback) {
        async.each(arr, function (x, callback) {
            iterator(x, function (v) {
                if (v) {
                    main_callback(true);
                    main_callback = function () {};
                }
                callback();
            });
        }, function (err) {
            main_callback(false);
        });
    };
    // any alias
    async.any = async.some;

    async.every = function (arr, iterator, main_callback) {
        async.each(arr, function (x, callback) {
            iterator(x, function (v) {
                if (!v) {
                    main_callback(false);
                    main_callback = function () {};
                }
                callback();
            });
        }, function (err) {
            main_callback(true);
        });
    };
    // all alias
    async.all = async.every;

    async.sortBy = function (arr, iterator, callback) {
        async.map(arr, function (x, callback) {
            iterator(x, function (err, criteria) {
                if (err) {
                    callback(err);
                }
                else {
                    callback(null, {value: x, criteria: criteria});
                }
            });
        }, function (err, results) {
            if (err) {
                return callback(err);
            }
            else {
                var fn = function (left, right) {
                    var a = left.criteria, b = right.criteria;
                    return a < b ? -1 : a > b ? 1 : 0;
                };
                callback(null, _map(results.sort(fn), function (x) {
                    return x.value;
                }));
            }
        });
    };

    async.auto = function (tasks, callback) {
        callback = callback || function () {};
        var keys = _keys(tasks);
        if (!keys.length) {
            return callback(null);
        }

        var results = {};

        var listeners = [];
        var addListener = function (fn) {
            listeners.unshift(fn);
        };
        var removeListener = function (fn) {
            for (var i = 0; i < listeners.length; i += 1) {
                if (listeners[i] === fn) {
                    listeners.splice(i, 1);
                    return;
                }
            }
        };
        var taskComplete = function () {
            _each(listeners.slice(0), function (fn) {
                fn();
            });
        };

        addListener(function () {
            if (_keys(results).length === keys.length) {
                callback(null, results);
                callback = function () {};
            }
        });

        _each(keys, function (k) {
            var task = (tasks[k] instanceof Function) ? [tasks[k]]: tasks[k];
            var taskCallback = function (err) {
                var args = Array.prototype.slice.call(arguments, 1);
                if (args.length <= 1) {
                    args = args[0];
                }
                if (err) {
                    var safeResults = {};
                    _each(_keys(results), function(rkey) {
                        safeResults[rkey] = results[rkey];
                    });
                    safeResults[k] = args;
                    callback(err, safeResults);
                    // stop subsequent errors hitting callback multiple times
                    callback = function () {};
                }
                else {
                    results[k] = args;
                    async.nextTick(taskComplete);
                }
            };
            var requires = task.slice(0, Math.abs(task.length - 1)) || [];
            var ready = function () {
                return _reduce(requires, function (a, x) {
                    return (a && results.hasOwnProperty(x));
                }, true) && !results.hasOwnProperty(k);
            };
            if (ready()) {
                task[task.length - 1](taskCallback, results);
            }
            else {
                var listener = function () {
                    if (ready()) {
                        removeListener(listener);
                        task[task.length - 1](taskCallback, results);
                    }
                };
                addListener(listener);
            }
        });
    };

    async.waterfall = function (tasks, callback) {
        callback = callback || function () {};
        if (!tasks.length) {
            return callback();
        }
        var wrapIterator = function (iterator) {
            return function (err) {
                if (err) {
                    callback.apply(null, arguments);
                    callback = function () {};
                }
                else {
                    var args = Array.prototype.slice.call(arguments, 1);
                    var next = iterator.next();
                    if (next) {
                        args.push(wrapIterator(next));
                    }
                    else {
                        args.push(callback);
                    }
                    async.nextTick(function () {
                        iterator.apply(null, args);
                    });
                }
            };
        };
        wrapIterator(async.iterator(tasks))();
    };

    var _parallel = function(eachfn, tasks, callback) {
        callback = callback || function () {};
        if (tasks.constructor === Array) {
            eachfn.map(tasks, function (fn, callback) {
                if (fn) {
                    fn(function (err) {
                        var args = Array.prototype.slice.call(arguments, 1);
                        if (args.length <= 1) {
                            args = args[0];
                        }
                        callback.call(null, err, args);
                    });
                }
            }, callback);
        }
        else {
            var results = {};
            eachfn.each(_keys(tasks), function (k, callback) {
                tasks[k](function (err) {
                    var args = Array.prototype.slice.call(arguments, 1);
                    if (args.length <= 1) {
                        args = args[0];
                    }
                    results[k] = args;
                    callback(err);
                });
            }, function (err) {
                callback(err, results);
            });
        }
    };

    async.parallel = function (tasks, callback) {
        _parallel({ map: async.map, each: async.each }, tasks, callback);
    };

    async.parallelLimit = function(tasks, limit, callback) {
        _parallel({ map: _mapLimit(limit), each: _eachLimit(limit) }, tasks, callback);
    };

    async.series = function (tasks, callback) {
        callback = callback || function () {};
        if (tasks.constructor === Array) {
            async.mapSeries(tasks, function (fn, callback) {
                if (fn) {
                    fn(function (err) {
                        var args = Array.prototype.slice.call(arguments, 1);
                        if (args.length <= 1) {
                            args = args[0];
                        }
                        callback.call(null, err, args);
                    });
                }
            }, callback);
        }
        else {
            var results = {};
            async.eachSeries(_keys(tasks), function (k, callback) {
                tasks[k](function (err) {
                    var args = Array.prototype.slice.call(arguments, 1);
                    if (args.length <= 1) {
                        args = args[0];
                    }
                    results[k] = args;
                    callback(err);
                });
            }, function (err) {
                callback(err, results);
            });
        }
    };

    async.iterator = function (tasks) {
        var makeCallback = function (index) {
            var fn = function () {
                if (tasks.length) {
                    tasks[index].apply(null, arguments);
                }
                return fn.next();
            };
            fn.next = function () {
                return (index < tasks.length - 1) ? makeCallback(index + 1): null;
            };
            return fn;
        };
        return makeCallback(0);
    };

    async.apply = function (fn) {
        var args = Array.prototype.slice.call(arguments, 1);
        return function () {
            return fn.apply(
                null, args.concat(Array.prototype.slice.call(arguments))
            );
        };
    };

    var _concat = function (eachfn, arr, fn, callback) {
        var r = [];
        eachfn(arr, function (x, cb) {
            fn(x, function (err, y) {
                r = r.concat(y || []);
                cb(err);
            });
        }, function (err) {
            callback(err, r);
        });
    };
    async.concat = doParallel(_concat);
    async.concatSeries = doSeries(_concat);

    async.whilst = function (test, iterator, callback) {
        if (test()) {
            var sync = true;
            iterator(function (err) {
                if (err) {
                    return callback(err);
                }
                if (sync) {
                    async.nextTick(function () {
                        async.whilst(test, iterator, callback);
                    });
                }
                else {
                    async.whilst(test, iterator, callback);
                }
            });
            sync = false;
        }
        else {
            callback();
        }
    };

    async.doWhilst = function (iterator, test, callback) {
        var sync = true;
        iterator(function (err) {
            if (err) {
                return callback(err);
            }
            if (test()) {
                if (sync) {
                    async.nextTick(function () {
                        async.doWhilst(iterator, test, callback);
                    });
                }
                else {
                    async.doWhilst(iterator, test, callback);
                }
            }
            else {
                callback();
            }
        });
        sync = false;
    };

    async.until = function (test, iterator, callback) {
        if (!test()) {
            var sync = true;
            iterator(function (err) {
                if (err) {
                    return callback(err);
                }
                if (sync) {
                    async.nextTick(function () {
                        async.until(test, iterator, callback);
                    });
                }
                else {
                    async.until(test, iterator, callback);
                }
            });
            sync = false;
        }
        else {
            callback();
        }
    };

    async.doUntil = function (iterator, test, callback) {
        var sync = true;
        iterator(function (err) {
            if (err) {
                return callback(err);
            }
            if (!test()) {
                if (sync) {
                    async.nextTick(function () {
                        async.doUntil(iterator, test, callback);
                    });
                }
                else {
                    async.doUntil(iterator, test, callback);
                }
            }
            else {
                callback();
            }
        });
        sync = false;
    };

    async.queue = function (worker, concurrency) {
        if (concurrency === undefined) {
            concurrency = 1;
        }
        function _insert(q, data, pos, callback) {
          if(data.constructor !== Array) {
              data = [data];
          }
          _each(data, function(task) {
              var item = {
                  data: task,
                  callback: typeof callback === 'function' ? callback : null
              };

              if (pos) {
                q.tasks.unshift(item);
              } else {
                q.tasks.push(item);
              }

              if (q.saturated && q.tasks.length === concurrency) {
                  q.saturated();
              }
              async.nextTick(q.process);
          });
        }

        var workers = 0;
        var q = {
            tasks: [],
            concurrency: concurrency,
            saturated: null,
            empty: null,
            drain: null,
            push: function (data, callback) {
              _insert(q, data, false, callback);
            },
            unshift: function (data, callback) {
              _insert(q, data, true, callback);
            },
            process: function () {
                if (workers < q.concurrency && q.tasks.length) {
                    var task = q.tasks.shift();
                    if (q.empty && q.tasks.length === 0) {
                        q.empty();
                    }
                    workers += 1;
                    var sync = true;
                    var next = function () {
                        workers -= 1;
                        if (task.callback) {
                            task.callback.apply(task, arguments);
                        }
                        if (q.drain && q.tasks.length + workers === 0) {
                            q.drain();
                        }
                        q.process();
                    };
                    var cb = only_once(function () {
                        var cbArgs = arguments;

                        if (sync) {
                            async.nextTick(function () {
                                next.apply(null, cbArgs);
                            });
                        } else {
                            next.apply(null, arguments);
                        }
                    });
                    worker(task.data, cb);
                    sync = false;
                }
            },
            length: function () {
                return q.tasks.length;
            },
            running: function () {
                return workers;
            }
        };
        return q;
    };

    async.cargo = function (worker, payload) {
        var working     = false,
            tasks       = [];

        var cargo = {
            tasks: tasks,
            payload: payload,
            saturated: null,
            empty: null,
            drain: null,
            push: function (data, callback) {
                if(data.constructor !== Array) {
                    data = [data];
                }
                _each(data, function(task) {
                    tasks.push({
                        data: task,
                        callback: typeof callback === 'function' ? callback : null
                    });
                    if (cargo.saturated && tasks.length === payload) {
                        cargo.saturated();
                    }
                });
                async.nextTick(cargo.process);
            },
            process: function process() {
                if (working) return;
                if (tasks.length === 0) {
                    if(cargo.drain) cargo.drain();
                    return;
                }

                var ts = typeof payload === 'number'
                            ? tasks.splice(0, payload)
                            : tasks.splice(0);

                var ds = _map(ts, function (task) {
                    return task.data;
                });

                if(cargo.empty) cargo.empty();
                working = true;
                worker(ds, function () {
                    working = false;

                    var args = arguments;
                    _each(ts, function (data) {
                        if (data.callback) {
                            data.callback.apply(null, args);
                        }
                    });

                    process();
                });
            },
            length: function () {
                return tasks.length;
            },
            running: function () {
                return working;
            }
        };
        return cargo;
    };

    var _console_fn = function (name) {
        return function (fn) {
            var args = Array.prototype.slice.call(arguments, 1);
            fn.apply(null, args.concat([function (err) {
                var args = Array.prototype.slice.call(arguments, 1);
                if (typeof console !== 'undefined') {
                    if (err) {
                        if (console.error) {
                            console.error(err);
                        }
                    }
                    else if (console[name]) {
                        _each(args, function (x) {
                            console[name](x);
                        });
                    }
                }
            }]));
        };
    };
    async.log = _console_fn('log');
    async.dir = _console_fn('dir');
    /*async.info = _console_fn('info');
    async.warn = _console_fn('warn');
    async.error = _console_fn('error');*/

    async.memoize = function (fn, hasher) {
        var memo = {};
        var queues = {};
        hasher = hasher || function (x) {
            return x;
        };
        var memoized = function () {
            var args = Array.prototype.slice.call(arguments);
            var callback = args.pop();
            var key = hasher.apply(null, args);
            if (key in memo) {
                callback.apply(null, memo[key]);
            }
            else if (key in queues) {
                queues[key].push(callback);
            }
            else {
                queues[key] = [callback];
                fn.apply(null, args.concat([function () {
                    memo[key] = arguments;
                    var q = queues[key];
                    delete queues[key];
                    for (var i = 0, l = q.length; i < l; i++) {
                      q[i].apply(null, arguments);
                    }
                }]));
            }
        };
        memoized.memo = memo;
        memoized.unmemoized = fn;
        return memoized;
    };

    async.unmemoize = function (fn) {
      return function () {
        return (fn.unmemoized || fn).apply(null, arguments);
      };
    };

    async.times = function (count, iterator, callback) {
        var counter = [];
        for (var i = 0; i < count; i++) {
            counter.push(i);
        }
        return async.map(counter, iterator, callback);
    };

    async.timesSeries = function (count, iterator, callback) {
        var counter = [];
        for (var i = 0; i < count; i++) {
            counter.push(i);
        }
        return async.mapSeries(counter, iterator, callback);
    };

    async.compose = function (/* functions... */) {
        var fns = Array.prototype.reverse.call(arguments);
        return function () {
            var that = this;
            var args = Array.prototype.slice.call(arguments);
            var callback = args.pop();
            async.reduce(fns, args, function (newargs, fn, cb) {
                fn.apply(that, newargs.concat([function () {
                    var err = arguments[0];
                    var nextargs = Array.prototype.slice.call(arguments, 1);
                    cb(err, nextargs);
                }]))
            },
            function (err, results) {
                callback.apply(that, [err].concat(results));
            });
        };
    };

    async.applyEach = function (fns /*args...*/) {
        var go = function () {
            var that = this;
            var args = Array.prototype.slice.call(arguments);
            var callback = args.pop();
            return async.each(fns, function (fn, cb) {
                fn.apply(that, args.concat([cb]));
            },
            callback);
        };
        if (arguments.length > 1) {
            var args = Array.prototype.slice.call(arguments, 1);
            return go.apply(this, args);
        }
        else {
            return go;
        }
    };

    // AMD / RequireJS
    if (true) {
        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {
            return async;
        }).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    }
    // Node.js
    else {}

}());


/***/ }),
/* 51 */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),
/* 52 */
/***/ (function(module, exports) {

module.exports = require("events");

/***/ }),
/* 53 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "handler", function() { return handler; });
const crawler = __webpack_require__(18);

const cw = __webpack_require__(17);

const MAX_WORDS = 10000000;
const CACHE_CLUSTERS = false;
const MAX_NODE_FREQUENCY = 1000;
const TRAVERSE_SIMILAR = true;
async function handler(event, context) {
  crawler.initCrawler(MAX_WORDS, CACHE_CLUSTERS, MAX_NODE_FREQUENCY, TRAVERSE_SIMILAR);

  try {
    console.log("crawling in the background starting from top 3000 English words...");
    let promises = [];

    for (let commonWord in cw.TheMostCommon3000) {
      promises.push(crawler.loadCluster(commonWord, false));
    }

    await Promise.all(promises);
    return {
      statusCode: 200,
      body: json,
      headers: {
        'Access-Control-Allow-Origin': '*'
      }
    };
  } catch (err) {
    console.log(err);
    return {
      statusCode: 500,
      body: err.toString()
    };
  }
}

/***/ })
/******/ ])));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvdXRpbHMuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvaGVscGVycy9idWlsZFVSTC5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jb3JlL2NyZWF0ZUVycm9yLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2hlbHBlcnMvYmluZC5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jYW5jZWwvaXNDYW5jZWwuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvZGVmYXVsdHMuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvY29yZS9zZXR0bGUuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvY29yZS9lbmhhbmNlRXJyb3IuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvY29yZS9idWlsZEZ1bGxQYXRoLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcImh0dHBcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJodHRwc1wiIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvZm9sbG93LXJlZGlyZWN0cy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ1cmxcIiIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2RlYnVnL3NyYy9kZWJ1Zy5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jb3JlL21lcmdlQ29uZmlnLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2NhbmNlbC9DYW5jZWwuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiZnNcIiIsIndlYnBhY2s6Ly8vLi9pbmNsdWRlL2NvbW1vbi13b3Jkcy5qcyIsIndlYnBhY2s6Ly8vLi9pbmNsdWRlL2NyYXdsZXIuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9heGlvcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9heGlvcy5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jb3JlL0F4aW9zLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2NvcmUvSW50ZXJjZXB0b3JNYW5hZ2VyLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2NvcmUvZGlzcGF0Y2hSZXF1ZXN0LmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2NvcmUvdHJhbnNmb3JtRGF0YS5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9oZWxwZXJzL25vcm1hbGl6ZUhlYWRlck5hbWUuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvYWRhcHRlcnMveGhyLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2hlbHBlcnMvaXNBYnNvbHV0ZVVSTC5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9oZWxwZXJzL2NvbWJpbmVVUkxzLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2hlbHBlcnMvcGFyc2VIZWFkZXJzLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2hlbHBlcnMvaXNVUkxTYW1lT3JpZ2luLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2hlbHBlcnMvY29va2llcy5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9hZGFwdGVycy9odHRwLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcImFzc2VydFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInN0cmVhbVwiIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvZGVidWcvc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvZGVidWcvc3JjL2Jyb3dzZXIuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9tcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2RlYnVnL3NyYy9ub2RlLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcInR0eVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInV0aWxcIiIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL3N1cHBvcnRzLWNvbG9yL2luZGV4LmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcIm9zXCIiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9oYXMtZmxhZy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ6bGliXCIiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvY2FuY2VsL0NhbmNlbFRva2VuLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2hlbHBlcnMvc3ByZWFkLmpzIiwid2VicGFjazovLy8uL2luY2x1ZGUvZmluZGVyLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvbm9kZS1maW5kLWZpbGVzL2Rpc3Qvbm9kZS1maW5kLWZpbGVzLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvYXN5bmMvbGliL2FzeW5jLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcInBhdGhcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJldmVudHNcIiIsIndlYnBhY2s6Ly8vLi9jcmF3bC1iYWNrZ3JvdW5kLmpzIl0sIm5hbWVzIjpbIlRoZU1vc3RDb21tb24zMDAwIiwiYSIsImFiYW5kb24iLCJhYmlsaXR5IiwiYWJsZSIsImFib3J0aW9uIiwiYWJvdXQiLCJhYm92ZSIsImFicm9hZCIsImFic2VuY2UiLCJhYnNvbHV0ZSIsImFic29sdXRlbHkiLCJhYnNvcmIiLCJhYnVzZSIsImFjYWRlbWljIiwiYWNjZXB0IiwiYWNjZXNzIiwiYWNjaWRlbnQiLCJhY2NvbXBhbnkiLCJhY2NvbXBsaXNoIiwiYWNjb3JkaW5nIiwiYWNjb3VudCIsImFjY3VyYXRlIiwiYWNjdXNlIiwiYWNoaWV2ZSIsImFjaGlldmVtZW50IiwiYWNpZCIsImFja25vd2xlZGdlIiwiYWNxdWlyZSIsImFjcm9zcyIsImFjdCIsImFjdGlvbiIsImFjdGl2ZSIsImFjdGl2aXN0IiwiYWN0aXZpdHkiLCJhY3RvciIsImFjdHJlc3MiLCJhY3R1YWwiLCJhY3R1YWxseSIsImFkIiwiYWRhcHQiLCJhZGQiLCJhZGRpdGlvbiIsImFkZGl0aW9uYWwiLCJhZGRyZXNzIiwiYWRlcXVhdGUiLCJhZGp1c3QiLCJhZGp1c3RtZW50IiwiYWRtaW5pc3RyYXRpb24iLCJhZG1pbmlzdHJhdG9yIiwiYWRtaXJlIiwiYWRtaXNzaW9uIiwiYWRtaXQiLCJhZG9sZXNjZW50IiwiYWRvcHQiLCJhZHVsdCIsImFkdmFuY2UiLCJhZHZhbmNlZCIsImFkdmFudGFnZSIsImFkdmVudHVyZSIsImFkdmVydGlzaW5nIiwiYWR2aWNlIiwiYWR2aXNlIiwiYWR2aXNlciIsImFkdm9jYXRlIiwiYWZmYWlyIiwiYWZmZWN0IiwiYWZmb3JkIiwiYWZyYWlkIiwiQWZyaWNhbiIsImFmdGVyIiwiYWZ0ZXJub29uIiwiYWdhaW4iLCJhZ2FpbnN0IiwiYWdlIiwiYWdlbmN5IiwiYWdlbmRhIiwiYWdlbnQiLCJhZ2dyZXNzaXZlIiwiYWdvIiwiYWdyZWUiLCJhZ3JlZW1lbnQiLCJhZ3JpY3VsdHVyYWwiLCJhaCIsImFoZWFkIiwiYWlkIiwiYWlkZSIsIkFJRFMiLCJhaW0iLCJhaXIiLCJhaXJjcmFmdCIsImFpcmxpbmUiLCJhaXJwb3J0IiwiYWxidW0iLCJhbGNvaG9sIiwiYWxpdmUiLCJhbGwiLCJhbGxpYW5jZSIsImFsbG93IiwiYWxseSIsImFsbW9zdCIsImFsb25lIiwiYWxvbmciLCJhbHJlYWR5IiwiYWxzbyIsImFsdGVyIiwiYWx0ZXJuYXRpdmUiLCJhbHRob3VnaCIsImFsd2F5cyIsIkFNIiwiYW1hemluZyIsIkFtZXJpY2FuIiwiYW1vbmciLCJhbW91bnQiLCJhbmFseXNpcyIsImFuYWx5c3QiLCJhbmFseXplIiwiYW5jaWVudCIsImFuZCIsImFuZ2VyIiwiYW5nbGUiLCJhbmdyeSIsImFuaW1hbCIsImFubml2ZXJzYXJ5IiwiYW5ub3VuY2UiLCJhbm51YWwiLCJhbm90aGVyIiwiYW5zd2VyIiwiYW50aWNpcGF0ZSIsImFueGlldHkiLCJhbnkiLCJhbnlib2R5IiwiYW55bW9yZSIsImFueW9uZSIsImFueXRoaW5nIiwiYW55d2F5IiwiYW55d2hlcmUiLCJhcGFydCIsImFwYXJ0bWVudCIsImFwcGFyZW50IiwiYXBwYXJlbnRseSIsImFwcGVhbCIsImFwcGVhciIsImFwcGVhcmFuY2UiLCJhcHBsZSIsImFwcGxpY2F0aW9uIiwiYXBwbHkiLCJhcHBvaW50IiwiYXBwb2ludG1lbnQiLCJhcHByZWNpYXRlIiwiYXBwcm9hY2giLCJhcHByb3ByaWF0ZSIsImFwcHJvdmFsIiwiYXBwcm92ZSIsImFwcHJveGltYXRlbHkiLCJBcmFiIiwiYXJjaGl0ZWN0IiwiYXJlYSIsImFyZ3VlIiwiYXJndW1lbnQiLCJhcmlzZSIsImFybSIsImFybWVkIiwiYXJteSIsImFyb3VuZCIsImFycmFuZ2UiLCJhcnJhbmdlbWVudCIsImFycmVzdCIsImFycml2YWwiLCJhcnJpdmUiLCJhcnQiLCJhcnRpY2xlIiwiYXJ0aXN0IiwiYXJ0aXN0aWMiLCJhcyIsIkFzaWFuIiwiYXNpZGUiLCJhc2siLCJhc2xlZXAiLCJhc3BlY3QiLCJhc3NhdWx0IiwiYXNzZXJ0IiwiYXNzZXNzIiwiYXNzZXNzbWVudCIsImFzc2V0IiwiYXNzaWduIiwiYXNzaWdubWVudCIsImFzc2lzdCIsImFzc2lzdGFuY2UiLCJhc3Npc3RhbnQiLCJhc3NvY2lhdGUiLCJhc3NvY2lhdGlvbiIsImFzc3VtZSIsImFzc3VtcHRpb24iLCJhc3N1cmUiLCJhdCIsImF0aGxldGUiLCJhdGhsZXRpYyIsImF0bW9zcGhlcmUiLCJhdHRhY2giLCJhdHRhY2siLCJhdHRlbXB0IiwiYXR0ZW5kIiwiYXR0ZW50aW9uIiwiYXR0aXR1ZGUiLCJhdHRvcm5leSIsImF0dHJhY3QiLCJhdHRyYWN0aXZlIiwiYXR0cmlidXRlIiwiYXVkaWVuY2UiLCJhdXRob3IiLCJhdXRob3JpdHkiLCJhdXRvIiwiYXZhaWxhYmxlIiwiYXZlcmFnZSIsImF2b2lkIiwiYXdhcmQiLCJhd2FyZSIsImF3YXJlbmVzcyIsImF3YXkiLCJhd2Z1bCIsImJhYnkiLCJiYWNrIiwiYmFja2dyb3VuZCIsImJhZCIsImJhZGx5IiwiYmFnIiwiYmFrZSIsImJhbGFuY2UiLCJiYWxsIiwiYmFuIiwiYmFuZCIsImJhbmsiLCJiYXIiLCJiYXJlbHkiLCJiYXJyZWwiLCJiYXJyaWVyIiwiYmFzZSIsImJhc2ViYWxsIiwiYmFzaWMiLCJiYXNpY2FsbHkiLCJiYXNpcyIsImJhc2tldCIsImJhc2tldGJhbGwiLCJiYXRocm9vbSIsImJhdHRlcnkiLCJiYXR0bGUiLCJiZSIsImJlYWNoIiwiYmVhbiIsImJlYXIiLCJiZWF0IiwiYmVhdXRpZnVsIiwiYmVhdXR5IiwiYmVjYXVzZSIsImJlY29tZSIsImJlZCIsImJlZHJvb20iLCJiZWVyIiwiYmVmb3JlIiwiYmVnaW4iLCJiZWdpbm5pbmciLCJiZWhhdmlvciIsImJlaGluZCIsImJlaW5nIiwiYmVsaWVmIiwiYmVsaWV2ZSIsImJlbGwiLCJiZWxvbmciLCJiZWxvdyIsImJlbHQiLCJiZW5jaCIsImJlbmQiLCJiZW5lYXRoIiwiYmVuZWZpdCIsImJlc2lkZSIsImJlc2lkZXMiLCJiZXN0IiwiYmV0IiwiYmV0dGVyIiwiYmV0d2VlbiIsImJleW9uZCIsIkJpYmxlIiwiYmlnIiwiYmlrZSIsImJpbGwiLCJiaWxsaW9uIiwiYmluZCIsImJpb2xvZ2ljYWwiLCJiaXJkIiwiYmlydGgiLCJiaXJ0aGRheSIsImJpdCIsImJpdGUiLCJibGFjayIsImJsYWRlIiwiYmxhbWUiLCJibGFua2V0IiwiYmxpbmQiLCJibG9jayIsImJsb29kIiwiYmxvdyIsImJsdWUiLCJib2FyZCIsImJvYXQiLCJib2R5IiwiYm9tYiIsImJvbWJpbmciLCJib25kIiwiYm9uZSIsImJvb2siLCJib29tIiwiYm9vdCIsImJvcmRlciIsImJvcm4iLCJib3Jyb3ciLCJib3NzIiwiYm90aCIsImJvdGhlciIsImJvdHRsZSIsImJvdHRvbSIsImJvdW5kYXJ5IiwiYm93bCIsImJveCIsImJveSIsImJveWZyaWVuZCIsImJyYWluIiwiYnJhbmNoIiwiYnJhbmQiLCJicmVhZCIsImJyZWFrIiwiYnJlYWtmYXN0IiwiYnJlYXN0IiwiYnJlYXRoIiwiYnJlYXRoZSIsImJyaWNrIiwiYnJpZGdlIiwiYnJpZWYiLCJicmllZmx5IiwiYnJpZ2h0IiwiYnJpbGxpYW50IiwiYnJpbmciLCJCcml0aXNoIiwiYnJvYWQiLCJicm9rZW4iLCJicm90aGVyIiwiYnJvd24iLCJicnVzaCIsImJ1Y2siLCJidWRnZXQiLCJidWlsZCIsImJ1aWxkaW5nIiwiYnVsbGV0IiwiYnVuY2giLCJidXJkZW4iLCJidXJuIiwiYnVyeSIsImJ1cyIsImJ1c2luZXNzIiwiYnVzeSIsImJ1dCIsImJ1dHRlciIsImJ1dHRvbiIsImJ1eSIsImJ1eWVyIiwiYnkiLCJjYWJpbiIsImNhYmluZXQiLCJjYWJsZSIsImNha2UiLCJjYWxjdWxhdGUiLCJjYWxsIiwiY2FtZXJhIiwiY2FtcCIsImNhbXBhaWduIiwiY2FtcHVzIiwiY2FuIiwiQ2FuYWRpYW4iLCJjYW5jZXIiLCJjYW5kaWRhdGUiLCJjYXAiLCJjYXBhYmlsaXR5IiwiY2FwYWJsZSIsImNhcGFjaXR5IiwiY2FwaXRhbCIsImNhcHRhaW4iLCJjYXB0dXJlIiwiY2FyIiwiY2FyYm9uIiwiY2FyZCIsImNhcmUiLCJjYXJlZXIiLCJjYXJlZnVsIiwiY2FyZWZ1bGx5IiwiY2FycmllciIsImNhcnJ5IiwiY2FzZSIsImNhc2giLCJjYXN0IiwiY2F0IiwiY2F0Y2giLCJjYXRlZ29yeSIsIkNhdGhvbGljIiwiY2F1c2UiLCJjZWlsaW5nIiwiY2VsZWJyYXRlIiwiY2VsZWJyYXRpb24iLCJjZWxlYnJpdHkiLCJjZWxsIiwiY2VudGVyIiwiY2VudHJhbCIsImNlbnR1cnkiLCJDRU8iLCJjZXJlbW9ueSIsImNlcnRhaW4iLCJjZXJ0YWlubHkiLCJjaGFpbiIsImNoYWlyIiwiY2hhaXJtYW4iLCJjaGFsbGVuZ2UiLCJjaGFtYmVyIiwiY2hhbXBpb24iLCJjaGFtcGlvbnNoaXAiLCJjaGFuY2UiLCJjaGFuZ2UiLCJjaGFuZ2luZyIsImNoYW5uZWwiLCJjaGFwdGVyIiwiY2hhcmFjdGVyIiwiY2hhcmFjdGVyaXN0aWMiLCJjaGFyYWN0ZXJpemUiLCJjaGFyZ2UiLCJjaGFyaXR5IiwiY2hhcnQiLCJjaGFzZSIsImNoZWFwIiwiY2hlY2siLCJjaGVlayIsImNoZWVzZSIsImNoZWYiLCJjaGVtaWNhbCIsImNoZXN0IiwiY2hpY2tlbiIsImNoaWVmIiwiY2hpbGQiLCJjaGlsZGhvb2QiLCJDaGluZXNlIiwiY2hpcCIsImNob2NvbGF0ZSIsImNob2ljZSIsImNob2xlc3Rlcm9sIiwiY2hvb3NlIiwiQ2hyaXN0aWFuIiwiQ2hyaXN0bWFzIiwiY2h1cmNoIiwiY2lnYXJldHRlIiwiY2lyY2xlIiwiY2lyY3Vtc3RhbmNlIiwiY2l0ZSIsImNpdGl6ZW4iLCJjaXR5IiwiY2l2aWwiLCJjaXZpbGlhbiIsImNsYWltIiwiY2xhc3MiLCJjbGFzc2ljIiwiY2xhc3Nyb29tIiwiY2xlYW4iLCJjbGVhciIsImNsZWFybHkiLCJjbGllbnQiLCJjbGltYXRlIiwiY2xpbWIiLCJjbGluaWMiLCJjbGluaWNhbCIsImNsb2NrIiwiY2xvc2UiLCJjbG9zZWx5IiwiY2xvc2VyIiwiY2xvdGhlcyIsImNsb3RoaW5nIiwiY2xvdWQiLCJjbHViIiwiY2x1ZSIsImNsdXN0ZXIiLCJjb2FjaCIsImNvYWwiLCJjb2FsaXRpb24iLCJjb2FzdCIsImNvYXQiLCJjb2RlIiwiY29mZmVlIiwiY29nbml0aXZlIiwiY29sZCIsImNvbGxhcHNlIiwiY29sbGVhZ3VlIiwiY29sbGVjdCIsImNvbGxlY3Rpb24iLCJjb2xsZWN0aXZlIiwiY29sbGVnZSIsImNvbG9uaWFsIiwiY29sb3IiLCJjb2x1bW4iLCJjb21iaW5hdGlvbiIsImNvbWJpbmUiLCJjb21lIiwiY29tZWR5IiwiY29tZm9ydCIsImNvbWZvcnRhYmxlIiwiY29tbWFuZCIsImNvbW1hbmRlciIsImNvbW1lbnQiLCJjb21tZXJjaWFsIiwiY29tbWlzc2lvbiIsImNvbW1pdCIsImNvbW1pdG1lbnQiLCJjb21taXR0ZWUiLCJjb21tb24iLCJjb21tdW5pY2F0ZSIsImNvbW11bmljYXRpb24iLCJjb21tdW5pdHkiLCJjb21wYW55IiwiY29tcGFyZSIsImNvbXBhcmlzb24iLCJjb21wZXRlIiwiY29tcGV0aXRpb24iLCJjb21wZXRpdGl2ZSIsImNvbXBldGl0b3IiLCJjb21wbGFpbiIsImNvbXBsYWludCIsImNvbXBsZXRlIiwiY29tcGxldGVseSIsImNvbXBsZXgiLCJjb21wbGljYXRlZCIsImNvbXBvbmVudCIsImNvbXBvc2UiLCJjb21wb3NpdGlvbiIsImNvbXByZWhlbnNpdmUiLCJjb21wdXRlciIsImNvbmNlbnRyYXRlIiwiY29uY2VudHJhdGlvbiIsImNvbmNlcHQiLCJjb25jZXJuIiwiY29uY2VybmVkIiwiY29uY2VydCIsImNvbmNsdWRlIiwiY29uY2x1c2lvbiIsImNvbmNyZXRlIiwiY29uZGl0aW9uIiwiY29uZHVjdCIsImNvbmZlcmVuY2UiLCJjb25maWRlbmNlIiwiY29uZmlkZW50IiwiY29uZmlybSIsImNvbmZsaWN0IiwiY29uZnJvbnQiLCJjb25mdXNpb24iLCJDb25ncmVzcyIsImNvbmdyZXNzaW9uYWwiLCJjb25uZWN0IiwiY29ubmVjdGlvbiIsImNvbnNjaW91c25lc3MiLCJjb25zZW5zdXMiLCJjb25zZXF1ZW5jZSIsImNvbnNlcnZhdGl2ZSIsImNvbnNpZGVyIiwiY29uc2lkZXJhYmxlIiwiY29uc2lkZXJhdGlvbiIsImNvbnNpc3QiLCJjb25zaXN0ZW50IiwiY29uc3RhbnQiLCJjb25zdGFudGx5IiwiY29uc3RpdHV0ZSIsImNvbnN0aXR1dGlvbmFsIiwiY29uc3RydWN0IiwiY29uc3RydWN0aW9uIiwiY29uc3VsdGFudCIsImNvbnN1bWUiLCJjb25zdW1lciIsImNvbnN1bXB0aW9uIiwiY29udGFjdCIsImNvbnRhaW4iLCJjb250YWluZXIiLCJjb250ZW1wb3JhcnkiLCJjb250ZW50IiwiY29udGVzdCIsImNvbnRleHQiLCJjb250aW51ZSIsImNvbnRpbnVlZCIsImNvbnRyYWN0IiwiY29udHJhc3QiLCJjb250cmlidXRlIiwiY29udHJpYnV0aW9uIiwiY29udHJvbCIsImNvbnRyb3ZlcnNpYWwiLCJjb250cm92ZXJzeSIsImNvbnZlbnRpb24iLCJjb252ZW50aW9uYWwiLCJjb252ZXJzYXRpb24iLCJjb252ZXJ0IiwiY29udmljdGlvbiIsImNvbnZpbmNlIiwiY29vayIsImNvb2tpZSIsImNvb2tpbmciLCJjb29sIiwiY29vcGVyYXRpb24iLCJjb3AiLCJjb3BlIiwiY29weSIsImNvcmUiLCJjb3JuIiwiY29ybmVyIiwiY29ycG9yYXRlIiwiY29ycG9yYXRpb24iLCJjb3JyZWN0IiwiY29ycmVzcG9uZGVudCIsImNvc3QiLCJjb3R0b24iLCJjb3VjaCIsImNvdWxkIiwiY291bmNpbCIsImNvdW5zZWxvciIsImNvdW50IiwiY291bnRlciIsImNvdW50cnkiLCJjb3VudHkiLCJjb3VwbGUiLCJjb3VyYWdlIiwiY291cnNlIiwiY291cnQiLCJjb3VzaW4iLCJjb3ZlciIsImNvdmVyYWdlIiwiY293IiwiY3JhY2siLCJjcmFmdCIsImNyYXNoIiwiY3JhenkiLCJjcmVhbSIsImNyZWF0ZSIsImNyZWF0aW9uIiwiY3JlYXRpdmUiLCJjcmVhdHVyZSIsImNyZWRpdCIsImNyZXciLCJjcmltZSIsImNyaW1pbmFsIiwiY3Jpc2lzIiwiY3JpdGVyaWEiLCJjcml0aWMiLCJjcml0aWNhbCIsImNyaXRpY2lzbSIsImNyaXRpY2l6ZSIsImNyb3AiLCJjcm9zcyIsImNyb3dkIiwiY3J1Y2lhbCIsImNyeSIsImN1bHR1cmFsIiwiY3VsdHVyZSIsImN1cCIsImN1cmlvdXMiLCJjdXJyZW50IiwiY3VycmVudGx5IiwiY3VycmljdWx1bSIsImN1c3RvbSIsImN1c3RvbWVyIiwiY3V0IiwiY3ljbGUiLCJkYWQiLCJkYWlseSIsImRhbWFnZSIsImRhbmNlIiwiZGFuZ2VyIiwiZGFuZ2Vyb3VzIiwiZGFyZSIsImRhcmsiLCJkYXJrbmVzcyIsImRhdGEiLCJkYXRlIiwiZGF1Z2h0ZXIiLCJkYXkiLCJkZWFkIiwiZGVhbCIsImRlYWxlciIsImRlYXIiLCJkZWF0aCIsImRlYmF0ZSIsImRlYnQiLCJkZWNhZGUiLCJkZWNpZGUiLCJkZWNpc2lvbiIsImRlY2siLCJkZWNsYXJlIiwiZGVjbGluZSIsImRlY3JlYXNlIiwiZGVlcCIsImRlZXBseSIsImRlZXIiLCJkZWZlYXQiLCJkZWZlbmQiLCJkZWZlbmRhbnQiLCJkZWZlbnNlIiwiZGVmZW5zaXZlIiwiZGVmaWNpdCIsImRlZmluZSIsImRlZmluaXRlbHkiLCJkZWZpbml0aW9uIiwiZGVncmVlIiwiZGVsYXkiLCJkZWxpdmVyIiwiZGVsaXZlcnkiLCJkZW1hbmQiLCJkZW1vY3JhY3kiLCJEZW1vY3JhdCIsImRlbW9jcmF0aWMiLCJkZW1vbnN0cmF0ZSIsImRlbW9uc3RyYXRpb24iLCJkZW55IiwiZGVwYXJ0bWVudCIsImRlcGVuZCIsImRlcGVuZGVudCIsImRlcGVuZGluZyIsImRlcGljdCIsImRlcHJlc3Npb24iLCJkZXB0aCIsImRlcHV0eSIsImRlcml2ZSIsImRlc2NyaWJlIiwiZGVzY3JpcHRpb24iLCJkZXNlcnQiLCJkZXNlcnZlIiwiZGVzaWduIiwiZGVzaWduZXIiLCJkZXNpcmUiLCJkZXNrIiwiZGVzcGVyYXRlIiwiZGVzcGl0ZSIsImRlc3Ryb3kiLCJkZXN0cnVjdGlvbiIsImRldGFpbCIsImRldGFpbGVkIiwiZGV0ZWN0IiwiZGV0ZXJtaW5lIiwiZGV2ZWxvcCIsImRldmVsb3BpbmciLCJkZXZlbG9wbWVudCIsImRldmljZSIsImRldm90ZSIsImRpYWxvZ3VlIiwiZGllIiwiZGlldCIsImRpZmZlciIsImRpZmZlcmVuY2UiLCJkaWZmZXJlbnQiLCJkaWZmZXJlbnRseSIsImRpZmZpY3VsdCIsImRpZmZpY3VsdHkiLCJkaWciLCJkaWdpdGFsIiwiZGltZW5zaW9uIiwiZGluaW5nIiwiZGlubmVyIiwiZGlyZWN0IiwiZGlyZWN0aW9uIiwiZGlyZWN0bHkiLCJkaXJlY3RvciIsImRpcnQiLCJkaXJ0eSIsImRpc2FiaWxpdHkiLCJkaXNhZ3JlZSIsImRpc2FwcGVhciIsImRpc2FzdGVyIiwiZGlzY2lwbGluZSIsImRpc2NvdXJzZSIsImRpc2NvdmVyIiwiZGlzY292ZXJ5IiwiZGlzY3JpbWluYXRpb24iLCJkaXNjdXNzIiwiZGlzY3Vzc2lvbiIsImRpc2Vhc2UiLCJkaXNoIiwiZGlzbWlzcyIsImRpc29yZGVyIiwiZGlzcGxheSIsImRpc3B1dGUiLCJkaXN0YW5jZSIsImRpc3RhbnQiLCJkaXN0aW5jdCIsImRpc3RpbmN0aW9uIiwiZGlzdGluZ3Vpc2giLCJkaXN0cmlidXRlIiwiZGlzdHJpYnV0aW9uIiwiZGlzdHJpY3QiLCJkaXZlcnNlIiwiZGl2ZXJzaXR5IiwiZGl2aWRlIiwiZGl2aXNpb24iLCJkaXZvcmNlIiwiRE5BIiwiZG8iLCJkb2N0b3IiLCJkb2N1bWVudCIsImRvZyIsImRvbWVzdGljIiwiZG9taW5hbnQiLCJkb21pbmF0ZSIsImRvb3IiLCJkb3VibGUiLCJkb3VidCIsImRvd24iLCJkb3dudG93biIsImRvemVuIiwiZHJhZnQiLCJkcmFnIiwiZHJhbWEiLCJkcmFtYXRpYyIsImRyYW1hdGljYWxseSIsImRyYXciLCJkcmF3aW5nIiwiZHJlYW0iLCJkcmVzcyIsImRyaW5rIiwiZHJpdmUiLCJkcml2ZXIiLCJkcm9wIiwiZHJ1ZyIsImRyeSIsImR1ZSIsImR1cmluZyIsImR1c3QiLCJkdXR5IiwiZWFjaCIsImVhZ2VyIiwiZWFyIiwiZWFybHkiLCJlYXJuIiwiZWFybmluZ3MiLCJlYXJ0aCIsImVhc2UiLCJlYXNpbHkiLCJlYXN0IiwiZWFzdGVybiIsImVhc3kiLCJlYXQiLCJlY29ub21pYyIsImVjb25vbWljcyIsImVjb25vbWlzdCIsImVjb25vbXkiLCJlZGdlIiwiZWRpdGlvbiIsImVkaXRvciIsImVkdWNhdGUiLCJlZHVjYXRpb24iLCJlZHVjYXRpb25hbCIsImVkdWNhdG9yIiwiZWZmZWN0IiwiZWZmZWN0aXZlIiwiZWZmZWN0aXZlbHkiLCJlZmZpY2llbmN5IiwiZWZmaWNpZW50IiwiZWZmb3J0IiwiZWdnIiwiZWlnaHQiLCJlaXRoZXIiLCJlbGRlcmx5IiwiZWxlY3QiLCJlbGVjdGlvbiIsImVsZWN0cmljIiwiZWxlY3RyaWNpdHkiLCJlbGVjdHJvbmljIiwiZWxlbWVudCIsImVsZW1lbnRhcnkiLCJlbGltaW5hdGUiLCJlbGl0ZSIsImVsc2UiLCJlbHNld2hlcmUiLCJlbWJyYWNlIiwiZW1lcmdlIiwiZW1lcmdlbmN5IiwiZW1pc3Npb24iLCJlbW90aW9uIiwiZW1vdGlvbmFsIiwiZW1waGFzaXMiLCJlbXBoYXNpemUiLCJlbXBsb3kiLCJlbXBsb3llZSIsImVtcGxveWVyIiwiZW1wbG95bWVudCIsImVtcHR5IiwiZW5hYmxlIiwiZW5jb3VudGVyIiwiZW5jb3VyYWdlIiwiZW5kIiwiZW5lbXkiLCJlbmVyZ3kiLCJlbmZvcmNlbWVudCIsImVuZ2FnZSIsImVuZ2luZSIsImVuZ2luZWVyIiwiZW5naW5lZXJpbmciLCJFbmdsaXNoIiwiZW5oYW5jZSIsImVuam95IiwiZW5vcm1vdXMiLCJlbm91Z2giLCJlbnN1cmUiLCJlbnRlciIsImVudGVycHJpc2UiLCJlbnRlcnRhaW5tZW50IiwiZW50aXJlIiwiZW50aXJlbHkiLCJlbnRyYW5jZSIsImVudHJ5IiwiZW52aXJvbm1lbnQiLCJlbnZpcm9ubWVudGFsIiwiZXBpc29kZSIsImVxdWFsIiwiZXF1YWxseSIsImVxdWlwbWVudCIsImVyYSIsImVycm9yIiwiZXNjYXBlIiwiZXNwZWNpYWxseSIsImVzc2F5IiwiZXNzZW50aWFsIiwiZXNzZW50aWFsbHkiLCJlc3RhYmxpc2giLCJlc3RhYmxpc2htZW50IiwiZXN0YXRlIiwiZXN0aW1hdGUiLCJldGMiLCJldGhpY3MiLCJldGhuaWMiLCJFdXJvcGVhbiIsImV2YWx1YXRlIiwiZXZhbHVhdGlvbiIsImV2ZW4iLCJldmVuaW5nIiwiZXZlbnQiLCJldmVudHVhbGx5IiwiZXZlciIsImV2ZXJ5IiwiZXZlcnlib2R5IiwiZXZlcnlkYXkiLCJldmVyeW9uZSIsImV2ZXJ5dGhpbmciLCJldmVyeXdoZXJlIiwiZXZpZGVuY2UiLCJldm9sdXRpb24iLCJldm9sdmUiLCJleGFjdCIsImV4YWN0bHkiLCJleGFtaW5hdGlvbiIsImV4YW1pbmUiLCJleGFtcGxlIiwiZXhjZWVkIiwiZXhjZWxsZW50IiwiZXhjZXB0IiwiZXhjZXB0aW9uIiwiZXhjaGFuZ2UiLCJleGNpdGluZyIsImV4ZWN1dGl2ZSIsImV4ZXJjaXNlIiwiZXhoaWJpdCIsImV4aGliaXRpb24iLCJleGlzdCIsImV4aXN0ZW5jZSIsImV4aXN0aW5nIiwiZXhwYW5kIiwiZXhwYW5zaW9uIiwiZXhwZWN0IiwiZXhwZWN0YXRpb24iLCJleHBlbnNlIiwiZXhwZW5zaXZlIiwiZXhwZXJpZW5jZSIsImV4cGVyaW1lbnQiLCJleHBlcnQiLCJleHBsYWluIiwiZXhwbGFuYXRpb24iLCJleHBsb2RlIiwiZXhwbG9yZSIsImV4cGxvc2lvbiIsImV4cG9zZSIsImV4cG9zdXJlIiwiZXhwcmVzcyIsImV4cHJlc3Npb24iLCJleHRlbmQiLCJleHRlbnNpb24iLCJleHRlbnNpdmUiLCJleHRlbnQiLCJleHRlcm5hbCIsImV4dHJhIiwiZXh0cmFvcmRpbmFyeSIsImV4dHJlbWUiLCJleHRyZW1lbHkiLCJleWUiLCJmYWJyaWMiLCJmYWNlIiwiZmFjaWxpdHkiLCJmYWN0IiwiZmFjdG9yIiwiZmFjdG9yeSIsImZhY3VsdHkiLCJmYWRlIiwiZmFpbCIsImZhaWx1cmUiLCJmYWlyIiwiZmFpcmx5IiwiZmFpdGgiLCJmYWxsIiwiZmFsc2UiLCJmYW1pbGlhciIsImZhbWlseSIsImZhbW91cyIsImZhbiIsImZhbnRhc3kiLCJmYXIiLCJmYXJtIiwiZmFybWVyIiwiZmFzaGlvbiIsImZhc3QiLCJmYXQiLCJmYXRlIiwiZmF0aGVyIiwiZmF1bHQiLCJmYXZvciIsImZhdm9yaXRlIiwiZmVhciIsImZlYXR1cmUiLCJmZWRlcmFsIiwiZmVlIiwiZmVlZCIsImZlZWwiLCJmZWVsaW5nIiwiZmVsbG93IiwiZmVtYWxlIiwiZmVuY2UiLCJmZXciLCJmZXdlciIsImZpYmVyIiwiZmljdGlvbiIsImZpZWxkIiwiZmlmdGVlbiIsImZpZnRoIiwiZmlmdHkiLCJmaWdodCIsImZpZ2h0ZXIiLCJmaWdodGluZyIsImZpZ3VyZSIsImZpbGUiLCJmaWxsIiwiZmlsbSIsImZpbmFsIiwiZmluYWxseSIsImZpbmFuY2UiLCJmaW5hbmNpYWwiLCJmaW5kIiwiZmluZGluZyIsImZpbmUiLCJmaW5nZXIiLCJmaW5pc2giLCJmaXJlIiwiZmlybSIsImZpcnN0IiwiZmlzaCIsImZpc2hpbmciLCJmaXQiLCJmaXRuZXNzIiwiZml2ZSIsImZpeCIsImZsYWciLCJmbGFtZSIsImZsYXQiLCJmbGF2b3IiLCJmbGVlIiwiZmxlc2giLCJmbGlnaHQiLCJmbG9hdCIsImZsb29yIiwiZmxvdyIsImZsb3dlciIsImZseSIsImZvY3VzIiwiZm9sayIsImZvbGxvdyIsImZvbGxvd2luZyIsImZvb2QiLCJmb290IiwiZm9vdGJhbGwiLCJmb3IiLCJmb3JjZSIsImZvcmVpZ24iLCJmb3Jlc3QiLCJmb3JldmVyIiwiZm9yZ2V0IiwiZm9ybSIsImZvcm1hbCIsImZvcm1hdGlvbiIsImZvcm1lciIsImZvcm11bGEiLCJmb3J0aCIsImZvcnR1bmUiLCJmb3J3YXJkIiwiZm91bmQiLCJmb3VuZGF0aW9uIiwiZm91bmRlciIsImZvdXIiLCJmb3VydGgiLCJmcmFtZSIsImZyYW1ld29yayIsImZyZWUiLCJmcmVlZG9tIiwiZnJlZXplIiwiRnJlbmNoIiwiZnJlcXVlbmN5IiwiZnJlcXVlbnQiLCJmcmVxdWVudGx5IiwiZnJlc2giLCJmcmllbmQiLCJmcmllbmRseSIsImZyaWVuZHNoaXAiLCJmcm9tIiwiZnJvbnQiLCJmcnVpdCIsImZydXN0cmF0aW9uIiwiZnVlbCIsImZ1bGwiLCJmdWxseSIsImZ1biIsImZ1bmN0aW9uIiwiZnVuZCIsImZ1bmRhbWVudGFsIiwiZnVuZGluZyIsImZ1bmVyYWwiLCJmdW5ueSIsImZ1cm5pdHVyZSIsImZ1cnRoZXJtb3JlIiwiZnV0dXJlIiwiZ2FpbiIsImdhbGF4eSIsImdhbGxlcnkiLCJnYW1lIiwiZ2FuZyIsImdhcCIsImdhcmFnZSIsImdhcmRlbiIsImdhcmxpYyIsImdhcyIsImdhdGUiLCJnYXRoZXIiLCJnYXkiLCJnYXplIiwiZ2VhciIsImdlbmRlciIsImdlbmUiLCJnZW5lcmFsIiwiZ2VuZXJhbGx5IiwiZ2VuZXJhdGUiLCJnZW5lcmF0aW9uIiwiZ2VuZXRpYyIsImdlbnRsZW1hbiIsImdlbnRseSIsIkdlcm1hbiIsImdlc3R1cmUiLCJnZXQiLCJnaG9zdCIsImdpYW50IiwiZ2lmdCIsImdpZnRlZCIsImdpcmwiLCJnaXJsZnJpZW5kIiwiZ2l2ZSIsImdpdmVuIiwiZ2xhZCIsImdsYW5jZSIsImdsYXNzIiwiZ2xvYmFsIiwiZ2xvdmUiLCJnbyIsImdvYWwiLCJHb2QiLCJnb2xkIiwiZ29sZGVuIiwiZ29sZiIsImdvb2QiLCJnb3Zlcm5tZW50IiwiZ292ZXJub3IiLCJncmFiIiwiZ3JhZGUiLCJncmFkdWFsbHkiLCJncmFkdWF0ZSIsImdyYWluIiwiZ3JhbmQiLCJncmFuZGZhdGhlciIsImdyYW5kbW90aGVyIiwiZ3JhbnQiLCJncmFzcyIsImdyYXZlIiwiZ3JheSIsImdyZWF0IiwiZ3JlYXRlc3QiLCJncmVlbiIsImdyb2NlcnkiLCJncm91bmQiLCJncm91cCIsImdyb3ciLCJncm93aW5nIiwiZ3Jvd3RoIiwiZ3VhcmFudGVlIiwiZ3VhcmQiLCJndWVzcyIsImd1ZXN0IiwiZ3VpZGUiLCJndWlkZWxpbmUiLCJndWlsdHkiLCJndW4iLCJndXkiLCJoYWJpdCIsImhhYml0YXQiLCJoYWlyIiwiaGFsZiIsImhhbGwiLCJoYW5kIiwiaGFuZGZ1bCIsImhhbmRsZSIsImhhbmciLCJoYXBwZW4iLCJoYXBweSIsImhhcmQiLCJoYXJkbHkiLCJoYXQiLCJoYXRlIiwiaGF2ZSIsImhlIiwiaGVhZCIsImhlYWRsaW5lIiwiaGVhZHF1YXJ0ZXJzIiwiaGVhbHRoIiwiaGVhbHRoeSIsImhlYXIiLCJoZWFyaW5nIiwiaGVhcnQiLCJoZWF0IiwiaGVhdmVuIiwiaGVhdmlseSIsImhlYXZ5IiwiaGVlbCIsImhlaWdodCIsImhlbGljb3B0ZXIiLCJoZWxsIiwiaGVsbG8iLCJoZWxwIiwiaGVscGZ1bCIsImhlciIsImhlcmUiLCJoZXJpdGFnZSIsImhlcm8iLCJoZXJzZWxmIiwiaGV5IiwiaGkiLCJoaWRlIiwiaGlnaCIsImhpZ2hsaWdodCIsImhpZ2hseSIsImhpZ2h3YXkiLCJoaWxsIiwiaGltIiwiaGltc2VsZiIsImhpcCIsImhpcmUiLCJoaXMiLCJoaXN0b3JpYW4iLCJoaXN0b3JpYyIsImhpc3RvcmljYWwiLCJoaXN0b3J5IiwiaGl0IiwiaG9sZCIsImhvbGUiLCJob2xpZGF5IiwiaG9seSIsImhvbWUiLCJob21lbGVzcyIsImhvbmVzdCIsImhvbmV5IiwiaG9ub3IiLCJob3BlIiwiaG9yaXpvbiIsImhvcnJvciIsImhvcnNlIiwiaG9zcGl0YWwiLCJob3N0IiwiaG90IiwiaG90ZWwiLCJob3VyIiwiaG91c2UiLCJob3VzZWhvbGQiLCJob3VzaW5nIiwiaG93IiwiaG93ZXZlciIsImh1Z2UiLCJodW1hbiIsImh1bW9yIiwiaHVuZHJlZCIsImh1bmdyeSIsImh1bnRlciIsImh1bnRpbmciLCJodXJ0IiwiaHVzYmFuZCIsImh5cG90aGVzaXMiLCJJIiwiaWNlIiwiaWRlYSIsImlkZWFsIiwiaWRlbnRpZmljYXRpb24iLCJpZGVudGlmeSIsImlkZW50aXR5IiwiaWUiLCJpZiIsImlnbm9yZSIsImlsbCIsImlsbGVnYWwiLCJpbGxuZXNzIiwiaWxsdXN0cmF0ZSIsImltYWdlIiwiaW1hZ2luYXRpb24iLCJpbWFnaW5lIiwiaW1tZWRpYXRlIiwiaW1tZWRpYXRlbHkiLCJpbW1pZ3JhbnQiLCJpbW1pZ3JhdGlvbiIsImltcGFjdCIsImltcGxlbWVudCIsImltcGxpY2F0aW9uIiwiaW1wbHkiLCJpbXBvcnRhbmNlIiwiaW1wb3J0YW50IiwiaW1wb3NlIiwiaW1wb3NzaWJsZSIsImltcHJlc3MiLCJpbXByZXNzaW9uIiwiaW1wcmVzc2l2ZSIsImltcHJvdmUiLCJpbXByb3ZlbWVudCIsImluIiwiaW5jZW50aXZlIiwiaW5jaWRlbnQiLCJpbmNsdWRlIiwiaW5jbHVkaW5nIiwiaW5jb21lIiwiaW5jb3Jwb3JhdGUiLCJpbmNyZWFzZSIsImluY3JlYXNlZCIsImluY3JlYXNpbmciLCJpbmNyZWFzaW5nbHkiLCJpbmNyZWRpYmxlIiwiaW5kZWVkIiwiaW5kZXBlbmRlbmNlIiwiaW5kZXBlbmRlbnQiLCJpbmRleCIsIkluZGlhbiIsImluZGljYXRlIiwiaW5kaWNhdGlvbiIsImluZGl2aWR1YWwiLCJpbmR1c3RyaWFsIiwiaW5kdXN0cnkiLCJpbmZhbnQiLCJpbmZlY3Rpb24iLCJpbmZsYXRpb24iLCJpbmZsdWVuY2UiLCJpbmZvcm0iLCJpbmZvcm1hdGlvbiIsImluZ3JlZGllbnQiLCJpbml0aWFsIiwiaW5pdGlhbGx5IiwiaW5pdGlhdGl2ZSIsImluanVyeSIsImlubmVyIiwiaW5ub2NlbnQiLCJpbnF1aXJ5IiwiaW5zaWRlIiwiaW5zaWdodCIsImluc2lzdCIsImluc3BpcmUiLCJpbnN0YWxsIiwiaW5zdGFuY2UiLCJpbnN0ZWFkIiwiaW5zdGl0dXRpb24iLCJpbnN0aXR1dGlvbmFsIiwiaW5zdHJ1Y3Rpb24iLCJpbnN0cnVjdG9yIiwiaW5zdHJ1bWVudCIsImluc3VyYW5jZSIsImludGVsbGVjdHVhbCIsImludGVsbGlnZW5jZSIsImludGVuZCIsImludGVuc2UiLCJpbnRlbnNpdHkiLCJpbnRlbnRpb24iLCJpbnRlcmFjdGlvbiIsImludGVyZXN0IiwiaW50ZXJlc3RlZCIsImludGVyZXN0aW5nIiwiaW50ZXJuYWwiLCJpbnRlcm5hdGlvbmFsIiwiSW50ZXJuZXQiLCJpbnRlcnByZXQiLCJpbnRlcnByZXRhdGlvbiIsImludGVydmVudGlvbiIsImludGVydmlldyIsImludG8iLCJpbnRyb2R1Y2UiLCJpbnRyb2R1Y3Rpb24iLCJpbnZhc2lvbiIsImludmVzdCIsImludmVzdGlnYXRlIiwiaW52ZXN0aWdhdGlvbiIsImludmVzdGlnYXRvciIsImludmVzdG1lbnQiLCJpbnZlc3RvciIsImludml0ZSIsImludm9sdmUiLCJpbnZvbHZlZCIsImludm9sdmVtZW50IiwiSXJhcWkiLCJJcmlzaCIsImlyb24iLCJJc2xhbWljIiwiaXNsYW5kIiwiSXNyYWVsaSIsImlzc3VlIiwiaXQiLCJJdGFsaWFuIiwiaXRlbSIsIml0cyIsIml0c2VsZiIsImphY2tldCIsImphaWwiLCJKYXBhbmVzZSIsImpldCIsIkpldyIsIkpld2lzaCIsImpvYiIsImpvaW4iLCJqb2ludCIsImpva2UiLCJqb3VybmFsIiwiam91cm5hbGlzdCIsImpvdXJuZXkiLCJqb3kiLCJqdWRnZSIsImp1ZGdtZW50IiwianVpY2UiLCJqdW1wIiwianVuaW9yIiwianVyeSIsImp1c3QiLCJqdXN0aWNlIiwianVzdGlmeSIsImtlZXAiLCJrZXkiLCJraWNrIiwia2lkIiwia2lsbCIsImtpbGxlciIsImtpbGxpbmciLCJraW5kIiwia2luZyIsImtpc3MiLCJraXRjaGVuIiwia25lZSIsImtuaWZlIiwia25vY2siLCJrbm93Iiwia25vd2xlZGdlIiwibGFiIiwibGFiZWwiLCJsYWJvciIsImxhYm9yYXRvcnkiLCJsYWNrIiwibGFkeSIsImxha2UiLCJsYW5kIiwibGFuZHNjYXBlIiwibGFuZ3VhZ2UiLCJsYXAiLCJsYXJnZSIsImxhcmdlbHkiLCJsYXN0IiwibGF0ZSIsImxhdGVyIiwiTGF0aW4iLCJsYXR0ZXIiLCJsYXVnaCIsImxhdW5jaCIsImxhdyIsImxhd24iLCJsYXdzdWl0IiwibGF3eWVyIiwibGF5IiwibGF5ZXIiLCJsZWFkIiwibGVhZGVyIiwibGVhZGVyc2hpcCIsImxlYWRpbmciLCJsZWFmIiwibGVhZ3VlIiwibGVhbiIsImxlYXJuIiwibGVhcm5pbmciLCJsZWFzdCIsImxlYXRoZXIiLCJsZWF2ZSIsImxlZnQiLCJsZWciLCJsZWdhY3kiLCJsZWdhbCIsImxlZ2VuZCIsImxlZ2lzbGF0aW9uIiwibGVnaXRpbWF0ZSIsImxlbW9uIiwibGVuZ3RoIiwibGVzcyIsImxlc3NvbiIsImxldCIsImxldHRlciIsImxldmVsIiwibGliZXJhbCIsImxpYnJhcnkiLCJsaWNlbnNlIiwibGllIiwibGlmZSIsImxpZmVzdHlsZSIsImxpZmV0aW1lIiwibGlmdCIsImxpZ2h0IiwibGlrZSIsImxpa2VseSIsImxpbWl0IiwibGltaXRhdGlvbiIsImxpbWl0ZWQiLCJsaW5lIiwibGluayIsImxpcCIsImxpc3QiLCJsaXN0ZW4iLCJsaXRlcmFsbHkiLCJsaXRlcmFyeSIsImxpdGVyYXR1cmUiLCJsaXR0bGUiLCJsaXZlIiwibGl2aW5nIiwibG9hZCIsImxvYW4iLCJsb2NhbCIsImxvY2F0ZSIsImxvY2F0aW9uIiwibG9jayIsImxvbmciLCJsb29rIiwibG9vc2UiLCJsb3NlIiwibG9zcyIsImxvc3QiLCJsb3QiLCJsb3RzIiwibG91ZCIsImxvdmUiLCJsb3ZlbHkiLCJsb3ZlciIsImxvdyIsImxvd2VyIiwibHVjayIsImx1Y2t5IiwibHVuY2giLCJsdW5nIiwibWFjaGluZSIsIm1hZCIsIm1hZ2F6aW5lIiwibWFpbCIsIm1haW4iLCJtYWlubHkiLCJtYWludGFpbiIsIm1haW50ZW5hbmNlIiwibWFqb3IiLCJtYWpvcml0eSIsIm1ha2UiLCJtYWtlciIsIm1ha2V1cCIsIm1hbGUiLCJtYWxsIiwibWFuIiwibWFuYWdlIiwibWFuYWdlbWVudCIsIm1hbmFnZXIiLCJtYW5uZXIiLCJtYW51ZmFjdHVyZXIiLCJtYW51ZmFjdHVyaW5nIiwibWFueSIsIm1hcCIsIm1hcmdpbiIsIm1hcmsiLCJtYXJrZXQiLCJtYXJrZXRpbmciLCJtYXJyaWFnZSIsIm1hcnJpZWQiLCJtYXJyeSIsIm1hc2siLCJtYXNzIiwibWFzc2l2ZSIsIm1hc3RlciIsIm1hdGNoIiwibWF0ZXJpYWwiLCJtYXRoIiwibWF0dGVyIiwibWF5IiwibWF5YmUiLCJtYXlvciIsIm1lIiwibWVhbCIsIm1lYW4iLCJtZWFuaW5nIiwibWVhbndoaWxlIiwibWVhc3VyZSIsIm1lYXN1cmVtZW50IiwibWVhdCIsIm1lY2hhbmlzbSIsIm1lZGlhIiwibWVkaWNhbCIsIm1lZGljYXRpb24iLCJtZWRpY2luZSIsIm1lZGl1bSIsIm1lZXQiLCJtZWV0aW5nIiwibWVtYmVyIiwibWVtYmVyc2hpcCIsIm1lbW9yeSIsIm1lbnRhbCIsIm1lbnRpb24iLCJtZW51IiwibWVyZSIsIm1lcmVseSIsIm1lc3MiLCJtZXNzYWdlIiwibWV0YWwiLCJtZXRlciIsIm1ldGhvZCIsIk1leGljYW4iLCJtaWRkbGUiLCJtaWdodCIsIm1pbGl0YXJ5IiwibWlsayIsIm1pbGxpb24iLCJtaW5kIiwibWluZSIsIm1pbmlzdGVyIiwibWlub3IiLCJtaW5vcml0eSIsIm1pbnV0ZSIsIm1pcmFjbGUiLCJtaXJyb3IiLCJtaXNzIiwibWlzc2lsZSIsIm1pc3Npb24iLCJtaXN0YWtlIiwibWl4IiwibWl4dHVyZSIsIm1vZGUiLCJtb2RlbCIsIm1vZGVyYXRlIiwibW9kZXJuIiwibW9kZXN0IiwibW9tIiwibW9tZW50IiwibW9uZXkiLCJtb25pdG9yIiwibW9udGgiLCJtb29kIiwibW9vbiIsIm1vcmFsIiwibW9yZSIsIm1vcmVvdmVyIiwibW9ybmluZyIsIm1vcnRnYWdlIiwibW9zdCIsIm1vc3RseSIsIm1vdGhlciIsIm1vdGlvbiIsIm1vdGl2YXRpb24iLCJtb3RvciIsIm1vdW50IiwibW91bnRhaW4iLCJtb3VzZSIsIm1vdXRoIiwibW92ZSIsIm1vdmVtZW50IiwibW92aWUiLCJNciIsIk1ycyIsIk1zIiwibXVjaCIsIm11bHRpcGxlIiwibXVyZGVyIiwibXVzY2xlIiwibXVzZXVtIiwibXVzaWMiLCJtdXNpY2FsIiwibXVzaWNpYW4iLCJNdXNsaW0iLCJtdXN0IiwibXV0dWFsIiwibXkiLCJteXNlbGYiLCJteXN0ZXJ5IiwibXl0aCIsIm5ha2VkIiwibmFtZSIsIm5hcnJhdGl2ZSIsIm5hcnJvdyIsIm5hdGlvbiIsIm5hdGlvbmFsIiwibmF0aXZlIiwibmF0dXJhbCIsIm5hdHVyYWxseSIsIm5hdHVyZSIsIm5lYXIiLCJuZWFyYnkiLCJuZWFybHkiLCJuZWNlc3NhcmlseSIsIm5lY2Vzc2FyeSIsIm5lY2siLCJuZWVkIiwibmVnYXRpdmUiLCJuZWdvdGlhdGUiLCJuZWdvdGlhdGlvbiIsIm5laWdoYm9yIiwibmVpZ2hib3Job29kIiwibmVpdGhlciIsIm5lcnZlIiwibmVydm91cyIsIm5ldCIsIm5ldHdvcmsiLCJuZXZlciIsIm5ldmVydGhlbGVzcyIsIm5ldyIsIm5ld2x5IiwibmV3cyIsIm5ld3NwYXBlciIsIm5leHQiLCJuaWNlIiwibmlnaHQiLCJuaW5lIiwibm8iLCJub2JvZHkiLCJub2QiLCJub2lzZSIsIm5vbWluYXRpb24iLCJub25lIiwibm9uZXRoZWxlc3MiLCJub3IiLCJub3JtYWwiLCJub3JtYWxseSIsIm5vcnRoIiwibm9ydGhlcm4iLCJub3NlIiwibm90Iiwibm90ZSIsIm5vdGhpbmciLCJub3RpY2UiLCJub3Rpb24iLCJub3ZlbCIsIm5vdyIsIm5vd2hlcmUiLCJudWNsZWFyIiwibnVtYmVyIiwibnVtZXJvdXMiLCJudXJzZSIsIm51dCIsIm9iamVjdCIsIm9iamVjdGl2ZSIsIm9ibGlnYXRpb24iLCJvYnNlcnZhdGlvbiIsIm9ic2VydmUiLCJvYnNlcnZlciIsIm9idGFpbiIsIm9idmlvdXMiLCJvYnZpb3VzbHkiLCJvY2Nhc2lvbiIsIm9jY2FzaW9uYWxseSIsIm9jY3VwYXRpb24iLCJvY2N1cHkiLCJvY2N1ciIsIm9jZWFuIiwib2RkIiwib2RkcyIsIm9mIiwib2ZmIiwib2ZmZW5zZSIsIm9mZmVuc2l2ZSIsIm9mZmVyIiwib2ZmaWNlIiwib2ZmaWNlciIsIm9mZmljaWFsIiwib2Z0ZW4iLCJvaCIsIm9pbCIsIm9rIiwib2theSIsIm9sZCIsIk9seW1waWMiLCJvbiIsIm9uY2UiLCJvbmUiLCJvbmdvaW5nIiwib25pb24iLCJvbmxpbmUiLCJvbmx5Iiwib250byIsIm9wZW4iLCJvcGVuaW5nIiwib3BlcmF0ZSIsIm9wZXJhdGluZyIsIm9wZXJhdGlvbiIsIm9wZXJhdG9yIiwib3BpbmlvbiIsIm9wcG9uZW50Iiwib3Bwb3J0dW5pdHkiLCJvcHBvc2UiLCJvcHBvc2l0ZSIsIm9wcG9zaXRpb24iLCJvcHRpb24iLCJvciIsIm9yYW5nZSIsIm9yZGVyIiwib3JkaW5hcnkiLCJvcmdhbmljIiwib3JnYW5pemF0aW9uIiwib3JnYW5pemUiLCJvcmllbnRhdGlvbiIsIm9yaWdpbiIsIm9yaWdpbmFsIiwib3JpZ2luYWxseSIsIm90aGVyIiwib3RoZXJzIiwib3RoZXJ3aXNlIiwib3VnaHQiLCJvdXIiLCJvdXJzZWx2ZXMiLCJvdXQiLCJvdXRjb21lIiwib3V0c2lkZSIsIm92ZW4iLCJvdmVyIiwib3ZlcmFsbCIsIm92ZXJjb21lIiwib3Zlcmxvb2siLCJvd2UiLCJvd24iLCJvd25lciIsInBhY2UiLCJwYWNrIiwicGFja2FnZSIsInBhZ2UiLCJwYWluIiwicGFpbmZ1bCIsInBhaW50IiwicGFpbnRlciIsInBhaW50aW5nIiwicGFpciIsInBhbGUiLCJQYWxlc3RpbmlhbiIsInBhbG0iLCJwYW4iLCJwYW5lbCIsInBhbnQiLCJwYXBlciIsInBhcmVudCIsInBhcmsiLCJwYXJraW5nIiwicGFydCIsInBhcnRpY2lwYW50IiwicGFydGljaXBhdGUiLCJwYXJ0aWNpcGF0aW9uIiwicGFydGljdWxhciIsInBhcnRpY3VsYXJseSIsInBhcnRseSIsInBhcnRuZXIiLCJwYXJ0bmVyc2hpcCIsInBhcnR5IiwicGFzcyIsInBhc3NhZ2UiLCJwYXNzZW5nZXIiLCJwYXNzaW9uIiwicGFzdCIsInBhdGNoIiwicGF0aCIsInBhdGllbnQiLCJwYXR0ZXJuIiwicGF1c2UiLCJwYXkiLCJwYXltZW50IiwiUEMiLCJwZWFjZSIsInBlYWsiLCJwZWVyIiwicGVuYWx0eSIsInBlb3BsZSIsInBlcHBlciIsInBlciIsInBlcmNlaXZlIiwicGVyY2VudGFnZSIsInBlcmNlcHRpb24iLCJwZXJmZWN0IiwicGVyZmVjdGx5IiwicGVyZm9ybSIsInBlcmZvcm1hbmNlIiwicGVyaGFwcyIsInBlcmlvZCIsInBlcm1hbmVudCIsInBlcm1pc3Npb24iLCJwZXJtaXQiLCJwZXJzb24iLCJwZXJzb25hbCIsInBlcnNvbmFsaXR5IiwicGVyc29uYWxseSIsInBlcnNvbm5lbCIsInBlcnNwZWN0aXZlIiwicGVyc3VhZGUiLCJwZXQiLCJwaGFzZSIsInBoZW5vbWVub24iLCJwaGlsb3NvcGh5IiwicGhvbmUiLCJwaG90byIsInBob3RvZ3JhcGgiLCJwaG90b2dyYXBoZXIiLCJwaHJhc2UiLCJwaHlzaWNhbCIsInBoeXNpY2FsbHkiLCJwaHlzaWNpYW4iLCJwaWFubyIsInBpY2siLCJwaWN0dXJlIiwicGllIiwicGllY2UiLCJwaWxlIiwicGlsb3QiLCJwaW5lIiwicGluayIsInBpcGUiLCJwaXRjaCIsInBsYWNlIiwicGxhbiIsInBsYW5lIiwicGxhbmV0IiwicGxhbm5pbmciLCJwbGFudCIsInBsYXN0aWMiLCJwbGF0ZSIsInBsYXRmb3JtIiwicGxheSIsInBsYXllciIsInBsZWFzZSIsInBsZWFzdXJlIiwicGxlbnR5IiwicGxvdCIsInBsdXMiLCJQTSIsInBvY2tldCIsInBvZW0iLCJwb2V0IiwicG9ldHJ5IiwicG9pbnQiLCJwb2xlIiwicG9saWNlIiwicG9saWN5IiwicG9saXRpY2FsIiwicG9saXRpY2FsbHkiLCJwb2xpdGljaWFuIiwicG9saXRpY3MiLCJwb2xsIiwicG9sbHV0aW9uIiwicG9vbCIsInBvb3IiLCJwb3AiLCJwb3B1bGFyIiwicG9wdWxhdGlvbiIsInBvcmNoIiwicG9ydCIsInBvcnRpb24iLCJwb3J0cmFpdCIsInBvcnRyYXkiLCJwb3NlIiwicG9zaXRpb24iLCJwb3NpdGl2ZSIsInBvc3Nlc3MiLCJwb3NzaWJpbGl0eSIsInBvc3NpYmxlIiwicG9zc2libHkiLCJwb3N0IiwicG90IiwicG90YXRvIiwicG90ZW50aWFsIiwicG90ZW50aWFsbHkiLCJwb3VuZCIsInBvdXIiLCJwb3ZlcnR5IiwicG93ZGVyIiwicG93ZXIiLCJwb3dlcmZ1bCIsInByYWN0aWNhbCIsInByYWN0aWNlIiwicHJheSIsInByYXllciIsInByZWNpc2VseSIsInByZWRpY3QiLCJwcmVmZXIiLCJwcmVmZXJlbmNlIiwicHJlZ25hbmN5IiwicHJlZ25hbnQiLCJwcmVwYXJhdGlvbiIsInByZXBhcmUiLCJwcmVzY3JpcHRpb24iLCJwcmVzZW5jZSIsInByZXNlbnQiLCJwcmVzZW50YXRpb24iLCJwcmVzZXJ2ZSIsInByZXNpZGVudCIsInByZXNpZGVudGlhbCIsInByZXNzIiwicHJlc3N1cmUiLCJwcmV0ZW5kIiwicHJldHR5IiwicHJldmVudCIsInByZXZpb3VzIiwicHJldmlvdXNseSIsInByaWNlIiwicHJpZGUiLCJwcmllc3QiLCJwcmltYXJpbHkiLCJwcmltYXJ5IiwicHJpbWUiLCJwcmluY2lwYWwiLCJwcmluY2lwbGUiLCJwcmludCIsInByaW9yIiwicHJpb3JpdHkiLCJwcmlzb24iLCJwcmlzb25lciIsInByaXZhY3kiLCJwcml2YXRlIiwicHJvYmFibHkiLCJwcm9ibGVtIiwicHJvY2VkdXJlIiwicHJvY2VlZCIsInByb2Nlc3MiLCJwcm9kdWNlIiwicHJvZHVjZXIiLCJwcm9kdWN0IiwicHJvZHVjdGlvbiIsInByb2Zlc3Npb24iLCJwcm9mZXNzaW9uYWwiLCJwcm9mZXNzb3IiLCJwcm9maWxlIiwicHJvZml0IiwicHJvZ3JhbSIsInByb2dyZXNzIiwicHJvamVjdCIsInByb21pbmVudCIsInByb21pc2UiLCJwcm9tb3RlIiwicHJvbXB0IiwicHJvb2YiLCJwcm9wZXIiLCJwcm9wZXJseSIsInByb3BlcnR5IiwicHJvcG9ydGlvbiIsInByb3Bvc2FsIiwicHJvcG9zZSIsInByb3Bvc2VkIiwicHJvc2VjdXRvciIsInByb3NwZWN0IiwicHJvdGVjdCIsInByb3RlY3Rpb24iLCJwcm90ZWluIiwicHJvdGVzdCIsInByb3VkIiwicHJvdmUiLCJwcm92aWRlIiwicHJvdmlkZXIiLCJwcm92aW5jZSIsInByb3Zpc2lvbiIsInBzeWNob2xvZ2ljYWwiLCJwc3ljaG9sb2dpc3QiLCJwc3ljaG9sb2d5IiwicHVibGljIiwicHVibGljYXRpb24iLCJwdWJsaWNseSIsInB1Ymxpc2giLCJwdWJsaXNoZXIiLCJwdWxsIiwicHVuaXNobWVudCIsInB1cmNoYXNlIiwicHVyZSIsInB1cnBvc2UiLCJwdXJzdWUiLCJwdXNoIiwicHV0IiwicXVhbGlmeSIsInF1YWxpdHkiLCJxdWFydGVyIiwicXVhcnRlcmJhY2siLCJxdWVzdGlvbiIsInF1aWNrIiwicXVpY2tseSIsInF1aWV0IiwicXVpZXRseSIsInF1aXQiLCJxdWl0ZSIsInF1b3RlIiwicmFjZSIsInJhY2lhbCIsInJhZGljYWwiLCJyYWRpbyIsInJhaWwiLCJyYWluIiwicmFpc2UiLCJyYW5nZSIsInJhbmsiLCJyYXBpZCIsInJhcGlkbHkiLCJyYXJlIiwicmFyZWx5IiwicmF0ZSIsInJhdGhlciIsInJhdGluZyIsInJhdGlvIiwicmF3IiwicmVhY2giLCJyZWFjdCIsInJlYWN0aW9uIiwicmVhZCIsInJlYWRlciIsInJlYWRpbmciLCJyZWFkeSIsInJlYWwiLCJyZWFsaXR5IiwicmVhbGl6ZSIsInJlYWxseSIsInJlYXNvbiIsInJlYXNvbmFibGUiLCJyZWNhbGwiLCJyZWNlaXZlIiwicmVjZW50IiwicmVjZW50bHkiLCJyZWNpcGUiLCJyZWNvZ25pdGlvbiIsInJlY29nbml6ZSIsInJlY29tbWVuZCIsInJlY29tbWVuZGF0aW9uIiwicmVjb3JkIiwicmVjb3JkaW5nIiwicmVjb3ZlciIsInJlY292ZXJ5IiwicmVjcnVpdCIsInJlZCIsInJlZHVjZSIsInJlZHVjdGlvbiIsInJlZmVyIiwicmVmZXJlbmNlIiwicmVmbGVjdCIsInJlZmxlY3Rpb24iLCJyZWZvcm0iLCJyZWZ1Z2VlIiwicmVmdXNlIiwicmVnYXJkIiwicmVnYXJkaW5nIiwicmVnYXJkbGVzcyIsInJlZ2ltZSIsInJlZ2lvbiIsInJlZ2lvbmFsIiwicmVnaXN0ZXIiLCJyZWd1bGFyIiwicmVndWxhcmx5IiwicmVndWxhdGUiLCJyZWd1bGF0aW9uIiwicmVpbmZvcmNlIiwicmVqZWN0IiwicmVsYXRlIiwicmVsYXRpb24iLCJyZWxhdGlvbnNoaXAiLCJyZWxhdGl2ZSIsInJlbGF0aXZlbHkiLCJyZWxheCIsInJlbGVhc2UiLCJyZWxldmFudCIsInJlbGllZiIsInJlbGlnaW9uIiwicmVsaWdpb3VzIiwicmVseSIsInJlbWFpbiIsInJlbWFpbmluZyIsInJlbWFya2FibGUiLCJyZW1lbWJlciIsInJlbWluZCIsInJlbW90ZSIsInJlbW92ZSIsInJlcGVhdCIsInJlcGVhdGVkbHkiLCJyZXBsYWNlIiwicmVwbHkiLCJyZXBvcnQiLCJyZXBvcnRlciIsInJlcHJlc2VudCIsInJlcHJlc2VudGF0aW9uIiwicmVwcmVzZW50YXRpdmUiLCJSZXB1YmxpY2FuIiwicmVwdXRhdGlvbiIsInJlcXVlc3QiLCJyZXF1aXJlIiwicmVxdWlyZW1lbnQiLCJyZXNlYXJjaCIsInJlc2VhcmNoZXIiLCJyZXNlbWJsZSIsInJlc2VydmF0aW9uIiwicmVzaWRlbnQiLCJyZXNpc3QiLCJyZXNpc3RhbmNlIiwicmVzb2x1dGlvbiIsInJlc29sdmUiLCJyZXNvcnQiLCJyZXNvdXJjZSIsInJlc3BlY3QiLCJyZXNwb25kIiwicmVzcG9uZGVudCIsInJlc3BvbnNlIiwicmVzcG9uc2liaWxpdHkiLCJyZXNwb25zaWJsZSIsInJlc3QiLCJyZXN0YXVyYW50IiwicmVzdG9yZSIsInJlc3RyaWN0aW9uIiwicmVzdWx0IiwicmV0YWluIiwicmV0aXJlIiwicmV0aXJlbWVudCIsInJldHVybiIsInJldmVhbCIsInJldmVudWUiLCJyZXZpZXciLCJyZXZvbHV0aW9uIiwicmh5dGhtIiwicmljZSIsInJpY2giLCJyaWQiLCJyaWRlIiwicmlmbGUiLCJyaWdodCIsInJpbmciLCJyaXNlIiwicmlzayIsInJpdmVyIiwicm9hZCIsInJvY2siLCJyb2xlIiwicm9sbCIsInJvbWFudGljIiwicm9vZiIsInJvb20iLCJyb290Iiwicm9wZSIsInJvc2UiLCJyb3VnaCIsInJvdWdobHkiLCJyb3VuZCIsInJvdXRlIiwicm91dGluZSIsInJvdyIsInJ1YiIsInJ1bGUiLCJydW4iLCJydW5uaW5nIiwicnVyYWwiLCJydXNoIiwiUnVzc2lhbiIsInNhY3JlZCIsInNhZCIsInNhZmUiLCJzYWZldHkiLCJzYWtlIiwic2FsYWQiLCJzYWxhcnkiLCJzYWxlIiwic2FsZXMiLCJzYWx0Iiwic2FtZSIsInNhbXBsZSIsInNhbmN0aW9uIiwic2FuZCIsInNhdGVsbGl0ZSIsInNhdGlzZmFjdGlvbiIsInNhdGlzZnkiLCJzYXVjZSIsInNhdmUiLCJzYXZpbmciLCJzYXkiLCJzY2FsZSIsInNjYW5kYWwiLCJzY2FyZWQiLCJzY2VuYXJpbyIsInNjZW5lIiwic2NoZWR1bGUiLCJzY2hlbWUiLCJzY2hvbGFyIiwic2Nob2xhcnNoaXAiLCJzY2hvb2wiLCJzY2llbmNlIiwic2NpZW50aWZpYyIsInNjaWVudGlzdCIsInNjb3BlIiwic2NvcmUiLCJzY3JlYW0iLCJzY3JlZW4iLCJzY3JpcHQiLCJzZWEiLCJzZWFyY2giLCJzZWFzb24iLCJzZWF0Iiwic2Vjb25kIiwic2VjcmV0Iiwic2VjcmV0YXJ5Iiwic2VjdGlvbiIsInNlY3RvciIsInNlY3VyZSIsInNlY3VyaXR5Iiwic2VlIiwic2VlZCIsInNlZWsiLCJzZWVtIiwic2VnbWVudCIsInNlaXplIiwic2VsZWN0Iiwic2VsZWN0aW9uIiwic2VsZiIsInNlbGwiLCJTZW5hdGUiLCJzZW5hdG9yIiwic2VuZCIsInNlbmlvciIsInNlbnNlIiwic2Vuc2l0aXZlIiwic2VudGVuY2UiLCJzZXBhcmF0ZSIsInNlcXVlbmNlIiwic2VyaWVzIiwic2VyaW91cyIsInNlcmlvdXNseSIsInNlcnZlIiwic2VydmljZSIsInNlc3Npb24iLCJzZXQiLCJzZXR0aW5nIiwic2V0dGxlIiwic2V0dGxlbWVudCIsInNldmVuIiwic2V2ZXJhbCIsInNldmVyZSIsInNleCIsInNleHVhbCIsInNoYWRlIiwic2hhZG93Iiwic2hha2UiLCJzaGFsbCIsInNoYXBlIiwic2hhcmUiLCJzaGFycCIsInNoZSIsInNoZWV0Iiwic2hlbGYiLCJzaGVsbCIsInNoZWx0ZXIiLCJzaGlmdCIsInNoaW5lIiwic2hpcCIsInNoaXJ0Iiwic2hpdCIsInNob2NrIiwic2hvZSIsInNob290Iiwic2hvb3RpbmciLCJzaG9wIiwic2hvcHBpbmciLCJzaG9yZSIsInNob3J0Iiwic2hvcnRseSIsInNob3QiLCJzaG91bGQiLCJzaG91bGRlciIsInNob3V0Iiwic2hvdyIsInNob3dlciIsInNocnVnIiwic2h1dCIsInNpY2siLCJzaWRlIiwic2lnaCIsInNpZ2h0Iiwic2lnbiIsInNpZ25hbCIsInNpZ25pZmljYW5jZSIsInNpZ25pZmljYW50Iiwic2lnbmlmaWNhbnRseSIsInNpbGVuY2UiLCJzaWxlbnQiLCJzaWx2ZXIiLCJzaW1pbGFyIiwic2ltaWxhcmx5Iiwic2ltcGxlIiwic2ltcGx5Iiwic2luIiwic2luY2UiLCJzaW5nIiwic2luZ2VyIiwic2luZ2xlIiwic2luayIsInNpciIsInNpc3RlciIsInNpdCIsInNpdGUiLCJzaXR1YXRpb24iLCJzaXgiLCJzaXplIiwic2tpIiwic2tpbGwiLCJza2luIiwic2t5Iiwic2xhdmUiLCJzbGVlcCIsInNsaWNlIiwic2xpZGUiLCJzbGlnaHQiLCJzbGlnaHRseSIsInNsaXAiLCJzbG93Iiwic2xvd2x5Iiwic21hbGwiLCJzbWFydCIsInNtZWxsIiwic21pbGUiLCJzbW9rZSIsInNtb290aCIsInNuYXAiLCJzbm93Iiwic28iLCJzb2NjZXIiLCJzb2NpYWwiLCJzb2NpZXR5Iiwic29mdCIsInNvZnR3YXJlIiwic29pbCIsInNvbGFyIiwic29sZGllciIsInNvbGlkIiwic29sdXRpb24iLCJzb2x2ZSIsInNvbWUiLCJzb21lYm9keSIsInNvbWVob3ciLCJzb21lb25lIiwic29tZXRoaW5nIiwic29tZXRpbWVzIiwic29tZXdoYXQiLCJzb21ld2hlcmUiLCJzb24iLCJzb25nIiwic29vbiIsInNvcGhpc3RpY2F0ZWQiLCJzb3JyeSIsInNvcnQiLCJzb3VsIiwic291bmQiLCJzb3VwIiwic291cmNlIiwic291dGgiLCJzb3V0aGVybiIsIlNvdmlldCIsInNwYWNlIiwiU3BhbmlzaCIsInNwZWFrIiwic3BlYWtlciIsInNwZWNpYWwiLCJzcGVjaWFsaXN0Iiwic3BlY2llcyIsInNwZWNpZmljIiwic3BlY2lmaWNhbGx5Iiwic3BlZWNoIiwic3BlZWQiLCJzcGVuZCIsInNwZW5kaW5nIiwic3BpbiIsInNwaXJpdCIsInNwaXJpdHVhbCIsInNwbGl0Iiwic3Bva2VzbWFuIiwic3BvcnQiLCJzcG90Iiwic3ByZWFkIiwic3ByaW5nIiwic3F1YXJlIiwic3F1ZWV6ZSIsInN0YWJpbGl0eSIsInN0YWJsZSIsInN0YWZmIiwic3RhZ2UiLCJzdGFpciIsInN0YWtlIiwic3RhbmQiLCJzdGFuZGFyZCIsInN0YW5kaW5nIiwic3RhciIsInN0YXJlIiwic3RhcnQiLCJzdGF0ZSIsInN0YXRlbWVudCIsInN0YXRpb24iLCJzdGF0aXN0aWNzIiwic3RhdHVzIiwic3RheSIsInN0ZWFkeSIsInN0ZWFsIiwic3RlZWwiLCJzdGVwIiwic3RpY2siLCJzdGlsbCIsInN0aXIiLCJzdG9jayIsInN0b21hY2giLCJzdG9uZSIsInN0b3AiLCJzdG9yYWdlIiwic3RvcmUiLCJzdG9ybSIsInN0b3J5Iiwic3RyYWlnaHQiLCJzdHJhbmdlIiwic3RyYW5nZXIiLCJzdHJhdGVnaWMiLCJzdHJhdGVneSIsInN0cmVhbSIsInN0cmVldCIsInN0cmVuZ3RoIiwic3RyZW5ndGhlbiIsInN0cmVzcyIsInN0cmV0Y2giLCJzdHJpa2UiLCJzdHJpbmciLCJzdHJpcCIsInN0cm9rZSIsInN0cm9uZyIsInN0cm9uZ2x5Iiwic3RydWN0dXJlIiwic3RydWdnbGUiLCJzdHVkZW50Iiwic3R1ZGlvIiwic3R1ZHkiLCJzdHVmZiIsInN0dXBpZCIsInN0eWxlIiwic3ViamVjdCIsInN1Ym1pdCIsInN1YnNlcXVlbnQiLCJzdWJzdGFuY2UiLCJzdWJzdGFudGlhbCIsInN1Y2NlZWQiLCJzdWNjZXNzIiwic3VjY2Vzc2Z1bCIsInN1Y2Nlc3NmdWxseSIsInN1Y2giLCJzdWRkZW4iLCJzdWRkZW5seSIsInN1ZSIsInN1ZmZlciIsInN1ZmZpY2llbnQiLCJzdWdhciIsInN1Z2dlc3QiLCJzdWdnZXN0aW9uIiwic3VpY2lkZSIsInN1aXQiLCJzdW1tZXIiLCJzdW1taXQiLCJzdW4iLCJzdXBlciIsInN1cHBseSIsInN1cHBvcnQiLCJzdXBwb3J0ZXIiLCJzdXBwb3NlIiwic3VwcG9zZWQiLCJTdXByZW1lIiwic3VyZSIsInN1cmVseSIsInN1cmZhY2UiLCJzdXJnZXJ5Iiwic3VycHJpc2UiLCJzdXJwcmlzZWQiLCJzdXJwcmlzaW5nIiwic3VycHJpc2luZ2x5Iiwic3Vycm91bmQiLCJzdXJ2ZXkiLCJzdXJ2aXZhbCIsInN1cnZpdmUiLCJzdXJ2aXZvciIsInN1c3BlY3QiLCJzdXN0YWluIiwic3dlYXIiLCJzd2VlcCIsInN3ZWV0Iiwic3dpbSIsInN3aW5nIiwic3dpdGNoIiwic3ltYm9sIiwic3ltcHRvbSIsInN5c3RlbSIsInRhYmxlIiwidGFibGVzcG9vbiIsInRhY3RpYyIsInRhaWwiLCJ0YWtlIiwidGFsZSIsInRhbGVudCIsInRhbGsiLCJ0YWxsIiwidGFuayIsInRhcCIsInRhcGUiLCJ0YXJnZXQiLCJ0YXNrIiwidGFzdGUiLCJ0YXgiLCJ0YXhwYXllciIsInRlYSIsInRlYWNoIiwidGVhY2hlciIsInRlYWNoaW5nIiwidGVhbSIsInRlYXIiLCJ0ZWFzcG9vbiIsInRlY2huaWNhbCIsInRlY2huaXF1ZSIsInRlY2hub2xvZ3kiLCJ0ZWVuIiwidGVlbmFnZXIiLCJ0ZWxlcGhvbmUiLCJ0ZWxlc2NvcGUiLCJ0ZWxldmlzaW9uIiwidGVsbCIsInRlbXBlcmF0dXJlIiwidGVtcG9yYXJ5IiwidGVuIiwidGVuZCIsInRlbmRlbmN5IiwidGVubmlzIiwidGVuc2lvbiIsInRlbnQiLCJ0ZXJtIiwidGVybXMiLCJ0ZXJyaWJsZSIsInRlcnJpdG9yeSIsInRlcnJvciIsInRlcnJvcmlzbSIsInRlcnJvcmlzdCIsInRlc3QiLCJ0ZXN0aWZ5IiwidGVzdGltb255IiwidGVzdGluZyIsInRleHQiLCJ0aGFuIiwidGhhbmsiLCJ0aGFua3MiLCJ0aGF0IiwidGhlIiwidGhlYXRlciIsInRoZWlyIiwidGhlbSIsInRoZW1lIiwidGhlbXNlbHZlcyIsInRoZW4iLCJ0aGVvcnkiLCJ0aGVyYXB5IiwidGhlcmUiLCJ0aGVyZWZvcmUiLCJ0aGVzZSIsInRoZXkiLCJ0aGljayIsInRoaW4iLCJ0aGluZyIsInRoaW5rIiwidGhpbmtpbmciLCJ0aGlyZCIsInRoaXJ0eSIsInRoaXMiLCJ0aG9zZSIsInRob3VnaCIsInRob3VnaHQiLCJ0aG91c2FuZCIsInRocmVhdCIsInRocmVhdGVuIiwidGhyZWUiLCJ0aHJvYXQiLCJ0aHJvdWdoIiwidGhyb3VnaG91dCIsInRocm93IiwidGh1cyIsInRpY2tldCIsInRpZSIsInRpZ2h0IiwidGltZSIsInRpbnkiLCJ0aXAiLCJ0aXJlIiwidGlyZWQiLCJ0aXNzdWUiLCJ0aXRsZSIsInRvIiwidG9iYWNjbyIsInRvZGF5IiwidG9lIiwidG9nZXRoZXIiLCJ0b21hdG8iLCJ0b21vcnJvdyIsInRvbmUiLCJ0b25ndWUiLCJ0b25pZ2h0IiwidG9vIiwidG9vbCIsInRvb3RoIiwidG9wIiwidG9waWMiLCJ0b3NzIiwidG90YWwiLCJ0b3RhbGx5IiwidG91Y2giLCJ0b3VnaCIsInRvdXIiLCJ0b3VyaXN0IiwidG91cm5hbWVudCIsInRvd2FyZCIsInRvd2FyZHMiLCJ0b3dlciIsInRvd24iLCJ0b3kiLCJ0cmFjZSIsInRyYWNrIiwidHJhZGUiLCJ0cmFkaXRpb24iLCJ0cmFkaXRpb25hbCIsInRyYWZmaWMiLCJ0cmFnZWR5IiwidHJhaWwiLCJ0cmFpbiIsInRyYWluaW5nIiwidHJhbnNmZXIiLCJ0cmFuc2Zvcm0iLCJ0cmFuc2Zvcm1hdGlvbiIsInRyYW5zaXRpb24iLCJ0cmFuc2xhdGUiLCJ0cmFuc3BvcnRhdGlvbiIsInRyYXZlbCIsInRyZWF0IiwidHJlYXRtZW50IiwidHJlYXR5IiwidHJlZSIsInRyZW1lbmRvdXMiLCJ0cmVuZCIsInRyaWFsIiwidHJpYmUiLCJ0cmljayIsInRyaXAiLCJ0cm9vcCIsInRyb3VibGUiLCJ0cnVjayIsInRydWUiLCJ0cnVseSIsInRydXN0IiwidHJ1dGgiLCJ0cnkiLCJ0dWJlIiwidHVubmVsIiwidHVybiIsIlRWIiwidHdlbHZlIiwidHdlbnR5IiwidHdpY2UiLCJ0d2luIiwidHdvIiwidHlwZSIsInR5cGljYWwiLCJ0eXBpY2FsbHkiLCJ1Z2x5IiwidWx0aW1hdGUiLCJ1bHRpbWF0ZWx5IiwidW5hYmxlIiwidW5jbGUiLCJ1bmRlciIsInVuZGVyZ28iLCJ1bmRlcnN0YW5kIiwidW5kZXJzdGFuZGluZyIsInVuZm9ydHVuYXRlbHkiLCJ1bmlmb3JtIiwidW5pb24iLCJ1bmlxdWUiLCJ1bml0IiwiVW5pdGVkIiwidW5pdmVyc2FsIiwidW5pdmVyc2UiLCJ1bml2ZXJzaXR5IiwidW5rbm93biIsInVubGVzcyIsInVubGlrZSIsInVubGlrZWx5IiwidW50aWwiLCJ1bnVzdWFsIiwidXAiLCJ1cG9uIiwidXBwZXIiLCJ1cmJhbiIsInVyZ2UiLCJ1cyIsInVzZSIsInVzZWQiLCJ1c2VmdWwiLCJ1c2VyIiwidXN1YWwiLCJ1c3VhbGx5IiwidXRpbGl0eSIsInZhY2F0aW9uIiwidmFsbGV5IiwidmFsdWFibGUiLCJ2YWx1ZSIsInZhcmlhYmxlIiwidmFyaWF0aW9uIiwidmFyaWV0eSIsInZhcmlvdXMiLCJ2YXJ5IiwidmFzdCIsInZlZ2V0YWJsZSIsInZlaGljbGUiLCJ2ZW50dXJlIiwidmVyc2lvbiIsInZlcnN1cyIsInZlcnkiLCJ2ZXNzZWwiLCJ2ZXRlcmFuIiwidmlhIiwidmljdGltIiwidmljdG9yeSIsInZpZGVvIiwidmlldyIsInZpZXdlciIsInZpbGxhZ2UiLCJ2aW9sYXRlIiwidmlvbGF0aW9uIiwidmlvbGVuY2UiLCJ2aW9sZW50IiwidmlydHVhbGx5IiwidmlydHVlIiwidmlydXMiLCJ2aXNpYmxlIiwidmlzaW9uIiwidmlzaXQiLCJ2aXNpdG9yIiwidmlzdWFsIiwidml0YWwiLCJ2b2ljZSIsInZvbHVtZSIsInZvbHVudGVlciIsInZvdGUiLCJ2b3RlciIsInZzIiwidnVsbmVyYWJsZSIsIndhZ2UiLCJ3YWl0Iiwid2FrZSIsIndhbGsiLCJ3YWxsIiwid2FuZGVyIiwid2FudCIsIndhciIsIndhcm0iLCJ3YXJuIiwid2FybmluZyIsIndhc2giLCJ3YXN0ZSIsIndhdGNoIiwid2F0ZXIiLCJ3YXZlIiwid2F5Iiwid2UiLCJ3ZWFrIiwid2VhbHRoIiwid2VhbHRoeSIsIndlYXBvbiIsIndlYXIiLCJ3ZWF0aGVyIiwid2VkZGluZyIsIndlZWsiLCJ3ZWVrZW5kIiwid2Vla2x5Iiwid2VpZ2giLCJ3ZWlnaHQiLCJ3ZWxjb21lIiwid2VsZmFyZSIsIndlbGwiLCJ3ZXN0Iiwid2VzdGVybiIsIndldCIsIndoYXQiLCJ3aGF0ZXZlciIsIndoZWVsIiwid2hlbiIsIndoZW5ldmVyIiwid2hlcmUiLCJ3aGVyZWFzIiwid2hldGhlciIsIndoaWNoIiwid2hpbGUiLCJ3aGlzcGVyIiwid2hpdGUiLCJ3aG8iLCJ3aG9sZSIsIndob20iLCJ3aG9zZSIsIndoeSIsIndpZGUiLCJ3aWRlbHkiLCJ3aWRlc3ByZWFkIiwid2lmZSIsIndpbGQiLCJ3aWxsIiwid2lsbGluZyIsIndpbiIsIndpbmQiLCJ3aW5kb3ciLCJ3aW5lIiwid2luZyIsIndpbm5lciIsIndpbnRlciIsIndpcGUiLCJ3aXJlIiwid2lzZG9tIiwid2lzZSIsIndpc2giLCJ3aXRoIiwid2l0aGRyYXciLCJ3aXRoaW4iLCJ3aXRob3V0Iiwid2l0bmVzcyIsIndvbWFuIiwid29uZGVyIiwid29uZGVyZnVsIiwid29vZCIsIndvb2RlbiIsIndvcmQiLCJ3b3JrIiwid29ya2VyIiwid29ya2luZyIsIndvcmtzIiwid29ya3Nob3AiLCJ3b3JsZCIsIndvcnJpZWQiLCJ3b3JyeSIsIndvcnRoIiwid291bGQiLCJ3b3VuZCIsIndyYXAiLCJ3cml0ZSIsIndyaXRlciIsIndyaXRpbmciLCJ3cm9uZyIsInlhcmQiLCJ5ZWFoIiwieWVhciIsInllbGwiLCJ5ZWxsb3ciLCJ5ZXMiLCJ5ZXN0ZXJkYXkiLCJ5ZXQiLCJ5aWVsZCIsInlvdSIsInlvdW5nIiwieW91ciIsInlvdXJzIiwieW91cnNlbGYiLCJ5b3V0aCIsInpvbmUiLCJheGlvcyIsImZzIiwiZmluZGVyIiwiQVBJX0RBSUxZX0xJTUlUIiwiTUFYX1dPUkRTIiwiQ0FDSEVfQ0xVU1RFUlMiLCJNQVhfTk9ERV9GUkVRVUVOQ1kiLCJUUkFWRVJTRV9TSU1JTEFSIiwiY2FjaGVJc0luaXRpYWxpemVkIiwidG90YWxXb3Jkc0xhc3REYXkiLCJjYWNoZUluaXRJc0Vycm9yIiwibGF6eUluaXRDYWNoZSIsImN1cnRpbWUiLCJEYXRlIiwiZmluZEZpbGVzIiwiY29uc29sZSIsImxvZyIsImVycm9ycyIsImluaXRDcmF3bGVyIiwiX01BWF9XT1JEUyIsIl9DQUNIRV9DTFVTVEVSUyIsIl9NQVhfTk9ERV9GUkVRVUVOQ1kiLCJfVFJBVkVSU0VfU0lNSUxBUiIsImV4aXN0c1N5bmMiLCJta2RpclN5bmMiLCJyZWN1cnNpdmUiLCJzaW5nbGVXb3JkVG9EaXNwbGF5IiwicmVzdWx0cyIsInByb251bmNpYXRpb24iLCJkZWYiLCJkZWZpbml0aW9uQXJyYXkiLCJwYXJ0T2ZTcGVlY2giLCJwcm9wZXJ0aWVzIiwia2V5cyIsIk9iamVjdCIsInJlZ2V4IiwidG9Mb3dlckNhc2UiLCJuZXdPYmoiLCJpc1N0cmluZyIsImxvYWRTaW5nbGVXb3JkIiwiYXNvYmplY3QiLCJ3ZnBhdGgiLCJpanNvbiIsInJlYWRGaWxlU3luYyIsInRvU3RyaW5nIiwiSlNPTiIsInBhcnNlIiwib2pzb24iLCJzdHJpbmdpZnkiLCJlIiwidW5saW5rU3luYyIsImVudiIsIlJBUElEQVBJX0tFWSIsImRqc29uIiwid3JpdGVGaWxlIiwiZXJyIiwiVHJhdmVyc2VOb2RlIiwiY29uc3RydWN0b3IiLCJieV9kZWYiLCJ2YWwiLCJzeW5vbnltcyIsIndvcmRzIiwic2ltaWxhclRvIiwiY29tcHJlc3MiLCJsb2FkRGljdGlvbmFyeUFuZENoaWxkcmVuIiwidHJlc3VsdCIsInRyYXZlcnNpb24iLCJub2RlIiwid29yZHNicmVhZHRoZmlyc3QiLCJ0cmF2ZXJzZUNsdXN0ZXIiLCJub1dvcmRzIiwicHJldmlvdXNsZXZlbGNoaWxkd29yZHMiLCJjb25jYXQiLCJwcm9taXNlcyIsInciLCJieV93Iiwibm9kZXByb21pc2UiLCJQcm9taXNlIiwibG9hZENsdXN0ZXIiLCJjZnBhdGgiLCJieV9rZXkiLCJ2YWx1ZXMiLCJjbXAiLCJmaXJzdEVsIiwic2Vjb25kRWwiLCJsb2NhbGVDb21wYXJlIiwiZGVmb2JqIiwibm9DbHVzdGVyRW50cmllcyIsImNqc29uIiwibG9hZENvbW1vbldvcmQiLCJub0RlZmluaXRpb25zIiwibG9hZENvbW1vbldvcmRzIiwiY3ciLCJjb21tb25Xb3JkIiwiRmluZEZpbGVzIiwiY250Iiwicm9vdEZvbGRlciIsImZpbGVNb2RpZmllZERhdGUiLCJvbkZpbGUiLCJzdHJQYXRoIiwic3RhdCIsIl9yZXNvbHZlIiwiX3JlamVjdCIsInN0YXJ0U2VhcmNoIiwiY3Jhd2xlciIsImhhbmRsZXIiLCJzdGF0dXNDb2RlIiwianNvbiIsImhlYWRlcnMiXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0NBQXNDO0FBQ3RDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQSx1QkFBdUIsMkJBQTJCO0FBQ2xEOzs7Ozs7O0FDalVBLGdDOzs7Ozs7O0FDQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsbUJBQU8sQ0FBQyxFQUFJOztBQUUvQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEIsWUFBWTtBQUNaO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsY0FBYztBQUNkOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCLFlBQVk7QUFDWjtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsbUJBQW1CLGlCQUFpQjtBQUNwQztBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQjtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsYUFBYSxTQUFTO0FBQ3RCLDRCQUE0QjtBQUM1QjtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBLGFBQWEsOEJBQThCO0FBQzNDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixZQUFZO0FBQ1o7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUNBQXlDLFNBQVM7QUFDbEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5Q0FBeUMsU0FBUztBQUNsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxNQUFNO0FBQ2pCLFlBQVk7QUFDWjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztBQ2hPYTs7QUFFYixZQUFZLG1CQUFPLENBQUMsQ0FBVTs7QUFFOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEIsV0FBVyxPQUFPO0FBQ2xCLGFBQWEsT0FBTztBQUNwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsS0FBSztBQUNMO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBOzs7Ozs7OztBQ3hFYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsUUFBUTtBQUNuQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7Ozs7Ozs7QUNsQkEsK0I7Ozs7Ozs7QUNDQTtBQUFBO0FBQUE7QUFFTyxNQUFNQSxpQkFBaUIsR0FBRztBQUM3QkMsR0FBQyxFQUFHLENBRHlCO0FBRTdCQyxTQUFPLEVBQUcsQ0FGbUI7QUFHN0JDLFNBQU8sRUFBRyxDQUhtQjtBQUk3QkMsTUFBSSxFQUFHLENBSnNCO0FBSzdCQyxVQUFRLEVBQUcsQ0FMa0I7QUFNN0JDLE9BQUssRUFBRyxDQU5xQjtBQU83QkMsT0FBSyxFQUFHLENBUHFCO0FBUTdCQyxRQUFNLEVBQUcsQ0FSb0I7QUFTN0JDLFNBQU8sRUFBRyxDQVRtQjtBQVU3QkMsVUFBUSxFQUFHLENBVmtCO0FBVzdCQyxZQUFVLEVBQUcsQ0FYZ0I7QUFZN0JDLFFBQU0sRUFBRyxDQVpvQjtBQWE3QkMsT0FBSyxFQUFHLENBYnFCO0FBYzdCQyxVQUFRLEVBQUcsQ0Fka0I7QUFlN0JDLFFBQU0sRUFBRyxDQWZvQjtBQWdCN0JDLFFBQU0sRUFBRyxDQWhCb0I7QUFpQjdCQyxVQUFRLEVBQUcsQ0FqQmtCO0FBa0I3QkMsV0FBUyxFQUFHLENBbEJpQjtBQW1CN0JDLFlBQVUsRUFBRyxDQW5CZ0I7QUFvQjdCQyxXQUFTLEVBQUcsQ0FwQmlCO0FBcUI3QkMsU0FBTyxFQUFHLENBckJtQjtBQXNCN0JDLFVBQVEsRUFBRyxDQXRCa0I7QUF1QjdCQyxRQUFNLEVBQUcsQ0F2Qm9CO0FBd0I3QkMsU0FBTyxFQUFHLENBeEJtQjtBQXlCN0JDLGFBQVcsRUFBRyxDQXpCZTtBQTBCN0JDLE1BQUksRUFBRyxDQTFCc0I7QUEyQjdCQyxhQUFXLEVBQUcsQ0EzQmU7QUE0QjdCQyxTQUFPLEVBQUcsQ0E1Qm1CO0FBNkI3QkMsUUFBTSxFQUFHLENBN0JvQjtBQThCN0JDLEtBQUcsRUFBRyxDQTlCdUI7QUErQjdCQyxRQUFNLEVBQUcsQ0EvQm9CO0FBZ0M3QkMsUUFBTSxFQUFHLENBaENvQjtBQWlDN0JDLFVBQVEsRUFBRyxDQWpDa0I7QUFrQzdCQyxVQUFRLEVBQUcsQ0FsQ2tCO0FBbUM3QkMsT0FBSyxFQUFHLENBbkNxQjtBQW9DN0JDLFNBQU8sRUFBRyxDQXBDbUI7QUFxQzdCQyxRQUFNLEVBQUcsQ0FyQ29CO0FBc0M3QkMsVUFBUSxFQUFHLENBdENrQjtBQXVDN0JDLElBQUUsRUFBRyxDQXZDd0I7QUF3QzdCQyxPQUFLLEVBQUcsQ0F4Q3FCO0FBeUM3QkMsS0FBRyxFQUFHLENBekN1QjtBQTBDN0JDLFVBQVEsRUFBRyxDQTFDa0I7QUEyQzdCQyxZQUFVLEVBQUcsQ0EzQ2dCO0FBNEM3QkMsU0FBTyxFQUFHLENBNUNtQjtBQTZDN0JDLFVBQVEsRUFBRyxDQTdDa0I7QUE4QzdCQyxRQUFNLEVBQUcsQ0E5Q29CO0FBK0M3QkMsWUFBVSxFQUFHLENBL0NnQjtBQWdEN0JDLGdCQUFjLEVBQUcsQ0FoRFk7QUFpRDdCQyxlQUFhLEVBQUcsQ0FqRGE7QUFrRDdCQyxRQUFNLEVBQUcsQ0FsRG9CO0FBbUQ3QkMsV0FBUyxFQUFHLENBbkRpQjtBQW9EN0JDLE9BQUssRUFBRyxDQXBEcUI7QUFxRDdCQyxZQUFVLEVBQUcsQ0FyRGdCO0FBc0Q3QkMsT0FBSyxFQUFHLENBdERxQjtBQXVEN0JDLE9BQUssRUFBRyxDQXZEcUI7QUF3RDdCQyxTQUFPLEVBQUcsQ0F4RG1CO0FBeUQ3QkMsVUFBUSxFQUFHLENBekRrQjtBQTBEN0JDLFdBQVMsRUFBRyxDQTFEaUI7QUEyRDdCQyxXQUFTLEVBQUcsQ0EzRGlCO0FBNEQ3QkMsYUFBVyxFQUFHLENBNURlO0FBNkQ3QkMsUUFBTSxFQUFHLENBN0RvQjtBQThEN0JDLFFBQU0sRUFBRyxDQTlEb0I7QUErRDdCQyxTQUFPLEVBQUcsQ0EvRG1CO0FBZ0U3QkMsVUFBUSxFQUFHLENBaEVrQjtBQWlFN0JDLFFBQU0sRUFBRyxDQWpFb0I7QUFrRTdCQyxRQUFNLEVBQUcsQ0FsRW9CO0FBbUU3QkMsUUFBTSxFQUFHLENBbkVvQjtBQW9FN0JDLFFBQU0sRUFBRyxDQXBFb0I7QUFxRTdCQyxTQUFPLEVBQUcsQ0FyRW1CO0FBc0U3QixzQkFBcUIsQ0F0RVE7QUF1RTdCQyxPQUFLLEVBQUcsQ0F2RXFCO0FBd0U3QkMsV0FBUyxFQUFHLENBeEVpQjtBQXlFN0JDLE9BQUssRUFBRyxDQXpFcUI7QUEwRTdCQyxTQUFPLEVBQUcsQ0ExRW1CO0FBMkU3QkMsS0FBRyxFQUFHLENBM0V1QjtBQTRFN0JDLFFBQU0sRUFBRyxDQTVFb0I7QUE2RTdCQyxRQUFNLEVBQUcsQ0E3RW9CO0FBOEU3QkMsT0FBSyxFQUFHLENBOUVxQjtBQStFN0JDLFlBQVUsRUFBRyxDQS9FZ0I7QUFnRjdCQyxLQUFHLEVBQUcsQ0FoRnVCO0FBaUY3QkMsT0FBSyxFQUFHLENBakZxQjtBQWtGN0JDLFdBQVMsRUFBRyxDQWxGaUI7QUFtRjdCQyxjQUFZLEVBQUcsQ0FuRmM7QUFvRjdCQyxJQUFFLEVBQUcsQ0FwRndCO0FBcUY3QkMsT0FBSyxFQUFHLENBckZxQjtBQXNGN0JDLEtBQUcsRUFBRyxDQXRGdUI7QUF1RjdCQyxNQUFJLEVBQUcsQ0F2RnNCO0FBd0Y3QkMsTUFBSSxFQUFHLENBeEZzQjtBQXlGN0JDLEtBQUcsRUFBRyxDQXpGdUI7QUEwRjdCQyxLQUFHLEVBQUcsQ0ExRnVCO0FBMkY3QkMsVUFBUSxFQUFHLENBM0ZrQjtBQTRGN0JDLFNBQU8sRUFBRyxDQTVGbUI7QUE2RjdCQyxTQUFPLEVBQUcsQ0E3Rm1CO0FBOEY3QkMsT0FBSyxFQUFHLENBOUZxQjtBQStGN0JDLFNBQU8sRUFBRyxDQS9GbUI7QUFnRzdCQyxPQUFLLEVBQUcsQ0FoR3FCO0FBaUc3QkMsS0FBRyxFQUFHLENBakd1QjtBQWtHN0JDLFVBQVEsRUFBRyxDQWxHa0I7QUFtRzdCQyxPQUFLLEVBQUcsQ0FuR3FCO0FBb0c3QkMsTUFBSSxFQUFHLENBcEdzQjtBQXFHN0JDLFFBQU0sRUFBRyxDQXJHb0I7QUFzRzdCQyxPQUFLLEVBQUcsQ0F0R3FCO0FBdUc3QkMsT0FBSyxFQUFHLENBdkdxQjtBQXdHN0JDLFNBQU8sRUFBRyxDQXhHbUI7QUF5RzdCQyxNQUFJLEVBQUcsQ0F6R3NCO0FBMEc3QkMsT0FBSyxFQUFHLENBMUdxQjtBQTJHN0JDLGFBQVcsRUFBRyxDQTNHZTtBQTRHN0JDLFVBQVEsRUFBRyxDQTVHa0I7QUE2RzdCQyxRQUFNLEVBQUcsQ0E3R29CO0FBOEc3QkMsSUFBRSxFQUFHLENBOUd3QjtBQStHN0JDLFNBQU8sRUFBRyxDQS9HbUI7QUFnSDdCQyxVQUFRLEVBQUcsQ0FoSGtCO0FBaUg3QkMsT0FBSyxFQUFHLENBakhxQjtBQWtIN0JDLFFBQU0sRUFBRyxDQWxIb0I7QUFtSDdCQyxVQUFRLEVBQUcsQ0FuSGtCO0FBb0g3QkMsU0FBTyxFQUFHLENBcEhtQjtBQXFIN0JDLFNBQU8sRUFBRyxDQXJIbUI7QUFzSDdCQyxTQUFPLEVBQUcsQ0F0SG1CO0FBdUg3QkMsS0FBRyxFQUFHLENBdkh1QjtBQXdIN0JDLE9BQUssRUFBRyxDQXhIcUI7QUF5SDdCQyxPQUFLLEVBQUcsQ0F6SHFCO0FBMEg3QkMsT0FBSyxFQUFHLENBMUhxQjtBQTJIN0JDLFFBQU0sRUFBRyxDQTNIb0I7QUE0SDdCQyxhQUFXLEVBQUcsQ0E1SGU7QUE2SDdCQyxVQUFRLEVBQUcsQ0E3SGtCO0FBOEg3QkMsUUFBTSxFQUFHLENBOUhvQjtBQStIN0JDLFNBQU8sRUFBRyxDQS9IbUI7QUFnSTdCQyxRQUFNLEVBQUcsQ0FoSW9CO0FBaUk3QkMsWUFBVSxFQUFHLENBaklnQjtBQWtJN0JDLFNBQU8sRUFBRyxDQWxJbUI7QUFtSTdCQyxLQUFHLEVBQUcsQ0FuSXVCO0FBb0k3QkMsU0FBTyxFQUFHLENBcEltQjtBQXFJN0JDLFNBQU8sRUFBRyxDQXJJbUI7QUFzSTdCQyxRQUFNLEVBQUcsQ0F0SW9CO0FBdUk3QkMsVUFBUSxFQUFHLENBdklrQjtBQXdJN0JDLFFBQU0sRUFBRyxDQXhJb0I7QUF5STdCQyxVQUFRLEVBQUcsQ0F6SWtCO0FBMEk3QkMsT0FBSyxFQUFHLENBMUlxQjtBQTJJN0JDLFdBQVMsRUFBRyxDQTNJaUI7QUE0STdCQyxVQUFRLEVBQUcsQ0E1SWtCO0FBNkk3QkMsWUFBVSxFQUFHLENBN0lnQjtBQThJN0JDLFFBQU0sRUFBRyxDQTlJb0I7QUErSTdCQyxRQUFNLEVBQUcsQ0EvSW9CO0FBZ0o3QkMsWUFBVSxFQUFHLENBaEpnQjtBQWlKN0JDLE9BQUssRUFBRyxDQWpKcUI7QUFrSjdCQyxhQUFXLEVBQUcsQ0FsSmU7QUFtSjdCQyxPQUFLLEVBQUcsQ0FuSnFCO0FBb0o3QkMsU0FBTyxFQUFHLENBcEptQjtBQXFKN0JDLGFBQVcsRUFBRyxDQXJKZTtBQXNKN0JDLFlBQVUsRUFBRyxDQXRKZ0I7QUF1SjdCQyxVQUFRLEVBQUcsQ0F2SmtCO0FBd0o3QkMsYUFBVyxFQUFHLENBeEplO0FBeUo3QkMsVUFBUSxFQUFHLENBekprQjtBQTBKN0JDLFNBQU8sRUFBRyxDQTFKbUI7QUEySjdCQyxlQUFhLEVBQUcsQ0EzSmE7QUE0SjdCQyxNQUFJLEVBQUcsQ0E1SnNCO0FBNko3QkMsV0FBUyxFQUFHLENBN0ppQjtBQThKN0JDLE1BQUksRUFBRyxDQTlKc0I7QUErSjdCQyxPQUFLLEVBQUcsQ0EvSnFCO0FBZ0s3QkMsVUFBUSxFQUFHLENBaEtrQjtBQWlLN0JDLE9BQUssRUFBRyxDQWpLcUI7QUFrSzdCQyxLQUFHLEVBQUcsQ0FsS3VCO0FBbUs3QkMsT0FBSyxFQUFHLENBbktxQjtBQW9LN0JDLE1BQUksRUFBRyxDQXBLc0I7QUFxSzdCQyxRQUFNLEVBQUcsQ0FyS29CO0FBc0s3QkMsU0FBTyxFQUFHLENBdEttQjtBQXVLN0JDLGFBQVcsRUFBRyxDQXZLZTtBQXdLN0JDLFFBQU0sRUFBRyxDQXhLb0I7QUF5SzdCQyxTQUFPLEVBQUcsQ0F6S21CO0FBMEs3QkMsUUFBTSxFQUFHLENBMUtvQjtBQTJLN0JDLEtBQUcsRUFBRyxDQTNLdUI7QUE0SzdCQyxTQUFPLEVBQUcsQ0E1S21CO0FBNks3QkMsUUFBTSxFQUFHLENBN0tvQjtBQThLN0JDLFVBQVEsRUFBRyxDQTlLa0I7QUErSzdCQyxJQUFFLEVBQUcsQ0EvS3dCO0FBZ0w3QkMsT0FBSyxFQUFHLENBaExxQjtBQWlMN0JDLE9BQUssRUFBRyxDQWpMcUI7QUFrTDdCQyxLQUFHLEVBQUcsQ0FsTHVCO0FBbUw3QkMsUUFBTSxFQUFHLENBbkxvQjtBQW9MN0JDLFFBQU0sRUFBRyxDQXBMb0I7QUFxTDdCQyxTQUFPLEVBQUcsQ0FyTG1CO0FBc0w3QkMsUUFBTSxFQUFHLENBdExvQjtBQXVMN0JDLFFBQU0sRUFBRyxDQXZMb0I7QUF3TDdCQyxZQUFVLEVBQUcsQ0F4TGdCO0FBeUw3QkMsT0FBSyxFQUFHLENBekxxQjtBQTBMN0JDLFFBQU0sRUFBRyxDQTFMb0I7QUEyTDdCQyxZQUFVLEVBQUcsQ0EzTGdCO0FBNEw3QkMsUUFBTSxFQUFHLENBNUxvQjtBQTZMN0JDLFlBQVUsRUFBRyxDQTdMZ0I7QUE4TDdCQyxXQUFTLEVBQUcsQ0E5TGlCO0FBK0w3QkMsV0FBUyxFQUFHLENBL0xpQjtBQWdNN0JDLGFBQVcsRUFBRyxDQWhNZTtBQWlNN0JDLFFBQU0sRUFBRyxDQWpNb0I7QUFrTTdCQyxZQUFVLEVBQUcsQ0FsTWdCO0FBbU03QkMsUUFBTSxFQUFHLENBbk1vQjtBQW9NN0JDLElBQUUsRUFBRyxDQXBNd0I7QUFxTTdCQyxTQUFPLEVBQUcsQ0FyTW1CO0FBc003QkMsVUFBUSxFQUFHLENBdE1rQjtBQXVNN0JDLFlBQVUsRUFBRyxDQXZNZ0I7QUF3TTdCQyxRQUFNLEVBQUcsQ0F4TW9CO0FBeU03QkMsUUFBTSxFQUFHLENBek1vQjtBQTBNN0JDLFNBQU8sRUFBRyxDQTFNbUI7QUEyTTdCQyxRQUFNLEVBQUcsQ0EzTW9CO0FBNE03QkMsV0FBUyxFQUFHLENBNU1pQjtBQTZNN0JDLFVBQVEsRUFBRyxDQTdNa0I7QUE4TTdCQyxVQUFRLEVBQUcsQ0E5TWtCO0FBK003QkMsU0FBTyxFQUFHLENBL01tQjtBQWdON0JDLFlBQVUsRUFBRyxDQWhOZ0I7QUFpTjdCQyxXQUFTLEVBQUcsQ0FqTmlCO0FBa043QkMsVUFBUSxFQUFHLENBbE5rQjtBQW1ON0JDLFFBQU0sRUFBRyxDQW5Ob0I7QUFvTjdCQyxXQUFTLEVBQUcsQ0FwTmlCO0FBcU43QkMsTUFBSSxFQUFHLENBck5zQjtBQXNON0JDLFdBQVMsRUFBRyxDQXROaUI7QUF1TjdCQyxTQUFPLEVBQUcsQ0F2Tm1CO0FBd043QkMsT0FBSyxFQUFHLENBeE5xQjtBQXlON0JDLE9BQUssRUFBRyxDQXpOcUI7QUEwTjdCQyxPQUFLLEVBQUcsQ0ExTnFCO0FBMk43QkMsV0FBUyxFQUFHLENBM05pQjtBQTRON0JDLE1BQUksRUFBRyxDQTVOc0I7QUE2TjdCQyxPQUFLLEVBQUcsQ0E3TnFCO0FBOE43QkMsTUFBSSxFQUFHLENBOU5zQjtBQStON0JDLE1BQUksRUFBRyxDQS9Oc0I7QUFnTzdCQyxZQUFVLEVBQUcsQ0FoT2dCO0FBaU83QkMsS0FBRyxFQUFHLENBak91QjtBQWtPN0JDLE9BQUssRUFBRyxDQWxPcUI7QUFtTzdCQyxLQUFHLEVBQUcsQ0FuT3VCO0FBb083QkMsTUFBSSxFQUFHLENBcE9zQjtBQXFPN0JDLFNBQU8sRUFBRyxDQXJPbUI7QUFzTzdCQyxNQUFJLEVBQUcsQ0F0T3NCO0FBdU83QkMsS0FBRyxFQUFHLENBdk91QjtBQXdPN0JDLE1BQUksRUFBRyxDQXhPc0I7QUF5TzdCQyxNQUFJLEVBQUcsQ0F6T3NCO0FBME83QkMsS0FBRyxFQUFHLENBMU91QjtBQTJPN0JDLFFBQU0sRUFBRyxDQTNPb0I7QUE0TzdCQyxRQUFNLEVBQUcsQ0E1T29CO0FBNk83QkMsU0FBTyxFQUFHLENBN09tQjtBQThPN0JDLE1BQUksRUFBRyxDQTlPc0I7QUErTzdCQyxVQUFRLEVBQUcsQ0EvT2tCO0FBZ1A3QkMsT0FBSyxFQUFHLENBaFBxQjtBQWlQN0JDLFdBQVMsRUFBRyxDQWpQaUI7QUFrUDdCQyxPQUFLLEVBQUcsQ0FsUHFCO0FBbVA3QkMsUUFBTSxFQUFHLENBblBvQjtBQW9QN0JDLFlBQVUsRUFBRyxDQXBQZ0I7QUFxUDdCQyxVQUFRLEVBQUcsQ0FyUGtCO0FBc1A3QkMsU0FBTyxFQUFHLENBdFBtQjtBQXVQN0JDLFFBQU0sRUFBRyxDQXZQb0I7QUF3UDdCQyxJQUFFLEVBQUcsQ0F4UHdCO0FBeVA3QkMsT0FBSyxFQUFHLENBelBxQjtBQTBQN0JDLE1BQUksRUFBRyxDQTFQc0I7QUEyUDdCQyxNQUFJLEVBQUcsQ0EzUHNCO0FBNFA3QkMsTUFBSSxFQUFHLENBNVBzQjtBQTZQN0JDLFdBQVMsRUFBRyxDQTdQaUI7QUE4UDdCQyxRQUFNLEVBQUcsQ0E5UG9CO0FBK1A3QkMsU0FBTyxFQUFHLENBL1BtQjtBQWdRN0JDLFFBQU0sRUFBRyxDQWhRb0I7QUFpUTdCQyxLQUFHLEVBQUcsQ0FqUXVCO0FBa1E3QkMsU0FBTyxFQUFHLENBbFFtQjtBQW1RN0JDLE1BQUksRUFBRyxDQW5Rc0I7QUFvUTdCQyxRQUFNLEVBQUcsQ0FwUW9CO0FBcVE3QkMsT0FBSyxFQUFHLENBclFxQjtBQXNRN0JDLFdBQVMsRUFBRyxDQXRRaUI7QUF1UTdCQyxVQUFRLEVBQUcsQ0F2UWtCO0FBd1E3QkMsUUFBTSxFQUFHLENBeFFvQjtBQXlRN0JDLE9BQUssRUFBRyxDQXpRcUI7QUEwUTdCQyxRQUFNLEVBQUcsQ0ExUW9CO0FBMlE3QkMsU0FBTyxFQUFHLENBM1FtQjtBQTRRN0JDLE1BQUksRUFBRyxDQTVRc0I7QUE2UTdCQyxRQUFNLEVBQUcsQ0E3UW9CO0FBOFE3QkMsT0FBSyxFQUFHLENBOVFxQjtBQStRN0JDLE1BQUksRUFBRyxDQS9Rc0I7QUFnUjdCQyxPQUFLLEVBQUcsQ0FoUnFCO0FBaVI3QkMsTUFBSSxFQUFHLENBalJzQjtBQWtSN0JDLFNBQU8sRUFBRyxDQWxSbUI7QUFtUjdCQyxTQUFPLEVBQUcsQ0FuUm1CO0FBb1I3QkMsUUFBTSxFQUFHLENBcFJvQjtBQXFSN0JDLFNBQU8sRUFBRyxDQXJSbUI7QUFzUjdCQyxNQUFJLEVBQUcsQ0F0UnNCO0FBdVI3QkMsS0FBRyxFQUFHLENBdlJ1QjtBQXdSN0JDLFFBQU0sRUFBRyxDQXhSb0I7QUF5UjdCQyxTQUFPLEVBQUcsQ0F6Um1CO0FBMFI3QkMsUUFBTSxFQUFHLENBMVJvQjtBQTJSN0JDLE9BQUssRUFBRyxDQTNScUI7QUE0UjdCQyxLQUFHLEVBQUcsQ0E1UnVCO0FBNlI3QkMsTUFBSSxFQUFHLENBN1JzQjtBQThSN0JDLE1BQUksRUFBRyxDQTlSc0I7QUErUjdCQyxTQUFPLEVBQUcsQ0EvUm1CO0FBZ1M3QkMsTUFBSSxFQUFHLENBaFNzQjtBQWlTN0JDLFlBQVUsRUFBRyxDQWpTZ0I7QUFrUzdCQyxNQUFJLEVBQUcsQ0FsU3NCO0FBbVM3QkMsT0FBSyxFQUFHLENBblNxQjtBQW9TN0JDLFVBQVEsRUFBRyxDQXBTa0I7QUFxUzdCQyxLQUFHLEVBQUcsQ0FyU3VCO0FBc1M3QkMsTUFBSSxFQUFHLENBdFNzQjtBQXVTN0JDLE9BQUssRUFBRyxDQXZTcUI7QUF3UzdCQyxPQUFLLEVBQUcsQ0F4U3FCO0FBeVM3QkMsT0FBSyxFQUFHLENBelNxQjtBQTBTN0JDLFNBQU8sRUFBRyxDQTFTbUI7QUEyUzdCQyxPQUFLLEVBQUcsQ0EzU3FCO0FBNFM3QkMsT0FBSyxFQUFHLENBNVNxQjtBQTZTN0JDLE9BQUssRUFBRyxDQTdTcUI7QUE4UzdCQyxNQUFJLEVBQUcsQ0E5U3NCO0FBK1M3QkMsTUFBSSxFQUFHLENBL1NzQjtBQWdUN0JDLE9BQUssRUFBRyxDQWhUcUI7QUFpVDdCQyxNQUFJLEVBQUcsQ0FqVHNCO0FBa1Q3QkMsTUFBSSxFQUFHLENBbFRzQjtBQW1UN0JDLE1BQUksRUFBRyxDQW5Uc0I7QUFvVDdCQyxTQUFPLEVBQUcsQ0FwVG1CO0FBcVQ3QkMsTUFBSSxFQUFHLENBclRzQjtBQXNUN0JDLE1BQUksRUFBRyxDQXRUc0I7QUF1VDdCQyxNQUFJLEVBQUcsQ0F2VHNCO0FBd1Q3QkMsTUFBSSxFQUFHLENBeFRzQjtBQXlUN0JDLE1BQUksRUFBRyxDQXpUc0I7QUEwVDdCQyxRQUFNLEVBQUcsQ0ExVG9CO0FBMlQ3QkMsTUFBSSxFQUFHLENBM1RzQjtBQTRUN0JDLFFBQU0sRUFBRyxDQTVUb0I7QUE2VDdCQyxNQUFJLEVBQUcsQ0E3VHNCO0FBOFQ3QkMsTUFBSSxFQUFHLENBOVRzQjtBQStUN0JDLFFBQU0sRUFBRyxDQS9Ub0I7QUFnVTdCQyxRQUFNLEVBQUcsQ0FoVW9CO0FBaVU3QkMsUUFBTSxFQUFHLENBalVvQjtBQWtVN0JDLFVBQVEsRUFBRyxDQWxVa0I7QUFtVTdCQyxNQUFJLEVBQUcsQ0FuVXNCO0FBb1U3QkMsS0FBRyxFQUFHLENBcFV1QjtBQXFVN0JDLEtBQUcsRUFBRyxDQXJVdUI7QUFzVTdCQyxXQUFTLEVBQUcsQ0F0VWlCO0FBdVU3QkMsT0FBSyxFQUFHLENBdlVxQjtBQXdVN0JDLFFBQU0sRUFBRyxDQXhVb0I7QUF5VTdCQyxPQUFLLEVBQUcsQ0F6VXFCO0FBMFU3QkMsT0FBSyxFQUFHLENBMVVxQjtBQTJVN0JDLE9BQUssRUFBRyxDQTNVcUI7QUE0VTdCQyxXQUFTLEVBQUcsQ0E1VWlCO0FBNlU3QkMsUUFBTSxFQUFHLENBN1VvQjtBQThVN0JDLFFBQU0sRUFBRyxDQTlVb0I7QUErVTdCQyxTQUFPLEVBQUcsQ0EvVW1CO0FBZ1Y3QkMsT0FBSyxFQUFHLENBaFZxQjtBQWlWN0JDLFFBQU0sRUFBRyxDQWpWb0I7QUFrVjdCQyxPQUFLLEVBQUcsQ0FsVnFCO0FBbVY3QkMsU0FBTyxFQUFHLENBblZtQjtBQW9WN0JDLFFBQU0sRUFBRyxDQXBWb0I7QUFxVjdCQyxXQUFTLEVBQUcsQ0FyVmlCO0FBc1Y3QkMsT0FBSyxFQUFHLENBdFZxQjtBQXVWN0JDLFNBQU8sRUFBRyxDQXZWbUI7QUF3VjdCQyxPQUFLLEVBQUcsQ0F4VnFCO0FBeVY3QkMsUUFBTSxFQUFHLENBelZvQjtBQTBWN0JDLFNBQU8sRUFBRyxDQTFWbUI7QUEyVjdCQyxPQUFLLEVBQUcsQ0EzVnFCO0FBNFY3QkMsT0FBSyxFQUFHLENBNVZxQjtBQTZWN0JDLE1BQUksRUFBRyxDQTdWc0I7QUE4VjdCQyxRQUFNLEVBQUcsQ0E5Vm9CO0FBK1Y3QkMsT0FBSyxFQUFHLENBL1ZxQjtBQWdXN0JDLFVBQVEsRUFBRyxDQWhXa0I7QUFpVzdCQyxRQUFNLEVBQUcsQ0FqV29CO0FBa1c3QkMsT0FBSyxFQUFHLENBbFdxQjtBQW1XN0JDLFFBQU0sRUFBRyxDQW5Xb0I7QUFvVzdCQyxNQUFJLEVBQUcsQ0FwV3NCO0FBcVc3QkMsTUFBSSxFQUFHLENBcldzQjtBQXNXN0JDLEtBQUcsRUFBRyxDQXRXdUI7QUF1VzdCQyxVQUFRLEVBQUcsQ0F2V2tCO0FBd1c3QkMsTUFBSSxFQUFHLENBeFdzQjtBQXlXN0JDLEtBQUcsRUFBRyxDQXpXdUI7QUEwVzdCQyxRQUFNLEVBQUcsQ0ExV29CO0FBMlc3QkMsUUFBTSxFQUFHLENBM1dvQjtBQTRXN0JDLEtBQUcsRUFBRyxDQTVXdUI7QUE2VzdCQyxPQUFLLEVBQUcsQ0E3V3FCO0FBOFc3QkMsSUFBRSxFQUFHLENBOVd3QjtBQStXN0JDLE9BQUssRUFBRyxDQS9XcUI7QUFnWDdCQyxTQUFPLEVBQUcsQ0FoWG1CO0FBaVg3QkMsT0FBSyxFQUFHLENBalhxQjtBQWtYN0JDLE1BQUksRUFBRyxDQWxYc0I7QUFtWDdCQyxXQUFTLEVBQUcsQ0FuWGlCO0FBb1g3QkMsTUFBSSxFQUFHLENBcFhzQjtBQXFYN0JDLFFBQU0sRUFBRyxDQXJYb0I7QUFzWDdCQyxNQUFJLEVBQUcsQ0F0WHNCO0FBdVg3QkMsVUFBUSxFQUFHLENBdlhrQjtBQXdYN0JDLFFBQU0sRUFBRyxDQXhYb0I7QUF5WDdCQyxLQUFHLEVBQUcsQ0F6WHVCO0FBMFg3QkMsVUFBUSxFQUFHLENBMVhrQjtBQTJYN0JDLFFBQU0sRUFBRyxDQTNYb0I7QUE0WDdCQyxXQUFTLEVBQUcsQ0E1WGlCO0FBNlg3QkMsS0FBRyxFQUFHLENBN1h1QjtBQThYN0JDLFlBQVUsRUFBRyxDQTlYZ0I7QUErWDdCQyxTQUFPLEVBQUcsQ0EvWG1CO0FBZ1k3QkMsVUFBUSxFQUFHLENBaFlrQjtBQWlZN0JDLFNBQU8sRUFBRyxDQWpZbUI7QUFrWTdCQyxTQUFPLEVBQUcsQ0FsWW1CO0FBbVk3QkMsU0FBTyxFQUFHLENBblltQjtBQW9ZN0JDLEtBQUcsRUFBRyxDQXBZdUI7QUFxWTdCQyxRQUFNLEVBQUcsQ0FyWW9CO0FBc1k3QkMsTUFBSSxFQUFHLENBdFlzQjtBQXVZN0JDLE1BQUksRUFBRyxDQXZZc0I7QUF3WTdCQyxRQUFNLEVBQUcsQ0F4WW9CO0FBeVk3QkMsU0FBTyxFQUFHLENBelltQjtBQTBZN0JDLFdBQVMsRUFBRyxDQTFZaUI7QUEyWTdCQyxTQUFPLEVBQUcsQ0EzWW1CO0FBNFk3QkMsT0FBSyxFQUFHLENBNVlxQjtBQTZZN0JDLE1BQUksRUFBRyxDQTdZc0I7QUE4WTdCQyxNQUFJLEVBQUcsQ0E5WXNCO0FBK1k3QkMsTUFBSSxFQUFHLENBL1lzQjtBQWdaN0JDLEtBQUcsRUFBRyxDQWhadUI7QUFpWjdCQyxPQUFLLEVBQUcsQ0FqWnFCO0FBa1o3QkMsVUFBUSxFQUFHLENBbFprQjtBQW1aN0JDLFVBQVEsRUFBRyxDQW5aa0I7QUFvWjdCQyxPQUFLLEVBQUcsQ0FwWnFCO0FBcVo3QkMsU0FBTyxFQUFHLENBclptQjtBQXNaN0JDLFdBQVMsRUFBRyxDQXRaaUI7QUF1WjdCQyxhQUFXLEVBQUcsQ0F2WmU7QUF3WjdCQyxXQUFTLEVBQUcsQ0F4WmlCO0FBeVo3QkMsTUFBSSxFQUFHLENBelpzQjtBQTBaN0JDLFFBQU0sRUFBRyxDQTFab0I7QUEyWjdCQyxTQUFPLEVBQUcsQ0EzWm1CO0FBNFo3QkMsU0FBTyxFQUFHLENBNVptQjtBQTZaN0JDLEtBQUcsRUFBRyxDQTdadUI7QUE4WjdCQyxVQUFRLEVBQUcsQ0E5WmtCO0FBK1o3QkMsU0FBTyxFQUFHLENBL1ptQjtBQWdhN0JDLFdBQVMsRUFBRyxDQWhhaUI7QUFpYTdCQyxPQUFLLEVBQUcsQ0FqYXFCO0FBa2E3QkMsT0FBSyxFQUFHLENBbGFxQjtBQW1hN0JDLFVBQVEsRUFBRyxDQW5ha0I7QUFvYTdCQyxXQUFTLEVBQUcsQ0FwYWlCO0FBcWE3QkMsU0FBTyxFQUFHLENBcmFtQjtBQXNhN0JDLFVBQVEsRUFBRyxDQXRha0I7QUF1YTdCQyxjQUFZLEVBQUcsQ0F2YWM7QUF3YTdCQyxRQUFNLEVBQUcsQ0F4YW9CO0FBeWE3QkMsUUFBTSxFQUFHLENBemFvQjtBQTBhN0JDLFVBQVEsRUFBRyxDQTFha0I7QUEyYTdCQyxTQUFPLEVBQUcsQ0EzYW1CO0FBNGE3QkMsU0FBTyxFQUFHLENBNWFtQjtBQTZhN0JDLFdBQVMsRUFBRyxDQTdhaUI7QUE4YTdCQyxnQkFBYyxFQUFHLENBOWFZO0FBK2E3QkMsY0FBWSxFQUFHLENBL2FjO0FBZ2I3QkMsUUFBTSxFQUFHLENBaGJvQjtBQWliN0JDLFNBQU8sRUFBRyxDQWpibUI7QUFrYjdCQyxPQUFLLEVBQUcsQ0FsYnFCO0FBbWI3QkMsT0FBSyxFQUFHLENBbmJxQjtBQW9iN0JDLE9BQUssRUFBRyxDQXBicUI7QUFxYjdCQyxPQUFLLEVBQUcsQ0FyYnFCO0FBc2I3QkMsT0FBSyxFQUFHLENBdGJxQjtBQXViN0JDLFFBQU0sRUFBRyxDQXZib0I7QUF3YjdCQyxNQUFJLEVBQUcsQ0F4YnNCO0FBeWI3QkMsVUFBUSxFQUFHLENBemJrQjtBQTBiN0JDLE9BQUssRUFBRyxDQTFicUI7QUEyYjdCQyxTQUFPLEVBQUcsQ0EzYm1CO0FBNGI3QkMsT0FBSyxFQUFHLENBNWJxQjtBQTZiN0JDLE9BQUssRUFBRyxDQTdicUI7QUE4YjdCQyxXQUFTLEVBQUcsQ0E5YmlCO0FBK2I3QkMsU0FBTyxFQUFHLENBL2JtQjtBQWdjN0JDLE1BQUksRUFBRyxDQWhjc0I7QUFpYzdCQyxXQUFTLEVBQUcsQ0FqY2lCO0FBa2M3QkMsUUFBTSxFQUFHLENBbGNvQjtBQW1jN0JDLGFBQVcsRUFBRyxDQW5jZTtBQW9jN0JDLFFBQU0sRUFBRyxDQXBjb0I7QUFxYzdCQyxXQUFTLEVBQUcsQ0FyY2lCO0FBc2M3QkMsV0FBUyxFQUFHLENBdGNpQjtBQXVjN0JDLFFBQU0sRUFBRyxDQXZjb0I7QUF3YzdCQyxXQUFTLEVBQUcsQ0F4Y2lCO0FBeWM3QkMsUUFBTSxFQUFHLENBemNvQjtBQTBjN0JDLGNBQVksRUFBRyxDQTFjYztBQTJjN0JDLE1BQUksRUFBRyxDQTNjc0I7QUE0YzdCQyxTQUFPLEVBQUcsQ0E1Y21CO0FBNmM3QkMsTUFBSSxFQUFHLENBN2NzQjtBQThjN0JDLE9BQUssRUFBRyxDQTljcUI7QUErYzdCQyxVQUFRLEVBQUcsQ0EvY2tCO0FBZ2Q3QkMsT0FBSyxFQUFHLENBaGRxQjtBQWlkN0JDLE9BQUssRUFBRyxDQWpkcUI7QUFrZDdCQyxTQUFPLEVBQUcsQ0FsZG1CO0FBbWQ3QkMsV0FBUyxFQUFHLENBbmRpQjtBQW9kN0JDLE9BQUssRUFBRyxDQXBkcUI7QUFxZDdCQyxPQUFLLEVBQUcsQ0FyZHFCO0FBc2Q3QkMsU0FBTyxFQUFHLENBdGRtQjtBQXVkN0JDLFFBQU0sRUFBRyxDQXZkb0I7QUF3ZDdCQyxTQUFPLEVBQUcsQ0F4ZG1CO0FBeWQ3QkMsT0FBSyxFQUFHLENBemRxQjtBQTBkN0JDLFFBQU0sRUFBRyxDQTFkb0I7QUEyZDdCQyxVQUFRLEVBQUcsQ0EzZGtCO0FBNGQ3QkMsT0FBSyxFQUFHLENBNWRxQjtBQTZkN0JDLE9BQUssRUFBRyxDQTdkcUI7QUE4ZDdCQyxTQUFPLEVBQUcsQ0E5ZG1CO0FBK2Q3QkMsUUFBTSxFQUFHLENBL2RvQjtBQWdlN0JDLFNBQU8sRUFBRyxDQWhlbUI7QUFpZTdCQyxVQUFRLEVBQUcsQ0FqZWtCO0FBa2U3QkMsT0FBSyxFQUFHLENBbGVxQjtBQW1lN0JDLE1BQUksRUFBRyxDQW5lc0I7QUFvZTdCQyxNQUFJLEVBQUcsQ0FwZXNCO0FBcWU3QkMsU0FBTyxFQUFHLENBcmVtQjtBQXNlN0JDLE9BQUssRUFBRyxDQXRlcUI7QUF1ZTdCQyxNQUFJLEVBQUcsQ0F2ZXNCO0FBd2U3QkMsV0FBUyxFQUFHLENBeGVpQjtBQXllN0JDLE9BQUssRUFBRyxDQXplcUI7QUEwZTdCQyxNQUFJLEVBQUcsQ0ExZXNCO0FBMmU3QkMsTUFBSSxFQUFHLENBM2VzQjtBQTRlN0JDLFFBQU0sRUFBRyxDQTVlb0I7QUE2ZTdCQyxXQUFTLEVBQUcsQ0E3ZWlCO0FBOGU3QkMsTUFBSSxFQUFHLENBOWVzQjtBQStlN0JDLFVBQVEsRUFBRyxDQS9la0I7QUFnZjdCQyxXQUFTLEVBQUcsQ0FoZmlCO0FBaWY3QkMsU0FBTyxFQUFHLENBamZtQjtBQWtmN0JDLFlBQVUsRUFBRyxDQWxmZ0I7QUFtZjdCQyxZQUFVLEVBQUcsQ0FuZmdCO0FBb2Y3QkMsU0FBTyxFQUFHLENBcGZtQjtBQXFmN0JDLFVBQVEsRUFBRyxDQXJma0I7QUFzZjdCQyxPQUFLLEVBQUcsQ0F0ZnFCO0FBdWY3QkMsUUFBTSxFQUFHLENBdmZvQjtBQXdmN0JDLGFBQVcsRUFBRyxDQXhmZTtBQXlmN0JDLFNBQU8sRUFBRyxDQXpmbUI7QUEwZjdCQyxNQUFJLEVBQUcsQ0ExZnNCO0FBMmY3QkMsUUFBTSxFQUFHLENBM2ZvQjtBQTRmN0JDLFNBQU8sRUFBRyxDQTVmbUI7QUE2ZjdCQyxhQUFXLEVBQUcsQ0E3ZmU7QUE4ZjdCQyxTQUFPLEVBQUcsQ0E5Zm1CO0FBK2Y3QkMsV0FBUyxFQUFHLENBL2ZpQjtBQWdnQjdCQyxTQUFPLEVBQUcsQ0FoZ0JtQjtBQWlnQjdCQyxZQUFVLEVBQUcsQ0FqZ0JnQjtBQWtnQjdCQyxZQUFVLEVBQUcsQ0FsZ0JnQjtBQW1nQjdCQyxRQUFNLEVBQUcsQ0FuZ0JvQjtBQW9nQjdCQyxZQUFVLEVBQUcsQ0FwZ0JnQjtBQXFnQjdCQyxXQUFTLEVBQUcsQ0FyZ0JpQjtBQXNnQjdCQyxRQUFNLEVBQUcsQ0F0Z0JvQjtBQXVnQjdCQyxhQUFXLEVBQUcsQ0F2Z0JlO0FBd2dCN0JDLGVBQWEsRUFBRyxDQXhnQmE7QUF5Z0I3QkMsV0FBUyxFQUFHLENBemdCaUI7QUEwZ0I3QkMsU0FBTyxFQUFHLENBMWdCbUI7QUEyZ0I3QkMsU0FBTyxFQUFHLENBM2dCbUI7QUE0Z0I3QkMsWUFBVSxFQUFHLENBNWdCZ0I7QUE2Z0I3QkMsU0FBTyxFQUFHLENBN2dCbUI7QUE4Z0I3QkMsYUFBVyxFQUFHLENBOWdCZTtBQStnQjdCQyxhQUFXLEVBQUcsQ0EvZ0JlO0FBZ2hCN0JDLFlBQVUsRUFBRyxDQWhoQmdCO0FBaWhCN0JDLFVBQVEsRUFBRyxDQWpoQmtCO0FBa2hCN0JDLFdBQVMsRUFBRyxDQWxoQmlCO0FBbWhCN0JDLFVBQVEsRUFBRyxDQW5oQmtCO0FBb2hCN0JDLFlBQVUsRUFBRyxDQXBoQmdCO0FBcWhCN0JDLFNBQU8sRUFBRyxDQXJoQm1CO0FBc2hCN0JDLGFBQVcsRUFBRyxDQXRoQmU7QUF1aEI3QkMsV0FBUyxFQUFHLENBdmhCaUI7QUF3aEI3QkMsU0FBTyxFQUFHLENBeGhCbUI7QUF5aEI3QkMsYUFBVyxFQUFHLENBemhCZTtBQTBoQjdCQyxlQUFhLEVBQUcsQ0ExaEJhO0FBMmhCN0JDLFVBQVEsRUFBRyxDQTNoQmtCO0FBNGhCN0JDLGFBQVcsRUFBRyxDQTVoQmU7QUE2aEI3QkMsZUFBYSxFQUFHLENBN2hCYTtBQThoQjdCQyxTQUFPLEVBQUcsQ0E5aEJtQjtBQStoQjdCQyxTQUFPLEVBQUcsQ0EvaEJtQjtBQWdpQjdCQyxXQUFTLEVBQUcsQ0FoaUJpQjtBQWlpQjdCQyxTQUFPLEVBQUcsQ0FqaUJtQjtBQWtpQjdCQyxVQUFRLEVBQUcsQ0FsaUJrQjtBQW1pQjdCQyxZQUFVLEVBQUcsQ0FuaUJnQjtBQW9pQjdCQyxVQUFRLEVBQUcsQ0FwaUJrQjtBQXFpQjdCQyxXQUFTLEVBQUcsQ0FyaUJpQjtBQXNpQjdCQyxTQUFPLEVBQUcsQ0F0aUJtQjtBQXVpQjdCQyxZQUFVLEVBQUcsQ0F2aUJnQjtBQXdpQjdCQyxZQUFVLEVBQUcsQ0F4aUJnQjtBQXlpQjdCQyxXQUFTLEVBQUcsQ0F6aUJpQjtBQTBpQjdCQyxTQUFPLEVBQUcsQ0ExaUJtQjtBQTJpQjdCQyxVQUFRLEVBQUcsQ0EzaUJrQjtBQTRpQjdCQyxVQUFRLEVBQUcsQ0E1aUJrQjtBQTZpQjdCQyxXQUFTLEVBQUcsQ0E3aUJpQjtBQThpQjdCQyxVQUFRLEVBQUcsQ0E5aUJrQjtBQStpQjdCQyxlQUFhLEVBQUcsQ0EvaUJhO0FBZ2pCN0JDLFNBQU8sRUFBRyxDQWhqQm1CO0FBaWpCN0JDLFlBQVUsRUFBRyxDQWpqQmdCO0FBa2pCN0JDLGVBQWEsRUFBRyxDQWxqQmE7QUFtakI3QkMsV0FBUyxFQUFHLENBbmpCaUI7QUFvakI3QkMsYUFBVyxFQUFHLENBcGpCZTtBQXFqQjdCQyxjQUFZLEVBQUcsQ0FyakJjO0FBc2pCN0JDLFVBQVEsRUFBRyxDQXRqQmtCO0FBdWpCN0JDLGNBQVksRUFBRyxDQXZqQmM7QUF3akI3QkMsZUFBYSxFQUFHLENBeGpCYTtBQXlqQjdCQyxTQUFPLEVBQUcsQ0F6akJtQjtBQTBqQjdCQyxZQUFVLEVBQUcsQ0ExakJnQjtBQTJqQjdCQyxVQUFRLEVBQUcsQ0EzakJrQjtBQTRqQjdCQyxZQUFVLEVBQUcsQ0E1akJnQjtBQTZqQjdCQyxZQUFVLEVBQUcsQ0E3akJnQjtBQThqQjdCQyxnQkFBYyxFQUFHLENBOWpCWTtBQStqQjdCQyxXQUFTLEVBQUcsQ0EvakJpQjtBQWdrQjdCQyxjQUFZLEVBQUcsQ0Foa0JjO0FBaWtCN0JDLFlBQVUsRUFBRyxDQWprQmdCO0FBa2tCN0JDLFNBQU8sRUFBRyxDQWxrQm1CO0FBbWtCN0JDLFVBQVEsRUFBRyxDQW5rQmtCO0FBb2tCN0JDLGFBQVcsRUFBRyxDQXBrQmU7QUFxa0I3QkMsU0FBTyxFQUFHLENBcmtCbUI7QUFza0I3QkMsU0FBTyxFQUFHLENBdGtCbUI7QUF1a0I3QkMsV0FBUyxFQUFHLENBdmtCaUI7QUF3a0I3QkMsY0FBWSxFQUFHLENBeGtCYztBQXlrQjdCQyxTQUFPLEVBQUcsQ0F6a0JtQjtBQTBrQjdCQyxTQUFPLEVBQUcsQ0Exa0JtQjtBQTJrQjdCQyxTQUFPLEVBQUcsQ0Eza0JtQjtBQTRrQjdCQyxVQUFRLEVBQUcsQ0E1a0JrQjtBQTZrQjdCQyxXQUFTLEVBQUcsQ0E3a0JpQjtBQThrQjdCQyxVQUFRLEVBQUcsQ0E5a0JrQjtBQStrQjdCQyxVQUFRLEVBQUcsQ0Eva0JrQjtBQWdsQjdCQyxZQUFVLEVBQUcsQ0FobEJnQjtBQWlsQjdCQyxjQUFZLEVBQUcsQ0FqbEJjO0FBa2xCN0JDLFNBQU8sRUFBRyxDQWxsQm1CO0FBbWxCN0JDLGVBQWEsRUFBRyxDQW5sQmE7QUFvbEI3QkMsYUFBVyxFQUFHLENBcGxCZTtBQXFsQjdCQyxZQUFVLEVBQUcsQ0FybEJnQjtBQXNsQjdCQyxjQUFZLEVBQUcsQ0F0bEJjO0FBdWxCN0JDLGNBQVksRUFBRyxDQXZsQmM7QUF3bEI3QkMsU0FBTyxFQUFHLENBeGxCbUI7QUF5bEI3QkMsWUFBVSxFQUFHLENBemxCZ0I7QUEwbEI3QkMsVUFBUSxFQUFHLENBMWxCa0I7QUEybEI3QkMsTUFBSSxFQUFHLENBM2xCc0I7QUE0bEI3QkMsUUFBTSxFQUFHLENBNWxCb0I7QUE2bEI3QkMsU0FBTyxFQUFHLENBN2xCbUI7QUE4bEI3QkMsTUFBSSxFQUFHLENBOWxCc0I7QUErbEI3QkMsYUFBVyxFQUFHLENBL2xCZTtBQWdtQjdCQyxLQUFHLEVBQUcsQ0FobUJ1QjtBQWltQjdCQyxNQUFJLEVBQUcsQ0FqbUJzQjtBQWttQjdCQyxNQUFJLEVBQUcsQ0FsbUJzQjtBQW1tQjdCQyxNQUFJLEVBQUcsQ0FubUJzQjtBQW9tQjdCQyxNQUFJLEVBQUcsQ0FwbUJzQjtBQXFtQjdCQyxRQUFNLEVBQUcsQ0FybUJvQjtBQXNtQjdCQyxXQUFTLEVBQUcsQ0F0bUJpQjtBQXVtQjdCQyxhQUFXLEVBQUcsQ0F2bUJlO0FBd21CN0JDLFNBQU8sRUFBRyxDQXhtQm1CO0FBeW1CN0JDLGVBQWEsRUFBRyxDQXptQmE7QUEwbUI3QkMsTUFBSSxFQUFHLENBMW1Cc0I7QUEybUI3QkMsUUFBTSxFQUFHLENBM21Cb0I7QUE0bUI3QkMsT0FBSyxFQUFHLENBNW1CcUI7QUE2bUI3QkMsT0FBSyxFQUFHLENBN21CcUI7QUE4bUI3QkMsU0FBTyxFQUFHLENBOW1CbUI7QUErbUI3QkMsV0FBUyxFQUFHLENBL21CaUI7QUFnbkI3QkMsT0FBSyxFQUFHLENBaG5CcUI7QUFpbkI3QkMsU0FBTyxFQUFHLENBam5CbUI7QUFrbkI3QkMsU0FBTyxFQUFHLENBbG5CbUI7QUFtbkI3QkMsUUFBTSxFQUFHLENBbm5Cb0I7QUFvbkI3QkMsUUFBTSxFQUFHLENBcG5Cb0I7QUFxbkI3QkMsU0FBTyxFQUFHLENBcm5CbUI7QUFzbkI3QkMsUUFBTSxFQUFHLENBdG5Cb0I7QUF1bkI3QkMsT0FBSyxFQUFHLENBdm5CcUI7QUF3bkI3QkMsUUFBTSxFQUFHLENBeG5Cb0I7QUF5bkI3QkMsT0FBSyxFQUFHLENBem5CcUI7QUEwbkI3QkMsVUFBUSxFQUFHLENBMW5Ca0I7QUEybkI3QkMsS0FBRyxFQUFHLENBM25CdUI7QUE0bkI3QkMsT0FBSyxFQUFHLENBNW5CcUI7QUE2bkI3QkMsT0FBSyxFQUFHLENBN25CcUI7QUE4bkI3QkMsT0FBSyxFQUFHLENBOW5CcUI7QUErbkI3QkMsT0FBSyxFQUFHLENBL25CcUI7QUFnb0I3QkMsT0FBSyxFQUFHLENBaG9CcUI7QUFpb0I3QkMsUUFBTSxFQUFHLENBam9Cb0I7QUFrb0I3QkMsVUFBUSxFQUFHLENBbG9Ca0I7QUFtb0I3QkMsVUFBUSxFQUFHLENBbm9Ca0I7QUFvb0I3QkMsVUFBUSxFQUFHLENBcG9Ca0I7QUFxb0I3QkMsUUFBTSxFQUFHLENBcm9Cb0I7QUFzb0I3QkMsTUFBSSxFQUFHLENBdG9Cc0I7QUF1b0I3QkMsT0FBSyxFQUFHLENBdm9CcUI7QUF3b0I3QkMsVUFBUSxFQUFHLENBeG9Ca0I7QUF5b0I3QkMsUUFBTSxFQUFHLENBem9Cb0I7QUEwb0I3QkMsVUFBUSxFQUFHLENBMW9Ca0I7QUEyb0I3QkMsUUFBTSxFQUFHLENBM29Cb0I7QUE0b0I3QkMsVUFBUSxFQUFHLENBNW9Ca0I7QUE2b0I3QkMsV0FBUyxFQUFHLENBN29CaUI7QUE4b0I3QkMsV0FBUyxFQUFHLENBOW9CaUI7QUErb0I3QkMsTUFBSSxFQUFHLENBL29Cc0I7QUFncEI3QkMsT0FBSyxFQUFHLENBaHBCcUI7QUFpcEI3QkMsT0FBSyxFQUFHLENBanBCcUI7QUFrcEI3QkMsU0FBTyxFQUFHLENBbHBCbUI7QUFtcEI3QkMsS0FBRyxFQUFHLENBbnBCdUI7QUFvcEI3QkMsVUFBUSxFQUFHLENBcHBCa0I7QUFxcEI3QkMsU0FBTyxFQUFHLENBcnBCbUI7QUFzcEI3QkMsS0FBRyxFQUFHLENBdHBCdUI7QUF1cEI3QkMsU0FBTyxFQUFHLENBdnBCbUI7QUF3cEI3QkMsU0FBTyxFQUFHLENBeHBCbUI7QUF5cEI3QkMsV0FBUyxFQUFHLENBenBCaUI7QUEwcEI3QkMsWUFBVSxFQUFHLENBMXBCZ0I7QUEycEI3QkMsUUFBTSxFQUFHLENBM3BCb0I7QUE0cEI3QkMsVUFBUSxFQUFHLENBNXBCa0I7QUE2cEI3QkMsS0FBRyxFQUFHLENBN3BCdUI7QUE4cEI3QkMsT0FBSyxFQUFHLENBOXBCcUI7QUErcEI3QkMsS0FBRyxFQUFHLENBL3BCdUI7QUFncUI3QkMsT0FBSyxFQUFHLENBaHFCcUI7QUFpcUI3QkMsUUFBTSxFQUFHLENBanFCb0I7QUFrcUI3QkMsT0FBSyxFQUFHLENBbHFCcUI7QUFtcUI3QkMsUUFBTSxFQUFHLENBbnFCb0I7QUFvcUI3QkMsV0FBUyxFQUFHLENBcHFCaUI7QUFxcUI3QkMsTUFBSSxFQUFHLENBcnFCc0I7QUFzcUI3QkMsTUFBSSxFQUFHLENBdHFCc0I7QUF1cUI3QkMsVUFBUSxFQUFHLENBdnFCa0I7QUF3cUI3QkMsTUFBSSxFQUFHLENBeHFCc0I7QUF5cUI3QkMsTUFBSSxFQUFHLENBenFCc0I7QUEwcUI3QkMsVUFBUSxFQUFHLENBMXFCa0I7QUEycUI3QkMsS0FBRyxFQUFHLENBM3FCdUI7QUE0cUI3QkMsTUFBSSxFQUFHLENBNXFCc0I7QUE2cUI3QkMsTUFBSSxFQUFHLENBN3FCc0I7QUE4cUI3QkMsUUFBTSxFQUFHLENBOXFCb0I7QUErcUI3QkMsTUFBSSxFQUFHLENBL3FCc0I7QUFnckI3QkMsT0FBSyxFQUFHLENBaHJCcUI7QUFpckI3QkMsUUFBTSxFQUFHLENBanJCb0I7QUFrckI3QkMsTUFBSSxFQUFHLENBbHJCc0I7QUFtckI3QkMsUUFBTSxFQUFHLENBbnJCb0I7QUFvckI3QkMsUUFBTSxFQUFHLENBcHJCb0I7QUFxckI3QkMsVUFBUSxFQUFHLENBcnJCa0I7QUFzckI3QkMsTUFBSSxFQUFHLENBdHJCc0I7QUF1ckI3QkMsU0FBTyxFQUFHLENBdnJCbUI7QUF3ckI3QkMsU0FBTyxFQUFHLENBeHJCbUI7QUF5ckI3QkMsVUFBUSxFQUFHLENBenJCa0I7QUEwckI3QkMsTUFBSSxFQUFHLENBMXJCc0I7QUEyckI3QkMsUUFBTSxFQUFHLENBM3JCb0I7QUE0ckI3QkMsTUFBSSxFQUFHLENBNXJCc0I7QUE2ckI3QkMsUUFBTSxFQUFHLENBN3JCb0I7QUE4ckI3QkMsUUFBTSxFQUFHLENBOXJCb0I7QUErckI3QkMsV0FBUyxFQUFHLENBL3JCaUI7QUFnc0I3QkMsU0FBTyxFQUFHLENBaHNCbUI7QUFpc0I3QkMsV0FBUyxFQUFHLENBanNCaUI7QUFrc0I3QkMsU0FBTyxFQUFHLENBbHNCbUI7QUFtc0I3QkMsUUFBTSxFQUFHLENBbnNCb0I7QUFvc0I3QkMsWUFBVSxFQUFHLENBcHNCZ0I7QUFxc0I3QkMsWUFBVSxFQUFHLENBcnNCZ0I7QUFzc0I3QkMsUUFBTSxFQUFHLENBdHNCb0I7QUF1c0I3QkMsT0FBSyxFQUFHLENBdnNCcUI7QUF3c0I3QkMsU0FBTyxFQUFHLENBeHNCbUI7QUF5c0I3QkMsVUFBUSxFQUFHLENBenNCa0I7QUEwc0I3QkMsUUFBTSxFQUFHLENBMXNCb0I7QUEyc0I3QkMsV0FBUyxFQUFHLENBM3NCaUI7QUE0c0I3QkMsVUFBUSxFQUFHLENBNXNCa0I7QUE2c0I3QkMsWUFBVSxFQUFHLENBN3NCZ0I7QUE4c0I3QkMsYUFBVyxFQUFHLENBOXNCZTtBQStzQjdCQyxlQUFhLEVBQUcsQ0Evc0JhO0FBZ3RCN0JDLE1BQUksRUFBRyxDQWh0QnNCO0FBaXRCN0JDLFlBQVUsRUFBRyxDQWp0QmdCO0FBa3RCN0JDLFFBQU0sRUFBRyxDQWx0Qm9CO0FBbXRCN0JDLFdBQVMsRUFBRyxDQW50QmlCO0FBb3RCN0JDLFdBQVMsRUFBRyxDQXB0QmlCO0FBcXRCN0JDLFFBQU0sRUFBRyxDQXJ0Qm9CO0FBc3RCN0JDLFlBQVUsRUFBRyxDQXR0QmdCO0FBdXRCN0JDLE9BQUssRUFBRyxDQXZ0QnFCO0FBd3RCN0JDLFFBQU0sRUFBRyxDQXh0Qm9CO0FBeXRCN0JDLFFBQU0sRUFBRyxDQXp0Qm9CO0FBMHRCN0JDLFVBQVEsRUFBRyxDQTF0QmtCO0FBMnRCN0JDLGFBQVcsRUFBRyxDQTN0QmU7QUE0dEI3QkMsUUFBTSxFQUFHLENBNXRCb0I7QUE2dEI3QkMsU0FBTyxFQUFHLENBN3RCbUI7QUE4dEI3QkMsUUFBTSxFQUFHLENBOXRCb0I7QUErdEI3QkMsVUFBUSxFQUFHLENBL3RCa0I7QUFndUI3QkMsUUFBTSxFQUFHLENBaHVCb0I7QUFpdUI3QkMsTUFBSSxFQUFHLENBanVCc0I7QUFrdUI3QkMsV0FBUyxFQUFHLENBbHVCaUI7QUFtdUI3QkMsU0FBTyxFQUFHLENBbnVCbUI7QUFvdUI3QkMsU0FBTyxFQUFHLENBcHVCbUI7QUFxdUI3QkMsYUFBVyxFQUFHLENBcnVCZTtBQXN1QjdCQyxRQUFNLEVBQUcsQ0F0dUJvQjtBQXV1QjdCQyxVQUFRLEVBQUcsQ0F2dUJrQjtBQXd1QjdCQyxRQUFNLEVBQUcsQ0F4dUJvQjtBQXl1QjdCQyxXQUFTLEVBQUcsQ0F6dUJpQjtBQTB1QjdCQyxTQUFPLEVBQUcsQ0ExdUJtQjtBQTJ1QjdCQyxZQUFVLEVBQUcsQ0EzdUJnQjtBQTR1QjdCQyxhQUFXLEVBQUcsQ0E1dUJlO0FBNnVCN0JDLFFBQU0sRUFBRyxDQTd1Qm9CO0FBOHVCN0JDLFFBQU0sRUFBRyxDQTl1Qm9CO0FBK3VCN0JDLFVBQVEsRUFBRyxDQS91QmtCO0FBZ3ZCN0JDLEtBQUcsRUFBRyxDQWh2QnVCO0FBaXZCN0JDLE1BQUksRUFBRyxDQWp2QnNCO0FBa3ZCN0JDLFFBQU0sRUFBRyxDQWx2Qm9CO0FBbXZCN0JDLFlBQVUsRUFBRyxDQW52QmdCO0FBb3ZCN0JDLFdBQVMsRUFBRyxDQXB2QmlCO0FBcXZCN0JDLGFBQVcsRUFBRyxDQXJ2QmU7QUFzdkI3QkMsV0FBUyxFQUFHLENBdHZCaUI7QUF1dkI3QkMsWUFBVSxFQUFHLENBdnZCZ0I7QUF3dkI3QkMsS0FBRyxFQUFHLENBeHZCdUI7QUF5dkI3QkMsU0FBTyxFQUFHLENBenZCbUI7QUEwdkI3QkMsV0FBUyxFQUFHLENBMXZCaUI7QUEydkI3QkMsUUFBTSxFQUFHLENBM3ZCb0I7QUE0dkI3QkMsUUFBTSxFQUFHLENBNXZCb0I7QUE2dkI3QkMsUUFBTSxFQUFHLENBN3ZCb0I7QUE4dkI3QkMsV0FBUyxFQUFHLENBOXZCaUI7QUErdkI3QkMsVUFBUSxFQUFHLENBL3ZCa0I7QUFnd0I3QkMsVUFBUSxFQUFHLENBaHdCa0I7QUFpd0I3QkMsTUFBSSxFQUFHLENBandCc0I7QUFrd0I3QkMsT0FBSyxFQUFHLENBbHdCcUI7QUFtd0I3QkMsWUFBVSxFQUFHLENBbndCZ0I7QUFvd0I3QkMsVUFBUSxFQUFHLENBcHdCa0I7QUFxd0I3QkMsV0FBUyxFQUFHLENBcndCaUI7QUFzd0I3QkMsVUFBUSxFQUFHLENBdHdCa0I7QUF1d0I3QkMsWUFBVSxFQUFHLENBdndCZ0I7QUF3d0I3QkMsV0FBUyxFQUFHLENBeHdCaUI7QUF5d0I3QkMsVUFBUSxFQUFHLENBendCa0I7QUEwd0I3QkMsV0FBUyxFQUFHLENBMXdCaUI7QUEyd0I3QkMsZ0JBQWMsRUFBRyxDQTN3Qlk7QUE0d0I3QkMsU0FBTyxFQUFHLENBNXdCbUI7QUE2d0I3QkMsWUFBVSxFQUFHLENBN3dCZ0I7QUE4d0I3QkMsU0FBTyxFQUFHLENBOXdCbUI7QUErd0I3QkMsTUFBSSxFQUFHLENBL3dCc0I7QUFneEI3QkMsU0FBTyxFQUFHLENBaHhCbUI7QUFpeEI3QkMsVUFBUSxFQUFHLENBanhCa0I7QUFreEI3QkMsU0FBTyxFQUFHLENBbHhCbUI7QUFteEI3QkMsU0FBTyxFQUFHLENBbnhCbUI7QUFveEI3QkMsVUFBUSxFQUFHLENBcHhCa0I7QUFxeEI3QkMsU0FBTyxFQUFHLENBcnhCbUI7QUFzeEI3QkMsVUFBUSxFQUFHLENBdHhCa0I7QUF1eEI3QkMsYUFBVyxFQUFHLENBdnhCZTtBQXd4QjdCQyxhQUFXLEVBQUcsQ0F4eEJlO0FBeXhCN0JDLFlBQVUsRUFBRyxDQXp4QmdCO0FBMHhCN0JDLGNBQVksRUFBRyxDQTF4QmM7QUEyeEI3QkMsVUFBUSxFQUFHLENBM3hCa0I7QUE0eEI3QkMsU0FBTyxFQUFHLENBNXhCbUI7QUE2eEI3QkMsV0FBUyxFQUFHLENBN3hCaUI7QUE4eEI3QkMsUUFBTSxFQUFHLENBOXhCb0I7QUEreEI3QkMsVUFBUSxFQUFHLENBL3hCa0I7QUFneUI3QkMsU0FBTyxFQUFHLENBaHlCbUI7QUFpeUI3QkMsS0FBRyxFQUFHLENBanlCdUI7QUFreUI3QkMsSUFBRSxFQUFHLENBbHlCd0I7QUFteUI3QkMsUUFBTSxFQUFHLENBbnlCb0I7QUFveUI3QkMsVUFBUSxFQUFHLENBcHlCa0I7QUFxeUI3QkMsS0FBRyxFQUFHLENBcnlCdUI7QUFzeUI3QkMsVUFBUSxFQUFHLENBdHlCa0I7QUF1eUI3QkMsVUFBUSxFQUFHLENBdnlCa0I7QUF3eUI3QkMsVUFBUSxFQUFHLENBeHlCa0I7QUF5eUI3QkMsTUFBSSxFQUFHLENBenlCc0I7QUEweUI3QkMsUUFBTSxFQUFHLENBMXlCb0I7QUEyeUI3QkMsT0FBSyxFQUFHLENBM3lCcUI7QUE0eUI3QkMsTUFBSSxFQUFHLENBNXlCc0I7QUE2eUI3QkMsVUFBUSxFQUFHLENBN3lCa0I7QUE4eUI3QkMsT0FBSyxFQUFHLENBOXlCcUI7QUEreUI3QkMsT0FBSyxFQUFHLENBL3lCcUI7QUFnekI3QkMsTUFBSSxFQUFHLENBaHpCc0I7QUFpekI3QkMsT0FBSyxFQUFHLENBanpCcUI7QUFrekI3QkMsVUFBUSxFQUFHLENBbHpCa0I7QUFtekI3QkMsY0FBWSxFQUFHLENBbnpCYztBQW96QjdCQyxNQUFJLEVBQUcsQ0FwekJzQjtBQXF6QjdCQyxTQUFPLEVBQUcsQ0FyekJtQjtBQXN6QjdCQyxPQUFLLEVBQUcsQ0F0ekJxQjtBQXV6QjdCQyxPQUFLLEVBQUcsQ0F2ekJxQjtBQXd6QjdCQyxPQUFLLEVBQUcsQ0F4ekJxQjtBQXl6QjdCQyxPQUFLLEVBQUcsQ0F6ekJxQjtBQTB6QjdCQyxRQUFNLEVBQUcsQ0ExekJvQjtBQTJ6QjdCQyxNQUFJLEVBQUcsQ0EzekJzQjtBQTR6QjdCQyxNQUFJLEVBQUcsQ0E1ekJzQjtBQTZ6QjdCQyxLQUFHLEVBQUcsQ0E3ekJ1QjtBQTh6QjdCQyxLQUFHLEVBQUcsQ0E5ekJ1QjtBQSt6QjdCQyxRQUFNLEVBQUcsQ0EvekJvQjtBQWcwQjdCQyxNQUFJLEVBQUcsQ0FoMEJzQjtBQWkwQjdCQyxNQUFJLEVBQUcsQ0FqMEJzQjtBQWswQjdCQyxNQUFJLEVBQUcsQ0FsMEJzQjtBQW0wQjdCQyxPQUFLLEVBQUcsQ0FuMEJxQjtBQW8wQjdCQyxLQUFHLEVBQUcsQ0FwMEJ1QjtBQXEwQjdCQyxPQUFLLEVBQUcsQ0FyMEJxQjtBQXMwQjdCQyxNQUFJLEVBQUcsQ0F0MEJzQjtBQXUwQjdCQyxVQUFRLEVBQUcsQ0F2MEJrQjtBQXcwQjdCQyxPQUFLLEVBQUcsQ0F4MEJxQjtBQXkwQjdCQyxNQUFJLEVBQUcsQ0F6MEJzQjtBQTAwQjdCQyxRQUFNLEVBQUcsQ0ExMEJvQjtBQTIwQjdCQyxNQUFJLEVBQUcsQ0EzMEJzQjtBQTQwQjdCQyxTQUFPLEVBQUcsQ0E1MEJtQjtBQTYwQjdCQyxNQUFJLEVBQUcsQ0E3MEJzQjtBQTgwQjdCQyxLQUFHLEVBQUcsQ0E5MEJ1QjtBQSswQjdCQyxVQUFRLEVBQUcsQ0EvMEJrQjtBQWcxQjdCQyxXQUFTLEVBQUcsQ0FoMUJpQjtBQWkxQjdCQyxXQUFTLEVBQUcsQ0FqMUJpQjtBQWsxQjdCQyxTQUFPLEVBQUcsQ0FsMUJtQjtBQW0xQjdCQyxNQUFJLEVBQUcsQ0FuMUJzQjtBQW8xQjdCQyxTQUFPLEVBQUcsQ0FwMUJtQjtBQXExQjdCQyxRQUFNLEVBQUcsQ0FyMUJvQjtBQXMxQjdCQyxTQUFPLEVBQUcsQ0F0MUJtQjtBQXUxQjdCQyxXQUFTLEVBQUcsQ0F2MUJpQjtBQXcxQjdCQyxhQUFXLEVBQUcsQ0F4MUJlO0FBeTFCN0JDLFVBQVEsRUFBRyxDQXoxQmtCO0FBMDFCN0JDLFFBQU0sRUFBRyxDQTExQm9CO0FBMjFCN0JDLFdBQVMsRUFBRyxDQTMxQmlCO0FBNDFCN0JDLGFBQVcsRUFBRyxDQTUxQmU7QUE2MUI3QkMsWUFBVSxFQUFHLENBNzFCZ0I7QUE4MUI3QkMsV0FBUyxFQUFHLENBOTFCaUI7QUErMUI3QkMsUUFBTSxFQUFHLENBLzFCb0I7QUFnMkI3QkMsS0FBRyxFQUFHLENBaDJCdUI7QUFpMkI3QkMsT0FBSyxFQUFHLENBajJCcUI7QUFrMkI3QkMsUUFBTSxFQUFHLENBbDJCb0I7QUFtMkI3QkMsU0FBTyxFQUFHLENBbjJCbUI7QUFvMkI3QkMsT0FBSyxFQUFHLENBcDJCcUI7QUFxMkI3QkMsVUFBUSxFQUFHLENBcjJCa0I7QUFzMkI3QkMsVUFBUSxFQUFHLENBdDJCa0I7QUF1MkI3QkMsYUFBVyxFQUFHLENBdjJCZTtBQXcyQjdCQyxZQUFVLEVBQUcsQ0F4MkJnQjtBQXkyQjdCQyxTQUFPLEVBQUcsQ0F6MkJtQjtBQTAyQjdCQyxZQUFVLEVBQUcsQ0ExMkJnQjtBQTIyQjdCQyxXQUFTLEVBQUcsQ0EzMkJpQjtBQTQyQjdCQyxPQUFLLEVBQUcsQ0E1MkJxQjtBQTYyQjdCQyxNQUFJLEVBQUcsQ0E3MkJzQjtBQTgyQjdCQyxXQUFTLEVBQUcsQ0E5MkJpQjtBQSsyQjdCLFlBQVcsQ0EvMkJrQjtBQWczQjdCQyxTQUFPLEVBQUcsQ0FoM0JtQjtBQWkzQjdCQyxRQUFNLEVBQUcsQ0FqM0JvQjtBQWszQjdCQyxXQUFTLEVBQUcsQ0FsM0JpQjtBQW0zQjdCQyxVQUFRLEVBQUcsQ0FuM0JrQjtBQW8zQjdCQyxTQUFPLEVBQUcsQ0FwM0JtQjtBQXEzQjdCQyxXQUFTLEVBQUcsQ0FyM0JpQjtBQXMzQjdCQyxVQUFRLEVBQUcsQ0F0M0JrQjtBQXUzQjdCQyxXQUFTLEVBQUcsQ0F2M0JpQjtBQXczQjdCQyxRQUFNLEVBQUcsQ0F4M0JvQjtBQXkzQjdCQyxVQUFRLEVBQUcsQ0F6M0JrQjtBQTAzQjdCQyxVQUFRLEVBQUcsQ0ExM0JrQjtBQTIzQjdCQyxZQUFVLEVBQUcsQ0EzM0JnQjtBQTQzQjdCQyxPQUFLLEVBQUcsQ0E1M0JxQjtBQTYzQjdCQyxRQUFNLEVBQUcsQ0E3M0JvQjtBQTgzQjdCQyxXQUFTLEVBQUcsQ0E5M0JpQjtBQSszQjdCQyxXQUFTLEVBQUcsQ0EvM0JpQjtBQWc0QjdCQyxLQUFHLEVBQUcsQ0FoNEJ1QjtBQWk0QjdCQyxPQUFLLEVBQUcsQ0FqNEJxQjtBQWs0QjdCQyxRQUFNLEVBQUcsQ0FsNEJvQjtBQW00QjdCQyxhQUFXLEVBQUcsQ0FuNEJlO0FBbzRCN0JDLFFBQU0sRUFBRyxDQXA0Qm9CO0FBcTRCN0JDLFFBQU0sRUFBRyxDQXI0Qm9CO0FBczRCN0JDLFVBQVEsRUFBRyxDQXQ0QmtCO0FBdTRCN0JDLGFBQVcsRUFBRyxDQXY0QmU7QUF3NEI3QkMsU0FBTyxFQUFHLENBeDRCbUI7QUF5NEI3QkMsU0FBTyxFQUFHLENBejRCbUI7QUEwNEI3QkMsT0FBSyxFQUFHLENBMTRCcUI7QUEyNEI3QkMsVUFBUSxFQUFHLENBMzRCa0I7QUE0NEI3QkMsUUFBTSxFQUFHLENBNTRCb0I7QUE2NEI3QkMsUUFBTSxFQUFHLENBNzRCb0I7QUE4NEI3QkMsT0FBSyxFQUFHLENBOTRCcUI7QUErNEI3QkMsWUFBVSxFQUFHLENBLzRCZ0I7QUFnNUI3QkMsZUFBYSxFQUFHLENBaDVCYTtBQWk1QjdCQyxRQUFNLEVBQUcsQ0FqNUJvQjtBQWs1QjdCQyxVQUFRLEVBQUcsQ0FsNUJrQjtBQW01QjdCQyxVQUFRLEVBQUcsQ0FuNUJrQjtBQW81QjdCQyxPQUFLLEVBQUcsQ0FwNUJxQjtBQXE1QjdCQyxhQUFXLEVBQUcsQ0FyNUJlO0FBczVCN0JDLGVBQWEsRUFBRyxDQXQ1QmE7QUF1NUI3QkMsU0FBTyxFQUFHLENBdjVCbUI7QUF3NUI3QkMsT0FBSyxFQUFHLENBeDVCcUI7QUF5NUI3QkMsU0FBTyxFQUFHLENBejVCbUI7QUEwNUI3QkMsV0FBUyxFQUFHLENBMTVCaUI7QUEyNUI3QkMsS0FBRyxFQUFHLENBMzVCdUI7QUE0NUI3QkMsT0FBSyxFQUFHLENBNTVCcUI7QUE2NUI3QkMsUUFBTSxFQUFHLENBNzVCb0I7QUE4NUI3QkMsWUFBVSxFQUFHLENBOTVCZ0I7QUErNUI3QkMsT0FBSyxFQUFHLENBLzVCcUI7QUFnNkI3QkMsV0FBUyxFQUFHLENBaDZCaUI7QUFpNkI3QkMsYUFBVyxFQUFHLENBajZCZTtBQWs2QjdCQyxXQUFTLEVBQUcsQ0FsNkJpQjtBQW02QjdCQyxlQUFhLEVBQUcsQ0FuNkJhO0FBbzZCN0JDLFFBQU0sRUFBRyxDQXA2Qm9CO0FBcTZCN0JDLFVBQVEsRUFBRyxDQXI2QmtCO0FBczZCN0JDLEtBQUcsRUFBRyxDQXQ2QnVCO0FBdTZCN0JDLFFBQU0sRUFBRyxDQXY2Qm9CO0FBdzZCN0JDLFFBQU0sRUFBRyxDQXg2Qm9CO0FBeTZCN0JDLFVBQVEsRUFBRyxDQXo2QmtCO0FBMDZCN0JDLFVBQVEsRUFBRyxDQTE2QmtCO0FBMjZCN0JDLFlBQVUsRUFBRyxDQTM2QmdCO0FBNDZCN0JDLE1BQUksRUFBRyxDQTU2QnNCO0FBNjZCN0JDLFNBQU8sRUFBRyxDQTc2Qm1CO0FBODZCN0JDLE9BQUssRUFBRyxDQTk2QnFCO0FBKzZCN0JDLFlBQVUsRUFBRyxDQS82QmdCO0FBZzdCN0JDLE1BQUksRUFBRyxDQWg3QnNCO0FBaTdCN0JDLE9BQUssRUFBRyxDQWo3QnFCO0FBazdCN0JDLFdBQVMsRUFBRyxDQWw3QmlCO0FBbTdCN0JDLFVBQVEsRUFBRyxDQW43QmtCO0FBbzdCN0JDLFVBQVEsRUFBRyxDQXA3QmtCO0FBcTdCN0JDLFlBQVUsRUFBRyxDQXI3QmdCO0FBczdCN0JDLFlBQVUsRUFBRyxDQXQ3QmdCO0FBdTdCN0JDLFVBQVEsRUFBRyxDQXY3QmtCO0FBdzdCN0JDLFdBQVMsRUFBRyxDQXg3QmlCO0FBeTdCN0JDLFFBQU0sRUFBRyxDQXo3Qm9CO0FBMDdCN0JDLE9BQUssRUFBRyxDQTE3QnFCO0FBMjdCN0JDLFNBQU8sRUFBRyxDQTM3Qm1CO0FBNDdCN0JDLGFBQVcsRUFBRyxDQTU3QmU7QUE2N0I3QkMsU0FBTyxFQUFHLENBNzdCbUI7QUE4N0I3QkMsU0FBTyxFQUFHLENBOTdCbUI7QUErN0I3QkMsUUFBTSxFQUFHLENBLzdCb0I7QUFnOEI3QkMsV0FBUyxFQUFHLENBaDhCaUI7QUFpOEI3QkMsUUFBTSxFQUFHLENBajhCb0I7QUFrOEI3QkMsV0FBUyxFQUFHLENBbDhCaUI7QUFtOEI3QkMsVUFBUSxFQUFHLENBbjhCa0I7QUFvOEI3QkMsVUFBUSxFQUFHLENBcDhCa0I7QUFxOEI3QkMsV0FBUyxFQUFHLENBcjhCaUI7QUFzOEI3QkMsVUFBUSxFQUFHLENBdDhCa0I7QUF1OEI3QkMsU0FBTyxFQUFHLENBdjhCbUI7QUF3OEI3QkMsWUFBVSxFQUFHLENBeDhCZ0I7QUF5OEI3QkMsT0FBSyxFQUFHLENBejhCcUI7QUEwOEI3QkMsV0FBUyxFQUFHLENBMThCaUI7QUEyOEI3QkMsVUFBUSxFQUFHLENBMzhCa0I7QUE0OEI3QkMsUUFBTSxFQUFHLENBNThCb0I7QUE2OEI3QkMsV0FBUyxFQUFHLENBNzhCaUI7QUE4OEI3QkMsUUFBTSxFQUFHLENBOThCb0I7QUErOEI3QkMsYUFBVyxFQUFHLENBLzhCZTtBQWc5QjdCQyxTQUFPLEVBQUcsQ0FoOUJtQjtBQWk5QjdCQyxXQUFTLEVBQUcsQ0FqOUJpQjtBQWs5QjdCQyxZQUFVLEVBQUcsQ0FsOUJnQjtBQW05QjdCQyxZQUFVLEVBQUcsQ0FuOUJnQjtBQW85QjdCQyxRQUFNLEVBQUcsQ0FwOUJvQjtBQXE5QjdCQyxTQUFPLEVBQUcsQ0FyOUJtQjtBQXM5QjdCQyxhQUFXLEVBQUcsQ0F0OUJlO0FBdTlCN0JDLFNBQU8sRUFBRyxDQXY5Qm1CO0FBdzlCN0JDLFNBQU8sRUFBRyxDQXg5Qm1CO0FBeTlCN0JDLFdBQVMsRUFBRyxDQXo5QmlCO0FBMDlCN0JDLFFBQU0sRUFBRyxDQTE5Qm9CO0FBMjlCN0JDLFVBQVEsRUFBRyxDQTM5QmtCO0FBNDlCN0JDLFNBQU8sRUFBRyxDQTU5Qm1CO0FBNjlCN0JDLFlBQVUsRUFBRyxDQTc5QmdCO0FBODlCN0JDLFFBQU0sRUFBRyxDQTk5Qm9CO0FBKzlCN0JDLFdBQVMsRUFBRyxDQS85QmlCO0FBZytCN0JDLFdBQVMsRUFBRyxDQWgrQmlCO0FBaStCN0JDLFFBQU0sRUFBRyxDQWorQm9CO0FBaytCN0JDLFVBQVEsRUFBRyxDQWwrQmtCO0FBbStCN0JDLE9BQUssRUFBRyxDQW4rQnFCO0FBbytCN0JDLGVBQWEsRUFBRyxDQXArQmE7QUFxK0I3QkMsU0FBTyxFQUFHLENBcitCbUI7QUFzK0I3QkMsV0FBUyxFQUFHLENBdCtCaUI7QUF1K0I3QkMsS0FBRyxFQUFHLENBditCdUI7QUF3K0I3QkMsUUFBTSxFQUFHLENBeCtCb0I7QUF5K0I3QkMsTUFBSSxFQUFHLENBeitCc0I7QUEwK0I3QkMsVUFBUSxFQUFHLENBMStCa0I7QUEyK0I3QkMsTUFBSSxFQUFHLENBMytCc0I7QUE0K0I3QkMsUUFBTSxFQUFHLENBNStCb0I7QUE2K0I3QkMsU0FBTyxFQUFHLENBNytCbUI7QUE4K0I3QkMsU0FBTyxFQUFHLENBOStCbUI7QUErK0I3QkMsTUFBSSxFQUFHLENBLytCc0I7QUFnL0I3QkMsTUFBSSxFQUFHLENBaC9Cc0I7QUFpL0I3QkMsU0FBTyxFQUFHLENBai9CbUI7QUFrL0I3QkMsTUFBSSxFQUFHLENBbC9Cc0I7QUFtL0I3QkMsUUFBTSxFQUFHLENBbi9Cb0I7QUFvL0I3QkMsT0FBSyxFQUFHLENBcC9CcUI7QUFxL0I3QkMsTUFBSSxFQUFHLENBci9Cc0I7QUFzL0I3QkMsT0FBSyxFQUFHLENBdC9CcUI7QUF1L0I3QkMsVUFBUSxFQUFHLENBdi9Ca0I7QUF3L0I3QkMsUUFBTSxFQUFHLENBeC9Cb0I7QUF5L0I3QkMsUUFBTSxFQUFHLENBei9Cb0I7QUEwL0I3QkMsS0FBRyxFQUFHLENBMS9CdUI7QUEyL0I3QkMsU0FBTyxFQUFHLENBMy9CbUI7QUE0L0I3QkMsS0FBRyxFQUFHLENBNS9CdUI7QUE2L0I3QkMsTUFBSSxFQUFHLENBNy9Cc0I7QUE4L0I3QkMsUUFBTSxFQUFHLENBOS9Cb0I7QUErL0I3QkMsU0FBTyxFQUFHLENBLy9CbUI7QUFnZ0M3QkMsTUFBSSxFQUFHLENBaGdDc0I7QUFpZ0M3QkMsS0FBRyxFQUFHLENBamdDdUI7QUFrZ0M3QkMsTUFBSSxFQUFHLENBbGdDc0I7QUFtZ0M3QkMsUUFBTSxFQUFHLENBbmdDb0I7QUFvZ0M3QkMsT0FBSyxFQUFHLENBcGdDcUI7QUFxZ0M3QkMsT0FBSyxFQUFHLENBcmdDcUI7QUFzZ0M3QkMsVUFBUSxFQUFHLENBdGdDa0I7QUF1Z0M3QkMsTUFBSSxFQUFHLENBdmdDc0I7QUF3Z0M3QkMsU0FBTyxFQUFHLENBeGdDbUI7QUF5Z0M3QkMsU0FBTyxFQUFHLENBemdDbUI7QUEwZ0M3QkMsS0FBRyxFQUFHLENBMWdDdUI7QUEyZ0M3QkMsTUFBSSxFQUFHLENBM2dDc0I7QUE0Z0M3QkMsTUFBSSxFQUFHLENBNWdDc0I7QUE2Z0M3QkMsU0FBTyxFQUFHLENBN2dDbUI7QUE4Z0M3QkMsUUFBTSxFQUFHLENBOWdDb0I7QUErZ0M3QkMsUUFBTSxFQUFHLENBL2dDb0I7QUFnaEM3QkMsT0FBSyxFQUFHLENBaGhDcUI7QUFpaEM3QkMsS0FBRyxFQUFHLENBamhDdUI7QUFraEM3QkMsT0FBSyxFQUFHLENBbGhDcUI7QUFtaEM3QkMsT0FBSyxFQUFHLENBbmhDcUI7QUFvaEM3QkMsU0FBTyxFQUFHLENBcGhDbUI7QUFxaEM3QkMsT0FBSyxFQUFHLENBcmhDcUI7QUFzaEM3QkMsU0FBTyxFQUFHLENBdGhDbUI7QUF1aEM3QkMsT0FBSyxFQUFHLENBdmhDcUI7QUF3aEM3QkMsT0FBSyxFQUFHLENBeGhDcUI7QUF5aEM3QkMsT0FBSyxFQUFHLENBemhDcUI7QUEwaEM3QkMsU0FBTyxFQUFHLENBMWhDbUI7QUEyaEM3QkMsVUFBUSxFQUFHLENBM2hDa0I7QUE0aEM3QkMsUUFBTSxFQUFHLENBNWhDb0I7QUE2aEM3QkMsTUFBSSxFQUFHLENBN2hDc0I7QUE4aEM3QkMsTUFBSSxFQUFHLENBOWhDc0I7QUEraEM3QkMsTUFBSSxFQUFHLENBL2hDc0I7QUFnaUM3QkMsT0FBSyxFQUFHLENBaGlDcUI7QUFpaUM3QkMsU0FBTyxFQUFHLENBamlDbUI7QUFraUM3QkMsU0FBTyxFQUFHLENBbGlDbUI7QUFtaUM3QkMsV0FBUyxFQUFHLENBbmlDaUI7QUFvaUM3QkMsTUFBSSxFQUFHLENBcGlDc0I7QUFxaUM3QkMsU0FBTyxFQUFHLENBcmlDbUI7QUFzaUM3QkMsTUFBSSxFQUFHLENBdGlDc0I7QUF1aUM3QkMsUUFBTSxFQUFHLENBdmlDb0I7QUF3aUM3QkMsUUFBTSxFQUFHLENBeGlDb0I7QUF5aUM3QkMsTUFBSSxFQUFHLENBemlDc0I7QUEwaUM3QkMsTUFBSSxFQUFHLENBMWlDc0I7QUEyaUM3QkMsT0FBSyxFQUFHLENBM2lDcUI7QUE0aUM3QkMsTUFBSSxFQUFHLENBNWlDc0I7QUE2aUM3QkMsU0FBTyxFQUFHLENBN2lDbUI7QUE4aUM3QkMsS0FBRyxFQUFHLENBOWlDdUI7QUEraUM3QkMsU0FBTyxFQUFHLENBL2lDbUI7QUFnakM3QkMsTUFBSSxFQUFHLENBaGpDc0I7QUFpakM3QkMsS0FBRyxFQUFHLENBampDdUI7QUFrakM3QkMsTUFBSSxFQUFHLENBbGpDc0I7QUFtakM3QkMsT0FBSyxFQUFHLENBbmpDcUI7QUFvakM3QkMsTUFBSSxFQUFHLENBcGpDc0I7QUFxakM3QkMsUUFBTSxFQUFHLENBcmpDb0I7QUFzakM3QkMsTUFBSSxFQUFHLENBdGpDc0I7QUF1akM3QkMsT0FBSyxFQUFHLENBdmpDcUI7QUF3akM3QkMsUUFBTSxFQUFHLENBeGpDb0I7QUF5akM3QkMsT0FBSyxFQUFHLENBempDcUI7QUEwakM3QkMsT0FBSyxFQUFHLENBMWpDcUI7QUEyakM3QkMsTUFBSSxFQUFHLENBM2pDc0I7QUE0akM3QkMsUUFBTSxFQUFHLENBNWpDb0I7QUE2akM3QkMsS0FBRyxFQUFHLENBN2pDdUI7QUE4akM3QkMsT0FBSyxFQUFHLENBOWpDcUI7QUErakM3QkMsTUFBSSxFQUFHLENBL2pDc0I7QUFna0M3QkMsUUFBTSxFQUFHLENBaGtDb0I7QUFpa0M3QkMsV0FBUyxFQUFHLENBamtDaUI7QUFra0M3QkMsTUFBSSxFQUFHLENBbGtDc0I7QUFta0M3QkMsTUFBSSxFQUFHLENBbmtDc0I7QUFva0M3QkMsVUFBUSxFQUFHLENBcGtDa0I7QUFxa0M3QkMsS0FBRyxFQUFHLENBcmtDdUI7QUFza0M3QkMsT0FBSyxFQUFHLENBdGtDcUI7QUF1a0M3QkMsU0FBTyxFQUFHLENBdmtDbUI7QUF3a0M3QkMsUUFBTSxFQUFHLENBeGtDb0I7QUF5a0M3QkMsU0FBTyxFQUFHLENBemtDbUI7QUEwa0M3QkMsUUFBTSxFQUFHLENBMWtDb0I7QUEya0M3QkMsTUFBSSxFQUFHLENBM2tDc0I7QUE0a0M3QkMsUUFBTSxFQUFHLENBNWtDb0I7QUE2a0M3QkMsV0FBUyxFQUFHLENBN2tDaUI7QUE4a0M3QkMsUUFBTSxFQUFHLENBOWtDb0I7QUEra0M3QkMsU0FBTyxFQUFHLENBL2tDbUI7QUFnbEM3QkMsT0FBSyxFQUFHLENBaGxDcUI7QUFpbEM3QkMsU0FBTyxFQUFHLENBamxDbUI7QUFrbEM3QkMsU0FBTyxFQUFHLENBbGxDbUI7QUFtbEM3QkMsT0FBSyxFQUFHLENBbmxDcUI7QUFvbEM3QkMsWUFBVSxFQUFHLENBcGxDZ0I7QUFxbEM3QkMsU0FBTyxFQUFHLENBcmxDbUI7QUFzbEM3QkMsTUFBSSxFQUFHLENBdGxDc0I7QUF1bEM3QkMsUUFBTSxFQUFHLENBdmxDb0I7QUF3bEM3QkMsT0FBSyxFQUFHLENBeGxDcUI7QUF5bEM3QkMsV0FBUyxFQUFHLENBemxDaUI7QUEwbEM3QkMsTUFBSSxFQUFHLENBMWxDc0I7QUEybEM3QkMsU0FBTyxFQUFHLENBM2xDbUI7QUE0bEM3QkMsUUFBTSxFQUFHLENBNWxDb0I7QUE2bEM3QkMsUUFBTSxFQUFHLENBN2xDb0I7QUE4bEM3QkMsV0FBUyxFQUFHLENBOWxDaUI7QUErbEM3QkMsVUFBUSxFQUFHLENBL2xDa0I7QUFnbUM3QkMsWUFBVSxFQUFHLENBaG1DZ0I7QUFpbUM3QkMsT0FBSyxFQUFHLENBam1DcUI7QUFrbUM3QkMsUUFBTSxFQUFHLENBbG1Db0I7QUFtbUM3QkMsVUFBUSxFQUFHLENBbm1Da0I7QUFvbUM3QkMsWUFBVSxFQUFHLENBcG1DZ0I7QUFxbUM3QkMsTUFBSSxFQUFHLENBcm1Dc0I7QUFzbUM3QkMsT0FBSyxFQUFHLENBdG1DcUI7QUF1bUM3QkMsT0FBSyxFQUFHLENBdm1DcUI7QUF3bUM3QkMsYUFBVyxFQUFHLENBeG1DZTtBQXltQzdCQyxNQUFJLEVBQUcsQ0F6bUNzQjtBQTBtQzdCQyxNQUFJLEVBQUcsQ0ExbUNzQjtBQTJtQzdCQyxPQUFLLEVBQUcsQ0EzbUNxQjtBQTRtQzdCQyxLQUFHLEVBQUcsQ0E1bUN1QjtBQTZtQzdCQyxVQUFRLEVBQUcsQ0E3bUNrQjtBQThtQzdCQyxNQUFJLEVBQUcsQ0E5bUNzQjtBQSttQzdCQyxhQUFXLEVBQUcsQ0EvbUNlO0FBZ25DN0JDLFNBQU8sRUFBRyxDQWhuQ21CO0FBaW5DN0JDLFNBQU8sRUFBRyxDQWpuQ21CO0FBa25DN0JDLE9BQUssRUFBRyxDQWxuQ3FCO0FBbW5DN0JDLFdBQVMsRUFBRyxDQW5uQ2lCO0FBb25DN0JDLGFBQVcsRUFBRyxDQXBuQ2U7QUFxbkM3QkMsUUFBTSxFQUFHLENBcm5Db0I7QUFzbkM3QkMsTUFBSSxFQUFHLENBdG5Dc0I7QUF1bkM3QkMsUUFBTSxFQUFHLENBdm5Db0I7QUF3bkM3QkMsU0FBTyxFQUFHLENBeG5DbUI7QUF5bkM3QkMsTUFBSSxFQUFHLENBem5Dc0I7QUEwbkM3QkMsTUFBSSxFQUFHLENBMW5Dc0I7QUEybkM3QkMsS0FBRyxFQUFHLENBM25DdUI7QUE0bkM3QkMsUUFBTSxFQUFHLENBNW5Db0I7QUE2bkM3QkMsUUFBTSxFQUFHLENBN25Db0I7QUE4bkM3QkMsUUFBTSxFQUFHLENBOW5Db0I7QUErbkM3QkMsS0FBRyxFQUFHLENBL25DdUI7QUFnb0M3QkMsTUFBSSxFQUFHLENBaG9Dc0I7QUFpb0M3QkMsUUFBTSxFQUFHLENBam9Db0I7QUFrb0M3QkMsS0FBRyxFQUFHLENBbG9DdUI7QUFtb0M3QkMsTUFBSSxFQUFHLENBbm9Dc0I7QUFvb0M3QkMsTUFBSSxFQUFHLENBcG9Dc0I7QUFxb0M3QkMsUUFBTSxFQUFHLENBcm9Db0I7QUFzb0M3QkMsTUFBSSxFQUFHLENBdG9Dc0I7QUF1b0M3QkMsU0FBTyxFQUFHLENBdm9DbUI7QUF3b0M3QkMsV0FBUyxFQUFHLENBeG9DaUI7QUF5b0M3QkMsVUFBUSxFQUFHLENBem9Da0I7QUEwb0M3QkMsWUFBVSxFQUFHLENBMW9DZ0I7QUEyb0M3QkMsU0FBTyxFQUFHLENBM29DbUI7QUE0b0M3QkMsV0FBUyxFQUFHLENBNW9DaUI7QUE2b0M3QkMsUUFBTSxFQUFHLENBN29Db0I7QUE4b0M3QkMsUUFBTSxFQUFHLENBOW9Db0I7QUErb0M3QkMsU0FBTyxFQUFHLENBL29DbUI7QUFncEM3QkMsS0FBRyxFQUFHLENBaHBDdUI7QUFpcEM3QkMsT0FBSyxFQUFHLENBanBDcUI7QUFrcEM3QkMsT0FBSyxFQUFHLENBbHBDcUI7QUFtcEM3QkMsTUFBSSxFQUFHLENBbnBDc0I7QUFvcEM3QkMsUUFBTSxFQUFHLENBcHBDb0I7QUFxcEM3QkMsTUFBSSxFQUFHLENBcnBDc0I7QUFzcEM3QkMsWUFBVSxFQUFHLENBdHBDZ0I7QUF1cEM3QkMsTUFBSSxFQUFHLENBdnBDc0I7QUF3cEM3QkMsT0FBSyxFQUFHLENBeHBDcUI7QUF5cEM3QkMsTUFBSSxFQUFHLENBenBDc0I7QUEwcEM3QkMsUUFBTSxFQUFHLENBMXBDb0I7QUEycEM3QkMsT0FBSyxFQUFHLENBM3BDcUI7QUE0cEM3QkMsUUFBTSxFQUFHLENBNXBDb0I7QUE2cEM3QkMsT0FBSyxFQUFHLENBN3BDcUI7QUE4cEM3QkMsSUFBRSxFQUFHLENBOXBDd0I7QUErcEM3QkMsTUFBSSxFQUFHLENBL3BDc0I7QUFncUM3QkMsS0FBRyxFQUFHLENBaHFDdUI7QUFpcUM3QkMsTUFBSSxFQUFHLENBanFDc0I7QUFrcUM3QkMsUUFBTSxFQUFHLENBbHFDb0I7QUFtcUM3QkMsTUFBSSxFQUFHLENBbnFDc0I7QUFvcUM3QkMsTUFBSSxFQUFHLENBcHFDc0I7QUFxcUM3QkMsWUFBVSxFQUFHLENBcnFDZ0I7QUFzcUM3QkMsVUFBUSxFQUFHLENBdHFDa0I7QUF1cUM3QkMsTUFBSSxFQUFHLENBdnFDc0I7QUF3cUM3QkMsT0FBSyxFQUFHLENBeHFDcUI7QUF5cUM3QkMsV0FBUyxFQUFHLENBenFDaUI7QUEwcUM3QkMsVUFBUSxFQUFHLENBMXFDa0I7QUEycUM3QkMsT0FBSyxFQUFHLENBM3FDcUI7QUE0cUM3QkMsT0FBSyxFQUFHLENBNXFDcUI7QUE2cUM3QkMsYUFBVyxFQUFHLENBN3FDZTtBQThxQzdCQyxhQUFXLEVBQUcsQ0E5cUNlO0FBK3FDN0JDLE9BQUssRUFBRyxDQS9xQ3FCO0FBZ3JDN0JDLE9BQUssRUFBRyxDQWhyQ3FCO0FBaXJDN0JDLE9BQUssRUFBRyxDQWpyQ3FCO0FBa3JDN0JDLE1BQUksRUFBRyxDQWxyQ3NCO0FBbXJDN0JDLE9BQUssRUFBRyxDQW5yQ3FCO0FBb3JDN0JDLFVBQVEsRUFBRyxDQXByQ2tCO0FBcXJDN0JDLE9BQUssRUFBRyxDQXJyQ3FCO0FBc3JDN0JDLFNBQU8sRUFBRyxDQXRyQ21CO0FBdXJDN0JDLFFBQU0sRUFBRyxDQXZyQ29CO0FBd3JDN0JDLE9BQUssRUFBRyxDQXhyQ3FCO0FBeXJDN0JDLE1BQUksRUFBRyxDQXpyQ3NCO0FBMHJDN0JDLFNBQU8sRUFBRyxDQTFyQ21CO0FBMnJDN0JDLFFBQU0sRUFBRyxDQTNyQ29CO0FBNHJDN0JDLFdBQVMsRUFBRyxDQTVyQ2lCO0FBNnJDN0JDLE9BQUssRUFBRyxDQTdyQ3FCO0FBOHJDN0JDLE9BQUssRUFBRyxDQTlyQ3FCO0FBK3JDN0JDLE9BQUssRUFBRyxDQS9yQ3FCO0FBZ3NDN0JDLE9BQUssRUFBRyxDQWhzQ3FCO0FBaXNDN0JDLFdBQVMsRUFBRyxDQWpzQ2lCO0FBa3NDN0JDLFFBQU0sRUFBRyxDQWxzQ29CO0FBbXNDN0JDLEtBQUcsRUFBRyxDQW5zQ3VCO0FBb3NDN0JDLEtBQUcsRUFBRyxDQXBzQ3VCO0FBcXNDN0JDLE9BQUssRUFBRyxDQXJzQ3FCO0FBc3NDN0JDLFNBQU8sRUFBRyxDQXRzQ21CO0FBdXNDN0JDLE1BQUksRUFBRyxDQXZzQ3NCO0FBd3NDN0JDLE1BQUksRUFBRyxDQXhzQ3NCO0FBeXNDN0JDLE1BQUksRUFBRyxDQXpzQ3NCO0FBMHNDN0JDLE1BQUksRUFBRyxDQTFzQ3NCO0FBMnNDN0JDLFNBQU8sRUFBRyxDQTNzQ21CO0FBNHNDN0JDLFFBQU0sRUFBRyxDQTVzQ29CO0FBNnNDN0JDLE1BQUksRUFBRyxDQTdzQ3NCO0FBOHNDN0JDLFFBQU0sRUFBRyxDQTlzQ29CO0FBK3NDN0JDLE9BQUssRUFBRyxDQS9zQ3FCO0FBZ3RDN0JDLE1BQUksRUFBRyxDQWh0Q3NCO0FBaXRDN0JDLFFBQU0sRUFBRyxDQWp0Q29CO0FBa3RDN0JDLEtBQUcsRUFBRyxDQWx0Q3VCO0FBbXRDN0JDLE1BQUksRUFBRyxDQW50Q3NCO0FBb3RDN0JDLE1BQUksRUFBRyxDQXB0Q3NCO0FBcXRDN0JDLElBQUUsRUFBRyxDQXJ0Q3dCO0FBc3RDN0JDLE1BQUksRUFBRyxDQXR0Q3NCO0FBdXRDN0JDLFVBQVEsRUFBRyxDQXZ0Q2tCO0FBd3RDN0JDLGNBQVksRUFBRyxDQXh0Q2M7QUF5dEM3QkMsUUFBTSxFQUFHLENBenRDb0I7QUEwdEM3QkMsU0FBTyxFQUFHLENBMXRDbUI7QUEydEM3QkMsTUFBSSxFQUFHLENBM3RDc0I7QUE0dEM3QkMsU0FBTyxFQUFHLENBNXRDbUI7QUE2dEM3QkMsT0FBSyxFQUFHLENBN3RDcUI7QUE4dEM3QkMsTUFBSSxFQUFHLENBOXRDc0I7QUErdEM3QkMsUUFBTSxFQUFHLENBL3RDb0I7QUFndUM3QkMsU0FBTyxFQUFHLENBaHVDbUI7QUFpdUM3QkMsT0FBSyxFQUFHLENBanVDcUI7QUFrdUM3QkMsTUFBSSxFQUFHLENBbHVDc0I7QUFtdUM3QkMsUUFBTSxFQUFHLENBbnVDb0I7QUFvdUM3QkMsWUFBVSxFQUFHLENBcHVDZ0I7QUFxdUM3QkMsTUFBSSxFQUFHLENBcnVDc0I7QUFzdUM3QkMsT0FBSyxFQUFHLENBdHVDcUI7QUF1dUM3QkMsTUFBSSxFQUFHLENBdnVDc0I7QUF3dUM3QkMsU0FBTyxFQUFHLENBeHVDbUI7QUF5dUM3QkMsS0FBRyxFQUFHLENBenVDdUI7QUEwdUM3QkMsTUFBSSxFQUFHLENBMXVDc0I7QUEydUM3QkMsVUFBUSxFQUFHLENBM3VDa0I7QUE0dUM3QkMsTUFBSSxFQUFHLENBNXVDc0I7QUE2dUM3QkMsU0FBTyxFQUFHLENBN3VDbUI7QUE4dUM3QkMsS0FBRyxFQUFHLENBOXVDdUI7QUErdUM3QkMsSUFBRSxFQUFHLENBL3VDd0I7QUFndkM3QkMsTUFBSSxFQUFHLENBaHZDc0I7QUFpdkM3QkMsTUFBSSxFQUFHLENBanZDc0I7QUFrdkM3QkMsV0FBUyxFQUFHLENBbHZDaUI7QUFtdkM3QkMsUUFBTSxFQUFHLENBbnZDb0I7QUFvdkM3QkMsU0FBTyxFQUFHLENBcHZDbUI7QUFxdkM3QkMsTUFBSSxFQUFHLENBcnZDc0I7QUFzdkM3QkMsS0FBRyxFQUFHLENBdHZDdUI7QUF1dkM3QkMsU0FBTyxFQUFHLENBdnZDbUI7QUF3dkM3QkMsS0FBRyxFQUFHLENBeHZDdUI7QUF5dkM3QkMsTUFBSSxFQUFHLENBenZDc0I7QUEwdkM3QkMsS0FBRyxFQUFHLENBMXZDdUI7QUEydkM3QkMsV0FBUyxFQUFHLENBM3ZDaUI7QUE0dkM3QkMsVUFBUSxFQUFHLENBNXZDa0I7QUE2dkM3QkMsWUFBVSxFQUFHLENBN3ZDZ0I7QUE4dkM3QkMsU0FBTyxFQUFHLENBOXZDbUI7QUErdkM3QkMsS0FBRyxFQUFHLENBL3ZDdUI7QUFnd0M3QkMsTUFBSSxFQUFHLENBaHdDc0I7QUFpd0M3QkMsTUFBSSxFQUFHLENBandDc0I7QUFrd0M3QkMsU0FBTyxFQUFHLENBbHdDbUI7QUFtd0M3QkMsTUFBSSxFQUFHLENBbndDc0I7QUFvd0M3QkMsTUFBSSxFQUFHLENBcHdDc0I7QUFxd0M3QkMsVUFBUSxFQUFHLENBcndDa0I7QUFzd0M3QkMsUUFBTSxFQUFHLENBdHdDb0I7QUF1d0M3QkMsT0FBSyxFQUFHLENBdndDcUI7QUF3d0M3QkMsT0FBSyxFQUFHLENBeHdDcUI7QUF5d0M3QkMsTUFBSSxFQUFHLENBendDc0I7QUEwd0M3QkMsU0FBTyxFQUFHLENBMXdDbUI7QUEyd0M3QkMsUUFBTSxFQUFHLENBM3dDb0I7QUE0d0M3QkMsT0FBSyxFQUFHLENBNXdDcUI7QUE2d0M3QkMsVUFBUSxFQUFHLENBN3dDa0I7QUE4d0M3QkMsTUFBSSxFQUFHLENBOXdDc0I7QUErd0M3QkMsS0FBRyxFQUFHLENBL3dDdUI7QUFneEM3QkMsT0FBSyxFQUFHLENBaHhDcUI7QUFpeEM3QkMsTUFBSSxFQUFHLENBanhDc0I7QUFreEM3QkMsT0FBSyxFQUFHLENBbHhDcUI7QUFteEM3QkMsV0FBUyxFQUFHLENBbnhDaUI7QUFveEM3QkMsU0FBTyxFQUFHLENBcHhDbUI7QUFxeEM3QkMsS0FBRyxFQUFHLENBcnhDdUI7QUFzeEM3QkMsU0FBTyxFQUFHLENBdHhDbUI7QUF1eEM3QkMsTUFBSSxFQUFHLENBdnhDc0I7QUF3eEM3QkMsT0FBSyxFQUFHLENBeHhDcUI7QUF5eEM3QkMsT0FBSyxFQUFHLENBenhDcUI7QUEweEM3QkMsU0FBTyxFQUFHLENBMXhDbUI7QUEyeEM3QkMsUUFBTSxFQUFHLENBM3hDb0I7QUE0eEM3QkMsUUFBTSxFQUFHLENBNXhDb0I7QUE2eEM3QkMsU0FBTyxFQUFHLENBN3hDbUI7QUE4eEM3QkMsTUFBSSxFQUFHLENBOXhDc0I7QUEreEM3QkMsU0FBTyxFQUFHLENBL3hDbUI7QUFneUM3QkMsWUFBVSxFQUFHLENBaHlDZ0I7QUFpeUM3QkMsR0FBQyxFQUFHLENBanlDeUI7QUFreUM3QkMsS0FBRyxFQUFHLENBbHlDdUI7QUFteUM3QkMsTUFBSSxFQUFHLENBbnlDc0I7QUFveUM3QkMsT0FBSyxFQUFHLENBcHlDcUI7QUFxeUM3QkMsZ0JBQWMsRUFBRyxDQXJ5Q1k7QUFzeUM3QkMsVUFBUSxFQUFHLENBdHlDa0I7QUF1eUM3QkMsVUFBUSxFQUFHLENBdnlDa0I7QUF3eUM3QkMsSUFBRSxFQUFHLENBeHlDd0I7QUF5eUM3QkMsSUFBRSxFQUFHLENBenlDd0I7QUEweUM3QkMsUUFBTSxFQUFHLENBMXlDb0I7QUEyeUM3QkMsS0FBRyxFQUFHLENBM3lDdUI7QUE0eUM3QkMsU0FBTyxFQUFHLENBNXlDbUI7QUE2eUM3QkMsU0FBTyxFQUFHLENBN3lDbUI7QUE4eUM3QkMsWUFBVSxFQUFHLENBOXlDZ0I7QUEreUM3QkMsT0FBSyxFQUFHLENBL3lDcUI7QUFnekM3QkMsYUFBVyxFQUFHLENBaHpDZTtBQWl6QzdCQyxTQUFPLEVBQUcsQ0FqekNtQjtBQWt6QzdCQyxXQUFTLEVBQUcsQ0FsekNpQjtBQW16QzdCQyxhQUFXLEVBQUcsQ0FuekNlO0FBb3pDN0JDLFdBQVMsRUFBRyxDQXB6Q2lCO0FBcXpDN0JDLGFBQVcsRUFBRyxDQXJ6Q2U7QUFzekM3QkMsUUFBTSxFQUFHLENBdHpDb0I7QUF1ekM3QkMsV0FBUyxFQUFHLENBdnpDaUI7QUF3ekM3QkMsYUFBVyxFQUFHLENBeHpDZTtBQXl6QzdCQyxPQUFLLEVBQUcsQ0F6ekNxQjtBQTB6QzdCQyxZQUFVLEVBQUcsQ0ExekNnQjtBQTJ6QzdCQyxXQUFTLEVBQUcsQ0EzekNpQjtBQTR6QzdCQyxRQUFNLEVBQUcsQ0E1ekNvQjtBQTZ6QzdCQyxZQUFVLEVBQUcsQ0E3ekNnQjtBQTh6QzdCQyxTQUFPLEVBQUcsQ0E5ekNtQjtBQSt6QzdCQyxZQUFVLEVBQUcsQ0EvekNnQjtBQWcwQzdCQyxZQUFVLEVBQUcsQ0FoMENnQjtBQWkwQzdCQyxTQUFPLEVBQUcsQ0FqMENtQjtBQWswQzdCQyxhQUFXLEVBQUcsQ0FsMENlO0FBbTBDN0JDLElBQUUsRUFBRyxDQW4wQ3dCO0FBbzBDN0JDLFdBQVMsRUFBRyxDQXAwQ2lCO0FBcTBDN0JDLFVBQVEsRUFBRyxDQXIwQ2tCO0FBczBDN0JDLFNBQU8sRUFBRyxDQXQwQ21CO0FBdTBDN0JDLFdBQVMsRUFBRyxDQXYwQ2lCO0FBdzBDN0JDLFFBQU0sRUFBRyxDQXgwQ29CO0FBeTBDN0JDLGFBQVcsRUFBRyxDQXowQ2U7QUEwMEM3QkMsVUFBUSxFQUFHLENBMTBDa0I7QUEyMEM3QkMsV0FBUyxFQUFHLENBMzBDaUI7QUE0MEM3QkMsWUFBVSxFQUFHLENBNTBDZ0I7QUE2MEM3QkMsY0FBWSxFQUFHLENBNzBDYztBQTgwQzdCQyxZQUFVLEVBQUcsQ0E5MENnQjtBQSswQzdCQyxRQUFNLEVBQUcsQ0EvMENvQjtBQWcxQzdCQyxjQUFZLEVBQUcsQ0FoMUNjO0FBaTFDN0JDLGFBQVcsRUFBRyxDQWoxQ2U7QUFrMUM3QkMsT0FBSyxFQUFHLENBbDFDcUI7QUFtMUM3QkMsUUFBTSxFQUFHLENBbjFDb0I7QUFvMUM3QkMsVUFBUSxFQUFHLENBcDFDa0I7QUFxMUM3QkMsWUFBVSxFQUFHLENBcjFDZ0I7QUFzMUM3QkMsWUFBVSxFQUFHLENBdDFDZ0I7QUF1MUM3QkMsWUFBVSxFQUFHLENBdjFDZ0I7QUF3MUM3QkMsVUFBUSxFQUFHLENBeDFDa0I7QUF5MUM3QkMsUUFBTSxFQUFHLENBejFDb0I7QUEwMUM3QkMsV0FBUyxFQUFHLENBMTFDaUI7QUEyMUM3QkMsV0FBUyxFQUFHLENBMzFDaUI7QUE0MUM3QkMsV0FBUyxFQUFHLENBNTFDaUI7QUE2MUM3QkMsUUFBTSxFQUFHLENBNzFDb0I7QUE4MUM3QkMsYUFBVyxFQUFHLENBOTFDZTtBQSsxQzdCQyxZQUFVLEVBQUcsQ0EvMUNnQjtBQWcyQzdCQyxTQUFPLEVBQUcsQ0FoMkNtQjtBQWkyQzdCQyxXQUFTLEVBQUcsQ0FqMkNpQjtBQWsyQzdCQyxZQUFVLEVBQUcsQ0FsMkNnQjtBQW0yQzdCQyxRQUFNLEVBQUcsQ0FuMkNvQjtBQW8yQzdCQyxPQUFLLEVBQUcsQ0FwMkNxQjtBQXEyQzdCQyxVQUFRLEVBQUcsQ0FyMkNrQjtBQXMyQzdCQyxTQUFPLEVBQUcsQ0F0MkNtQjtBQXUyQzdCQyxRQUFNLEVBQUcsQ0F2MkNvQjtBQXcyQzdCQyxTQUFPLEVBQUcsQ0F4MkNtQjtBQXkyQzdCQyxRQUFNLEVBQUcsQ0F6MkNvQjtBQTAyQzdCQyxTQUFPLEVBQUcsQ0ExMkNtQjtBQTIyQzdCQyxTQUFPLEVBQUcsQ0EzMkNtQjtBQTQyQzdCQyxVQUFRLEVBQUcsQ0E1MkNrQjtBQTYyQzdCQyxTQUFPLEVBQUcsQ0E3MkNtQjtBQTgyQzdCQyxhQUFXLEVBQUcsQ0E5MkNlO0FBKzJDN0JDLGVBQWEsRUFBRyxDQS8yQ2E7QUFnM0M3QkMsYUFBVyxFQUFHLENBaDNDZTtBQWkzQzdCQyxZQUFVLEVBQUcsQ0FqM0NnQjtBQWszQzdCQyxZQUFVLEVBQUcsQ0FsM0NnQjtBQW0zQzdCQyxXQUFTLEVBQUcsQ0FuM0NpQjtBQW8zQzdCQyxjQUFZLEVBQUcsQ0FwM0NjO0FBcTNDN0JDLGNBQVksRUFBRyxDQXIzQ2M7QUFzM0M3QkMsUUFBTSxFQUFHLENBdDNDb0I7QUF1M0M3QkMsU0FBTyxFQUFHLENBdjNDbUI7QUF3M0M3QkMsV0FBUyxFQUFHLENBeDNDaUI7QUF5M0M3QkMsV0FBUyxFQUFHLENBejNDaUI7QUEwM0M3QkMsYUFBVyxFQUFHLENBMTNDZTtBQTIzQzdCQyxVQUFRLEVBQUcsQ0EzM0NrQjtBQTQzQzdCQyxZQUFVLEVBQUcsQ0E1M0NnQjtBQTYzQzdCQyxhQUFXLEVBQUcsQ0E3M0NlO0FBODNDN0JDLFVBQVEsRUFBRyxDQTkzQ2tCO0FBKzNDN0JDLGVBQWEsRUFBRyxDQS8zQ2E7QUFnNEM3QkMsVUFBUSxFQUFHLENBaDRDa0I7QUFpNEM3QkMsV0FBUyxFQUFHLENBajRDaUI7QUFrNEM3QkMsZ0JBQWMsRUFBRyxDQWw0Q1k7QUFtNEM3QkMsY0FBWSxFQUFHLENBbjRDYztBQW80QzdCQyxXQUFTLEVBQUcsQ0FwNENpQjtBQXE0QzdCQyxNQUFJLEVBQUcsQ0FyNENzQjtBQXM0QzdCQyxXQUFTLEVBQUcsQ0F0NENpQjtBQXU0QzdCQyxjQUFZLEVBQUcsQ0F2NENjO0FBdzRDN0JDLFVBQVEsRUFBRyxDQXg0Q2tCO0FBeTRDN0JDLFFBQU0sRUFBRyxDQXo0Q29CO0FBMDRDN0JDLGFBQVcsRUFBRyxDQTE0Q2U7QUEyNEM3QkMsZUFBYSxFQUFHLENBMzRDYTtBQTQ0QzdCQyxjQUFZLEVBQUcsQ0E1NENjO0FBNjRDN0JDLFlBQVUsRUFBRyxDQTc0Q2dCO0FBODRDN0JDLFVBQVEsRUFBRyxDQTk0Q2tCO0FBKzRDN0JDLFFBQU0sRUFBRyxDQS80Q29CO0FBZzVDN0JDLFNBQU8sRUFBRyxDQWg1Q21CO0FBaTVDN0JDLFVBQVEsRUFBRyxDQWo1Q2tCO0FBazVDN0JDLGFBQVcsRUFBRyxDQWw1Q2U7QUFtNUM3QkMsT0FBSyxFQUFHLENBbjVDcUI7QUFvNUM3QkMsT0FBSyxFQUFHLENBcDVDcUI7QUFxNUM3QkMsTUFBSSxFQUFHLENBcjVDc0I7QUFzNUM3QkMsU0FBTyxFQUFHLENBdDVDbUI7QUF1NUM3QkMsUUFBTSxFQUFHLENBdjVDb0I7QUF3NUM3QkMsU0FBTyxFQUFHLENBeDVDbUI7QUF5NUM3QkMsT0FBSyxFQUFHLENBejVDcUI7QUEwNUM3QkMsSUFBRSxFQUFHLENBMTVDd0I7QUEyNUM3QkMsU0FBTyxFQUFHLENBMzVDbUI7QUE0NUM3QkMsTUFBSSxFQUFHLENBNTVDc0I7QUE2NUM3QkMsS0FBRyxFQUFHLENBNzVDdUI7QUE4NUM3QkMsUUFBTSxFQUFHLENBOTVDb0I7QUErNUM3QkMsUUFBTSxFQUFHLENBLzVDb0I7QUFnNkM3QkMsTUFBSSxFQUFHLENBaDZDc0I7QUFpNkM3QkMsVUFBUSxFQUFHLENBajZDa0I7QUFrNkM3QkMsS0FBRyxFQUFHLENBbDZDdUI7QUFtNkM3QkMsS0FBRyxFQUFHLENBbjZDdUI7QUFvNkM3QkMsUUFBTSxFQUFHLENBcDZDb0I7QUFxNkM3QkMsS0FBRyxFQUFHLENBcjZDdUI7QUFzNkM3QkMsTUFBSSxFQUFHLENBdDZDc0I7QUF1NkM3QkMsT0FBSyxFQUFHLENBdjZDcUI7QUF3NkM3QkMsTUFBSSxFQUFHLENBeDZDc0I7QUF5NkM3QkMsU0FBTyxFQUFHLENBejZDbUI7QUEwNkM3QkMsWUFBVSxFQUFHLENBMTZDZ0I7QUEyNkM3QkMsU0FBTyxFQUFHLENBMzZDbUI7QUE0NkM3QkMsS0FBRyxFQUFHLENBNTZDdUI7QUE2NkM3QkMsT0FBSyxFQUFHLENBNzZDcUI7QUE4NkM3QkMsVUFBUSxFQUFHLENBOTZDa0I7QUErNkM3QkMsT0FBSyxFQUFHLENBLzZDcUI7QUFnN0M3QkMsTUFBSSxFQUFHLENBaDdDc0I7QUFpN0M3QkMsUUFBTSxFQUFHLENBajdDb0I7QUFrN0M3QkMsTUFBSSxFQUFHLENBbDdDc0I7QUFtN0M3QkMsTUFBSSxFQUFHLENBbjdDc0I7QUFvN0M3QkMsU0FBTyxFQUFHLENBcDdDbUI7QUFxN0M3QkMsU0FBTyxFQUFHLENBcjdDbUI7QUFzN0M3QkMsTUFBSSxFQUFHLENBdDdDc0I7QUF1N0M3QkMsS0FBRyxFQUFHLENBdjdDdUI7QUF3N0M3QkMsTUFBSSxFQUFHLENBeDdDc0I7QUF5N0M3QkMsS0FBRyxFQUFHLENBejdDdUI7QUEwN0M3QkMsTUFBSSxFQUFHLENBMTdDc0I7QUEyN0M3QkMsUUFBTSxFQUFHLENBMzdDb0I7QUE0N0M3QkMsU0FBTyxFQUFHLENBNTdDbUI7QUE2N0M3QkMsTUFBSSxFQUFHLENBNzdDc0I7QUE4N0M3QkMsTUFBSSxFQUFHLENBOTdDc0I7QUErN0M3QkMsTUFBSSxFQUFHLENBLzdDc0I7QUFnOEM3QkMsU0FBTyxFQUFHLENBaDhDbUI7QUFpOEM3QkMsTUFBSSxFQUFHLENBajhDc0I7QUFrOEM3QkMsT0FBSyxFQUFHLENBbDhDcUI7QUFtOEM3QkMsT0FBSyxFQUFHLENBbjhDcUI7QUFvOEM3QkMsTUFBSSxFQUFHLENBcDhDc0I7QUFxOEM3QkMsV0FBUyxFQUFHLENBcjhDaUI7QUFzOEM3QkMsS0FBRyxFQUFHLENBdDhDdUI7QUF1OEM3QkMsT0FBSyxFQUFHLENBdjhDcUI7QUF3OEM3QkMsT0FBSyxFQUFHLENBeDhDcUI7QUF5OEM3QkMsWUFBVSxFQUFHLENBejhDZ0I7QUEwOEM3QkMsTUFBSSxFQUFHLENBMThDc0I7QUEyOEM3QkMsTUFBSSxFQUFHLENBMzhDc0I7QUE0OEM3QkMsTUFBSSxFQUFHLENBNThDc0I7QUE2OEM3QkMsTUFBSSxFQUFHLENBNzhDc0I7QUE4OEM3QkMsV0FBUyxFQUFHLENBOThDaUI7QUErOEM3QkMsVUFBUSxFQUFHLENBLzhDa0I7QUFnOUM3QkMsS0FBRyxFQUFHLENBaDlDdUI7QUFpOUM3QkMsT0FBSyxFQUFHLENBajlDcUI7QUFrOUM3QkMsU0FBTyxFQUFHLENBbDlDbUI7QUFtOUM3QkMsTUFBSSxFQUFHLENBbjlDc0I7QUFvOUM3QkMsTUFBSSxFQUFHLENBcDlDc0I7QUFxOUM3QkMsT0FBSyxFQUFHLENBcjlDcUI7QUFzOUM3QkMsT0FBSyxFQUFHLENBdDlDcUI7QUF1OUM3QkMsUUFBTSxFQUFHLENBdjlDb0I7QUF3OUM3QkMsT0FBSyxFQUFHLENBeDlDcUI7QUF5OUM3QkMsUUFBTSxFQUFHLENBejlDb0I7QUEwOUM3QkMsS0FBRyxFQUFHLENBMTlDdUI7QUEyOUM3QkMsTUFBSSxFQUFHLENBMzlDc0I7QUE0OUM3QkMsU0FBTyxFQUFHLENBNTlDbUI7QUE2OUM3QkMsUUFBTSxFQUFHLENBNzlDb0I7QUE4OUM3QkMsS0FBRyxFQUFHLENBOTlDdUI7QUErOUM3QkMsT0FBSyxFQUFHLENBLzlDcUI7QUFnK0M3QkMsTUFBSSxFQUFHLENBaCtDc0I7QUFpK0M3QkMsUUFBTSxFQUFHLENBaitDb0I7QUFrK0M3QkMsWUFBVSxFQUFHLENBbCtDZ0I7QUFtK0M3QkMsU0FBTyxFQUFHLENBbitDbUI7QUFvK0M3QkMsTUFBSSxFQUFHLENBcCtDc0I7QUFxK0M3QkMsUUFBTSxFQUFHLENBcitDb0I7QUFzK0M3QkMsTUFBSSxFQUFHLENBdCtDc0I7QUF1K0M3QkMsT0FBSyxFQUFHLENBditDcUI7QUF3K0M3QkMsVUFBUSxFQUFHLENBeCtDa0I7QUF5K0M3QkMsT0FBSyxFQUFHLENBeitDcUI7QUEwK0M3QkMsU0FBTyxFQUFHLENBMStDbUI7QUEyK0M3QkMsT0FBSyxFQUFHLENBMytDcUI7QUE0K0M3QkMsTUFBSSxFQUFHLENBNStDc0I7QUE2K0M3QkMsS0FBRyxFQUFHLENBNytDdUI7QUE4K0M3QkMsUUFBTSxFQUFHLENBOStDb0I7QUErK0M3QkMsT0FBSyxFQUFHLENBLytDcUI7QUFnL0M3QkMsUUFBTSxFQUFHLENBaC9Db0I7QUFpL0M3QkMsYUFBVyxFQUFHLENBai9DZTtBQWsvQzdCQyxZQUFVLEVBQUcsQ0FsL0NnQjtBQW0vQzdCQyxPQUFLLEVBQUcsQ0FuL0NxQjtBQW8vQzdCQyxRQUFNLEVBQUcsQ0FwL0NvQjtBQXEvQzdCQyxNQUFJLEVBQUcsQ0FyL0NzQjtBQXMvQzdCQyxRQUFNLEVBQUcsQ0F0L0NvQjtBQXUvQzdCQyxLQUFHLEVBQUcsQ0F2L0N1QjtBQXcvQzdCQyxRQUFNLEVBQUcsQ0F4L0NvQjtBQXkvQzdCQyxPQUFLLEVBQUcsQ0F6L0NxQjtBQTAvQzdCQyxTQUFPLEVBQUcsQ0ExL0NtQjtBQTIvQzdCQyxTQUFPLEVBQUcsQ0EzL0NtQjtBQTQvQzdCQyxTQUFPLEVBQUcsQ0E1L0NtQjtBQTYvQzdCQyxLQUFHLEVBQUcsQ0E3L0N1QjtBQTgvQzdCQyxNQUFJLEVBQUcsQ0E5L0NzQjtBQSsvQzdCQyxXQUFTLEVBQUcsQ0EvL0NpQjtBQWdnRDdCQyxVQUFRLEVBQUcsQ0FoZ0RrQjtBQWlnRDdCQyxNQUFJLEVBQUcsQ0FqZ0RzQjtBQWtnRDdCQyxPQUFLLEVBQUcsQ0FsZ0RxQjtBQW1nRDdCQyxNQUFJLEVBQUcsQ0FuZ0RzQjtBQW9nRDdCQyxRQUFNLEVBQUcsQ0FwZ0RvQjtBQXFnRDdCQyxPQUFLLEVBQUcsQ0FyZ0RxQjtBQXNnRDdCQyxZQUFVLEVBQUcsQ0F0Z0RnQjtBQXVnRDdCQyxTQUFPLEVBQUcsQ0F2Z0RtQjtBQXdnRDdCQyxNQUFJLEVBQUcsQ0F4Z0RzQjtBQXlnRDdCQyxNQUFJLEVBQUcsQ0F6Z0RzQjtBQTBnRDdCQyxLQUFHLEVBQUcsQ0ExZ0R1QjtBQTJnRDdCQyxNQUFJLEVBQUcsQ0EzZ0RzQjtBQTRnRDdCQyxRQUFNLEVBQUcsQ0E1Z0RvQjtBQTZnRDdCQyxXQUFTLEVBQUcsQ0E3Z0RpQjtBQThnRDdCQyxVQUFRLEVBQUcsQ0E5Z0RrQjtBQStnRDdCQyxZQUFVLEVBQUcsQ0EvZ0RnQjtBQWdoRDdCQyxRQUFNLEVBQUcsQ0FoaERvQjtBQWloRDdCQyxNQUFJLEVBQUcsQ0FqaERzQjtBQWtoRDdCQyxRQUFNLEVBQUcsQ0FsaERvQjtBQW1oRDdCQyxNQUFJLEVBQUcsQ0FuaERzQjtBQW9oRDdCQyxNQUFJLEVBQUcsQ0FwaERzQjtBQXFoRDdCQyxPQUFLLEVBQUcsQ0FyaERxQjtBQXNoRDdCQyxRQUFNLEVBQUcsQ0F0aERvQjtBQXVoRDdCQyxVQUFRLEVBQUcsQ0F2aERrQjtBQXdoRDdCQyxNQUFJLEVBQUcsQ0F4aERzQjtBQXloRDdCQyxNQUFJLEVBQUcsQ0F6aERzQjtBQTBoRDdCLGVBQWMsQ0ExaERlO0FBMmhEN0JDLE1BQUksRUFBRyxDQTNoRHNCO0FBNGhEN0JDLE9BQUssRUFBRyxDQTVoRHFCO0FBNmhEN0JDLE1BQUksRUFBRyxDQTdoRHNCO0FBOGhEN0JDLE1BQUksRUFBRyxDQTloRHNCO0FBK2hEN0JDLE1BQUksRUFBRyxDQS9oRHNCO0FBZ2lEN0JDLEtBQUcsRUFBRyxDQWhpRHVCO0FBaWlEN0JDLE1BQUksRUFBRyxDQWppRHNCO0FBa2lEN0JDLE1BQUksRUFBRyxDQWxpRHNCO0FBbWlEN0JDLE1BQUksRUFBRyxDQW5pRHNCO0FBb2lEN0JDLFFBQU0sRUFBRyxDQXBpRG9CO0FBcWlEN0JDLE9BQUssRUFBRyxDQXJpRHFCO0FBc2lEN0JDLEtBQUcsRUFBRyxDQXRpRHVCO0FBdWlEN0JDLE9BQUssRUFBRyxDQXZpRHFCO0FBd2lEN0JDLE1BQUksRUFBRyxDQXhpRHNCO0FBeWlEN0JDLE9BQUssRUFBRyxDQXppRHFCO0FBMGlEN0JDLE9BQUssRUFBRyxDQTFpRHFCO0FBMmlEN0JDLE1BQUksRUFBRyxDQTNpRHNCO0FBNGlEN0JDLFNBQU8sRUFBRyxDQTVpRG1CO0FBNmlEN0JDLEtBQUcsRUFBRyxDQTdpRHVCO0FBOGlEN0JDLFVBQVEsRUFBRyxDQTlpRGtCO0FBK2lEN0JDLE1BQUksRUFBRyxDQS9pRHNCO0FBZ2pEN0JDLE1BQUksRUFBRyxDQWhqRHNCO0FBaWpEN0JDLFFBQU0sRUFBRyxDQWpqRG9CO0FBa2pEN0JDLFVBQVEsRUFBRyxDQWxqRGtCO0FBbWpEN0JDLGFBQVcsRUFBRyxDQW5qRGU7QUFvakQ3QkMsT0FBSyxFQUFHLENBcGpEcUI7QUFxakQ3QkMsVUFBUSxFQUFHLENBcmpEa0I7QUFzakQ3QkMsTUFBSSxFQUFHLENBdGpEc0I7QUF1akQ3QkMsT0FBSyxFQUFHLENBdmpEcUI7QUF3akQ3QkMsUUFBTSxFQUFHLENBeGpEb0I7QUF5akQ3QkMsTUFBSSxFQUFHLENBempEc0I7QUEwakQ3QkMsTUFBSSxFQUFHLENBMWpEc0I7QUEyakQ3QkMsS0FBRyxFQUFHLENBM2pEdUI7QUE0akQ3QkMsUUFBTSxFQUFHLENBNWpEb0I7QUE2akQ3QkMsWUFBVSxFQUFHLENBN2pEZ0I7QUE4akQ3QkMsU0FBTyxFQUFHLENBOWpEbUI7QUErakQ3QkMsUUFBTSxFQUFHLENBL2pEb0I7QUFna0Q3QkMsY0FBWSxFQUFHLENBaGtEYztBQWlrRDdCQyxlQUFhLEVBQUcsQ0Fqa0RhO0FBa2tEN0JDLE1BQUksRUFBRyxDQWxrRHNCO0FBbWtEN0JDLEtBQUcsRUFBRyxDQW5rRHVCO0FBb2tEN0JDLFFBQU0sRUFBRyxDQXBrRG9CO0FBcWtEN0JDLE1BQUksRUFBRyxDQXJrRHNCO0FBc2tEN0JDLFFBQU0sRUFBRyxDQXRrRG9CO0FBdWtEN0JDLFdBQVMsRUFBRyxDQXZrRGlCO0FBd2tEN0JDLFVBQVEsRUFBRyxDQXhrRGtCO0FBeWtEN0JDLFNBQU8sRUFBRyxDQXprRG1CO0FBMGtEN0JDLE9BQUssRUFBRyxDQTFrRHFCO0FBMmtEN0JDLE1BQUksRUFBRyxDQTNrRHNCO0FBNGtEN0JDLE1BQUksRUFBRyxDQTVrRHNCO0FBNmtEN0JDLFNBQU8sRUFBRyxDQTdrRG1CO0FBOGtEN0JDLFFBQU0sRUFBRyxDQTlrRG9CO0FBK2tEN0JDLE9BQUssRUFBRyxDQS9rRHFCO0FBZ2xEN0JDLFVBQVEsRUFBRyxDQWhsRGtCO0FBaWxEN0JDLE1BQUksRUFBRyxDQWpsRHNCO0FBa2xEN0JDLFFBQU0sRUFBRyxDQWxsRG9CO0FBbWxEN0JDLEtBQUcsRUFBRyxDQW5sRHVCO0FBb2xEN0JDLE9BQUssRUFBRyxDQXBsRHFCO0FBcWxEN0JDLE9BQUssRUFBRyxDQXJsRHFCO0FBc2xEN0JDLElBQUUsRUFBRyxDQXRsRHdCO0FBdWxEN0JDLE1BQUksRUFBRyxDQXZsRHNCO0FBd2xEN0JDLE1BQUksRUFBRyxDQXhsRHNCO0FBeWxEN0JDLFNBQU8sRUFBRyxDQXpsRG1CO0FBMGxEN0JDLFdBQVMsRUFBRyxDQTFsRGlCO0FBMmxEN0JDLFNBQU8sRUFBRyxDQTNsRG1CO0FBNGxEN0JDLGFBQVcsRUFBRyxDQTVsRGU7QUE2bEQ3QkMsTUFBSSxFQUFHLENBN2xEc0I7QUE4bEQ3QkMsV0FBUyxFQUFHLENBOWxEaUI7QUErbEQ3QkMsT0FBSyxFQUFHLENBL2xEcUI7QUFnbUQ3QkMsU0FBTyxFQUFHLENBaG1EbUI7QUFpbUQ3QkMsWUFBVSxFQUFHLENBam1EZ0I7QUFrbUQ3QkMsVUFBUSxFQUFHLENBbG1Ea0I7QUFtbUQ3QkMsUUFBTSxFQUFHLENBbm1Eb0I7QUFvbUQ3QkMsTUFBSSxFQUFHLENBcG1Ec0I7QUFxbUQ3QkMsU0FBTyxFQUFHLENBcm1EbUI7QUFzbUQ3QkMsUUFBTSxFQUFHLENBdG1Eb0I7QUF1bUQ3QkMsWUFBVSxFQUFHLENBdm1EZ0I7QUF3bUQ3QkMsUUFBTSxFQUFHLENBeG1Eb0I7QUF5bUQ3QkMsUUFBTSxFQUFHLENBem1Eb0I7QUEwbUQ3QkMsU0FBTyxFQUFHLENBMW1EbUI7QUEybUQ3QkMsTUFBSSxFQUFHLENBM21Ec0I7QUE0bUQ3QkMsTUFBSSxFQUFHLENBNW1Ec0I7QUE2bUQ3QkMsUUFBTSxFQUFHLENBN21Eb0I7QUE4bUQ3QkMsTUFBSSxFQUFHLENBOW1Ec0I7QUErbUQ3QkMsU0FBTyxFQUFHLENBL21EbUI7QUFnbkQ3QkMsT0FBSyxFQUFHLENBaG5EcUI7QUFpbkQ3QkMsT0FBSyxFQUFHLENBam5EcUI7QUFrbkQ3QkMsUUFBTSxFQUFHLENBbG5Eb0I7QUFtbkQ3QkMsU0FBTyxFQUFHLENBbm5EbUI7QUFvbkQ3QkMsUUFBTSxFQUFHLENBcG5Eb0I7QUFxbkQ3QkMsT0FBSyxFQUFHLENBcm5EcUI7QUFzbkQ3QkMsVUFBUSxFQUFHLENBdG5Ea0I7QUF1bkQ3QkMsTUFBSSxFQUFHLENBdm5Ec0I7QUF3bkQ3QkMsU0FBTyxFQUFHLENBeG5EbUI7QUF5bkQ3QkMsTUFBSSxFQUFHLENBem5Ec0I7QUEwbkQ3QkMsTUFBSSxFQUFHLENBMW5Ec0I7QUEybkQ3QkMsVUFBUSxFQUFHLENBM25Ea0I7QUE0bkQ3QkMsT0FBSyxFQUFHLENBNW5EcUI7QUE2bkQ3QkMsVUFBUSxFQUFHLENBN25Ea0I7QUE4bkQ3QkMsUUFBTSxFQUFHLENBOW5Eb0I7QUErbkQ3QkMsU0FBTyxFQUFHLENBL25EbUI7QUFnb0Q3QkMsUUFBTSxFQUFHLENBaG9Eb0I7QUFpb0Q3QkMsTUFBSSxFQUFHLENBam9Ec0I7QUFrb0Q3QkMsU0FBTyxFQUFHLENBbG9EbUI7QUFtb0Q3QkMsU0FBTyxFQUFHLENBbm9EbUI7QUFvb0Q3QkMsU0FBTyxFQUFHLENBcG9EbUI7QUFxb0Q3QkMsS0FBRyxFQUFHLENBcm9EdUI7QUFzb0Q3QkMsU0FBTyxFQUFHLENBdG9EbUI7QUF1b0Q3QixZQUFXLENBdm9Ea0I7QUF3b0Q3QkMsTUFBSSxFQUFHLENBeG9Ec0I7QUF5b0Q3QkMsT0FBSyxFQUFHLENBem9EcUI7QUEwb0Q3QkMsVUFBUSxFQUFHLENBMW9Ea0I7QUEyb0Q3QkMsUUFBTSxFQUFHLENBM29Eb0I7QUE0b0Q3QkMsUUFBTSxFQUFHLENBNW9Eb0I7QUE2b0Q3QkMsS0FBRyxFQUFHLENBN29EdUI7QUE4b0Q3QkMsUUFBTSxFQUFHLENBOW9Eb0I7QUErb0Q3QkMsT0FBSyxFQUFHLENBL29EcUI7QUFncEQ3QkMsU0FBTyxFQUFHLENBaHBEbUI7QUFpcEQ3QkMsT0FBSyxFQUFHLENBanBEcUI7QUFrcEQ3QkMsTUFBSSxFQUFHLENBbHBEc0I7QUFtcEQ3QkMsTUFBSSxFQUFHLENBbnBEc0I7QUFvcEQ3QkMsT0FBSyxFQUFHLENBcHBEcUI7QUFxcEQ3QkMsTUFBSSxFQUFHLENBcnBEc0I7QUFzcEQ3QkMsVUFBUSxFQUFHLENBdHBEa0I7QUF1cEQ3QkMsU0FBTyxFQUFHLENBdnBEbUI7QUF3cEQ3QkMsVUFBUSxFQUFHLENBeHBEa0I7QUF5cEQ3QkMsTUFBSSxFQUFHLENBenBEc0I7QUEwcEQ3QkMsUUFBTSxFQUFHLENBMXBEb0I7QUEycEQ3QkMsUUFBTSxFQUFHLENBM3BEb0I7QUE0cEQ3QkMsUUFBTSxFQUFHLENBNXBEb0I7QUE2cEQ3QkMsWUFBVSxFQUFHLENBN3BEZ0I7QUE4cEQ3QkMsT0FBSyxFQUFHLENBOXBEcUI7QUErcEQ3QkMsT0FBSyxFQUFHLENBL3BEcUI7QUFncUQ3QkMsVUFBUSxFQUFHLENBaHFEa0I7QUFpcUQ3QkMsT0FBSyxFQUFHLENBanFEcUI7QUFrcUQ3QkMsT0FBSyxFQUFHLENBbHFEcUI7QUFtcUQ3QkMsTUFBSSxFQUFHLENBbnFEc0I7QUFvcUQ3QkMsVUFBUSxFQUFHLENBcHFEa0I7QUFxcUQ3QkMsT0FBSyxFQUFHLENBcnFEcUI7QUFzcUQ3QkMsSUFBRSxFQUFHLENBdHFEd0I7QUF1cUQ3QkMsS0FBRyxFQUFHLENBdnFEdUI7QUF3cUQ3QkMsSUFBRSxFQUFHLENBeHFEd0I7QUF5cUQ3QkMsTUFBSSxFQUFHLENBenFEc0I7QUEwcUQ3QkMsVUFBUSxFQUFHLENBMXFEa0I7QUEycUQ3QkMsUUFBTSxFQUFHLENBM3FEb0I7QUE0cUQ3QkMsUUFBTSxFQUFHLENBNXFEb0I7QUE2cUQ3QkMsUUFBTSxFQUFHLENBN3FEb0I7QUE4cUQ3QkMsT0FBSyxFQUFHLENBOXFEcUI7QUErcUQ3QkMsU0FBTyxFQUFHLENBL3FEbUI7QUFnckQ3QkMsVUFBUSxFQUFHLENBaHJEa0I7QUFpckQ3QkMsUUFBTSxFQUFHLENBanJEb0I7QUFrckQ3QkMsTUFBSSxFQUFHLENBbHJEc0I7QUFtckQ3QkMsUUFBTSxFQUFHLENBbnJEb0I7QUFvckQ3QkMsSUFBRSxFQUFHLENBcHJEd0I7QUFxckQ3QkMsUUFBTSxFQUFHLENBcnJEb0I7QUFzckQ3QkMsU0FBTyxFQUFHLENBdHJEbUI7QUF1ckQ3QkMsTUFBSSxFQUFHLENBdnJEc0I7QUF3ckQ3QkMsT0FBSyxFQUFHLENBeHJEcUI7QUF5ckQ3QkMsTUFBSSxFQUFHLENBenJEc0I7QUEwckQ3QkMsV0FBUyxFQUFHLENBMXJEaUI7QUEyckQ3QkMsUUFBTSxFQUFHLENBM3JEb0I7QUE0ckQ3QkMsUUFBTSxFQUFHLENBNXJEb0I7QUE2ckQ3QkMsVUFBUSxFQUFHLENBN3JEa0I7QUE4ckQ3QkMsUUFBTSxFQUFHLENBOXJEb0I7QUErckQ3QkMsU0FBTyxFQUFHLENBL3JEbUI7QUFnc0Q3QkMsV0FBUyxFQUFHLENBaHNEaUI7QUFpc0Q3QkMsUUFBTSxFQUFHLENBanNEb0I7QUFrc0Q3QkMsTUFBSSxFQUFHLENBbHNEc0I7QUFtc0Q3QkMsUUFBTSxFQUFHLENBbnNEb0I7QUFvc0Q3QkMsUUFBTSxFQUFHLENBcHNEb0I7QUFxc0Q3QkMsYUFBVyxFQUFHLENBcnNEZTtBQXNzRDdCQyxXQUFTLEVBQUcsQ0F0c0RpQjtBQXVzRDdCQyxNQUFJLEVBQUcsQ0F2c0RzQjtBQXdzRDdCQyxNQUFJLEVBQUcsQ0F4c0RzQjtBQXlzRDdCQyxVQUFRLEVBQUcsQ0F6c0RrQjtBQTBzRDdCQyxXQUFTLEVBQUcsQ0Exc0RpQjtBQTJzRDdCQyxhQUFXLEVBQUcsQ0Ezc0RlO0FBNHNEN0JDLFVBQVEsRUFBRyxDQTVzRGtCO0FBNnNEN0JDLGNBQVksRUFBRyxDQTdzRGM7QUE4c0Q3QkMsU0FBTyxFQUFHLENBOXNEbUI7QUErc0Q3QkMsT0FBSyxFQUFHLENBL3NEcUI7QUFndEQ3QkMsU0FBTyxFQUFHLENBaHREbUI7QUFpdEQ3QkMsS0FBRyxFQUFHLENBanREdUI7QUFrdEQ3QkMsU0FBTyxFQUFHLENBbHREbUI7QUFtdEQ3QkMsT0FBSyxFQUFHLENBbnREcUI7QUFvdEQ3QkMsY0FBWSxFQUFHLENBcHREYztBQXF0RDdCQyxLQUFHLEVBQUcsQ0FydER1QjtBQXN0RDdCQyxPQUFLLEVBQUcsQ0F0dERxQjtBQXV0RDdCQyxNQUFJLEVBQUcsQ0F2dERzQjtBQXd0RDdCQyxXQUFTLEVBQUcsQ0F4dERpQjtBQXl0RDdCQyxNQUFJLEVBQUcsQ0F6dERzQjtBQTB0RDdCQyxNQUFJLEVBQUcsQ0ExdERzQjtBQTJ0RDdCQyxPQUFLLEVBQUcsQ0EzdERxQjtBQTR0RDdCQyxNQUFJLEVBQUcsQ0E1dERzQjtBQTZ0RDdCQyxJQUFFLEVBQUcsQ0E3dER3QjtBQTh0RDdCQyxRQUFNLEVBQUcsQ0E5dERvQjtBQSt0RDdCQyxLQUFHLEVBQUcsQ0EvdER1QjtBQWd1RDdCQyxPQUFLLEVBQUcsQ0FodURxQjtBQWl1RDdCQyxZQUFVLEVBQUcsQ0FqdURnQjtBQWt1RDdCQyxNQUFJLEVBQUcsQ0FsdURzQjtBQW11RDdCQyxhQUFXLEVBQUcsQ0FudURlO0FBb3VEN0JDLEtBQUcsRUFBRyxDQXB1RHVCO0FBcXVEN0JDLFFBQU0sRUFBRyxDQXJ1RG9CO0FBc3VEN0JDLFVBQVEsRUFBRyxDQXR1RGtCO0FBdXVEN0JDLE9BQUssRUFBRyxDQXZ1RHFCO0FBd3VEN0JDLFVBQVEsRUFBRyxDQXh1RGtCO0FBeXVEN0JDLE1BQUksRUFBRyxDQXp1RHNCO0FBMHVEN0JDLEtBQUcsRUFBRyxDQTF1RHVCO0FBMnVEN0JDLE1BQUksRUFBRyxDQTN1RHNCO0FBNHVEN0JDLFNBQU8sRUFBRyxDQTV1RG1CO0FBNnVEN0JDLFFBQU0sRUFBRyxDQTd1RG9CO0FBOHVEN0JDLFFBQU0sRUFBRyxDQTl1RG9CO0FBK3VEN0JDLE9BQUssRUFBRyxDQS91RHFCO0FBZ3ZEN0JDLEtBQUcsRUFBRyxDQWh2RHVCO0FBaXZEN0JDLFNBQU8sRUFBRyxDQWp2RG1CO0FBa3ZEN0IsU0FBUSxDQWx2RHFCO0FBbXZEN0JDLFNBQU8sRUFBRyxDQW52RG1CO0FBb3ZEN0JDLFFBQU0sRUFBRyxDQXB2RG9CO0FBcXZEN0JDLFVBQVEsRUFBRyxDQXJ2RGtCO0FBc3ZEN0JDLE9BQUssRUFBRyxDQXR2RHFCO0FBdXZEN0JDLEtBQUcsRUFBRyxDQXZ2RHVCO0FBd3ZEN0JDLFFBQU0sRUFBRyxDQXh2RG9CO0FBeXZEN0JDLFdBQVMsRUFBRyxDQXp2RGlCO0FBMHZEN0JDLFlBQVUsRUFBRyxDQTF2RGdCO0FBMnZEN0JDLGFBQVcsRUFBRyxDQTN2RGU7QUE0dkQ3QkMsU0FBTyxFQUFHLENBNXZEbUI7QUE2dkQ3QkMsVUFBUSxFQUFHLENBN3ZEa0I7QUE4dkQ3QkMsUUFBTSxFQUFHLENBOXZEb0I7QUErdkQ3QkMsU0FBTyxFQUFHLENBL3ZEbUI7QUFnd0Q3QkMsV0FBUyxFQUFHLENBaHdEaUI7QUFpd0Q3QkMsVUFBUSxFQUFHLENBandEa0I7QUFrd0Q3QkMsY0FBWSxFQUFHLENBbHdEYztBQW13RDdCQyxZQUFVLEVBQUcsQ0Fud0RnQjtBQW93RDdCQyxRQUFNLEVBQUcsQ0Fwd0RvQjtBQXF3RDdCQyxPQUFLLEVBQUcsQ0Fyd0RxQjtBQXN3RDdCQyxPQUFLLEVBQUcsQ0F0d0RxQjtBQXV3RDdCQyxLQUFHLEVBQUcsQ0F2d0R1QjtBQXd3RDdCQyxNQUFJLEVBQUcsQ0F4d0RzQjtBQXl3RDdCQyxJQUFFLEVBQUcsQ0F6d0R3QjtBQTB3RDdCQyxLQUFHLEVBQUcsQ0Exd0R1QjtBQTJ3RDdCQyxTQUFPLEVBQUcsQ0Ezd0RtQjtBQTR3RDdCQyxXQUFTLEVBQUcsQ0E1d0RpQjtBQTZ3RDdCQyxPQUFLLEVBQUcsQ0E3d0RxQjtBQTh3RDdCQyxRQUFNLEVBQUcsQ0E5d0RvQjtBQSt3RDdCQyxTQUFPLEVBQUcsQ0Evd0RtQjtBQWd4RDdCQyxVQUFRLEVBQUcsQ0FoeERrQjtBQWl4RDdCQyxPQUFLLEVBQUcsQ0FqeERxQjtBQWt4RDdCQyxJQUFFLEVBQUcsQ0FseER3QjtBQW14RDdCQyxLQUFHLEVBQUcsQ0FueER1QjtBQW94RDdCQyxJQUFFLEVBQUcsQ0FweER3QjtBQXF4RDdCQyxNQUFJLEVBQUcsQ0FyeERzQjtBQXN4RDdCQyxLQUFHLEVBQUcsQ0F0eER1QjtBQXV4RDdCQyxTQUFPLEVBQUcsQ0F2eERtQjtBQXd4RDdCQyxJQUFFLEVBQUcsQ0F4eER3QjtBQXl4RDdCQyxNQUFJLEVBQUcsQ0F6eERzQjtBQTB4RDdCQyxLQUFHLEVBQUcsQ0ExeER1QjtBQTJ4RDdCQyxTQUFPLEVBQUcsQ0EzeERtQjtBQTR4RDdCQyxPQUFLLEVBQUcsQ0E1eERxQjtBQTZ4RDdCQyxRQUFNLEVBQUcsQ0E3eERvQjtBQTh4RDdCQyxNQUFJLEVBQUcsQ0E5eERzQjtBQSt4RDdCQyxNQUFJLEVBQUcsQ0EveERzQjtBQWd5RDdCQyxNQUFJLEVBQUcsQ0FoeURzQjtBQWl5RDdCQyxTQUFPLEVBQUcsQ0FqeURtQjtBQWt5RDdCQyxTQUFPLEVBQUcsQ0FseURtQjtBQW15RDdCQyxXQUFTLEVBQUcsQ0FueURpQjtBQW95RDdCQyxXQUFTLEVBQUcsQ0FweURpQjtBQXF5RDdCQyxVQUFRLEVBQUcsQ0FyeURrQjtBQXN5RDdCQyxTQUFPLEVBQUcsQ0F0eURtQjtBQXV5RDdCQyxVQUFRLEVBQUcsQ0F2eURrQjtBQXd5RDdCQyxhQUFXLEVBQUcsQ0F4eURlO0FBeXlEN0JDLFFBQU0sRUFBRyxDQXp5RG9CO0FBMHlEN0JDLFVBQVEsRUFBRyxDQTF5RGtCO0FBMnlEN0JDLFlBQVUsRUFBRyxDQTN5RGdCO0FBNHlEN0JDLFFBQU0sRUFBRyxDQTV5RG9CO0FBNnlEN0JDLElBQUUsRUFBRyxDQTd5RHdCO0FBOHlEN0JDLFFBQU0sRUFBRyxDQTl5RG9CO0FBK3lEN0JDLE9BQUssRUFBRyxDQS95RHFCO0FBZ3pEN0JDLFVBQVEsRUFBRyxDQWh6RGtCO0FBaXpEN0JDLFNBQU8sRUFBRyxDQWp6RG1CO0FBa3pEN0JDLGNBQVksRUFBRyxDQWx6RGM7QUFtekQ3QkMsVUFBUSxFQUFHLENBbnpEa0I7QUFvekQ3QkMsYUFBVyxFQUFHLENBcHpEZTtBQXF6RDdCQyxRQUFNLEVBQUcsQ0FyekRvQjtBQXN6RDdCQyxVQUFRLEVBQUcsQ0F0ekRrQjtBQXV6RDdCQyxZQUFVLEVBQUcsQ0F2ekRnQjtBQXd6RDdCQyxPQUFLLEVBQUcsQ0F4ekRxQjtBQXl6RDdCQyxRQUFNLEVBQUcsQ0F6ekRvQjtBQTB6RDdCQyxXQUFTLEVBQUcsQ0ExekRpQjtBQTJ6RDdCQyxPQUFLLEVBQUcsQ0EzekRxQjtBQTR6RDdCQyxLQUFHLEVBQUcsQ0E1ekR1QjtBQTZ6RDdCQyxXQUFTLEVBQUcsQ0E3ekRpQjtBQTh6RDdCQyxLQUFHLEVBQUcsQ0E5ekR1QjtBQSt6RDdCQyxTQUFPLEVBQUcsQ0EvekRtQjtBQWcwRDdCQyxTQUFPLEVBQUcsQ0FoMERtQjtBQWkwRDdCQyxNQUFJLEVBQUcsQ0FqMERzQjtBQWswRDdCQyxNQUFJLEVBQUcsQ0FsMERzQjtBQW0wRDdCQyxTQUFPLEVBQUcsQ0FuMERtQjtBQW8wRDdCQyxVQUFRLEVBQUcsQ0FwMERrQjtBQXEwRDdCQyxVQUFRLEVBQUcsQ0FyMERrQjtBQXMwRDdCQyxLQUFHLEVBQUcsQ0F0MER1QjtBQXUwRDdCQyxLQUFHLEVBQUcsQ0F2MER1QjtBQXcwRDdCQyxPQUFLLEVBQUcsQ0F4MERxQjtBQXkwRDdCQyxNQUFJLEVBQUcsQ0F6MERzQjtBQTAwRDdCQyxNQUFJLEVBQUcsQ0ExMERzQjtBQTIwRDdCQyxTQUFPLEVBQUcsQ0EzMERtQjtBQTQwRDdCQyxNQUFJLEVBQUcsQ0E1MERzQjtBQTYwRDdCQyxNQUFJLEVBQUcsQ0E3MERzQjtBQTgwRDdCQyxTQUFPLEVBQUcsQ0E5MERtQjtBQSswRDdCQyxPQUFLLEVBQUcsQ0EvMERxQjtBQWcxRDdCQyxTQUFPLEVBQUcsQ0FoMURtQjtBQWkxRDdCQyxVQUFRLEVBQUcsQ0FqMURrQjtBQWsxRDdCQyxNQUFJLEVBQUcsQ0FsMURzQjtBQW0xRDdCQyxNQUFJLEVBQUcsQ0FuMURzQjtBQW8xRDdCQyxhQUFXLEVBQUcsQ0FwMURlO0FBcTFEN0JDLE1BQUksRUFBRyxDQXIxRHNCO0FBczFEN0JDLEtBQUcsRUFBRyxDQXQxRHVCO0FBdTFEN0JDLE9BQUssRUFBRyxDQXYxRHFCO0FBdzFEN0JDLE1BQUksRUFBRyxDQXgxRHNCO0FBeTFEN0JDLE9BQUssRUFBRyxDQXoxRHFCO0FBMDFEN0JDLFFBQU0sRUFBRyxDQTExRG9CO0FBMjFEN0JDLE1BQUksRUFBRyxDQTMxRHNCO0FBNDFEN0JDLFNBQU8sRUFBRyxDQTUxRG1CO0FBNjFEN0JDLE1BQUksRUFBRyxDQTcxRHNCO0FBODFEN0JDLGFBQVcsRUFBRyxDQTkxRGU7QUErMUQ3QkMsYUFBVyxFQUFHLENBLzFEZTtBQWcyRDdCQyxlQUFhLEVBQUcsQ0FoMkRhO0FBaTJEN0JDLFlBQVUsRUFBRyxDQWoyRGdCO0FBazJEN0JDLGNBQVksRUFBRyxDQWwyRGM7QUFtMkQ3QkMsUUFBTSxFQUFHLENBbjJEb0I7QUFvMkQ3QkMsU0FBTyxFQUFHLENBcDJEbUI7QUFxMkQ3QkMsYUFBVyxFQUFHLENBcjJEZTtBQXMyRDdCQyxPQUFLLEVBQUcsQ0F0MkRxQjtBQXUyRDdCQyxNQUFJLEVBQUcsQ0F2MkRzQjtBQXcyRDdCQyxTQUFPLEVBQUcsQ0F4MkRtQjtBQXkyRDdCQyxXQUFTLEVBQUcsQ0F6MkRpQjtBQTAyRDdCQyxTQUFPLEVBQUcsQ0ExMkRtQjtBQTIyRDdCQyxNQUFJLEVBQUcsQ0EzMkRzQjtBQTQyRDdCQyxPQUFLLEVBQUcsQ0E1MkRxQjtBQTYyRDdCQyxNQUFJLEVBQUcsQ0E3MkRzQjtBQTgyRDdCQyxTQUFPLEVBQUcsQ0E5MkRtQjtBQSsyRDdCQyxTQUFPLEVBQUcsQ0EvMkRtQjtBQWczRDdCQyxPQUFLLEVBQUcsQ0FoM0RxQjtBQWkzRDdCQyxLQUFHLEVBQUcsQ0FqM0R1QjtBQWszRDdCQyxTQUFPLEVBQUcsQ0FsM0RtQjtBQW0zRDdCQyxJQUFFLEVBQUcsQ0FuM0R3QjtBQW8zRDdCQyxPQUFLLEVBQUcsQ0FwM0RxQjtBQXEzRDdCQyxNQUFJLEVBQUcsQ0FyM0RzQjtBQXMzRDdCQyxNQUFJLEVBQUcsQ0F0M0RzQjtBQXUzRDdCQyxTQUFPLEVBQUcsQ0F2M0RtQjtBQXczRDdCQyxRQUFNLEVBQUcsQ0F4M0RvQjtBQXkzRDdCQyxRQUFNLEVBQUcsQ0F6M0RvQjtBQTAzRDdCQyxLQUFHLEVBQUcsQ0ExM0R1QjtBQTIzRDdCQyxVQUFRLEVBQUcsQ0EzM0RrQjtBQTQzRDdCQyxZQUFVLEVBQUcsQ0E1M0RnQjtBQTYzRDdCQyxZQUFVLEVBQUcsQ0E3M0RnQjtBQTgzRDdCQyxTQUFPLEVBQUcsQ0E5M0RtQjtBQSszRDdCQyxXQUFTLEVBQUcsQ0EvM0RpQjtBQWc0RDdCQyxTQUFPLEVBQUcsQ0FoNERtQjtBQWk0RDdCQyxhQUFXLEVBQUcsQ0FqNERlO0FBazREN0JDLFNBQU8sRUFBRyxDQWw0RG1CO0FBbTREN0JDLFFBQU0sRUFBRyxDQW40RG9CO0FBbzREN0JDLFdBQVMsRUFBRyxDQXA0RGlCO0FBcTREN0JDLFlBQVUsRUFBRyxDQXI0RGdCO0FBczREN0JDLFFBQU0sRUFBRyxDQXQ0RG9CO0FBdTREN0JDLFFBQU0sRUFBRyxDQXY0RG9CO0FBdzREN0JDLFVBQVEsRUFBRyxDQXg0RGtCO0FBeTREN0JDLGFBQVcsRUFBRyxDQXo0RGU7QUEwNEQ3QkMsWUFBVSxFQUFHLENBMTREZ0I7QUEyNEQ3QkMsV0FBUyxFQUFHLENBMzREaUI7QUE0NEQ3QkMsYUFBVyxFQUFHLENBNTREZTtBQTY0RDdCQyxVQUFRLEVBQUcsQ0E3NERrQjtBQTg0RDdCQyxLQUFHLEVBQUcsQ0E5NER1QjtBQSs0RDdCQyxPQUFLLEVBQUcsQ0EvNERxQjtBQWc1RDdCQyxZQUFVLEVBQUcsQ0FoNURnQjtBQWk1RDdCQyxZQUFVLEVBQUcsQ0FqNURnQjtBQWs1RDdCQyxPQUFLLEVBQUcsQ0FsNURxQjtBQW01RDdCQyxPQUFLLEVBQUcsQ0FuNURxQjtBQW81RDdCQyxZQUFVLEVBQUcsQ0FwNURnQjtBQXE1RDdCQyxjQUFZLEVBQUcsQ0FyNURjO0FBczVEN0JDLFFBQU0sRUFBRyxDQXQ1RG9CO0FBdTVEN0JDLFVBQVEsRUFBRyxDQXY1RGtCO0FBdzVEN0JDLFlBQVUsRUFBRyxDQXg1RGdCO0FBeTVEN0JDLFdBQVMsRUFBRyxDQXo1RGlCO0FBMDVEN0JDLE9BQUssRUFBRyxDQTE1RHFCO0FBMjVEN0JDLE1BQUksRUFBRyxDQTM1RHNCO0FBNDVEN0JDLFNBQU8sRUFBRyxDQTU1RG1CO0FBNjVEN0JDLEtBQUcsRUFBRyxDQTc1RHVCO0FBODVEN0JDLE9BQUssRUFBRyxDQTk1RHFCO0FBKzVEN0JDLE1BQUksRUFBRyxDQS81RHNCO0FBZzZEN0JDLE9BQUssRUFBRyxDQWg2RHFCO0FBaTZEN0JDLE1BQUksRUFBRyxDQWo2RHNCO0FBazZEN0JDLE1BQUksRUFBRyxDQWw2RHNCO0FBbTZEN0JDLE1BQUksRUFBRyxDQW42RHNCO0FBbzZEN0JDLE9BQUssRUFBRyxDQXA2RHFCO0FBcTZEN0JDLE9BQUssRUFBRyxDQXI2RHFCO0FBczZEN0JDLE1BQUksRUFBRyxDQXQ2RHNCO0FBdTZEN0JDLE9BQUssRUFBRyxDQXY2RHFCO0FBdzZEN0JDLFFBQU0sRUFBRyxDQXg2RG9CO0FBeTZEN0JDLFVBQVEsRUFBRyxDQXo2RGtCO0FBMDZEN0JDLE9BQUssRUFBRyxDQTE2RHFCO0FBMjZEN0JDLFNBQU8sRUFBRyxDQTM2RG1CO0FBNDZEN0JDLE9BQUssRUFBRyxDQTU2RHFCO0FBNjZEN0JDLFVBQVEsRUFBRyxDQTc2RGtCO0FBODZEN0JDLE1BQUksRUFBRyxDQTk2RHNCO0FBKzZEN0JDLFFBQU0sRUFBRyxDQS82RG9CO0FBZzdEN0JDLFFBQU0sRUFBRyxDQWg3RG9CO0FBaTdEN0JDLFVBQVEsRUFBRyxDQWo3RGtCO0FBazdEN0JDLFFBQU0sRUFBRyxDQWw3RG9CO0FBbTdEN0JDLE1BQUksRUFBRyxDQW43RHNCO0FBbzdEN0JDLE1BQUksRUFBRyxDQXA3RHNCO0FBcTdEN0JDLElBQUUsRUFBRyxDQXI3RHdCO0FBczdEN0JDLFFBQU0sRUFBRyxDQXQ3RG9CO0FBdTdEN0JDLE1BQUksRUFBRyxDQXY3RHNCO0FBdzdEN0JDLE1BQUksRUFBRyxDQXg3RHNCO0FBeTdEN0JDLFFBQU0sRUFBRyxDQXo3RG9CO0FBMDdEN0JDLE9BQUssRUFBRyxDQTE3RHFCO0FBMjdEN0JDLE1BQUksRUFBRyxDQTM3RHNCO0FBNDdEN0JDLFFBQU0sRUFBRyxDQTU3RG9CO0FBNjdEN0JDLFFBQU0sRUFBRyxDQTc3RG9CO0FBODdEN0JDLFdBQVMsRUFBRyxDQTk3RGlCO0FBKzdEN0JDLGFBQVcsRUFBRyxDQS83RGU7QUFnOEQ3QkMsWUFBVSxFQUFHLENBaDhEZ0I7QUFpOEQ3QkMsVUFBUSxFQUFHLENBajhEa0I7QUFrOEQ3QkMsTUFBSSxFQUFHLENBbDhEc0I7QUFtOEQ3QkMsV0FBUyxFQUFHLENBbjhEaUI7QUFvOEQ3QkMsTUFBSSxFQUFHLENBcDhEc0I7QUFxOEQ3QkMsTUFBSSxFQUFHLENBcjhEc0I7QUFzOEQ3QkMsS0FBRyxFQUFHLENBdDhEdUI7QUF1OEQ3QkMsU0FBTyxFQUFHLENBdjhEbUI7QUF3OEQ3QkMsWUFBVSxFQUFHLENBeDhEZ0I7QUF5OEQ3QkMsT0FBSyxFQUFHLENBejhEcUI7QUEwOEQ3QkMsTUFBSSxFQUFHLENBMThEc0I7QUEyOEQ3QkMsU0FBTyxFQUFHLENBMzhEbUI7QUE0OEQ3QkMsVUFBUSxFQUFHLENBNThEa0I7QUE2OEQ3QkMsU0FBTyxFQUFHLENBNzhEbUI7QUE4OEQ3QkMsTUFBSSxFQUFHLENBOThEc0I7QUErOEQ3QkMsVUFBUSxFQUFHLENBLzhEa0I7QUFnOUQ3QkMsVUFBUSxFQUFHLENBaDlEa0I7QUFpOUQ3QkMsU0FBTyxFQUFHLENBajlEbUI7QUFrOUQ3QkMsYUFBVyxFQUFHLENBbDlEZTtBQW05RDdCQyxVQUFRLEVBQUcsQ0FuOURrQjtBQW85RDdCQyxVQUFRLEVBQUcsQ0FwOURrQjtBQXE5RDdCQyxNQUFJLEVBQUcsQ0FyOURzQjtBQXM5RDdCQyxLQUFHLEVBQUcsQ0F0OUR1QjtBQXU5RDdCQyxRQUFNLEVBQUcsQ0F2OURvQjtBQXc5RDdCQyxXQUFTLEVBQUcsQ0F4OURpQjtBQXk5RDdCQyxhQUFXLEVBQUcsQ0F6OURlO0FBMDlEN0JDLE9BQUssRUFBRyxDQTE5RHFCO0FBMjlEN0JDLE1BQUksRUFBRyxDQTM5RHNCO0FBNDlEN0JDLFNBQU8sRUFBRyxDQTU5RG1CO0FBNjlEN0JDLFFBQU0sRUFBRyxDQTc5RG9CO0FBODlEN0JDLE9BQUssRUFBRyxDQTk5RHFCO0FBKzlEN0JDLFVBQVEsRUFBRyxDQS85RGtCO0FBZytEN0JDLFdBQVMsRUFBRyxDQWgrRGlCO0FBaStEN0JDLFVBQVEsRUFBRyxDQWorRGtCO0FBaytEN0JDLE1BQUksRUFBRyxDQWwrRHNCO0FBbStEN0JDLFFBQU0sRUFBRyxDQW4rRG9CO0FBbytEN0JDLFdBQVMsRUFBRyxDQXArRGlCO0FBcStEN0JDLFNBQU8sRUFBRyxDQXIrRG1CO0FBcytEN0JDLFFBQU0sRUFBRyxDQXQrRG9CO0FBdStEN0JDLFlBQVUsRUFBRyxDQXYrRGdCO0FBdytEN0JDLFdBQVMsRUFBRyxDQXgrRGlCO0FBeStEN0JDLFVBQVEsRUFBRyxDQXorRGtCO0FBMCtEN0JDLGFBQVcsRUFBRyxDQTErRGU7QUEyK0Q3QkMsU0FBTyxFQUFHLENBMytEbUI7QUE0K0Q3QkMsY0FBWSxFQUFHLENBNStEYztBQTYrRDdCQyxVQUFRLEVBQUcsQ0E3K0RrQjtBQTgrRDdCQyxTQUFPLEVBQUcsQ0E5K0RtQjtBQSsrRDdCQyxjQUFZLEVBQUcsQ0EvK0RjO0FBZy9EN0JDLFVBQVEsRUFBRyxDQWgvRGtCO0FBaS9EN0JDLFdBQVMsRUFBRyxDQWovRGlCO0FBay9EN0JDLGNBQVksRUFBRyxDQWwvRGM7QUFtL0Q3QkMsT0FBSyxFQUFHLENBbi9EcUI7QUFvL0Q3QkMsVUFBUSxFQUFHLENBcC9Ea0I7QUFxL0Q3QkMsU0FBTyxFQUFHLENBci9EbUI7QUFzL0Q3QkMsUUFBTSxFQUFHLENBdC9Eb0I7QUF1L0Q3QkMsU0FBTyxFQUFHLENBdi9EbUI7QUF3L0Q3QkMsVUFBUSxFQUFHLENBeC9Ea0I7QUF5L0Q3QkMsWUFBVSxFQUFHLENBei9EZ0I7QUEwL0Q3QkMsT0FBSyxFQUFHLENBMS9EcUI7QUEyL0Q3QkMsT0FBSyxFQUFHLENBMy9EcUI7QUE0L0Q3QkMsUUFBTSxFQUFHLENBNS9Eb0I7QUE2L0Q3QkMsV0FBUyxFQUFHLENBNy9EaUI7QUE4L0Q3QkMsU0FBTyxFQUFHLENBOS9EbUI7QUErL0Q3QkMsT0FBSyxFQUFHLENBLy9EcUI7QUFnZ0U3QkMsV0FBUyxFQUFHLENBaGdFaUI7QUFpZ0U3QkMsV0FBUyxFQUFHLENBamdFaUI7QUFrZ0U3QkMsT0FBSyxFQUFHLENBbGdFcUI7QUFtZ0U3QkMsT0FBSyxFQUFHLENBbmdFcUI7QUFvZ0U3QkMsVUFBUSxFQUFHLENBcGdFa0I7QUFxZ0U3QkMsUUFBTSxFQUFHLENBcmdFb0I7QUFzZ0U3QkMsVUFBUSxFQUFHLENBdGdFa0I7QUF1Z0U3QkMsU0FBTyxFQUFHLENBdmdFbUI7QUF3Z0U3QkMsU0FBTyxFQUFHLENBeGdFbUI7QUF5Z0U3QkMsVUFBUSxFQUFHLENBemdFa0I7QUEwZ0U3QkMsU0FBTyxFQUFHLENBMWdFbUI7QUEyZ0U3QkMsV0FBUyxFQUFHLENBM2dFaUI7QUE0Z0U3QkMsU0FBTyxFQUFHLENBNWdFbUI7QUE2Z0U3QkMsU0FBTyxFQUFHLENBN2dFbUI7QUE4Z0U3QkMsU0FBTyxFQUFHLENBOWdFbUI7QUErZ0U3QkMsVUFBUSxFQUFHLENBL2dFa0I7QUFnaEU3QkMsU0FBTyxFQUFHLENBaGhFbUI7QUFpaEU3QkMsWUFBVSxFQUFHLENBamhFZ0I7QUFraEU3QkMsWUFBVSxFQUFHLENBbGhFZ0I7QUFtaEU3QkMsY0FBWSxFQUFHLENBbmhFYztBQW9oRTdCQyxXQUFTLEVBQUcsQ0FwaEVpQjtBQXFoRTdCQyxTQUFPLEVBQUcsQ0FyaEVtQjtBQXNoRTdCQyxRQUFNLEVBQUcsQ0F0aEVvQjtBQXVoRTdCQyxTQUFPLEVBQUcsQ0F2aEVtQjtBQXdoRTdCQyxVQUFRLEVBQUcsQ0F4aEVrQjtBQXloRTdCQyxTQUFPLEVBQUcsQ0F6aEVtQjtBQTBoRTdCQyxXQUFTLEVBQUcsQ0ExaEVpQjtBQTJoRTdCQyxTQUFPLEVBQUcsQ0EzaEVtQjtBQTRoRTdCQyxTQUFPLEVBQUcsQ0E1aEVtQjtBQTZoRTdCQyxRQUFNLEVBQUcsQ0E3aEVvQjtBQThoRTdCQyxPQUFLLEVBQUcsQ0E5aEVxQjtBQStoRTdCQyxRQUFNLEVBQUcsQ0EvaEVvQjtBQWdpRTdCQyxVQUFRLEVBQUcsQ0FoaUVrQjtBQWlpRTdCQyxVQUFRLEVBQUcsQ0FqaUVrQjtBQWtpRTdCQyxZQUFVLEVBQUcsQ0FsaUVnQjtBQW1pRTdCQyxVQUFRLEVBQUcsQ0FuaUVrQjtBQW9pRTdCQyxTQUFPLEVBQUcsQ0FwaUVtQjtBQXFpRTdCQyxVQUFRLEVBQUcsQ0FyaUVrQjtBQXNpRTdCQyxZQUFVLEVBQUcsQ0F0aUVnQjtBQXVpRTdCQyxVQUFRLEVBQUcsQ0F2aUVrQjtBQXdpRTdCQyxTQUFPLEVBQUcsQ0F4aUVtQjtBQXlpRTdCQyxZQUFVLEVBQUcsQ0F6aUVnQjtBQTBpRTdCQyxTQUFPLEVBQUcsQ0ExaUVtQjtBQTJpRTdCQyxTQUFPLEVBQUcsQ0EzaUVtQjtBQTRpRTdCQyxPQUFLLEVBQUcsQ0E1aUVxQjtBQTZpRTdCQyxPQUFLLEVBQUcsQ0E3aUVxQjtBQThpRTdCQyxTQUFPLEVBQUcsQ0E5aUVtQjtBQStpRTdCQyxVQUFRLEVBQUcsQ0EvaUVrQjtBQWdqRTdCQyxVQUFRLEVBQUcsQ0FoakVrQjtBQWlqRTdCQyxXQUFTLEVBQUcsQ0FqakVpQjtBQWtqRTdCQyxlQUFhLEVBQUcsQ0FsakVhO0FBbWpFN0JDLGNBQVksRUFBRyxDQW5qRWM7QUFvakU3QkMsWUFBVSxFQUFHLENBcGpFZ0I7QUFxakU3QkMsUUFBTSxFQUFHLENBcmpFb0I7QUFzakU3QkMsYUFBVyxFQUFHLENBdGpFZTtBQXVqRTdCQyxVQUFRLEVBQUcsQ0F2akVrQjtBQXdqRTdCQyxTQUFPLEVBQUcsQ0F4akVtQjtBQXlqRTdCQyxXQUFTLEVBQUcsQ0F6akVpQjtBQTBqRTdCQyxNQUFJLEVBQUcsQ0ExakVzQjtBQTJqRTdCQyxZQUFVLEVBQUcsQ0EzakVnQjtBQTRqRTdCQyxVQUFRLEVBQUcsQ0E1akVrQjtBQTZqRTdCQyxNQUFJLEVBQUcsQ0E3akVzQjtBQThqRTdCQyxTQUFPLEVBQUcsQ0E5akVtQjtBQStqRTdCQyxRQUFNLEVBQUcsQ0EvakVvQjtBQWdrRTdCQyxNQUFJLEVBQUcsQ0Foa0VzQjtBQWlrRTdCQyxLQUFHLEVBQUcsQ0Fqa0V1QjtBQWtrRTdCQyxTQUFPLEVBQUcsQ0Fsa0VtQjtBQW1rRTdCQyxTQUFPLEVBQUcsQ0Fua0VtQjtBQW9rRTdCQyxTQUFPLEVBQUcsQ0Fwa0VtQjtBQXFrRTdCQyxhQUFXLEVBQUcsQ0Fya0VlO0FBc2tFN0JDLFVBQVEsRUFBRyxDQXRrRWtCO0FBdWtFN0JDLE9BQUssRUFBRyxDQXZrRXFCO0FBd2tFN0JDLFNBQU8sRUFBRyxDQXhrRW1CO0FBeWtFN0JDLE9BQUssRUFBRyxDQXprRXFCO0FBMGtFN0JDLFNBQU8sRUFBRyxDQTFrRW1CO0FBMmtFN0JDLE1BQUksRUFBRyxDQTNrRXNCO0FBNGtFN0JDLE9BQUssRUFBRyxDQTVrRXFCO0FBNmtFN0JDLE9BQUssRUFBRyxDQTdrRXFCO0FBOGtFN0JDLE1BQUksRUFBRyxDQTlrRXNCO0FBK2tFN0JDLFFBQU0sRUFBRyxDQS9rRW9CO0FBZ2xFN0JDLFNBQU8sRUFBRyxDQWhsRW1CO0FBaWxFN0JDLE9BQUssRUFBRyxDQWpsRXFCO0FBa2xFN0JDLE1BQUksRUFBRyxDQWxsRXNCO0FBbWxFN0JDLE1BQUksRUFBRyxDQW5sRXNCO0FBb2xFN0JDLE9BQUssRUFBRyxDQXBsRXFCO0FBcWxFN0JDLE9BQUssRUFBRyxDQXJsRXFCO0FBc2xFN0JDLE1BQUksRUFBRyxDQXRsRXNCO0FBdWxFN0JDLE9BQUssRUFBRyxDQXZsRXFCO0FBd2xFN0JDLFNBQU8sRUFBRyxDQXhsRW1CO0FBeWxFN0JDLE1BQUksRUFBRyxDQXpsRXNCO0FBMGxFN0JDLFFBQU0sRUFBRyxDQTFsRW9CO0FBMmxFN0JDLE1BQUksRUFBRyxDQTNsRXNCO0FBNGxFN0JDLFFBQU0sRUFBRyxDQTVsRW9CO0FBNmxFN0JDLFFBQU0sRUFBRyxDQTdsRW9CO0FBOGxFN0JDLE9BQUssRUFBRyxDQTlsRXFCO0FBK2xFN0JDLEtBQUcsRUFBRyxDQS9sRXVCO0FBZ21FN0JDLE9BQUssRUFBRyxDQWhtRXFCO0FBaW1FN0JDLE9BQUssRUFBRyxDQWptRXFCO0FBa21FN0JDLFVBQVEsRUFBRyxDQWxtRWtCO0FBbW1FN0JDLE1BQUksRUFBRyxDQW5tRXNCO0FBb21FN0JDLFFBQU0sRUFBRyxDQXBtRW9CO0FBcW1FN0JDLFNBQU8sRUFBRyxDQXJtRW1CO0FBc21FN0JDLE9BQUssRUFBRyxDQXRtRXFCO0FBdW1FN0JDLE1BQUksRUFBRyxDQXZtRXNCO0FBd21FN0JDLFNBQU8sRUFBRyxDQXhtRW1CO0FBeW1FN0JDLFNBQU8sRUFBRyxDQXptRW1CO0FBMG1FN0JDLFFBQU0sRUFBRyxDQTFtRW9CO0FBMm1FN0JDLFFBQU0sRUFBRyxDQTNtRW9CO0FBNG1FN0JDLFlBQVUsRUFBRyxDQTVtRWdCO0FBNm1FN0JDLFFBQU0sRUFBRyxDQTdtRW9CO0FBOG1FN0JDLFNBQU8sRUFBRyxDQTltRW1CO0FBK21FN0JDLFFBQU0sRUFBRyxDQS9tRW9CO0FBZ25FN0JDLFVBQVEsRUFBRyxDQWhuRWtCO0FBaW5FN0JDLFFBQU0sRUFBRyxDQWpuRW9CO0FBa25FN0JDLGFBQVcsRUFBRyxDQWxuRWU7QUFtbkU3QkMsV0FBUyxFQUFHLENBbm5FaUI7QUFvbkU3QkMsV0FBUyxFQUFHLENBcG5FaUI7QUFxbkU3QkMsZ0JBQWMsRUFBRyxDQXJuRVk7QUFzbkU3QkMsUUFBTSxFQUFHLENBdG5Fb0I7QUF1bkU3QkMsV0FBUyxFQUFHLENBdm5FaUI7QUF3bkU3QkMsU0FBTyxFQUFHLENBeG5FbUI7QUF5bkU3QkMsVUFBUSxFQUFHLENBem5Fa0I7QUEwbkU3QkMsU0FBTyxFQUFHLENBMW5FbUI7QUEybkU3QkMsS0FBRyxFQUFHLENBM25FdUI7QUE0bkU3QkMsUUFBTSxFQUFHLENBNW5Fb0I7QUE2bkU3QkMsV0FBUyxFQUFHLENBN25FaUI7QUE4bkU3QkMsT0FBSyxFQUFHLENBOW5FcUI7QUErbkU3QkMsV0FBUyxFQUFHLENBL25FaUI7QUFnb0U3QkMsU0FBTyxFQUFHLENBaG9FbUI7QUFpb0U3QkMsWUFBVSxFQUFHLENBam9FZ0I7QUFrb0U3QkMsUUFBTSxFQUFHLENBbG9Fb0I7QUFtb0U3QkMsU0FBTyxFQUFHLENBbm9FbUI7QUFvb0U3QkMsUUFBTSxFQUFHLENBcG9Fb0I7QUFxb0U3QkMsUUFBTSxFQUFHLENBcm9Fb0I7QUFzb0U3QkMsV0FBUyxFQUFHLENBdG9FaUI7QUF1b0U3QkMsWUFBVSxFQUFHLENBdm9FZ0I7QUF3b0U3QkMsUUFBTSxFQUFHLENBeG9Fb0I7QUF5b0U3QkMsUUFBTSxFQUFHLENBem9Fb0I7QUEwb0U3QkMsVUFBUSxFQUFHLENBMW9Fa0I7QUEyb0U3QkMsVUFBUSxFQUFHLENBM29Fa0I7QUE0b0U3QkMsU0FBTyxFQUFHLENBNW9FbUI7QUE2b0U3QkMsV0FBUyxFQUFHLENBN29FaUI7QUE4b0U3QkMsVUFBUSxFQUFHLENBOW9Fa0I7QUErb0U3QkMsWUFBVSxFQUFHLENBL29FZ0I7QUFncEU3QkMsV0FBUyxFQUFHLENBaHBFaUI7QUFpcEU3QkMsUUFBTSxFQUFHLENBanBFb0I7QUFrcEU3QkMsUUFBTSxFQUFHLENBbHBFb0I7QUFtcEU3QkMsVUFBUSxFQUFHLENBbnBFa0I7QUFvcEU3QkMsY0FBWSxFQUFHLENBcHBFYztBQXFwRTdCQyxVQUFRLEVBQUcsQ0FycEVrQjtBQXNwRTdCQyxZQUFVLEVBQUcsQ0F0cEVnQjtBQXVwRTdCQyxPQUFLLEVBQUcsQ0F2cEVxQjtBQXdwRTdCQyxTQUFPLEVBQUcsQ0F4cEVtQjtBQXlwRTdCQyxVQUFRLEVBQUcsQ0F6cEVrQjtBQTBwRTdCQyxRQUFNLEVBQUcsQ0ExcEVvQjtBQTJwRTdCQyxVQUFRLEVBQUcsQ0EzcEVrQjtBQTRwRTdCQyxXQUFTLEVBQUcsQ0E1cEVpQjtBQTZwRTdCQyxNQUFJLEVBQUcsQ0E3cEVzQjtBQThwRTdCQyxRQUFNLEVBQUcsQ0E5cEVvQjtBQStwRTdCQyxXQUFTLEVBQUcsQ0EvcEVpQjtBQWdxRTdCQyxZQUFVLEVBQUcsQ0FocUVnQjtBQWlxRTdCQyxVQUFRLEVBQUcsQ0FqcUVrQjtBQWtxRTdCQyxRQUFNLEVBQUcsQ0FscUVvQjtBQW1xRTdCQyxRQUFNLEVBQUcsQ0FucUVvQjtBQW9xRTdCQyxRQUFNLEVBQUcsQ0FwcUVvQjtBQXFxRTdCQyxRQUFNLEVBQUcsQ0FycUVvQjtBQXNxRTdCQyxZQUFVLEVBQUcsQ0F0cUVnQjtBQXVxRTdCQyxTQUFPLEVBQUcsQ0F2cUVtQjtBQXdxRTdCQyxPQUFLLEVBQUcsQ0F4cUVxQjtBQXlxRTdCQyxRQUFNLEVBQUcsQ0F6cUVvQjtBQTBxRTdCQyxVQUFRLEVBQUcsQ0ExcUVrQjtBQTJxRTdCQyxXQUFTLEVBQUcsQ0EzcUVpQjtBQTRxRTdCQyxnQkFBYyxFQUFHLENBNXFFWTtBQTZxRTdCQyxnQkFBYyxFQUFHLENBN3FFWTtBQThxRTdCQyxZQUFVLEVBQUcsQ0E5cUVnQjtBQStxRTdCQyxZQUFVLEVBQUcsQ0EvcUVnQjtBQWdyRTdCQyxTQUFPLEVBQUcsQ0FockVtQjtBQWlyRTdCQyxTQUFPLEVBQUcsQ0FqckVtQjtBQWtyRTdCQyxhQUFXLEVBQUcsQ0FsckVlO0FBbXJFN0JDLFVBQVEsRUFBRyxDQW5yRWtCO0FBb3JFN0JDLFlBQVUsRUFBRyxDQXByRWdCO0FBcXJFN0JDLFVBQVEsRUFBRyxDQXJyRWtCO0FBc3JFN0JDLGFBQVcsRUFBRyxDQXRyRWU7QUF1ckU3QkMsVUFBUSxFQUFHLENBdnJFa0I7QUF3ckU3QkMsUUFBTSxFQUFHLENBeHJFb0I7QUF5ckU3QkMsWUFBVSxFQUFHLENBenJFZ0I7QUEwckU3QkMsWUFBVSxFQUFHLENBMXJFZ0I7QUEyckU3QkMsU0FBTyxFQUFHLENBM3JFbUI7QUE0ckU3QkMsUUFBTSxFQUFHLENBNXJFb0I7QUE2ckU3QkMsVUFBUSxFQUFHLENBN3JFa0I7QUE4ckU3QkMsU0FBTyxFQUFHLENBOXJFbUI7QUErckU3QkMsU0FBTyxFQUFHLENBL3JFbUI7QUFnc0U3QkMsWUFBVSxFQUFHLENBaHNFZ0I7QUFpc0U3QkMsVUFBUSxFQUFHLENBanNFa0I7QUFrc0U3QkMsZ0JBQWMsRUFBRyxDQWxzRVk7QUFtc0U3QkMsYUFBVyxFQUFHLENBbnNFZTtBQW9zRTdCQyxNQUFJLEVBQUcsQ0Fwc0VzQjtBQXFzRTdCQyxZQUFVLEVBQUcsQ0Fyc0VnQjtBQXNzRTdCQyxTQUFPLEVBQUcsQ0F0c0VtQjtBQXVzRTdCQyxhQUFXLEVBQUcsQ0F2c0VlO0FBd3NFN0JDLFFBQU0sRUFBRyxDQXhzRW9CO0FBeXNFN0JDLFFBQU0sRUFBRyxDQXpzRW9CO0FBMHNFN0JDLFFBQU0sRUFBRyxDQTFzRW9CO0FBMnNFN0JDLFlBQVUsRUFBRyxDQTNzRWdCO0FBNHNFN0JDLFFBQU0sRUFBRyxDQTVzRW9CO0FBNnNFN0JDLFFBQU0sRUFBRyxDQTdzRW9CO0FBOHNFN0JDLFNBQU8sRUFBRyxDQTlzRW1CO0FBK3NFN0JDLFFBQU0sRUFBRyxDQS9zRW9CO0FBZ3RFN0JDLFlBQVUsRUFBRyxDQWh0RWdCO0FBaXRFN0JDLFFBQU0sRUFBRyxDQWp0RW9CO0FBa3RFN0JDLE1BQUksRUFBRyxDQWx0RXNCO0FBbXRFN0JDLE1BQUksRUFBRyxDQW50RXNCO0FBb3RFN0JDLEtBQUcsRUFBRyxDQXB0RXVCO0FBcXRFN0JDLE1BQUksRUFBRyxDQXJ0RXNCO0FBc3RFN0JDLE9BQUssRUFBRyxDQXR0RXFCO0FBdXRFN0JDLE9BQUssRUFBRyxDQXZ0RXFCO0FBd3RFN0JDLE1BQUksRUFBRyxDQXh0RXNCO0FBeXRFN0JDLE1BQUksRUFBRyxDQXp0RXNCO0FBMHRFN0JDLE1BQUksRUFBRyxDQTF0RXNCO0FBMnRFN0JDLE9BQUssRUFBRyxDQTN0RXFCO0FBNHRFN0JDLE1BQUksRUFBRyxDQTV0RXNCO0FBNnRFN0JDLE1BQUksRUFBRyxDQTd0RXNCO0FBOHRFN0JDLE1BQUksRUFBRyxDQTl0RXNCO0FBK3RFN0JDLE1BQUksRUFBRyxDQS90RXNCO0FBZ3VFN0JDLFVBQVEsRUFBRyxDQWh1RWtCO0FBaXVFN0JDLE1BQUksRUFBRyxDQWp1RXNCO0FBa3VFN0JDLE1BQUksRUFBRyxDQWx1RXNCO0FBbXVFN0JDLE1BQUksRUFBRyxDQW51RXNCO0FBb3VFN0JDLE1BQUksRUFBRyxDQXB1RXNCO0FBcXVFN0JDLE1BQUksRUFBRyxDQXJ1RXNCO0FBc3VFN0JDLE9BQUssRUFBRyxDQXR1RXFCO0FBdXVFN0JDLFNBQU8sRUFBRyxDQXZ1RW1CO0FBd3VFN0JDLE9BQUssRUFBRyxDQXh1RXFCO0FBeXVFN0JDLE9BQUssRUFBRyxDQXp1RXFCO0FBMHVFN0JDLFNBQU8sRUFBRyxDQTF1RW1CO0FBMnVFN0JDLEtBQUcsRUFBRyxDQTN1RXVCO0FBNHVFN0JDLEtBQUcsRUFBRyxDQTV1RXVCO0FBNnVFN0JDLE1BQUksRUFBRyxDQTd1RXNCO0FBOHVFN0JDLEtBQUcsRUFBRyxDQTl1RXVCO0FBK3VFN0JDLFNBQU8sRUFBRyxDQS91RW1CO0FBZ3ZFN0JDLE9BQUssRUFBRyxDQWh2RXFCO0FBaXZFN0JDLE1BQUksRUFBRyxDQWp2RXNCO0FBa3ZFN0JDLFNBQU8sRUFBRyxDQWx2RW1CO0FBbXZFN0JDLFFBQU0sRUFBRyxDQW52RW9CO0FBb3ZFN0JDLEtBQUcsRUFBRyxDQXB2RXVCO0FBcXZFN0JDLE1BQUksRUFBRyxDQXJ2RXNCO0FBc3ZFN0JDLFFBQU0sRUFBRyxDQXR2RW9CO0FBdXZFN0JDLE1BQUksRUFBRyxDQXZ2RXNCO0FBd3ZFN0JDLE9BQUssRUFBRyxDQXh2RXFCO0FBeXZFN0JDLFFBQU0sRUFBRyxDQXp2RW9CO0FBMHZFN0JDLE1BQUksRUFBRyxDQTF2RXNCO0FBMnZFN0JDLE9BQUssRUFBRyxDQTN2RXFCO0FBNHZFN0JDLE1BQUksRUFBRyxDQTV2RXNCO0FBNnZFN0JDLE1BQUksRUFBRyxDQTd2RXNCO0FBOHZFN0JDLFFBQU0sRUFBRyxDQTl2RW9CO0FBK3ZFN0JDLFVBQVEsRUFBRyxDQS92RWtCO0FBZ3dFN0JDLE1BQUksRUFBRyxDQWh3RXNCO0FBaXdFN0JDLFdBQVMsRUFBRyxDQWp3RWlCO0FBa3dFN0JDLGNBQVksRUFBRyxDQWx3RWM7QUFtd0U3QkMsU0FBTyxFQUFHLENBbndFbUI7QUFvd0U3QkMsT0FBSyxFQUFHLENBcHdFcUI7QUFxd0U3QkMsTUFBSSxFQUFHLENBcndFc0I7QUFzd0U3QkMsUUFBTSxFQUFHLENBdHdFb0I7QUF1d0U3QkMsS0FBRyxFQUFHLENBdndFdUI7QUF3d0U3QkMsT0FBSyxFQUFHLENBeHdFcUI7QUF5d0U3QkMsU0FBTyxFQUFHLENBendFbUI7QUEwd0U3QkMsUUFBTSxFQUFHLENBMXdFb0I7QUEyd0U3QkMsVUFBUSxFQUFHLENBM3dFa0I7QUE0d0U3QkMsT0FBSyxFQUFHLENBNXdFcUI7QUE2d0U3QkMsVUFBUSxFQUFHLENBN3dFa0I7QUE4d0U3QkMsUUFBTSxFQUFHLENBOXdFb0I7QUErd0U3QkMsU0FBTyxFQUFHLENBL3dFbUI7QUFneEU3QkMsYUFBVyxFQUFHLENBaHhFZTtBQWl4RTdCQyxRQUFNLEVBQUcsQ0FqeEVvQjtBQWt4RTdCQyxTQUFPLEVBQUcsQ0FseEVtQjtBQW14RTdCQyxZQUFVLEVBQUcsQ0FueEVnQjtBQW94RTdCQyxXQUFTLEVBQUcsQ0FweEVpQjtBQXF4RTdCQyxPQUFLLEVBQUcsQ0FyeEVxQjtBQXN4RTdCQyxPQUFLLEVBQUcsQ0F0eEVxQjtBQXV4RTdCQyxRQUFNLEVBQUcsQ0F2eEVvQjtBQXd4RTdCQyxRQUFNLEVBQUcsQ0F4eEVvQjtBQXl4RTdCQyxRQUFNLEVBQUcsQ0F6eEVvQjtBQTB4RTdCQyxLQUFHLEVBQUcsQ0ExeEV1QjtBQTJ4RTdCQyxRQUFNLEVBQUcsQ0EzeEVvQjtBQTR4RTdCQyxRQUFNLEVBQUcsQ0E1eEVvQjtBQTZ4RTdCQyxNQUFJLEVBQUcsQ0E3eEVzQjtBQTh4RTdCQyxRQUFNLEVBQUcsQ0E5eEVvQjtBQSt4RTdCQyxRQUFNLEVBQUcsQ0EveEVvQjtBQWd5RTdCQyxXQUFTLEVBQUcsQ0FoeUVpQjtBQWl5RTdCQyxTQUFPLEVBQUcsQ0FqeUVtQjtBQWt5RTdCQyxRQUFNLEVBQUcsQ0FseUVvQjtBQW15RTdCQyxRQUFNLEVBQUcsQ0FueUVvQjtBQW95RTdCQyxVQUFRLEVBQUcsQ0FweUVrQjtBQXF5RTdCQyxLQUFHLEVBQUcsQ0FyeUV1QjtBQXN5RTdCQyxNQUFJLEVBQUcsQ0F0eUVzQjtBQXV5RTdCQyxNQUFJLEVBQUcsQ0F2eUVzQjtBQXd5RTdCQyxNQUFJLEVBQUcsQ0F4eUVzQjtBQXl5RTdCQyxTQUFPLEVBQUcsQ0F6eUVtQjtBQTB5RTdCQyxPQUFLLEVBQUcsQ0ExeUVxQjtBQTJ5RTdCQyxRQUFNLEVBQUcsQ0EzeUVvQjtBQTR5RTdCQyxXQUFTLEVBQUcsQ0E1eUVpQjtBQTZ5RTdCQyxNQUFJLEVBQUcsQ0E3eUVzQjtBQTh5RTdCQyxNQUFJLEVBQUcsQ0E5eUVzQjtBQSt5RTdCQyxRQUFNLEVBQUcsQ0EveUVvQjtBQWd6RTdCQyxTQUFPLEVBQUcsQ0FoekVtQjtBQWl6RTdCQyxNQUFJLEVBQUcsQ0FqekVzQjtBQWt6RTdCQyxRQUFNLEVBQUcsQ0FsekVvQjtBQW16RTdCQyxPQUFLLEVBQUcsQ0FuekVxQjtBQW96RTdCQyxXQUFTLEVBQUcsQ0FwekVpQjtBQXF6RTdCQyxVQUFRLEVBQUcsQ0FyekVrQjtBQXN6RTdCQyxVQUFRLEVBQUcsQ0F0ekVrQjtBQXV6RTdCQyxVQUFRLEVBQUcsQ0F2ekVrQjtBQXd6RTdCQyxRQUFNLEVBQUcsQ0F4ekVvQjtBQXl6RTdCQyxTQUFPLEVBQUcsQ0F6ekVtQjtBQTB6RTdCQyxXQUFTLEVBQUcsQ0ExekVpQjtBQTJ6RTdCQyxPQUFLLEVBQUcsQ0EzekVxQjtBQTR6RTdCQyxTQUFPLEVBQUcsQ0E1ekVtQjtBQTZ6RTdCQyxTQUFPLEVBQUcsQ0E3ekVtQjtBQTh6RTdCQyxLQUFHLEVBQUcsQ0E5ekV1QjtBQSt6RTdCQyxTQUFPLEVBQUcsQ0EvekVtQjtBQWcwRTdCQyxRQUFNLEVBQUcsQ0FoMEVvQjtBQWkwRTdCQyxZQUFVLEVBQUcsQ0FqMEVnQjtBQWswRTdCQyxPQUFLLEVBQUcsQ0FsMEVxQjtBQW0wRTdCQyxTQUFPLEVBQUcsQ0FuMEVtQjtBQW8wRTdCQyxRQUFNLEVBQUcsQ0FwMEVvQjtBQXEwRTdCQyxLQUFHLEVBQUcsQ0FyMEV1QjtBQXMwRTdCQyxRQUFNLEVBQUcsQ0F0MEVvQjtBQXUwRTdCQyxPQUFLLEVBQUcsQ0F2MEVxQjtBQXcwRTdCQyxRQUFNLEVBQUcsQ0F4MEVvQjtBQXkwRTdCQyxPQUFLLEVBQUcsQ0F6MEVxQjtBQTAwRTdCQyxPQUFLLEVBQUcsQ0ExMEVxQjtBQTIwRTdCQyxPQUFLLEVBQUcsQ0EzMEVxQjtBQTQwRTdCQyxPQUFLLEVBQUcsQ0E1MEVxQjtBQTYwRTdCQyxPQUFLLEVBQUcsQ0E3MEVxQjtBQTgwRTdCQyxLQUFHLEVBQUcsQ0E5MEV1QjtBQSswRTdCQyxPQUFLLEVBQUcsQ0EvMEVxQjtBQWcxRTdCQyxPQUFLLEVBQUcsQ0FoMUVxQjtBQWkxRTdCQyxPQUFLLEVBQUcsQ0FqMUVxQjtBQWsxRTdCQyxTQUFPLEVBQUcsQ0FsMUVtQjtBQW0xRTdCQyxPQUFLLEVBQUcsQ0FuMUVxQjtBQW8xRTdCQyxPQUFLLEVBQUcsQ0FwMUVxQjtBQXExRTdCQyxNQUFJLEVBQUcsQ0FyMUVzQjtBQXMxRTdCQyxPQUFLLEVBQUcsQ0F0MUVxQjtBQXUxRTdCQyxNQUFJLEVBQUcsQ0F2MUVzQjtBQXcxRTdCQyxPQUFLLEVBQUcsQ0F4MUVxQjtBQXkxRTdCQyxNQUFJLEVBQUcsQ0F6MUVzQjtBQTAxRTdCQyxPQUFLLEVBQUcsQ0ExMUVxQjtBQTIxRTdCQyxVQUFRLEVBQUcsQ0EzMUVrQjtBQTQxRTdCQyxNQUFJLEVBQUcsQ0E1MUVzQjtBQTYxRTdCQyxVQUFRLEVBQUcsQ0E3MUVrQjtBQTgxRTdCQyxPQUFLLEVBQUcsQ0E5MUVxQjtBQSsxRTdCQyxPQUFLLEVBQUcsQ0EvMUVxQjtBQWcyRTdCQyxTQUFPLEVBQUcsQ0FoMkVtQjtBQWkyRTdCQyxNQUFJLEVBQUcsQ0FqMkVzQjtBQWsyRTdCQyxRQUFNLEVBQUcsQ0FsMkVvQjtBQW0yRTdCQyxVQUFRLEVBQUcsQ0FuMkVrQjtBQW8yRTdCQyxPQUFLLEVBQUcsQ0FwMkVxQjtBQXEyRTdCQyxNQUFJLEVBQUcsQ0FyMkVzQjtBQXMyRTdCQyxRQUFNLEVBQUcsQ0F0MkVvQjtBQXUyRTdCQyxPQUFLLEVBQUcsQ0F2MkVxQjtBQXcyRTdCQyxNQUFJLEVBQUcsQ0F4MkVzQjtBQXkyRTdCQyxNQUFJLEVBQUcsQ0F6MkVzQjtBQTAyRTdCQyxNQUFJLEVBQUcsQ0ExMkVzQjtBQTIyRTdCQyxNQUFJLEVBQUcsQ0EzMkVzQjtBQTQyRTdCQyxPQUFLLEVBQUcsQ0E1MkVxQjtBQTYyRTdCQyxNQUFJLEVBQUcsQ0E3MkVzQjtBQTgyRTdCQyxRQUFNLEVBQUcsQ0E5MkVvQjtBQSsyRTdCQyxjQUFZLEVBQUcsQ0EvMkVjO0FBZzNFN0JDLGFBQVcsRUFBRyxDQWgzRWU7QUFpM0U3QkMsZUFBYSxFQUFHLENBajNFYTtBQWszRTdCQyxTQUFPLEVBQUcsQ0FsM0VtQjtBQW0zRTdCQyxRQUFNLEVBQUcsQ0FuM0VvQjtBQW8zRTdCQyxRQUFNLEVBQUcsQ0FwM0VvQjtBQXEzRTdCQyxTQUFPLEVBQUcsQ0FyM0VtQjtBQXMzRTdCQyxXQUFTLEVBQUcsQ0F0M0VpQjtBQXUzRTdCQyxRQUFNLEVBQUcsQ0F2M0VvQjtBQXczRTdCQyxRQUFNLEVBQUcsQ0F4M0VvQjtBQXkzRTdCQyxLQUFHLEVBQUcsQ0F6M0V1QjtBQTAzRTdCQyxPQUFLLEVBQUcsQ0ExM0VxQjtBQTIzRTdCQyxNQUFJLEVBQUcsQ0EzM0VzQjtBQTQzRTdCQyxRQUFNLEVBQUcsQ0E1M0VvQjtBQTYzRTdCQyxRQUFNLEVBQUcsQ0E3M0VvQjtBQTgzRTdCQyxNQUFJLEVBQUcsQ0E5M0VzQjtBQSszRTdCQyxLQUFHLEVBQUcsQ0EvM0V1QjtBQWc0RTdCQyxRQUFNLEVBQUcsQ0FoNEVvQjtBQWk0RTdCQyxLQUFHLEVBQUcsQ0FqNEV1QjtBQWs0RTdCQyxNQUFJLEVBQUcsQ0FsNEVzQjtBQW00RTdCQyxXQUFTLEVBQUcsQ0FuNEVpQjtBQW80RTdCQyxLQUFHLEVBQUcsQ0FwNEV1QjtBQXE0RTdCQyxNQUFJLEVBQUcsQ0FyNEVzQjtBQXM0RTdCQyxLQUFHLEVBQUcsQ0F0NEV1QjtBQXU0RTdCQyxPQUFLLEVBQUcsQ0F2NEVxQjtBQXc0RTdCQyxNQUFJLEVBQUcsQ0F4NEVzQjtBQXk0RTdCQyxLQUFHLEVBQUcsQ0F6NEV1QjtBQTA0RTdCQyxPQUFLLEVBQUcsQ0ExNEVxQjtBQTI0RTdCQyxPQUFLLEVBQUcsQ0EzNEVxQjtBQTQ0RTdCQyxPQUFLLEVBQUcsQ0E1NEVxQjtBQTY0RTdCQyxPQUFLLEVBQUcsQ0E3NEVxQjtBQTg0RTdCQyxRQUFNLEVBQUcsQ0E5NEVvQjtBQSs0RTdCQyxVQUFRLEVBQUcsQ0EvNEVrQjtBQWc1RTdCQyxNQUFJLEVBQUcsQ0FoNUVzQjtBQWk1RTdCQyxNQUFJLEVBQUcsQ0FqNUVzQjtBQWs1RTdCQyxRQUFNLEVBQUcsQ0FsNUVvQjtBQW01RTdCQyxPQUFLLEVBQUcsQ0FuNUVxQjtBQW81RTdCQyxPQUFLLEVBQUcsQ0FwNUVxQjtBQXE1RTdCQyxPQUFLLEVBQUcsQ0FyNUVxQjtBQXM1RTdCQyxPQUFLLEVBQUcsQ0F0NUVxQjtBQXU1RTdCQyxPQUFLLEVBQUcsQ0F2NUVxQjtBQXc1RTdCQyxRQUFNLEVBQUcsQ0F4NUVvQjtBQXk1RTdCQyxNQUFJLEVBQUcsQ0F6NUVzQjtBQTA1RTdCQyxNQUFJLEVBQUcsQ0ExNUVzQjtBQTI1RTdCQyxJQUFFLEVBQUcsQ0EzNUV3QjtBQTQ1RTdCLGVBQWMsQ0E1NUVlO0FBNjVFN0JDLFFBQU0sRUFBRyxDQTc1RW9CO0FBODVFN0JDLFFBQU0sRUFBRyxDQTk1RW9CO0FBKzVFN0JDLFNBQU8sRUFBRyxDQS81RW1CO0FBZzZFN0JDLE1BQUksRUFBRyxDQWg2RXNCO0FBaTZFN0JDLFVBQVEsRUFBRyxDQWo2RWtCO0FBazZFN0JDLE1BQUksRUFBRyxDQWw2RXNCO0FBbTZFN0JDLE9BQUssRUFBRyxDQW42RXFCO0FBbzZFN0JDLFNBQU8sRUFBRyxDQXA2RW1CO0FBcTZFN0JDLE9BQUssRUFBRyxDQXI2RXFCO0FBczZFN0JDLFVBQVEsRUFBRyxDQXQ2RWtCO0FBdTZFN0JDLE9BQUssRUFBRyxDQXY2RXFCO0FBdzZFN0JDLE1BQUksRUFBRyxDQXg2RXNCO0FBeTZFN0JDLFVBQVEsRUFBRyxDQXo2RWtCO0FBMDZFN0JDLFNBQU8sRUFBRyxDQTE2RW1CO0FBMjZFN0JDLFNBQU8sRUFBRyxDQTM2RW1CO0FBNDZFN0JDLFdBQVMsRUFBRyxDQTU2RWlCO0FBNjZFN0JDLFdBQVMsRUFBRyxDQTc2RWlCO0FBODZFN0JDLFVBQVEsRUFBRyxDQTk2RWtCO0FBKzZFN0JDLFdBQVMsRUFBRyxDQS82RWlCO0FBZzdFN0JDLEtBQUcsRUFBRyxDQWg3RXVCO0FBaTdFN0JDLE1BQUksRUFBRyxDQWo3RXNCO0FBazdFN0JDLE1BQUksRUFBRyxDQWw3RXNCO0FBbTdFN0JDLGVBQWEsRUFBRyxDQW43RWE7QUFvN0U3QkMsT0FBSyxFQUFHLENBcDdFcUI7QUFxN0U3QkMsTUFBSSxFQUFHLENBcjdFc0I7QUFzN0U3QkMsTUFBSSxFQUFHLENBdDdFc0I7QUF1N0U3QkMsT0FBSyxFQUFHLENBdjdFcUI7QUF3N0U3QkMsTUFBSSxFQUFHLENBeDdFc0I7QUF5N0U3QkMsUUFBTSxFQUFHLENBejdFb0I7QUEwN0U3QkMsT0FBSyxFQUFHLENBMTdFcUI7QUEyN0U3QkMsVUFBUSxFQUFHLENBMzdFa0I7QUE0N0U3QkMsUUFBTSxFQUFHLENBNTdFb0I7QUE2N0U3QkMsT0FBSyxFQUFHLENBNzdFcUI7QUE4N0U3QkMsU0FBTyxFQUFHLENBOTdFbUI7QUErN0U3QkMsT0FBSyxFQUFHLENBLzdFcUI7QUFnOEU3QkMsU0FBTyxFQUFHLENBaDhFbUI7QUFpOEU3QkMsU0FBTyxFQUFHLENBajhFbUI7QUFrOEU3QkMsWUFBVSxFQUFHLENBbDhFZ0I7QUFtOEU3QkMsU0FBTyxFQUFHLENBbjhFbUI7QUFvOEU3QkMsVUFBUSxFQUFHLENBcDhFa0I7QUFxOEU3QkMsY0FBWSxFQUFHLENBcjhFYztBQXM4RTdCQyxRQUFNLEVBQUcsQ0F0OEVvQjtBQXU4RTdCQyxPQUFLLEVBQUcsQ0F2OEVxQjtBQXc4RTdCQyxPQUFLLEVBQUcsQ0F4OEVxQjtBQXk4RTdCQyxVQUFRLEVBQUcsQ0F6OEVrQjtBQTA4RTdCQyxNQUFJLEVBQUcsQ0ExOEVzQjtBQTI4RTdCQyxRQUFNLEVBQUcsQ0EzOEVvQjtBQTQ4RTdCQyxXQUFTLEVBQUcsQ0E1OEVpQjtBQTY4RTdCQyxPQUFLLEVBQUcsQ0E3OEVxQjtBQTg4RTdCQyxXQUFTLEVBQUcsQ0E5OEVpQjtBQSs4RTdCQyxPQUFLLEVBQUcsQ0EvOEVxQjtBQWc5RTdCQyxNQUFJLEVBQUcsQ0FoOUVzQjtBQWk5RTdCQyxRQUFNLEVBQUcsQ0FqOUVvQjtBQWs5RTdCQyxRQUFNLEVBQUcsQ0FsOUVvQjtBQW05RTdCQyxRQUFNLEVBQUcsQ0FuOUVvQjtBQW85RTdCQyxTQUFPLEVBQUcsQ0FwOUVtQjtBQXE5RTdCQyxXQUFTLEVBQUcsQ0FyOUVpQjtBQXM5RTdCQyxRQUFNLEVBQUcsQ0F0OUVvQjtBQXU5RTdCQyxPQUFLLEVBQUcsQ0F2OUVxQjtBQXc5RTdCQyxPQUFLLEVBQUcsQ0F4OUVxQjtBQXk5RTdCQyxPQUFLLEVBQUcsQ0F6OUVxQjtBQTA5RTdCQyxPQUFLLEVBQUcsQ0ExOUVxQjtBQTI5RTdCQyxPQUFLLEVBQUcsQ0EzOUVxQjtBQTQ5RTdCQyxVQUFRLEVBQUcsQ0E1OUVrQjtBQTY5RTdCQyxVQUFRLEVBQUcsQ0E3OUVrQjtBQTg5RTdCQyxNQUFJLEVBQUcsQ0E5OUVzQjtBQSs5RTdCQyxPQUFLLEVBQUcsQ0EvOUVxQjtBQWcrRTdCQyxPQUFLLEVBQUcsQ0FoK0VxQjtBQWkrRTdCQyxPQUFLLEVBQUcsQ0FqK0VxQjtBQWsrRTdCQyxXQUFTLEVBQUcsQ0FsK0VpQjtBQW0rRTdCQyxTQUFPLEVBQUcsQ0FuK0VtQjtBQW8rRTdCQyxZQUFVLEVBQUcsQ0FwK0VnQjtBQXErRTdCQyxRQUFNLEVBQUcsQ0FyK0VvQjtBQXMrRTdCQyxNQUFJLEVBQUcsQ0F0K0VzQjtBQXUrRTdCQyxRQUFNLEVBQUcsQ0F2K0VvQjtBQXcrRTdCQyxPQUFLLEVBQUcsQ0F4K0VxQjtBQXkrRTdCQyxPQUFLLEVBQUcsQ0F6K0VxQjtBQTArRTdCQyxNQUFJLEVBQUcsQ0ExK0VzQjtBQTIrRTdCQyxPQUFLLEVBQUcsQ0EzK0VxQjtBQTQrRTdCQyxPQUFLLEVBQUcsQ0E1K0VxQjtBQTYrRTdCQyxNQUFJLEVBQUcsQ0E3K0VzQjtBQTgrRTdCQyxPQUFLLEVBQUcsQ0E5K0VxQjtBQSsrRTdCQyxTQUFPLEVBQUcsQ0EvK0VtQjtBQWcvRTdCQyxPQUFLLEVBQUcsQ0FoL0VxQjtBQWkvRTdCQyxNQUFJLEVBQUcsQ0FqL0VzQjtBQWsvRTdCQyxTQUFPLEVBQUcsQ0FsL0VtQjtBQW0vRTdCQyxPQUFLLEVBQUcsQ0FuL0VxQjtBQW8vRTdCQyxPQUFLLEVBQUcsQ0FwL0VxQjtBQXEvRTdCQyxPQUFLLEVBQUcsQ0FyL0VxQjtBQXMvRTdCQyxVQUFRLEVBQUcsQ0F0L0VrQjtBQXUvRTdCQyxTQUFPLEVBQUcsQ0F2L0VtQjtBQXcvRTdCQyxVQUFRLEVBQUcsQ0F4L0VrQjtBQXkvRTdCQyxXQUFTLEVBQUcsQ0F6L0VpQjtBQTAvRTdCQyxVQUFRLEVBQUcsQ0ExL0VrQjtBQTIvRTdCQyxRQUFNLEVBQUcsQ0EzL0VvQjtBQTQvRTdCQyxRQUFNLEVBQUcsQ0E1L0VvQjtBQTYvRTdCQyxVQUFRLEVBQUcsQ0E3L0VrQjtBQTgvRTdCQyxZQUFVLEVBQUcsQ0E5L0VnQjtBQSsvRTdCQyxRQUFNLEVBQUcsQ0EvL0VvQjtBQWdnRjdCQyxTQUFPLEVBQUcsQ0FoZ0ZtQjtBQWlnRjdCQyxRQUFNLEVBQUcsQ0FqZ0ZvQjtBQWtnRjdCQyxRQUFNLEVBQUcsQ0FsZ0ZvQjtBQW1nRjdCQyxPQUFLLEVBQUcsQ0FuZ0ZxQjtBQW9nRjdCQyxRQUFNLEVBQUcsQ0FwZ0ZvQjtBQXFnRjdCQyxRQUFNLEVBQUcsQ0FyZ0ZvQjtBQXNnRjdCQyxVQUFRLEVBQUcsQ0F0Z0ZrQjtBQXVnRjdCQyxXQUFTLEVBQUcsQ0F2Z0ZpQjtBQXdnRjdCQyxVQUFRLEVBQUcsQ0F4Z0ZrQjtBQXlnRjdCQyxTQUFPLEVBQUcsQ0F6Z0ZtQjtBQTBnRjdCQyxRQUFNLEVBQUcsQ0ExZ0ZvQjtBQTJnRjdCQyxPQUFLLEVBQUcsQ0EzZ0ZxQjtBQTRnRjdCQyxPQUFLLEVBQUcsQ0E1Z0ZxQjtBQTZnRjdCQyxRQUFNLEVBQUcsQ0E3Z0ZvQjtBQThnRjdCQyxPQUFLLEVBQUcsQ0E5Z0ZxQjtBQStnRjdCQyxTQUFPLEVBQUcsQ0EvZ0ZtQjtBQWdoRjdCQyxRQUFNLEVBQUcsQ0FoaEZvQjtBQWloRjdCQyxZQUFVLEVBQUcsQ0FqaEZnQjtBQWtoRjdCQyxXQUFTLEVBQUcsQ0FsaEZpQjtBQW1oRjdCQyxhQUFXLEVBQUcsQ0FuaEZlO0FBb2hGN0JDLFNBQU8sRUFBRyxDQXBoRm1CO0FBcWhGN0JDLFNBQU8sRUFBRyxDQXJoRm1CO0FBc2hGN0JDLFlBQVUsRUFBRyxDQXRoRmdCO0FBdWhGN0JDLGNBQVksRUFBRyxDQXZoRmM7QUF3aEY3QkMsTUFBSSxFQUFHLENBeGhGc0I7QUF5aEY3QkMsUUFBTSxFQUFHLENBemhGb0I7QUEwaEY3QkMsVUFBUSxFQUFHLENBMWhGa0I7QUEyaEY3QkMsS0FBRyxFQUFHLENBM2hGdUI7QUE0aEY3QkMsUUFBTSxFQUFHLENBNWhGb0I7QUE2aEY3QkMsWUFBVSxFQUFHLENBN2hGZ0I7QUE4aEY3QkMsT0FBSyxFQUFHLENBOWhGcUI7QUEraEY3QkMsU0FBTyxFQUFHLENBL2hGbUI7QUFnaUY3QkMsWUFBVSxFQUFHLENBaGlGZ0I7QUFpaUY3QkMsU0FBTyxFQUFHLENBamlGbUI7QUFraUY3QkMsTUFBSSxFQUFHLENBbGlGc0I7QUFtaUY3QkMsUUFBTSxFQUFHLENBbmlGb0I7QUFvaUY3QkMsUUFBTSxFQUFHLENBcGlGb0I7QUFxaUY3QkMsS0FBRyxFQUFHLENBcmlGdUI7QUFzaUY3QkMsT0FBSyxFQUFHLENBdGlGcUI7QUF1aUY3QkMsUUFBTSxFQUFHLENBdmlGb0I7QUF3aUY3QkMsU0FBTyxFQUFHLENBeGlGbUI7QUF5aUY3QkMsV0FBUyxFQUFHLENBemlGaUI7QUEwaUY3QkMsU0FBTyxFQUFHLENBMWlGbUI7QUEyaUY3QkMsVUFBUSxFQUFHLENBM2lGa0I7QUE0aUY3QkMsU0FBTyxFQUFHLENBNWlGbUI7QUE2aUY3QkMsTUFBSSxFQUFHLENBN2lGc0I7QUE4aUY3QkMsUUFBTSxFQUFHLENBOWlGb0I7QUEraUY3QkMsU0FBTyxFQUFHLENBL2lGbUI7QUFnakY3QkMsU0FBTyxFQUFHLENBaGpGbUI7QUFpakY3QkMsVUFBUSxFQUFHLENBampGa0I7QUFrakY3QkMsV0FBUyxFQUFHLENBbGpGaUI7QUFtakY3QkMsWUFBVSxFQUFHLENBbmpGZ0I7QUFvakY3QkMsY0FBWSxFQUFHLENBcGpGYztBQXFqRjdCQyxVQUFRLEVBQUcsQ0FyakZrQjtBQXNqRjdCQyxRQUFNLEVBQUcsQ0F0akZvQjtBQXVqRjdCQyxVQUFRLEVBQUcsQ0F2akZrQjtBQXdqRjdCQyxTQUFPLEVBQUcsQ0F4akZtQjtBQXlqRjdCQyxVQUFRLEVBQUcsQ0F6akZrQjtBQTBqRjdCQyxTQUFPLEVBQUcsQ0ExakZtQjtBQTJqRjdCQyxTQUFPLEVBQUcsQ0EzakZtQjtBQTRqRjdCQyxPQUFLLEVBQUcsQ0E1akZxQjtBQTZqRjdCQyxPQUFLLEVBQUcsQ0E3akZxQjtBQThqRjdCQyxPQUFLLEVBQUcsQ0E5akZxQjtBQStqRjdCQyxNQUFJLEVBQUcsQ0EvakZzQjtBQWdrRjdCQyxPQUFLLEVBQUcsQ0Foa0ZxQjtBQWlrRjdCQyxRQUFNLEVBQUcsQ0Fqa0ZvQjtBQWtrRjdCQyxRQUFNLEVBQUcsQ0Fsa0ZvQjtBQW1rRjdCQyxTQUFPLEVBQUcsQ0Fua0ZtQjtBQW9rRjdCQyxRQUFNLEVBQUcsQ0Fwa0ZvQjtBQXFrRjdCQyxPQUFLLEVBQUcsQ0Fya0ZxQjtBQXNrRjdCQyxZQUFVLEVBQUcsQ0F0a0ZnQjtBQXVrRjdCQyxRQUFNLEVBQUcsQ0F2a0ZvQjtBQXdrRjdCQyxNQUFJLEVBQUcsQ0F4a0ZzQjtBQXlrRjdCQyxNQUFJLEVBQUcsQ0F6a0ZzQjtBQTBrRjdCQyxNQUFJLEVBQUcsQ0Exa0ZzQjtBQTJrRjdCQyxRQUFNLEVBQUcsQ0Eza0ZvQjtBQTRrRjdCQyxNQUFJLEVBQUcsQ0E1a0ZzQjtBQTZrRjdCQyxNQUFJLEVBQUcsQ0E3a0ZzQjtBQThrRjdCQyxNQUFJLEVBQUcsQ0E5a0ZzQjtBQStrRjdCQyxLQUFHLEVBQUcsQ0Eva0Z1QjtBQWdsRjdCQyxNQUFJLEVBQUcsQ0FobEZzQjtBQWlsRjdCQyxRQUFNLEVBQUcsQ0FqbEZvQjtBQWtsRjdCQyxNQUFJLEVBQUcsQ0FsbEZzQjtBQW1sRjdCQyxPQUFLLEVBQUcsQ0FubEZxQjtBQW9sRjdCQyxLQUFHLEVBQUcsQ0FwbEZ1QjtBQXFsRjdCQyxVQUFRLEVBQUcsQ0FybEZrQjtBQXNsRjdCQyxLQUFHLEVBQUcsQ0F0bEZ1QjtBQXVsRjdCQyxPQUFLLEVBQUcsQ0F2bEZxQjtBQXdsRjdCQyxTQUFPLEVBQUcsQ0F4bEZtQjtBQXlsRjdCQyxVQUFRLEVBQUcsQ0F6bEZrQjtBQTBsRjdCQyxNQUFJLEVBQUcsQ0ExbEZzQjtBQTJsRjdCQyxNQUFJLEVBQUcsQ0EzbEZzQjtBQTRsRjdCQyxVQUFRLEVBQUcsQ0E1bEZrQjtBQTZsRjdCQyxXQUFTLEVBQUcsQ0E3bEZpQjtBQThsRjdCQyxXQUFTLEVBQUcsQ0E5bEZpQjtBQStsRjdCQyxZQUFVLEVBQUcsQ0EvbEZnQjtBQWdtRjdCQyxNQUFJLEVBQUcsQ0FobUZzQjtBQWltRjdCQyxVQUFRLEVBQUcsQ0FqbUZrQjtBQWttRjdCQyxXQUFTLEVBQUcsQ0FsbUZpQjtBQW1tRjdCQyxXQUFTLEVBQUcsQ0FubUZpQjtBQW9tRjdCQyxZQUFVLEVBQUcsQ0FwbUZnQjtBQXFtRjdCQyxNQUFJLEVBQUcsQ0FybUZzQjtBQXNtRjdCQyxhQUFXLEVBQUcsQ0F0bUZlO0FBdW1GN0JDLFdBQVMsRUFBRyxDQXZtRmlCO0FBd21GN0JDLEtBQUcsRUFBRyxDQXhtRnVCO0FBeW1GN0JDLE1BQUksRUFBRyxDQXptRnNCO0FBMG1GN0JDLFVBQVEsRUFBRyxDQTFtRmtCO0FBMm1GN0JDLFFBQU0sRUFBRyxDQTNtRm9CO0FBNG1GN0JDLFNBQU8sRUFBRyxDQTVtRm1CO0FBNm1GN0JDLE1BQUksRUFBRyxDQTdtRnNCO0FBOG1GN0JDLE1BQUksRUFBRyxDQTltRnNCO0FBK21GN0JDLE9BQUssRUFBRyxDQS9tRnFCO0FBZ25GN0JDLFVBQVEsRUFBRyxDQWhuRmtCO0FBaW5GN0JDLFdBQVMsRUFBRyxDQWpuRmlCO0FBa25GN0JDLFFBQU0sRUFBRyxDQWxuRm9CO0FBbW5GN0JDLFdBQVMsRUFBRyxDQW5uRmlCO0FBb25GN0JDLFdBQVMsRUFBRyxDQXBuRmlCO0FBcW5GN0JDLE1BQUksRUFBRyxDQXJuRnNCO0FBc25GN0JDLFNBQU8sRUFBRyxDQXRuRm1CO0FBdW5GN0JDLFdBQVMsRUFBRyxDQXZuRmlCO0FBd25GN0JDLFNBQU8sRUFBRyxDQXhuRm1CO0FBeW5GN0JDLE1BQUksRUFBRyxDQXpuRnNCO0FBMG5GN0JDLE1BQUksRUFBRyxDQTFuRnNCO0FBMm5GN0JDLE9BQUssRUFBRyxDQTNuRnFCO0FBNG5GN0JDLFFBQU0sRUFBRyxDQTVuRm9CO0FBNm5GN0JDLE1BQUksRUFBRyxDQTduRnNCO0FBOG5GN0JDLEtBQUcsRUFBRyxDQTluRnVCO0FBK25GN0JDLFNBQU8sRUFBRyxDQS9uRm1CO0FBZ29GN0JDLE9BQUssRUFBRyxDQWhvRnFCO0FBaW9GN0JDLE1BQUksRUFBRyxDQWpvRnNCO0FBa29GN0JDLE9BQUssRUFBRyxDQWxvRnFCO0FBbW9GN0JDLFlBQVUsRUFBRyxDQW5vRmdCO0FBb29GN0JDLE1BQUksRUFBRyxDQXBvRnNCO0FBcW9GN0JDLFFBQU0sRUFBRyxDQXJvRm9CO0FBc29GN0JDLFNBQU8sRUFBRyxDQXRvRm1CO0FBdW9GN0JDLE9BQUssRUFBRyxDQXZvRnFCO0FBd29GN0JDLFdBQVMsRUFBRyxDQXhvRmlCO0FBeW9GN0JDLE9BQUssRUFBRyxDQXpvRnFCO0FBMG9GN0JDLE1BQUksRUFBRyxDQTFvRnNCO0FBMm9GN0JDLE9BQUssRUFBRyxDQTNvRnFCO0FBNG9GN0JDLE1BQUksRUFBRyxDQTVvRnNCO0FBNm9GN0JDLE9BQUssRUFBRyxDQTdvRnFCO0FBOG9GN0JDLE9BQUssRUFBRyxDQTlvRnFCO0FBK29GN0JDLFVBQVEsRUFBRyxDQS9vRmtCO0FBZ3BGN0JDLE9BQUssRUFBRyxDQWhwRnFCO0FBaXBGN0JDLFFBQU0sRUFBRyxDQWpwRm9CO0FBa3BGN0JDLE1BQUksRUFBRyxDQWxwRnNCO0FBbXBGN0JDLE9BQUssRUFBRyxDQW5wRnFCO0FBb3BGN0JDLFFBQU0sRUFBRyxDQXBwRm9CO0FBcXBGN0JDLFNBQU8sRUFBRyxDQXJwRm1CO0FBc3BGN0JDLFVBQVEsRUFBRyxDQXRwRmtCO0FBdXBGN0JDLFFBQU0sRUFBRyxDQXZwRm9CO0FBd3BGN0JDLFVBQVEsRUFBRyxDQXhwRmtCO0FBeXBGN0JDLE9BQUssRUFBRyxDQXpwRnFCO0FBMHBGN0JDLFFBQU0sRUFBRyxDQTFwRm9CO0FBMnBGN0JDLFNBQU8sRUFBRyxDQTNwRm1CO0FBNHBGN0JDLFlBQVUsRUFBRyxDQTVwRmdCO0FBNnBGN0JDLE9BQUssRUFBRyxDQTdwRnFCO0FBOHBGN0JDLE1BQUksRUFBRyxDQTlwRnNCO0FBK3BGN0JDLFFBQU0sRUFBRyxDQS9wRm9CO0FBZ3FGN0JDLEtBQUcsRUFBRyxDQWhxRnVCO0FBaXFGN0JDLE9BQUssRUFBRyxDQWpxRnFCO0FBa3FGN0JDLE1BQUksRUFBRyxDQWxxRnNCO0FBbXFGN0JDLE1BQUksRUFBRyxDQW5xRnNCO0FBb3FGN0JDLEtBQUcsRUFBRyxDQXBxRnVCO0FBcXFGN0JDLE1BQUksRUFBRyxDQXJxRnNCO0FBc3FGN0JDLE9BQUssRUFBRyxDQXRxRnFCO0FBdXFGN0JDLFFBQU0sRUFBRyxDQXZxRm9CO0FBd3FGN0JDLE9BQUssRUFBRyxDQXhxRnFCO0FBeXFGN0JDLElBQUUsRUFBRyxDQXpxRndCO0FBMHFGN0JDLFNBQU8sRUFBRyxDQTFxRm1CO0FBMnFGN0JDLE9BQUssRUFBRyxDQTNxRnFCO0FBNHFGN0JDLEtBQUcsRUFBRyxDQTVxRnVCO0FBNnFGN0JDLFVBQVEsRUFBRyxDQTdxRmtCO0FBOHFGN0JDLFFBQU0sRUFBRyxDQTlxRm9CO0FBK3FGN0JDLFVBQVEsRUFBRyxDQS9xRmtCO0FBZ3JGN0JDLE1BQUksRUFBRyxDQWhyRnNCO0FBaXJGN0JDLFFBQU0sRUFBRyxDQWpyRm9CO0FBa3JGN0JDLFNBQU8sRUFBRyxDQWxyRm1CO0FBbXJGN0JDLEtBQUcsRUFBRyxDQW5yRnVCO0FBb3JGN0JDLE1BQUksRUFBRyxDQXByRnNCO0FBcXJGN0JDLE9BQUssRUFBRyxDQXJyRnFCO0FBc3JGN0JDLEtBQUcsRUFBRyxDQXRyRnVCO0FBdXJGN0JDLE9BQUssRUFBRyxDQXZyRnFCO0FBd3JGN0JDLE1BQUksRUFBRyxDQXhyRnNCO0FBeXJGN0JDLE9BQUssRUFBRyxDQXpyRnFCO0FBMHJGN0JDLFNBQU8sRUFBRyxDQTFyRm1CO0FBMnJGN0JDLE9BQUssRUFBRyxDQTNyRnFCO0FBNHJGN0JDLE9BQUssRUFBRyxDQTVyRnFCO0FBNnJGN0JDLE1BQUksRUFBRyxDQTdyRnNCO0FBOHJGN0JDLFNBQU8sRUFBRyxDQTlyRm1CO0FBK3JGN0JDLFlBQVUsRUFBRyxDQS9yRmdCO0FBZ3NGN0JDLFFBQU0sRUFBRyxDQWhzRm9CO0FBaXNGN0JDLFNBQU8sRUFBRyxDQWpzRm1CO0FBa3NGN0JDLE9BQUssRUFBRyxDQWxzRnFCO0FBbXNGN0JDLE1BQUksRUFBRyxDQW5zRnNCO0FBb3NGN0JDLEtBQUcsRUFBRyxDQXBzRnVCO0FBcXNGN0JDLE9BQUssRUFBRyxDQXJzRnFCO0FBc3NGN0JDLE9BQUssRUFBRyxDQXRzRnFCO0FBdXNGN0JDLE9BQUssRUFBRyxDQXZzRnFCO0FBd3NGN0JDLFdBQVMsRUFBRyxDQXhzRmlCO0FBeXNGN0JDLGFBQVcsRUFBRyxDQXpzRmU7QUEwc0Y3QkMsU0FBTyxFQUFHLENBMXNGbUI7QUEyc0Y3QkMsU0FBTyxFQUFHLENBM3NGbUI7QUE0c0Y3QkMsT0FBSyxFQUFHLENBNXNGcUI7QUE2c0Y3QkMsT0FBSyxFQUFHLENBN3NGcUI7QUE4c0Y3QkMsVUFBUSxFQUFHLENBOXNGa0I7QUErc0Y3QkMsVUFBUSxFQUFHLENBL3NGa0I7QUFndEY3QkMsV0FBUyxFQUFHLENBaHRGaUI7QUFpdEY3QkMsZ0JBQWMsRUFBRyxDQWp0Rlk7QUFrdEY3QkMsWUFBVSxFQUFHLENBbHRGZ0I7QUFtdEY3QkMsV0FBUyxFQUFHLENBbnRGaUI7QUFvdEY3QkMsZ0JBQWMsRUFBRyxDQXB0Rlk7QUFxdEY3QkMsUUFBTSxFQUFHLENBcnRGb0I7QUFzdEY3QkMsT0FBSyxFQUFHLENBdHRGcUI7QUF1dEY3QkMsV0FBUyxFQUFHLENBdnRGaUI7QUF3dEY3QkMsUUFBTSxFQUFHLENBeHRGb0I7QUF5dEY3QkMsTUFBSSxFQUFHLENBenRGc0I7QUEwdEY3QkMsWUFBVSxFQUFHLENBMXRGZ0I7QUEydEY3QkMsT0FBSyxFQUFHLENBM3RGcUI7QUE0dEY3QkMsT0FBSyxFQUFHLENBNXRGcUI7QUE2dEY3QkMsT0FBSyxFQUFHLENBN3RGcUI7QUE4dEY3QkMsT0FBSyxFQUFHLENBOXRGcUI7QUErdEY3QkMsTUFBSSxFQUFHLENBL3RGc0I7QUFndUY3QkMsT0FBSyxFQUFHLENBaHVGcUI7QUFpdUY3QkMsU0FBTyxFQUFHLENBanVGbUI7QUFrdUY3QkMsT0FBSyxFQUFHLENBbHVGcUI7QUFtdUY3QkMsTUFBSSxFQUFHLENBbnVGc0I7QUFvdUY3QkMsT0FBSyxFQUFHLENBcHVGcUI7QUFxdUY3QkMsT0FBSyxFQUFHLENBcnVGcUI7QUFzdUY3QkMsT0FBSyxFQUFHLENBdHVGcUI7QUF1dUY3QkMsS0FBRyxFQUFHLENBdnVGdUI7QUF3dUY3QkMsTUFBSSxFQUFHLENBeHVGc0I7QUF5dUY3QkMsUUFBTSxFQUFHLENBenVGb0I7QUEwdUY3QkMsTUFBSSxFQUFHLENBMXVGc0I7QUEydUY3QkMsSUFBRSxFQUFHLENBM3VGd0I7QUE0dUY3QkMsUUFBTSxFQUFHLENBNXVGb0I7QUE2dUY3QkMsUUFBTSxFQUFHLENBN3VGb0I7QUE4dUY3QkMsT0FBSyxFQUFHLENBOXVGcUI7QUErdUY3QkMsTUFBSSxFQUFHLENBL3VGc0I7QUFndkY3QkMsS0FBRyxFQUFHLENBaHZGdUI7QUFpdkY3QkMsTUFBSSxFQUFHLENBanZGc0I7QUFrdkY3QkMsU0FBTyxFQUFHLENBbHZGbUI7QUFtdkY3QkMsV0FBUyxFQUFHLENBbnZGaUI7QUFvdkY3QkMsTUFBSSxFQUFHLENBcHZGc0I7QUFxdkY3QkMsVUFBUSxFQUFHLENBcnZGa0I7QUFzdkY3QkMsWUFBVSxFQUFHLENBdHZGZ0I7QUF1dkY3QkMsUUFBTSxFQUFHLENBdnZGb0I7QUF3dkY3QkMsT0FBSyxFQUFHLENBeHZGcUI7QUF5dkY3QkMsT0FBSyxFQUFHLENBenZGcUI7QUEwdkY3QkMsU0FBTyxFQUFHLENBMXZGbUI7QUEydkY3QkMsWUFBVSxFQUFHLENBM3ZGZ0I7QUE0dkY3QkMsZUFBYSxFQUFHLENBNXZGYTtBQTZ2RjdCQyxlQUFhLEVBQUcsQ0E3dkZhO0FBOHZGN0JDLFNBQU8sRUFBRyxDQTl2Rm1CO0FBK3ZGN0JDLE9BQUssRUFBRyxDQS92RnFCO0FBZ3dGN0JDLFFBQU0sRUFBRyxDQWh3Rm9CO0FBaXdGN0JDLE1BQUksRUFBRyxDQWp3RnNCO0FBa3dGN0JDLFFBQU0sRUFBRyxDQWx3Rm9CO0FBbXdGN0JDLFdBQVMsRUFBRyxDQW53RmlCO0FBb3dGN0JDLFVBQVEsRUFBRyxDQXB3RmtCO0FBcXdGN0JDLFlBQVUsRUFBRyxDQXJ3RmdCO0FBc3dGN0JDLFNBQU8sRUFBRyxDQXR3Rm1CO0FBdXdGN0JDLFFBQU0sRUFBRyxDQXZ3Rm9CO0FBd3dGN0JDLFFBQU0sRUFBRyxDQXh3Rm9CO0FBeXdGN0JDLFVBQVEsRUFBRyxDQXp3RmtCO0FBMHdGN0JDLE9BQUssRUFBRyxDQTF3RnFCO0FBMndGN0JDLFNBQU8sRUFBRyxDQTN3Rm1CO0FBNHdGN0JDLElBQUUsRUFBRyxDQTV3RndCO0FBNndGN0JDLE1BQUksRUFBRyxDQTd3RnNCO0FBOHdGN0JDLE9BQUssRUFBRyxDQTl3RnFCO0FBK3dGN0JDLE9BQUssRUFBRyxDQS93RnFCO0FBZ3hGN0JDLE1BQUksRUFBRyxDQWh4RnNCO0FBaXhGN0JDLElBQUUsRUFBRyxDQWp4RndCO0FBa3hGN0JDLEtBQUcsRUFBRyxDQWx4RnVCO0FBbXhGN0JDLE1BQUksRUFBRyxDQW54RnNCO0FBb3hGN0JDLFFBQU0sRUFBRyxDQXB4Rm9CO0FBcXhGN0JDLE1BQUksRUFBRyxDQXJ4RnNCO0FBc3hGN0JDLE9BQUssRUFBRyxDQXR4RnFCO0FBdXhGN0JDLFNBQU8sRUFBRyxDQXZ4Rm1CO0FBd3hGN0JDLFNBQU8sRUFBRyxDQXh4Rm1CO0FBeXhGN0JDLFVBQVEsRUFBRyxDQXp4RmtCO0FBMHhGN0JDLFFBQU0sRUFBRyxDQTF4Rm9CO0FBMnhGN0JDLFVBQVEsRUFBRyxDQTN4RmtCO0FBNHhGN0JDLE9BQUssRUFBRyxDQTV4RnFCO0FBNnhGN0JDLFVBQVEsRUFBRyxDQTd4RmtCO0FBOHhGN0JDLFdBQVMsRUFBRyxDQTl4RmlCO0FBK3hGN0JDLFNBQU8sRUFBRyxDQS94Rm1CO0FBZ3lGN0JDLFNBQU8sRUFBRyxDQWh5Rm1CO0FBaXlGN0JDLE1BQUksRUFBRyxDQWp5RnNCO0FBa3lGN0JDLE1BQUksRUFBRyxDQWx5RnNCO0FBbXlGN0JDLFdBQVMsRUFBRyxDQW55RmlCO0FBb3lGN0JDLFNBQU8sRUFBRyxDQXB5Rm1CO0FBcXlGN0JDLFNBQU8sRUFBRyxDQXJ5Rm1CO0FBc3lGN0JDLFNBQU8sRUFBRyxDQXR5Rm1CO0FBdXlGN0JDLFFBQU0sRUFBRyxDQXZ5Rm9CO0FBd3lGN0JDLE1BQUksRUFBRyxDQXh5RnNCO0FBeXlGN0JDLFFBQU0sRUFBRyxDQXp5Rm9CO0FBMHlGN0JDLFNBQU8sRUFBRyxDQTF5Rm1CO0FBMnlGN0JDLEtBQUcsRUFBRyxDQTN5RnVCO0FBNHlGN0JDLFFBQU0sRUFBRyxDQTV5Rm9CO0FBNnlGN0JDLFNBQU8sRUFBRyxDQTd5Rm1CO0FBOHlGN0JDLE9BQUssRUFBRyxDQTl5RnFCO0FBK3lGN0JDLE1BQUksRUFBRyxDQS95RnNCO0FBZ3pGN0JDLFFBQU0sRUFBRyxDQWh6Rm9CO0FBaXpGN0JDLFNBQU8sRUFBRyxDQWp6Rm1CO0FBa3pGN0JDLFNBQU8sRUFBRyxDQWx6Rm1CO0FBbXpGN0JDLFdBQVMsRUFBRyxDQW56RmlCO0FBb3pGN0JDLFVBQVEsRUFBRyxDQXB6RmtCO0FBcXpGN0JDLFNBQU8sRUFBRyxDQXJ6Rm1CO0FBc3pGN0JDLFdBQVMsRUFBRyxDQXR6RmlCO0FBdXpGN0JDLFFBQU0sRUFBRyxDQXZ6Rm9CO0FBd3pGN0JDLE9BQUssRUFBRyxDQXh6RnFCO0FBeXpGN0JDLFNBQU8sRUFBRyxDQXp6Rm1CO0FBMHpGN0JDLFFBQU0sRUFBRyxDQTF6Rm9CO0FBMnpGN0JDLE9BQUssRUFBRyxDQTN6RnFCO0FBNHpGN0JDLFNBQU8sRUFBRyxDQTV6Rm1CO0FBNnpGN0JDLFFBQU0sRUFBRyxDQTd6Rm9CO0FBOHpGN0JDLE9BQUssRUFBRyxDQTl6RnFCO0FBK3pGN0JDLE9BQUssRUFBRyxDQS96RnFCO0FBZzBGN0JDLFFBQU0sRUFBRyxDQWgwRm9CO0FBaTBGN0JDLFdBQVMsRUFBRyxDQWowRmlCO0FBazBGN0JDLE1BQUksRUFBRyxDQWwwRnNCO0FBbTBGN0JDLE9BQUssRUFBRyxDQW4wRnFCO0FBbzBGN0JDLElBQUUsRUFBRyxDQXAwRndCO0FBcTBGN0JDLFlBQVUsRUFBRyxDQXIwRmdCO0FBczBGN0JDLE1BQUksRUFBRyxDQXQwRnNCO0FBdTBGN0JDLE1BQUksRUFBRyxDQXYwRnNCO0FBdzBGN0JDLE1BQUksRUFBRyxDQXgwRnNCO0FBeTBGN0JDLE1BQUksRUFBRyxDQXowRnNCO0FBMDBGN0JDLE1BQUksRUFBRyxDQTEwRnNCO0FBMjBGN0JDLFFBQU0sRUFBRyxDQTMwRm9CO0FBNDBGN0JDLE1BQUksRUFBRyxDQTUwRnNCO0FBNjBGN0JDLEtBQUcsRUFBRyxDQTcwRnVCO0FBODBGN0JDLE1BQUksRUFBRyxDQTkwRnNCO0FBKzBGN0JDLE1BQUksRUFBRyxDQS8wRnNCO0FBZzFGN0JDLFNBQU8sRUFBRyxDQWgxRm1CO0FBaTFGN0JDLE1BQUksRUFBRyxDQWoxRnNCO0FBazFGN0JDLE9BQUssRUFBRyxDQWwxRnFCO0FBbTFGN0JDLE9BQUssRUFBRyxDQW4xRnFCO0FBbzFGN0JDLE9BQUssRUFBRyxDQXAxRnFCO0FBcTFGN0JDLE1BQUksRUFBRyxDQXIxRnNCO0FBczFGN0JDLEtBQUcsRUFBRyxDQXQxRnVCO0FBdTFGN0JDLElBQUUsRUFBRyxDQXYxRndCO0FBdzFGN0JDLE1BQUksRUFBRyxDQXgxRnNCO0FBeTFGN0JDLFFBQU0sRUFBRyxDQXoxRm9CO0FBMDFGN0JDLFNBQU8sRUFBRyxDQTExRm1CO0FBMjFGN0JDLFFBQU0sRUFBRyxDQTMxRm9CO0FBNDFGN0JDLE1BQUksRUFBRyxDQTUxRnNCO0FBNjFGN0JDLFNBQU8sRUFBRyxDQTcxRm1CO0FBODFGN0JDLFNBQU8sRUFBRyxDQTkxRm1CO0FBKzFGN0JDLE1BQUksRUFBRyxDQS8xRnNCO0FBZzJGN0JDLFNBQU8sRUFBRyxDQWgyRm1CO0FBaTJGN0JDLFFBQU0sRUFBRyxDQWoyRm9CO0FBazJGN0JDLE9BQUssRUFBRyxDQWwyRnFCO0FBbTJGN0JDLFFBQU0sRUFBRyxDQW4yRm9CO0FBbzJGN0JDLFNBQU8sRUFBRyxDQXAyRm1CO0FBcTJGN0JDLFNBQU8sRUFBRyxDQXIyRm1CO0FBczJGN0JDLE1BQUksRUFBRyxDQXQyRnNCO0FBdTJGN0JDLE1BQUksRUFBRyxDQXYyRnNCO0FBdzJGN0JDLFNBQU8sRUFBRyxDQXgyRm1CO0FBeTJGN0JDLEtBQUcsRUFBRyxDQXoyRnVCO0FBMDJGN0JDLE1BQUksRUFBRyxDQTEyRnNCO0FBMjJGN0JDLFVBQVEsRUFBRyxDQTMyRmtCO0FBNDJGN0JDLE9BQUssRUFBRyxDQTUyRnFCO0FBNjJGN0JDLE1BQUksRUFBRyxDQTcyRnNCO0FBODJGN0JDLFVBQVEsRUFBRyxDQTkyRmtCO0FBKzJGN0JDLE9BQUssRUFBRyxDQS8yRnFCO0FBZzNGN0JDLFNBQU8sRUFBRyxDQWgzRm1CO0FBaTNGN0JDLFNBQU8sRUFBRyxDQWozRm1CO0FBazNGN0JDLE9BQUssRUFBRyxDQWwzRnFCO0FBbTNGN0JDLE9BQUssRUFBRyxDQW4zRnFCO0FBbzNGN0JDLFNBQU8sRUFBRyxDQXAzRm1CO0FBcTNGN0JDLE9BQUssRUFBRyxDQXIzRnFCO0FBczNGN0JDLEtBQUcsRUFBRyxDQXQzRnVCO0FBdTNGN0JDLE9BQUssRUFBRyxDQXYzRnFCO0FBdzNGN0JDLE1BQUksRUFBRyxDQXgzRnNCO0FBeTNGN0JDLE9BQUssRUFBRyxDQXozRnFCO0FBMDNGN0JDLEtBQUcsRUFBRyxDQTEzRnVCO0FBMjNGN0JDLE1BQUksRUFBRyxDQTMzRnNCO0FBNDNGN0JDLFFBQU0sRUFBRyxDQTUzRm9CO0FBNjNGN0JDLFlBQVUsRUFBRyxDQTczRmdCO0FBODNGN0JDLE1BQUksRUFBRyxDQTkzRnNCO0FBKzNGN0JDLE1BQUksRUFBRyxDQS8zRnNCO0FBZzRGN0JDLE1BQUksRUFBRyxDQWg0RnNCO0FBaTRGN0JDLFNBQU8sRUFBRyxDQWo0Rm1CO0FBazRGN0JDLEtBQUcsRUFBRyxDQWw0RnVCO0FBbTRGN0JDLE1BQUksRUFBRyxDQW40RnNCO0FBbzRGN0JDLFFBQU0sRUFBRyxDQXA0Rm9CO0FBcTRGN0JDLE1BQUksRUFBRyxDQXI0RnNCO0FBczRGN0JDLE1BQUksRUFBRyxDQXQ0RnNCO0FBdTRGN0JDLFFBQU0sRUFBRyxDQXY0Rm9CO0FBdzRGN0JDLFFBQU0sRUFBRyxDQXg0Rm9CO0FBeTRGN0JDLE1BQUksRUFBRyxDQXo0RnNCO0FBMDRGN0JDLE1BQUksRUFBRyxDQTE0RnNCO0FBMjRGN0JDLFFBQU0sRUFBRyxDQTM0Rm9CO0FBNDRGN0JDLE1BQUksRUFBRyxDQTU0RnNCO0FBNjRGN0JDLE1BQUksRUFBRyxDQTc0RnNCO0FBODRGN0JDLE1BQUksRUFBRyxDQTk0RnNCO0FBKzRGN0JDLFVBQVEsRUFBRyxDQS80RmtCO0FBZzVGN0JDLFFBQU0sRUFBRyxDQWg1Rm9CO0FBaTVGN0JDLFNBQU8sRUFBRyxDQWo1Rm1CO0FBazVGN0JDLFNBQU8sRUFBRyxDQWw1Rm1CO0FBbTVGN0JDLE9BQUssRUFBRyxDQW41RnFCO0FBbzVGN0JDLFFBQU0sRUFBRyxDQXA1Rm9CO0FBcTVGN0JDLFdBQVMsRUFBRyxDQXI1RmlCO0FBczVGN0JDLE1BQUksRUFBRyxDQXQ1RnNCO0FBdTVGN0JDLFFBQU0sRUFBRyxDQXY1Rm9CO0FBdzVGN0JDLE1BQUksRUFBRyxDQXg1RnNCO0FBeTVGN0JDLE1BQUksRUFBRyxDQXo1RnNCO0FBMDVGN0JDLFFBQU0sRUFBRyxDQTE1Rm9CO0FBMjVGN0JDLFNBQU8sRUFBRyxDQTM1Rm1CO0FBNDVGN0JDLE9BQUssRUFBRyxDQTU1RnFCO0FBNjVGN0JDLFVBQVEsRUFBRyxDQTc1RmtCO0FBODVGN0JDLE9BQUssRUFBRyxDQTk1RnFCO0FBKzVGN0JDLFNBQU8sRUFBRyxDQS81Rm1CO0FBZzZGN0JDLE9BQUssRUFBRyxDQWg2RnFCO0FBaTZGN0JDLE9BQUssRUFBRyxDQWo2RnFCO0FBazZGN0JDLE9BQUssRUFBRyxDQWw2RnFCO0FBbTZGN0JDLE9BQUssRUFBRyxDQW42RnFCO0FBbzZGN0JDLE1BQUksRUFBRyxDQXA2RnNCO0FBcTZGN0JDLE9BQUssRUFBRyxDQXI2RnFCO0FBczZGN0JDLFFBQU0sRUFBRyxDQXQ2Rm9CO0FBdTZGN0JDLFNBQU8sRUFBRyxDQXY2Rm1CO0FBdzZGN0JDLE9BQUssRUFBRyxDQXg2RnFCO0FBeTZGN0JDLE1BQUksRUFBRyxDQXo2RnNCO0FBMDZGN0JDLE1BQUksRUFBRyxDQTE2RnNCO0FBMjZGN0JDLE1BQUksRUFBRyxDQTM2RnNCO0FBNDZGN0JDLE1BQUksRUFBRyxDQTU2RnNCO0FBNjZGN0JDLFFBQU0sRUFBRyxDQTc2Rm9CO0FBODZGN0JDLEtBQUcsRUFBRyxDQTk2RnVCO0FBKzZGN0JDLFdBQVMsRUFBRyxDQS82RmlCO0FBZzdGN0JDLEtBQUcsRUFBRyxDQWg3RnVCO0FBaTdGN0JDLE9BQUssRUFBRyxDQWo3RnFCO0FBazdGN0JDLEtBQUcsRUFBRyxDQWw3RnVCO0FBbTdGN0JDLE9BQUssRUFBRyxDQW43RnFCO0FBbzdGN0JDLE1BQUksRUFBRyxDQXA3RnNCO0FBcTdGN0JDLE9BQUssRUFBRyxDQXI3RnFCO0FBczdGN0JDLFVBQVEsRUFBRyxDQXQ3RmtCO0FBdTdGN0JDLE9BQUssRUFBRyxDQXY3RnFCO0FBdzdGN0JDLE1BQUksRUFBRztBQXg3RnNCLENBQTFCLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNIUCxNQUFNQyxLQUFLLEdBQUd2d0IsbUJBQU8sQ0FBQyxFQUFELENBQXJCOztBQUNBLE1BQU13d0IsRUFBRSxHQUFHeHdCLG1CQUFPLENBQUMsRUFBRCxDQUFsQjs7QUFDQSxNQUFNeXdCLE1BQU0sR0FBR3p3QixtQkFBTyxDQUFDLEVBQUQsQ0FBdEI7O0FBRUEsTUFBTTB3QixlQUFlLEdBQUcsS0FBeEI7QUFDQSxJQUFJQyxTQUFKO0FBQ0EsSUFBSUMsY0FBSjtBQUNBLElBQUlDLGtCQUFKO0FBQ0EsSUFBSUMsZ0JBQUo7QUFFQSxJQUFJQyxrQkFBa0IsR0FBRyxLQUF6QjtBQUNBLElBQUlDLGlCQUFpQixHQUFHLENBQXhCO0FBQ0EsSUFBSUMsZ0JBQWdCLEdBQUcsS0FBdkI7O0FBRUEsZUFBZUMsYUFBZixHQUErQjtBQUU3QixNQUFJLENBQUNILGtCQUFMLEVBQXlCO0FBQ3ZCQSxzQkFBa0IsR0FBRyxJQUFyQjtBQUVBLFFBQUlJLE9BQU8sR0FBRyxJQUFJQyxJQUFKLEVBQWQsQ0FIdUIsQ0FLdkI7O0FBQ0FKLHFCQUFpQixHQUFHLE1BQU1QLE1BQU0sQ0FBQ1ksU0FBUCxDQUFpQixhQUFqQixFQUFnQ0YsT0FBTyxHQUFHLFFBQTFDLENBQTFCO0FBRUFHLFdBQU8sQ0FBQ0MsR0FBUixDQUFZLHdDQUFzQ1AsaUJBQXRDLEdBQXdELFVBQXhELEdBQW1FUCxNQUFNLENBQUNlLE1BQXRGO0FBQ0Q7O0FBRUQsTUFBSVIsaUJBQWlCLElBQUlOLGVBQXpCLEVBQTBDO0FBQ3hDLFFBQUksQ0FBQ08sZ0JBQUwsRUFBdUI7QUFDckJLLGFBQU8sQ0FBQ3hpRSxLQUFSLENBQWMsOEZBQTRGa2lFLGlCQUE1RixHQUE4RyxNQUE5RyxHQUFxSE4sZUFBckgsR0FBcUksSUFBbko7QUFDRDs7QUFDRE8sb0JBQWdCLEdBQUcsSUFBbkI7QUFDQSxXQUFPLEtBQVA7QUFDRCxHQU5ELE1BTU87QUFDTEQscUJBQWlCO0FBQ2pCLFdBQU8sSUFBUDtBQUNEO0FBQ0Y7O0FBRU0sZUFBZVMsV0FBZixDQUNMQyxVQURLLEVBRUxDLGVBRkssRUFHTEMsbUJBSEssRUFJTEMsaUJBSkssRUFLSDtBQUVGbEIsV0FBUyxHQUFHZSxVQUFaO0FBQ0FkLGdCQUFjLEdBQUdlLGVBQWpCO0FBQ0FkLG9CQUFrQixHQUFHZSxtQkFBckI7QUFDQWQsa0JBQWdCLEdBQUdlLGlCQUFuQjs7QUFHQSxNQUFJLENBQUNyQixFQUFFLENBQUNzQixVQUFILENBQWMsYUFBZCxDQUFMLEVBQWtDO0FBQ2hDdEIsTUFBRSxDQUFDdUIsU0FBSCxDQUFhLGFBQWIsRUFBNEI7QUFBRUMsZUFBUyxFQUFFO0FBQWIsS0FBNUI7QUFDRDs7QUFDRCxNQUFJLENBQUN4QixFQUFFLENBQUNzQixVQUFILENBQWMsZ0JBQWQsQ0FBTCxFQUFxQztBQUNuQ3RCLE1BQUUsQ0FBQ3VCLFNBQUgsQ0FBYSxnQkFBYjtBQUNEO0FBRUY7QUFFTSxTQUFTRSxtQkFBVCxDQUE2QnR5RSxJQUE3QixFQUFtQztBQUV4QztBQUNBLE1BQUl1eUUsT0FBTyxHQUFHLEVBQWQ7QUFDQSxNQUFJM3dCLE1BQU0sR0FBRztBQUNYdm1DLGFBQVMsRUFBQ3JiLElBQUksQ0FBQ3FiLFNBREo7QUFFWG0zRCxpQkFBYSxFQUFDeHlFLElBQUksQ0FBQ3d5RSxhQUZSO0FBR1hELFdBSFc7QUFHRjFpRSxPQUFHLEVBQUM7QUFIRixHQUFiO0FBTUEsTUFBSTdQLElBQUksQ0FBQ3V5RSxPQUFULEVBQWtCdnlFLElBQUksQ0FBQ3V5RSxPQUFMLENBQWE5NEMsR0FBYixDQUFpQmc1QyxHQUFHLElBQUk7QUFDeEMsUUFBSUMsZUFBZSxHQUFHLEVBQXRCO0FBQ0EsUUFBSTd3RSxVQUFVLEdBQUc7QUFDZjh3RSxrQkFBWSxFQUFDRixHQUFHLENBQUNFLFlBREY7QUFFZkMsZ0JBQVUsRUFBQ0Y7QUFGSSxLQUFqQixDQUZ3QyxDQU94Qzs7QUFDQSxVQUFNRyxJQUFJLEdBQUdDLE1BQU0sQ0FBQ0QsSUFBUCxDQUFZSixHQUFaLENBQWI7QUFDQUksUUFBSSxDQUFDcDVDLEdBQUwsQ0FBUzNJLEdBQUcsSUFBSTtBQUVkO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBTWlpRCxLQUFLLEdBQUcsV0FBZCxDQU5jLENBUWQ7O0FBQ0EsWUFBTWpoRCxLQUFLLEdBQUdoQixHQUFHLENBQUNraEMsS0FBSixDQUFVK2dCLEtBQVYsRUFBaUJsakQsSUFBakIsQ0FBc0IsR0FBdEIsRUFBMkJtakQsV0FBM0IsRUFBZCxDQVRjLENBV2Q7QUFDQTs7QUFDQSxZQUFNak0sS0FBSyxHQUFHMEwsR0FBRyxDQUFDM2hELEdBQUQsQ0FBakIsQ0FiYyxDQWVkOztBQUNBLFVBQUltaUQsTUFBTSxHQUFHO0FBQ1huaEQsYUFEVztBQUVYaTFDLGFBRlc7QUFHWG1NLGdCQUFRLEVBQUUsT0FBT25NLEtBQVAsS0FBaUIsUUFBakIsR0FBNEIsSUFBNUIsR0FBbUM7QUFIbEMsT0FBYjtBQU1BMkwscUJBQWUsQ0FBQ3Q1QixJQUFoQixDQUFxQjY1QixNQUFyQjtBQUNELEtBdkJEO0FBeUJBVixXQUFPLENBQUNuNUIsSUFBUixDQUFhdjNDLFVBQWI7QUFDRCxHQW5DaUI7QUFxQ2xCLFNBQU8rL0MsTUFBUDtBQUNEO0FBRU0sZUFBZXV4QixjQUFmLENBQThCeEUsSUFBOUIsRUFBb0N5RSxRQUFwQyxFQUE4QztBQUVuRCxRQUFNQyxNQUFNLEdBQUksZUFBYzFFLElBQUssRUFBbkM7O0FBRUEsTUFBSWtDLEVBQUUsQ0FBQ3NCLFVBQUgsQ0FBY2tCLE1BQWQsQ0FBSixFQUEyQjtBQUV6QjtBQUNBLFFBQUlDLEtBQUssR0FBR3pDLEVBQUUsQ0FBQzBDLFlBQUgsQ0FBZ0JGLE1BQWhCLEVBQXdCRyxRQUF4QixFQUFaOztBQUNBLFFBQUk7QUFDRixVQUFJeHpFLElBQUksR0FBR3l6RSxJQUFJLENBQUNDLEtBQUwsQ0FBV0osS0FBWCxDQUFYOztBQUVBLFVBQUlGLFFBQUosRUFBYztBQUNaLGVBQU9wekUsSUFBUDtBQUNELE9BRkQsTUFFTztBQUNMLFlBQUk0aEQsTUFBTSxHQUFHMHdCLG1CQUFtQixDQUFDdHlFLElBQUQsQ0FBaEM7QUFDQSxjQUFNMnpFLEtBQUssR0FBR0YsSUFBSSxDQUFDRyxTQUFMLENBQWVoeUIsTUFBZixDQUFkLENBRkssQ0FFeUM7O0FBQzlDLGVBQU8reEIsS0FBUDtBQUNEO0FBRUYsS0FYRCxDQVdFLE9BQU9FLENBQVAsRUFBVTtBQUNWbEMsYUFBTyxDQUFDekgsSUFBUixDQUFhLDJCQUF5Qm1KLE1BQXRDLEVBQThDUSxDQUE5QztBQUNBaEQsUUFBRSxDQUFDaUQsVUFBSCxDQUFjVCxNQUFkO0FBQ0Q7QUFDRjs7QUFFRCxNQUFJN2MsT0FBTyxHQUFHLE1BQU0rYSxhQUFhLEVBQWpDOztBQUNBLE1BQUksQ0FBQy9hLE9BQUwsRUFBYztBQUNaLFdBQU8sSUFBUDtBQUNELEdBNUJrRCxDQThCbkQ7OztBQUNBLFFBQU1uVixRQUFRLEdBQUcsTUFBTXV2QixLQUFLLENBQUM7QUFDM0IsY0FBUyxLQURrQjtBQUUzQixXQUFPLDJDQUEwQ2pDLElBQUssRUFGM0I7QUFHM0IsZUFBVTtBQUNWLHNCQUFlLDBCQURMO0FBRVYseUJBQWtCLDJCQUZSO0FBR1Ysd0JBQWlCMTRCLE9BQU8sQ0FBQzg5QixHQUFSLENBQVlDO0FBSG5CO0FBSGlCLEdBQUQsQ0FBNUI7QUFVQTNDLG1CQUFpQjtBQUVqQixRQUFNNEMsS0FBSyxHQUFHUixJQUFJLENBQUNHLFNBQUwsQ0FBZXZ5QixRQUFRLENBQUNyaEQsSUFBeEIsQ0FBZCxDQTNDbUQsQ0EyQ0w7O0FBQzlDNndFLElBQUUsQ0FBQ3FELFNBQUgsQ0FBYWIsTUFBYixFQUFxQlksS0FBckIsRUFBNkJFLEdBQUQsSUFBUztBQUNuQyxRQUFJQSxHQUFKLEVBQVM7QUFDUHhDLGFBQU8sQ0FBQ3hpRSxLQUFSLENBQWMsdUJBQXFCa2tFLE1BQXJCLEdBQTRCLGFBQTVCLEdBQTBDRCxRQUExQyxHQUFtRCxtQkFBbkQsR0FBdUVlLEdBQXZFLEdBQTJFLElBQXpGO0FBQ0QsS0FGRCxNQUVPO0FBQ0x4QyxhQUFPLENBQUNDLEdBQVIsQ0FBWSx1QkFBcUJ5QixNQUFyQixHQUE0QixhQUE1QixHQUEwQ0QsUUFBMUMsR0FBbUQseUJBQS9EO0FBQ0Q7QUFDRixHQU5EOztBQVFBLE1BQUlBLFFBQUosRUFBYztBQUNaLFdBQU8veEIsUUFBUSxDQUFDcmhELElBQWhCO0FBQ0QsR0FGRCxNQUVPO0FBQ0wsUUFBSTRoRCxNQUFNLEdBQUcwd0IsbUJBQW1CLENBQUNqeEIsUUFBUSxDQUFDcmhELElBQVYsQ0FBaEM7QUFDQSxVQUFNMnpFLEtBQUssR0FBR0YsSUFBSSxDQUFDRyxTQUFMLENBQWVoeUIsTUFBZixDQUFkLENBRkssQ0FFeUM7O0FBQzlDLFdBQU8reEIsS0FBUDtBQUNEO0FBRUY7QUFFTSxNQUFNUyxZQUFOLENBQW1CO0FBTXhCQyxhQUFXLENBQUNDLE1BQUQsRUFBUzNsRSxLQUFULEVBQWdCNGxFLEdBQWhCLEVBQXFCdi9DLEtBQXJCLEVBQTRCO0FBQUE7O0FBQUE7O0FBQUE7O0FBQUE7O0FBQUE7O0FBQUE7O0FBQUE7O0FBQUE7O0FBQUE7O0FBQ3JDLFNBQUtybUIsS0FBTCxHQUFXQSxLQUFYO0FBQWlCLFNBQUs0bEUsR0FBTCxHQUFTQSxHQUFUO0FBQWEsU0FBS3YvQyxLQUFMLEdBQVdBLEtBQVg7QUFFOUIsU0FBS256QixVQUFMLEdBQWtCMHlFLEdBQUcsQ0FBQzF5RSxVQUF0QjtBQUNBLFNBQUsyeUUsUUFBTCxHQUFnQixFQUFoQjtBQUNBLFNBQUsvbkIsT0FBTCxHQUFlLEVBQWY7QUFDQSxTQUFLZ29CLEtBQUwsR0FBYSxFQUFiO0FBRUEsU0FBS3Y4RixHQUFMLENBQVNvOEYsTUFBVDtBQUNEOztBQUVEcDhGLEtBQUcsQ0FBQ284RixNQUFELEVBQVM7QUFFVixTQUFLM0IsWUFBTCxHQUFvQixLQUFLNEIsR0FBTCxDQUFTNUIsWUFBN0I7QUFDQSxTQUFLNkIsUUFBTCxDQUFjcDdCLElBQWQsQ0FBbUJ6NkQsS0FBbkIsQ0FBeUIsS0FBSzYxRixRQUE5QixFQUF3QyxLQUFLRCxHQUFMLENBQVNDLFFBQWpEO0FBQ0EsU0FBS0EsUUFBTCxDQUFjcDdCLElBQWQsQ0FBbUIsS0FBS3pxQyxLQUFMLENBQVdnZ0UsSUFBOUI7QUFDQSxTQUFLNkYsUUFBTCxDQUFjaGtCLElBQWQ7QUFFQSxTQUFLL0QsT0FBTCxDQUFhclQsSUFBYixDQUFrQno2RCxLQUFsQixDQUF3QixLQUFLOHRFLE9BQTdCLEVBQXNDLEtBQUs4bkIsR0FBTCxDQUFTRyxTQUEvQztBQUNBLFNBQUtqb0IsT0FBTCxDQUFhK0QsSUFBYjtBQUVBLFNBQUtpa0IsS0FBTCxDQUFXcjdCLElBQVgsQ0FBZ0J6NkQsS0FBaEIsQ0FBc0IsS0FBSzgxRixLQUEzQixFQUFrQyxLQUFLRCxRQUF2QztBQUNBLFNBQUtDLEtBQUwsQ0FBV3I3QixJQUFYLENBQWdCejZELEtBQWhCLENBQXNCLEtBQUs4MUYsS0FBM0IsRUFBa0MsS0FBS2hvQixPQUF2QztBQUVBLFNBQUszN0IsR0FBTCxHQUFXLEtBQUtrRSxLQUFMLEdBQVcsU0FBWCxHQUFxQixLQUFLdy9DLFFBQUwsQ0FBYzcvQyxNQUFuQyxHQUEwQyxRQUExQyxHQUFtRCxLQUFLNi9DLFFBQUwsQ0FBYzNrRCxJQUFkLENBQW1CLElBQW5CLENBQTlEOztBQUVBLFFBQUksQ0FBQ3lrRCxNQUFNLENBQUMsS0FBS0MsR0FBTCxDQUFTMXlFLFVBQVYsQ0FBWCxFQUFrQztBQUVoQ3l5RSxZQUFNLENBQUMsS0FBS0MsR0FBTCxDQUFTMXlFLFVBQVYsQ0FBTixHQUE4QixJQUE5QjtBQUNEO0FBQ0Y7O0FBRUQ4eUUsVUFBUSxHQUFHO0FBQ1QsV0FBTyxLQUFLSixHQUFaO0FBQ0EsV0FBTyxLQUFLempELEdBQVo7QUFDQSxXQUFPLEtBQUsyakQsS0FBWjtBQUNEOztBQTFDdUI7QUE0Q3pCO0FBRU0sZUFBZUcseUJBQWYsQ0FBeUNDLE9BQXpDLEVBQWtEbEcsSUFBbEQsRUFBd0RtRyxVQUF4RCxFQUFvRTtBQUV6RSxRQUFNUixNQUFNLEdBQUdPLE9BQU8sQ0FBQ1AsTUFBdkI7QUFDQSxRQUFNM2xFLEtBQUssR0FBRyxNQUFNd2tFLGNBQWMsQ0FBQ3hFLElBQUQsRUFBTyxJQUFQLENBQWxDOztBQUVBLE1BQUksQ0FBQ2hnRSxLQUFELElBQ0NtbUUsVUFBVSxDQUFDOS9DLEtBQVgsR0FBbUIsQ0FBbkIsSUFDRHJtQixLQUFLLENBQUMwTSxTQURMLElBQ2tCMU0sS0FBSyxDQUFDME0sU0FBTixJQUFpQjYxRCxrQkFGeEMsRUFFNkQ7QUFDM0QsV0FBTyxJQUFQO0FBQ0Q7O0FBR0QsT0FBSyxJQUFJcGdELEdBQVQsSUFBZ0JuaUIsS0FBSyxDQUFDNGpFLE9BQXRCLEVBQStCO0FBQzdCLFVBQU1nQyxHQUFHLEdBQUc1bEUsS0FBSyxDQUFDNGpFLE9BQU4sQ0FBY3poRCxHQUFkLENBQVo7QUFFQSxRQUFJaWtELElBQUksR0FBRyxJQUFJWCxZQUFKLENBQWlCRSxNQUFqQixFQUF5QjNsRSxLQUF6QixFQUFnQzRsRSxHQUFoQyxFQUFxQ08sVUFBVSxDQUFDOS9DLEtBQWhELENBQVg7O0FBQ0EsUUFBSW04QyxnQkFBSixFQUFzQjtBQUNwQjJELGdCQUFVLENBQUNFLGlCQUFYLENBQTZCNTdCLElBQTdCLENBQWtDejZELEtBQWxDLENBQXdDbTJGLFVBQVUsQ0FBQ0UsaUJBQW5ELEVBQXNFRCxJQUFJLENBQUNOLEtBQTNFO0FBQ0QsS0FGRCxNQUVPO0FBQ0xLLGdCQUFVLENBQUNFLGlCQUFYLENBQTZCNTdCLElBQTdCLENBQWtDejZELEtBQWxDLENBQXdDbTJGLFVBQVUsQ0FBQ0UsaUJBQW5ELEVBQXNFRCxJQUFJLENBQUNQLFFBQTNFO0FBQ0Q7QUFDRjs7QUFFRCxTQUFPLElBQVA7QUFDRDtBQUVNLGVBQWVTLGVBQWYsQ0FBK0JKLE9BQS9CLEVBQXdDbEcsSUFBeEMsRUFBOEM7QUFFbkQsTUFBSW1HLFVBQVUsR0FBRztBQUNmOS9DLFNBQUssRUFBRyxDQURPO0FBRWZnZ0QscUJBQWlCLEVBQUcsQ0FBQ3JHLElBQUQ7QUFGTCxHQUFqQjtBQUlBa0csU0FBTyxDQUFDSyxPQUFSLEdBQWtCLENBQWxCO0FBQ0FMLFNBQU8sQ0FBQ3o2QyxNQUFSLEdBQWlCLE1BQU0rNEMsY0FBYyxDQUFDeEUsSUFBRCxFQUFPLElBQVAsQ0FBckM7O0FBRUEsS0FBRztBQUNELFFBQUl3Ryx1QkFBdUIsR0FBR0wsVUFBVSxDQUFDRSxpQkFBWCxDQUE2QkksTUFBN0IsQ0FBb0MsRUFBcEMsQ0FBOUI7QUFDQU4sY0FBVSxDQUFDRSxpQkFBWCxHQUErQixFQUEvQjtBQUVBLFFBQUlLLFFBQVEsR0FBRyxFQUFmOztBQUNBLFNBQUssSUFBSUMsQ0FBVCxJQUFjSCx1QkFBZCxFQUF1QztBQUNyQyxVQUFJTixPQUFPLENBQUNVLElBQVIsQ0FBYUQsQ0FBYixDQUFKLEVBQXFCLENBQ3BCLENBREQsTUFDTyxJQUFJVCxPQUFPLENBQUNLLE9BQVIsSUFBbUJsRSxTQUF2QixFQUFrQztBQUN2Q1csZUFBTyxDQUFDQyxHQUFSLENBQVksV0FBU2tELFVBQVUsQ0FBQzkvQyxLQUFwQixHQUEwQix1QkFBdEM7QUFDQTtBQUNELE9BSE0sTUFHQTtBQUNMNi9DLGVBQU8sQ0FBQ0ssT0FBUjtBQUNBTCxlQUFPLENBQUNVLElBQVIsQ0FBYUQsQ0FBYixJQUFrQixDQUFsQjtBQUNBM0QsZUFBTyxDQUFDQyxHQUFSLENBQVlpRCxPQUFPLENBQUNLLE9BQVIsR0FBa0IsR0FBbEIsR0FBd0JsRSxTQUFwQztBQUVBLFlBQUl3RSxXQUFXLEdBQUdaLHlCQUF5QixDQUFDQyxPQUFELEVBQVVTLENBQVYsRUFBYVIsVUFBYixDQUEzQztBQUNBTyxnQkFBUSxDQUFDajhCLElBQVQsQ0FBY284QixXQUFkO0FBQ0Q7QUFDRjs7QUFDRCxVQUFNQyxPQUFPLENBQUNoNkYsR0FBUixDQUFZNDVGLFFBQVosQ0FBTjtBQUNBMUQsV0FBTyxDQUFDQyxHQUFSLENBQVksV0FBU2tELFVBQVUsQ0FBQzkvQyxLQUFwQixHQUEwQixZQUF0QztBQUVBOC9DLGNBQVUsQ0FBQzkvQyxLQUFYO0FBQ0QsR0F2QkQsUUF1QlM4L0MsVUFBVSxDQUFDRSxpQkFBWCxDQUE2QnJnRCxNQXZCdEM7QUF5QkQ7QUFFTSxlQUFlK2dELFdBQWYsQ0FBMkIvRyxJQUEzQixFQUFpQ3lFLFFBQWpDLEVBQTJDO0FBRWhELFFBQU11QyxNQUFNLEdBQUksa0JBQWlCaEgsSUFBSyxFQUF0Qzs7QUFDQSxNQUFJc0MsY0FBYyxJQUFJSixFQUFFLENBQUNzQixVQUFILENBQWN3RCxNQUFkLENBQXRCLEVBQTZDO0FBQzNDLFFBQUlyQyxLQUFLLEdBQUd6QyxFQUFFLENBQUMwQyxZQUFILENBQWdCb0MsTUFBaEIsRUFBd0JuQyxRQUF4QixFQUFaO0FBQ0EsUUFBSTV4QixNQUFNLEdBQUc2eEIsSUFBSSxDQUFDQyxLQUFMLENBQVdKLEtBQVgsQ0FBYjtBQUNBM0IsV0FBTyxDQUFDQyxHQUFSLENBQVksNkJBQTJCK0QsTUFBM0IsR0FBa0MsYUFBbEMsR0FBZ0R2QyxRQUFoRCxHQUF5RCxPQUFyRTs7QUFFQSxRQUFJQSxRQUFKLEVBQWM7QUFDWixhQUFPeHhCLE1BQVA7QUFDRCxLQUZELE1BRU87QUFDTCxhQUFPMHhCLEtBQVA7QUFDRDtBQUVGLEdBWEQsTUFXTztBQUVMLFVBQU1nQixNQUFNLEdBQUcsRUFBZjtBQUNBLFVBQU1pQixJQUFJLEdBQUcsRUFBYjtBQUNBLFVBQU1LLE1BQU0sR0FBRyxFQUFmO0FBQ0EsUUFBSWYsT0FBTyxHQUFHO0FBQ1pQLFlBRFk7QUFFWmlCO0FBRlksS0FBZDtBQUdBLFVBQU01bUUsS0FBSyxHQUFHLE1BQU1zbUUsZUFBZSxDQUFDSixPQUFELEVBQVVsRyxJQUFWLENBQW5DO0FBQ0FpSCxVQUFNLENBQUN4OEIsSUFBUCxDQUFZejZELEtBQVosQ0FBa0JpM0YsTUFBbEIsRUFBMEI5QyxNQUFNLENBQUMrQyxNQUFQLENBQWN2QixNQUFkLENBQTFCOztBQUNBLFVBQU13QixHQUFHLEdBQUcsQ0FBQ0MsT0FBRCxFQUFVQyxRQUFWLEtBQXVCO0FBQ2pDLGFBQU9ELE9BQU8sQ0FBQ2psRCxHQUFSLENBQVltbEQsYUFBWixDQUEwQkQsUUFBUSxDQUFDbGxELEdBQW5DLENBQVA7QUFDRCxLQUZEOztBQUdBOGtELFVBQU0sQ0FBQ3BsQixJQUFQLENBQVlzbEIsR0FBWjs7QUFDQSxTQUFLLElBQUlJLE1BQVQsSUFBbUJOLE1BQW5CLEVBQTJCO0FBQ3pCTSxZQUFNLENBQUN2QixRQUFQO0FBQ0Q7O0FBQ0QsUUFBSS95QixNQUFNLEdBQUc7QUFDWHUwQixzQkFBZ0IsRUFBQ1AsTUFBTSxDQUFDamhELE1BRGI7QUFFWDQ5QyxhQUFPLEVBQUNxRDtBQUZHLEtBQWI7O0FBSUEsUUFBSWYsT0FBTyxDQUFDejZDLE1BQVosRUFBb0I7QUFDbEJ3bkIsWUFBTSxDQUFDdm1DLFNBQVAsR0FBbUJ3NUQsT0FBTyxDQUFDejZDLE1BQVIsQ0FBZS9lLFNBQWxDO0FBQ0F1bUMsWUFBTSxDQUFDNHdCLGFBQVAsR0FBdUJxQyxPQUFPLENBQUN6NkMsTUFBUixDQUFlbzRDLGFBQXRDO0FBQ0Q7O0FBRUQsUUFBSTRELEtBQUo7O0FBQ0EsUUFBSW5GLGNBQUosRUFBb0I7QUFDbEJtRixXQUFLLEdBQUczQyxJQUFJLENBQUNHLFNBQUwsQ0FBZWh5QixNQUFmLENBQVI7QUFDQWl2QixRQUFFLENBQUNxRCxTQUFILENBQWF5QixNQUFiLEVBQXFCUyxLQUFyQixFQUE2QmpDLEdBQUQsSUFBUztBQUNuQyxZQUFJQSxHQUFKLEVBQVM7QUFDUHhDLGlCQUFPLENBQUN4aUUsS0FBUixDQUFjLDBCQUF3QndtRSxNQUF4QixHQUErQixvQkFBL0IsR0FBb0R4QixHQUFwRCxHQUF3RCxJQUF0RTtBQUNELFNBRkQsTUFFTztBQUNMeEMsaUJBQU8sQ0FBQ0MsR0FBUixDQUFZLDBCQUF3QitELE1BQXhCLEdBQStCLDBCQUEzQztBQUNEO0FBQ0YsT0FORDtBQU9EOztBQUVELFFBQUl2QyxRQUFKLEVBQWM7QUFDWixhQUFPeHhCLE1BQVA7QUFDRCxLQUZELE1BRU87QUFDTCxVQUFJLENBQUN3MEIsS0FBTCxFQUFZO0FBQ1ZBLGFBQUssR0FBRzNDLElBQUksQ0FBQ0csU0FBTCxDQUFlaHlCLE1BQWYsQ0FBUjtBQUNEOztBQUNELGFBQU93MEIsS0FBUDtBQUNEO0FBQ0Y7QUFDRjtBQUVNLGVBQWVDLGNBQWYsQ0FBOEJ6MEIsTUFBOUIsRUFBc0Mrc0IsSUFBdEMsRUFBNEN1RyxPQUE1QyxFQUFxRDtBQUUxRCxRQUFNdm1FLEtBQUssR0FBRyxNQUFNd2tFLGNBQWMsQ0FBQ3hFLElBQUQsRUFBTyxJQUFQLENBQWxDOztBQUVBLE1BQUloZ0UsS0FBSixFQUFXO0FBRVRpekMsVUFBTSxDQUFDc3pCLE9BQVA7QUFDQXZELFdBQU8sQ0FBQ0MsR0FBUixDQUFZaHdCLE1BQU0sQ0FBQ3N6QixPQUFQLEdBQWlCLEdBQWpCLEdBQXVCQSxPQUFuQzs7QUFFQSxTQUFLLElBQUlwa0QsR0FBVCxJQUFnQm5pQixLQUFLLENBQUM0akUsT0FBdEIsRUFBK0I7QUFDN0IsWUFBTWdDLEdBQUcsR0FBRzVsRSxLQUFLLENBQUM0akUsT0FBTixDQUFjemhELEdBQWQsQ0FBWjtBQUNBLFlBQU0wakQsUUFBUSxHQUFHLEdBQUdZLE1BQUgsQ0FBVWIsR0FBRyxDQUFDQyxRQUFkLENBQWpCO0FBQ0FBLGNBQVEsQ0FBQ2hrQixJQUFUO0FBRUEsWUFBTTN1RCxVQUFVLEdBQUc7QUFDakI4d0Usb0JBQVksRUFBRTRCLEdBQUcsQ0FBQzVCLFlBREQ7QUFFakI5d0Usa0JBQVUsRUFBRTB5RSxHQUFHLENBQUMxeUUsVUFGQztBQUdqQjJ5RTtBQUhpQixPQUFuQjtBQUtBNXlCLFlBQU0sQ0FBQzAwQixhQUFQO0FBQ0ExMEIsWUFBTSxDQUFDMndCLE9BQVAsQ0FBZW41QixJQUFmLENBQW9CdjNDLFVBQXBCO0FBQ0Q7QUFDRjtBQUNGO0FBRU0sZUFBZTAwRSxlQUFmLEdBQWlDO0FBQ3RDLFFBQU1DLEVBQUUsR0FBR24yQixtQkFBTyxDQUFDLEVBQUQsQ0FBbEIsQ0FEc0MsQ0FHdEM7OztBQUNBLE1BQUlreUIsT0FBTyxHQUFHLEVBQWQ7QUFDQSxNQUFJM3dCLE1BQU0sR0FBRztBQUNYc3pCLFdBQU8sRUFBQyxDQURHO0FBRVhvQixpQkFBYSxFQUFDLENBRkg7QUFHWC9EO0FBSFcsR0FBYjtBQU1BLE1BQUk4QyxRQUFRLEdBQUcsRUFBZjtBQUNBLE1BQUlILE9BQU8sR0FBR3BDLE1BQU0sQ0FBQ0QsSUFBUCxDQUFZMkQsRUFBRSxDQUFDL2dHLGlCQUFmLEVBQWtDay9DLE1BQWhEOztBQUNBLE9BQUssSUFBSThoRCxVQUFULElBQXVCRCxFQUFFLENBQUMvZ0csaUJBQTFCLEVBQTZDO0FBQzNDNC9GLFlBQVEsQ0FBQ2o4QixJQUFULENBQWNpOUIsY0FBYyxDQUFDejBCLE1BQUQsRUFBUzYwQixVQUFULEVBQXFCdkIsT0FBckIsQ0FBNUI7QUFDRDs7QUFDRCxRQUFNTyxPQUFPLENBQUNoNkYsR0FBUixDQUFZNDVGLFFBQVosQ0FBTjtBQUVBLFNBQU96ekIsTUFBUDtBQUNELEM7Ozs7OztBQ3BZRCxpQkFBaUIsbUJBQU8sQ0FBQyxFQUFhLEU7Ozs7Ozs7QUNBekI7O0FBRWIsWUFBWSxtQkFBTyxDQUFDLENBQVM7QUFDN0IsV0FBVyxtQkFBTyxDQUFDLENBQWdCO0FBQ25DLFlBQVksbUJBQU8sQ0FBQyxFQUFjO0FBQ2xDLGtCQUFrQixtQkFBTyxDQUFDLEVBQW9CO0FBQzlDLGVBQWUsbUJBQU8sQ0FBQyxDQUFZOztBQUVuQztBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEIsWUFBWSxNQUFNO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGVBQWUsbUJBQU8sQ0FBQyxFQUFpQjtBQUN4QyxvQkFBb0IsbUJBQU8sQ0FBQyxFQUFzQjtBQUNsRCxpQkFBaUIsbUJBQU8sQ0FBQyxDQUFtQjs7QUFFNUM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLG1CQUFPLENBQUMsRUFBa0I7O0FBRXpDOztBQUVBO0FBQ0E7Ozs7Ozs7O0FDcERhOztBQUViLFlBQVksbUJBQU8sQ0FBQyxDQUFZO0FBQ2hDLGVBQWUsbUJBQU8sQ0FBQyxDQUFxQjtBQUM1Qyx5QkFBeUIsbUJBQU8sQ0FBQyxFQUFzQjtBQUN2RCxzQkFBc0IsbUJBQU8sQ0FBQyxFQUFtQjtBQUNqRCxrQkFBa0IsbUJBQU8sQ0FBQyxFQUFlOztBQUV6QztBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnREFBZ0Q7QUFDaEQ7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0EsZ0RBQWdEO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLENBQUM7O0FBRUQ7Ozs7Ozs7O0FDN0ZhOztBQUViLFlBQVksbUJBQU8sQ0FBQyxDQUFZOztBQUVoQztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxTQUFTO0FBQ3BCLFdBQVcsU0FBUztBQUNwQjtBQUNBLFlBQVksT0FBTztBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLFNBQVM7QUFDcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBOzs7Ozs7OztBQ25EYTs7QUFFYixZQUFZLG1CQUFPLENBQUMsQ0FBWTtBQUNoQyxvQkFBb0IsbUJBQU8sQ0FBQyxFQUFpQjtBQUM3QyxlQUFlLG1CQUFPLENBQUMsQ0FBb0I7QUFDM0MsZUFBZSxtQkFBTyxDQUFDLENBQWE7O0FBRXBDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCLGFBQWEsUUFBUTtBQUNyQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLCtCQUErQjtBQUMvQix1Q0FBdUM7QUFDdkM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxHQUFHO0FBQ0g7Ozs7Ozs7O0FDOUVhOztBQUViLFlBQVksbUJBQU8sQ0FBQyxDQUFZOztBQUVoQztBQUNBO0FBQ0E7QUFDQSxXQUFXLGNBQWM7QUFDekIsV0FBVyxNQUFNO0FBQ2pCLFdBQVcsZUFBZTtBQUMxQixhQUFhLEVBQUU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBOzs7Ozs7OztBQ25CYTs7QUFFYixZQUFZLG1CQUFPLENBQUMsQ0FBVTs7QUFFOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOzs7Ozs7OztBQ1hhOztBQUViLFlBQVksbUJBQU8sQ0FBQyxDQUFZO0FBQ2hDLGFBQWEsbUJBQU8sQ0FBQyxDQUFrQjtBQUN2QyxlQUFlLG1CQUFPLENBQUMsQ0FBdUI7QUFDOUMsb0JBQW9CLG1CQUFPLENBQUMsQ0FBdUI7QUFDbkQsbUJBQW1CLG1CQUFPLENBQUMsRUFBMkI7QUFDdEQsc0JBQXNCLG1CQUFPLENBQUMsRUFBOEI7QUFDNUQsa0JBQWtCLG1CQUFPLENBQUMsQ0FBcUI7O0FBRS9DO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsNENBQTRDO0FBQzVDOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixtQkFBTyxDQUFDLEVBQXNCOztBQUVsRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDs7Ozs7Ozs7QUNuTGE7O0FBRWI7QUFDQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCLGFBQWEsUUFBUTtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUNiYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEIsV0FBVyxPQUFPO0FBQ2xCLGFBQWEsT0FBTztBQUNwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FDYmE7O0FBRWIsWUFBWSxtQkFBTyxDQUFDLENBQVk7O0FBRWhDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEIsYUFBYSxPQUFPO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpQkFBaUIsZUFBZTs7QUFFaEM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTs7Ozs7Ozs7QUNwRGE7O0FBRWIsWUFBWSxtQkFBTyxDQUFDLENBQVk7O0FBRWhDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGNBQWMsT0FBTztBQUNyQixnQkFBZ0I7QUFDaEI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxjQUFjLE9BQU87QUFDckIsZ0JBQWdCLFFBQVE7QUFDeEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOzs7Ozs7OztBQ25FYTs7QUFFYixZQUFZLG1CQUFPLENBQUMsQ0FBWTs7QUFFaEM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLDBDQUEwQztBQUMxQyxTQUFTOztBQUVUO0FBQ0EsNERBQTRELHdCQUF3QjtBQUNwRjtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBLGtDQUFrQztBQUNsQywrQkFBK0IsYUFBYSxFQUFFO0FBQzlDO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7Ozs7Ozs7O0FDcERhOztBQUViLFlBQVksbUJBQU8sQ0FBQyxDQUFZO0FBQ2hDLGFBQWEsbUJBQU8sQ0FBQyxDQUFrQjtBQUN2QyxvQkFBb0IsbUJBQU8sQ0FBQyxDQUF1QjtBQUNuRCxlQUFlLG1CQUFPLENBQUMsQ0FBdUI7QUFDOUMsV0FBVyxtQkFBTyxDQUFDLENBQU07QUFDekIsWUFBWSxtQkFBTyxDQUFDLEVBQU87QUFDM0IsaUJBQWlCLG1CQUFPLENBQUMsRUFBa0I7QUFDM0Msa0JBQWtCLG1CQUFPLENBQUMsRUFBa0I7QUFDNUMsVUFBVSxtQkFBTyxDQUFDLEVBQUs7QUFDdkIsV0FBVyxtQkFBTyxDQUFDLEVBQU07QUFDekIsVUFBVSxtQkFBTyxDQUFDLEVBQXNCO0FBQ3hDLGtCQUFrQixtQkFBTyxDQUFDLENBQXFCO0FBQy9DLG1CQUFtQixtQkFBTyxDQUFDLENBQXNCOztBQUVqRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQSxPQUFPO0FBQ1A7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLG1EQUFtRDtBQUNsRTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVzs7QUFFWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsV0FBVztBQUNYOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsS0FBSztBQUNMO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7Ozs7Ozs7QUN0UkEsbUM7Ozs7OztBQ0FBLG1DOzs7Ozs7QUNBQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLG1CQUFtQixtQkFBTyxDQUFDLEVBQWM7QUFDekMsQ0FBQztBQUNELG1CQUFtQixtQkFBTyxDQUFDLEVBQVc7QUFDdEM7Ozs7Ozs7QUNUQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLDJCQUEyQixtQkFBTyxDQUFDLEVBQVM7QUFDNUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVB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Q0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLGdCQUFnQjtBQUN2QztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiLFNBQVM7QUFDVDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQSxhQUFhO0FBQ2I7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0I7QUFDcEIsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiLFNBQVM7QUFDVDtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiLFNBQVM7QUFDVDtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0I7QUFDcEIsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYixTQUFTO0FBQ1Q7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBLGFBQWE7QUFDYixTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQjtBQUNwQixTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiLFNBQVM7QUFDVDtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0EsYUFBYTtBQUNiLFNBQVM7QUFDVDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2IsU0FBUztBQUNUO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiLFNBQVM7QUFDVDtBQUNBLFNBQVM7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IG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDUzKTtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIGJpbmQgPSByZXF1aXJlKCcuL2hlbHBlcnMvYmluZCcpO1xuXG4vKmdsb2JhbCB0b1N0cmluZzp0cnVlKi9cblxuLy8gdXRpbHMgaXMgYSBsaWJyYXJ5IG9mIGdlbmVyaWMgaGVscGVyIGZ1bmN0aW9ucyBub24tc3BlY2lmaWMgdG8gYXhpb3NcblxudmFyIHRvU3RyaW5nID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZztcblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhbiBBcnJheVxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGFuIEFycmF5LCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNBcnJheSh2YWwpIHtcbiAgcmV0dXJuIHRvU3RyaW5nLmNhbGwodmFsKSA9PT0gJ1tvYmplY3QgQXJyYXldJztcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyB1bmRlZmluZWRcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB0aGUgdmFsdWUgaXMgdW5kZWZpbmVkLCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNVbmRlZmluZWQodmFsKSB7XG4gIHJldHVybiB0eXBlb2YgdmFsID09PSAndW5kZWZpbmVkJztcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhIEJ1ZmZlclxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGEgQnVmZmVyLCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNCdWZmZXIodmFsKSB7XG4gIHJldHVybiB2YWwgIT09IG51bGwgJiYgIWlzVW5kZWZpbmVkKHZhbCkgJiYgdmFsLmNvbnN0cnVjdG9yICE9PSBudWxsICYmICFpc1VuZGVmaW5lZCh2YWwuY29uc3RydWN0b3IpXG4gICAgJiYgdHlwZW9mIHZhbC5jb25zdHJ1Y3Rvci5pc0J1ZmZlciA9PT0gJ2Z1bmN0aW9uJyAmJiB2YWwuY29uc3RydWN0b3IuaXNCdWZmZXIodmFsKTtcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhbiBBcnJheUJ1ZmZlclxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGFuIEFycmF5QnVmZmVyLCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNBcnJheUJ1ZmZlcih2YWwpIHtcbiAgcmV0dXJuIHRvU3RyaW5nLmNhbGwodmFsKSA9PT0gJ1tvYmplY3QgQXJyYXlCdWZmZXJdJztcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhIEZvcm1EYXRhXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYW4gRm9ybURhdGEsIG90aGVyd2lzZSBmYWxzZVxuICovXG5mdW5jdGlvbiBpc0Zvcm1EYXRhKHZhbCkge1xuICByZXR1cm4gKHR5cGVvZiBGb3JtRGF0YSAhPT0gJ3VuZGVmaW5lZCcpICYmICh2YWwgaW5zdGFuY2VvZiBGb3JtRGF0YSk7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYSB2aWV3IG9uIGFuIEFycmF5QnVmZmVyXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYSB2aWV3IG9uIGFuIEFycmF5QnVmZmVyLCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNBcnJheUJ1ZmZlclZpZXcodmFsKSB7XG4gIHZhciByZXN1bHQ7XG4gIGlmICgodHlwZW9mIEFycmF5QnVmZmVyICE9PSAndW5kZWZpbmVkJykgJiYgKEFycmF5QnVmZmVyLmlzVmlldykpIHtcbiAgICByZXN1bHQgPSBBcnJheUJ1ZmZlci5pc1ZpZXcodmFsKTtcbiAgfSBlbHNlIHtcbiAgICByZXN1bHQgPSAodmFsKSAmJiAodmFsLmJ1ZmZlcikgJiYgKHZhbC5idWZmZXIgaW5zdGFuY2VvZiBBcnJheUJ1ZmZlcik7XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhIFN0cmluZ1xuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGEgU3RyaW5nLCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNTdHJpbmcodmFsKSB7XG4gIHJldHVybiB0eXBlb2YgdmFsID09PSAnc3RyaW5nJztcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhIE51bWJlclxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGEgTnVtYmVyLCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNOdW1iZXIodmFsKSB7XG4gIHJldHVybiB0eXBlb2YgdmFsID09PSAnbnVtYmVyJztcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhbiBPYmplY3RcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhbiBPYmplY3QsIG90aGVyd2lzZSBmYWxzZVxuICovXG5mdW5jdGlvbiBpc09iamVjdCh2YWwpIHtcbiAgcmV0dXJuIHZhbCAhPT0gbnVsbCAmJiB0eXBlb2YgdmFsID09PSAnb2JqZWN0Jztcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhIERhdGVcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhIERhdGUsIG90aGVyd2lzZSBmYWxzZVxuICovXG5mdW5jdGlvbiBpc0RhdGUodmFsKSB7XG4gIHJldHVybiB0b1N0cmluZy5jYWxsKHZhbCkgPT09ICdbb2JqZWN0IERhdGVdJztcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhIEZpbGVcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhIEZpbGUsIG90aGVyd2lzZSBmYWxzZVxuICovXG5mdW5jdGlvbiBpc0ZpbGUodmFsKSB7XG4gIHJldHVybiB0b1N0cmluZy5jYWxsKHZhbCkgPT09ICdbb2JqZWN0IEZpbGVdJztcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhIEJsb2JcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhIEJsb2IsIG90aGVyd2lzZSBmYWxzZVxuICovXG5mdW5jdGlvbiBpc0Jsb2IodmFsKSB7XG4gIHJldHVybiB0b1N0cmluZy5jYWxsKHZhbCkgPT09ICdbb2JqZWN0IEJsb2JdJztcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhIEZ1bmN0aW9uXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYSBGdW5jdGlvbiwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzRnVuY3Rpb24odmFsKSB7XG4gIHJldHVybiB0b1N0cmluZy5jYWxsKHZhbCkgPT09ICdbb2JqZWN0IEZ1bmN0aW9uXSc7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYSBTdHJlYW1cbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhIFN0cmVhbSwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzU3RyZWFtKHZhbCkge1xuICByZXR1cm4gaXNPYmplY3QodmFsKSAmJiBpc0Z1bmN0aW9uKHZhbC5waXBlKTtcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhIFVSTFNlYXJjaFBhcmFtcyBvYmplY3RcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhIFVSTFNlYXJjaFBhcmFtcyBvYmplY3QsIG90aGVyd2lzZSBmYWxzZVxuICovXG5mdW5jdGlvbiBpc1VSTFNlYXJjaFBhcmFtcyh2YWwpIHtcbiAgcmV0dXJuIHR5cGVvZiBVUkxTZWFyY2hQYXJhbXMgIT09ICd1bmRlZmluZWQnICYmIHZhbCBpbnN0YW5jZW9mIFVSTFNlYXJjaFBhcmFtcztcbn1cblxuLyoqXG4gKiBUcmltIGV4Y2VzcyB3aGl0ZXNwYWNlIG9mZiB0aGUgYmVnaW5uaW5nIGFuZCBlbmQgb2YgYSBzdHJpbmdcbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gc3RyIFRoZSBTdHJpbmcgdG8gdHJpbVxuICogQHJldHVybnMge1N0cmluZ30gVGhlIFN0cmluZyBmcmVlZCBvZiBleGNlc3Mgd2hpdGVzcGFjZVxuICovXG5mdW5jdGlvbiB0cmltKHN0cikge1xuICByZXR1cm4gc3RyLnJlcGxhY2UoL15cXHMqLywgJycpLnJlcGxhY2UoL1xccyokLywgJycpO1xufVxuXG4vKipcbiAqIERldGVybWluZSBpZiB3ZSdyZSBydW5uaW5nIGluIGEgc3RhbmRhcmQgYnJvd3NlciBlbnZpcm9ubWVudFxuICpcbiAqIFRoaXMgYWxsb3dzIGF4aW9zIHRvIHJ1biBpbiBhIHdlYiB3b3JrZXIsIGFuZCByZWFjdC1uYXRpdmUuXG4gKiBCb3RoIGVudmlyb25tZW50cyBzdXBwb3J0IFhNTEh0dHBSZXF1ZXN0LCBidXQgbm90IGZ1bGx5IHN0YW5kYXJkIGdsb2JhbHMuXG4gKlxuICogd2ViIHdvcmtlcnM6XG4gKiAgdHlwZW9mIHdpbmRvdyAtPiB1bmRlZmluZWRcbiAqICB0eXBlb2YgZG9jdW1lbnQgLT4gdW5kZWZpbmVkXG4gKlxuICogcmVhY3QtbmF0aXZlOlxuICogIG5hdmlnYXRvci5wcm9kdWN0IC0+ICdSZWFjdE5hdGl2ZSdcbiAqIG5hdGl2ZXNjcmlwdFxuICogIG5hdmlnYXRvci5wcm9kdWN0IC0+ICdOYXRpdmVTY3JpcHQnIG9yICdOUydcbiAqL1xuZnVuY3Rpb24gaXNTdGFuZGFyZEJyb3dzZXJFbnYoKSB7XG4gIGlmICh0eXBlb2YgbmF2aWdhdG9yICE9PSAndW5kZWZpbmVkJyAmJiAobmF2aWdhdG9yLnByb2R1Y3QgPT09ICdSZWFjdE5hdGl2ZScgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYXZpZ2F0b3IucHJvZHVjdCA9PT0gJ05hdGl2ZVNjcmlwdCcgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYXZpZ2F0b3IucHJvZHVjdCA9PT0gJ05TJykpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgcmV0dXJuIChcbiAgICB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJlxuICAgIHR5cGVvZiBkb2N1bWVudCAhPT0gJ3VuZGVmaW5lZCdcbiAgKTtcbn1cblxuLyoqXG4gKiBJdGVyYXRlIG92ZXIgYW4gQXJyYXkgb3IgYW4gT2JqZWN0IGludm9raW5nIGEgZnVuY3Rpb24gZm9yIGVhY2ggaXRlbS5cbiAqXG4gKiBJZiBgb2JqYCBpcyBhbiBBcnJheSBjYWxsYmFjayB3aWxsIGJlIGNhbGxlZCBwYXNzaW5nXG4gKiB0aGUgdmFsdWUsIGluZGV4LCBhbmQgY29tcGxldGUgYXJyYXkgZm9yIGVhY2ggaXRlbS5cbiAqXG4gKiBJZiAnb2JqJyBpcyBhbiBPYmplY3QgY2FsbGJhY2sgd2lsbCBiZSBjYWxsZWQgcGFzc2luZ1xuICogdGhlIHZhbHVlLCBrZXksIGFuZCBjb21wbGV0ZSBvYmplY3QgZm9yIGVhY2ggcHJvcGVydHkuXG4gKlxuICogQHBhcmFtIHtPYmplY3R8QXJyYXl9IG9iaiBUaGUgb2JqZWN0IHRvIGl0ZXJhdGVcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZuIFRoZSBjYWxsYmFjayB0byBpbnZva2UgZm9yIGVhY2ggaXRlbVxuICovXG5mdW5jdGlvbiBmb3JFYWNoKG9iaiwgZm4pIHtcbiAgLy8gRG9uJ3QgYm90aGVyIGlmIG5vIHZhbHVlIHByb3ZpZGVkXG4gIGlmIChvYmogPT09IG51bGwgfHwgdHlwZW9mIG9iaiA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvLyBGb3JjZSBhbiBhcnJheSBpZiBub3QgYWxyZWFkeSBzb21ldGhpbmcgaXRlcmFibGVcbiAgaWYgKHR5cGVvZiBvYmogIT09ICdvYmplY3QnKSB7XG4gICAgLyplc2xpbnQgbm8tcGFyYW0tcmVhc3NpZ246MCovXG4gICAgb2JqID0gW29ial07XG4gIH1cblxuICBpZiAoaXNBcnJheShvYmopKSB7XG4gICAgLy8gSXRlcmF0ZSBvdmVyIGFycmF5IHZhbHVlc1xuICAgIGZvciAodmFyIGkgPSAwLCBsID0gb2JqLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgZm4uY2FsbChudWxsLCBvYmpbaV0sIGksIG9iaik7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIC8vIEl0ZXJhdGUgb3ZlciBvYmplY3Qga2V5c1xuICAgIGZvciAodmFyIGtleSBpbiBvYmopIHtcbiAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBrZXkpKSB7XG4gICAgICAgIGZuLmNhbGwobnVsbCwgb2JqW2tleV0sIGtleSwgb2JqKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuLyoqXG4gKiBBY2NlcHRzIHZhcmFyZ3MgZXhwZWN0aW5nIGVhY2ggYXJndW1lbnQgdG8gYmUgYW4gb2JqZWN0LCB0aGVuXG4gKiBpbW11dGFibHkgbWVyZ2VzIHRoZSBwcm9wZXJ0aWVzIG9mIGVhY2ggb2JqZWN0IGFuZCByZXR1cm5zIHJlc3VsdC5cbiAqXG4gKiBXaGVuIG11bHRpcGxlIG9iamVjdHMgY29udGFpbiB0aGUgc2FtZSBrZXkgdGhlIGxhdGVyIG9iamVjdCBpblxuICogdGhlIGFyZ3VtZW50cyBsaXN0IHdpbGwgdGFrZSBwcmVjZWRlbmNlLlxuICpcbiAqIEV4YW1wbGU6XG4gKlxuICogYGBganNcbiAqIHZhciByZXN1bHQgPSBtZXJnZSh7Zm9vOiAxMjN9LCB7Zm9vOiA0NTZ9KTtcbiAqIGNvbnNvbGUubG9nKHJlc3VsdC5mb28pOyAvLyBvdXRwdXRzIDQ1NlxuICogYGBgXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IG9iajEgT2JqZWN0IHRvIG1lcmdlXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBSZXN1bHQgb2YgYWxsIG1lcmdlIHByb3BlcnRpZXNcbiAqL1xuZnVuY3Rpb24gbWVyZ2UoLyogb2JqMSwgb2JqMiwgb2JqMywgLi4uICovKSB7XG4gIHZhciByZXN1bHQgPSB7fTtcbiAgZnVuY3Rpb24gYXNzaWduVmFsdWUodmFsLCBrZXkpIHtcbiAgICBpZiAodHlwZW9mIHJlc3VsdFtrZXldID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgdmFsID09PSAnb2JqZWN0Jykge1xuICAgICAgcmVzdWx0W2tleV0gPSBtZXJnZShyZXN1bHRba2V5XSwgdmFsKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmVzdWx0W2tleV0gPSB2YWw7XG4gICAgfVxuICB9XG5cbiAgZm9yICh2YXIgaSA9IDAsIGwgPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgZm9yRWFjaChhcmd1bWVudHNbaV0sIGFzc2lnblZhbHVlKTtcbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuXG4vKipcbiAqIEZ1bmN0aW9uIGVxdWFsIHRvIG1lcmdlIHdpdGggdGhlIGRpZmZlcmVuY2UgYmVpbmcgdGhhdCBubyByZWZlcmVuY2VcbiAqIHRvIG9yaWdpbmFsIG9iamVjdHMgaXMga2VwdC5cbiAqXG4gKiBAc2VlIG1lcmdlXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqMSBPYmplY3QgdG8gbWVyZ2VcbiAqIEByZXR1cm5zIHtPYmplY3R9IFJlc3VsdCBvZiBhbGwgbWVyZ2UgcHJvcGVydGllc1xuICovXG5mdW5jdGlvbiBkZWVwTWVyZ2UoLyogb2JqMSwgb2JqMiwgb2JqMywgLi4uICovKSB7XG4gIHZhciByZXN1bHQgPSB7fTtcbiAgZnVuY3Rpb24gYXNzaWduVmFsdWUodmFsLCBrZXkpIHtcbiAgICBpZiAodHlwZW9mIHJlc3VsdFtrZXldID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgdmFsID09PSAnb2JqZWN0Jykge1xuICAgICAgcmVzdWx0W2tleV0gPSBkZWVwTWVyZ2UocmVzdWx0W2tleV0sIHZhbCk7XG4gICAgfSBlbHNlIGlmICh0eXBlb2YgdmFsID09PSAnb2JqZWN0Jykge1xuICAgICAgcmVzdWx0W2tleV0gPSBkZWVwTWVyZ2Uoe30sIHZhbCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlc3VsdFtrZXldID0gdmFsO1xuICAgIH1cbiAgfVxuXG4gIGZvciAodmFyIGkgPSAwLCBsID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgIGZvckVhY2goYXJndW1lbnRzW2ldLCBhc3NpZ25WYWx1ZSk7XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuLyoqXG4gKiBFeHRlbmRzIG9iamVjdCBhIGJ5IG11dGFibHkgYWRkaW5nIHRvIGl0IHRoZSBwcm9wZXJ0aWVzIG9mIG9iamVjdCBiLlxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBhIFRoZSBvYmplY3QgdG8gYmUgZXh0ZW5kZWRcbiAqIEBwYXJhbSB7T2JqZWN0fSBiIFRoZSBvYmplY3QgdG8gY29weSBwcm9wZXJ0aWVzIGZyb21cbiAqIEBwYXJhbSB7T2JqZWN0fSB0aGlzQXJnIFRoZSBvYmplY3QgdG8gYmluZCBmdW5jdGlvbiB0b1xuICogQHJldHVybiB7T2JqZWN0fSBUaGUgcmVzdWx0aW5nIHZhbHVlIG9mIG9iamVjdCBhXG4gKi9cbmZ1bmN0aW9uIGV4dGVuZChhLCBiLCB0aGlzQXJnKSB7XG4gIGZvckVhY2goYiwgZnVuY3Rpb24gYXNzaWduVmFsdWUodmFsLCBrZXkpIHtcbiAgICBpZiAodGhpc0FyZyAmJiB0eXBlb2YgdmFsID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBhW2tleV0gPSBiaW5kKHZhbCwgdGhpc0FyZyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFba2V5XSA9IHZhbDtcbiAgICB9XG4gIH0pO1xuICByZXR1cm4gYTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIGlzQXJyYXk6IGlzQXJyYXksXG4gIGlzQXJyYXlCdWZmZXI6IGlzQXJyYXlCdWZmZXIsXG4gIGlzQnVmZmVyOiBpc0J1ZmZlcixcbiAgaXNGb3JtRGF0YTogaXNGb3JtRGF0YSxcbiAgaXNBcnJheUJ1ZmZlclZpZXc6IGlzQXJyYXlCdWZmZXJWaWV3LFxuICBpc1N0cmluZzogaXNTdHJpbmcsXG4gIGlzTnVtYmVyOiBpc051bWJlcixcbiAgaXNPYmplY3Q6IGlzT2JqZWN0LFxuICBpc1VuZGVmaW5lZDogaXNVbmRlZmluZWQsXG4gIGlzRGF0ZTogaXNEYXRlLFxuICBpc0ZpbGU6IGlzRmlsZSxcbiAgaXNCbG9iOiBpc0Jsb2IsXG4gIGlzRnVuY3Rpb246IGlzRnVuY3Rpb24sXG4gIGlzU3RyZWFtOiBpc1N0cmVhbSxcbiAgaXNVUkxTZWFyY2hQYXJhbXM6IGlzVVJMU2VhcmNoUGFyYW1zLFxuICBpc1N0YW5kYXJkQnJvd3NlckVudjogaXNTdGFuZGFyZEJyb3dzZXJFbnYsXG4gIGZvckVhY2g6IGZvckVhY2gsXG4gIG1lcmdlOiBtZXJnZSxcbiAgZGVlcE1lcmdlOiBkZWVwTWVyZ2UsXG4gIGV4dGVuZDogZXh0ZW5kLFxuICB0cmltOiB0cmltXG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgdXRpbHMgPSByZXF1aXJlKCcuLy4uL3V0aWxzJyk7XG5cbmZ1bmN0aW9uIGVuY29kZSh2YWwpIHtcbiAgcmV0dXJuIGVuY29kZVVSSUNvbXBvbmVudCh2YWwpLlxuICAgIHJlcGxhY2UoLyU0MC9naSwgJ0AnKS5cbiAgICByZXBsYWNlKC8lM0EvZ2ksICc6JykuXG4gICAgcmVwbGFjZSgvJTI0L2csICckJykuXG4gICAgcmVwbGFjZSgvJTJDL2dpLCAnLCcpLlxuICAgIHJlcGxhY2UoLyUyMC9nLCAnKycpLlxuICAgIHJlcGxhY2UoLyU1Qi9naSwgJ1snKS5cbiAgICByZXBsYWNlKC8lNUQvZ2ksICddJyk7XG59XG5cbi8qKlxuICogQnVpbGQgYSBVUkwgYnkgYXBwZW5kaW5nIHBhcmFtcyB0byB0aGUgZW5kXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IHVybCBUaGUgYmFzZSBvZiB0aGUgdXJsIChlLmcuLCBodHRwOi8vd3d3Lmdvb2dsZS5jb20pXG4gKiBAcGFyYW0ge29iamVjdH0gW3BhcmFtc10gVGhlIHBhcmFtcyB0byBiZSBhcHBlbmRlZFxuICogQHJldHVybnMge3N0cmluZ30gVGhlIGZvcm1hdHRlZCB1cmxcbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBidWlsZFVSTCh1cmwsIHBhcmFtcywgcGFyYW1zU2VyaWFsaXplcikge1xuICAvKmVzbGludCBuby1wYXJhbS1yZWFzc2lnbjowKi9cbiAgaWYgKCFwYXJhbXMpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG5cbiAgdmFyIHNlcmlhbGl6ZWRQYXJhbXM7XG4gIGlmIChwYXJhbXNTZXJpYWxpemVyKSB7XG4gICAgc2VyaWFsaXplZFBhcmFtcyA9IHBhcmFtc1NlcmlhbGl6ZXIocGFyYW1zKTtcbiAgfSBlbHNlIGlmICh1dGlscy5pc1VSTFNlYXJjaFBhcmFtcyhwYXJhbXMpKSB7XG4gICAgc2VyaWFsaXplZFBhcmFtcyA9IHBhcmFtcy50b1N0cmluZygpO1xuICB9IGVsc2Uge1xuICAgIHZhciBwYXJ0cyA9IFtdO1xuXG4gICAgdXRpbHMuZm9yRWFjaChwYXJhbXMsIGZ1bmN0aW9uIHNlcmlhbGl6ZSh2YWwsIGtleSkge1xuICAgICAgaWYgKHZhbCA9PT0gbnVsbCB8fCB0eXBlb2YgdmFsID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGlmICh1dGlscy5pc0FycmF5KHZhbCkpIHtcbiAgICAgICAga2V5ID0ga2V5ICsgJ1tdJztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHZhbCA9IFt2YWxdO1xuICAgICAgfVxuXG4gICAgICB1dGlscy5mb3JFYWNoKHZhbCwgZnVuY3Rpb24gcGFyc2VWYWx1ZSh2KSB7XG4gICAgICAgIGlmICh1dGlscy5pc0RhdGUodikpIHtcbiAgICAgICAgICB2ID0gdi50b0lTT1N0cmluZygpO1xuICAgICAgICB9IGVsc2UgaWYgKHV0aWxzLmlzT2JqZWN0KHYpKSB7XG4gICAgICAgICAgdiA9IEpTT04uc3RyaW5naWZ5KHYpO1xuICAgICAgICB9XG4gICAgICAgIHBhcnRzLnB1c2goZW5jb2RlKGtleSkgKyAnPScgKyBlbmNvZGUodikpO1xuICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICBzZXJpYWxpemVkUGFyYW1zID0gcGFydHMuam9pbignJicpO1xuICB9XG5cbiAgaWYgKHNlcmlhbGl6ZWRQYXJhbXMpIHtcbiAgICB2YXIgaGFzaG1hcmtJbmRleCA9IHVybC5pbmRleE9mKCcjJyk7XG4gICAgaWYgKGhhc2htYXJrSW5kZXggIT09IC0xKSB7XG4gICAgICB1cmwgPSB1cmwuc2xpY2UoMCwgaGFzaG1hcmtJbmRleCk7XG4gICAgfVxuXG4gICAgdXJsICs9ICh1cmwuaW5kZXhPZignPycpID09PSAtMSA/ICc/JyA6ICcmJykgKyBzZXJpYWxpemVkUGFyYW1zO1xuICB9XG5cbiAgcmV0dXJuIHVybDtcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciBlbmhhbmNlRXJyb3IgPSByZXF1aXJlKCcuL2VuaGFuY2VFcnJvcicpO1xuXG4vKipcbiAqIENyZWF0ZSBhbiBFcnJvciB3aXRoIHRoZSBzcGVjaWZpZWQgbWVzc2FnZSwgY29uZmlnLCBlcnJvciBjb2RlLCByZXF1ZXN0IGFuZCByZXNwb25zZS5cbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gbWVzc2FnZSBUaGUgZXJyb3IgbWVzc2FnZS5cbiAqIEBwYXJhbSB7T2JqZWN0fSBjb25maWcgVGhlIGNvbmZpZy5cbiAqIEBwYXJhbSB7c3RyaW5nfSBbY29kZV0gVGhlIGVycm9yIGNvZGUgKGZvciBleGFtcGxlLCAnRUNPTk5BQk9SVEVEJykuXG4gKiBAcGFyYW0ge09iamVjdH0gW3JlcXVlc3RdIFRoZSByZXF1ZXN0LlxuICogQHBhcmFtIHtPYmplY3R9IFtyZXNwb25zZV0gVGhlIHJlc3BvbnNlLlxuICogQHJldHVybnMge0Vycm9yfSBUaGUgY3JlYXRlZCBlcnJvci5cbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBjcmVhdGVFcnJvcihtZXNzYWdlLCBjb25maWcsIGNvZGUsIHJlcXVlc3QsIHJlc3BvbnNlKSB7XG4gIHZhciBlcnJvciA9IG5ldyBFcnJvcihtZXNzYWdlKTtcbiAgcmV0dXJuIGVuaGFuY2VFcnJvcihlcnJvciwgY29uZmlnLCBjb2RlLCByZXF1ZXN0LCByZXNwb25zZSk7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGJpbmQoZm4sIHRoaXNBcmcpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIHdyYXAoKSB7XG4gICAgdmFyIGFyZ3MgPSBuZXcgQXJyYXkoYXJndW1lbnRzLmxlbmd0aCk7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhcmdzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBhcmdzW2ldID0gYXJndW1lbnRzW2ldO1xuICAgIH1cbiAgICByZXR1cm4gZm4uYXBwbHkodGhpc0FyZywgYXJncyk7XG4gIH07XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGlzQ2FuY2VsKHZhbHVlKSB7XG4gIHJldHVybiAhISh2YWx1ZSAmJiB2YWx1ZS5fX0NBTkNFTF9fKTtcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciB1dGlscyA9IHJlcXVpcmUoJy4vdXRpbHMnKTtcbnZhciBub3JtYWxpemVIZWFkZXJOYW1lID0gcmVxdWlyZSgnLi9oZWxwZXJzL25vcm1hbGl6ZUhlYWRlck5hbWUnKTtcblxudmFyIERFRkFVTFRfQ09OVEVOVF9UWVBFID0ge1xuICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZCdcbn07XG5cbmZ1bmN0aW9uIHNldENvbnRlbnRUeXBlSWZVbnNldChoZWFkZXJzLCB2YWx1ZSkge1xuICBpZiAoIXV0aWxzLmlzVW5kZWZpbmVkKGhlYWRlcnMpICYmIHV0aWxzLmlzVW5kZWZpbmVkKGhlYWRlcnNbJ0NvbnRlbnQtVHlwZSddKSkge1xuICAgIGhlYWRlcnNbJ0NvbnRlbnQtVHlwZSddID0gdmFsdWU7XG4gIH1cbn1cblxuZnVuY3Rpb24gZ2V0RGVmYXVsdEFkYXB0ZXIoKSB7XG4gIHZhciBhZGFwdGVyO1xuICBpZiAodHlwZW9mIFhNTEh0dHBSZXF1ZXN0ICE9PSAndW5kZWZpbmVkJykge1xuICAgIC8vIEZvciBicm93c2VycyB1c2UgWEhSIGFkYXB0ZXJcbiAgICBhZGFwdGVyID0gcmVxdWlyZSgnLi9hZGFwdGVycy94aHInKTtcbiAgfSBlbHNlIGlmICh0eXBlb2YgcHJvY2VzcyAhPT0gJ3VuZGVmaW5lZCcgJiYgT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHByb2Nlc3MpID09PSAnW29iamVjdCBwcm9jZXNzXScpIHtcbiAgICAvLyBGb3Igbm9kZSB1c2UgSFRUUCBhZGFwdGVyXG4gICAgYWRhcHRlciA9IHJlcXVpcmUoJy4vYWRhcHRlcnMvaHR0cCcpO1xuICB9XG4gIHJldHVybiBhZGFwdGVyO1xufVxuXG52YXIgZGVmYXVsdHMgPSB7XG4gIGFkYXB0ZXI6IGdldERlZmF1bHRBZGFwdGVyKCksXG5cbiAgdHJhbnNmb3JtUmVxdWVzdDogW2Z1bmN0aW9uIHRyYW5zZm9ybVJlcXVlc3QoZGF0YSwgaGVhZGVycykge1xuICAgIG5vcm1hbGl6ZUhlYWRlck5hbWUoaGVhZGVycywgJ0FjY2VwdCcpO1xuICAgIG5vcm1hbGl6ZUhlYWRlck5hbWUoaGVhZGVycywgJ0NvbnRlbnQtVHlwZScpO1xuICAgIGlmICh1dGlscy5pc0Zvcm1EYXRhKGRhdGEpIHx8XG4gICAgICB1dGlscy5pc0FycmF5QnVmZmVyKGRhdGEpIHx8XG4gICAgICB1dGlscy5pc0J1ZmZlcihkYXRhKSB8fFxuICAgICAgdXRpbHMuaXNTdHJlYW0oZGF0YSkgfHxcbiAgICAgIHV0aWxzLmlzRmlsZShkYXRhKSB8fFxuICAgICAgdXRpbHMuaXNCbG9iKGRhdGEpXG4gICAgKSB7XG4gICAgICByZXR1cm4gZGF0YTtcbiAgICB9XG4gICAgaWYgKHV0aWxzLmlzQXJyYXlCdWZmZXJWaWV3KGRhdGEpKSB7XG4gICAgICByZXR1cm4gZGF0YS5idWZmZXI7XG4gICAgfVxuICAgIGlmICh1dGlscy5pc1VSTFNlYXJjaFBhcmFtcyhkYXRhKSkge1xuICAgICAgc2V0Q29udGVudFR5cGVJZlVuc2V0KGhlYWRlcnMsICdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQ7Y2hhcnNldD11dGYtOCcpO1xuICAgICAgcmV0dXJuIGRhdGEudG9TdHJpbmcoKTtcbiAgICB9XG4gICAgaWYgKHV0aWxzLmlzT2JqZWN0KGRhdGEpKSB7XG4gICAgICBzZXRDb250ZW50VHlwZUlmVW5zZXQoaGVhZGVycywgJ2FwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtOCcpO1xuICAgICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KGRhdGEpO1xuICAgIH1cbiAgICByZXR1cm4gZGF0YTtcbiAgfV0sXG5cbiAgdHJhbnNmb3JtUmVzcG9uc2U6IFtmdW5jdGlvbiB0cmFuc2Zvcm1SZXNwb25zZShkYXRhKSB7XG4gICAgLyplc2xpbnQgbm8tcGFyYW0tcmVhc3NpZ246MCovXG4gICAgaWYgKHR5cGVvZiBkYXRhID09PSAnc3RyaW5nJykge1xuICAgICAgdHJ5IHtcbiAgICAgICAgZGF0YSA9IEpTT04ucGFyc2UoZGF0YSk7XG4gICAgICB9IGNhdGNoIChlKSB7IC8qIElnbm9yZSAqLyB9XG4gICAgfVxuICAgIHJldHVybiBkYXRhO1xuICB9XSxcblxuICAvKipcbiAgICogQSB0aW1lb3V0IGluIG1pbGxpc2Vjb25kcyB0byBhYm9ydCBhIHJlcXVlc3QuIElmIHNldCB0byAwIChkZWZhdWx0KSBhXG4gICAqIHRpbWVvdXQgaXMgbm90IGNyZWF0ZWQuXG4gICAqL1xuICB0aW1lb3V0OiAwLFxuXG4gIHhzcmZDb29raWVOYW1lOiAnWFNSRi1UT0tFTicsXG4gIHhzcmZIZWFkZXJOYW1lOiAnWC1YU1JGLVRPS0VOJyxcblxuICBtYXhDb250ZW50TGVuZ3RoOiAtMSxcblxuICB2YWxpZGF0ZVN0YXR1czogZnVuY3Rpb24gdmFsaWRhdGVTdGF0dXMoc3RhdHVzKSB7XG4gICAgcmV0dXJuIHN0YXR1cyA+PSAyMDAgJiYgc3RhdHVzIDwgMzAwO1xuICB9XG59O1xuXG5kZWZhdWx0cy5oZWFkZXJzID0ge1xuICBjb21tb246IHtcbiAgICAnQWNjZXB0JzogJ2FwcGxpY2F0aW9uL2pzb24sIHRleHQvcGxhaW4sICovKidcbiAgfVxufTtcblxudXRpbHMuZm9yRWFjaChbJ2RlbGV0ZScsICdnZXQnLCAnaGVhZCddLCBmdW5jdGlvbiBmb3JFYWNoTWV0aG9kTm9EYXRhKG1ldGhvZCkge1xuICBkZWZhdWx0cy5oZWFkZXJzW21ldGhvZF0gPSB7fTtcbn0pO1xuXG51dGlscy5mb3JFYWNoKFsncG9zdCcsICdwdXQnLCAncGF0Y2gnXSwgZnVuY3Rpb24gZm9yRWFjaE1ldGhvZFdpdGhEYXRhKG1ldGhvZCkge1xuICBkZWZhdWx0cy5oZWFkZXJzW21ldGhvZF0gPSB1dGlscy5tZXJnZShERUZBVUxUX0NPTlRFTlRfVFlQRSk7XG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBkZWZhdWx0cztcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIGNyZWF0ZUVycm9yID0gcmVxdWlyZSgnLi9jcmVhdGVFcnJvcicpO1xuXG4vKipcbiAqIFJlc29sdmUgb3IgcmVqZWN0IGEgUHJvbWlzZSBiYXNlZCBvbiByZXNwb25zZSBzdGF0dXMuXG4gKlxuICogQHBhcmFtIHtGdW5jdGlvbn0gcmVzb2x2ZSBBIGZ1bmN0aW9uIHRoYXQgcmVzb2x2ZXMgdGhlIHByb21pc2UuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSByZWplY3QgQSBmdW5jdGlvbiB0aGF0IHJlamVjdHMgdGhlIHByb21pc2UuXG4gKiBAcGFyYW0ge29iamVjdH0gcmVzcG9uc2UgVGhlIHJlc3BvbnNlLlxuICovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIHNldHRsZShyZXNvbHZlLCByZWplY3QsIHJlc3BvbnNlKSB7XG4gIHZhciB2YWxpZGF0ZVN0YXR1cyA9IHJlc3BvbnNlLmNvbmZpZy52YWxpZGF0ZVN0YXR1cztcbiAgaWYgKCF2YWxpZGF0ZVN0YXR1cyB8fCB2YWxpZGF0ZVN0YXR1cyhyZXNwb25zZS5zdGF0dXMpKSB7XG4gICAgcmVzb2x2ZShyZXNwb25zZSk7XG4gIH0gZWxzZSB7XG4gICAgcmVqZWN0KGNyZWF0ZUVycm9yKFxuICAgICAgJ1JlcXVlc3QgZmFpbGVkIHdpdGggc3RhdHVzIGNvZGUgJyArIHJlc3BvbnNlLnN0YXR1cyxcbiAgICAgIHJlc3BvbnNlLmNvbmZpZyxcbiAgICAgIG51bGwsXG4gICAgICByZXNwb25zZS5yZXF1ZXN0LFxuICAgICAgcmVzcG9uc2VcbiAgICApKTtcbiAgfVxufTtcbiIsIid1c2Ugc3RyaWN0JztcblxuLyoqXG4gKiBVcGRhdGUgYW4gRXJyb3Igd2l0aCB0aGUgc3BlY2lmaWVkIGNvbmZpZywgZXJyb3IgY29kZSwgYW5kIHJlc3BvbnNlLlxuICpcbiAqIEBwYXJhbSB7RXJyb3J9IGVycm9yIFRoZSBlcnJvciB0byB1cGRhdGUuXG4gKiBAcGFyYW0ge09iamVjdH0gY29uZmlnIFRoZSBjb25maWcuXG4gKiBAcGFyYW0ge3N0cmluZ30gW2NvZGVdIFRoZSBlcnJvciBjb2RlIChmb3IgZXhhbXBsZSwgJ0VDT05OQUJPUlRFRCcpLlxuICogQHBhcmFtIHtPYmplY3R9IFtyZXF1ZXN0XSBUaGUgcmVxdWVzdC5cbiAqIEBwYXJhbSB7T2JqZWN0fSBbcmVzcG9uc2VdIFRoZSByZXNwb25zZS5cbiAqIEByZXR1cm5zIHtFcnJvcn0gVGhlIGVycm9yLlxuICovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGVuaGFuY2VFcnJvcihlcnJvciwgY29uZmlnLCBjb2RlLCByZXF1ZXN0LCByZXNwb25zZSkge1xuICBlcnJvci5jb25maWcgPSBjb25maWc7XG4gIGlmIChjb2RlKSB7XG4gICAgZXJyb3IuY29kZSA9IGNvZGU7XG4gIH1cblxuICBlcnJvci5yZXF1ZXN0ID0gcmVxdWVzdDtcbiAgZXJyb3IucmVzcG9uc2UgPSByZXNwb25zZTtcbiAgZXJyb3IuaXNBeGlvc0Vycm9yID0gdHJ1ZTtcblxuICBlcnJvci50b0pTT04gPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4ge1xuICAgICAgLy8gU3RhbmRhcmRcbiAgICAgIG1lc3NhZ2U6IHRoaXMubWVzc2FnZSxcbiAgICAgIG5hbWU6IHRoaXMubmFtZSxcbiAgICAgIC8vIE1pY3Jvc29mdFxuICAgICAgZGVzY3JpcHRpb246IHRoaXMuZGVzY3JpcHRpb24sXG4gICAgICBudW1iZXI6IHRoaXMubnVtYmVyLFxuICAgICAgLy8gTW96aWxsYVxuICAgICAgZmlsZU5hbWU6IHRoaXMuZmlsZU5hbWUsXG4gICAgICBsaW5lTnVtYmVyOiB0aGlzLmxpbmVOdW1iZXIsXG4gICAgICBjb2x1bW5OdW1iZXI6IHRoaXMuY29sdW1uTnVtYmVyLFxuICAgICAgc3RhY2s6IHRoaXMuc3RhY2ssXG4gICAgICAvLyBBeGlvc1xuICAgICAgY29uZmlnOiB0aGlzLmNvbmZpZyxcbiAgICAgIGNvZGU6IHRoaXMuY29kZVxuICAgIH07XG4gIH07XG4gIHJldHVybiBlcnJvcjtcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciBpc0Fic29sdXRlVVJMID0gcmVxdWlyZSgnLi4vaGVscGVycy9pc0Fic29sdXRlVVJMJyk7XG52YXIgY29tYmluZVVSTHMgPSByZXF1aXJlKCcuLi9oZWxwZXJzL2NvbWJpbmVVUkxzJyk7XG5cbi8qKlxuICogQ3JlYXRlcyBhIG5ldyBVUkwgYnkgY29tYmluaW5nIHRoZSBiYXNlVVJMIHdpdGggdGhlIHJlcXVlc3RlZFVSTCxcbiAqIG9ubHkgd2hlbiB0aGUgcmVxdWVzdGVkVVJMIGlzIG5vdCBhbHJlYWR5IGFuIGFic29sdXRlIFVSTC5cbiAqIElmIHRoZSByZXF1ZXN0VVJMIGlzIGFic29sdXRlLCB0aGlzIGZ1bmN0aW9uIHJldHVybnMgdGhlIHJlcXVlc3RlZFVSTCB1bnRvdWNoZWQuXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IGJhc2VVUkwgVGhlIGJhc2UgVVJMXG4gKiBAcGFyYW0ge3N0cmluZ30gcmVxdWVzdGVkVVJMIEFic29sdXRlIG9yIHJlbGF0aXZlIFVSTCB0byBjb21iaW5lXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBUaGUgY29tYmluZWQgZnVsbCBwYXRoXG4gKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gYnVpbGRGdWxsUGF0aChiYXNlVVJMLCByZXF1ZXN0ZWRVUkwpIHtcbiAgaWYgKGJhc2VVUkwgJiYgIWlzQWJzb2x1dGVVUkwocmVxdWVzdGVkVVJMKSkge1xuICAgIHJldHVybiBjb21iaW5lVVJMcyhiYXNlVVJMLCByZXF1ZXN0ZWRVUkwpO1xuICB9XG4gIHJldHVybiByZXF1ZXN0ZWRVUkw7XG59O1xuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiaHR0cFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJodHRwc1wiKTsiLCJ2YXIgdXJsID0gcmVxdWlyZShcInVybFwiKTtcbnZhciBodHRwID0gcmVxdWlyZShcImh0dHBcIik7XG52YXIgaHR0cHMgPSByZXF1aXJlKFwiaHR0cHNcIik7XG52YXIgYXNzZXJ0ID0gcmVxdWlyZShcImFzc2VydFwiKTtcbnZhciBXcml0YWJsZSA9IHJlcXVpcmUoXCJzdHJlYW1cIikuV3JpdGFibGU7XG52YXIgZGVidWcgPSByZXF1aXJlKFwiZGVidWdcIikoXCJmb2xsb3ctcmVkaXJlY3RzXCIpO1xuXG4vLyBSRkM3MjMxwqc0LjIuMTogT2YgdGhlIHJlcXVlc3QgbWV0aG9kcyBkZWZpbmVkIGJ5IHRoaXMgc3BlY2lmaWNhdGlvbixcbi8vIHRoZSBHRVQsIEhFQUQsIE9QVElPTlMsIGFuZCBUUkFDRSBtZXRob2RzIGFyZSBkZWZpbmVkIHRvIGJlIHNhZmUuXG52YXIgU0FGRV9NRVRIT0RTID0geyBHRVQ6IHRydWUsIEhFQUQ6IHRydWUsIE9QVElPTlM6IHRydWUsIFRSQUNFOiB0cnVlIH07XG5cbi8vIENyZWF0ZSBoYW5kbGVycyB0aGF0IHBhc3MgZXZlbnRzIGZyb20gbmF0aXZlIHJlcXVlc3RzXG52YXIgZXZlbnRIYW5kbGVycyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG5bXCJhYm9ydFwiLCBcImFib3J0ZWRcIiwgXCJlcnJvclwiLCBcInNvY2tldFwiLCBcInRpbWVvdXRcIl0uZm9yRWFjaChmdW5jdGlvbiAoZXZlbnQpIHtcbiAgZXZlbnRIYW5kbGVyc1tldmVudF0gPSBmdW5jdGlvbiAoYXJnKSB7XG4gICAgdGhpcy5fcmVkaXJlY3RhYmxlLmVtaXQoZXZlbnQsIGFyZyk7XG4gIH07XG59KTtcblxuLy8gQW4gSFRUUChTKSByZXF1ZXN0IHRoYXQgY2FuIGJlIHJlZGlyZWN0ZWRcbmZ1bmN0aW9uIFJlZGlyZWN0YWJsZVJlcXVlc3Qob3B0aW9ucywgcmVzcG9uc2VDYWxsYmFjaykge1xuICAvLyBJbml0aWFsaXplIHRoZSByZXF1ZXN0XG4gIFdyaXRhYmxlLmNhbGwodGhpcyk7XG4gIG9wdGlvbnMuaGVhZGVycyA9IG9wdGlvbnMuaGVhZGVycyB8fCB7fTtcbiAgdGhpcy5fb3B0aW9ucyA9IG9wdGlvbnM7XG4gIHRoaXMuX3JlZGlyZWN0Q291bnQgPSAwO1xuICB0aGlzLl9yZWRpcmVjdHMgPSBbXTtcbiAgdGhpcy5fcmVxdWVzdEJvZHlMZW5ndGggPSAwO1xuICB0aGlzLl9yZXF1ZXN0Qm9keUJ1ZmZlcnMgPSBbXTtcblxuICAvLyBTaW5jZSBodHRwLnJlcXVlc3QgdHJlYXRzIGhvc3QgYXMgYW4gYWxpYXMgb2YgaG9zdG5hbWUsXG4gIC8vIGJ1dCB0aGUgdXJsIG1vZHVsZSBpbnRlcnByZXRzIGhvc3QgYXMgaG9zdG5hbWUgcGx1cyBwb3J0LFxuICAvLyBlbGltaW5hdGUgdGhlIGhvc3QgcHJvcGVydHkgdG8gYXZvaWQgY29uZnVzaW9uLlxuICBpZiAob3B0aW9ucy5ob3N0KSB7XG4gICAgLy8gVXNlIGhvc3RuYW1lIGlmIHNldCwgYmVjYXVzZSBpdCBoYXMgcHJlY2VkZW5jZVxuICAgIGlmICghb3B0aW9ucy5ob3N0bmFtZSkge1xuICAgICAgb3B0aW9ucy5ob3N0bmFtZSA9IG9wdGlvbnMuaG9zdDtcbiAgICB9XG4gICAgZGVsZXRlIG9wdGlvbnMuaG9zdDtcbiAgfVxuXG4gIC8vIEF0dGFjaCBhIGNhbGxiYWNrIGlmIHBhc3NlZFxuICBpZiAocmVzcG9uc2VDYWxsYmFjaykge1xuICAgIHRoaXMub24oXCJyZXNwb25zZVwiLCByZXNwb25zZUNhbGxiYWNrKTtcbiAgfVxuXG4gIC8vIFJlYWN0IHRvIHJlc3BvbnNlcyBvZiBuYXRpdmUgcmVxdWVzdHNcbiAgdmFyIHNlbGYgPSB0aGlzO1xuICB0aGlzLl9vbk5hdGl2ZVJlc3BvbnNlID0gZnVuY3Rpb24gKHJlc3BvbnNlKSB7XG4gICAgc2VsZi5fcHJvY2Vzc1Jlc3BvbnNlKHJlc3BvbnNlKTtcbiAgfTtcblxuICAvLyBDb21wbGV0ZSB0aGUgVVJMIG9iamVjdCB3aGVuIG5lY2Vzc2FyeVxuICBpZiAoIW9wdGlvbnMucGF0aG5hbWUgJiYgb3B0aW9ucy5wYXRoKSB7XG4gICAgdmFyIHNlYXJjaFBvcyA9IG9wdGlvbnMucGF0aC5pbmRleE9mKFwiP1wiKTtcbiAgICBpZiAoc2VhcmNoUG9zIDwgMCkge1xuICAgICAgb3B0aW9ucy5wYXRobmFtZSA9IG9wdGlvbnMucGF0aDtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICBvcHRpb25zLnBhdGhuYW1lID0gb3B0aW9ucy5wYXRoLnN1YnN0cmluZygwLCBzZWFyY2hQb3MpO1xuICAgICAgb3B0aW9ucy5zZWFyY2ggPSBvcHRpb25zLnBhdGguc3Vic3RyaW5nKHNlYXJjaFBvcyk7XG4gICAgfVxuICB9XG5cbiAgLy8gUGVyZm9ybSB0aGUgZmlyc3QgcmVxdWVzdFxuICB0aGlzLl9wZXJmb3JtUmVxdWVzdCgpO1xufVxuUmVkaXJlY3RhYmxlUmVxdWVzdC5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKFdyaXRhYmxlLnByb3RvdHlwZSk7XG5cbi8vIFdyaXRlcyBidWZmZXJlZCBkYXRhIHRvIHRoZSBjdXJyZW50IG5hdGl2ZSByZXF1ZXN0XG5SZWRpcmVjdGFibGVSZXF1ZXN0LnByb3RvdHlwZS53cml0ZSA9IGZ1bmN0aW9uIChkYXRhLCBlbmNvZGluZywgY2FsbGJhY2spIHtcbiAgLy8gVmFsaWRhdGUgaW5wdXQgYW5kIHNoaWZ0IHBhcmFtZXRlcnMgaWYgbmVjZXNzYXJ5XG4gIGlmICghKHR5cGVvZiBkYXRhID09PSBcInN0cmluZ1wiIHx8IHR5cGVvZiBkYXRhID09PSBcIm9iamVjdFwiICYmIChcImxlbmd0aFwiIGluIGRhdGEpKSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcImRhdGEgc2hvdWxkIGJlIGEgc3RyaW5nLCBCdWZmZXIgb3IgVWludDhBcnJheVwiKTtcbiAgfVxuICBpZiAodHlwZW9mIGVuY29kaW5nID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICBjYWxsYmFjayA9IGVuY29kaW5nO1xuICAgIGVuY29kaW5nID0gbnVsbDtcbiAgfVxuXG4gIC8vIElnbm9yZSBlbXB0eSBidWZmZXJzLCBzaW5jZSB3cml0aW5nIHRoZW0gZG9lc24ndCBpbnZva2UgdGhlIGNhbGxiYWNrXG4gIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9ub2RlanMvbm9kZS9pc3N1ZXMvMjIwNjZcbiAgaWYgKGRhdGEubGVuZ3RoID09PSAwKSB7XG4gICAgaWYgKGNhbGxiYWNrKSB7XG4gICAgICBjYWxsYmFjaygpO1xuICAgIH1cbiAgICByZXR1cm47XG4gIH1cbiAgLy8gT25seSB3cml0ZSB3aGVuIHdlIGRvbid0IGV4Y2VlZCB0aGUgbWF4aW11bSBib2R5IGxlbmd0aFxuICBpZiAodGhpcy5fcmVxdWVzdEJvZHlMZW5ndGggKyBkYXRhLmxlbmd0aCA8PSB0aGlzLl9vcHRpb25zLm1heEJvZHlMZW5ndGgpIHtcbiAgICB0aGlzLl9yZXF1ZXN0Qm9keUxlbmd0aCArPSBkYXRhLmxlbmd0aDtcbiAgICB0aGlzLl9yZXF1ZXN0Qm9keUJ1ZmZlcnMucHVzaCh7IGRhdGE6IGRhdGEsIGVuY29kaW5nOiBlbmNvZGluZyB9KTtcbiAgICB0aGlzLl9jdXJyZW50UmVxdWVzdC53cml0ZShkYXRhLCBlbmNvZGluZywgY2FsbGJhY2spO1xuICB9XG4gIC8vIEVycm9yIHdoZW4gd2UgZXhjZWVkIHRoZSBtYXhpbXVtIGJvZHkgbGVuZ3RoXG4gIGVsc2Uge1xuICAgIHRoaXMuZW1pdChcImVycm9yXCIsIG5ldyBFcnJvcihcIlJlcXVlc3QgYm9keSBsYXJnZXIgdGhhbiBtYXhCb2R5TGVuZ3RoIGxpbWl0XCIpKTtcbiAgICB0aGlzLmFib3J0KCk7XG4gIH1cbn07XG5cbi8vIEVuZHMgdGhlIGN1cnJlbnQgbmF0aXZlIHJlcXVlc3RcblJlZGlyZWN0YWJsZVJlcXVlc3QucHJvdG90eXBlLmVuZCA9IGZ1bmN0aW9uIChkYXRhLCBlbmNvZGluZywgY2FsbGJhY2spIHtcbiAgLy8gU2hpZnQgcGFyYW1ldGVycyBpZiBuZWNlc3NhcnlcbiAgaWYgKHR5cGVvZiBkYXRhID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICBjYWxsYmFjayA9IGRhdGE7XG4gICAgZGF0YSA9IGVuY29kaW5nID0gbnVsbDtcbiAgfVxuICBlbHNlIGlmICh0eXBlb2YgZW5jb2RpbmcgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIGNhbGxiYWNrID0gZW5jb2Rpbmc7XG4gICAgZW5jb2RpbmcgPSBudWxsO1xuICB9XG5cbiAgLy8gV3JpdGUgZGF0YSBhbmQgZW5kXG4gIHZhciBjdXJyZW50UmVxdWVzdCA9IHRoaXMuX2N1cnJlbnRSZXF1ZXN0O1xuICB0aGlzLndyaXRlKGRhdGEgfHwgXCJcIiwgZW5jb2RpbmcsIGZ1bmN0aW9uICgpIHtcbiAgICBjdXJyZW50UmVxdWVzdC5lbmQobnVsbCwgbnVsbCwgY2FsbGJhY2spO1xuICB9KTtcbn07XG5cbi8vIFNldHMgYSBoZWFkZXIgdmFsdWUgb24gdGhlIGN1cnJlbnQgbmF0aXZlIHJlcXVlc3RcblJlZGlyZWN0YWJsZVJlcXVlc3QucHJvdG90eXBlLnNldEhlYWRlciA9IGZ1bmN0aW9uIChuYW1lLCB2YWx1ZSkge1xuICB0aGlzLl9vcHRpb25zLmhlYWRlcnNbbmFtZV0gPSB2YWx1ZTtcbiAgdGhpcy5fY3VycmVudFJlcXVlc3Quc2V0SGVhZGVyKG5hbWUsIHZhbHVlKTtcbn07XG5cbi8vIENsZWFycyBhIGhlYWRlciB2YWx1ZSBvbiB0aGUgY3VycmVudCBuYXRpdmUgcmVxdWVzdFxuUmVkaXJlY3RhYmxlUmVxdWVzdC5wcm90b3R5cGUucmVtb3ZlSGVhZGVyID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgZGVsZXRlIHRoaXMuX29wdGlvbnMuaGVhZGVyc1tuYW1lXTtcbiAgdGhpcy5fY3VycmVudFJlcXVlc3QucmVtb3ZlSGVhZGVyKG5hbWUpO1xufTtcblxuLy8gUHJveHkgYWxsIG90aGVyIHB1YmxpYyBDbGllbnRSZXF1ZXN0IG1ldGhvZHNcbltcbiAgXCJhYm9ydFwiLCBcImZsdXNoSGVhZGVyc1wiLCBcImdldEhlYWRlclwiLFxuICBcInNldE5vRGVsYXlcIiwgXCJzZXRTb2NrZXRLZWVwQWxpdmVcIiwgXCJzZXRUaW1lb3V0XCIsXG5dLmZvckVhY2goZnVuY3Rpb24gKG1ldGhvZCkge1xuICBSZWRpcmVjdGFibGVSZXF1ZXN0LnByb3RvdHlwZVttZXRob2RdID0gZnVuY3Rpb24gKGEsIGIpIHtcbiAgICByZXR1cm4gdGhpcy5fY3VycmVudFJlcXVlc3RbbWV0aG9kXShhLCBiKTtcbiAgfTtcbn0pO1xuXG4vLyBQcm94eSBhbGwgcHVibGljIENsaWVudFJlcXVlc3QgcHJvcGVydGllc1xuW1wiYWJvcnRlZFwiLCBcImNvbm5lY3Rpb25cIiwgXCJzb2NrZXRcIl0uZm9yRWFjaChmdW5jdGlvbiAocHJvcGVydHkpIHtcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFJlZGlyZWN0YWJsZVJlcXVlc3QucHJvdG90eXBlLCBwcm9wZXJ0eSwge1xuICAgIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpcy5fY3VycmVudFJlcXVlc3RbcHJvcGVydHldOyB9LFxuICB9KTtcbn0pO1xuXG4vLyBFeGVjdXRlcyB0aGUgbmV4dCBuYXRpdmUgcmVxdWVzdCAoaW5pdGlhbCBvciByZWRpcmVjdClcblJlZGlyZWN0YWJsZVJlcXVlc3QucHJvdG90eXBlLl9wZXJmb3JtUmVxdWVzdCA9IGZ1bmN0aW9uICgpIHtcbiAgLy8gTG9hZCB0aGUgbmF0aXZlIHByb3RvY29sXG4gIHZhciBwcm90b2NvbCA9IHRoaXMuX29wdGlvbnMucHJvdG9jb2w7XG4gIHZhciBuYXRpdmVQcm90b2NvbCA9IHRoaXMuX29wdGlvbnMubmF0aXZlUHJvdG9jb2xzW3Byb3RvY29sXTtcbiAgaWYgKCFuYXRpdmVQcm90b2NvbCkge1xuICAgIHRoaXMuZW1pdChcImVycm9yXCIsIG5ldyBFcnJvcihcIlVuc3VwcG9ydGVkIHByb3RvY29sIFwiICsgcHJvdG9jb2wpKTtcbiAgICByZXR1cm47XG4gIH1cblxuICAvLyBJZiBzcGVjaWZpZWQsIHVzZSB0aGUgYWdlbnQgY29ycmVzcG9uZGluZyB0byB0aGUgcHJvdG9jb2xcbiAgLy8gKEhUVFAgYW5kIEhUVFBTIHVzZSBkaWZmZXJlbnQgdHlwZXMgb2YgYWdlbnRzKVxuICBpZiAodGhpcy5fb3B0aW9ucy5hZ2VudHMpIHtcbiAgICB2YXIgc2NoZW1lID0gcHJvdG9jb2wuc3Vic3RyKDAsIHByb3RvY29sLmxlbmd0aCAtIDEpO1xuICAgIHRoaXMuX29wdGlvbnMuYWdlbnQgPSB0aGlzLl9vcHRpb25zLmFnZW50c1tzY2hlbWVdO1xuICB9XG5cbiAgLy8gQ3JlYXRlIHRoZSBuYXRpdmUgcmVxdWVzdFxuICB2YXIgcmVxdWVzdCA9IHRoaXMuX2N1cnJlbnRSZXF1ZXN0ID1cbiAgICAgICAgbmF0aXZlUHJvdG9jb2wucmVxdWVzdCh0aGlzLl9vcHRpb25zLCB0aGlzLl9vbk5hdGl2ZVJlc3BvbnNlKTtcbiAgdGhpcy5fY3VycmVudFVybCA9IHVybC5mb3JtYXQodGhpcy5fb3B0aW9ucyk7XG5cbiAgLy8gU2V0IHVwIGV2ZW50IGhhbmRsZXJzXG4gIHJlcXVlc3QuX3JlZGlyZWN0YWJsZSA9IHRoaXM7XG4gIGZvciAodmFyIGV2ZW50IGluIGV2ZW50SGFuZGxlcnMpIHtcbiAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgZWxzZSAqL1xuICAgIGlmIChldmVudCkge1xuICAgICAgcmVxdWVzdC5vbihldmVudCwgZXZlbnRIYW5kbGVyc1tldmVudF0pO1xuICAgIH1cbiAgfVxuXG4gIC8vIEVuZCBhIHJlZGlyZWN0ZWQgcmVxdWVzdFxuICAvLyAoVGhlIGZpcnN0IHJlcXVlc3QgbXVzdCBiZSBlbmRlZCBleHBsaWNpdGx5IHdpdGggUmVkaXJlY3RhYmxlUmVxdWVzdCNlbmQpXG4gIGlmICh0aGlzLl9pc1JlZGlyZWN0KSB7XG4gICAgLy8gV3JpdGUgdGhlIHJlcXVlc3QgZW50aXR5IGFuZCBlbmQuXG4gICAgdmFyIGkgPSAwO1xuICAgIHZhciBidWZmZXJzID0gdGhpcy5fcmVxdWVzdEJvZHlCdWZmZXJzO1xuICAgIChmdW5jdGlvbiB3cml0ZU5leHQoKSB7XG4gICAgICBpZiAoaSA8IGJ1ZmZlcnMubGVuZ3RoKSB7XG4gICAgICAgIHZhciBidWZmZXIgPSBidWZmZXJzW2krK107XG4gICAgICAgIHJlcXVlc3Qud3JpdGUoYnVmZmVyLmRhdGEsIGJ1ZmZlci5lbmNvZGluZywgd3JpdGVOZXh0KTtcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICByZXF1ZXN0LmVuZCgpO1xuICAgICAgfVxuICAgIH0oKSk7XG4gIH1cbn07XG5cbi8vIFByb2Nlc3NlcyBhIHJlc3BvbnNlIGZyb20gdGhlIGN1cnJlbnQgbmF0aXZlIHJlcXVlc3RcblJlZGlyZWN0YWJsZVJlcXVlc3QucHJvdG90eXBlLl9wcm9jZXNzUmVzcG9uc2UgPSBmdW5jdGlvbiAocmVzcG9uc2UpIHtcbiAgLy8gU3RvcmUgdGhlIHJlZGlyZWN0ZWQgcmVzcG9uc2VcbiAgaWYgKHRoaXMuX29wdGlvbnMudHJhY2tSZWRpcmVjdHMpIHtcbiAgICB0aGlzLl9yZWRpcmVjdHMucHVzaCh7XG4gICAgICB1cmw6IHRoaXMuX2N1cnJlbnRVcmwsXG4gICAgICBoZWFkZXJzOiByZXNwb25zZS5oZWFkZXJzLFxuICAgICAgc3RhdHVzQ29kZTogcmVzcG9uc2Uuc3RhdHVzQ29kZSxcbiAgICB9KTtcbiAgfVxuXG4gIC8vIFJGQzcyMzHCpzYuNDogVGhlIDN4eCAoUmVkaXJlY3Rpb24pIGNsYXNzIG9mIHN0YXR1cyBjb2RlIGluZGljYXRlc1xuICAvLyB0aGF0IGZ1cnRoZXIgYWN0aW9uIG5lZWRzIHRvIGJlIHRha2VuIGJ5IHRoZSB1c2VyIGFnZW50IGluIG9yZGVyIHRvXG4gIC8vIGZ1bGZpbGwgdGhlIHJlcXVlc3QuIElmIGEgTG9jYXRpb24gaGVhZGVyIGZpZWxkIGlzIHByb3ZpZGVkLFxuICAvLyB0aGUgdXNlciBhZ2VudCBNQVkgYXV0b21hdGljYWxseSByZWRpcmVjdCBpdHMgcmVxdWVzdCB0byB0aGUgVVJJXG4gIC8vIHJlZmVyZW5jZWQgYnkgdGhlIExvY2F0aW9uIGZpZWxkIHZhbHVlLFxuICAvLyBldmVuIGlmIHRoZSBzcGVjaWZpYyBzdGF0dXMgY29kZSBpcyBub3QgdW5kZXJzdG9vZC5cbiAgdmFyIGxvY2F0aW9uID0gcmVzcG9uc2UuaGVhZGVycy5sb2NhdGlvbjtcbiAgaWYgKGxvY2F0aW9uICYmIHRoaXMuX29wdGlvbnMuZm9sbG93UmVkaXJlY3RzICE9PSBmYWxzZSAmJlxuICAgICAgcmVzcG9uc2Uuc3RhdHVzQ29kZSA+PSAzMDAgJiYgcmVzcG9uc2Uuc3RhdHVzQ29kZSA8IDQwMCkge1xuICAgIC8vIFJGQzcyMzHCpzYuNDogQSBjbGllbnQgU0hPVUxEIGRldGVjdCBhbmQgaW50ZXJ2ZW5lXG4gICAgLy8gaW4gY3ljbGljYWwgcmVkaXJlY3Rpb25zIChpLmUuLCBcImluZmluaXRlXCIgcmVkaXJlY3Rpb24gbG9vcHMpLlxuICAgIGlmICgrK3RoaXMuX3JlZGlyZWN0Q291bnQgPiB0aGlzLl9vcHRpb25zLm1heFJlZGlyZWN0cykge1xuICAgICAgdGhpcy5lbWl0KFwiZXJyb3JcIiwgbmV3IEVycm9yKFwiTWF4IHJlZGlyZWN0cyBleGNlZWRlZC5cIikpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIC8vIFJGQzcyMzHCpzYuNDogQXV0b21hdGljIHJlZGlyZWN0aW9uIG5lZWRzIHRvIGRvbmUgd2l0aFxuICAgIC8vIGNhcmUgZm9yIG1ldGhvZHMgbm90IGtub3duIHRvIGJlIHNhZmUgW+KApl0sXG4gICAgLy8gc2luY2UgdGhlIHVzZXIgbWlnaHQgbm90IHdpc2ggdG8gcmVkaXJlY3QgYW4gdW5zYWZlIHJlcXVlc3QuXG4gICAgLy8gUkZDNzIzMcKnNi40Ljc6IFRoZSAzMDcgKFRlbXBvcmFyeSBSZWRpcmVjdCkgc3RhdHVzIGNvZGUgaW5kaWNhdGVzXG4gICAgLy8gdGhhdCB0aGUgdGFyZ2V0IHJlc291cmNlIHJlc2lkZXMgdGVtcG9yYXJpbHkgdW5kZXIgYSBkaWZmZXJlbnQgVVJJXG4gICAgLy8gYW5kIHRoZSB1c2VyIGFnZW50IE1VU1QgTk9UIGNoYW5nZSB0aGUgcmVxdWVzdCBtZXRob2RcbiAgICAvLyBpZiBpdCBwZXJmb3JtcyBhbiBhdXRvbWF0aWMgcmVkaXJlY3Rpb24gdG8gdGhhdCBVUkkuXG4gICAgdmFyIGhlYWRlcjtcbiAgICB2YXIgaGVhZGVycyA9IHRoaXMuX29wdGlvbnMuaGVhZGVycztcbiAgICBpZiAocmVzcG9uc2Uuc3RhdHVzQ29kZSAhPT0gMzA3ICYmICEodGhpcy5fb3B0aW9ucy5tZXRob2QgaW4gU0FGRV9NRVRIT0RTKSkge1xuICAgICAgdGhpcy5fb3B0aW9ucy5tZXRob2QgPSBcIkdFVFwiO1xuICAgICAgLy8gRHJvcCBhIHBvc3NpYmxlIGVudGl0eSBhbmQgaGVhZGVycyByZWxhdGVkIHRvIGl0XG4gICAgICB0aGlzLl9yZXF1ZXN0Qm9keUJ1ZmZlcnMgPSBbXTtcbiAgICAgIGZvciAoaGVhZGVyIGluIGhlYWRlcnMpIHtcbiAgICAgICAgaWYgKC9eY29udGVudC0vaS50ZXN0KGhlYWRlcikpIHtcbiAgICAgICAgICBkZWxldGUgaGVhZGVyc1toZWFkZXJdO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gRHJvcCB0aGUgSG9zdCBoZWFkZXIsIGFzIHRoZSByZWRpcmVjdCBtaWdodCBsZWFkIHRvIGEgZGlmZmVyZW50IGhvc3RcbiAgICBpZiAoIXRoaXMuX2lzUmVkaXJlY3QpIHtcbiAgICAgIGZvciAoaGVhZGVyIGluIGhlYWRlcnMpIHtcbiAgICAgICAgaWYgKC9eaG9zdCQvaS50ZXN0KGhlYWRlcikpIHtcbiAgICAgICAgICBkZWxldGUgaGVhZGVyc1toZWFkZXJdO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gUGVyZm9ybSB0aGUgcmVkaXJlY3RlZCByZXF1ZXN0XG4gICAgdmFyIHJlZGlyZWN0VXJsID0gdXJsLnJlc29sdmUodGhpcy5fY3VycmVudFVybCwgbG9jYXRpb24pO1xuICAgIGRlYnVnKFwicmVkaXJlY3RpbmcgdG9cIiwgcmVkaXJlY3RVcmwpO1xuICAgIE9iamVjdC5hc3NpZ24odGhpcy5fb3B0aW9ucywgdXJsLnBhcnNlKHJlZGlyZWN0VXJsKSk7XG4gICAgdGhpcy5faXNSZWRpcmVjdCA9IHRydWU7XG4gICAgdGhpcy5fcGVyZm9ybVJlcXVlc3QoKTtcblxuICAgIC8vIERpc2NhcmQgdGhlIHJlbWFpbmRlciBvZiB0aGUgcmVzcG9uc2UgdG8gYXZvaWQgd2FpdGluZyBmb3IgZGF0YVxuICAgIHJlc3BvbnNlLmRlc3Ryb3koKTtcbiAgfVxuICBlbHNlIHtcbiAgICAvLyBUaGUgcmVzcG9uc2UgaXMgbm90IGEgcmVkaXJlY3Q7IHJldHVybiBpdCBhcy1pc1xuICAgIHJlc3BvbnNlLnJlc3BvbnNlVXJsID0gdGhpcy5fY3VycmVudFVybDtcbiAgICByZXNwb25zZS5yZWRpcmVjdHMgPSB0aGlzLl9yZWRpcmVjdHM7XG4gICAgdGhpcy5lbWl0KFwicmVzcG9uc2VcIiwgcmVzcG9uc2UpO1xuXG4gICAgLy8gQ2xlYW4gdXBcbiAgICB0aGlzLl9yZXF1ZXN0Qm9keUJ1ZmZlcnMgPSBbXTtcbiAgfVxufTtcblxuLy8gV3JhcHMgdGhlIGtleS92YWx1ZSBvYmplY3Qgb2YgcHJvdG9jb2xzIHdpdGggcmVkaXJlY3QgZnVuY3Rpb25hbGl0eVxuZnVuY3Rpb24gd3JhcChwcm90b2NvbHMpIHtcbiAgLy8gRGVmYXVsdCBzZXR0aW5nc1xuICB2YXIgZXhwb3J0cyA9IHtcbiAgICBtYXhSZWRpcmVjdHM6IDIxLFxuICAgIG1heEJvZHlMZW5ndGg6IDEwICogMTAyNCAqIDEwMjQsXG4gIH07XG5cbiAgLy8gV3JhcCBlYWNoIHByb3RvY29sXG4gIHZhciBuYXRpdmVQcm90b2NvbHMgPSB7fTtcbiAgT2JqZWN0LmtleXMocHJvdG9jb2xzKS5mb3JFYWNoKGZ1bmN0aW9uIChzY2hlbWUpIHtcbiAgICB2YXIgcHJvdG9jb2wgPSBzY2hlbWUgKyBcIjpcIjtcbiAgICB2YXIgbmF0aXZlUHJvdG9jb2wgPSBuYXRpdmVQcm90b2NvbHNbcHJvdG9jb2xdID0gcHJvdG9jb2xzW3NjaGVtZV07XG4gICAgdmFyIHdyYXBwZWRQcm90b2NvbCA9IGV4cG9ydHNbc2NoZW1lXSA9IE9iamVjdC5jcmVhdGUobmF0aXZlUHJvdG9jb2wpO1xuXG4gICAgLy8gRXhlY3V0ZXMgYSByZXF1ZXN0LCBmb2xsb3dpbmcgcmVkaXJlY3RzXG4gICAgd3JhcHBlZFByb3RvY29sLnJlcXVlc3QgPSBmdW5jdGlvbiAob3B0aW9ucywgY2FsbGJhY2spIHtcbiAgICAgIGlmICh0eXBlb2Ygb3B0aW9ucyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICBvcHRpb25zID0gdXJsLnBhcnNlKG9wdGlvbnMpO1xuICAgICAgICBvcHRpb25zLm1heFJlZGlyZWN0cyA9IGV4cG9ydHMubWF4UmVkaXJlY3RzO1xuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIG9wdGlvbnMgPSBPYmplY3QuYXNzaWduKHtcbiAgICAgICAgICBwcm90b2NvbDogcHJvdG9jb2wsXG4gICAgICAgICAgbWF4UmVkaXJlY3RzOiBleHBvcnRzLm1heFJlZGlyZWN0cyxcbiAgICAgICAgICBtYXhCb2R5TGVuZ3RoOiBleHBvcnRzLm1heEJvZHlMZW5ndGgsXG4gICAgICAgIH0sIG9wdGlvbnMpO1xuICAgICAgfVxuICAgICAgb3B0aW9ucy5uYXRpdmVQcm90b2NvbHMgPSBuYXRpdmVQcm90b2NvbHM7XG4gICAgICBhc3NlcnQuZXF1YWwob3B0aW9ucy5wcm90b2NvbCwgcHJvdG9jb2wsIFwicHJvdG9jb2wgbWlzbWF0Y2hcIik7XG4gICAgICBkZWJ1ZyhcIm9wdGlvbnNcIiwgb3B0aW9ucyk7XG4gICAgICByZXR1cm4gbmV3IFJlZGlyZWN0YWJsZVJlcXVlc3Qob3B0aW9ucywgY2FsbGJhY2spO1xuICAgIH07XG5cbiAgICAvLyBFeGVjdXRlcyBhIEdFVCByZXF1ZXN0LCBmb2xsb3dpbmcgcmVkaXJlY3RzXG4gICAgd3JhcHBlZFByb3RvY29sLmdldCA9IGZ1bmN0aW9uIChvcHRpb25zLCBjYWxsYmFjaykge1xuICAgICAgdmFyIHJlcXVlc3QgPSB3cmFwcGVkUHJvdG9jb2wucmVxdWVzdChvcHRpb25zLCBjYWxsYmFjayk7XG4gICAgICByZXF1ZXN0LmVuZCgpO1xuICAgICAgcmV0dXJuIHJlcXVlc3Q7XG4gICAgfTtcbiAgfSk7XG4gIHJldHVybiBleHBvcnRzO1xufVxuXG4vLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHdyYXAoeyBodHRwOiBodHRwLCBodHRwczogaHR0cHMgfSk7XG5tb2R1bGUuZXhwb3J0cy53cmFwID0gd3JhcDtcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInVybFwiKTsiLCJcbi8qKlxuICogVGhpcyBpcyB0aGUgY29tbW9uIGxvZ2ljIGZvciBib3RoIHRoZSBOb2RlLmpzIGFuZCB3ZWIgYnJvd3NlclxuICogaW1wbGVtZW50YXRpb25zIG9mIGBkZWJ1ZygpYC5cbiAqXG4gKiBFeHBvc2UgYGRlYnVnKClgIGFzIHRoZSBtb2R1bGUuXG4gKi9cblxuZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gY3JlYXRlRGVidWcuZGVidWcgPSBjcmVhdGVEZWJ1Z1snZGVmYXVsdCddID0gY3JlYXRlRGVidWc7XG5leHBvcnRzLmNvZXJjZSA9IGNvZXJjZTtcbmV4cG9ydHMuZGlzYWJsZSA9IGRpc2FibGU7XG5leHBvcnRzLmVuYWJsZSA9IGVuYWJsZTtcbmV4cG9ydHMuZW5hYmxlZCA9IGVuYWJsZWQ7XG5leHBvcnRzLmh1bWFuaXplID0gcmVxdWlyZSgnbXMnKTtcblxuLyoqXG4gKiBBY3RpdmUgYGRlYnVnYCBpbnN0YW5jZXMuXG4gKi9cbmV4cG9ydHMuaW5zdGFuY2VzID0gW107XG5cbi8qKlxuICogVGhlIGN1cnJlbnRseSBhY3RpdmUgZGVidWcgbW9kZSBuYW1lcywgYW5kIG5hbWVzIHRvIHNraXAuXG4gKi9cblxuZXhwb3J0cy5uYW1lcyA9IFtdO1xuZXhwb3J0cy5za2lwcyA9IFtdO1xuXG4vKipcbiAqIE1hcCBvZiBzcGVjaWFsIFwiJW5cIiBoYW5kbGluZyBmdW5jdGlvbnMsIGZvciB0aGUgZGVidWcgXCJmb3JtYXRcIiBhcmd1bWVudC5cbiAqXG4gKiBWYWxpZCBrZXkgbmFtZXMgYXJlIGEgc2luZ2xlLCBsb3dlciBvciB1cHBlci1jYXNlIGxldHRlciwgaS5lLiBcIm5cIiBhbmQgXCJOXCIuXG4gKi9cblxuZXhwb3J0cy5mb3JtYXR0ZXJzID0ge307XG5cbi8qKlxuICogU2VsZWN0IGEgY29sb3IuXG4gKiBAcGFyYW0ge1N0cmluZ30gbmFtZXNwYWNlXG4gKiBAcmV0dXJuIHtOdW1iZXJ9XG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5mdW5jdGlvbiBzZWxlY3RDb2xvcihuYW1lc3BhY2UpIHtcbiAgdmFyIGhhc2ggPSAwLCBpO1xuXG4gIGZvciAoaSBpbiBuYW1lc3BhY2UpIHtcbiAgICBoYXNoICA9ICgoaGFzaCA8PCA1KSAtIGhhc2gpICsgbmFtZXNwYWNlLmNoYXJDb2RlQXQoaSk7XG4gICAgaGFzaCB8PSAwOyAvLyBDb252ZXJ0IHRvIDMyYml0IGludGVnZXJcbiAgfVxuXG4gIHJldHVybiBleHBvcnRzLmNvbG9yc1tNYXRoLmFicyhoYXNoKSAlIGV4cG9ydHMuY29sb3JzLmxlbmd0aF07XG59XG5cbi8qKlxuICogQ3JlYXRlIGEgZGVidWdnZXIgd2l0aCB0aGUgZ2l2ZW4gYG5hbWVzcGFjZWAuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IG5hbWVzcGFjZVxuICogQHJldHVybiB7RnVuY3Rpb259XG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbmZ1bmN0aW9uIGNyZWF0ZURlYnVnKG5hbWVzcGFjZSkge1xuXG4gIHZhciBwcmV2VGltZTtcblxuICBmdW5jdGlvbiBkZWJ1ZygpIHtcbiAgICAvLyBkaXNhYmxlZD9cbiAgICBpZiAoIWRlYnVnLmVuYWJsZWQpIHJldHVybjtcblxuICAgIHZhciBzZWxmID0gZGVidWc7XG5cbiAgICAvLyBzZXQgYGRpZmZgIHRpbWVzdGFtcFxuICAgIHZhciBjdXJyID0gK25ldyBEYXRlKCk7XG4gICAgdmFyIG1zID0gY3VyciAtIChwcmV2VGltZSB8fCBjdXJyKTtcbiAgICBzZWxmLmRpZmYgPSBtcztcbiAgICBzZWxmLnByZXYgPSBwcmV2VGltZTtcbiAgICBzZWxmLmN1cnIgPSBjdXJyO1xuICAgIHByZXZUaW1lID0gY3VycjtcblxuICAgIC8vIHR1cm4gdGhlIGBhcmd1bWVudHNgIGludG8gYSBwcm9wZXIgQXJyYXlcbiAgICB2YXIgYXJncyA9IG5ldyBBcnJheShhcmd1bWVudHMubGVuZ3RoKTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFyZ3MubGVuZ3RoOyBpKyspIHtcbiAgICAgIGFyZ3NbaV0gPSBhcmd1bWVudHNbaV07XG4gICAgfVxuXG4gICAgYXJnc1swXSA9IGV4cG9ydHMuY29lcmNlKGFyZ3NbMF0pO1xuXG4gICAgaWYgKCdzdHJpbmcnICE9PSB0eXBlb2YgYXJnc1swXSkge1xuICAgICAgLy8gYW55dGhpbmcgZWxzZSBsZXQncyBpbnNwZWN0IHdpdGggJU9cbiAgICAgIGFyZ3MudW5zaGlmdCgnJU8nKTtcbiAgICB9XG5cbiAgICAvLyBhcHBseSBhbnkgYGZvcm1hdHRlcnNgIHRyYW5zZm9ybWF0aW9uc1xuICAgIHZhciBpbmRleCA9IDA7XG4gICAgYXJnc1swXSA9IGFyZ3NbMF0ucmVwbGFjZSgvJShbYS16QS1aJV0pL2csIGZ1bmN0aW9uKG1hdGNoLCBmb3JtYXQpIHtcbiAgICAgIC8vIGlmIHdlIGVuY291bnRlciBhbiBlc2NhcGVkICUgdGhlbiBkb24ndCBpbmNyZWFzZSB0aGUgYXJyYXkgaW5kZXhcbiAgICAgIGlmIChtYXRjaCA9PT0gJyUlJykgcmV0dXJuIG1hdGNoO1xuICAgICAgaW5kZXgrKztcbiAgICAgIHZhciBmb3JtYXR0ZXIgPSBleHBvcnRzLmZvcm1hdHRlcnNbZm9ybWF0XTtcbiAgICAgIGlmICgnZnVuY3Rpb24nID09PSB0eXBlb2YgZm9ybWF0dGVyKSB7XG4gICAgICAgIHZhciB2YWwgPSBhcmdzW2luZGV4XTtcbiAgICAgICAgbWF0Y2ggPSBmb3JtYXR0ZXIuY2FsbChzZWxmLCB2YWwpO1xuXG4gICAgICAgIC8vIG5vdyB3ZSBuZWVkIHRvIHJlbW92ZSBgYXJnc1tpbmRleF1gIHNpbmNlIGl0J3MgaW5saW5lZCBpbiB0aGUgYGZvcm1hdGBcbiAgICAgICAgYXJncy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgICBpbmRleC0tO1xuICAgICAgfVxuICAgICAgcmV0dXJuIG1hdGNoO1xuICAgIH0pO1xuXG4gICAgLy8gYXBwbHkgZW52LXNwZWNpZmljIGZvcm1hdHRpbmcgKGNvbG9ycywgZXRjLilcbiAgICBleHBvcnRzLmZvcm1hdEFyZ3MuY2FsbChzZWxmLCBhcmdzKTtcblxuICAgIHZhciBsb2dGbiA9IGRlYnVnLmxvZyB8fCBleHBvcnRzLmxvZyB8fCBjb25zb2xlLmxvZy5iaW5kKGNvbnNvbGUpO1xuICAgIGxvZ0ZuLmFwcGx5KHNlbGYsIGFyZ3MpO1xuICB9XG5cbiAgZGVidWcubmFtZXNwYWNlID0gbmFtZXNwYWNlO1xuICBkZWJ1Zy5lbmFibGVkID0gZXhwb3J0cy5lbmFibGVkKG5hbWVzcGFjZSk7XG4gIGRlYnVnLnVzZUNvbG9ycyA9IGV4cG9ydHMudXNlQ29sb3JzKCk7XG4gIGRlYnVnLmNvbG9yID0gc2VsZWN0Q29sb3IobmFtZXNwYWNlKTtcbiAgZGVidWcuZGVzdHJveSA9IGRlc3Ryb3k7XG5cbiAgLy8gZW52LXNwZWNpZmljIGluaXRpYWxpemF0aW9uIGxvZ2ljIGZvciBkZWJ1ZyBpbnN0YW5jZXNcbiAgaWYgKCdmdW5jdGlvbicgPT09IHR5cGVvZiBleHBvcnRzLmluaXQpIHtcbiAgICBleHBvcnRzLmluaXQoZGVidWcpO1xuICB9XG5cbiAgZXhwb3J0cy5pbnN0YW5jZXMucHVzaChkZWJ1Zyk7XG5cbiAgcmV0dXJuIGRlYnVnO1xufVxuXG5mdW5jdGlvbiBkZXN0cm95ICgpIHtcbiAgdmFyIGluZGV4ID0gZXhwb3J0cy5pbnN0YW5jZXMuaW5kZXhPZih0aGlzKTtcbiAgaWYgKGluZGV4ICE9PSAtMSkge1xuICAgIGV4cG9ydHMuaW5zdGFuY2VzLnNwbGljZShpbmRleCwgMSk7XG4gICAgcmV0dXJuIHRydWU7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG59XG5cbi8qKlxuICogRW5hYmxlcyBhIGRlYnVnIG1vZGUgYnkgbmFtZXNwYWNlcy4gVGhpcyBjYW4gaW5jbHVkZSBtb2Rlc1xuICogc2VwYXJhdGVkIGJ5IGEgY29sb24gYW5kIHdpbGRjYXJkcy5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gbmFtZXNwYWNlc1xuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5mdW5jdGlvbiBlbmFibGUobmFtZXNwYWNlcykge1xuICBleHBvcnRzLnNhdmUobmFtZXNwYWNlcyk7XG5cbiAgZXhwb3J0cy5uYW1lcyA9IFtdO1xuICBleHBvcnRzLnNraXBzID0gW107XG5cbiAgdmFyIGk7XG4gIHZhciBzcGxpdCA9ICh0eXBlb2YgbmFtZXNwYWNlcyA9PT0gJ3N0cmluZycgPyBuYW1lc3BhY2VzIDogJycpLnNwbGl0KC9bXFxzLF0rLyk7XG4gIHZhciBsZW4gPSBzcGxpdC5sZW5ndGg7XG5cbiAgZm9yIChpID0gMDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgaWYgKCFzcGxpdFtpXSkgY29udGludWU7IC8vIGlnbm9yZSBlbXB0eSBzdHJpbmdzXG4gICAgbmFtZXNwYWNlcyA9IHNwbGl0W2ldLnJlcGxhY2UoL1xcKi9nLCAnLio/Jyk7XG4gICAgaWYgKG5hbWVzcGFjZXNbMF0gPT09ICctJykge1xuICAgICAgZXhwb3J0cy5za2lwcy5wdXNoKG5ldyBSZWdFeHAoJ14nICsgbmFtZXNwYWNlcy5zdWJzdHIoMSkgKyAnJCcpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZXhwb3J0cy5uYW1lcy5wdXNoKG5ldyBSZWdFeHAoJ14nICsgbmFtZXNwYWNlcyArICckJykpO1xuICAgIH1cbiAgfVxuXG4gIGZvciAoaSA9IDA7IGkgPCBleHBvcnRzLmluc3RhbmNlcy5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpbnN0YW5jZSA9IGV4cG9ydHMuaW5zdGFuY2VzW2ldO1xuICAgIGluc3RhbmNlLmVuYWJsZWQgPSBleHBvcnRzLmVuYWJsZWQoaW5zdGFuY2UubmFtZXNwYWNlKTtcbiAgfVxufVxuXG4vKipcbiAqIERpc2FibGUgZGVidWcgb3V0cHV0LlxuICpcbiAqIEBhcGkgcHVibGljXG4gKi9cblxuZnVuY3Rpb24gZGlzYWJsZSgpIHtcbiAgZXhwb3J0cy5lbmFibGUoJycpO1xufVxuXG4vKipcbiAqIFJldHVybnMgdHJ1ZSBpZiB0aGUgZ2l2ZW4gbW9kZSBuYW1lIGlzIGVuYWJsZWQsIGZhbHNlIG90aGVyd2lzZS5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gbmFtZVxuICogQHJldHVybiB7Qm9vbGVhbn1cbiAqIEBhcGkgcHVibGljXG4gKi9cblxuZnVuY3Rpb24gZW5hYmxlZChuYW1lKSB7XG4gIGlmIChuYW1lW25hbWUubGVuZ3RoIC0gMV0gPT09ICcqJykge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG4gIHZhciBpLCBsZW47XG4gIGZvciAoaSA9IDAsIGxlbiA9IGV4cG9ydHMuc2tpcHMubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICBpZiAoZXhwb3J0cy5za2lwc1tpXS50ZXN0KG5hbWUpKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG4gIGZvciAoaSA9IDAsIGxlbiA9IGV4cG9ydHMubmFtZXMubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICBpZiAoZXhwb3J0cy5uYW1lc1tpXS50ZXN0KG5hbWUpKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGZhbHNlO1xufVxuXG4vKipcbiAqIENvZXJjZSBgdmFsYC5cbiAqXG4gKiBAcGFyYW0ge01peGVkfSB2YWxcbiAqIEByZXR1cm4ge01peGVkfVxuICogQGFwaSBwcml2YXRlXG4gKi9cblxuZnVuY3Rpb24gY29lcmNlKHZhbCkge1xuICBpZiAodmFsIGluc3RhbmNlb2YgRXJyb3IpIHJldHVybiB2YWwuc3RhY2sgfHwgdmFsLm1lc3NhZ2U7XG4gIHJldHVybiB2YWw7XG59XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciB1dGlscyA9IHJlcXVpcmUoJy4uL3V0aWxzJyk7XG5cbi8qKlxuICogQ29uZmlnLXNwZWNpZmljIG1lcmdlLWZ1bmN0aW9uIHdoaWNoIGNyZWF0ZXMgYSBuZXcgY29uZmlnLW9iamVjdFxuICogYnkgbWVyZ2luZyB0d28gY29uZmlndXJhdGlvbiBvYmplY3RzIHRvZ2V0aGVyLlxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBjb25maWcxXG4gKiBAcGFyYW0ge09iamVjdH0gY29uZmlnMlxuICogQHJldHVybnMge09iamVjdH0gTmV3IG9iamVjdCByZXN1bHRpbmcgZnJvbSBtZXJnaW5nIGNvbmZpZzIgdG8gY29uZmlnMVxuICovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIG1lcmdlQ29uZmlnKGNvbmZpZzEsIGNvbmZpZzIpIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gIGNvbmZpZzIgPSBjb25maWcyIHx8IHt9O1xuICB2YXIgY29uZmlnID0ge307XG5cbiAgdmFyIHZhbHVlRnJvbUNvbmZpZzJLZXlzID0gWyd1cmwnLCAnbWV0aG9kJywgJ3BhcmFtcycsICdkYXRhJ107XG4gIHZhciBtZXJnZURlZXBQcm9wZXJ0aWVzS2V5cyA9IFsnaGVhZGVycycsICdhdXRoJywgJ3Byb3h5J107XG4gIHZhciBkZWZhdWx0VG9Db25maWcyS2V5cyA9IFtcbiAgICAnYmFzZVVSTCcsICd1cmwnLCAndHJhbnNmb3JtUmVxdWVzdCcsICd0cmFuc2Zvcm1SZXNwb25zZScsICdwYXJhbXNTZXJpYWxpemVyJyxcbiAgICAndGltZW91dCcsICd3aXRoQ3JlZGVudGlhbHMnLCAnYWRhcHRlcicsICdyZXNwb25zZVR5cGUnLCAneHNyZkNvb2tpZU5hbWUnLFxuICAgICd4c3JmSGVhZGVyTmFtZScsICdvblVwbG9hZFByb2dyZXNzJywgJ29uRG93bmxvYWRQcm9ncmVzcycsXG4gICAgJ21heENvbnRlbnRMZW5ndGgnLCAndmFsaWRhdGVTdGF0dXMnLCAnbWF4UmVkaXJlY3RzJywgJ2h0dHBBZ2VudCcsXG4gICAgJ2h0dHBzQWdlbnQnLCAnY2FuY2VsVG9rZW4nLCAnc29ja2V0UGF0aCdcbiAgXTtcblxuICB1dGlscy5mb3JFYWNoKHZhbHVlRnJvbUNvbmZpZzJLZXlzLCBmdW5jdGlvbiB2YWx1ZUZyb21Db25maWcyKHByb3ApIHtcbiAgICBpZiAodHlwZW9mIGNvbmZpZzJbcHJvcF0gIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICBjb25maWdbcHJvcF0gPSBjb25maWcyW3Byb3BdO1xuICAgIH1cbiAgfSk7XG5cbiAgdXRpbHMuZm9yRWFjaChtZXJnZURlZXBQcm9wZXJ0aWVzS2V5cywgZnVuY3Rpb24gbWVyZ2VEZWVwUHJvcGVydGllcyhwcm9wKSB7XG4gICAgaWYgKHV0aWxzLmlzT2JqZWN0KGNvbmZpZzJbcHJvcF0pKSB7XG4gICAgICBjb25maWdbcHJvcF0gPSB1dGlscy5kZWVwTWVyZ2UoY29uZmlnMVtwcm9wXSwgY29uZmlnMltwcm9wXSk7XG4gICAgfSBlbHNlIGlmICh0eXBlb2YgY29uZmlnMltwcm9wXSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIGNvbmZpZ1twcm9wXSA9IGNvbmZpZzJbcHJvcF07XG4gICAgfSBlbHNlIGlmICh1dGlscy5pc09iamVjdChjb25maWcxW3Byb3BdKSkge1xuICAgICAgY29uZmlnW3Byb3BdID0gdXRpbHMuZGVlcE1lcmdlKGNvbmZpZzFbcHJvcF0pO1xuICAgIH0gZWxzZSBpZiAodHlwZW9mIGNvbmZpZzFbcHJvcF0gIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICBjb25maWdbcHJvcF0gPSBjb25maWcxW3Byb3BdO1xuICAgIH1cbiAgfSk7XG5cbiAgdXRpbHMuZm9yRWFjaChkZWZhdWx0VG9Db25maWcyS2V5cywgZnVuY3Rpb24gZGVmYXVsdFRvQ29uZmlnMihwcm9wKSB7XG4gICAgaWYgKHR5cGVvZiBjb25maWcyW3Byb3BdICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgY29uZmlnW3Byb3BdID0gY29uZmlnMltwcm9wXTtcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBjb25maWcxW3Byb3BdICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgY29uZmlnW3Byb3BdID0gY29uZmlnMVtwcm9wXTtcbiAgICB9XG4gIH0pO1xuXG4gIHZhciBheGlvc0tleXMgPSB2YWx1ZUZyb21Db25maWcyS2V5c1xuICAgIC5jb25jYXQobWVyZ2VEZWVwUHJvcGVydGllc0tleXMpXG4gICAgLmNvbmNhdChkZWZhdWx0VG9Db25maWcyS2V5cyk7XG5cbiAgdmFyIG90aGVyS2V5cyA9IE9iamVjdFxuICAgIC5rZXlzKGNvbmZpZzIpXG4gICAgLmZpbHRlcihmdW5jdGlvbiBmaWx0ZXJBeGlvc0tleXMoa2V5KSB7XG4gICAgICByZXR1cm4gYXhpb3NLZXlzLmluZGV4T2Yoa2V5KSA9PT0gLTE7XG4gICAgfSk7XG5cbiAgdXRpbHMuZm9yRWFjaChvdGhlcktleXMsIGZ1bmN0aW9uIG90aGVyS2V5c0RlZmF1bHRUb0NvbmZpZzIocHJvcCkge1xuICAgIGlmICh0eXBlb2YgY29uZmlnMltwcm9wXSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIGNvbmZpZ1twcm9wXSA9IGNvbmZpZzJbcHJvcF07XG4gICAgfSBlbHNlIGlmICh0eXBlb2YgY29uZmlnMVtwcm9wXSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIGNvbmZpZ1twcm9wXSA9IGNvbmZpZzFbcHJvcF07XG4gICAgfVxuICB9KTtcblxuICByZXR1cm4gY29uZmlnO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcblxuLyoqXG4gKiBBIGBDYW5jZWxgIGlzIGFuIG9iamVjdCB0aGF0IGlzIHRocm93biB3aGVuIGFuIG9wZXJhdGlvbiBpcyBjYW5jZWxlZC5cbiAqXG4gKiBAY2xhc3NcbiAqIEBwYXJhbSB7c3RyaW5nPX0gbWVzc2FnZSBUaGUgbWVzc2FnZS5cbiAqL1xuZnVuY3Rpb24gQ2FuY2VsKG1lc3NhZ2UpIHtcbiAgdGhpcy5tZXNzYWdlID0gbWVzc2FnZTtcbn1cblxuQ2FuY2VsLnByb3RvdHlwZS50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICByZXR1cm4gJ0NhbmNlbCcgKyAodGhpcy5tZXNzYWdlID8gJzogJyArIHRoaXMubWVzc2FnZSA6ICcnKTtcbn07XG5cbkNhbmNlbC5wcm90b3R5cGUuX19DQU5DRUxfXyA9IHRydWU7XG5cbm1vZHVsZS5leHBvcnRzID0gQ2FuY2VsO1xuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZnNcIik7IiwiXHJcbi8vIGh0dHBzOi8vd3d3LmVmLmNvbS93d2VuL2VuZ2xpc2gtcmVzb3VyY2VzL2VuZ2xpc2gtdm9jYWJ1bGFyeS90b3AtMzAwMC13b3Jkcy9cclxuXHJcbmV4cG9ydCBjb25zdCBUaGVNb3N0Q29tbW9uMzAwMCA9IHtcclxuICAgIGEgOiAxLFxyXG4gICAgYWJhbmRvbiA6IDEsXHJcbiAgICBhYmlsaXR5IDogMSxcclxuICAgIGFibGUgOiAxLFxyXG4gICAgYWJvcnRpb24gOiAxLFxyXG4gICAgYWJvdXQgOiAxLFxyXG4gICAgYWJvdmUgOiAxLFxyXG4gICAgYWJyb2FkIDogMSxcclxuICAgIGFic2VuY2UgOiAxLFxyXG4gICAgYWJzb2x1dGUgOiAxLFxyXG4gICAgYWJzb2x1dGVseSA6IDEsXHJcbiAgICBhYnNvcmIgOiAxLFxyXG4gICAgYWJ1c2UgOiAxLFxyXG4gICAgYWNhZGVtaWMgOiAxLFxyXG4gICAgYWNjZXB0IDogMSxcclxuICAgIGFjY2VzcyA6IDEsXHJcbiAgICBhY2NpZGVudCA6IDEsXHJcbiAgICBhY2NvbXBhbnkgOiAxLFxyXG4gICAgYWNjb21wbGlzaCA6IDEsXHJcbiAgICBhY2NvcmRpbmcgOiAxLFxyXG4gICAgYWNjb3VudCA6IDEsXHJcbiAgICBhY2N1cmF0ZSA6IDEsXHJcbiAgICBhY2N1c2UgOiAxLFxyXG4gICAgYWNoaWV2ZSA6IDEsXHJcbiAgICBhY2hpZXZlbWVudCA6IDEsXHJcbiAgICBhY2lkIDogMSxcclxuICAgIGFja25vd2xlZGdlIDogMSxcclxuICAgIGFjcXVpcmUgOiAxLFxyXG4gICAgYWNyb3NzIDogMSxcclxuICAgIGFjdCA6IDEsXHJcbiAgICBhY3Rpb24gOiAxLFxyXG4gICAgYWN0aXZlIDogMSxcclxuICAgIGFjdGl2aXN0IDogMSxcclxuICAgIGFjdGl2aXR5IDogMSxcclxuICAgIGFjdG9yIDogMSxcclxuICAgIGFjdHJlc3MgOiAxLFxyXG4gICAgYWN0dWFsIDogMSxcclxuICAgIGFjdHVhbGx5IDogMSxcclxuICAgIGFkIDogMSxcclxuICAgIGFkYXB0IDogMSxcclxuICAgIGFkZCA6IDEsXHJcbiAgICBhZGRpdGlvbiA6IDEsXHJcbiAgICBhZGRpdGlvbmFsIDogMSxcclxuICAgIGFkZHJlc3MgOiAxLFxyXG4gICAgYWRlcXVhdGUgOiAxLFxyXG4gICAgYWRqdXN0IDogMSxcclxuICAgIGFkanVzdG1lbnQgOiAxLFxyXG4gICAgYWRtaW5pc3RyYXRpb24gOiAxLFxyXG4gICAgYWRtaW5pc3RyYXRvciA6IDEsXHJcbiAgICBhZG1pcmUgOiAxLFxyXG4gICAgYWRtaXNzaW9uIDogMSxcclxuICAgIGFkbWl0IDogMSxcclxuICAgIGFkb2xlc2NlbnQgOiAxLFxyXG4gICAgYWRvcHQgOiAxLFxyXG4gICAgYWR1bHQgOiAxLFxyXG4gICAgYWR2YW5jZSA6IDEsXHJcbiAgICBhZHZhbmNlZCA6IDEsXHJcbiAgICBhZHZhbnRhZ2UgOiAxLFxyXG4gICAgYWR2ZW50dXJlIDogMSxcclxuICAgIGFkdmVydGlzaW5nIDogMSxcclxuICAgIGFkdmljZSA6IDEsXHJcbiAgICBhZHZpc2UgOiAxLFxyXG4gICAgYWR2aXNlciA6IDEsXHJcbiAgICBhZHZvY2F0ZSA6IDEsXHJcbiAgICBhZmZhaXIgOiAxLFxyXG4gICAgYWZmZWN0IDogMSxcclxuICAgIGFmZm9yZCA6IDEsXHJcbiAgICBhZnJhaWQgOiAxLFxyXG4gICAgQWZyaWNhbiA6IDEsXHJcbiAgICBcIkFmcmljYW4tQW1lcmljYW5cIiA6IDEsXHJcbiAgICBhZnRlciA6IDEsXHJcbiAgICBhZnRlcm5vb24gOiAxLFxyXG4gICAgYWdhaW4gOiAxLFxyXG4gICAgYWdhaW5zdCA6IDEsXHJcbiAgICBhZ2UgOiAxLFxyXG4gICAgYWdlbmN5IDogMSxcclxuICAgIGFnZW5kYSA6IDEsXHJcbiAgICBhZ2VudCA6IDEsXHJcbiAgICBhZ2dyZXNzaXZlIDogMSxcclxuICAgIGFnbyA6IDEsXHJcbiAgICBhZ3JlZSA6IDEsXHJcbiAgICBhZ3JlZW1lbnQgOiAxLFxyXG4gICAgYWdyaWN1bHR1cmFsIDogMSxcclxuICAgIGFoIDogMSxcclxuICAgIGFoZWFkIDogMSxcclxuICAgIGFpZCA6IDEsXHJcbiAgICBhaWRlIDogMSxcclxuICAgIEFJRFMgOiAxLFxyXG4gICAgYWltIDogMSxcclxuICAgIGFpciA6IDEsXHJcbiAgICBhaXJjcmFmdCA6IDEsXHJcbiAgICBhaXJsaW5lIDogMSxcclxuICAgIGFpcnBvcnQgOiAxLFxyXG4gICAgYWxidW0gOiAxLFxyXG4gICAgYWxjb2hvbCA6IDEsXHJcbiAgICBhbGl2ZSA6IDEsXHJcbiAgICBhbGwgOiAxLFxyXG4gICAgYWxsaWFuY2UgOiAxLFxyXG4gICAgYWxsb3cgOiAxLFxyXG4gICAgYWxseSA6IDEsXHJcbiAgICBhbG1vc3QgOiAxLFxyXG4gICAgYWxvbmUgOiAxLFxyXG4gICAgYWxvbmcgOiAxLFxyXG4gICAgYWxyZWFkeSA6IDEsXHJcbiAgICBhbHNvIDogMSxcclxuICAgIGFsdGVyIDogMSxcclxuICAgIGFsdGVybmF0aXZlIDogMSxcclxuICAgIGFsdGhvdWdoIDogMSxcclxuICAgIGFsd2F5cyA6IDEsXHJcbiAgICBBTSA6IDEsXHJcbiAgICBhbWF6aW5nIDogMSxcclxuICAgIEFtZXJpY2FuIDogMSxcclxuICAgIGFtb25nIDogMSxcclxuICAgIGFtb3VudCA6IDEsXHJcbiAgICBhbmFseXNpcyA6IDEsXHJcbiAgICBhbmFseXN0IDogMSxcclxuICAgIGFuYWx5emUgOiAxLFxyXG4gICAgYW5jaWVudCA6IDEsXHJcbiAgICBhbmQgOiAxLFxyXG4gICAgYW5nZXIgOiAxLFxyXG4gICAgYW5nbGUgOiAxLFxyXG4gICAgYW5ncnkgOiAxLFxyXG4gICAgYW5pbWFsIDogMSxcclxuICAgIGFubml2ZXJzYXJ5IDogMSxcclxuICAgIGFubm91bmNlIDogMSxcclxuICAgIGFubnVhbCA6IDEsXHJcbiAgICBhbm90aGVyIDogMSxcclxuICAgIGFuc3dlciA6IDEsXHJcbiAgICBhbnRpY2lwYXRlIDogMSxcclxuICAgIGFueGlldHkgOiAxLFxyXG4gICAgYW55IDogMSxcclxuICAgIGFueWJvZHkgOiAxLFxyXG4gICAgYW55bW9yZSA6IDEsXHJcbiAgICBhbnlvbmUgOiAxLFxyXG4gICAgYW55dGhpbmcgOiAxLFxyXG4gICAgYW55d2F5IDogMSxcclxuICAgIGFueXdoZXJlIDogMSxcclxuICAgIGFwYXJ0IDogMSxcclxuICAgIGFwYXJ0bWVudCA6IDEsXHJcbiAgICBhcHBhcmVudCA6IDEsXHJcbiAgICBhcHBhcmVudGx5IDogMSxcclxuICAgIGFwcGVhbCA6IDEsXHJcbiAgICBhcHBlYXIgOiAxLFxyXG4gICAgYXBwZWFyYW5jZSA6IDEsXHJcbiAgICBhcHBsZSA6IDEsXHJcbiAgICBhcHBsaWNhdGlvbiA6IDEsXHJcbiAgICBhcHBseSA6IDEsXHJcbiAgICBhcHBvaW50IDogMSxcclxuICAgIGFwcG9pbnRtZW50IDogMSxcclxuICAgIGFwcHJlY2lhdGUgOiAxLFxyXG4gICAgYXBwcm9hY2ggOiAxLFxyXG4gICAgYXBwcm9wcmlhdGUgOiAxLFxyXG4gICAgYXBwcm92YWwgOiAxLFxyXG4gICAgYXBwcm92ZSA6IDEsXHJcbiAgICBhcHByb3hpbWF0ZWx5IDogMSxcclxuICAgIEFyYWIgOiAxLFxyXG4gICAgYXJjaGl0ZWN0IDogMSxcclxuICAgIGFyZWEgOiAxLFxyXG4gICAgYXJndWUgOiAxLFxyXG4gICAgYXJndW1lbnQgOiAxLFxyXG4gICAgYXJpc2UgOiAxLFxyXG4gICAgYXJtIDogMSxcclxuICAgIGFybWVkIDogMSxcclxuICAgIGFybXkgOiAxLFxyXG4gICAgYXJvdW5kIDogMSxcclxuICAgIGFycmFuZ2UgOiAxLFxyXG4gICAgYXJyYW5nZW1lbnQgOiAxLFxyXG4gICAgYXJyZXN0IDogMSxcclxuICAgIGFycml2YWwgOiAxLFxyXG4gICAgYXJyaXZlIDogMSxcclxuICAgIGFydCA6IDEsXHJcbiAgICBhcnRpY2xlIDogMSxcclxuICAgIGFydGlzdCA6IDEsXHJcbiAgICBhcnRpc3RpYyA6IDEsXHJcbiAgICBhcyA6IDEsXHJcbiAgICBBc2lhbiA6IDEsXHJcbiAgICBhc2lkZSA6IDEsXHJcbiAgICBhc2sgOiAxLFxyXG4gICAgYXNsZWVwIDogMSxcclxuICAgIGFzcGVjdCA6IDEsXHJcbiAgICBhc3NhdWx0IDogMSxcclxuICAgIGFzc2VydCA6IDEsXHJcbiAgICBhc3Nlc3MgOiAxLFxyXG4gICAgYXNzZXNzbWVudCA6IDEsXHJcbiAgICBhc3NldCA6IDEsXHJcbiAgICBhc3NpZ24gOiAxLFxyXG4gICAgYXNzaWdubWVudCA6IDEsXHJcbiAgICBhc3Npc3QgOiAxLFxyXG4gICAgYXNzaXN0YW5jZSA6IDEsXHJcbiAgICBhc3Npc3RhbnQgOiAxLFxyXG4gICAgYXNzb2NpYXRlIDogMSxcclxuICAgIGFzc29jaWF0aW9uIDogMSxcclxuICAgIGFzc3VtZSA6IDEsXHJcbiAgICBhc3N1bXB0aW9uIDogMSxcclxuICAgIGFzc3VyZSA6IDEsXHJcbiAgICBhdCA6IDEsXHJcbiAgICBhdGhsZXRlIDogMSxcclxuICAgIGF0aGxldGljIDogMSxcclxuICAgIGF0bW9zcGhlcmUgOiAxLFxyXG4gICAgYXR0YWNoIDogMSxcclxuICAgIGF0dGFjayA6IDEsXHJcbiAgICBhdHRlbXB0IDogMSxcclxuICAgIGF0dGVuZCA6IDEsXHJcbiAgICBhdHRlbnRpb24gOiAxLFxyXG4gICAgYXR0aXR1ZGUgOiAxLFxyXG4gICAgYXR0b3JuZXkgOiAxLFxyXG4gICAgYXR0cmFjdCA6IDEsXHJcbiAgICBhdHRyYWN0aXZlIDogMSxcclxuICAgIGF0dHJpYnV0ZSA6IDEsXHJcbiAgICBhdWRpZW5jZSA6IDEsXHJcbiAgICBhdXRob3IgOiAxLFxyXG4gICAgYXV0aG9yaXR5IDogMSxcclxuICAgIGF1dG8gOiAxLFxyXG4gICAgYXZhaWxhYmxlIDogMSxcclxuICAgIGF2ZXJhZ2UgOiAxLFxyXG4gICAgYXZvaWQgOiAxLFxyXG4gICAgYXdhcmQgOiAxLFxyXG4gICAgYXdhcmUgOiAxLFxyXG4gICAgYXdhcmVuZXNzIDogMSxcclxuICAgIGF3YXkgOiAxLFxyXG4gICAgYXdmdWwgOiAxLFxyXG4gICAgYmFieSA6IDEsXHJcbiAgICBiYWNrIDogMSxcclxuICAgIGJhY2tncm91bmQgOiAxLFxyXG4gICAgYmFkIDogMSxcclxuICAgIGJhZGx5IDogMSxcclxuICAgIGJhZyA6IDEsXHJcbiAgICBiYWtlIDogMSxcclxuICAgIGJhbGFuY2UgOiAxLFxyXG4gICAgYmFsbCA6IDEsXHJcbiAgICBiYW4gOiAxLFxyXG4gICAgYmFuZCA6IDEsXHJcbiAgICBiYW5rIDogMSxcclxuICAgIGJhciA6IDEsXHJcbiAgICBiYXJlbHkgOiAxLFxyXG4gICAgYmFycmVsIDogMSxcclxuICAgIGJhcnJpZXIgOiAxLFxyXG4gICAgYmFzZSA6IDEsXHJcbiAgICBiYXNlYmFsbCA6IDEsXHJcbiAgICBiYXNpYyA6IDEsXHJcbiAgICBiYXNpY2FsbHkgOiAxLFxyXG4gICAgYmFzaXMgOiAxLFxyXG4gICAgYmFza2V0IDogMSxcclxuICAgIGJhc2tldGJhbGwgOiAxLFxyXG4gICAgYmF0aHJvb20gOiAxLFxyXG4gICAgYmF0dGVyeSA6IDEsXHJcbiAgICBiYXR0bGUgOiAxLFxyXG4gICAgYmUgOiAxLFxyXG4gICAgYmVhY2ggOiAxLFxyXG4gICAgYmVhbiA6IDEsXHJcbiAgICBiZWFyIDogMSxcclxuICAgIGJlYXQgOiAxLFxyXG4gICAgYmVhdXRpZnVsIDogMSxcclxuICAgIGJlYXV0eSA6IDEsXHJcbiAgICBiZWNhdXNlIDogMSxcclxuICAgIGJlY29tZSA6IDEsXHJcbiAgICBiZWQgOiAxLFxyXG4gICAgYmVkcm9vbSA6IDEsXHJcbiAgICBiZWVyIDogMSxcclxuICAgIGJlZm9yZSA6IDEsXHJcbiAgICBiZWdpbiA6IDEsXHJcbiAgICBiZWdpbm5pbmcgOiAxLFxyXG4gICAgYmVoYXZpb3IgOiAxLFxyXG4gICAgYmVoaW5kIDogMSxcclxuICAgIGJlaW5nIDogMSxcclxuICAgIGJlbGllZiA6IDEsXHJcbiAgICBiZWxpZXZlIDogMSxcclxuICAgIGJlbGwgOiAxLFxyXG4gICAgYmVsb25nIDogMSxcclxuICAgIGJlbG93IDogMSxcclxuICAgIGJlbHQgOiAxLFxyXG4gICAgYmVuY2ggOiAxLFxyXG4gICAgYmVuZCA6IDEsXHJcbiAgICBiZW5lYXRoIDogMSxcclxuICAgIGJlbmVmaXQgOiAxLFxyXG4gICAgYmVzaWRlIDogMSxcclxuICAgIGJlc2lkZXMgOiAxLFxyXG4gICAgYmVzdCA6IDEsXHJcbiAgICBiZXQgOiAxLFxyXG4gICAgYmV0dGVyIDogMSxcclxuICAgIGJldHdlZW4gOiAxLFxyXG4gICAgYmV5b25kIDogMSxcclxuICAgIEJpYmxlIDogMSxcclxuICAgIGJpZyA6IDEsXHJcbiAgICBiaWtlIDogMSxcclxuICAgIGJpbGwgOiAxLFxyXG4gICAgYmlsbGlvbiA6IDEsXHJcbiAgICBiaW5kIDogMSxcclxuICAgIGJpb2xvZ2ljYWwgOiAxLFxyXG4gICAgYmlyZCA6IDEsXHJcbiAgICBiaXJ0aCA6IDEsXHJcbiAgICBiaXJ0aGRheSA6IDEsXHJcbiAgICBiaXQgOiAxLFxyXG4gICAgYml0ZSA6IDEsXHJcbiAgICBibGFjayA6IDEsXHJcbiAgICBibGFkZSA6IDEsXHJcbiAgICBibGFtZSA6IDEsXHJcbiAgICBibGFua2V0IDogMSxcclxuICAgIGJsaW5kIDogMSxcclxuICAgIGJsb2NrIDogMSxcclxuICAgIGJsb29kIDogMSxcclxuICAgIGJsb3cgOiAxLFxyXG4gICAgYmx1ZSA6IDEsXHJcbiAgICBib2FyZCA6IDEsXHJcbiAgICBib2F0IDogMSxcclxuICAgIGJvZHkgOiAxLFxyXG4gICAgYm9tYiA6IDEsXHJcbiAgICBib21iaW5nIDogMSxcclxuICAgIGJvbmQgOiAxLFxyXG4gICAgYm9uZSA6IDEsXHJcbiAgICBib29rIDogMSxcclxuICAgIGJvb20gOiAxLFxyXG4gICAgYm9vdCA6IDEsXHJcbiAgICBib3JkZXIgOiAxLFxyXG4gICAgYm9ybiA6IDEsXHJcbiAgICBib3Jyb3cgOiAxLFxyXG4gICAgYm9zcyA6IDEsXHJcbiAgICBib3RoIDogMSxcclxuICAgIGJvdGhlciA6IDEsXHJcbiAgICBib3R0bGUgOiAxLFxyXG4gICAgYm90dG9tIDogMSxcclxuICAgIGJvdW5kYXJ5IDogMSxcclxuICAgIGJvd2wgOiAxLFxyXG4gICAgYm94IDogMSxcclxuICAgIGJveSA6IDEsXHJcbiAgICBib3lmcmllbmQgOiAxLFxyXG4gICAgYnJhaW4gOiAxLFxyXG4gICAgYnJhbmNoIDogMSxcclxuICAgIGJyYW5kIDogMSxcclxuICAgIGJyZWFkIDogMSxcclxuICAgIGJyZWFrIDogMSxcclxuICAgIGJyZWFrZmFzdCA6IDEsXHJcbiAgICBicmVhc3QgOiAxLFxyXG4gICAgYnJlYXRoIDogMSxcclxuICAgIGJyZWF0aGUgOiAxLFxyXG4gICAgYnJpY2sgOiAxLFxyXG4gICAgYnJpZGdlIDogMSxcclxuICAgIGJyaWVmIDogMSxcclxuICAgIGJyaWVmbHkgOiAxLFxyXG4gICAgYnJpZ2h0IDogMSxcclxuICAgIGJyaWxsaWFudCA6IDEsXHJcbiAgICBicmluZyA6IDEsXHJcbiAgICBCcml0aXNoIDogMSxcclxuICAgIGJyb2FkIDogMSxcclxuICAgIGJyb2tlbiA6IDEsXHJcbiAgICBicm90aGVyIDogMSxcclxuICAgIGJyb3duIDogMSxcclxuICAgIGJydXNoIDogMSxcclxuICAgIGJ1Y2sgOiAxLFxyXG4gICAgYnVkZ2V0IDogMSxcclxuICAgIGJ1aWxkIDogMSxcclxuICAgIGJ1aWxkaW5nIDogMSxcclxuICAgIGJ1bGxldCA6IDEsXHJcbiAgICBidW5jaCA6IDEsXHJcbiAgICBidXJkZW4gOiAxLFxyXG4gICAgYnVybiA6IDEsXHJcbiAgICBidXJ5IDogMSxcclxuICAgIGJ1cyA6IDEsXHJcbiAgICBidXNpbmVzcyA6IDEsXHJcbiAgICBidXN5IDogMSxcclxuICAgIGJ1dCA6IDEsXHJcbiAgICBidXR0ZXIgOiAxLFxyXG4gICAgYnV0dG9uIDogMSxcclxuICAgIGJ1eSA6IDEsXHJcbiAgICBidXllciA6IDEsXHJcbiAgICBieSA6IDEsXHJcbiAgICBjYWJpbiA6IDEsXHJcbiAgICBjYWJpbmV0IDogMSxcclxuICAgIGNhYmxlIDogMSxcclxuICAgIGNha2UgOiAxLFxyXG4gICAgY2FsY3VsYXRlIDogMSxcclxuICAgIGNhbGwgOiAxLFxyXG4gICAgY2FtZXJhIDogMSxcclxuICAgIGNhbXAgOiAxLFxyXG4gICAgY2FtcGFpZ24gOiAxLFxyXG4gICAgY2FtcHVzIDogMSxcclxuICAgIGNhbiA6IDEsXHJcbiAgICBDYW5hZGlhbiA6IDEsXHJcbiAgICBjYW5jZXIgOiAxLFxyXG4gICAgY2FuZGlkYXRlIDogMSxcclxuICAgIGNhcCA6IDEsXHJcbiAgICBjYXBhYmlsaXR5IDogMSxcclxuICAgIGNhcGFibGUgOiAxLFxyXG4gICAgY2FwYWNpdHkgOiAxLFxyXG4gICAgY2FwaXRhbCA6IDEsXHJcbiAgICBjYXB0YWluIDogMSxcclxuICAgIGNhcHR1cmUgOiAxLFxyXG4gICAgY2FyIDogMSxcclxuICAgIGNhcmJvbiA6IDEsXHJcbiAgICBjYXJkIDogMSxcclxuICAgIGNhcmUgOiAxLFxyXG4gICAgY2FyZWVyIDogMSxcclxuICAgIGNhcmVmdWwgOiAxLFxyXG4gICAgY2FyZWZ1bGx5IDogMSxcclxuICAgIGNhcnJpZXIgOiAxLFxyXG4gICAgY2FycnkgOiAxLFxyXG4gICAgY2FzZSA6IDEsXHJcbiAgICBjYXNoIDogMSxcclxuICAgIGNhc3QgOiAxLFxyXG4gICAgY2F0IDogMSxcclxuICAgIGNhdGNoIDogMSxcclxuICAgIGNhdGVnb3J5IDogMSxcclxuICAgIENhdGhvbGljIDogMSxcclxuICAgIGNhdXNlIDogMSxcclxuICAgIGNlaWxpbmcgOiAxLFxyXG4gICAgY2VsZWJyYXRlIDogMSxcclxuICAgIGNlbGVicmF0aW9uIDogMSxcclxuICAgIGNlbGVicml0eSA6IDEsXHJcbiAgICBjZWxsIDogMSxcclxuICAgIGNlbnRlciA6IDEsXHJcbiAgICBjZW50cmFsIDogMSxcclxuICAgIGNlbnR1cnkgOiAxLFxyXG4gICAgQ0VPIDogMSxcclxuICAgIGNlcmVtb255IDogMSxcclxuICAgIGNlcnRhaW4gOiAxLFxyXG4gICAgY2VydGFpbmx5IDogMSxcclxuICAgIGNoYWluIDogMSxcclxuICAgIGNoYWlyIDogMSxcclxuICAgIGNoYWlybWFuIDogMSxcclxuICAgIGNoYWxsZW5nZSA6IDEsXHJcbiAgICBjaGFtYmVyIDogMSxcclxuICAgIGNoYW1waW9uIDogMSxcclxuICAgIGNoYW1waW9uc2hpcCA6IDEsXHJcbiAgICBjaGFuY2UgOiAxLFxyXG4gICAgY2hhbmdlIDogMSxcclxuICAgIGNoYW5naW5nIDogMSxcclxuICAgIGNoYW5uZWwgOiAxLFxyXG4gICAgY2hhcHRlciA6IDEsXHJcbiAgICBjaGFyYWN0ZXIgOiAxLFxyXG4gICAgY2hhcmFjdGVyaXN0aWMgOiAxLFxyXG4gICAgY2hhcmFjdGVyaXplIDogMSxcclxuICAgIGNoYXJnZSA6IDEsXHJcbiAgICBjaGFyaXR5IDogMSxcclxuICAgIGNoYXJ0IDogMSxcclxuICAgIGNoYXNlIDogMSxcclxuICAgIGNoZWFwIDogMSxcclxuICAgIGNoZWNrIDogMSxcclxuICAgIGNoZWVrIDogMSxcclxuICAgIGNoZWVzZSA6IDEsXHJcbiAgICBjaGVmIDogMSxcclxuICAgIGNoZW1pY2FsIDogMSxcclxuICAgIGNoZXN0IDogMSxcclxuICAgIGNoaWNrZW4gOiAxLFxyXG4gICAgY2hpZWYgOiAxLFxyXG4gICAgY2hpbGQgOiAxLFxyXG4gICAgY2hpbGRob29kIDogMSxcclxuICAgIENoaW5lc2UgOiAxLFxyXG4gICAgY2hpcCA6IDEsXHJcbiAgICBjaG9jb2xhdGUgOiAxLFxyXG4gICAgY2hvaWNlIDogMSxcclxuICAgIGNob2xlc3Rlcm9sIDogMSxcclxuICAgIGNob29zZSA6IDEsXHJcbiAgICBDaHJpc3RpYW4gOiAxLFxyXG4gICAgQ2hyaXN0bWFzIDogMSxcclxuICAgIGNodXJjaCA6IDEsXHJcbiAgICBjaWdhcmV0dGUgOiAxLFxyXG4gICAgY2lyY2xlIDogMSxcclxuICAgIGNpcmN1bXN0YW5jZSA6IDEsXHJcbiAgICBjaXRlIDogMSxcclxuICAgIGNpdGl6ZW4gOiAxLFxyXG4gICAgY2l0eSA6IDEsXHJcbiAgICBjaXZpbCA6IDEsXHJcbiAgICBjaXZpbGlhbiA6IDEsXHJcbiAgICBjbGFpbSA6IDEsXHJcbiAgICBjbGFzcyA6IDEsXHJcbiAgICBjbGFzc2ljIDogMSxcclxuICAgIGNsYXNzcm9vbSA6IDEsXHJcbiAgICBjbGVhbiA6IDEsXHJcbiAgICBjbGVhciA6IDEsXHJcbiAgICBjbGVhcmx5IDogMSxcclxuICAgIGNsaWVudCA6IDEsXHJcbiAgICBjbGltYXRlIDogMSxcclxuICAgIGNsaW1iIDogMSxcclxuICAgIGNsaW5pYyA6IDEsXHJcbiAgICBjbGluaWNhbCA6IDEsXHJcbiAgICBjbG9jayA6IDEsXHJcbiAgICBjbG9zZSA6IDEsXHJcbiAgICBjbG9zZWx5IDogMSxcclxuICAgIGNsb3NlciA6IDEsXHJcbiAgICBjbG90aGVzIDogMSxcclxuICAgIGNsb3RoaW5nIDogMSxcclxuICAgIGNsb3VkIDogMSxcclxuICAgIGNsdWIgOiAxLFxyXG4gICAgY2x1ZSA6IDEsXHJcbiAgICBjbHVzdGVyIDogMSxcclxuICAgIGNvYWNoIDogMSxcclxuICAgIGNvYWwgOiAxLFxyXG4gICAgY29hbGl0aW9uIDogMSxcclxuICAgIGNvYXN0IDogMSxcclxuICAgIGNvYXQgOiAxLFxyXG4gICAgY29kZSA6IDEsXHJcbiAgICBjb2ZmZWUgOiAxLFxyXG4gICAgY29nbml0aXZlIDogMSxcclxuICAgIGNvbGQgOiAxLFxyXG4gICAgY29sbGFwc2UgOiAxLFxyXG4gICAgY29sbGVhZ3VlIDogMSxcclxuICAgIGNvbGxlY3QgOiAxLFxyXG4gICAgY29sbGVjdGlvbiA6IDEsXHJcbiAgICBjb2xsZWN0aXZlIDogMSxcclxuICAgIGNvbGxlZ2UgOiAxLFxyXG4gICAgY29sb25pYWwgOiAxLFxyXG4gICAgY29sb3IgOiAxLFxyXG4gICAgY29sdW1uIDogMSxcclxuICAgIGNvbWJpbmF0aW9uIDogMSxcclxuICAgIGNvbWJpbmUgOiAxLFxyXG4gICAgY29tZSA6IDEsXHJcbiAgICBjb21lZHkgOiAxLFxyXG4gICAgY29tZm9ydCA6IDEsXHJcbiAgICBjb21mb3J0YWJsZSA6IDEsXHJcbiAgICBjb21tYW5kIDogMSxcclxuICAgIGNvbW1hbmRlciA6IDEsXHJcbiAgICBjb21tZW50IDogMSxcclxuICAgIGNvbW1lcmNpYWwgOiAxLFxyXG4gICAgY29tbWlzc2lvbiA6IDEsXHJcbiAgICBjb21taXQgOiAxLFxyXG4gICAgY29tbWl0bWVudCA6IDEsXHJcbiAgICBjb21taXR0ZWUgOiAxLFxyXG4gICAgY29tbW9uIDogMSxcclxuICAgIGNvbW11bmljYXRlIDogMSxcclxuICAgIGNvbW11bmljYXRpb24gOiAxLFxyXG4gICAgY29tbXVuaXR5IDogMSxcclxuICAgIGNvbXBhbnkgOiAxLFxyXG4gICAgY29tcGFyZSA6IDEsXHJcbiAgICBjb21wYXJpc29uIDogMSxcclxuICAgIGNvbXBldGUgOiAxLFxyXG4gICAgY29tcGV0aXRpb24gOiAxLFxyXG4gICAgY29tcGV0aXRpdmUgOiAxLFxyXG4gICAgY29tcGV0aXRvciA6IDEsXHJcbiAgICBjb21wbGFpbiA6IDEsXHJcbiAgICBjb21wbGFpbnQgOiAxLFxyXG4gICAgY29tcGxldGUgOiAxLFxyXG4gICAgY29tcGxldGVseSA6IDEsXHJcbiAgICBjb21wbGV4IDogMSxcclxuICAgIGNvbXBsaWNhdGVkIDogMSxcclxuICAgIGNvbXBvbmVudCA6IDEsXHJcbiAgICBjb21wb3NlIDogMSxcclxuICAgIGNvbXBvc2l0aW9uIDogMSxcclxuICAgIGNvbXByZWhlbnNpdmUgOiAxLFxyXG4gICAgY29tcHV0ZXIgOiAxLFxyXG4gICAgY29uY2VudHJhdGUgOiAxLFxyXG4gICAgY29uY2VudHJhdGlvbiA6IDEsXHJcbiAgICBjb25jZXB0IDogMSxcclxuICAgIGNvbmNlcm4gOiAxLFxyXG4gICAgY29uY2VybmVkIDogMSxcclxuICAgIGNvbmNlcnQgOiAxLFxyXG4gICAgY29uY2x1ZGUgOiAxLFxyXG4gICAgY29uY2x1c2lvbiA6IDEsXHJcbiAgICBjb25jcmV0ZSA6IDEsXHJcbiAgICBjb25kaXRpb24gOiAxLFxyXG4gICAgY29uZHVjdCA6IDEsXHJcbiAgICBjb25mZXJlbmNlIDogMSxcclxuICAgIGNvbmZpZGVuY2UgOiAxLFxyXG4gICAgY29uZmlkZW50IDogMSxcclxuICAgIGNvbmZpcm0gOiAxLFxyXG4gICAgY29uZmxpY3QgOiAxLFxyXG4gICAgY29uZnJvbnQgOiAxLFxyXG4gICAgY29uZnVzaW9uIDogMSxcclxuICAgIENvbmdyZXNzIDogMSxcclxuICAgIGNvbmdyZXNzaW9uYWwgOiAxLFxyXG4gICAgY29ubmVjdCA6IDEsXHJcbiAgICBjb25uZWN0aW9uIDogMSxcclxuICAgIGNvbnNjaW91c25lc3MgOiAxLFxyXG4gICAgY29uc2Vuc3VzIDogMSxcclxuICAgIGNvbnNlcXVlbmNlIDogMSxcclxuICAgIGNvbnNlcnZhdGl2ZSA6IDEsXHJcbiAgICBjb25zaWRlciA6IDEsXHJcbiAgICBjb25zaWRlcmFibGUgOiAxLFxyXG4gICAgY29uc2lkZXJhdGlvbiA6IDEsXHJcbiAgICBjb25zaXN0IDogMSxcclxuICAgIGNvbnNpc3RlbnQgOiAxLFxyXG4gICAgY29uc3RhbnQgOiAxLFxyXG4gICAgY29uc3RhbnRseSA6IDEsXHJcbiAgICBjb25zdGl0dXRlIDogMSxcclxuICAgIGNvbnN0aXR1dGlvbmFsIDogMSxcclxuICAgIGNvbnN0cnVjdCA6IDEsXHJcbiAgICBjb25zdHJ1Y3Rpb24gOiAxLFxyXG4gICAgY29uc3VsdGFudCA6IDEsXHJcbiAgICBjb25zdW1lIDogMSxcclxuICAgIGNvbnN1bWVyIDogMSxcclxuICAgIGNvbnN1bXB0aW9uIDogMSxcclxuICAgIGNvbnRhY3QgOiAxLFxyXG4gICAgY29udGFpbiA6IDEsXHJcbiAgICBjb250YWluZXIgOiAxLFxyXG4gICAgY29udGVtcG9yYXJ5IDogMSxcclxuICAgIGNvbnRlbnQgOiAxLFxyXG4gICAgY29udGVzdCA6IDEsXHJcbiAgICBjb250ZXh0IDogMSxcclxuICAgIGNvbnRpbnVlIDogMSxcclxuICAgIGNvbnRpbnVlZCA6IDEsXHJcbiAgICBjb250cmFjdCA6IDEsXHJcbiAgICBjb250cmFzdCA6IDEsXHJcbiAgICBjb250cmlidXRlIDogMSxcclxuICAgIGNvbnRyaWJ1dGlvbiA6IDEsXHJcbiAgICBjb250cm9sIDogMSxcclxuICAgIGNvbnRyb3ZlcnNpYWwgOiAxLFxyXG4gICAgY29udHJvdmVyc3kgOiAxLFxyXG4gICAgY29udmVudGlvbiA6IDEsXHJcbiAgICBjb252ZW50aW9uYWwgOiAxLFxyXG4gICAgY29udmVyc2F0aW9uIDogMSxcclxuICAgIGNvbnZlcnQgOiAxLFxyXG4gICAgY29udmljdGlvbiA6IDEsXHJcbiAgICBjb252aW5jZSA6IDEsXHJcbiAgICBjb29rIDogMSxcclxuICAgIGNvb2tpZSA6IDEsXHJcbiAgICBjb29raW5nIDogMSxcclxuICAgIGNvb2wgOiAxLFxyXG4gICAgY29vcGVyYXRpb24gOiAxLFxyXG4gICAgY29wIDogMSxcclxuICAgIGNvcGUgOiAxLFxyXG4gICAgY29weSA6IDEsXHJcbiAgICBjb3JlIDogMSxcclxuICAgIGNvcm4gOiAxLFxyXG4gICAgY29ybmVyIDogMSxcclxuICAgIGNvcnBvcmF0ZSA6IDEsXHJcbiAgICBjb3Jwb3JhdGlvbiA6IDEsXHJcbiAgICBjb3JyZWN0IDogMSxcclxuICAgIGNvcnJlc3BvbmRlbnQgOiAxLFxyXG4gICAgY29zdCA6IDEsXHJcbiAgICBjb3R0b24gOiAxLFxyXG4gICAgY291Y2ggOiAxLFxyXG4gICAgY291bGQgOiAxLFxyXG4gICAgY291bmNpbCA6IDEsXHJcbiAgICBjb3Vuc2Vsb3IgOiAxLFxyXG4gICAgY291bnQgOiAxLFxyXG4gICAgY291bnRlciA6IDEsXHJcbiAgICBjb3VudHJ5IDogMSxcclxuICAgIGNvdW50eSA6IDEsXHJcbiAgICBjb3VwbGUgOiAxLFxyXG4gICAgY291cmFnZSA6IDEsXHJcbiAgICBjb3Vyc2UgOiAxLFxyXG4gICAgY291cnQgOiAxLFxyXG4gICAgY291c2luIDogMSxcclxuICAgIGNvdmVyIDogMSxcclxuICAgIGNvdmVyYWdlIDogMSxcclxuICAgIGNvdyA6IDEsXHJcbiAgICBjcmFjayA6IDEsXHJcbiAgICBjcmFmdCA6IDEsXHJcbiAgICBjcmFzaCA6IDEsXHJcbiAgICBjcmF6eSA6IDEsXHJcbiAgICBjcmVhbSA6IDEsXHJcbiAgICBjcmVhdGUgOiAxLFxyXG4gICAgY3JlYXRpb24gOiAxLFxyXG4gICAgY3JlYXRpdmUgOiAxLFxyXG4gICAgY3JlYXR1cmUgOiAxLFxyXG4gICAgY3JlZGl0IDogMSxcclxuICAgIGNyZXcgOiAxLFxyXG4gICAgY3JpbWUgOiAxLFxyXG4gICAgY3JpbWluYWwgOiAxLFxyXG4gICAgY3Jpc2lzIDogMSxcclxuICAgIGNyaXRlcmlhIDogMSxcclxuICAgIGNyaXRpYyA6IDEsXHJcbiAgICBjcml0aWNhbCA6IDEsXHJcbiAgICBjcml0aWNpc20gOiAxLFxyXG4gICAgY3JpdGljaXplIDogMSxcclxuICAgIGNyb3AgOiAxLFxyXG4gICAgY3Jvc3MgOiAxLFxyXG4gICAgY3Jvd2QgOiAxLFxyXG4gICAgY3J1Y2lhbCA6IDEsXHJcbiAgICBjcnkgOiAxLFxyXG4gICAgY3VsdHVyYWwgOiAxLFxyXG4gICAgY3VsdHVyZSA6IDEsXHJcbiAgICBjdXAgOiAxLFxyXG4gICAgY3VyaW91cyA6IDEsXHJcbiAgICBjdXJyZW50IDogMSxcclxuICAgIGN1cnJlbnRseSA6IDEsXHJcbiAgICBjdXJyaWN1bHVtIDogMSxcclxuICAgIGN1c3RvbSA6IDEsXHJcbiAgICBjdXN0b21lciA6IDEsXHJcbiAgICBjdXQgOiAxLFxyXG4gICAgY3ljbGUgOiAxLFxyXG4gICAgZGFkIDogMSxcclxuICAgIGRhaWx5IDogMSxcclxuICAgIGRhbWFnZSA6IDEsXHJcbiAgICBkYW5jZSA6IDEsXHJcbiAgICBkYW5nZXIgOiAxLFxyXG4gICAgZGFuZ2Vyb3VzIDogMSxcclxuICAgIGRhcmUgOiAxLFxyXG4gICAgZGFyayA6IDEsXHJcbiAgICBkYXJrbmVzcyA6IDEsXHJcbiAgICBkYXRhIDogMSxcclxuICAgIGRhdGUgOiAxLFxyXG4gICAgZGF1Z2h0ZXIgOiAxLFxyXG4gICAgZGF5IDogMSxcclxuICAgIGRlYWQgOiAxLFxyXG4gICAgZGVhbCA6IDEsXHJcbiAgICBkZWFsZXIgOiAxLFxyXG4gICAgZGVhciA6IDEsXHJcbiAgICBkZWF0aCA6IDEsXHJcbiAgICBkZWJhdGUgOiAxLFxyXG4gICAgZGVidCA6IDEsXHJcbiAgICBkZWNhZGUgOiAxLFxyXG4gICAgZGVjaWRlIDogMSxcclxuICAgIGRlY2lzaW9uIDogMSxcclxuICAgIGRlY2sgOiAxLFxyXG4gICAgZGVjbGFyZSA6IDEsXHJcbiAgICBkZWNsaW5lIDogMSxcclxuICAgIGRlY3JlYXNlIDogMSxcclxuICAgIGRlZXAgOiAxLFxyXG4gICAgZGVlcGx5IDogMSxcclxuICAgIGRlZXIgOiAxLFxyXG4gICAgZGVmZWF0IDogMSxcclxuICAgIGRlZmVuZCA6IDEsXHJcbiAgICBkZWZlbmRhbnQgOiAxLFxyXG4gICAgZGVmZW5zZSA6IDEsXHJcbiAgICBkZWZlbnNpdmUgOiAxLFxyXG4gICAgZGVmaWNpdCA6IDEsXHJcbiAgICBkZWZpbmUgOiAxLFxyXG4gICAgZGVmaW5pdGVseSA6IDEsXHJcbiAgICBkZWZpbml0aW9uIDogMSxcclxuICAgIGRlZ3JlZSA6IDEsXHJcbiAgICBkZWxheSA6IDEsXHJcbiAgICBkZWxpdmVyIDogMSxcclxuICAgIGRlbGl2ZXJ5IDogMSxcclxuICAgIGRlbWFuZCA6IDEsXHJcbiAgICBkZW1vY3JhY3kgOiAxLFxyXG4gICAgRGVtb2NyYXQgOiAxLFxyXG4gICAgZGVtb2NyYXRpYyA6IDEsXHJcbiAgICBkZW1vbnN0cmF0ZSA6IDEsXHJcbiAgICBkZW1vbnN0cmF0aW9uIDogMSxcclxuICAgIGRlbnkgOiAxLFxyXG4gICAgZGVwYXJ0bWVudCA6IDEsXHJcbiAgICBkZXBlbmQgOiAxLFxyXG4gICAgZGVwZW5kZW50IDogMSxcclxuICAgIGRlcGVuZGluZyA6IDEsXHJcbiAgICBkZXBpY3QgOiAxLFxyXG4gICAgZGVwcmVzc2lvbiA6IDEsXHJcbiAgICBkZXB0aCA6IDEsXHJcbiAgICBkZXB1dHkgOiAxLFxyXG4gICAgZGVyaXZlIDogMSxcclxuICAgIGRlc2NyaWJlIDogMSxcclxuICAgIGRlc2NyaXB0aW9uIDogMSxcclxuICAgIGRlc2VydCA6IDEsXHJcbiAgICBkZXNlcnZlIDogMSxcclxuICAgIGRlc2lnbiA6IDEsXHJcbiAgICBkZXNpZ25lciA6IDEsXHJcbiAgICBkZXNpcmUgOiAxLFxyXG4gICAgZGVzayA6IDEsXHJcbiAgICBkZXNwZXJhdGUgOiAxLFxyXG4gICAgZGVzcGl0ZSA6IDEsXHJcbiAgICBkZXN0cm95IDogMSxcclxuICAgIGRlc3RydWN0aW9uIDogMSxcclxuICAgIGRldGFpbCA6IDEsXHJcbiAgICBkZXRhaWxlZCA6IDEsXHJcbiAgICBkZXRlY3QgOiAxLFxyXG4gICAgZGV0ZXJtaW5lIDogMSxcclxuICAgIGRldmVsb3AgOiAxLFxyXG4gICAgZGV2ZWxvcGluZyA6IDEsXHJcbiAgICBkZXZlbG9wbWVudCA6IDEsXHJcbiAgICBkZXZpY2UgOiAxLFxyXG4gICAgZGV2b3RlIDogMSxcclxuICAgIGRpYWxvZ3VlIDogMSxcclxuICAgIGRpZSA6IDEsXHJcbiAgICBkaWV0IDogMSxcclxuICAgIGRpZmZlciA6IDEsXHJcbiAgICBkaWZmZXJlbmNlIDogMSxcclxuICAgIGRpZmZlcmVudCA6IDEsXHJcbiAgICBkaWZmZXJlbnRseSA6IDEsXHJcbiAgICBkaWZmaWN1bHQgOiAxLFxyXG4gICAgZGlmZmljdWx0eSA6IDEsXHJcbiAgICBkaWcgOiAxLFxyXG4gICAgZGlnaXRhbCA6IDEsXHJcbiAgICBkaW1lbnNpb24gOiAxLFxyXG4gICAgZGluaW5nIDogMSxcclxuICAgIGRpbm5lciA6IDEsXHJcbiAgICBkaXJlY3QgOiAxLFxyXG4gICAgZGlyZWN0aW9uIDogMSxcclxuICAgIGRpcmVjdGx5IDogMSxcclxuICAgIGRpcmVjdG9yIDogMSxcclxuICAgIGRpcnQgOiAxLFxyXG4gICAgZGlydHkgOiAxLFxyXG4gICAgZGlzYWJpbGl0eSA6IDEsXHJcbiAgICBkaXNhZ3JlZSA6IDEsXHJcbiAgICBkaXNhcHBlYXIgOiAxLFxyXG4gICAgZGlzYXN0ZXIgOiAxLFxyXG4gICAgZGlzY2lwbGluZSA6IDEsXHJcbiAgICBkaXNjb3Vyc2UgOiAxLFxyXG4gICAgZGlzY292ZXIgOiAxLFxyXG4gICAgZGlzY292ZXJ5IDogMSxcclxuICAgIGRpc2NyaW1pbmF0aW9uIDogMSxcclxuICAgIGRpc2N1c3MgOiAxLFxyXG4gICAgZGlzY3Vzc2lvbiA6IDEsXHJcbiAgICBkaXNlYXNlIDogMSxcclxuICAgIGRpc2ggOiAxLFxyXG4gICAgZGlzbWlzcyA6IDEsXHJcbiAgICBkaXNvcmRlciA6IDEsXHJcbiAgICBkaXNwbGF5IDogMSxcclxuICAgIGRpc3B1dGUgOiAxLFxyXG4gICAgZGlzdGFuY2UgOiAxLFxyXG4gICAgZGlzdGFudCA6IDEsXHJcbiAgICBkaXN0aW5jdCA6IDEsXHJcbiAgICBkaXN0aW5jdGlvbiA6IDEsXHJcbiAgICBkaXN0aW5ndWlzaCA6IDEsXHJcbiAgICBkaXN0cmlidXRlIDogMSxcclxuICAgIGRpc3RyaWJ1dGlvbiA6IDEsXHJcbiAgICBkaXN0cmljdCA6IDEsXHJcbiAgICBkaXZlcnNlIDogMSxcclxuICAgIGRpdmVyc2l0eSA6IDEsXHJcbiAgICBkaXZpZGUgOiAxLFxyXG4gICAgZGl2aXNpb24gOiAxLFxyXG4gICAgZGl2b3JjZSA6IDEsXHJcbiAgICBETkEgOiAxLFxyXG4gICAgZG8gOiAxLFxyXG4gICAgZG9jdG9yIDogMSxcclxuICAgIGRvY3VtZW50IDogMSxcclxuICAgIGRvZyA6IDEsXHJcbiAgICBkb21lc3RpYyA6IDEsXHJcbiAgICBkb21pbmFudCA6IDEsXHJcbiAgICBkb21pbmF0ZSA6IDEsXHJcbiAgICBkb29yIDogMSxcclxuICAgIGRvdWJsZSA6IDEsXHJcbiAgICBkb3VidCA6IDEsXHJcbiAgICBkb3duIDogMSxcclxuICAgIGRvd250b3duIDogMSxcclxuICAgIGRvemVuIDogMSxcclxuICAgIGRyYWZ0IDogMSxcclxuICAgIGRyYWcgOiAxLFxyXG4gICAgZHJhbWEgOiAxLFxyXG4gICAgZHJhbWF0aWMgOiAxLFxyXG4gICAgZHJhbWF0aWNhbGx5IDogMSxcclxuICAgIGRyYXcgOiAxLFxyXG4gICAgZHJhd2luZyA6IDEsXHJcbiAgICBkcmVhbSA6IDEsXHJcbiAgICBkcmVzcyA6IDEsXHJcbiAgICBkcmluayA6IDEsXHJcbiAgICBkcml2ZSA6IDEsXHJcbiAgICBkcml2ZXIgOiAxLFxyXG4gICAgZHJvcCA6IDEsXHJcbiAgICBkcnVnIDogMSxcclxuICAgIGRyeSA6IDEsXHJcbiAgICBkdWUgOiAxLFxyXG4gICAgZHVyaW5nIDogMSxcclxuICAgIGR1c3QgOiAxLFxyXG4gICAgZHV0eSA6IDEsXHJcbiAgICBlYWNoIDogMSxcclxuICAgIGVhZ2VyIDogMSxcclxuICAgIGVhciA6IDEsXHJcbiAgICBlYXJseSA6IDEsXHJcbiAgICBlYXJuIDogMSxcclxuICAgIGVhcm5pbmdzIDogMSxcclxuICAgIGVhcnRoIDogMSxcclxuICAgIGVhc2UgOiAxLFxyXG4gICAgZWFzaWx5IDogMSxcclxuICAgIGVhc3QgOiAxLFxyXG4gICAgZWFzdGVybiA6IDEsXHJcbiAgICBlYXN5IDogMSxcclxuICAgIGVhdCA6IDEsXHJcbiAgICBlY29ub21pYyA6IDEsXHJcbiAgICBlY29ub21pY3MgOiAxLFxyXG4gICAgZWNvbm9taXN0IDogMSxcclxuICAgIGVjb25vbXkgOiAxLFxyXG4gICAgZWRnZSA6IDEsXHJcbiAgICBlZGl0aW9uIDogMSxcclxuICAgIGVkaXRvciA6IDEsXHJcbiAgICBlZHVjYXRlIDogMSxcclxuICAgIGVkdWNhdGlvbiA6IDEsXHJcbiAgICBlZHVjYXRpb25hbCA6IDEsXHJcbiAgICBlZHVjYXRvciA6IDEsXHJcbiAgICBlZmZlY3QgOiAxLFxyXG4gICAgZWZmZWN0aXZlIDogMSxcclxuICAgIGVmZmVjdGl2ZWx5IDogMSxcclxuICAgIGVmZmljaWVuY3kgOiAxLFxyXG4gICAgZWZmaWNpZW50IDogMSxcclxuICAgIGVmZm9ydCA6IDEsXHJcbiAgICBlZ2cgOiAxLFxyXG4gICAgZWlnaHQgOiAxLFxyXG4gICAgZWl0aGVyIDogMSxcclxuICAgIGVsZGVybHkgOiAxLFxyXG4gICAgZWxlY3QgOiAxLFxyXG4gICAgZWxlY3Rpb24gOiAxLFxyXG4gICAgZWxlY3RyaWMgOiAxLFxyXG4gICAgZWxlY3RyaWNpdHkgOiAxLFxyXG4gICAgZWxlY3Ryb25pYyA6IDEsXHJcbiAgICBlbGVtZW50IDogMSxcclxuICAgIGVsZW1lbnRhcnkgOiAxLFxyXG4gICAgZWxpbWluYXRlIDogMSxcclxuICAgIGVsaXRlIDogMSxcclxuICAgIGVsc2UgOiAxLFxyXG4gICAgZWxzZXdoZXJlIDogMSxcclxuICAgIFwiZS1tYWlsXCIgOiAxLFxyXG4gICAgZW1icmFjZSA6IDEsXHJcbiAgICBlbWVyZ2UgOiAxLFxyXG4gICAgZW1lcmdlbmN5IDogMSxcclxuICAgIGVtaXNzaW9uIDogMSxcclxuICAgIGVtb3Rpb24gOiAxLFxyXG4gICAgZW1vdGlvbmFsIDogMSxcclxuICAgIGVtcGhhc2lzIDogMSxcclxuICAgIGVtcGhhc2l6ZSA6IDEsXHJcbiAgICBlbXBsb3kgOiAxLFxyXG4gICAgZW1wbG95ZWUgOiAxLFxyXG4gICAgZW1wbG95ZXIgOiAxLFxyXG4gICAgZW1wbG95bWVudCA6IDEsXHJcbiAgICBlbXB0eSA6IDEsXHJcbiAgICBlbmFibGUgOiAxLFxyXG4gICAgZW5jb3VudGVyIDogMSxcclxuICAgIGVuY291cmFnZSA6IDEsXHJcbiAgICBlbmQgOiAxLFxyXG4gICAgZW5lbXkgOiAxLFxyXG4gICAgZW5lcmd5IDogMSxcclxuICAgIGVuZm9yY2VtZW50IDogMSxcclxuICAgIGVuZ2FnZSA6IDEsXHJcbiAgICBlbmdpbmUgOiAxLFxyXG4gICAgZW5naW5lZXIgOiAxLFxyXG4gICAgZW5naW5lZXJpbmcgOiAxLFxyXG4gICAgRW5nbGlzaCA6IDEsXHJcbiAgICBlbmhhbmNlIDogMSxcclxuICAgIGVuam95IDogMSxcclxuICAgIGVub3Jtb3VzIDogMSxcclxuICAgIGVub3VnaCA6IDEsXHJcbiAgICBlbnN1cmUgOiAxLFxyXG4gICAgZW50ZXIgOiAxLFxyXG4gICAgZW50ZXJwcmlzZSA6IDEsXHJcbiAgICBlbnRlcnRhaW5tZW50IDogMSxcclxuICAgIGVudGlyZSA6IDEsXHJcbiAgICBlbnRpcmVseSA6IDEsXHJcbiAgICBlbnRyYW5jZSA6IDEsXHJcbiAgICBlbnRyeSA6IDEsXHJcbiAgICBlbnZpcm9ubWVudCA6IDEsXHJcbiAgICBlbnZpcm9ubWVudGFsIDogMSxcclxuICAgIGVwaXNvZGUgOiAxLFxyXG4gICAgZXF1YWwgOiAxLFxyXG4gICAgZXF1YWxseSA6IDEsXHJcbiAgICBlcXVpcG1lbnQgOiAxLFxyXG4gICAgZXJhIDogMSxcclxuICAgIGVycm9yIDogMSxcclxuICAgIGVzY2FwZSA6IDEsXHJcbiAgICBlc3BlY2lhbGx5IDogMSxcclxuICAgIGVzc2F5IDogMSxcclxuICAgIGVzc2VudGlhbCA6IDEsXHJcbiAgICBlc3NlbnRpYWxseSA6IDEsXHJcbiAgICBlc3RhYmxpc2ggOiAxLFxyXG4gICAgZXN0YWJsaXNobWVudCA6IDEsXHJcbiAgICBlc3RhdGUgOiAxLFxyXG4gICAgZXN0aW1hdGUgOiAxLFxyXG4gICAgZXRjIDogMSxcclxuICAgIGV0aGljcyA6IDEsXHJcbiAgICBldGhuaWMgOiAxLFxyXG4gICAgRXVyb3BlYW4gOiAxLFxyXG4gICAgZXZhbHVhdGUgOiAxLFxyXG4gICAgZXZhbHVhdGlvbiA6IDEsXHJcbiAgICBldmVuIDogMSxcclxuICAgIGV2ZW5pbmcgOiAxLFxyXG4gICAgZXZlbnQgOiAxLFxyXG4gICAgZXZlbnR1YWxseSA6IDEsXHJcbiAgICBldmVyIDogMSxcclxuICAgIGV2ZXJ5IDogMSxcclxuICAgIGV2ZXJ5Ym9keSA6IDEsXHJcbiAgICBldmVyeWRheSA6IDEsXHJcbiAgICBldmVyeW9uZSA6IDEsXHJcbiAgICBldmVyeXRoaW5nIDogMSxcclxuICAgIGV2ZXJ5d2hlcmUgOiAxLFxyXG4gICAgZXZpZGVuY2UgOiAxLFxyXG4gICAgZXZvbHV0aW9uIDogMSxcclxuICAgIGV2b2x2ZSA6IDEsXHJcbiAgICBleGFjdCA6IDEsXHJcbiAgICBleGFjdGx5IDogMSxcclxuICAgIGV4YW1pbmF0aW9uIDogMSxcclxuICAgIGV4YW1pbmUgOiAxLFxyXG4gICAgZXhhbXBsZSA6IDEsXHJcbiAgICBleGNlZWQgOiAxLFxyXG4gICAgZXhjZWxsZW50IDogMSxcclxuICAgIGV4Y2VwdCA6IDEsXHJcbiAgICBleGNlcHRpb24gOiAxLFxyXG4gICAgZXhjaGFuZ2UgOiAxLFxyXG4gICAgZXhjaXRpbmcgOiAxLFxyXG4gICAgZXhlY3V0aXZlIDogMSxcclxuICAgIGV4ZXJjaXNlIDogMSxcclxuICAgIGV4aGliaXQgOiAxLFxyXG4gICAgZXhoaWJpdGlvbiA6IDEsXHJcbiAgICBleGlzdCA6IDEsXHJcbiAgICBleGlzdGVuY2UgOiAxLFxyXG4gICAgZXhpc3RpbmcgOiAxLFxyXG4gICAgZXhwYW5kIDogMSxcclxuICAgIGV4cGFuc2lvbiA6IDEsXHJcbiAgICBleHBlY3QgOiAxLFxyXG4gICAgZXhwZWN0YXRpb24gOiAxLFxyXG4gICAgZXhwZW5zZSA6IDEsXHJcbiAgICBleHBlbnNpdmUgOiAxLFxyXG4gICAgZXhwZXJpZW5jZSA6IDEsXHJcbiAgICBleHBlcmltZW50IDogMSxcclxuICAgIGV4cGVydCA6IDEsXHJcbiAgICBleHBsYWluIDogMSxcclxuICAgIGV4cGxhbmF0aW9uIDogMSxcclxuICAgIGV4cGxvZGUgOiAxLFxyXG4gICAgZXhwbG9yZSA6IDEsXHJcbiAgICBleHBsb3Npb24gOiAxLFxyXG4gICAgZXhwb3NlIDogMSxcclxuICAgIGV4cG9zdXJlIDogMSxcclxuICAgIGV4cHJlc3MgOiAxLFxyXG4gICAgZXhwcmVzc2lvbiA6IDEsXHJcbiAgICBleHRlbmQgOiAxLFxyXG4gICAgZXh0ZW5zaW9uIDogMSxcclxuICAgIGV4dGVuc2l2ZSA6IDEsXHJcbiAgICBleHRlbnQgOiAxLFxyXG4gICAgZXh0ZXJuYWwgOiAxLFxyXG4gICAgZXh0cmEgOiAxLFxyXG4gICAgZXh0cmFvcmRpbmFyeSA6IDEsXHJcbiAgICBleHRyZW1lIDogMSxcclxuICAgIGV4dHJlbWVseSA6IDEsXHJcbiAgICBleWUgOiAxLFxyXG4gICAgZmFicmljIDogMSxcclxuICAgIGZhY2UgOiAxLFxyXG4gICAgZmFjaWxpdHkgOiAxLFxyXG4gICAgZmFjdCA6IDEsXHJcbiAgICBmYWN0b3IgOiAxLFxyXG4gICAgZmFjdG9yeSA6IDEsXHJcbiAgICBmYWN1bHR5IDogMSxcclxuICAgIGZhZGUgOiAxLFxyXG4gICAgZmFpbCA6IDEsXHJcbiAgICBmYWlsdXJlIDogMSxcclxuICAgIGZhaXIgOiAxLFxyXG4gICAgZmFpcmx5IDogMSxcclxuICAgIGZhaXRoIDogMSxcclxuICAgIGZhbGwgOiAxLFxyXG4gICAgZmFsc2UgOiAxLFxyXG4gICAgZmFtaWxpYXIgOiAxLFxyXG4gICAgZmFtaWx5IDogMSxcclxuICAgIGZhbW91cyA6IDEsXHJcbiAgICBmYW4gOiAxLFxyXG4gICAgZmFudGFzeSA6IDEsXHJcbiAgICBmYXIgOiAxLFxyXG4gICAgZmFybSA6IDEsXHJcbiAgICBmYXJtZXIgOiAxLFxyXG4gICAgZmFzaGlvbiA6IDEsXHJcbiAgICBmYXN0IDogMSxcclxuICAgIGZhdCA6IDEsXHJcbiAgICBmYXRlIDogMSxcclxuICAgIGZhdGhlciA6IDEsXHJcbiAgICBmYXVsdCA6IDEsXHJcbiAgICBmYXZvciA6IDEsXHJcbiAgICBmYXZvcml0ZSA6IDEsXHJcbiAgICBmZWFyIDogMSxcclxuICAgIGZlYXR1cmUgOiAxLFxyXG4gICAgZmVkZXJhbCA6IDEsXHJcbiAgICBmZWUgOiAxLFxyXG4gICAgZmVlZCA6IDEsXHJcbiAgICBmZWVsIDogMSxcclxuICAgIGZlZWxpbmcgOiAxLFxyXG4gICAgZmVsbG93IDogMSxcclxuICAgIGZlbWFsZSA6IDEsXHJcbiAgICBmZW5jZSA6IDEsXHJcbiAgICBmZXcgOiAxLFxyXG4gICAgZmV3ZXIgOiAxLFxyXG4gICAgZmliZXIgOiAxLFxyXG4gICAgZmljdGlvbiA6IDEsXHJcbiAgICBmaWVsZCA6IDEsXHJcbiAgICBmaWZ0ZWVuIDogMSxcclxuICAgIGZpZnRoIDogMSxcclxuICAgIGZpZnR5IDogMSxcclxuICAgIGZpZ2h0IDogMSxcclxuICAgIGZpZ2h0ZXIgOiAxLFxyXG4gICAgZmlnaHRpbmcgOiAxLFxyXG4gICAgZmlndXJlIDogMSxcclxuICAgIGZpbGUgOiAxLFxyXG4gICAgZmlsbCA6IDEsXHJcbiAgICBmaWxtIDogMSxcclxuICAgIGZpbmFsIDogMSxcclxuICAgIGZpbmFsbHkgOiAxLFxyXG4gICAgZmluYW5jZSA6IDEsXHJcbiAgICBmaW5hbmNpYWwgOiAxLFxyXG4gICAgZmluZCA6IDEsXHJcbiAgICBmaW5kaW5nIDogMSxcclxuICAgIGZpbmUgOiAxLFxyXG4gICAgZmluZ2VyIDogMSxcclxuICAgIGZpbmlzaCA6IDEsXHJcbiAgICBmaXJlIDogMSxcclxuICAgIGZpcm0gOiAxLFxyXG4gICAgZmlyc3QgOiAxLFxyXG4gICAgZmlzaCA6IDEsXHJcbiAgICBmaXNoaW5nIDogMSxcclxuICAgIGZpdCA6IDEsXHJcbiAgICBmaXRuZXNzIDogMSxcclxuICAgIGZpdmUgOiAxLFxyXG4gICAgZml4IDogMSxcclxuICAgIGZsYWcgOiAxLFxyXG4gICAgZmxhbWUgOiAxLFxyXG4gICAgZmxhdCA6IDEsXHJcbiAgICBmbGF2b3IgOiAxLFxyXG4gICAgZmxlZSA6IDEsXHJcbiAgICBmbGVzaCA6IDEsXHJcbiAgICBmbGlnaHQgOiAxLFxyXG4gICAgZmxvYXQgOiAxLFxyXG4gICAgZmxvb3IgOiAxLFxyXG4gICAgZmxvdyA6IDEsXHJcbiAgICBmbG93ZXIgOiAxLFxyXG4gICAgZmx5IDogMSxcclxuICAgIGZvY3VzIDogMSxcclxuICAgIGZvbGsgOiAxLFxyXG4gICAgZm9sbG93IDogMSxcclxuICAgIGZvbGxvd2luZyA6IDEsXHJcbiAgICBmb29kIDogMSxcclxuICAgIGZvb3QgOiAxLFxyXG4gICAgZm9vdGJhbGwgOiAxLFxyXG4gICAgZm9yIDogMSxcclxuICAgIGZvcmNlIDogMSxcclxuICAgIGZvcmVpZ24gOiAxLFxyXG4gICAgZm9yZXN0IDogMSxcclxuICAgIGZvcmV2ZXIgOiAxLFxyXG4gICAgZm9yZ2V0IDogMSxcclxuICAgIGZvcm0gOiAxLFxyXG4gICAgZm9ybWFsIDogMSxcclxuICAgIGZvcm1hdGlvbiA6IDEsXHJcbiAgICBmb3JtZXIgOiAxLFxyXG4gICAgZm9ybXVsYSA6IDEsXHJcbiAgICBmb3J0aCA6IDEsXHJcbiAgICBmb3J0dW5lIDogMSxcclxuICAgIGZvcndhcmQgOiAxLFxyXG4gICAgZm91bmQgOiAxLFxyXG4gICAgZm91bmRhdGlvbiA6IDEsXHJcbiAgICBmb3VuZGVyIDogMSxcclxuICAgIGZvdXIgOiAxLFxyXG4gICAgZm91cnRoIDogMSxcclxuICAgIGZyYW1lIDogMSxcclxuICAgIGZyYW1ld29yayA6IDEsXHJcbiAgICBmcmVlIDogMSxcclxuICAgIGZyZWVkb20gOiAxLFxyXG4gICAgZnJlZXplIDogMSxcclxuICAgIEZyZW5jaCA6IDEsXHJcbiAgICBmcmVxdWVuY3kgOiAxLFxyXG4gICAgZnJlcXVlbnQgOiAxLFxyXG4gICAgZnJlcXVlbnRseSA6IDEsXHJcbiAgICBmcmVzaCA6IDEsXHJcbiAgICBmcmllbmQgOiAxLFxyXG4gICAgZnJpZW5kbHkgOiAxLFxyXG4gICAgZnJpZW5kc2hpcCA6IDEsXHJcbiAgICBmcm9tIDogMSxcclxuICAgIGZyb250IDogMSxcclxuICAgIGZydWl0IDogMSxcclxuICAgIGZydXN0cmF0aW9uIDogMSxcclxuICAgIGZ1ZWwgOiAxLFxyXG4gICAgZnVsbCA6IDEsXHJcbiAgICBmdWxseSA6IDEsXHJcbiAgICBmdW4gOiAxLFxyXG4gICAgZnVuY3Rpb24gOiAxLFxyXG4gICAgZnVuZCA6IDEsXHJcbiAgICBmdW5kYW1lbnRhbCA6IDEsXHJcbiAgICBmdW5kaW5nIDogMSxcclxuICAgIGZ1bmVyYWwgOiAxLFxyXG4gICAgZnVubnkgOiAxLFxyXG4gICAgZnVybml0dXJlIDogMSxcclxuICAgIGZ1cnRoZXJtb3JlIDogMSxcclxuICAgIGZ1dHVyZSA6IDEsXHJcbiAgICBnYWluIDogMSxcclxuICAgIGdhbGF4eSA6IDEsXHJcbiAgICBnYWxsZXJ5IDogMSxcclxuICAgIGdhbWUgOiAxLFxyXG4gICAgZ2FuZyA6IDEsXHJcbiAgICBnYXAgOiAxLFxyXG4gICAgZ2FyYWdlIDogMSxcclxuICAgIGdhcmRlbiA6IDEsXHJcbiAgICBnYXJsaWMgOiAxLFxyXG4gICAgZ2FzIDogMSxcclxuICAgIGdhdGUgOiAxLFxyXG4gICAgZ2F0aGVyIDogMSxcclxuICAgIGdheSA6IDEsXHJcbiAgICBnYXplIDogMSxcclxuICAgIGdlYXIgOiAxLFxyXG4gICAgZ2VuZGVyIDogMSxcclxuICAgIGdlbmUgOiAxLFxyXG4gICAgZ2VuZXJhbCA6IDEsXHJcbiAgICBnZW5lcmFsbHkgOiAxLFxyXG4gICAgZ2VuZXJhdGUgOiAxLFxyXG4gICAgZ2VuZXJhdGlvbiA6IDEsXHJcbiAgICBnZW5ldGljIDogMSxcclxuICAgIGdlbnRsZW1hbiA6IDEsXHJcbiAgICBnZW50bHkgOiAxLFxyXG4gICAgR2VybWFuIDogMSxcclxuICAgIGdlc3R1cmUgOiAxLFxyXG4gICAgZ2V0IDogMSxcclxuICAgIGdob3N0IDogMSxcclxuICAgIGdpYW50IDogMSxcclxuICAgIGdpZnQgOiAxLFxyXG4gICAgZ2lmdGVkIDogMSxcclxuICAgIGdpcmwgOiAxLFxyXG4gICAgZ2lybGZyaWVuZCA6IDEsXHJcbiAgICBnaXZlIDogMSxcclxuICAgIGdpdmVuIDogMSxcclxuICAgIGdsYWQgOiAxLFxyXG4gICAgZ2xhbmNlIDogMSxcclxuICAgIGdsYXNzIDogMSxcclxuICAgIGdsb2JhbCA6IDEsXHJcbiAgICBnbG92ZSA6IDEsXHJcbiAgICBnbyA6IDEsXHJcbiAgICBnb2FsIDogMSxcclxuICAgIEdvZCA6IDEsXHJcbiAgICBnb2xkIDogMSxcclxuICAgIGdvbGRlbiA6IDEsXHJcbiAgICBnb2xmIDogMSxcclxuICAgIGdvb2QgOiAxLFxyXG4gICAgZ292ZXJubWVudCA6IDEsXHJcbiAgICBnb3Zlcm5vciA6IDEsXHJcbiAgICBncmFiIDogMSxcclxuICAgIGdyYWRlIDogMSxcclxuICAgIGdyYWR1YWxseSA6IDEsXHJcbiAgICBncmFkdWF0ZSA6IDEsXHJcbiAgICBncmFpbiA6IDEsXHJcbiAgICBncmFuZCA6IDEsXHJcbiAgICBncmFuZGZhdGhlciA6IDEsXHJcbiAgICBncmFuZG1vdGhlciA6IDEsXHJcbiAgICBncmFudCA6IDEsXHJcbiAgICBncmFzcyA6IDEsXHJcbiAgICBncmF2ZSA6IDEsXHJcbiAgICBncmF5IDogMSxcclxuICAgIGdyZWF0IDogMSxcclxuICAgIGdyZWF0ZXN0IDogMSxcclxuICAgIGdyZWVuIDogMSxcclxuICAgIGdyb2NlcnkgOiAxLFxyXG4gICAgZ3JvdW5kIDogMSxcclxuICAgIGdyb3VwIDogMSxcclxuICAgIGdyb3cgOiAxLFxyXG4gICAgZ3Jvd2luZyA6IDEsXHJcbiAgICBncm93dGggOiAxLFxyXG4gICAgZ3VhcmFudGVlIDogMSxcclxuICAgIGd1YXJkIDogMSxcclxuICAgIGd1ZXNzIDogMSxcclxuICAgIGd1ZXN0IDogMSxcclxuICAgIGd1aWRlIDogMSxcclxuICAgIGd1aWRlbGluZSA6IDEsXHJcbiAgICBndWlsdHkgOiAxLFxyXG4gICAgZ3VuIDogMSxcclxuICAgIGd1eSA6IDEsXHJcbiAgICBoYWJpdCA6IDEsXHJcbiAgICBoYWJpdGF0IDogMSxcclxuICAgIGhhaXIgOiAxLFxyXG4gICAgaGFsZiA6IDEsXHJcbiAgICBoYWxsIDogMSxcclxuICAgIGhhbmQgOiAxLFxyXG4gICAgaGFuZGZ1bCA6IDEsXHJcbiAgICBoYW5kbGUgOiAxLFxyXG4gICAgaGFuZyA6IDEsXHJcbiAgICBoYXBwZW4gOiAxLFxyXG4gICAgaGFwcHkgOiAxLFxyXG4gICAgaGFyZCA6IDEsXHJcbiAgICBoYXJkbHkgOiAxLFxyXG4gICAgaGF0IDogMSxcclxuICAgIGhhdGUgOiAxLFxyXG4gICAgaGF2ZSA6IDEsXHJcbiAgICBoZSA6IDEsXHJcbiAgICBoZWFkIDogMSxcclxuICAgIGhlYWRsaW5lIDogMSxcclxuICAgIGhlYWRxdWFydGVycyA6IDEsXHJcbiAgICBoZWFsdGggOiAxLFxyXG4gICAgaGVhbHRoeSA6IDEsXHJcbiAgICBoZWFyIDogMSxcclxuICAgIGhlYXJpbmcgOiAxLFxyXG4gICAgaGVhcnQgOiAxLFxyXG4gICAgaGVhdCA6IDEsXHJcbiAgICBoZWF2ZW4gOiAxLFxyXG4gICAgaGVhdmlseSA6IDEsXHJcbiAgICBoZWF2eSA6IDEsXHJcbiAgICBoZWVsIDogMSxcclxuICAgIGhlaWdodCA6IDEsXHJcbiAgICBoZWxpY29wdGVyIDogMSxcclxuICAgIGhlbGwgOiAxLFxyXG4gICAgaGVsbG8gOiAxLFxyXG4gICAgaGVscCA6IDEsXHJcbiAgICBoZWxwZnVsIDogMSxcclxuICAgIGhlciA6IDEsXHJcbiAgICBoZXJlIDogMSxcclxuICAgIGhlcml0YWdlIDogMSxcclxuICAgIGhlcm8gOiAxLFxyXG4gICAgaGVyc2VsZiA6IDEsXHJcbiAgICBoZXkgOiAxLFxyXG4gICAgaGkgOiAxLFxyXG4gICAgaGlkZSA6IDEsXHJcbiAgICBoaWdoIDogMSxcclxuICAgIGhpZ2hsaWdodCA6IDEsXHJcbiAgICBoaWdobHkgOiAxLFxyXG4gICAgaGlnaHdheSA6IDEsXHJcbiAgICBoaWxsIDogMSxcclxuICAgIGhpbSA6IDEsXHJcbiAgICBoaW1zZWxmIDogMSxcclxuICAgIGhpcCA6IDEsXHJcbiAgICBoaXJlIDogMSxcclxuICAgIGhpcyA6IDEsXHJcbiAgICBoaXN0b3JpYW4gOiAxLFxyXG4gICAgaGlzdG9yaWMgOiAxLFxyXG4gICAgaGlzdG9yaWNhbCA6IDEsXHJcbiAgICBoaXN0b3J5IDogMSxcclxuICAgIGhpdCA6IDEsXHJcbiAgICBob2xkIDogMSxcclxuICAgIGhvbGUgOiAxLFxyXG4gICAgaG9saWRheSA6IDEsXHJcbiAgICBob2x5IDogMSxcclxuICAgIGhvbWUgOiAxLFxyXG4gICAgaG9tZWxlc3MgOiAxLFxyXG4gICAgaG9uZXN0IDogMSxcclxuICAgIGhvbmV5IDogMSxcclxuICAgIGhvbm9yIDogMSxcclxuICAgIGhvcGUgOiAxLFxyXG4gICAgaG9yaXpvbiA6IDEsXHJcbiAgICBob3Jyb3IgOiAxLFxyXG4gICAgaG9yc2UgOiAxLFxyXG4gICAgaG9zcGl0YWwgOiAxLFxyXG4gICAgaG9zdCA6IDEsXHJcbiAgICBob3QgOiAxLFxyXG4gICAgaG90ZWwgOiAxLFxyXG4gICAgaG91ciA6IDEsXHJcbiAgICBob3VzZSA6IDEsXHJcbiAgICBob3VzZWhvbGQgOiAxLFxyXG4gICAgaG91c2luZyA6IDEsXHJcbiAgICBob3cgOiAxLFxyXG4gICAgaG93ZXZlciA6IDEsXHJcbiAgICBodWdlIDogMSxcclxuICAgIGh1bWFuIDogMSxcclxuICAgIGh1bW9yIDogMSxcclxuICAgIGh1bmRyZWQgOiAxLFxyXG4gICAgaHVuZ3J5IDogMSxcclxuICAgIGh1bnRlciA6IDEsXHJcbiAgICBodW50aW5nIDogMSxcclxuICAgIGh1cnQgOiAxLFxyXG4gICAgaHVzYmFuZCA6IDEsXHJcbiAgICBoeXBvdGhlc2lzIDogMSxcclxuICAgIEkgOiAxLFxyXG4gICAgaWNlIDogMSxcclxuICAgIGlkZWEgOiAxLFxyXG4gICAgaWRlYWwgOiAxLFxyXG4gICAgaWRlbnRpZmljYXRpb24gOiAxLFxyXG4gICAgaWRlbnRpZnkgOiAxLFxyXG4gICAgaWRlbnRpdHkgOiAxLFxyXG4gICAgaWUgOiAxLFxyXG4gICAgaWYgOiAxLFxyXG4gICAgaWdub3JlIDogMSxcclxuICAgIGlsbCA6IDEsXHJcbiAgICBpbGxlZ2FsIDogMSxcclxuICAgIGlsbG5lc3MgOiAxLFxyXG4gICAgaWxsdXN0cmF0ZSA6IDEsXHJcbiAgICBpbWFnZSA6IDEsXHJcbiAgICBpbWFnaW5hdGlvbiA6IDEsXHJcbiAgICBpbWFnaW5lIDogMSxcclxuICAgIGltbWVkaWF0ZSA6IDEsXHJcbiAgICBpbW1lZGlhdGVseSA6IDEsXHJcbiAgICBpbW1pZ3JhbnQgOiAxLFxyXG4gICAgaW1taWdyYXRpb24gOiAxLFxyXG4gICAgaW1wYWN0IDogMSxcclxuICAgIGltcGxlbWVudCA6IDEsXHJcbiAgICBpbXBsaWNhdGlvbiA6IDEsXHJcbiAgICBpbXBseSA6IDEsXHJcbiAgICBpbXBvcnRhbmNlIDogMSxcclxuICAgIGltcG9ydGFudCA6IDEsXHJcbiAgICBpbXBvc2UgOiAxLFxyXG4gICAgaW1wb3NzaWJsZSA6IDEsXHJcbiAgICBpbXByZXNzIDogMSxcclxuICAgIGltcHJlc3Npb24gOiAxLFxyXG4gICAgaW1wcmVzc2l2ZSA6IDEsXHJcbiAgICBpbXByb3ZlIDogMSxcclxuICAgIGltcHJvdmVtZW50IDogMSxcclxuICAgIGluIDogMSxcclxuICAgIGluY2VudGl2ZSA6IDEsXHJcbiAgICBpbmNpZGVudCA6IDEsXHJcbiAgICBpbmNsdWRlIDogMSxcclxuICAgIGluY2x1ZGluZyA6IDEsXHJcbiAgICBpbmNvbWUgOiAxLFxyXG4gICAgaW5jb3Jwb3JhdGUgOiAxLFxyXG4gICAgaW5jcmVhc2UgOiAxLFxyXG4gICAgaW5jcmVhc2VkIDogMSxcclxuICAgIGluY3JlYXNpbmcgOiAxLFxyXG4gICAgaW5jcmVhc2luZ2x5IDogMSxcclxuICAgIGluY3JlZGlibGUgOiAxLFxyXG4gICAgaW5kZWVkIDogMSxcclxuICAgIGluZGVwZW5kZW5jZSA6IDEsXHJcbiAgICBpbmRlcGVuZGVudCA6IDEsXHJcbiAgICBpbmRleCA6IDEsXHJcbiAgICBJbmRpYW4gOiAxLFxyXG4gICAgaW5kaWNhdGUgOiAxLFxyXG4gICAgaW5kaWNhdGlvbiA6IDEsXHJcbiAgICBpbmRpdmlkdWFsIDogMSxcclxuICAgIGluZHVzdHJpYWwgOiAxLFxyXG4gICAgaW5kdXN0cnkgOiAxLFxyXG4gICAgaW5mYW50IDogMSxcclxuICAgIGluZmVjdGlvbiA6IDEsXHJcbiAgICBpbmZsYXRpb24gOiAxLFxyXG4gICAgaW5mbHVlbmNlIDogMSxcclxuICAgIGluZm9ybSA6IDEsXHJcbiAgICBpbmZvcm1hdGlvbiA6IDEsXHJcbiAgICBpbmdyZWRpZW50IDogMSxcclxuICAgIGluaXRpYWwgOiAxLFxyXG4gICAgaW5pdGlhbGx5IDogMSxcclxuICAgIGluaXRpYXRpdmUgOiAxLFxyXG4gICAgaW5qdXJ5IDogMSxcclxuICAgIGlubmVyIDogMSxcclxuICAgIGlubm9jZW50IDogMSxcclxuICAgIGlucXVpcnkgOiAxLFxyXG4gICAgaW5zaWRlIDogMSxcclxuICAgIGluc2lnaHQgOiAxLFxyXG4gICAgaW5zaXN0IDogMSxcclxuICAgIGluc3BpcmUgOiAxLFxyXG4gICAgaW5zdGFsbCA6IDEsXHJcbiAgICBpbnN0YW5jZSA6IDEsXHJcbiAgICBpbnN0ZWFkIDogMSxcclxuICAgIGluc3RpdHV0aW9uIDogMSxcclxuICAgIGluc3RpdHV0aW9uYWwgOiAxLFxyXG4gICAgaW5zdHJ1Y3Rpb24gOiAxLFxyXG4gICAgaW5zdHJ1Y3RvciA6IDEsXHJcbiAgICBpbnN0cnVtZW50IDogMSxcclxuICAgIGluc3VyYW5jZSA6IDEsXHJcbiAgICBpbnRlbGxlY3R1YWwgOiAxLFxyXG4gICAgaW50ZWxsaWdlbmNlIDogMSxcclxuICAgIGludGVuZCA6IDEsXHJcbiAgICBpbnRlbnNlIDogMSxcclxuICAgIGludGVuc2l0eSA6IDEsXHJcbiAgICBpbnRlbnRpb24gOiAxLFxyXG4gICAgaW50ZXJhY3Rpb24gOiAxLFxyXG4gICAgaW50ZXJlc3QgOiAxLFxyXG4gICAgaW50ZXJlc3RlZCA6IDEsXHJcbiAgICBpbnRlcmVzdGluZyA6IDEsXHJcbiAgICBpbnRlcm5hbCA6IDEsXHJcbiAgICBpbnRlcm5hdGlvbmFsIDogMSxcclxuICAgIEludGVybmV0IDogMSxcclxuICAgIGludGVycHJldCA6IDEsXHJcbiAgICBpbnRlcnByZXRhdGlvbiA6IDEsXHJcbiAgICBpbnRlcnZlbnRpb24gOiAxLFxyXG4gICAgaW50ZXJ2aWV3IDogMSxcclxuICAgIGludG8gOiAxLFxyXG4gICAgaW50cm9kdWNlIDogMSxcclxuICAgIGludHJvZHVjdGlvbiA6IDEsXHJcbiAgICBpbnZhc2lvbiA6IDEsXHJcbiAgICBpbnZlc3QgOiAxLFxyXG4gICAgaW52ZXN0aWdhdGUgOiAxLFxyXG4gICAgaW52ZXN0aWdhdGlvbiA6IDEsXHJcbiAgICBpbnZlc3RpZ2F0b3IgOiAxLFxyXG4gICAgaW52ZXN0bWVudCA6IDEsXHJcbiAgICBpbnZlc3RvciA6IDEsXHJcbiAgICBpbnZpdGUgOiAxLFxyXG4gICAgaW52b2x2ZSA6IDEsXHJcbiAgICBpbnZvbHZlZCA6IDEsXHJcbiAgICBpbnZvbHZlbWVudCA6IDEsXHJcbiAgICBJcmFxaSA6IDEsXHJcbiAgICBJcmlzaCA6IDEsXHJcbiAgICBpcm9uIDogMSxcclxuICAgIElzbGFtaWMgOiAxLFxyXG4gICAgaXNsYW5kIDogMSxcclxuICAgIElzcmFlbGkgOiAxLFxyXG4gICAgaXNzdWUgOiAxLFxyXG4gICAgaXQgOiAxLFxyXG4gICAgSXRhbGlhbiA6IDEsXHJcbiAgICBpdGVtIDogMSxcclxuICAgIGl0cyA6IDEsXHJcbiAgICBpdHNlbGYgOiAxLFxyXG4gICAgamFja2V0IDogMSxcclxuICAgIGphaWwgOiAxLFxyXG4gICAgSmFwYW5lc2UgOiAxLFxyXG4gICAgamV0IDogMSxcclxuICAgIEpldyA6IDEsXHJcbiAgICBKZXdpc2ggOiAxLFxyXG4gICAgam9iIDogMSxcclxuICAgIGpvaW4gOiAxLFxyXG4gICAgam9pbnQgOiAxLFxyXG4gICAgam9rZSA6IDEsXHJcbiAgICBqb3VybmFsIDogMSxcclxuICAgIGpvdXJuYWxpc3QgOiAxLFxyXG4gICAgam91cm5leSA6IDEsXHJcbiAgICBqb3kgOiAxLFxyXG4gICAganVkZ2UgOiAxLFxyXG4gICAganVkZ21lbnQgOiAxLFxyXG4gICAganVpY2UgOiAxLFxyXG4gICAganVtcCA6IDEsXHJcbiAgICBqdW5pb3IgOiAxLFxyXG4gICAganVyeSA6IDEsXHJcbiAgICBqdXN0IDogMSxcclxuICAgIGp1c3RpY2UgOiAxLFxyXG4gICAganVzdGlmeSA6IDEsXHJcbiAgICBrZWVwIDogMSxcclxuICAgIGtleSA6IDEsXHJcbiAgICBraWNrIDogMSxcclxuICAgIGtpZCA6IDEsXHJcbiAgICBraWxsIDogMSxcclxuICAgIGtpbGxlciA6IDEsXHJcbiAgICBraWxsaW5nIDogMSxcclxuICAgIGtpbmQgOiAxLFxyXG4gICAga2luZyA6IDEsXHJcbiAgICBraXNzIDogMSxcclxuICAgIGtpdGNoZW4gOiAxLFxyXG4gICAga25lZSA6IDEsXHJcbiAgICBrbmlmZSA6IDEsXHJcbiAgICBrbm9jayA6IDEsXHJcbiAgICBrbm93IDogMSxcclxuICAgIGtub3dsZWRnZSA6IDEsXHJcbiAgICBsYWIgOiAxLFxyXG4gICAgbGFiZWwgOiAxLFxyXG4gICAgbGFib3IgOiAxLFxyXG4gICAgbGFib3JhdG9yeSA6IDEsXHJcbiAgICBsYWNrIDogMSxcclxuICAgIGxhZHkgOiAxLFxyXG4gICAgbGFrZSA6IDEsXHJcbiAgICBsYW5kIDogMSxcclxuICAgIGxhbmRzY2FwZSA6IDEsXHJcbiAgICBsYW5ndWFnZSA6IDEsXHJcbiAgICBsYXAgOiAxLFxyXG4gICAgbGFyZ2UgOiAxLFxyXG4gICAgbGFyZ2VseSA6IDEsXHJcbiAgICBsYXN0IDogMSxcclxuICAgIGxhdGUgOiAxLFxyXG4gICAgbGF0ZXIgOiAxLFxyXG4gICAgTGF0aW4gOiAxLFxyXG4gICAgbGF0dGVyIDogMSxcclxuICAgIGxhdWdoIDogMSxcclxuICAgIGxhdW5jaCA6IDEsXHJcbiAgICBsYXcgOiAxLFxyXG4gICAgbGF3biA6IDEsXHJcbiAgICBsYXdzdWl0IDogMSxcclxuICAgIGxhd3llciA6IDEsXHJcbiAgICBsYXkgOiAxLFxyXG4gICAgbGF5ZXIgOiAxLFxyXG4gICAgbGVhZCA6IDEsXHJcbiAgICBsZWFkZXIgOiAxLFxyXG4gICAgbGVhZGVyc2hpcCA6IDEsXHJcbiAgICBsZWFkaW5nIDogMSxcclxuICAgIGxlYWYgOiAxLFxyXG4gICAgbGVhZ3VlIDogMSxcclxuICAgIGxlYW4gOiAxLFxyXG4gICAgbGVhcm4gOiAxLFxyXG4gICAgbGVhcm5pbmcgOiAxLFxyXG4gICAgbGVhc3QgOiAxLFxyXG4gICAgbGVhdGhlciA6IDEsXHJcbiAgICBsZWF2ZSA6IDEsXHJcbiAgICBsZWZ0IDogMSxcclxuICAgIGxlZyA6IDEsXHJcbiAgICBsZWdhY3kgOiAxLFxyXG4gICAgbGVnYWwgOiAxLFxyXG4gICAgbGVnZW5kIDogMSxcclxuICAgIGxlZ2lzbGF0aW9uIDogMSxcclxuICAgIGxlZ2l0aW1hdGUgOiAxLFxyXG4gICAgbGVtb24gOiAxLFxyXG4gICAgbGVuZ3RoIDogMSxcclxuICAgIGxlc3MgOiAxLFxyXG4gICAgbGVzc29uIDogMSxcclxuICAgIGxldCA6IDEsXHJcbiAgICBsZXR0ZXIgOiAxLFxyXG4gICAgbGV2ZWwgOiAxLFxyXG4gICAgbGliZXJhbCA6IDEsXHJcbiAgICBsaWJyYXJ5IDogMSxcclxuICAgIGxpY2Vuc2UgOiAxLFxyXG4gICAgbGllIDogMSxcclxuICAgIGxpZmUgOiAxLFxyXG4gICAgbGlmZXN0eWxlIDogMSxcclxuICAgIGxpZmV0aW1lIDogMSxcclxuICAgIGxpZnQgOiAxLFxyXG4gICAgbGlnaHQgOiAxLFxyXG4gICAgbGlrZSA6IDEsXHJcbiAgICBsaWtlbHkgOiAxLFxyXG4gICAgbGltaXQgOiAxLFxyXG4gICAgbGltaXRhdGlvbiA6IDEsXHJcbiAgICBsaW1pdGVkIDogMSxcclxuICAgIGxpbmUgOiAxLFxyXG4gICAgbGluayA6IDEsXHJcbiAgICBsaXAgOiAxLFxyXG4gICAgbGlzdCA6IDEsXHJcbiAgICBsaXN0ZW4gOiAxLFxyXG4gICAgbGl0ZXJhbGx5IDogMSxcclxuICAgIGxpdGVyYXJ5IDogMSxcclxuICAgIGxpdGVyYXR1cmUgOiAxLFxyXG4gICAgbGl0dGxlIDogMSxcclxuICAgIGxpdmUgOiAxLFxyXG4gICAgbGl2aW5nIDogMSxcclxuICAgIGxvYWQgOiAxLFxyXG4gICAgbG9hbiA6IDEsXHJcbiAgICBsb2NhbCA6IDEsXHJcbiAgICBsb2NhdGUgOiAxLFxyXG4gICAgbG9jYXRpb24gOiAxLFxyXG4gICAgbG9jayA6IDEsXHJcbiAgICBsb25nIDogMSxcclxuICAgIFwibG9uZy10ZXJtXCIgOiAxLFxyXG4gICAgbG9vayA6IDEsXHJcbiAgICBsb29zZSA6IDEsXHJcbiAgICBsb3NlIDogMSxcclxuICAgIGxvc3MgOiAxLFxyXG4gICAgbG9zdCA6IDEsXHJcbiAgICBsb3QgOiAxLFxyXG4gICAgbG90cyA6IDEsXHJcbiAgICBsb3VkIDogMSxcclxuICAgIGxvdmUgOiAxLFxyXG4gICAgbG92ZWx5IDogMSxcclxuICAgIGxvdmVyIDogMSxcclxuICAgIGxvdyA6IDEsXHJcbiAgICBsb3dlciA6IDEsXHJcbiAgICBsdWNrIDogMSxcclxuICAgIGx1Y2t5IDogMSxcclxuICAgIGx1bmNoIDogMSxcclxuICAgIGx1bmcgOiAxLFxyXG4gICAgbWFjaGluZSA6IDEsXHJcbiAgICBtYWQgOiAxLFxyXG4gICAgbWFnYXppbmUgOiAxLFxyXG4gICAgbWFpbCA6IDEsXHJcbiAgICBtYWluIDogMSxcclxuICAgIG1haW5seSA6IDEsXHJcbiAgICBtYWludGFpbiA6IDEsXHJcbiAgICBtYWludGVuYW5jZSA6IDEsXHJcbiAgICBtYWpvciA6IDEsXHJcbiAgICBtYWpvcml0eSA6IDEsXHJcbiAgICBtYWtlIDogMSxcclxuICAgIG1ha2VyIDogMSxcclxuICAgIG1ha2V1cCA6IDEsXHJcbiAgICBtYWxlIDogMSxcclxuICAgIG1hbGwgOiAxLFxyXG4gICAgbWFuIDogMSxcclxuICAgIG1hbmFnZSA6IDEsXHJcbiAgICBtYW5hZ2VtZW50IDogMSxcclxuICAgIG1hbmFnZXIgOiAxLFxyXG4gICAgbWFubmVyIDogMSxcclxuICAgIG1hbnVmYWN0dXJlciA6IDEsXHJcbiAgICBtYW51ZmFjdHVyaW5nIDogMSxcclxuICAgIG1hbnkgOiAxLFxyXG4gICAgbWFwIDogMSxcclxuICAgIG1hcmdpbiA6IDEsXHJcbiAgICBtYXJrIDogMSxcclxuICAgIG1hcmtldCA6IDEsXHJcbiAgICBtYXJrZXRpbmcgOiAxLFxyXG4gICAgbWFycmlhZ2UgOiAxLFxyXG4gICAgbWFycmllZCA6IDEsXHJcbiAgICBtYXJyeSA6IDEsXHJcbiAgICBtYXNrIDogMSxcclxuICAgIG1hc3MgOiAxLFxyXG4gICAgbWFzc2l2ZSA6IDEsXHJcbiAgICBtYXN0ZXIgOiAxLFxyXG4gICAgbWF0Y2ggOiAxLFxyXG4gICAgbWF0ZXJpYWwgOiAxLFxyXG4gICAgbWF0aCA6IDEsXHJcbiAgICBtYXR0ZXIgOiAxLFxyXG4gICAgbWF5IDogMSxcclxuICAgIG1heWJlIDogMSxcclxuICAgIG1heW9yIDogMSxcclxuICAgIG1lIDogMSxcclxuICAgIG1lYWwgOiAxLFxyXG4gICAgbWVhbiA6IDEsXHJcbiAgICBtZWFuaW5nIDogMSxcclxuICAgIG1lYW53aGlsZSA6IDEsXHJcbiAgICBtZWFzdXJlIDogMSxcclxuICAgIG1lYXN1cmVtZW50IDogMSxcclxuICAgIG1lYXQgOiAxLFxyXG4gICAgbWVjaGFuaXNtIDogMSxcclxuICAgIG1lZGlhIDogMSxcclxuICAgIG1lZGljYWwgOiAxLFxyXG4gICAgbWVkaWNhdGlvbiA6IDEsXHJcbiAgICBtZWRpY2luZSA6IDEsXHJcbiAgICBtZWRpdW0gOiAxLFxyXG4gICAgbWVldCA6IDEsXHJcbiAgICBtZWV0aW5nIDogMSxcclxuICAgIG1lbWJlciA6IDEsXHJcbiAgICBtZW1iZXJzaGlwIDogMSxcclxuICAgIG1lbW9yeSA6IDEsXHJcbiAgICBtZW50YWwgOiAxLFxyXG4gICAgbWVudGlvbiA6IDEsXHJcbiAgICBtZW51IDogMSxcclxuICAgIG1lcmUgOiAxLFxyXG4gICAgbWVyZWx5IDogMSxcclxuICAgIG1lc3MgOiAxLFxyXG4gICAgbWVzc2FnZSA6IDEsXHJcbiAgICBtZXRhbCA6IDEsXHJcbiAgICBtZXRlciA6IDEsXHJcbiAgICBtZXRob2QgOiAxLFxyXG4gICAgTWV4aWNhbiA6IDEsXHJcbiAgICBtaWRkbGUgOiAxLFxyXG4gICAgbWlnaHQgOiAxLFxyXG4gICAgbWlsaXRhcnkgOiAxLFxyXG4gICAgbWlsayA6IDEsXHJcbiAgICBtaWxsaW9uIDogMSxcclxuICAgIG1pbmQgOiAxLFxyXG4gICAgbWluZSA6IDEsXHJcbiAgICBtaW5pc3RlciA6IDEsXHJcbiAgICBtaW5vciA6IDEsXHJcbiAgICBtaW5vcml0eSA6IDEsXHJcbiAgICBtaW51dGUgOiAxLFxyXG4gICAgbWlyYWNsZSA6IDEsXHJcbiAgICBtaXJyb3IgOiAxLFxyXG4gICAgbWlzcyA6IDEsXHJcbiAgICBtaXNzaWxlIDogMSxcclxuICAgIG1pc3Npb24gOiAxLFxyXG4gICAgbWlzdGFrZSA6IDEsXHJcbiAgICBtaXggOiAxLFxyXG4gICAgbWl4dHVyZSA6IDEsXHJcbiAgICBcIm1tLWhtbVwiIDogMSxcclxuICAgIG1vZGUgOiAxLFxyXG4gICAgbW9kZWwgOiAxLFxyXG4gICAgbW9kZXJhdGUgOiAxLFxyXG4gICAgbW9kZXJuIDogMSxcclxuICAgIG1vZGVzdCA6IDEsXHJcbiAgICBtb20gOiAxLFxyXG4gICAgbW9tZW50IDogMSxcclxuICAgIG1vbmV5IDogMSxcclxuICAgIG1vbml0b3IgOiAxLFxyXG4gICAgbW9udGggOiAxLFxyXG4gICAgbW9vZCA6IDEsXHJcbiAgICBtb29uIDogMSxcclxuICAgIG1vcmFsIDogMSxcclxuICAgIG1vcmUgOiAxLFxyXG4gICAgbW9yZW92ZXIgOiAxLFxyXG4gICAgbW9ybmluZyA6IDEsXHJcbiAgICBtb3J0Z2FnZSA6IDEsXHJcbiAgICBtb3N0IDogMSxcclxuICAgIG1vc3RseSA6IDEsXHJcbiAgICBtb3RoZXIgOiAxLFxyXG4gICAgbW90aW9uIDogMSxcclxuICAgIG1vdGl2YXRpb24gOiAxLFxyXG4gICAgbW90b3IgOiAxLFxyXG4gICAgbW91bnQgOiAxLFxyXG4gICAgbW91bnRhaW4gOiAxLFxyXG4gICAgbW91c2UgOiAxLFxyXG4gICAgbW91dGggOiAxLFxyXG4gICAgbW92ZSA6IDEsXHJcbiAgICBtb3ZlbWVudCA6IDEsXHJcbiAgICBtb3ZpZSA6IDEsXHJcbiAgICBNciA6IDEsXHJcbiAgICBNcnMgOiAxLFxyXG4gICAgTXMgOiAxLFxyXG4gICAgbXVjaCA6IDEsXHJcbiAgICBtdWx0aXBsZSA6IDEsXHJcbiAgICBtdXJkZXIgOiAxLFxyXG4gICAgbXVzY2xlIDogMSxcclxuICAgIG11c2V1bSA6IDEsXHJcbiAgICBtdXNpYyA6IDEsXHJcbiAgICBtdXNpY2FsIDogMSxcclxuICAgIG11c2ljaWFuIDogMSxcclxuICAgIE11c2xpbSA6IDEsXHJcbiAgICBtdXN0IDogMSxcclxuICAgIG11dHVhbCA6IDEsXHJcbiAgICBteSA6IDEsXHJcbiAgICBteXNlbGYgOiAxLFxyXG4gICAgbXlzdGVyeSA6IDEsXHJcbiAgICBteXRoIDogMSxcclxuICAgIG5ha2VkIDogMSxcclxuICAgIG5hbWUgOiAxLFxyXG4gICAgbmFycmF0aXZlIDogMSxcclxuICAgIG5hcnJvdyA6IDEsXHJcbiAgICBuYXRpb24gOiAxLFxyXG4gICAgbmF0aW9uYWwgOiAxLFxyXG4gICAgbmF0aXZlIDogMSxcclxuICAgIG5hdHVyYWwgOiAxLFxyXG4gICAgbmF0dXJhbGx5IDogMSxcclxuICAgIG5hdHVyZSA6IDEsXHJcbiAgICBuZWFyIDogMSxcclxuICAgIG5lYXJieSA6IDEsXHJcbiAgICBuZWFybHkgOiAxLFxyXG4gICAgbmVjZXNzYXJpbHkgOiAxLFxyXG4gICAgbmVjZXNzYXJ5IDogMSxcclxuICAgIG5lY2sgOiAxLFxyXG4gICAgbmVlZCA6IDEsXHJcbiAgICBuZWdhdGl2ZSA6IDEsXHJcbiAgICBuZWdvdGlhdGUgOiAxLFxyXG4gICAgbmVnb3RpYXRpb24gOiAxLFxyXG4gICAgbmVpZ2hib3IgOiAxLFxyXG4gICAgbmVpZ2hib3Job29kIDogMSxcclxuICAgIG5laXRoZXIgOiAxLFxyXG4gICAgbmVydmUgOiAxLFxyXG4gICAgbmVydm91cyA6IDEsXHJcbiAgICBuZXQgOiAxLFxyXG4gICAgbmV0d29yayA6IDEsXHJcbiAgICBuZXZlciA6IDEsXHJcbiAgICBuZXZlcnRoZWxlc3MgOiAxLFxyXG4gICAgbmV3IDogMSxcclxuICAgIG5ld2x5IDogMSxcclxuICAgIG5ld3MgOiAxLFxyXG4gICAgbmV3c3BhcGVyIDogMSxcclxuICAgIG5leHQgOiAxLFxyXG4gICAgbmljZSA6IDEsXHJcbiAgICBuaWdodCA6IDEsXHJcbiAgICBuaW5lIDogMSxcclxuICAgIG5vIDogMSxcclxuICAgIG5vYm9keSA6IDEsXHJcbiAgICBub2QgOiAxLFxyXG4gICAgbm9pc2UgOiAxLFxyXG4gICAgbm9taW5hdGlvbiA6IDEsXHJcbiAgICBub25lIDogMSxcclxuICAgIG5vbmV0aGVsZXNzIDogMSxcclxuICAgIG5vciA6IDEsXHJcbiAgICBub3JtYWwgOiAxLFxyXG4gICAgbm9ybWFsbHkgOiAxLFxyXG4gICAgbm9ydGggOiAxLFxyXG4gICAgbm9ydGhlcm4gOiAxLFxyXG4gICAgbm9zZSA6IDEsXHJcbiAgICBub3QgOiAxLFxyXG4gICAgbm90ZSA6IDEsXHJcbiAgICBub3RoaW5nIDogMSxcclxuICAgIG5vdGljZSA6IDEsXHJcbiAgICBub3Rpb24gOiAxLFxyXG4gICAgbm92ZWwgOiAxLFxyXG4gICAgbm93IDogMSxcclxuICAgIG5vd2hlcmUgOiAxLFxyXG4gICAgXCJuJ3RcIiA6IDEsXHJcbiAgICBudWNsZWFyIDogMSxcclxuICAgIG51bWJlciA6IDEsXHJcbiAgICBudW1lcm91cyA6IDEsXHJcbiAgICBudXJzZSA6IDEsXHJcbiAgICBudXQgOiAxLFxyXG4gICAgb2JqZWN0IDogMSxcclxuICAgIG9iamVjdGl2ZSA6IDEsXHJcbiAgICBvYmxpZ2F0aW9uIDogMSxcclxuICAgIG9ic2VydmF0aW9uIDogMSxcclxuICAgIG9ic2VydmUgOiAxLFxyXG4gICAgb2JzZXJ2ZXIgOiAxLFxyXG4gICAgb2J0YWluIDogMSxcclxuICAgIG9idmlvdXMgOiAxLFxyXG4gICAgb2J2aW91c2x5IDogMSxcclxuICAgIG9jY2FzaW9uIDogMSxcclxuICAgIG9jY2FzaW9uYWxseSA6IDEsXHJcbiAgICBvY2N1cGF0aW9uIDogMSxcclxuICAgIG9jY3VweSA6IDEsXHJcbiAgICBvY2N1ciA6IDEsXHJcbiAgICBvY2VhbiA6IDEsXHJcbiAgICBvZGQgOiAxLFxyXG4gICAgb2RkcyA6IDEsXHJcbiAgICBvZiA6IDEsXHJcbiAgICBvZmYgOiAxLFxyXG4gICAgb2ZmZW5zZSA6IDEsXHJcbiAgICBvZmZlbnNpdmUgOiAxLFxyXG4gICAgb2ZmZXIgOiAxLFxyXG4gICAgb2ZmaWNlIDogMSxcclxuICAgIG9mZmljZXIgOiAxLFxyXG4gICAgb2ZmaWNpYWwgOiAxLFxyXG4gICAgb2Z0ZW4gOiAxLFxyXG4gICAgb2ggOiAxLFxyXG4gICAgb2lsIDogMSxcclxuICAgIG9rIDogMSxcclxuICAgIG9rYXkgOiAxLFxyXG4gICAgb2xkIDogMSxcclxuICAgIE9seW1waWMgOiAxLFxyXG4gICAgb24gOiAxLFxyXG4gICAgb25jZSA6IDEsXHJcbiAgICBvbmUgOiAxLFxyXG4gICAgb25nb2luZyA6IDEsXHJcbiAgICBvbmlvbiA6IDEsXHJcbiAgICBvbmxpbmUgOiAxLFxyXG4gICAgb25seSA6IDEsXHJcbiAgICBvbnRvIDogMSxcclxuICAgIG9wZW4gOiAxLFxyXG4gICAgb3BlbmluZyA6IDEsXHJcbiAgICBvcGVyYXRlIDogMSxcclxuICAgIG9wZXJhdGluZyA6IDEsXHJcbiAgICBvcGVyYXRpb24gOiAxLFxyXG4gICAgb3BlcmF0b3IgOiAxLFxyXG4gICAgb3BpbmlvbiA6IDEsXHJcbiAgICBvcHBvbmVudCA6IDEsXHJcbiAgICBvcHBvcnR1bml0eSA6IDEsXHJcbiAgICBvcHBvc2UgOiAxLFxyXG4gICAgb3Bwb3NpdGUgOiAxLFxyXG4gICAgb3Bwb3NpdGlvbiA6IDEsXHJcbiAgICBvcHRpb24gOiAxLFxyXG4gICAgb3IgOiAxLFxyXG4gICAgb3JhbmdlIDogMSxcclxuICAgIG9yZGVyIDogMSxcclxuICAgIG9yZGluYXJ5IDogMSxcclxuICAgIG9yZ2FuaWMgOiAxLFxyXG4gICAgb3JnYW5pemF0aW9uIDogMSxcclxuICAgIG9yZ2FuaXplIDogMSxcclxuICAgIG9yaWVudGF0aW9uIDogMSxcclxuICAgIG9yaWdpbiA6IDEsXHJcbiAgICBvcmlnaW5hbCA6IDEsXHJcbiAgICBvcmlnaW5hbGx5IDogMSxcclxuICAgIG90aGVyIDogMSxcclxuICAgIG90aGVycyA6IDEsXHJcbiAgICBvdGhlcndpc2UgOiAxLFxyXG4gICAgb3VnaHQgOiAxLFxyXG4gICAgb3VyIDogMSxcclxuICAgIG91cnNlbHZlcyA6IDEsXHJcbiAgICBvdXQgOiAxLFxyXG4gICAgb3V0Y29tZSA6IDEsXHJcbiAgICBvdXRzaWRlIDogMSxcclxuICAgIG92ZW4gOiAxLFxyXG4gICAgb3ZlciA6IDEsXHJcbiAgICBvdmVyYWxsIDogMSxcclxuICAgIG92ZXJjb21lIDogMSxcclxuICAgIG92ZXJsb29rIDogMSxcclxuICAgIG93ZSA6IDEsXHJcbiAgICBvd24gOiAxLFxyXG4gICAgb3duZXIgOiAxLFxyXG4gICAgcGFjZSA6IDEsXHJcbiAgICBwYWNrIDogMSxcclxuICAgIHBhY2thZ2UgOiAxLFxyXG4gICAgcGFnZSA6IDEsXHJcbiAgICBwYWluIDogMSxcclxuICAgIHBhaW5mdWwgOiAxLFxyXG4gICAgcGFpbnQgOiAxLFxyXG4gICAgcGFpbnRlciA6IDEsXHJcbiAgICBwYWludGluZyA6IDEsXHJcbiAgICBwYWlyIDogMSxcclxuICAgIHBhbGUgOiAxLFxyXG4gICAgUGFsZXN0aW5pYW4gOiAxLFxyXG4gICAgcGFsbSA6IDEsXHJcbiAgICBwYW4gOiAxLFxyXG4gICAgcGFuZWwgOiAxLFxyXG4gICAgcGFudCA6IDEsXHJcbiAgICBwYXBlciA6IDEsXHJcbiAgICBwYXJlbnQgOiAxLFxyXG4gICAgcGFyayA6IDEsXHJcbiAgICBwYXJraW5nIDogMSxcclxuICAgIHBhcnQgOiAxLFxyXG4gICAgcGFydGljaXBhbnQgOiAxLFxyXG4gICAgcGFydGljaXBhdGUgOiAxLFxyXG4gICAgcGFydGljaXBhdGlvbiA6IDEsXHJcbiAgICBwYXJ0aWN1bGFyIDogMSxcclxuICAgIHBhcnRpY3VsYXJseSA6IDEsXHJcbiAgICBwYXJ0bHkgOiAxLFxyXG4gICAgcGFydG5lciA6IDEsXHJcbiAgICBwYXJ0bmVyc2hpcCA6IDEsXHJcbiAgICBwYXJ0eSA6IDEsXHJcbiAgICBwYXNzIDogMSxcclxuICAgIHBhc3NhZ2UgOiAxLFxyXG4gICAgcGFzc2VuZ2VyIDogMSxcclxuICAgIHBhc3Npb24gOiAxLFxyXG4gICAgcGFzdCA6IDEsXHJcbiAgICBwYXRjaCA6IDEsXHJcbiAgICBwYXRoIDogMSxcclxuICAgIHBhdGllbnQgOiAxLFxyXG4gICAgcGF0dGVybiA6IDEsXHJcbiAgICBwYXVzZSA6IDEsXHJcbiAgICBwYXkgOiAxLFxyXG4gICAgcGF5bWVudCA6IDEsXHJcbiAgICBQQyA6IDEsXHJcbiAgICBwZWFjZSA6IDEsXHJcbiAgICBwZWFrIDogMSxcclxuICAgIHBlZXIgOiAxLFxyXG4gICAgcGVuYWx0eSA6IDEsXHJcbiAgICBwZW9wbGUgOiAxLFxyXG4gICAgcGVwcGVyIDogMSxcclxuICAgIHBlciA6IDEsXHJcbiAgICBwZXJjZWl2ZSA6IDEsXHJcbiAgICBwZXJjZW50YWdlIDogMSxcclxuICAgIHBlcmNlcHRpb24gOiAxLFxyXG4gICAgcGVyZmVjdCA6IDEsXHJcbiAgICBwZXJmZWN0bHkgOiAxLFxyXG4gICAgcGVyZm9ybSA6IDEsXHJcbiAgICBwZXJmb3JtYW5jZSA6IDEsXHJcbiAgICBwZXJoYXBzIDogMSxcclxuICAgIHBlcmlvZCA6IDEsXHJcbiAgICBwZXJtYW5lbnQgOiAxLFxyXG4gICAgcGVybWlzc2lvbiA6IDEsXHJcbiAgICBwZXJtaXQgOiAxLFxyXG4gICAgcGVyc29uIDogMSxcclxuICAgIHBlcnNvbmFsIDogMSxcclxuICAgIHBlcnNvbmFsaXR5IDogMSxcclxuICAgIHBlcnNvbmFsbHkgOiAxLFxyXG4gICAgcGVyc29ubmVsIDogMSxcclxuICAgIHBlcnNwZWN0aXZlIDogMSxcclxuICAgIHBlcnN1YWRlIDogMSxcclxuICAgIHBldCA6IDEsXHJcbiAgICBwaGFzZSA6IDEsXHJcbiAgICBwaGVub21lbm9uIDogMSxcclxuICAgIHBoaWxvc29waHkgOiAxLFxyXG4gICAgcGhvbmUgOiAxLFxyXG4gICAgcGhvdG8gOiAxLFxyXG4gICAgcGhvdG9ncmFwaCA6IDEsXHJcbiAgICBwaG90b2dyYXBoZXIgOiAxLFxyXG4gICAgcGhyYXNlIDogMSxcclxuICAgIHBoeXNpY2FsIDogMSxcclxuICAgIHBoeXNpY2FsbHkgOiAxLFxyXG4gICAgcGh5c2ljaWFuIDogMSxcclxuICAgIHBpYW5vIDogMSxcclxuICAgIHBpY2sgOiAxLFxyXG4gICAgcGljdHVyZSA6IDEsXHJcbiAgICBwaWUgOiAxLFxyXG4gICAgcGllY2UgOiAxLFxyXG4gICAgcGlsZSA6IDEsXHJcbiAgICBwaWxvdCA6IDEsXHJcbiAgICBwaW5lIDogMSxcclxuICAgIHBpbmsgOiAxLFxyXG4gICAgcGlwZSA6IDEsXHJcbiAgICBwaXRjaCA6IDEsXHJcbiAgICBwbGFjZSA6IDEsXHJcbiAgICBwbGFuIDogMSxcclxuICAgIHBsYW5lIDogMSxcclxuICAgIHBsYW5ldCA6IDEsXHJcbiAgICBwbGFubmluZyA6IDEsXHJcbiAgICBwbGFudCA6IDEsXHJcbiAgICBwbGFzdGljIDogMSxcclxuICAgIHBsYXRlIDogMSxcclxuICAgIHBsYXRmb3JtIDogMSxcclxuICAgIHBsYXkgOiAxLFxyXG4gICAgcGxheWVyIDogMSxcclxuICAgIHBsZWFzZSA6IDEsXHJcbiAgICBwbGVhc3VyZSA6IDEsXHJcbiAgICBwbGVudHkgOiAxLFxyXG4gICAgcGxvdCA6IDEsXHJcbiAgICBwbHVzIDogMSxcclxuICAgIFBNIDogMSxcclxuICAgIHBvY2tldCA6IDEsXHJcbiAgICBwb2VtIDogMSxcclxuICAgIHBvZXQgOiAxLFxyXG4gICAgcG9ldHJ5IDogMSxcclxuICAgIHBvaW50IDogMSxcclxuICAgIHBvbGUgOiAxLFxyXG4gICAgcG9saWNlIDogMSxcclxuICAgIHBvbGljeSA6IDEsXHJcbiAgICBwb2xpdGljYWwgOiAxLFxyXG4gICAgcG9saXRpY2FsbHkgOiAxLFxyXG4gICAgcG9saXRpY2lhbiA6IDEsXHJcbiAgICBwb2xpdGljcyA6IDEsXHJcbiAgICBwb2xsIDogMSxcclxuICAgIHBvbGx1dGlvbiA6IDEsXHJcbiAgICBwb29sIDogMSxcclxuICAgIHBvb3IgOiAxLFxyXG4gICAgcG9wIDogMSxcclxuICAgIHBvcHVsYXIgOiAxLFxyXG4gICAgcG9wdWxhdGlvbiA6IDEsXHJcbiAgICBwb3JjaCA6IDEsXHJcbiAgICBwb3J0IDogMSxcclxuICAgIHBvcnRpb24gOiAxLFxyXG4gICAgcG9ydHJhaXQgOiAxLFxyXG4gICAgcG9ydHJheSA6IDEsXHJcbiAgICBwb3NlIDogMSxcclxuICAgIHBvc2l0aW9uIDogMSxcclxuICAgIHBvc2l0aXZlIDogMSxcclxuICAgIHBvc3Nlc3MgOiAxLFxyXG4gICAgcG9zc2liaWxpdHkgOiAxLFxyXG4gICAgcG9zc2libGUgOiAxLFxyXG4gICAgcG9zc2libHkgOiAxLFxyXG4gICAgcG9zdCA6IDEsXHJcbiAgICBwb3QgOiAxLFxyXG4gICAgcG90YXRvIDogMSxcclxuICAgIHBvdGVudGlhbCA6IDEsXHJcbiAgICBwb3RlbnRpYWxseSA6IDEsXHJcbiAgICBwb3VuZCA6IDEsXHJcbiAgICBwb3VyIDogMSxcclxuICAgIHBvdmVydHkgOiAxLFxyXG4gICAgcG93ZGVyIDogMSxcclxuICAgIHBvd2VyIDogMSxcclxuICAgIHBvd2VyZnVsIDogMSxcclxuICAgIHByYWN0aWNhbCA6IDEsXHJcbiAgICBwcmFjdGljZSA6IDEsXHJcbiAgICBwcmF5IDogMSxcclxuICAgIHByYXllciA6IDEsXHJcbiAgICBwcmVjaXNlbHkgOiAxLFxyXG4gICAgcHJlZGljdCA6IDEsXHJcbiAgICBwcmVmZXIgOiAxLFxyXG4gICAgcHJlZmVyZW5jZSA6IDEsXHJcbiAgICBwcmVnbmFuY3kgOiAxLFxyXG4gICAgcHJlZ25hbnQgOiAxLFxyXG4gICAgcHJlcGFyYXRpb24gOiAxLFxyXG4gICAgcHJlcGFyZSA6IDEsXHJcbiAgICBwcmVzY3JpcHRpb24gOiAxLFxyXG4gICAgcHJlc2VuY2UgOiAxLFxyXG4gICAgcHJlc2VudCA6IDEsXHJcbiAgICBwcmVzZW50YXRpb24gOiAxLFxyXG4gICAgcHJlc2VydmUgOiAxLFxyXG4gICAgcHJlc2lkZW50IDogMSxcclxuICAgIHByZXNpZGVudGlhbCA6IDEsXHJcbiAgICBwcmVzcyA6IDEsXHJcbiAgICBwcmVzc3VyZSA6IDEsXHJcbiAgICBwcmV0ZW5kIDogMSxcclxuICAgIHByZXR0eSA6IDEsXHJcbiAgICBwcmV2ZW50IDogMSxcclxuICAgIHByZXZpb3VzIDogMSxcclxuICAgIHByZXZpb3VzbHkgOiAxLFxyXG4gICAgcHJpY2UgOiAxLFxyXG4gICAgcHJpZGUgOiAxLFxyXG4gICAgcHJpZXN0IDogMSxcclxuICAgIHByaW1hcmlseSA6IDEsXHJcbiAgICBwcmltYXJ5IDogMSxcclxuICAgIHByaW1lIDogMSxcclxuICAgIHByaW5jaXBhbCA6IDEsXHJcbiAgICBwcmluY2lwbGUgOiAxLFxyXG4gICAgcHJpbnQgOiAxLFxyXG4gICAgcHJpb3IgOiAxLFxyXG4gICAgcHJpb3JpdHkgOiAxLFxyXG4gICAgcHJpc29uIDogMSxcclxuICAgIHByaXNvbmVyIDogMSxcclxuICAgIHByaXZhY3kgOiAxLFxyXG4gICAgcHJpdmF0ZSA6IDEsXHJcbiAgICBwcm9iYWJseSA6IDEsXHJcbiAgICBwcm9ibGVtIDogMSxcclxuICAgIHByb2NlZHVyZSA6IDEsXHJcbiAgICBwcm9jZWVkIDogMSxcclxuICAgIHByb2Nlc3MgOiAxLFxyXG4gICAgcHJvZHVjZSA6IDEsXHJcbiAgICBwcm9kdWNlciA6IDEsXHJcbiAgICBwcm9kdWN0IDogMSxcclxuICAgIHByb2R1Y3Rpb24gOiAxLFxyXG4gICAgcHJvZmVzc2lvbiA6IDEsXHJcbiAgICBwcm9mZXNzaW9uYWwgOiAxLFxyXG4gICAgcHJvZmVzc29yIDogMSxcclxuICAgIHByb2ZpbGUgOiAxLFxyXG4gICAgcHJvZml0IDogMSxcclxuICAgIHByb2dyYW0gOiAxLFxyXG4gICAgcHJvZ3Jlc3MgOiAxLFxyXG4gICAgcHJvamVjdCA6IDEsXHJcbiAgICBwcm9taW5lbnQgOiAxLFxyXG4gICAgcHJvbWlzZSA6IDEsXHJcbiAgICBwcm9tb3RlIDogMSxcclxuICAgIHByb21wdCA6IDEsXHJcbiAgICBwcm9vZiA6IDEsXHJcbiAgICBwcm9wZXIgOiAxLFxyXG4gICAgcHJvcGVybHkgOiAxLFxyXG4gICAgcHJvcGVydHkgOiAxLFxyXG4gICAgcHJvcG9ydGlvbiA6IDEsXHJcbiAgICBwcm9wb3NhbCA6IDEsXHJcbiAgICBwcm9wb3NlIDogMSxcclxuICAgIHByb3Bvc2VkIDogMSxcclxuICAgIHByb3NlY3V0b3IgOiAxLFxyXG4gICAgcHJvc3BlY3QgOiAxLFxyXG4gICAgcHJvdGVjdCA6IDEsXHJcbiAgICBwcm90ZWN0aW9uIDogMSxcclxuICAgIHByb3RlaW4gOiAxLFxyXG4gICAgcHJvdGVzdCA6IDEsXHJcbiAgICBwcm91ZCA6IDEsXHJcbiAgICBwcm92ZSA6IDEsXHJcbiAgICBwcm92aWRlIDogMSxcclxuICAgIHByb3ZpZGVyIDogMSxcclxuICAgIHByb3ZpbmNlIDogMSxcclxuICAgIHByb3Zpc2lvbiA6IDEsXHJcbiAgICBwc3ljaG9sb2dpY2FsIDogMSxcclxuICAgIHBzeWNob2xvZ2lzdCA6IDEsXHJcbiAgICBwc3ljaG9sb2d5IDogMSxcclxuICAgIHB1YmxpYyA6IDEsXHJcbiAgICBwdWJsaWNhdGlvbiA6IDEsXHJcbiAgICBwdWJsaWNseSA6IDEsXHJcbiAgICBwdWJsaXNoIDogMSxcclxuICAgIHB1Ymxpc2hlciA6IDEsXHJcbiAgICBwdWxsIDogMSxcclxuICAgIHB1bmlzaG1lbnQgOiAxLFxyXG4gICAgcHVyY2hhc2UgOiAxLFxyXG4gICAgcHVyZSA6IDEsXHJcbiAgICBwdXJwb3NlIDogMSxcclxuICAgIHB1cnN1ZSA6IDEsXHJcbiAgICBwdXNoIDogMSxcclxuICAgIHB1dCA6IDEsXHJcbiAgICBxdWFsaWZ5IDogMSxcclxuICAgIHF1YWxpdHkgOiAxLFxyXG4gICAgcXVhcnRlciA6IDEsXHJcbiAgICBxdWFydGVyYmFjayA6IDEsXHJcbiAgICBxdWVzdGlvbiA6IDEsXHJcbiAgICBxdWljayA6IDEsXHJcbiAgICBxdWlja2x5IDogMSxcclxuICAgIHF1aWV0IDogMSxcclxuICAgIHF1aWV0bHkgOiAxLFxyXG4gICAgcXVpdCA6IDEsXHJcbiAgICBxdWl0ZSA6IDEsXHJcbiAgICBxdW90ZSA6IDEsXHJcbiAgICByYWNlIDogMSxcclxuICAgIHJhY2lhbCA6IDEsXHJcbiAgICByYWRpY2FsIDogMSxcclxuICAgIHJhZGlvIDogMSxcclxuICAgIHJhaWwgOiAxLFxyXG4gICAgcmFpbiA6IDEsXHJcbiAgICByYWlzZSA6IDEsXHJcbiAgICByYW5nZSA6IDEsXHJcbiAgICByYW5rIDogMSxcclxuICAgIHJhcGlkIDogMSxcclxuICAgIHJhcGlkbHkgOiAxLFxyXG4gICAgcmFyZSA6IDEsXHJcbiAgICByYXJlbHkgOiAxLFxyXG4gICAgcmF0ZSA6IDEsXHJcbiAgICByYXRoZXIgOiAxLFxyXG4gICAgcmF0aW5nIDogMSxcclxuICAgIHJhdGlvIDogMSxcclxuICAgIHJhdyA6IDEsXHJcbiAgICByZWFjaCA6IDEsXHJcbiAgICByZWFjdCA6IDEsXHJcbiAgICByZWFjdGlvbiA6IDEsXHJcbiAgICByZWFkIDogMSxcclxuICAgIHJlYWRlciA6IDEsXHJcbiAgICByZWFkaW5nIDogMSxcclxuICAgIHJlYWR5IDogMSxcclxuICAgIHJlYWwgOiAxLFxyXG4gICAgcmVhbGl0eSA6IDEsXHJcbiAgICByZWFsaXplIDogMSxcclxuICAgIHJlYWxseSA6IDEsXHJcbiAgICByZWFzb24gOiAxLFxyXG4gICAgcmVhc29uYWJsZSA6IDEsXHJcbiAgICByZWNhbGwgOiAxLFxyXG4gICAgcmVjZWl2ZSA6IDEsXHJcbiAgICByZWNlbnQgOiAxLFxyXG4gICAgcmVjZW50bHkgOiAxLFxyXG4gICAgcmVjaXBlIDogMSxcclxuICAgIHJlY29nbml0aW9uIDogMSxcclxuICAgIHJlY29nbml6ZSA6IDEsXHJcbiAgICByZWNvbW1lbmQgOiAxLFxyXG4gICAgcmVjb21tZW5kYXRpb24gOiAxLFxyXG4gICAgcmVjb3JkIDogMSxcclxuICAgIHJlY29yZGluZyA6IDEsXHJcbiAgICByZWNvdmVyIDogMSxcclxuICAgIHJlY292ZXJ5IDogMSxcclxuICAgIHJlY3J1aXQgOiAxLFxyXG4gICAgcmVkIDogMSxcclxuICAgIHJlZHVjZSA6IDEsXHJcbiAgICByZWR1Y3Rpb24gOiAxLFxyXG4gICAgcmVmZXIgOiAxLFxyXG4gICAgcmVmZXJlbmNlIDogMSxcclxuICAgIHJlZmxlY3QgOiAxLFxyXG4gICAgcmVmbGVjdGlvbiA6IDEsXHJcbiAgICByZWZvcm0gOiAxLFxyXG4gICAgcmVmdWdlZSA6IDEsXHJcbiAgICByZWZ1c2UgOiAxLFxyXG4gICAgcmVnYXJkIDogMSxcclxuICAgIHJlZ2FyZGluZyA6IDEsXHJcbiAgICByZWdhcmRsZXNzIDogMSxcclxuICAgIHJlZ2ltZSA6IDEsXHJcbiAgICByZWdpb24gOiAxLFxyXG4gICAgcmVnaW9uYWwgOiAxLFxyXG4gICAgcmVnaXN0ZXIgOiAxLFxyXG4gICAgcmVndWxhciA6IDEsXHJcbiAgICByZWd1bGFybHkgOiAxLFxyXG4gICAgcmVndWxhdGUgOiAxLFxyXG4gICAgcmVndWxhdGlvbiA6IDEsXHJcbiAgICByZWluZm9yY2UgOiAxLFxyXG4gICAgcmVqZWN0IDogMSxcclxuICAgIHJlbGF0ZSA6IDEsXHJcbiAgICByZWxhdGlvbiA6IDEsXHJcbiAgICByZWxhdGlvbnNoaXAgOiAxLFxyXG4gICAgcmVsYXRpdmUgOiAxLFxyXG4gICAgcmVsYXRpdmVseSA6IDEsXHJcbiAgICByZWxheCA6IDEsXHJcbiAgICByZWxlYXNlIDogMSxcclxuICAgIHJlbGV2YW50IDogMSxcclxuICAgIHJlbGllZiA6IDEsXHJcbiAgICByZWxpZ2lvbiA6IDEsXHJcbiAgICByZWxpZ2lvdXMgOiAxLFxyXG4gICAgcmVseSA6IDEsXHJcbiAgICByZW1haW4gOiAxLFxyXG4gICAgcmVtYWluaW5nIDogMSxcclxuICAgIHJlbWFya2FibGUgOiAxLFxyXG4gICAgcmVtZW1iZXIgOiAxLFxyXG4gICAgcmVtaW5kIDogMSxcclxuICAgIHJlbW90ZSA6IDEsXHJcbiAgICByZW1vdmUgOiAxLFxyXG4gICAgcmVwZWF0IDogMSxcclxuICAgIHJlcGVhdGVkbHkgOiAxLFxyXG4gICAgcmVwbGFjZSA6IDEsXHJcbiAgICByZXBseSA6IDEsXHJcbiAgICByZXBvcnQgOiAxLFxyXG4gICAgcmVwb3J0ZXIgOiAxLFxyXG4gICAgcmVwcmVzZW50IDogMSxcclxuICAgIHJlcHJlc2VudGF0aW9uIDogMSxcclxuICAgIHJlcHJlc2VudGF0aXZlIDogMSxcclxuICAgIFJlcHVibGljYW4gOiAxLFxyXG4gICAgcmVwdXRhdGlvbiA6IDEsXHJcbiAgICByZXF1ZXN0IDogMSxcclxuICAgIHJlcXVpcmUgOiAxLFxyXG4gICAgcmVxdWlyZW1lbnQgOiAxLFxyXG4gICAgcmVzZWFyY2ggOiAxLFxyXG4gICAgcmVzZWFyY2hlciA6IDEsXHJcbiAgICByZXNlbWJsZSA6IDEsXHJcbiAgICByZXNlcnZhdGlvbiA6IDEsXHJcbiAgICByZXNpZGVudCA6IDEsXHJcbiAgICByZXNpc3QgOiAxLFxyXG4gICAgcmVzaXN0YW5jZSA6IDEsXHJcbiAgICByZXNvbHV0aW9uIDogMSxcclxuICAgIHJlc29sdmUgOiAxLFxyXG4gICAgcmVzb3J0IDogMSxcclxuICAgIHJlc291cmNlIDogMSxcclxuICAgIHJlc3BlY3QgOiAxLFxyXG4gICAgcmVzcG9uZCA6IDEsXHJcbiAgICByZXNwb25kZW50IDogMSxcclxuICAgIHJlc3BvbnNlIDogMSxcclxuICAgIHJlc3BvbnNpYmlsaXR5IDogMSxcclxuICAgIHJlc3BvbnNpYmxlIDogMSxcclxuICAgIHJlc3QgOiAxLFxyXG4gICAgcmVzdGF1cmFudCA6IDEsXHJcbiAgICByZXN0b3JlIDogMSxcclxuICAgIHJlc3RyaWN0aW9uIDogMSxcclxuICAgIHJlc3VsdCA6IDEsXHJcbiAgICByZXRhaW4gOiAxLFxyXG4gICAgcmV0aXJlIDogMSxcclxuICAgIHJldGlyZW1lbnQgOiAxLFxyXG4gICAgcmV0dXJuIDogMSxcclxuICAgIHJldmVhbCA6IDEsXHJcbiAgICByZXZlbnVlIDogMSxcclxuICAgIHJldmlldyA6IDEsXHJcbiAgICByZXZvbHV0aW9uIDogMSxcclxuICAgIHJoeXRobSA6IDEsXHJcbiAgICByaWNlIDogMSxcclxuICAgIHJpY2ggOiAxLFxyXG4gICAgcmlkIDogMSxcclxuICAgIHJpZGUgOiAxLFxyXG4gICAgcmlmbGUgOiAxLFxyXG4gICAgcmlnaHQgOiAxLFxyXG4gICAgcmluZyA6IDEsXHJcbiAgICByaXNlIDogMSxcclxuICAgIHJpc2sgOiAxLFxyXG4gICAgcml2ZXIgOiAxLFxyXG4gICAgcm9hZCA6IDEsXHJcbiAgICByb2NrIDogMSxcclxuICAgIHJvbGUgOiAxLFxyXG4gICAgcm9sbCA6IDEsXHJcbiAgICByb21hbnRpYyA6IDEsXHJcbiAgICByb29mIDogMSxcclxuICAgIHJvb20gOiAxLFxyXG4gICAgcm9vdCA6IDEsXHJcbiAgICByb3BlIDogMSxcclxuICAgIHJvc2UgOiAxLFxyXG4gICAgcm91Z2ggOiAxLFxyXG4gICAgcm91Z2hseSA6IDEsXHJcbiAgICByb3VuZCA6IDEsXHJcbiAgICByb3V0ZSA6IDEsXHJcbiAgICByb3V0aW5lIDogMSxcclxuICAgIHJvdyA6IDEsXHJcbiAgICBydWIgOiAxLFxyXG4gICAgcnVsZSA6IDEsXHJcbiAgICBydW4gOiAxLFxyXG4gICAgcnVubmluZyA6IDEsXHJcbiAgICBydXJhbCA6IDEsXHJcbiAgICBydXNoIDogMSxcclxuICAgIFJ1c3NpYW4gOiAxLFxyXG4gICAgc2FjcmVkIDogMSxcclxuICAgIHNhZCA6IDEsXHJcbiAgICBzYWZlIDogMSxcclxuICAgIHNhZmV0eSA6IDEsXHJcbiAgICBzYWtlIDogMSxcclxuICAgIHNhbGFkIDogMSxcclxuICAgIHNhbGFyeSA6IDEsXHJcbiAgICBzYWxlIDogMSxcclxuICAgIHNhbGVzIDogMSxcclxuICAgIHNhbHQgOiAxLFxyXG4gICAgc2FtZSA6IDEsXHJcbiAgICBzYW1wbGUgOiAxLFxyXG4gICAgc2FuY3Rpb24gOiAxLFxyXG4gICAgc2FuZCA6IDEsXHJcbiAgICBzYXRlbGxpdGUgOiAxLFxyXG4gICAgc2F0aXNmYWN0aW9uIDogMSxcclxuICAgIHNhdGlzZnkgOiAxLFxyXG4gICAgc2F1Y2UgOiAxLFxyXG4gICAgc2F2ZSA6IDEsXHJcbiAgICBzYXZpbmcgOiAxLFxyXG4gICAgc2F5IDogMSxcclxuICAgIHNjYWxlIDogMSxcclxuICAgIHNjYW5kYWwgOiAxLFxyXG4gICAgc2NhcmVkIDogMSxcclxuICAgIHNjZW5hcmlvIDogMSxcclxuICAgIHNjZW5lIDogMSxcclxuICAgIHNjaGVkdWxlIDogMSxcclxuICAgIHNjaGVtZSA6IDEsXHJcbiAgICBzY2hvbGFyIDogMSxcclxuICAgIHNjaG9sYXJzaGlwIDogMSxcclxuICAgIHNjaG9vbCA6IDEsXHJcbiAgICBzY2llbmNlIDogMSxcclxuICAgIHNjaWVudGlmaWMgOiAxLFxyXG4gICAgc2NpZW50aXN0IDogMSxcclxuICAgIHNjb3BlIDogMSxcclxuICAgIHNjb3JlIDogMSxcclxuICAgIHNjcmVhbSA6IDEsXHJcbiAgICBzY3JlZW4gOiAxLFxyXG4gICAgc2NyaXB0IDogMSxcclxuICAgIHNlYSA6IDEsXHJcbiAgICBzZWFyY2ggOiAxLFxyXG4gICAgc2Vhc29uIDogMSxcclxuICAgIHNlYXQgOiAxLFxyXG4gICAgc2Vjb25kIDogMSxcclxuICAgIHNlY3JldCA6IDEsXHJcbiAgICBzZWNyZXRhcnkgOiAxLFxyXG4gICAgc2VjdGlvbiA6IDEsXHJcbiAgICBzZWN0b3IgOiAxLFxyXG4gICAgc2VjdXJlIDogMSxcclxuICAgIHNlY3VyaXR5IDogMSxcclxuICAgIHNlZSA6IDEsXHJcbiAgICBzZWVkIDogMSxcclxuICAgIHNlZWsgOiAxLFxyXG4gICAgc2VlbSA6IDEsXHJcbiAgICBzZWdtZW50IDogMSxcclxuICAgIHNlaXplIDogMSxcclxuICAgIHNlbGVjdCA6IDEsXHJcbiAgICBzZWxlY3Rpb24gOiAxLFxyXG4gICAgc2VsZiA6IDEsXHJcbiAgICBzZWxsIDogMSxcclxuICAgIFNlbmF0ZSA6IDEsXHJcbiAgICBzZW5hdG9yIDogMSxcclxuICAgIHNlbmQgOiAxLFxyXG4gICAgc2VuaW9yIDogMSxcclxuICAgIHNlbnNlIDogMSxcclxuICAgIHNlbnNpdGl2ZSA6IDEsXHJcbiAgICBzZW50ZW5jZSA6IDEsXHJcbiAgICBzZXBhcmF0ZSA6IDEsXHJcbiAgICBzZXF1ZW5jZSA6IDEsXHJcbiAgICBzZXJpZXMgOiAxLFxyXG4gICAgc2VyaW91cyA6IDEsXHJcbiAgICBzZXJpb3VzbHkgOiAxLFxyXG4gICAgc2VydmUgOiAxLFxyXG4gICAgc2VydmljZSA6IDEsXHJcbiAgICBzZXNzaW9uIDogMSxcclxuICAgIHNldCA6IDEsXHJcbiAgICBzZXR0aW5nIDogMSxcclxuICAgIHNldHRsZSA6IDEsXHJcbiAgICBzZXR0bGVtZW50IDogMSxcclxuICAgIHNldmVuIDogMSxcclxuICAgIHNldmVyYWwgOiAxLFxyXG4gICAgc2V2ZXJlIDogMSxcclxuICAgIHNleCA6IDEsXHJcbiAgICBzZXh1YWwgOiAxLFxyXG4gICAgc2hhZGUgOiAxLFxyXG4gICAgc2hhZG93IDogMSxcclxuICAgIHNoYWtlIDogMSxcclxuICAgIHNoYWxsIDogMSxcclxuICAgIHNoYXBlIDogMSxcclxuICAgIHNoYXJlIDogMSxcclxuICAgIHNoYXJwIDogMSxcclxuICAgIHNoZSA6IDEsXHJcbiAgICBzaGVldCA6IDEsXHJcbiAgICBzaGVsZiA6IDEsXHJcbiAgICBzaGVsbCA6IDEsXHJcbiAgICBzaGVsdGVyIDogMSxcclxuICAgIHNoaWZ0IDogMSxcclxuICAgIHNoaW5lIDogMSxcclxuICAgIHNoaXAgOiAxLFxyXG4gICAgc2hpcnQgOiAxLFxyXG4gICAgc2hpdCA6IDEsXHJcbiAgICBzaG9jayA6IDEsXHJcbiAgICBzaG9lIDogMSxcclxuICAgIHNob290IDogMSxcclxuICAgIHNob290aW5nIDogMSxcclxuICAgIHNob3AgOiAxLFxyXG4gICAgc2hvcHBpbmcgOiAxLFxyXG4gICAgc2hvcmUgOiAxLFxyXG4gICAgc2hvcnQgOiAxLFxyXG4gICAgc2hvcnRseSA6IDEsXHJcbiAgICBzaG90IDogMSxcclxuICAgIHNob3VsZCA6IDEsXHJcbiAgICBzaG91bGRlciA6IDEsXHJcbiAgICBzaG91dCA6IDEsXHJcbiAgICBzaG93IDogMSxcclxuICAgIHNob3dlciA6IDEsXHJcbiAgICBzaHJ1ZyA6IDEsXHJcbiAgICBzaHV0IDogMSxcclxuICAgIHNpY2sgOiAxLFxyXG4gICAgc2lkZSA6IDEsXHJcbiAgICBzaWdoIDogMSxcclxuICAgIHNpZ2h0IDogMSxcclxuICAgIHNpZ24gOiAxLFxyXG4gICAgc2lnbmFsIDogMSxcclxuICAgIHNpZ25pZmljYW5jZSA6IDEsXHJcbiAgICBzaWduaWZpY2FudCA6IDEsXHJcbiAgICBzaWduaWZpY2FudGx5IDogMSxcclxuICAgIHNpbGVuY2UgOiAxLFxyXG4gICAgc2lsZW50IDogMSxcclxuICAgIHNpbHZlciA6IDEsXHJcbiAgICBzaW1pbGFyIDogMSxcclxuICAgIHNpbWlsYXJseSA6IDEsXHJcbiAgICBzaW1wbGUgOiAxLFxyXG4gICAgc2ltcGx5IDogMSxcclxuICAgIHNpbiA6IDEsXHJcbiAgICBzaW5jZSA6IDEsXHJcbiAgICBzaW5nIDogMSxcclxuICAgIHNpbmdlciA6IDEsXHJcbiAgICBzaW5nbGUgOiAxLFxyXG4gICAgc2luayA6IDEsXHJcbiAgICBzaXIgOiAxLFxyXG4gICAgc2lzdGVyIDogMSxcclxuICAgIHNpdCA6IDEsXHJcbiAgICBzaXRlIDogMSxcclxuICAgIHNpdHVhdGlvbiA6IDEsXHJcbiAgICBzaXggOiAxLFxyXG4gICAgc2l6ZSA6IDEsXHJcbiAgICBza2kgOiAxLFxyXG4gICAgc2tpbGwgOiAxLFxyXG4gICAgc2tpbiA6IDEsXHJcbiAgICBza3kgOiAxLFxyXG4gICAgc2xhdmUgOiAxLFxyXG4gICAgc2xlZXAgOiAxLFxyXG4gICAgc2xpY2UgOiAxLFxyXG4gICAgc2xpZGUgOiAxLFxyXG4gICAgc2xpZ2h0IDogMSxcclxuICAgIHNsaWdodGx5IDogMSxcclxuICAgIHNsaXAgOiAxLFxyXG4gICAgc2xvdyA6IDEsXHJcbiAgICBzbG93bHkgOiAxLFxyXG4gICAgc21hbGwgOiAxLFxyXG4gICAgc21hcnQgOiAxLFxyXG4gICAgc21lbGwgOiAxLFxyXG4gICAgc21pbGUgOiAxLFxyXG4gICAgc21va2UgOiAxLFxyXG4gICAgc21vb3RoIDogMSxcclxuICAgIHNuYXAgOiAxLFxyXG4gICAgc25vdyA6IDEsXHJcbiAgICBzbyA6IDEsXHJcbiAgICBcInNvLWNhbGxlZFwiIDogMSxcclxuICAgIHNvY2NlciA6IDEsXHJcbiAgICBzb2NpYWwgOiAxLFxyXG4gICAgc29jaWV0eSA6IDEsXHJcbiAgICBzb2Z0IDogMSxcclxuICAgIHNvZnR3YXJlIDogMSxcclxuICAgIHNvaWwgOiAxLFxyXG4gICAgc29sYXIgOiAxLFxyXG4gICAgc29sZGllciA6IDEsXHJcbiAgICBzb2xpZCA6IDEsXHJcbiAgICBzb2x1dGlvbiA6IDEsXHJcbiAgICBzb2x2ZSA6IDEsXHJcbiAgICBzb21lIDogMSxcclxuICAgIHNvbWVib2R5IDogMSxcclxuICAgIHNvbWVob3cgOiAxLFxyXG4gICAgc29tZW9uZSA6IDEsXHJcbiAgICBzb21ldGhpbmcgOiAxLFxyXG4gICAgc29tZXRpbWVzIDogMSxcclxuICAgIHNvbWV3aGF0IDogMSxcclxuICAgIHNvbWV3aGVyZSA6IDEsXHJcbiAgICBzb24gOiAxLFxyXG4gICAgc29uZyA6IDEsXHJcbiAgICBzb29uIDogMSxcclxuICAgIHNvcGhpc3RpY2F0ZWQgOiAxLFxyXG4gICAgc29ycnkgOiAxLFxyXG4gICAgc29ydCA6IDEsXHJcbiAgICBzb3VsIDogMSxcclxuICAgIHNvdW5kIDogMSxcclxuICAgIHNvdXAgOiAxLFxyXG4gICAgc291cmNlIDogMSxcclxuICAgIHNvdXRoIDogMSxcclxuICAgIHNvdXRoZXJuIDogMSxcclxuICAgIFNvdmlldCA6IDEsXHJcbiAgICBzcGFjZSA6IDEsXHJcbiAgICBTcGFuaXNoIDogMSxcclxuICAgIHNwZWFrIDogMSxcclxuICAgIHNwZWFrZXIgOiAxLFxyXG4gICAgc3BlY2lhbCA6IDEsXHJcbiAgICBzcGVjaWFsaXN0IDogMSxcclxuICAgIHNwZWNpZXMgOiAxLFxyXG4gICAgc3BlY2lmaWMgOiAxLFxyXG4gICAgc3BlY2lmaWNhbGx5IDogMSxcclxuICAgIHNwZWVjaCA6IDEsXHJcbiAgICBzcGVlZCA6IDEsXHJcbiAgICBzcGVuZCA6IDEsXHJcbiAgICBzcGVuZGluZyA6IDEsXHJcbiAgICBzcGluIDogMSxcclxuICAgIHNwaXJpdCA6IDEsXHJcbiAgICBzcGlyaXR1YWwgOiAxLFxyXG4gICAgc3BsaXQgOiAxLFxyXG4gICAgc3Bva2VzbWFuIDogMSxcclxuICAgIHNwb3J0IDogMSxcclxuICAgIHNwb3QgOiAxLFxyXG4gICAgc3ByZWFkIDogMSxcclxuICAgIHNwcmluZyA6IDEsXHJcbiAgICBzcXVhcmUgOiAxLFxyXG4gICAgc3F1ZWV6ZSA6IDEsXHJcbiAgICBzdGFiaWxpdHkgOiAxLFxyXG4gICAgc3RhYmxlIDogMSxcclxuICAgIHN0YWZmIDogMSxcclxuICAgIHN0YWdlIDogMSxcclxuICAgIHN0YWlyIDogMSxcclxuICAgIHN0YWtlIDogMSxcclxuICAgIHN0YW5kIDogMSxcclxuICAgIHN0YW5kYXJkIDogMSxcclxuICAgIHN0YW5kaW5nIDogMSxcclxuICAgIHN0YXIgOiAxLFxyXG4gICAgc3RhcmUgOiAxLFxyXG4gICAgc3RhcnQgOiAxLFxyXG4gICAgc3RhdGUgOiAxLFxyXG4gICAgc3RhdGVtZW50IDogMSxcclxuICAgIHN0YXRpb24gOiAxLFxyXG4gICAgc3RhdGlzdGljcyA6IDEsXHJcbiAgICBzdGF0dXMgOiAxLFxyXG4gICAgc3RheSA6IDEsXHJcbiAgICBzdGVhZHkgOiAxLFxyXG4gICAgc3RlYWwgOiAxLFxyXG4gICAgc3RlZWwgOiAxLFxyXG4gICAgc3RlcCA6IDEsXHJcbiAgICBzdGljayA6IDEsXHJcbiAgICBzdGlsbCA6IDEsXHJcbiAgICBzdGlyIDogMSxcclxuICAgIHN0b2NrIDogMSxcclxuICAgIHN0b21hY2ggOiAxLFxyXG4gICAgc3RvbmUgOiAxLFxyXG4gICAgc3RvcCA6IDEsXHJcbiAgICBzdG9yYWdlIDogMSxcclxuICAgIHN0b3JlIDogMSxcclxuICAgIHN0b3JtIDogMSxcclxuICAgIHN0b3J5IDogMSxcclxuICAgIHN0cmFpZ2h0IDogMSxcclxuICAgIHN0cmFuZ2UgOiAxLFxyXG4gICAgc3RyYW5nZXIgOiAxLFxyXG4gICAgc3RyYXRlZ2ljIDogMSxcclxuICAgIHN0cmF0ZWd5IDogMSxcclxuICAgIHN0cmVhbSA6IDEsXHJcbiAgICBzdHJlZXQgOiAxLFxyXG4gICAgc3RyZW5ndGggOiAxLFxyXG4gICAgc3RyZW5ndGhlbiA6IDEsXHJcbiAgICBzdHJlc3MgOiAxLFxyXG4gICAgc3RyZXRjaCA6IDEsXHJcbiAgICBzdHJpa2UgOiAxLFxyXG4gICAgc3RyaW5nIDogMSxcclxuICAgIHN0cmlwIDogMSxcclxuICAgIHN0cm9rZSA6IDEsXHJcbiAgICBzdHJvbmcgOiAxLFxyXG4gICAgc3Ryb25nbHkgOiAxLFxyXG4gICAgc3RydWN0dXJlIDogMSxcclxuICAgIHN0cnVnZ2xlIDogMSxcclxuICAgIHN0dWRlbnQgOiAxLFxyXG4gICAgc3R1ZGlvIDogMSxcclxuICAgIHN0dWR5IDogMSxcclxuICAgIHN0dWZmIDogMSxcclxuICAgIHN0dXBpZCA6IDEsXHJcbiAgICBzdHlsZSA6IDEsXHJcbiAgICBzdWJqZWN0IDogMSxcclxuICAgIHN1Ym1pdCA6IDEsXHJcbiAgICBzdWJzZXF1ZW50IDogMSxcclxuICAgIHN1YnN0YW5jZSA6IDEsXHJcbiAgICBzdWJzdGFudGlhbCA6IDEsXHJcbiAgICBzdWNjZWVkIDogMSxcclxuICAgIHN1Y2Nlc3MgOiAxLFxyXG4gICAgc3VjY2Vzc2Z1bCA6IDEsXHJcbiAgICBzdWNjZXNzZnVsbHkgOiAxLFxyXG4gICAgc3VjaCA6IDEsXHJcbiAgICBzdWRkZW4gOiAxLFxyXG4gICAgc3VkZGVubHkgOiAxLFxyXG4gICAgc3VlIDogMSxcclxuICAgIHN1ZmZlciA6IDEsXHJcbiAgICBzdWZmaWNpZW50IDogMSxcclxuICAgIHN1Z2FyIDogMSxcclxuICAgIHN1Z2dlc3QgOiAxLFxyXG4gICAgc3VnZ2VzdGlvbiA6IDEsXHJcbiAgICBzdWljaWRlIDogMSxcclxuICAgIHN1aXQgOiAxLFxyXG4gICAgc3VtbWVyIDogMSxcclxuICAgIHN1bW1pdCA6IDEsXHJcbiAgICBzdW4gOiAxLFxyXG4gICAgc3VwZXIgOiAxLFxyXG4gICAgc3VwcGx5IDogMSxcclxuICAgIHN1cHBvcnQgOiAxLFxyXG4gICAgc3VwcG9ydGVyIDogMSxcclxuICAgIHN1cHBvc2UgOiAxLFxyXG4gICAgc3VwcG9zZWQgOiAxLFxyXG4gICAgU3VwcmVtZSA6IDEsXHJcbiAgICBzdXJlIDogMSxcclxuICAgIHN1cmVseSA6IDEsXHJcbiAgICBzdXJmYWNlIDogMSxcclxuICAgIHN1cmdlcnkgOiAxLFxyXG4gICAgc3VycHJpc2UgOiAxLFxyXG4gICAgc3VycHJpc2VkIDogMSxcclxuICAgIHN1cnByaXNpbmcgOiAxLFxyXG4gICAgc3VycHJpc2luZ2x5IDogMSxcclxuICAgIHN1cnJvdW5kIDogMSxcclxuICAgIHN1cnZleSA6IDEsXHJcbiAgICBzdXJ2aXZhbCA6IDEsXHJcbiAgICBzdXJ2aXZlIDogMSxcclxuICAgIHN1cnZpdm9yIDogMSxcclxuICAgIHN1c3BlY3QgOiAxLFxyXG4gICAgc3VzdGFpbiA6IDEsXHJcbiAgICBzd2VhciA6IDEsXHJcbiAgICBzd2VlcCA6IDEsXHJcbiAgICBzd2VldCA6IDEsXHJcbiAgICBzd2ltIDogMSxcclxuICAgIHN3aW5nIDogMSxcclxuICAgIHN3aXRjaCA6IDEsXHJcbiAgICBzeW1ib2wgOiAxLFxyXG4gICAgc3ltcHRvbSA6IDEsXHJcbiAgICBzeXN0ZW0gOiAxLFxyXG4gICAgdGFibGUgOiAxLFxyXG4gICAgdGFibGVzcG9vbiA6IDEsXHJcbiAgICB0YWN0aWMgOiAxLFxyXG4gICAgdGFpbCA6IDEsXHJcbiAgICB0YWtlIDogMSxcclxuICAgIHRhbGUgOiAxLFxyXG4gICAgdGFsZW50IDogMSxcclxuICAgIHRhbGsgOiAxLFxyXG4gICAgdGFsbCA6IDEsXHJcbiAgICB0YW5rIDogMSxcclxuICAgIHRhcCA6IDEsXHJcbiAgICB0YXBlIDogMSxcclxuICAgIHRhcmdldCA6IDEsXHJcbiAgICB0YXNrIDogMSxcclxuICAgIHRhc3RlIDogMSxcclxuICAgIHRheCA6IDEsXHJcbiAgICB0YXhwYXllciA6IDEsXHJcbiAgICB0ZWEgOiAxLFxyXG4gICAgdGVhY2ggOiAxLFxyXG4gICAgdGVhY2hlciA6IDEsXHJcbiAgICB0ZWFjaGluZyA6IDEsXHJcbiAgICB0ZWFtIDogMSxcclxuICAgIHRlYXIgOiAxLFxyXG4gICAgdGVhc3Bvb24gOiAxLFxyXG4gICAgdGVjaG5pY2FsIDogMSxcclxuICAgIHRlY2huaXF1ZSA6IDEsXHJcbiAgICB0ZWNobm9sb2d5IDogMSxcclxuICAgIHRlZW4gOiAxLFxyXG4gICAgdGVlbmFnZXIgOiAxLFxyXG4gICAgdGVsZXBob25lIDogMSxcclxuICAgIHRlbGVzY29wZSA6IDEsXHJcbiAgICB0ZWxldmlzaW9uIDogMSxcclxuICAgIHRlbGwgOiAxLFxyXG4gICAgdGVtcGVyYXR1cmUgOiAxLFxyXG4gICAgdGVtcG9yYXJ5IDogMSxcclxuICAgIHRlbiA6IDEsXHJcbiAgICB0ZW5kIDogMSxcclxuICAgIHRlbmRlbmN5IDogMSxcclxuICAgIHRlbm5pcyA6IDEsXHJcbiAgICB0ZW5zaW9uIDogMSxcclxuICAgIHRlbnQgOiAxLFxyXG4gICAgdGVybSA6IDEsXHJcbiAgICB0ZXJtcyA6IDEsXHJcbiAgICB0ZXJyaWJsZSA6IDEsXHJcbiAgICB0ZXJyaXRvcnkgOiAxLFxyXG4gICAgdGVycm9yIDogMSxcclxuICAgIHRlcnJvcmlzbSA6IDEsXHJcbiAgICB0ZXJyb3Jpc3QgOiAxLFxyXG4gICAgdGVzdCA6IDEsXHJcbiAgICB0ZXN0aWZ5IDogMSxcclxuICAgIHRlc3RpbW9ueSA6IDEsXHJcbiAgICB0ZXN0aW5nIDogMSxcclxuICAgIHRleHQgOiAxLFxyXG4gICAgdGhhbiA6IDEsXHJcbiAgICB0aGFuayA6IDEsXHJcbiAgICB0aGFua3MgOiAxLFxyXG4gICAgdGhhdCA6IDEsXHJcbiAgICB0aGUgOiAxLFxyXG4gICAgdGhlYXRlciA6IDEsXHJcbiAgICB0aGVpciA6IDEsXHJcbiAgICB0aGVtIDogMSxcclxuICAgIHRoZW1lIDogMSxcclxuICAgIHRoZW1zZWx2ZXMgOiAxLFxyXG4gICAgdGhlbiA6IDEsXHJcbiAgICB0aGVvcnkgOiAxLFxyXG4gICAgdGhlcmFweSA6IDEsXHJcbiAgICB0aGVyZSA6IDEsXHJcbiAgICB0aGVyZWZvcmUgOiAxLFxyXG4gICAgdGhlc2UgOiAxLFxyXG4gICAgdGhleSA6IDEsXHJcbiAgICB0aGljayA6IDEsXHJcbiAgICB0aGluIDogMSxcclxuICAgIHRoaW5nIDogMSxcclxuICAgIHRoaW5rIDogMSxcclxuICAgIHRoaW5raW5nIDogMSxcclxuICAgIHRoaXJkIDogMSxcclxuICAgIHRoaXJ0eSA6IDEsXHJcbiAgICB0aGlzIDogMSxcclxuICAgIHRob3NlIDogMSxcclxuICAgIHRob3VnaCA6IDEsXHJcbiAgICB0aG91Z2h0IDogMSxcclxuICAgIHRob3VzYW5kIDogMSxcclxuICAgIHRocmVhdCA6IDEsXHJcbiAgICB0aHJlYXRlbiA6IDEsXHJcbiAgICB0aHJlZSA6IDEsXHJcbiAgICB0aHJvYXQgOiAxLFxyXG4gICAgdGhyb3VnaCA6IDEsXHJcbiAgICB0aHJvdWdob3V0IDogMSxcclxuICAgIHRocm93IDogMSxcclxuICAgIHRodXMgOiAxLFxyXG4gICAgdGlja2V0IDogMSxcclxuICAgIHRpZSA6IDEsXHJcbiAgICB0aWdodCA6IDEsXHJcbiAgICB0aW1lIDogMSxcclxuICAgIHRpbnkgOiAxLFxyXG4gICAgdGlwIDogMSxcclxuICAgIHRpcmUgOiAxLFxyXG4gICAgdGlyZWQgOiAxLFxyXG4gICAgdGlzc3VlIDogMSxcclxuICAgIHRpdGxlIDogMSxcclxuICAgIHRvIDogMSxcclxuICAgIHRvYmFjY28gOiAxLFxyXG4gICAgdG9kYXkgOiAxLFxyXG4gICAgdG9lIDogMSxcclxuICAgIHRvZ2V0aGVyIDogMSxcclxuICAgIHRvbWF0byA6IDEsXHJcbiAgICB0b21vcnJvdyA6IDEsXHJcbiAgICB0b25lIDogMSxcclxuICAgIHRvbmd1ZSA6IDEsXHJcbiAgICB0b25pZ2h0IDogMSxcclxuICAgIHRvbyA6IDEsXHJcbiAgICB0b29sIDogMSxcclxuICAgIHRvb3RoIDogMSxcclxuICAgIHRvcCA6IDEsXHJcbiAgICB0b3BpYyA6IDEsXHJcbiAgICB0b3NzIDogMSxcclxuICAgIHRvdGFsIDogMSxcclxuICAgIHRvdGFsbHkgOiAxLFxyXG4gICAgdG91Y2ggOiAxLFxyXG4gICAgdG91Z2ggOiAxLFxyXG4gICAgdG91ciA6IDEsXHJcbiAgICB0b3VyaXN0IDogMSxcclxuICAgIHRvdXJuYW1lbnQgOiAxLFxyXG4gICAgdG93YXJkIDogMSxcclxuICAgIHRvd2FyZHMgOiAxLFxyXG4gICAgdG93ZXIgOiAxLFxyXG4gICAgdG93biA6IDEsXHJcbiAgICB0b3kgOiAxLFxyXG4gICAgdHJhY2UgOiAxLFxyXG4gICAgdHJhY2sgOiAxLFxyXG4gICAgdHJhZGUgOiAxLFxyXG4gICAgdHJhZGl0aW9uIDogMSxcclxuICAgIHRyYWRpdGlvbmFsIDogMSxcclxuICAgIHRyYWZmaWMgOiAxLFxyXG4gICAgdHJhZ2VkeSA6IDEsXHJcbiAgICB0cmFpbCA6IDEsXHJcbiAgICB0cmFpbiA6IDEsXHJcbiAgICB0cmFpbmluZyA6IDEsXHJcbiAgICB0cmFuc2ZlciA6IDEsXHJcbiAgICB0cmFuc2Zvcm0gOiAxLFxyXG4gICAgdHJhbnNmb3JtYXRpb24gOiAxLFxyXG4gICAgdHJhbnNpdGlvbiA6IDEsXHJcbiAgICB0cmFuc2xhdGUgOiAxLFxyXG4gICAgdHJhbnNwb3J0YXRpb24gOiAxLFxyXG4gICAgdHJhdmVsIDogMSxcclxuICAgIHRyZWF0IDogMSxcclxuICAgIHRyZWF0bWVudCA6IDEsXHJcbiAgICB0cmVhdHkgOiAxLFxyXG4gICAgdHJlZSA6IDEsXHJcbiAgICB0cmVtZW5kb3VzIDogMSxcclxuICAgIHRyZW5kIDogMSxcclxuICAgIHRyaWFsIDogMSxcclxuICAgIHRyaWJlIDogMSxcclxuICAgIHRyaWNrIDogMSxcclxuICAgIHRyaXAgOiAxLFxyXG4gICAgdHJvb3AgOiAxLFxyXG4gICAgdHJvdWJsZSA6IDEsXHJcbiAgICB0cnVjayA6IDEsXHJcbiAgICB0cnVlIDogMSxcclxuICAgIHRydWx5IDogMSxcclxuICAgIHRydXN0IDogMSxcclxuICAgIHRydXRoIDogMSxcclxuICAgIHRyeSA6IDEsXHJcbiAgICB0dWJlIDogMSxcclxuICAgIHR1bm5lbCA6IDEsXHJcbiAgICB0dXJuIDogMSxcclxuICAgIFRWIDogMSxcclxuICAgIHR3ZWx2ZSA6IDEsXHJcbiAgICB0d2VudHkgOiAxLFxyXG4gICAgdHdpY2UgOiAxLFxyXG4gICAgdHdpbiA6IDEsXHJcbiAgICB0d28gOiAxLFxyXG4gICAgdHlwZSA6IDEsXHJcbiAgICB0eXBpY2FsIDogMSxcclxuICAgIHR5cGljYWxseSA6IDEsXHJcbiAgICB1Z2x5IDogMSxcclxuICAgIHVsdGltYXRlIDogMSxcclxuICAgIHVsdGltYXRlbHkgOiAxLFxyXG4gICAgdW5hYmxlIDogMSxcclxuICAgIHVuY2xlIDogMSxcclxuICAgIHVuZGVyIDogMSxcclxuICAgIHVuZGVyZ28gOiAxLFxyXG4gICAgdW5kZXJzdGFuZCA6IDEsXHJcbiAgICB1bmRlcnN0YW5kaW5nIDogMSxcclxuICAgIHVuZm9ydHVuYXRlbHkgOiAxLFxyXG4gICAgdW5pZm9ybSA6IDEsXHJcbiAgICB1bmlvbiA6IDEsXHJcbiAgICB1bmlxdWUgOiAxLFxyXG4gICAgdW5pdCA6IDEsXHJcbiAgICBVbml0ZWQgOiAxLFxyXG4gICAgdW5pdmVyc2FsIDogMSxcclxuICAgIHVuaXZlcnNlIDogMSxcclxuICAgIHVuaXZlcnNpdHkgOiAxLFxyXG4gICAgdW5rbm93biA6IDEsXHJcbiAgICB1bmxlc3MgOiAxLFxyXG4gICAgdW5saWtlIDogMSxcclxuICAgIHVubGlrZWx5IDogMSxcclxuICAgIHVudGlsIDogMSxcclxuICAgIHVudXN1YWwgOiAxLFxyXG4gICAgdXAgOiAxLFxyXG4gICAgdXBvbiA6IDEsXHJcbiAgICB1cHBlciA6IDEsXHJcbiAgICB1cmJhbiA6IDEsXHJcbiAgICB1cmdlIDogMSxcclxuICAgIHVzIDogMSxcclxuICAgIHVzZSA6IDEsXHJcbiAgICB1c2VkIDogMSxcclxuICAgIHVzZWZ1bCA6IDEsXHJcbiAgICB1c2VyIDogMSxcclxuICAgIHVzdWFsIDogMSxcclxuICAgIHVzdWFsbHkgOiAxLFxyXG4gICAgdXRpbGl0eSA6IDEsXHJcbiAgICB2YWNhdGlvbiA6IDEsXHJcbiAgICB2YWxsZXkgOiAxLFxyXG4gICAgdmFsdWFibGUgOiAxLFxyXG4gICAgdmFsdWUgOiAxLFxyXG4gICAgdmFyaWFibGUgOiAxLFxyXG4gICAgdmFyaWF0aW9uIDogMSxcclxuICAgIHZhcmlldHkgOiAxLFxyXG4gICAgdmFyaW91cyA6IDEsXHJcbiAgICB2YXJ5IDogMSxcclxuICAgIHZhc3QgOiAxLFxyXG4gICAgdmVnZXRhYmxlIDogMSxcclxuICAgIHZlaGljbGUgOiAxLFxyXG4gICAgdmVudHVyZSA6IDEsXHJcbiAgICB2ZXJzaW9uIDogMSxcclxuICAgIHZlcnN1cyA6IDEsXHJcbiAgICB2ZXJ5IDogMSxcclxuICAgIHZlc3NlbCA6IDEsXHJcbiAgICB2ZXRlcmFuIDogMSxcclxuICAgIHZpYSA6IDEsXHJcbiAgICB2aWN0aW0gOiAxLFxyXG4gICAgdmljdG9yeSA6IDEsXHJcbiAgICB2aWRlbyA6IDEsXHJcbiAgICB2aWV3IDogMSxcclxuICAgIHZpZXdlciA6IDEsXHJcbiAgICB2aWxsYWdlIDogMSxcclxuICAgIHZpb2xhdGUgOiAxLFxyXG4gICAgdmlvbGF0aW9uIDogMSxcclxuICAgIHZpb2xlbmNlIDogMSxcclxuICAgIHZpb2xlbnQgOiAxLFxyXG4gICAgdmlydHVhbGx5IDogMSxcclxuICAgIHZpcnR1ZSA6IDEsXHJcbiAgICB2aXJ1cyA6IDEsXHJcbiAgICB2aXNpYmxlIDogMSxcclxuICAgIHZpc2lvbiA6IDEsXHJcbiAgICB2aXNpdCA6IDEsXHJcbiAgICB2aXNpdG9yIDogMSxcclxuICAgIHZpc3VhbCA6IDEsXHJcbiAgICB2aXRhbCA6IDEsXHJcbiAgICB2b2ljZSA6IDEsXHJcbiAgICB2b2x1bWUgOiAxLFxyXG4gICAgdm9sdW50ZWVyIDogMSxcclxuICAgIHZvdGUgOiAxLFxyXG4gICAgdm90ZXIgOiAxLFxyXG4gICAgdnMgOiAxLFxyXG4gICAgdnVsbmVyYWJsZSA6IDEsXHJcbiAgICB3YWdlIDogMSxcclxuICAgIHdhaXQgOiAxLFxyXG4gICAgd2FrZSA6IDEsXHJcbiAgICB3YWxrIDogMSxcclxuICAgIHdhbGwgOiAxLFxyXG4gICAgd2FuZGVyIDogMSxcclxuICAgIHdhbnQgOiAxLFxyXG4gICAgd2FyIDogMSxcclxuICAgIHdhcm0gOiAxLFxyXG4gICAgd2FybiA6IDEsXHJcbiAgICB3YXJuaW5nIDogMSxcclxuICAgIHdhc2ggOiAxLFxyXG4gICAgd2FzdGUgOiAxLFxyXG4gICAgd2F0Y2ggOiAxLFxyXG4gICAgd2F0ZXIgOiAxLFxyXG4gICAgd2F2ZSA6IDEsXHJcbiAgICB3YXkgOiAxLFxyXG4gICAgd2UgOiAxLFxyXG4gICAgd2VhayA6IDEsXHJcbiAgICB3ZWFsdGggOiAxLFxyXG4gICAgd2VhbHRoeSA6IDEsXHJcbiAgICB3ZWFwb24gOiAxLFxyXG4gICAgd2VhciA6IDEsXHJcbiAgICB3ZWF0aGVyIDogMSxcclxuICAgIHdlZGRpbmcgOiAxLFxyXG4gICAgd2VlayA6IDEsXHJcbiAgICB3ZWVrZW5kIDogMSxcclxuICAgIHdlZWtseSA6IDEsXHJcbiAgICB3ZWlnaCA6IDEsXHJcbiAgICB3ZWlnaHQgOiAxLFxyXG4gICAgd2VsY29tZSA6IDEsXHJcbiAgICB3ZWxmYXJlIDogMSxcclxuICAgIHdlbGwgOiAxLFxyXG4gICAgd2VzdCA6IDEsXHJcbiAgICB3ZXN0ZXJuIDogMSxcclxuICAgIHdldCA6IDEsXHJcbiAgICB3aGF0IDogMSxcclxuICAgIHdoYXRldmVyIDogMSxcclxuICAgIHdoZWVsIDogMSxcclxuICAgIHdoZW4gOiAxLFxyXG4gICAgd2hlbmV2ZXIgOiAxLFxyXG4gICAgd2hlcmUgOiAxLFxyXG4gICAgd2hlcmVhcyA6IDEsXHJcbiAgICB3aGV0aGVyIDogMSxcclxuICAgIHdoaWNoIDogMSxcclxuICAgIHdoaWxlIDogMSxcclxuICAgIHdoaXNwZXIgOiAxLFxyXG4gICAgd2hpdGUgOiAxLFxyXG4gICAgd2hvIDogMSxcclxuICAgIHdob2xlIDogMSxcclxuICAgIHdob20gOiAxLFxyXG4gICAgd2hvc2UgOiAxLFxyXG4gICAgd2h5IDogMSxcclxuICAgIHdpZGUgOiAxLFxyXG4gICAgd2lkZWx5IDogMSxcclxuICAgIHdpZGVzcHJlYWQgOiAxLFxyXG4gICAgd2lmZSA6IDEsXHJcbiAgICB3aWxkIDogMSxcclxuICAgIHdpbGwgOiAxLFxyXG4gICAgd2lsbGluZyA6IDEsXHJcbiAgICB3aW4gOiAxLFxyXG4gICAgd2luZCA6IDEsXHJcbiAgICB3aW5kb3cgOiAxLFxyXG4gICAgd2luZSA6IDEsXHJcbiAgICB3aW5nIDogMSxcclxuICAgIHdpbm5lciA6IDEsXHJcbiAgICB3aW50ZXIgOiAxLFxyXG4gICAgd2lwZSA6IDEsXHJcbiAgICB3aXJlIDogMSxcclxuICAgIHdpc2RvbSA6IDEsXHJcbiAgICB3aXNlIDogMSxcclxuICAgIHdpc2ggOiAxLFxyXG4gICAgd2l0aCA6IDEsXHJcbiAgICB3aXRoZHJhdyA6IDEsXHJcbiAgICB3aXRoaW4gOiAxLFxyXG4gICAgd2l0aG91dCA6IDEsXHJcbiAgICB3aXRuZXNzIDogMSxcclxuICAgIHdvbWFuIDogMSxcclxuICAgIHdvbmRlciA6IDEsXHJcbiAgICB3b25kZXJmdWwgOiAxLFxyXG4gICAgd29vZCA6IDEsXHJcbiAgICB3b29kZW4gOiAxLFxyXG4gICAgd29yZCA6IDEsXHJcbiAgICB3b3JrIDogMSxcclxuICAgIHdvcmtlciA6IDEsXHJcbiAgICB3b3JraW5nIDogMSxcclxuICAgIHdvcmtzIDogMSxcclxuICAgIHdvcmtzaG9wIDogMSxcclxuICAgIHdvcmxkIDogMSxcclxuICAgIHdvcnJpZWQgOiAxLFxyXG4gICAgd29ycnkgOiAxLFxyXG4gICAgd29ydGggOiAxLFxyXG4gICAgd291bGQgOiAxLFxyXG4gICAgd291bmQgOiAxLFxyXG4gICAgd3JhcCA6IDEsXHJcbiAgICB3cml0ZSA6IDEsXHJcbiAgICB3cml0ZXIgOiAxLFxyXG4gICAgd3JpdGluZyA6IDEsXHJcbiAgICB3cm9uZyA6IDEsXHJcbiAgICB5YXJkIDogMSxcclxuICAgIHllYWggOiAxLFxyXG4gICAgeWVhciA6IDEsXHJcbiAgICB5ZWxsIDogMSxcclxuICAgIHllbGxvdyA6IDEsXHJcbiAgICB5ZXMgOiAxLFxyXG4gICAgeWVzdGVyZGF5IDogMSxcclxuICAgIHlldCA6IDEsXHJcbiAgICB5aWVsZCA6IDEsXHJcbiAgICB5b3UgOiAxLFxyXG4gICAgeW91bmcgOiAxLFxyXG4gICAgeW91ciA6IDEsXHJcbiAgICB5b3VycyA6IDEsXHJcbiAgICB5b3Vyc2VsZiA6IDEsXHJcbiAgICB5b3V0aCA6IDEsXHJcbiAgICB6b25lIDogMSxcclxuICB9OyIsImNvbnN0IGF4aW9zID0gcmVxdWlyZSgnYXhpb3MnKTtcclxuY29uc3QgZnMgPSByZXF1aXJlKCdmcycpO1xyXG5jb25zdCBmaW5kZXIgPSByZXF1aXJlKCcuL2ZpbmRlci5qcycpO1xyXG5cclxuY29uc3QgQVBJX0RBSUxZX0xJTUlUID0gMjUwMDA7XHJcbmxldCBNQVhfV09SRFM7XHJcbmxldCBDQUNIRV9DTFVTVEVSUztcclxubGV0IE1BWF9OT0RFX0ZSRVFVRU5DWTtcclxubGV0IFRSQVZFUlNFX1NJTUlMQVI7XHJcblxyXG5sZXQgY2FjaGVJc0luaXRpYWxpemVkID0gZmFsc2U7XHJcbmxldCB0b3RhbFdvcmRzTGFzdERheSA9IDA7XHJcbmxldCBjYWNoZUluaXRJc0Vycm9yID0gZmFsc2U7XHJcblxyXG5hc3luYyBmdW5jdGlvbiBsYXp5SW5pdENhY2hlKCkge1xyXG5cclxuICBpZiAoIWNhY2hlSXNJbml0aWFsaXplZCkge1xyXG4gICAgY2FjaGVJc0luaXRpYWxpemVkID0gdHJ1ZTtcclxuXHJcbiAgICBsZXQgY3VydGltZSA9IG5ldyBEYXRlKCk7XHJcblxyXG4gICAgLy8gODY0MDAwMDAgbWlsbGlzZWNvbmRzICgyNCBob3VycylcclxuICAgIHRvdGFsV29yZHNMYXN0RGF5ID0gYXdhaXQgZmluZGVyLmZpbmRGaWxlcyhcImNhY2hlL3dvcmRzXCIsIGN1cnRpbWUgLSA4NjQwMDAwMCk7XHJcblxyXG4gICAgY29uc29sZS5sb2coXCJsYXp5SW5pdENhY2hlICB0b3RhbFdvcmRzTGFzdERheSA6IFwiK3RvdGFsV29yZHNMYXN0RGF5K1wiIGVycm9yczpcIitmaW5kZXIuZXJyb3JzKTtcclxuICB9XHJcblxyXG4gIGlmICh0b3RhbFdvcmRzTGFzdERheSA+PSBBUElfREFJTFlfTElNSVQpIHtcclxuICAgIGlmICghY2FjaGVJbml0SXNFcnJvcikge1xyXG4gICAgICBjb25zb2xlLmVycm9yKFwiQ291bGQgbm90IHByb3h5IG1vcmUgcmVxdWVzdCB0byBBUEkgZmlsZS9zaW5nbGUgIHRvdGFsV29yZHNMYXN0RGF5ID49IEFQSV9EQUlMWV9MSU1JVCA6ICBcIit0b3RhbFdvcmRzTGFzdERheStcIiA+PSBcIitBUElfREFJTFlfTElNSVQrXCJcXG5cIik7XHJcbiAgICB9XHJcbiAgICBjYWNoZUluaXRJc0Vycm9yID0gdHJ1ZTtcclxuICAgIHJldHVybiBmYWxzZTtcclxuICB9IGVsc2Uge1xyXG4gICAgdG90YWxXb3Jkc0xhc3REYXkrKztcclxuICAgIHJldHVybiB0cnVlO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGluaXRDcmF3bGVyKFxyXG4gIF9NQVhfV09SRFMsXHJcbiAgX0NBQ0hFX0NMVVNURVJTLFxyXG4gIF9NQVhfTk9ERV9GUkVRVUVOQ1ksXHJcbiAgX1RSQVZFUlNFX1NJTUlMQVJcclxuICApIHtcclxuXHJcbiAgTUFYX1dPUkRTID0gX01BWF9XT1JEUztcclxuICBDQUNIRV9DTFVTVEVSUyA9IF9DQUNIRV9DTFVTVEVSUztcclxuICBNQVhfTk9ERV9GUkVRVUVOQ1kgPSBfTUFYX05PREVfRlJFUVVFTkNZO1xyXG4gIFRSQVZFUlNFX1NJTUlMQVIgPSBfVFJBVkVSU0VfU0lNSUxBUjtcclxuXHJcblxyXG4gIGlmICghZnMuZXhpc3RzU3luYyhcImNhY2hlL3dvcmRzXCIpKXtcclxuICAgIGZzLm1rZGlyU3luYyhcImNhY2hlL3dvcmRzXCIsIHsgcmVjdXJzaXZlOiB0cnVlIH0pO1xyXG4gIH1cclxuICBpZiAoIWZzLmV4aXN0c1N5bmMoXCJjYWNoZS9jbHVzdGVyc1wiKSl7XHJcbiAgICBmcy5ta2RpclN5bmMoXCJjYWNoZS9jbHVzdGVyc1wiKTtcclxuICB9XHJcblxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gc2luZ2xlV29yZFRvRGlzcGxheShkYXRhKSB7XHJcblxyXG4gIC8vIGNyZWF0ZSBuZXcgYXJyYXkgdG8gcHVzaCBkYXRhIHRvXHJcbiAgbGV0IHJlc3VsdHMgPSBbXTtcclxuICBsZXQgcmVzdWx0ID0ge1xyXG4gICAgZnJlcXVlbmN5OmRhdGEuZnJlcXVlbmN5LFxyXG4gICAgcHJvbnVuY2lhdGlvbjpkYXRhLnByb251bmNpYXRpb24sXHJcbiAgICByZXN1bHRzLCBldGM6XCJcIlxyXG4gIH07XHJcblxyXG4gIGlmIChkYXRhLnJlc3VsdHMpIGRhdGEucmVzdWx0cy5tYXAoZGVmID0+IHtcclxuICAgIGxldCBkZWZpbml0aW9uQXJyYXkgPSBbXTtcclxuICAgIGxldCBkZWZpbml0aW9uID0ge1xyXG4gICAgICBwYXJ0T2ZTcGVlY2g6ZGVmLnBhcnRPZlNwZWVjaCxcclxuICAgICAgcHJvcGVydGllczpkZWZpbml0aW9uQXJyYXlcclxuICAgIH07XHJcblxyXG4gICAgLy8gY3JlYXRlcyBhcnJheSBvZiBrZXlzIGluIG9iamVjdFxyXG4gICAgY29uc3Qga2V5cyA9IE9iamVjdC5rZXlzKGRlZik7XHJcbiAgICBrZXlzLm1hcChrZXkgPT4ge1xyXG5cclxuICAgICAgLy8gYnVpbGRzIHJlZ2V4IHRoYXQgbG9va3MgZm9yIGNhcGl0YWwgbGV0dGVyc1xyXG4gICAgICAvLyBUaGUgcmVzcG9uc2UgcGFyYW1ldGVycyBhcmUgaW4gY2FtZWxDYXNlLCBzbyB3ZSBuZWVkIHRvIElEXHJcbiAgICAgIC8vIHRoZSBjYXBpdGFsIGxldHRlcnMgYW5kIGFkZCBzcGFjZXMgaW5zdGVhZCBzbyB0aGUgXHJcbiAgICAgIC8vIGZyb250IGVuZCBjYW4gZWFzaWx5IGRpc3BsYXkgdGhlIHBhcmFtZXRlciBsYWJlbHNcclxuICAgICAgY29uc3QgcmVnZXggPSAvKD89W0EtWl0pLztcclxuXHJcbiAgICAgIC8vIGNyZWF0ZXMgcHJlc2VudGFibGUgbGFiZWxcclxuICAgICAgY29uc3QgbGFiZWwgPSBrZXkuc3BsaXQocmVnZXgpLmpvaW4oJyAnKS50b0xvd2VyQ2FzZSgpO1xyXG5cclxuICAgICAgLy8gZ3JhYnMgdGhlIHZhbHVlIGZvciB0aGUgcGFyYW1ldGVyIGZyb20gdGhlXHJcbiAgICAgIC8vIGRlZmluaXRpb24gb2JqZWN0IGluIHJlc3BvbnNlXHJcbiAgICAgIGNvbnN0IHZhbHVlID0gZGVmW2tleV07XHJcblxyXG4gICAgICAvLyBjb25zdHJ1Y3RzIG5ldyBvYmplY3QgdG8gc2VuZCB0byBmcm9udGVuZFxyXG4gICAgICBsZXQgbmV3T2JqID0ge1xyXG4gICAgICAgIGxhYmVsLFxyXG4gICAgICAgIHZhbHVlLFxyXG4gICAgICAgIGlzU3RyaW5nOiB0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnID8gdHJ1ZSA6IGZhbHNlXHJcbiAgICAgIH07XHJcblxyXG4gICAgICBkZWZpbml0aW9uQXJyYXkucHVzaChuZXdPYmopO1xyXG4gICAgfSlcclxuXHJcbiAgICByZXN1bHRzLnB1c2goZGVmaW5pdGlvbik7XHJcbiAgfSk7XHJcblxyXG4gIHJldHVybiByZXN1bHQ7XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBsb2FkU2luZ2xlV29yZCh3b3JkLCBhc29iamVjdCkge1xyXG5cclxuICBjb25zdCB3ZnBhdGggPSBgY2FjaGUvd29yZHMvJHt3b3JkfWA7XHJcblxyXG4gIGlmIChmcy5leGlzdHNTeW5jKHdmcGF0aCkpIHtcclxuXHJcbiAgICAvL2NvbnNvbGUubG9nKFwiRnJvbSBjYWNoZSBmaWxlL3NpbmdsZSBcIit3ZnBhdGgrXCIgIGFzb2JqZWN0OlwiK2Fzb2JqZWN0K1wiLi4uXFxuXCIpO1xyXG4gICAgbGV0IGlqc29uID0gZnMucmVhZEZpbGVTeW5jKHdmcGF0aCkudG9TdHJpbmcoKTtcclxuICAgIHRyeSB7XHJcbiAgICAgIGxldCBkYXRhID0gSlNPTi5wYXJzZShpanNvbik7XHJcblxyXG4gICAgICBpZiAoYXNvYmplY3QpIHtcclxuICAgICAgICByZXR1cm4gZGF0YTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBsZXQgcmVzdWx0ID0gc2luZ2xlV29yZFRvRGlzcGxheShkYXRhKTtcclxuICAgICAgICBjb25zdCBvanNvbiA9IEpTT04uc3RyaW5naWZ5KHJlc3VsdCk7ICAgICAgICAgLy8gbW9kaWZpZWRcclxuICAgICAgICByZXR1cm4gb2pzb247XHJcbiAgICAgIH1cclxuICBcclxuICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgY29uc29sZS53YXJuKFwiRGVsZXRlIGludmFsaWQgZmlsZSA6IFwiK3dmcGF0aCwgZSk7XHJcbiAgICAgIGZzLnVubGlua1N5bmMod2ZwYXRoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGxldCBzdWNjZXNzID0gYXdhaXQgbGF6eUluaXRDYWNoZSgpO1xyXG4gIGlmICghc3VjY2Vzcykge1xyXG4gICAgcmV0dXJuIG51bGw7XHJcbiAgfVxyXG5cclxuICAvLyBzZW5kIHJlcXVlc3QgdG8gdGhlIFdvcmRzQVBJXHJcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcyh7XHJcbiAgICBcIm1ldGhvZFwiOlwiR0VUXCIsXHJcbiAgICBcInVybFwiOmBodHRwczovL3dvcmRzYXBpdjEucC5yYXBpZGFwaS5jb20vd29yZHMvJHt3b3JkfWAsXHJcbiAgICBcImhlYWRlcnNcIjp7XHJcbiAgICBcImNvbnRlbnQtdHlwZVwiOlwiYXBwbGljYXRpb24vb2N0ZXQtc3RyZWFtXCIsXHJcbiAgICBcIngtcmFwaWRhcGktaG9zdFwiOlwid29yZHNhcGl2MS5wLnJhcGlkYXBpLmNvbVwiLFxyXG4gICAgXCJ4LXJhcGlkYXBpLWtleVwiOnByb2Nlc3MuZW52LlJBUElEQVBJX0tFWVxyXG4gICAgfVxyXG4gIH0pO1xyXG5cclxuICB0b3RhbFdvcmRzTGFzdERheSsrO1xyXG5cclxuICBjb25zdCBkanNvbiA9IEpTT04uc3RyaW5naWZ5KHJlc3BvbnNlLmRhdGEpOyAgLy8gb3JpZ2luYWxcclxuICBmcy53cml0ZUZpbGUod2ZwYXRoLCBkanNvbiwgKGVycikgPT4ge1xyXG4gICAgaWYgKGVycikge1xyXG4gICAgICBjb25zb2xlLmVycm9yKFwiQ2FjaGUgZmlsZS9zaW5nbGUgXCIrd2ZwYXRoK1wiICBhc29iamVjdDpcIithc29iamVjdCtcIiB3cml0ZSBmYWlsdXJlIDogXCIrZXJyK1wiXFxuXCIpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgY29uc29sZS5sb2coXCJDYWNoZSBmaWxlL3NpbmdsZSBcIit3ZnBhdGgrXCIgIGFzb2JqZWN0OlwiK2Fzb2JqZWN0K1wiIHdyaXR0ZW4gc3VjY2Vzc2Z1bGx5XFxuXCIpO1xyXG4gICAgfVxyXG4gIH0pO1xyXG5cclxuICBpZiAoYXNvYmplY3QpIHtcclxuICAgIHJldHVybiByZXNwb25zZS5kYXRhO1xyXG4gIH0gZWxzZSB7XHJcbiAgICBsZXQgcmVzdWx0ID0gc2luZ2xlV29yZFRvRGlzcGxheShyZXNwb25zZS5kYXRhKTtcclxuICAgIGNvbnN0IG9qc29uID0gSlNPTi5zdHJpbmdpZnkocmVzdWx0KTsgICAgICAgICAvLyBtb2RpZmllZFxyXG4gICAgcmV0dXJuIG9qc29uO1xyXG4gIH1cclxuXHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBUcmF2ZXJzZU5vZGUge1xyXG5cclxuICBlbnRyeTt2YWw7bGV2ZWw7cGFydE9mU3BlZWNoO1xyXG4gIGRlZmluaXRpb247c3lub255bXM7c2ltaWxhcjt3b3JkcztcclxuICBrZXk7XHJcblxyXG4gIGNvbnN0cnVjdG9yKGJ5X2RlZiwgZW50cnksIHZhbCwgbGV2ZWwpIHtcclxuICAgIHRoaXMuZW50cnk9ZW50cnk7dGhpcy52YWw9dmFsO3RoaXMubGV2ZWw9bGV2ZWw7XHJcblxyXG4gICAgdGhpcy5kZWZpbml0aW9uID0gdmFsLmRlZmluaXRpb247IFxyXG4gICAgdGhpcy5zeW5vbnltcyA9IFtdO1xyXG4gICAgdGhpcy5zaW1pbGFyID0gW107XHJcbiAgICB0aGlzLndvcmRzID0gW107XHJcblxyXG4gICAgdGhpcy5hZGQoYnlfZGVmKTtcclxuICB9XHJcblxyXG4gIGFkZChieV9kZWYpIHtcclxuICBcclxuICAgIHRoaXMucGFydE9mU3BlZWNoID0gdGhpcy52YWwucGFydE9mU3BlZWNoO1xyXG4gICAgdGhpcy5zeW5vbnltcy5wdXNoLmFwcGx5KHRoaXMuc3lub255bXMsIHRoaXMudmFsLnN5bm9ueW1zKTtcclxuICAgIHRoaXMuc3lub255bXMucHVzaCh0aGlzLmVudHJ5LndvcmQpO1xyXG4gICAgdGhpcy5zeW5vbnltcy5zb3J0KCk7XHJcbiAgXHJcbiAgICB0aGlzLnNpbWlsYXIucHVzaC5hcHBseSh0aGlzLnNpbWlsYXIsIHRoaXMudmFsLnNpbWlsYXJUbyk7XHJcbiAgICB0aGlzLnNpbWlsYXIuc29ydCgpO1xyXG4gIFxyXG4gICAgdGhpcy53b3Jkcy5wdXNoLmFwcGx5KHRoaXMud29yZHMsIHRoaXMuc3lub255bXMpO1xyXG4gICAgdGhpcy53b3Jkcy5wdXNoLmFwcGx5KHRoaXMud29yZHMsIHRoaXMuc2ltaWxhcik7XHJcbiAgXHJcbiAgICB0aGlzLmtleSA9IHRoaXMubGV2ZWwrXCI6Ojo6Ojo6XCIrdGhpcy5zeW5vbnltcy5sZW5ndGgrXCI6Ojo6OjpcIit0aGlzLnN5bm9ueW1zLmpvaW4oXCIsIFwiKTtcclxuXHJcbiAgICBpZiAoIWJ5X2RlZlt0aGlzLnZhbC5kZWZpbml0aW9uXSkge1xyXG5cclxuICAgICAgYnlfZGVmW3RoaXMudmFsLmRlZmluaXRpb25dID0gdGhpcztcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGNvbXByZXNzKCkge1xyXG4gICAgZGVsZXRlIHRoaXMudmFsO1xyXG4gICAgZGVsZXRlIHRoaXMua2V5O1xyXG4gICAgZGVsZXRlIHRoaXMud29yZHM7XHJcbiAgfVxyXG4gIFxyXG59O1xyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGxvYWREaWN0aW9uYXJ5QW5kQ2hpbGRyZW4odHJlc3VsdCwgd29yZCwgdHJhdmVyc2lvbikge1xyXG5cclxuICBjb25zdCBieV9kZWYgPSB0cmVzdWx0LmJ5X2RlZjtcclxuICBjb25zdCBlbnRyeSA9IGF3YWl0IGxvYWRTaW5nbGVXb3JkKHdvcmQsIHRydWUpO1xyXG5cclxuICBpZiAoIWVudHJ5IHx8XHJcbiAgICAgICh0cmF2ZXJzaW9uLmxldmVsID4gMSAmJiBcclxuICAgICAgZW50cnkuZnJlcXVlbmN5ICYmIGVudHJ5LmZyZXF1ZW5jeT49TUFYX05PREVfRlJFUVVFTkNZKSkge1xyXG4gICAgcmV0dXJuIHRydWU7XHJcbiAgfVxyXG5cclxuXHJcbiAgZm9yIChsZXQga2V5IGluIGVudHJ5LnJlc3VsdHMpIHtcclxuICAgIGNvbnN0IHZhbCA9IGVudHJ5LnJlc3VsdHNba2V5XTsgXHJcblxyXG4gICAgbGV0IG5vZGUgPSBuZXcgVHJhdmVyc2VOb2RlKGJ5X2RlZiwgZW50cnksIHZhbCwgdHJhdmVyc2lvbi5sZXZlbCk7XHJcbiAgICBpZiAoVFJBVkVSU0VfU0lNSUxBUikge1xyXG4gICAgICB0cmF2ZXJzaW9uLndvcmRzYnJlYWR0aGZpcnN0LnB1c2guYXBwbHkodHJhdmVyc2lvbi53b3Jkc2JyZWFkdGhmaXJzdCwgbm9kZS53b3Jkcyk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0cmF2ZXJzaW9uLndvcmRzYnJlYWR0aGZpcnN0LnB1c2guYXBwbHkodHJhdmVyc2lvbi53b3Jkc2JyZWFkdGhmaXJzdCwgbm9kZS5zeW5vbnltcyk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZXR1cm4gdHJ1ZTtcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHRyYXZlcnNlQ2x1c3Rlcih0cmVzdWx0LCB3b3JkKSB7XHJcblxyXG4gIGxldCB0cmF2ZXJzaW9uID0ge1xyXG4gICAgbGV2ZWwgOiAxLFxyXG4gICAgd29yZHNicmVhZHRoZmlyc3QgOiBbd29yZF1cclxuICB9O1xyXG4gIHRyZXN1bHQubm9Xb3JkcyA9IDA7XHJcbiAgdHJlc3VsdC5tYXN0ZXIgPSBhd2FpdCBsb2FkU2luZ2xlV29yZCh3b3JkLCB0cnVlKTtcclxuXHJcbiAgZG8ge1xyXG4gICAgdmFyIHByZXZpb3VzbGV2ZWxjaGlsZHdvcmRzID0gdHJhdmVyc2lvbi53b3Jkc2JyZWFkdGhmaXJzdC5jb25jYXQoW10pO1xyXG4gICAgdHJhdmVyc2lvbi53b3Jkc2JyZWFkdGhmaXJzdCA9IFtdO1xyXG5cclxuICAgIGxldCBwcm9taXNlcyA9IFtdO1xyXG4gICAgZm9yIChsZXQgdyBvZiBwcmV2aW91c2xldmVsY2hpbGR3b3Jkcykge1xyXG4gICAgICBpZiAodHJlc3VsdC5ieV93W3ddKSB7XHJcbiAgICAgIH0gZWxzZSBpZiAodHJlc3VsdC5ub1dvcmRzID49IE1BWF9XT1JEUykge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiTGV2ZWwgXCIrdHJhdmVyc2lvbi5sZXZlbCtcIiBmaW5pc2hlZC4gQ29tcGxldGVkLlwiKTtcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdHJlc3VsdC5ub1dvcmRzKys7XHJcbiAgICAgICAgdHJlc3VsdC5ieV93W3ddID0gMTtcclxuICAgICAgICBjb25zb2xlLmxvZyh0cmVzdWx0Lm5vV29yZHMgKyBcIi9cIiArIE1BWF9XT1JEUyk7XHJcbiAgICBcclxuICAgICAgICBsZXQgbm9kZXByb21pc2UgPSBsb2FkRGljdGlvbmFyeUFuZENoaWxkcmVuKHRyZXN1bHQsIHcsIHRyYXZlcnNpb24pO1xyXG4gICAgICAgIHByb21pc2VzLnB1c2gobm9kZXByb21pc2UpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBhd2FpdCBQcm9taXNlLmFsbChwcm9taXNlcyk7XHJcbiAgICBjb25zb2xlLmxvZyhcIkxldmVsIFwiK3RyYXZlcnNpb24ubGV2ZWwrXCIgZmluaXNoZWQuXCIpO1xyXG5cclxuICAgIHRyYXZlcnNpb24ubGV2ZWwrKztcclxuICB9IHdoaWxlICh0cmF2ZXJzaW9uLndvcmRzYnJlYWR0aGZpcnN0Lmxlbmd0aCk7XHJcblxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gbG9hZENsdXN0ZXIod29yZCwgYXNvYmplY3QpIHtcclxuXHJcbiAgY29uc3QgY2ZwYXRoID0gYGNhY2hlL2NsdXN0ZXJzLyR7d29yZH1gO1xyXG4gIGlmIChDQUNIRV9DTFVTVEVSUyAmJiBmcy5leGlzdHNTeW5jKGNmcGF0aCkpIHtcclxuICAgIGxldCBpanNvbiA9IGZzLnJlYWRGaWxlU3luYyhjZnBhdGgpLnRvU3RyaW5nKCk7XHJcbiAgICBsZXQgcmVzdWx0ID0gSlNPTi5wYXJzZShpanNvbik7XHJcbiAgICBjb25zb2xlLmxvZyhcIkZyb20gY2FjaGUgZmlsZS9jbHVzdGVyIFwiK2NmcGF0aCtcIiAgYXNvYmplY3Q6XCIrYXNvYmplY3QrXCIuLi5cXG5cIik7XHJcblxyXG4gICAgaWYgKGFzb2JqZWN0KSB7XHJcbiAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXR1cm4gaWpzb247XHJcbiAgICB9XHJcblxyXG4gIH0gZWxzZSB7XHJcblxyXG4gICAgY29uc3QgYnlfZGVmID0ge307XHJcbiAgICBjb25zdCBieV93ID0ge307XHJcbiAgICBjb25zdCBieV9rZXkgPSBbXTtcclxuICAgIGxldCB0cmVzdWx0ID0ge1xyXG4gICAgICBieV9kZWYsXHJcbiAgICAgIGJ5X3cgICAgfTtcclxuICAgIGNvbnN0IGVudHJ5ID0gYXdhaXQgdHJhdmVyc2VDbHVzdGVyKHRyZXN1bHQsIHdvcmQpO1xyXG4gICAgYnlfa2V5LnB1c2guYXBwbHkoYnlfa2V5LCBPYmplY3QudmFsdWVzKGJ5X2RlZikpO1xyXG4gICAgY29uc3QgY21wID0gKGZpcnN0RWwsIHNlY29uZEVsKSA9PiB7XHJcbiAgICAgIHJldHVybiBmaXJzdEVsLmtleS5sb2NhbGVDb21wYXJlKHNlY29uZEVsLmtleSk7XHJcbiAgICB9O1xyXG4gICAgYnlfa2V5LnNvcnQoY21wKTtcclxuICAgIGZvciAobGV0IGRlZm9iaiBvZiBieV9rZXkpIHtcclxuICAgICAgZGVmb2JqLmNvbXByZXNzKCk7XHJcbiAgICB9XHJcbiAgICBsZXQgcmVzdWx0ID0ge1xyXG4gICAgICBub0NsdXN0ZXJFbnRyaWVzOmJ5X2tleS5sZW5ndGgsXHJcbiAgICAgIHJlc3VsdHM6Ynlfa2V5XHJcbiAgICB9O1xyXG4gICAgaWYgKHRyZXN1bHQubWFzdGVyKSB7XHJcbiAgICAgIHJlc3VsdC5mcmVxdWVuY3kgPSB0cmVzdWx0Lm1hc3Rlci5mcmVxdWVuY3k7XHJcbiAgICAgIHJlc3VsdC5wcm9udW5jaWF0aW9uID0gdHJlc3VsdC5tYXN0ZXIucHJvbnVuY2lhdGlvbjtcclxuICAgIH1cclxuXHJcbiAgICBsZXQgY2pzb247XHJcbiAgICBpZiAoQ0FDSEVfQ0xVU1RFUlMpIHtcclxuICAgICAgY2pzb24gPSBKU09OLnN0cmluZ2lmeShyZXN1bHQpO1xyXG4gICAgICBmcy53cml0ZUZpbGUoY2ZwYXRoLCBjanNvbiwgKGVycikgPT4ge1xyXG4gICAgICAgIGlmIChlcnIpIHtcclxuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJDbHVzdGVyIGZpbGUvY2x1c3RlciBcIitjZnBhdGgrXCIgIHdyaXRlIGZhaWx1cmUgOiBcIitlcnIrXCJcXG5cIik7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKFwiQ2x1c3RlciBmaWxlL2NsdXN0ZXIgXCIrY2ZwYXRoK1wiICB3cml0dGVuIHN1Y2Nlc3NmdWxseVxcblwiKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChhc29iamVjdCkge1xyXG4gICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgaWYgKCFjanNvbikge1xyXG4gICAgICAgIGNqc29uID0gSlNPTi5zdHJpbmdpZnkocmVzdWx0KTtcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gY2pzb247XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gbG9hZENvbW1vbldvcmQocmVzdWx0LCB3b3JkLCBub1dvcmRzKSB7XHJcblxyXG4gIGNvbnN0IGVudHJ5ID0gYXdhaXQgbG9hZFNpbmdsZVdvcmQod29yZCwgdHJ1ZSk7XHJcblxyXG4gIGlmIChlbnRyeSkge1xyXG5cclxuICAgIHJlc3VsdC5ub1dvcmRzKys7XHJcbiAgICBjb25zb2xlLmxvZyhyZXN1bHQubm9Xb3JkcyArIFwiL1wiICsgbm9Xb3Jkcyk7XHJcblxyXG4gICAgZm9yIChsZXQga2V5IGluIGVudHJ5LnJlc3VsdHMpIHtcclxuICAgICAgY29uc3QgdmFsID0gZW50cnkucmVzdWx0c1trZXldOyBcclxuICAgICAgY29uc3Qgc3lub255bXMgPSBbXS5jb25jYXQodmFsLnN5bm9ueW1zKTtcclxuICAgICAgc3lub255bXMuc29ydCgpO1xyXG5cclxuICAgICAgY29uc3QgZGVmaW5pdGlvbiA9IHtcclxuICAgICAgICBwYXJ0T2ZTcGVlY2g6IHZhbC5wYXJ0T2ZTcGVlY2gsXHJcbiAgICAgICAgZGVmaW5pdGlvbjogdmFsLmRlZmluaXRpb24sXHJcbiAgICAgICAgc3lub255bXNcclxuICAgICAgfTtcclxuICAgICAgcmVzdWx0Lm5vRGVmaW5pdGlvbnMrKztcclxuICAgICAgcmVzdWx0LnJlc3VsdHMucHVzaChkZWZpbml0aW9uKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBsb2FkQ29tbW9uV29yZHMoKSB7XHJcbiAgY29uc3QgY3cgPSByZXF1aXJlKCcuL2NvbW1vbi13b3Jkcy5qcycpO1xyXG5cclxuICAvLyBjcmVhdGUgbmV3IGFycmF5IHRvIHB1c2ggZGF0YSB0b1xyXG4gIGxldCByZXN1bHRzID0gW107XHJcbiAgbGV0IHJlc3VsdCA9IHtcclxuICAgIG5vV29yZHM6MCxcclxuICAgIG5vRGVmaW5pdGlvbnM6MCxcclxuICAgIHJlc3VsdHNcclxuICB9O1xyXG5cclxuICBsZXQgcHJvbWlzZXMgPSBbXTtcclxuICBsZXQgbm9Xb3JkcyA9IE9iamVjdC5rZXlzKGN3LlRoZU1vc3RDb21tb24zMDAwKS5sZW5ndGg7XHJcbiAgZm9yIChsZXQgY29tbW9uV29yZCBpbiBjdy5UaGVNb3N0Q29tbW9uMzAwMCkge1xyXG4gICAgcHJvbWlzZXMucHVzaChsb2FkQ29tbW9uV29yZChyZXN1bHQsIGNvbW1vbldvcmQsIG5vV29yZHMpKTtcclxuICB9XHJcbiAgYXdhaXQgUHJvbWlzZS5hbGwocHJvbWlzZXMpO1xyXG5cclxuICByZXR1cm4gcmVzdWx0O1xyXG59XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9saWIvYXhpb3MnKTsiLCIndXNlIHN0cmljdCc7XG5cbnZhciB1dGlscyA9IHJlcXVpcmUoJy4vdXRpbHMnKTtcbnZhciBiaW5kID0gcmVxdWlyZSgnLi9oZWxwZXJzL2JpbmQnKTtcbnZhciBBeGlvcyA9IHJlcXVpcmUoJy4vY29yZS9BeGlvcycpO1xudmFyIG1lcmdlQ29uZmlnID0gcmVxdWlyZSgnLi9jb3JlL21lcmdlQ29uZmlnJyk7XG52YXIgZGVmYXVsdHMgPSByZXF1aXJlKCcuL2RlZmF1bHRzJyk7XG5cbi8qKlxuICogQ3JlYXRlIGFuIGluc3RhbmNlIG9mIEF4aW9zXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IGRlZmF1bHRDb25maWcgVGhlIGRlZmF1bHQgY29uZmlnIGZvciB0aGUgaW5zdGFuY2VcbiAqIEByZXR1cm4ge0F4aW9zfSBBIG5ldyBpbnN0YW5jZSBvZiBBeGlvc1xuICovXG5mdW5jdGlvbiBjcmVhdGVJbnN0YW5jZShkZWZhdWx0Q29uZmlnKSB7XG4gIHZhciBjb250ZXh0ID0gbmV3IEF4aW9zKGRlZmF1bHRDb25maWcpO1xuICB2YXIgaW5zdGFuY2UgPSBiaW5kKEF4aW9zLnByb3RvdHlwZS5yZXF1ZXN0LCBjb250ZXh0KTtcblxuICAvLyBDb3B5IGF4aW9zLnByb3RvdHlwZSB0byBpbnN0YW5jZVxuICB1dGlscy5leHRlbmQoaW5zdGFuY2UsIEF4aW9zLnByb3RvdHlwZSwgY29udGV4dCk7XG5cbiAgLy8gQ29weSBjb250ZXh0IHRvIGluc3RhbmNlXG4gIHV0aWxzLmV4dGVuZChpbnN0YW5jZSwgY29udGV4dCk7XG5cbiAgcmV0dXJuIGluc3RhbmNlO1xufVxuXG4vLyBDcmVhdGUgdGhlIGRlZmF1bHQgaW5zdGFuY2UgdG8gYmUgZXhwb3J0ZWRcbnZhciBheGlvcyA9IGNyZWF0ZUluc3RhbmNlKGRlZmF1bHRzKTtcblxuLy8gRXhwb3NlIEF4aW9zIGNsYXNzIHRvIGFsbG93IGNsYXNzIGluaGVyaXRhbmNlXG5heGlvcy5BeGlvcyA9IEF4aW9zO1xuXG4vLyBGYWN0b3J5IGZvciBjcmVhdGluZyBuZXcgaW5zdGFuY2VzXG5heGlvcy5jcmVhdGUgPSBmdW5jdGlvbiBjcmVhdGUoaW5zdGFuY2VDb25maWcpIHtcbiAgcmV0dXJuIGNyZWF0ZUluc3RhbmNlKG1lcmdlQ29uZmlnKGF4aW9zLmRlZmF1bHRzLCBpbnN0YW5jZUNvbmZpZykpO1xufTtcblxuLy8gRXhwb3NlIENhbmNlbCAmIENhbmNlbFRva2VuXG5heGlvcy5DYW5jZWwgPSByZXF1aXJlKCcuL2NhbmNlbC9DYW5jZWwnKTtcbmF4aW9zLkNhbmNlbFRva2VuID0gcmVxdWlyZSgnLi9jYW5jZWwvQ2FuY2VsVG9rZW4nKTtcbmF4aW9zLmlzQ2FuY2VsID0gcmVxdWlyZSgnLi9jYW5jZWwvaXNDYW5jZWwnKTtcblxuLy8gRXhwb3NlIGFsbC9zcHJlYWRcbmF4aW9zLmFsbCA9IGZ1bmN0aW9uIGFsbChwcm9taXNlcykge1xuICByZXR1cm4gUHJvbWlzZS5hbGwocHJvbWlzZXMpO1xufTtcbmF4aW9zLnNwcmVhZCA9IHJlcXVpcmUoJy4vaGVscGVycy9zcHJlYWQnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBheGlvcztcblxuLy8gQWxsb3cgdXNlIG9mIGRlZmF1bHQgaW1wb3J0IHN5bnRheCBpbiBUeXBlU2NyaXB0XG5tb2R1bGUuZXhwb3J0cy5kZWZhdWx0ID0gYXhpb3M7XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciB1dGlscyA9IHJlcXVpcmUoJy4vLi4vdXRpbHMnKTtcbnZhciBidWlsZFVSTCA9IHJlcXVpcmUoJy4uL2hlbHBlcnMvYnVpbGRVUkwnKTtcbnZhciBJbnRlcmNlcHRvck1hbmFnZXIgPSByZXF1aXJlKCcuL0ludGVyY2VwdG9yTWFuYWdlcicpO1xudmFyIGRpc3BhdGNoUmVxdWVzdCA9IHJlcXVpcmUoJy4vZGlzcGF0Y2hSZXF1ZXN0Jyk7XG52YXIgbWVyZ2VDb25maWcgPSByZXF1aXJlKCcuL21lcmdlQ29uZmlnJyk7XG5cbi8qKlxuICogQ3JlYXRlIGEgbmV3IGluc3RhbmNlIG9mIEF4aW9zXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IGluc3RhbmNlQ29uZmlnIFRoZSBkZWZhdWx0IGNvbmZpZyBmb3IgdGhlIGluc3RhbmNlXG4gKi9cbmZ1bmN0aW9uIEF4aW9zKGluc3RhbmNlQ29uZmlnKSB7XG4gIHRoaXMuZGVmYXVsdHMgPSBpbnN0YW5jZUNvbmZpZztcbiAgdGhpcy5pbnRlcmNlcHRvcnMgPSB7XG4gICAgcmVxdWVzdDogbmV3IEludGVyY2VwdG9yTWFuYWdlcigpLFxuICAgIHJlc3BvbnNlOiBuZXcgSW50ZXJjZXB0b3JNYW5hZ2VyKClcbiAgfTtcbn1cblxuLyoqXG4gKiBEaXNwYXRjaCBhIHJlcXVlc3RcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gY29uZmlnIFRoZSBjb25maWcgc3BlY2lmaWMgZm9yIHRoaXMgcmVxdWVzdCAobWVyZ2VkIHdpdGggdGhpcy5kZWZhdWx0cylcbiAqL1xuQXhpb3MucHJvdG90eXBlLnJlcXVlc3QgPSBmdW5jdGlvbiByZXF1ZXN0KGNvbmZpZykge1xuICAvKmVzbGludCBuby1wYXJhbS1yZWFzc2lnbjowKi9cbiAgLy8gQWxsb3cgZm9yIGF4aW9zKCdleGFtcGxlL3VybCdbLCBjb25maWddKSBhIGxhIGZldGNoIEFQSVxuICBpZiAodHlwZW9mIGNvbmZpZyA9PT0gJ3N0cmluZycpIHtcbiAgICBjb25maWcgPSBhcmd1bWVudHNbMV0gfHwge307XG4gICAgY29uZmlnLnVybCA9IGFyZ3VtZW50c1swXTtcbiAgfSBlbHNlIHtcbiAgICBjb25maWcgPSBjb25maWcgfHwge307XG4gIH1cblxuICBjb25maWcgPSBtZXJnZUNvbmZpZyh0aGlzLmRlZmF1bHRzLCBjb25maWcpO1xuXG4gIC8vIFNldCBjb25maWcubWV0aG9kXG4gIGlmIChjb25maWcubWV0aG9kKSB7XG4gICAgY29uZmlnLm1ldGhvZCA9IGNvbmZpZy5tZXRob2QudG9Mb3dlckNhc2UoKTtcbiAgfSBlbHNlIGlmICh0aGlzLmRlZmF1bHRzLm1ldGhvZCkge1xuICAgIGNvbmZpZy5tZXRob2QgPSB0aGlzLmRlZmF1bHRzLm1ldGhvZC50b0xvd2VyQ2FzZSgpO1xuICB9IGVsc2Uge1xuICAgIGNvbmZpZy5tZXRob2QgPSAnZ2V0JztcbiAgfVxuXG4gIC8vIEhvb2sgdXAgaW50ZXJjZXB0b3JzIG1pZGRsZXdhcmVcbiAgdmFyIGNoYWluID0gW2Rpc3BhdGNoUmVxdWVzdCwgdW5kZWZpbmVkXTtcbiAgdmFyIHByb21pc2UgPSBQcm9taXNlLnJlc29sdmUoY29uZmlnKTtcblxuICB0aGlzLmludGVyY2VwdG9ycy5yZXF1ZXN0LmZvckVhY2goZnVuY3Rpb24gdW5zaGlmdFJlcXVlc3RJbnRlcmNlcHRvcnMoaW50ZXJjZXB0b3IpIHtcbiAgICBjaGFpbi51bnNoaWZ0KGludGVyY2VwdG9yLmZ1bGZpbGxlZCwgaW50ZXJjZXB0b3IucmVqZWN0ZWQpO1xuICB9KTtcblxuICB0aGlzLmludGVyY2VwdG9ycy5yZXNwb25zZS5mb3JFYWNoKGZ1bmN0aW9uIHB1c2hSZXNwb25zZUludGVyY2VwdG9ycyhpbnRlcmNlcHRvcikge1xuICAgIGNoYWluLnB1c2goaW50ZXJjZXB0b3IuZnVsZmlsbGVkLCBpbnRlcmNlcHRvci5yZWplY3RlZCk7XG4gIH0pO1xuXG4gIHdoaWxlIChjaGFpbi5sZW5ndGgpIHtcbiAgICBwcm9taXNlID0gcHJvbWlzZS50aGVuKGNoYWluLnNoaWZ0KCksIGNoYWluLnNoaWZ0KCkpO1xuICB9XG5cbiAgcmV0dXJuIHByb21pc2U7XG59O1xuXG5BeGlvcy5wcm90b3R5cGUuZ2V0VXJpID0gZnVuY3Rpb24gZ2V0VXJpKGNvbmZpZykge1xuICBjb25maWcgPSBtZXJnZUNvbmZpZyh0aGlzLmRlZmF1bHRzLCBjb25maWcpO1xuICByZXR1cm4gYnVpbGRVUkwoY29uZmlnLnVybCwgY29uZmlnLnBhcmFtcywgY29uZmlnLnBhcmFtc1NlcmlhbGl6ZXIpLnJlcGxhY2UoL15cXD8vLCAnJyk7XG59O1xuXG4vLyBQcm92aWRlIGFsaWFzZXMgZm9yIHN1cHBvcnRlZCByZXF1ZXN0IG1ldGhvZHNcbnV0aWxzLmZvckVhY2goWydkZWxldGUnLCAnZ2V0JywgJ2hlYWQnLCAnb3B0aW9ucyddLCBmdW5jdGlvbiBmb3JFYWNoTWV0aG9kTm9EYXRhKG1ldGhvZCkge1xuICAvKmVzbGludCBmdW5jLW5hbWVzOjAqL1xuICBBeGlvcy5wcm90b3R5cGVbbWV0aG9kXSA9IGZ1bmN0aW9uKHVybCwgY29uZmlnKSB7XG4gICAgcmV0dXJuIHRoaXMucmVxdWVzdCh1dGlscy5tZXJnZShjb25maWcgfHwge30sIHtcbiAgICAgIG1ldGhvZDogbWV0aG9kLFxuICAgICAgdXJsOiB1cmxcbiAgICB9KSk7XG4gIH07XG59KTtcblxudXRpbHMuZm9yRWFjaChbJ3Bvc3QnLCAncHV0JywgJ3BhdGNoJ10sIGZ1bmN0aW9uIGZvckVhY2hNZXRob2RXaXRoRGF0YShtZXRob2QpIHtcbiAgLyplc2xpbnQgZnVuYy1uYW1lczowKi9cbiAgQXhpb3MucHJvdG90eXBlW21ldGhvZF0gPSBmdW5jdGlvbih1cmwsIGRhdGEsIGNvbmZpZykge1xuICAgIHJldHVybiB0aGlzLnJlcXVlc3QodXRpbHMubWVyZ2UoY29uZmlnIHx8IHt9LCB7XG4gICAgICBtZXRob2Q6IG1ldGhvZCxcbiAgICAgIHVybDogdXJsLFxuICAgICAgZGF0YTogZGF0YVxuICAgIH0pKTtcbiAgfTtcbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IEF4aW9zO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgdXRpbHMgPSByZXF1aXJlKCcuLy4uL3V0aWxzJyk7XG5cbmZ1bmN0aW9uIEludGVyY2VwdG9yTWFuYWdlcigpIHtcbiAgdGhpcy5oYW5kbGVycyA9IFtdO1xufVxuXG4vKipcbiAqIEFkZCBhIG5ldyBpbnRlcmNlcHRvciB0byB0aGUgc3RhY2tcbiAqXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmdWxmaWxsZWQgVGhlIGZ1bmN0aW9uIHRvIGhhbmRsZSBgdGhlbmAgZm9yIGEgYFByb21pc2VgXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSByZWplY3RlZCBUaGUgZnVuY3Rpb24gdG8gaGFuZGxlIGByZWplY3RgIGZvciBhIGBQcm9taXNlYFxuICpcbiAqIEByZXR1cm4ge051bWJlcn0gQW4gSUQgdXNlZCB0byByZW1vdmUgaW50ZXJjZXB0b3IgbGF0ZXJcbiAqL1xuSW50ZXJjZXB0b3JNYW5hZ2VyLnByb3RvdHlwZS51c2UgPSBmdW5jdGlvbiB1c2UoZnVsZmlsbGVkLCByZWplY3RlZCkge1xuICB0aGlzLmhhbmRsZXJzLnB1c2goe1xuICAgIGZ1bGZpbGxlZDogZnVsZmlsbGVkLFxuICAgIHJlamVjdGVkOiByZWplY3RlZFxuICB9KTtcbiAgcmV0dXJuIHRoaXMuaGFuZGxlcnMubGVuZ3RoIC0gMTtcbn07XG5cbi8qKlxuICogUmVtb3ZlIGFuIGludGVyY2VwdG9yIGZyb20gdGhlIHN0YWNrXG4gKlxuICogQHBhcmFtIHtOdW1iZXJ9IGlkIFRoZSBJRCB0aGF0IHdhcyByZXR1cm5lZCBieSBgdXNlYFxuICovXG5JbnRlcmNlcHRvck1hbmFnZXIucHJvdG90eXBlLmVqZWN0ID0gZnVuY3Rpb24gZWplY3QoaWQpIHtcbiAgaWYgKHRoaXMuaGFuZGxlcnNbaWRdKSB7XG4gICAgdGhpcy5oYW5kbGVyc1tpZF0gPSBudWxsO1xuICB9XG59O1xuXG4vKipcbiAqIEl0ZXJhdGUgb3ZlciBhbGwgdGhlIHJlZ2lzdGVyZWQgaW50ZXJjZXB0b3JzXG4gKlxuICogVGhpcyBtZXRob2QgaXMgcGFydGljdWxhcmx5IHVzZWZ1bCBmb3Igc2tpcHBpbmcgb3ZlciBhbnlcbiAqIGludGVyY2VwdG9ycyB0aGF0IG1heSBoYXZlIGJlY29tZSBgbnVsbGAgY2FsbGluZyBgZWplY3RgLlxuICpcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZuIFRoZSBmdW5jdGlvbiB0byBjYWxsIGZvciBlYWNoIGludGVyY2VwdG9yXG4gKi9cbkludGVyY2VwdG9yTWFuYWdlci5wcm90b3R5cGUuZm9yRWFjaCA9IGZ1bmN0aW9uIGZvckVhY2goZm4pIHtcbiAgdXRpbHMuZm9yRWFjaCh0aGlzLmhhbmRsZXJzLCBmdW5jdGlvbiBmb3JFYWNoSGFuZGxlcihoKSB7XG4gICAgaWYgKGggIT09IG51bGwpIHtcbiAgICAgIGZuKGgpO1xuICAgIH1cbiAgfSk7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IEludGVyY2VwdG9yTWFuYWdlcjtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIHV0aWxzID0gcmVxdWlyZSgnLi8uLi91dGlscycpO1xudmFyIHRyYW5zZm9ybURhdGEgPSByZXF1aXJlKCcuL3RyYW5zZm9ybURhdGEnKTtcbnZhciBpc0NhbmNlbCA9IHJlcXVpcmUoJy4uL2NhbmNlbC9pc0NhbmNlbCcpO1xudmFyIGRlZmF1bHRzID0gcmVxdWlyZSgnLi4vZGVmYXVsdHMnKTtcblxuLyoqXG4gKiBUaHJvd3MgYSBgQ2FuY2VsYCBpZiBjYW5jZWxsYXRpb24gaGFzIGJlZW4gcmVxdWVzdGVkLlxuICovXG5mdW5jdGlvbiB0aHJvd0lmQ2FuY2VsbGF0aW9uUmVxdWVzdGVkKGNvbmZpZykge1xuICBpZiAoY29uZmlnLmNhbmNlbFRva2VuKSB7XG4gICAgY29uZmlnLmNhbmNlbFRva2VuLnRocm93SWZSZXF1ZXN0ZWQoKTtcbiAgfVxufVxuXG4vKipcbiAqIERpc3BhdGNoIGEgcmVxdWVzdCB0byB0aGUgc2VydmVyIHVzaW5nIHRoZSBjb25maWd1cmVkIGFkYXB0ZXIuXG4gKlxuICogQHBhcmFtIHtvYmplY3R9IGNvbmZpZyBUaGUgY29uZmlnIHRoYXQgaXMgdG8gYmUgdXNlZCBmb3IgdGhlIHJlcXVlc3RcbiAqIEByZXR1cm5zIHtQcm9taXNlfSBUaGUgUHJvbWlzZSB0byBiZSBmdWxmaWxsZWRcbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBkaXNwYXRjaFJlcXVlc3QoY29uZmlnKSB7XG4gIHRocm93SWZDYW5jZWxsYXRpb25SZXF1ZXN0ZWQoY29uZmlnKTtcblxuICAvLyBFbnN1cmUgaGVhZGVycyBleGlzdFxuICBjb25maWcuaGVhZGVycyA9IGNvbmZpZy5oZWFkZXJzIHx8IHt9O1xuXG4gIC8vIFRyYW5zZm9ybSByZXF1ZXN0IGRhdGFcbiAgY29uZmlnLmRhdGEgPSB0cmFuc2Zvcm1EYXRhKFxuICAgIGNvbmZpZy5kYXRhLFxuICAgIGNvbmZpZy5oZWFkZXJzLFxuICAgIGNvbmZpZy50cmFuc2Zvcm1SZXF1ZXN0XG4gICk7XG5cbiAgLy8gRmxhdHRlbiBoZWFkZXJzXG4gIGNvbmZpZy5oZWFkZXJzID0gdXRpbHMubWVyZ2UoXG4gICAgY29uZmlnLmhlYWRlcnMuY29tbW9uIHx8IHt9LFxuICAgIGNvbmZpZy5oZWFkZXJzW2NvbmZpZy5tZXRob2RdIHx8IHt9LFxuICAgIGNvbmZpZy5oZWFkZXJzXG4gICk7XG5cbiAgdXRpbHMuZm9yRWFjaChcbiAgICBbJ2RlbGV0ZScsICdnZXQnLCAnaGVhZCcsICdwb3N0JywgJ3B1dCcsICdwYXRjaCcsICdjb21tb24nXSxcbiAgICBmdW5jdGlvbiBjbGVhbkhlYWRlckNvbmZpZyhtZXRob2QpIHtcbiAgICAgIGRlbGV0ZSBjb25maWcuaGVhZGVyc1ttZXRob2RdO1xuICAgIH1cbiAgKTtcblxuICB2YXIgYWRhcHRlciA9IGNvbmZpZy5hZGFwdGVyIHx8IGRlZmF1bHRzLmFkYXB0ZXI7XG5cbiAgcmV0dXJuIGFkYXB0ZXIoY29uZmlnKS50aGVuKGZ1bmN0aW9uIG9uQWRhcHRlclJlc29sdXRpb24ocmVzcG9uc2UpIHtcbiAgICB0aHJvd0lmQ2FuY2VsbGF0aW9uUmVxdWVzdGVkKGNvbmZpZyk7XG5cbiAgICAvLyBUcmFuc2Zvcm0gcmVzcG9uc2UgZGF0YVxuICAgIHJlc3BvbnNlLmRhdGEgPSB0cmFuc2Zvcm1EYXRhKFxuICAgICAgcmVzcG9uc2UuZGF0YSxcbiAgICAgIHJlc3BvbnNlLmhlYWRlcnMsXG4gICAgICBjb25maWcudHJhbnNmb3JtUmVzcG9uc2VcbiAgICApO1xuXG4gICAgcmV0dXJuIHJlc3BvbnNlO1xuICB9LCBmdW5jdGlvbiBvbkFkYXB0ZXJSZWplY3Rpb24ocmVhc29uKSB7XG4gICAgaWYgKCFpc0NhbmNlbChyZWFzb24pKSB7XG4gICAgICB0aHJvd0lmQ2FuY2VsbGF0aW9uUmVxdWVzdGVkKGNvbmZpZyk7XG5cbiAgICAgIC8vIFRyYW5zZm9ybSByZXNwb25zZSBkYXRhXG4gICAgICBpZiAocmVhc29uICYmIHJlYXNvbi5yZXNwb25zZSkge1xuICAgICAgICByZWFzb24ucmVzcG9uc2UuZGF0YSA9IHRyYW5zZm9ybURhdGEoXG4gICAgICAgICAgcmVhc29uLnJlc3BvbnNlLmRhdGEsXG4gICAgICAgICAgcmVhc29uLnJlc3BvbnNlLmhlYWRlcnMsXG4gICAgICAgICAgY29uZmlnLnRyYW5zZm9ybVJlc3BvbnNlXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIFByb21pc2UucmVqZWN0KHJlYXNvbik7XG4gIH0pO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIHV0aWxzID0gcmVxdWlyZSgnLi8uLi91dGlscycpO1xuXG4vKipcbiAqIFRyYW5zZm9ybSB0aGUgZGF0YSBmb3IgYSByZXF1ZXN0IG9yIGEgcmVzcG9uc2VcbiAqXG4gKiBAcGFyYW0ge09iamVjdHxTdHJpbmd9IGRhdGEgVGhlIGRhdGEgdG8gYmUgdHJhbnNmb3JtZWRcbiAqIEBwYXJhbSB7QXJyYXl9IGhlYWRlcnMgVGhlIGhlYWRlcnMgZm9yIHRoZSByZXF1ZXN0IG9yIHJlc3BvbnNlXG4gKiBAcGFyYW0ge0FycmF5fEZ1bmN0aW9ufSBmbnMgQSBzaW5nbGUgZnVuY3Rpb24gb3IgQXJyYXkgb2YgZnVuY3Rpb25zXG4gKiBAcmV0dXJucyB7Kn0gVGhlIHJlc3VsdGluZyB0cmFuc2Zvcm1lZCBkYXRhXG4gKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gdHJhbnNmb3JtRGF0YShkYXRhLCBoZWFkZXJzLCBmbnMpIHtcbiAgLyplc2xpbnQgbm8tcGFyYW0tcmVhc3NpZ246MCovXG4gIHV0aWxzLmZvckVhY2goZm5zLCBmdW5jdGlvbiB0cmFuc2Zvcm0oZm4pIHtcbiAgICBkYXRhID0gZm4oZGF0YSwgaGVhZGVycyk7XG4gIH0pO1xuXG4gIHJldHVybiBkYXRhO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIHV0aWxzID0gcmVxdWlyZSgnLi4vdXRpbHMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBub3JtYWxpemVIZWFkZXJOYW1lKGhlYWRlcnMsIG5vcm1hbGl6ZWROYW1lKSB7XG4gIHV0aWxzLmZvckVhY2goaGVhZGVycywgZnVuY3Rpb24gcHJvY2Vzc0hlYWRlcih2YWx1ZSwgbmFtZSkge1xuICAgIGlmIChuYW1lICE9PSBub3JtYWxpemVkTmFtZSAmJiBuYW1lLnRvVXBwZXJDYXNlKCkgPT09IG5vcm1hbGl6ZWROYW1lLnRvVXBwZXJDYXNlKCkpIHtcbiAgICAgIGhlYWRlcnNbbm9ybWFsaXplZE5hbWVdID0gdmFsdWU7XG4gICAgICBkZWxldGUgaGVhZGVyc1tuYW1lXTtcbiAgICB9XG4gIH0pO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIHV0aWxzID0gcmVxdWlyZSgnLi8uLi91dGlscycpO1xudmFyIHNldHRsZSA9IHJlcXVpcmUoJy4vLi4vY29yZS9zZXR0bGUnKTtcbnZhciBidWlsZFVSTCA9IHJlcXVpcmUoJy4vLi4vaGVscGVycy9idWlsZFVSTCcpO1xudmFyIGJ1aWxkRnVsbFBhdGggPSByZXF1aXJlKCcuLi9jb3JlL2J1aWxkRnVsbFBhdGgnKTtcbnZhciBwYXJzZUhlYWRlcnMgPSByZXF1aXJlKCcuLy4uL2hlbHBlcnMvcGFyc2VIZWFkZXJzJyk7XG52YXIgaXNVUkxTYW1lT3JpZ2luID0gcmVxdWlyZSgnLi8uLi9oZWxwZXJzL2lzVVJMU2FtZU9yaWdpbicpO1xudmFyIGNyZWF0ZUVycm9yID0gcmVxdWlyZSgnLi4vY29yZS9jcmVhdGVFcnJvcicpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIHhockFkYXB0ZXIoY29uZmlnKSB7XG4gIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiBkaXNwYXRjaFhoclJlcXVlc3QocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgdmFyIHJlcXVlc3REYXRhID0gY29uZmlnLmRhdGE7XG4gICAgdmFyIHJlcXVlc3RIZWFkZXJzID0gY29uZmlnLmhlYWRlcnM7XG5cbiAgICBpZiAodXRpbHMuaXNGb3JtRGF0YShyZXF1ZXN0RGF0YSkpIHtcbiAgICAgIGRlbGV0ZSByZXF1ZXN0SGVhZGVyc1snQ29udGVudC1UeXBlJ107IC8vIExldCB0aGUgYnJvd3NlciBzZXQgaXRcbiAgICB9XG5cbiAgICB2YXIgcmVxdWVzdCA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xuXG4gICAgLy8gSFRUUCBiYXNpYyBhdXRoZW50aWNhdGlvblxuICAgIGlmIChjb25maWcuYXV0aCkge1xuICAgICAgdmFyIHVzZXJuYW1lID0gY29uZmlnLmF1dGgudXNlcm5hbWUgfHwgJyc7XG4gICAgICB2YXIgcGFzc3dvcmQgPSBjb25maWcuYXV0aC5wYXNzd29yZCB8fCAnJztcbiAgICAgIHJlcXVlc3RIZWFkZXJzLkF1dGhvcml6YXRpb24gPSAnQmFzaWMgJyArIGJ0b2EodXNlcm5hbWUgKyAnOicgKyBwYXNzd29yZCk7XG4gICAgfVxuXG4gICAgdmFyIGZ1bGxQYXRoID0gYnVpbGRGdWxsUGF0aChjb25maWcuYmFzZVVSTCwgY29uZmlnLnVybCk7XG4gICAgcmVxdWVzdC5vcGVuKGNvbmZpZy5tZXRob2QudG9VcHBlckNhc2UoKSwgYnVpbGRVUkwoZnVsbFBhdGgsIGNvbmZpZy5wYXJhbXMsIGNvbmZpZy5wYXJhbXNTZXJpYWxpemVyKSwgdHJ1ZSk7XG5cbiAgICAvLyBTZXQgdGhlIHJlcXVlc3QgdGltZW91dCBpbiBNU1xuICAgIHJlcXVlc3QudGltZW91dCA9IGNvbmZpZy50aW1lb3V0O1xuXG4gICAgLy8gTGlzdGVuIGZvciByZWFkeSBzdGF0ZVxuICAgIHJlcXVlc3Qub25yZWFkeXN0YXRlY2hhbmdlID0gZnVuY3Rpb24gaGFuZGxlTG9hZCgpIHtcbiAgICAgIGlmICghcmVxdWVzdCB8fCByZXF1ZXN0LnJlYWR5U3RhdGUgIT09IDQpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICAvLyBUaGUgcmVxdWVzdCBlcnJvcmVkIG91dCBhbmQgd2UgZGlkbid0IGdldCBhIHJlc3BvbnNlLCB0aGlzIHdpbGwgYmVcbiAgICAgIC8vIGhhbmRsZWQgYnkgb25lcnJvciBpbnN0ZWFkXG4gICAgICAvLyBXaXRoIG9uZSBleGNlcHRpb246IHJlcXVlc3QgdGhhdCB1c2luZyBmaWxlOiBwcm90b2NvbCwgbW9zdCBicm93c2Vyc1xuICAgICAgLy8gd2lsbCByZXR1cm4gc3RhdHVzIGFzIDAgZXZlbiB0aG91Z2ggaXQncyBhIHN1Y2Nlc3NmdWwgcmVxdWVzdFxuICAgICAgaWYgKHJlcXVlc3Quc3RhdHVzID09PSAwICYmICEocmVxdWVzdC5yZXNwb25zZVVSTCAmJiByZXF1ZXN0LnJlc3BvbnNlVVJMLmluZGV4T2YoJ2ZpbGU6JykgPT09IDApKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgLy8gUHJlcGFyZSB0aGUgcmVzcG9uc2VcbiAgICAgIHZhciByZXNwb25zZUhlYWRlcnMgPSAnZ2V0QWxsUmVzcG9uc2VIZWFkZXJzJyBpbiByZXF1ZXN0ID8gcGFyc2VIZWFkZXJzKHJlcXVlc3QuZ2V0QWxsUmVzcG9uc2VIZWFkZXJzKCkpIDogbnVsbDtcbiAgICAgIHZhciByZXNwb25zZURhdGEgPSAhY29uZmlnLnJlc3BvbnNlVHlwZSB8fCBjb25maWcucmVzcG9uc2VUeXBlID09PSAndGV4dCcgPyByZXF1ZXN0LnJlc3BvbnNlVGV4dCA6IHJlcXVlc3QucmVzcG9uc2U7XG4gICAgICB2YXIgcmVzcG9uc2UgPSB7XG4gICAgICAgIGRhdGE6IHJlc3BvbnNlRGF0YSxcbiAgICAgICAgc3RhdHVzOiByZXF1ZXN0LnN0YXR1cyxcbiAgICAgICAgc3RhdHVzVGV4dDogcmVxdWVzdC5zdGF0dXNUZXh0LFxuICAgICAgICBoZWFkZXJzOiByZXNwb25zZUhlYWRlcnMsXG4gICAgICAgIGNvbmZpZzogY29uZmlnLFxuICAgICAgICByZXF1ZXN0OiByZXF1ZXN0XG4gICAgICB9O1xuXG4gICAgICBzZXR0bGUocmVzb2x2ZSwgcmVqZWN0LCByZXNwb25zZSk7XG5cbiAgICAgIC8vIENsZWFuIHVwIHJlcXVlc3RcbiAgICAgIHJlcXVlc3QgPSBudWxsO1xuICAgIH07XG5cbiAgICAvLyBIYW5kbGUgYnJvd3NlciByZXF1ZXN0IGNhbmNlbGxhdGlvbiAoYXMgb3Bwb3NlZCB0byBhIG1hbnVhbCBjYW5jZWxsYXRpb24pXG4gICAgcmVxdWVzdC5vbmFib3J0ID0gZnVuY3Rpb24gaGFuZGxlQWJvcnQoKSB7XG4gICAgICBpZiAoIXJlcXVlc3QpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICByZWplY3QoY3JlYXRlRXJyb3IoJ1JlcXVlc3QgYWJvcnRlZCcsIGNvbmZpZywgJ0VDT05OQUJPUlRFRCcsIHJlcXVlc3QpKTtcblxuICAgICAgLy8gQ2xlYW4gdXAgcmVxdWVzdFxuICAgICAgcmVxdWVzdCA9IG51bGw7XG4gICAgfTtcblxuICAgIC8vIEhhbmRsZSBsb3cgbGV2ZWwgbmV0d29yayBlcnJvcnNcbiAgICByZXF1ZXN0Lm9uZXJyb3IgPSBmdW5jdGlvbiBoYW5kbGVFcnJvcigpIHtcbiAgICAgIC8vIFJlYWwgZXJyb3JzIGFyZSBoaWRkZW4gZnJvbSB1cyBieSB0aGUgYnJvd3NlclxuICAgICAgLy8gb25lcnJvciBzaG91bGQgb25seSBmaXJlIGlmIGl0J3MgYSBuZXR3b3JrIGVycm9yXG4gICAgICByZWplY3QoY3JlYXRlRXJyb3IoJ05ldHdvcmsgRXJyb3InLCBjb25maWcsIG51bGwsIHJlcXVlc3QpKTtcblxuICAgICAgLy8gQ2xlYW4gdXAgcmVxdWVzdFxuICAgICAgcmVxdWVzdCA9IG51bGw7XG4gICAgfTtcblxuICAgIC8vIEhhbmRsZSB0aW1lb3V0XG4gICAgcmVxdWVzdC5vbnRpbWVvdXQgPSBmdW5jdGlvbiBoYW5kbGVUaW1lb3V0KCkge1xuICAgICAgdmFyIHRpbWVvdXRFcnJvck1lc3NhZ2UgPSAndGltZW91dCBvZiAnICsgY29uZmlnLnRpbWVvdXQgKyAnbXMgZXhjZWVkZWQnO1xuICAgICAgaWYgKGNvbmZpZy50aW1lb3V0RXJyb3JNZXNzYWdlKSB7XG4gICAgICAgIHRpbWVvdXRFcnJvck1lc3NhZ2UgPSBjb25maWcudGltZW91dEVycm9yTWVzc2FnZTtcbiAgICAgIH1cbiAgICAgIHJlamVjdChjcmVhdGVFcnJvcih0aW1lb3V0RXJyb3JNZXNzYWdlLCBjb25maWcsICdFQ09OTkFCT1JURUQnLFxuICAgICAgICByZXF1ZXN0KSk7XG5cbiAgICAgIC8vIENsZWFuIHVwIHJlcXVlc3RcbiAgICAgIHJlcXVlc3QgPSBudWxsO1xuICAgIH07XG5cbiAgICAvLyBBZGQgeHNyZiBoZWFkZXJcbiAgICAvLyBUaGlzIGlzIG9ubHkgZG9uZSBpZiBydW5uaW5nIGluIGEgc3RhbmRhcmQgYnJvd3NlciBlbnZpcm9ubWVudC5cbiAgICAvLyBTcGVjaWZpY2FsbHkgbm90IGlmIHdlJ3JlIGluIGEgd2ViIHdvcmtlciwgb3IgcmVhY3QtbmF0aXZlLlxuICAgIGlmICh1dGlscy5pc1N0YW5kYXJkQnJvd3NlckVudigpKSB7XG4gICAgICB2YXIgY29va2llcyA9IHJlcXVpcmUoJy4vLi4vaGVscGVycy9jb29raWVzJyk7XG5cbiAgICAgIC8vIEFkZCB4c3JmIGhlYWRlclxuICAgICAgdmFyIHhzcmZWYWx1ZSA9IChjb25maWcud2l0aENyZWRlbnRpYWxzIHx8IGlzVVJMU2FtZU9yaWdpbihmdWxsUGF0aCkpICYmIGNvbmZpZy54c3JmQ29va2llTmFtZSA/XG4gICAgICAgIGNvb2tpZXMucmVhZChjb25maWcueHNyZkNvb2tpZU5hbWUpIDpcbiAgICAgICAgdW5kZWZpbmVkO1xuXG4gICAgICBpZiAoeHNyZlZhbHVlKSB7XG4gICAgICAgIHJlcXVlc3RIZWFkZXJzW2NvbmZpZy54c3JmSGVhZGVyTmFtZV0gPSB4c3JmVmFsdWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gQWRkIGhlYWRlcnMgdG8gdGhlIHJlcXVlc3RcbiAgICBpZiAoJ3NldFJlcXVlc3RIZWFkZXInIGluIHJlcXVlc3QpIHtcbiAgICAgIHV0aWxzLmZvckVhY2gocmVxdWVzdEhlYWRlcnMsIGZ1bmN0aW9uIHNldFJlcXVlc3RIZWFkZXIodmFsLCBrZXkpIHtcbiAgICAgICAgaWYgKHR5cGVvZiByZXF1ZXN0RGF0YSA9PT0gJ3VuZGVmaW5lZCcgJiYga2V5LnRvTG93ZXJDYXNlKCkgPT09ICdjb250ZW50LXR5cGUnKSB7XG4gICAgICAgICAgLy8gUmVtb3ZlIENvbnRlbnQtVHlwZSBpZiBkYXRhIGlzIHVuZGVmaW5lZFxuICAgICAgICAgIGRlbGV0ZSByZXF1ZXN0SGVhZGVyc1trZXldO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIC8vIE90aGVyd2lzZSBhZGQgaGVhZGVyIHRvIHRoZSByZXF1ZXN0XG4gICAgICAgICAgcmVxdWVzdC5zZXRSZXF1ZXN0SGVhZGVyKGtleSwgdmFsKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgLy8gQWRkIHdpdGhDcmVkZW50aWFscyB0byByZXF1ZXN0IGlmIG5lZWRlZFxuICAgIGlmICghdXRpbHMuaXNVbmRlZmluZWQoY29uZmlnLndpdGhDcmVkZW50aWFscykpIHtcbiAgICAgIHJlcXVlc3Qud2l0aENyZWRlbnRpYWxzID0gISFjb25maWcud2l0aENyZWRlbnRpYWxzO1xuICAgIH1cblxuICAgIC8vIEFkZCByZXNwb25zZVR5cGUgdG8gcmVxdWVzdCBpZiBuZWVkZWRcbiAgICBpZiAoY29uZmlnLnJlc3BvbnNlVHlwZSkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgcmVxdWVzdC5yZXNwb25zZVR5cGUgPSBjb25maWcucmVzcG9uc2VUeXBlO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBFeHBlY3RlZCBET01FeGNlcHRpb24gdGhyb3duIGJ5IGJyb3dzZXJzIG5vdCBjb21wYXRpYmxlIFhNTEh0dHBSZXF1ZXN0IExldmVsIDIuXG4gICAgICAgIC8vIEJ1dCwgdGhpcyBjYW4gYmUgc3VwcHJlc3NlZCBmb3IgJ2pzb24nIHR5cGUgYXMgaXQgY2FuIGJlIHBhcnNlZCBieSBkZWZhdWx0ICd0cmFuc2Zvcm1SZXNwb25zZScgZnVuY3Rpb24uXG4gICAgICAgIGlmIChjb25maWcucmVzcG9uc2VUeXBlICE9PSAnanNvbicpIHtcbiAgICAgICAgICB0aHJvdyBlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gSGFuZGxlIHByb2dyZXNzIGlmIG5lZWRlZFxuICAgIGlmICh0eXBlb2YgY29uZmlnLm9uRG93bmxvYWRQcm9ncmVzcyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgcmVxdWVzdC5hZGRFdmVudExpc3RlbmVyKCdwcm9ncmVzcycsIGNvbmZpZy5vbkRvd25sb2FkUHJvZ3Jlc3MpO1xuICAgIH1cblxuICAgIC8vIE5vdCBhbGwgYnJvd3NlcnMgc3VwcG9ydCB1cGxvYWQgZXZlbnRzXG4gICAgaWYgKHR5cGVvZiBjb25maWcub25VcGxvYWRQcm9ncmVzcyA9PT0gJ2Z1bmN0aW9uJyAmJiByZXF1ZXN0LnVwbG9hZCkge1xuICAgICAgcmVxdWVzdC51cGxvYWQuYWRkRXZlbnRMaXN0ZW5lcigncHJvZ3Jlc3MnLCBjb25maWcub25VcGxvYWRQcm9ncmVzcyk7XG4gICAgfVxuXG4gICAgaWYgKGNvbmZpZy5jYW5jZWxUb2tlbikge1xuICAgICAgLy8gSGFuZGxlIGNhbmNlbGxhdGlvblxuICAgICAgY29uZmlnLmNhbmNlbFRva2VuLnByb21pc2UudGhlbihmdW5jdGlvbiBvbkNhbmNlbGVkKGNhbmNlbCkge1xuICAgICAgICBpZiAoIXJlcXVlc3QpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICByZXF1ZXN0LmFib3J0KCk7XG4gICAgICAgIHJlamVjdChjYW5jZWwpO1xuICAgICAgICAvLyBDbGVhbiB1cCByZXF1ZXN0XG4gICAgICAgIHJlcXVlc3QgPSBudWxsO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWYgKHJlcXVlc3REYXRhID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHJlcXVlc3REYXRhID0gbnVsbDtcbiAgICB9XG5cbiAgICAvLyBTZW5kIHRoZSByZXF1ZXN0XG4gICAgcmVxdWVzdC5zZW5kKHJlcXVlc3REYXRhKTtcbiAgfSk7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG4vKipcbiAqIERldGVybWluZXMgd2hldGhlciB0aGUgc3BlY2lmaWVkIFVSTCBpcyBhYnNvbHV0ZVxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSB1cmwgVGhlIFVSTCB0byB0ZXN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB0aGUgc3BlY2lmaWVkIFVSTCBpcyBhYnNvbHV0ZSwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gaXNBYnNvbHV0ZVVSTCh1cmwpIHtcbiAgLy8gQSBVUkwgaXMgY29uc2lkZXJlZCBhYnNvbHV0ZSBpZiBpdCBiZWdpbnMgd2l0aCBcIjxzY2hlbWU+Oi8vXCIgb3IgXCIvL1wiIChwcm90b2NvbC1yZWxhdGl2ZSBVUkwpLlxuICAvLyBSRkMgMzk4NiBkZWZpbmVzIHNjaGVtZSBuYW1lIGFzIGEgc2VxdWVuY2Ugb2YgY2hhcmFjdGVycyBiZWdpbm5pbmcgd2l0aCBhIGxldHRlciBhbmQgZm9sbG93ZWRcbiAgLy8gYnkgYW55IGNvbWJpbmF0aW9uIG9mIGxldHRlcnMsIGRpZ2l0cywgcGx1cywgcGVyaW9kLCBvciBoeXBoZW4uXG4gIHJldHVybiAvXihbYS16XVthLXpcXGRcXCtcXC1cXC5dKjopP1xcL1xcLy9pLnRlc3QodXJsKTtcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbi8qKlxuICogQ3JlYXRlcyBhIG5ldyBVUkwgYnkgY29tYmluaW5nIHRoZSBzcGVjaWZpZWQgVVJMc1xuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBiYXNlVVJMIFRoZSBiYXNlIFVSTFxuICogQHBhcmFtIHtzdHJpbmd9IHJlbGF0aXZlVVJMIFRoZSByZWxhdGl2ZSBVUkxcbiAqIEByZXR1cm5zIHtzdHJpbmd9IFRoZSBjb21iaW5lZCBVUkxcbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBjb21iaW5lVVJMcyhiYXNlVVJMLCByZWxhdGl2ZVVSTCkge1xuICByZXR1cm4gcmVsYXRpdmVVUkxcbiAgICA/IGJhc2VVUkwucmVwbGFjZSgvXFwvKyQvLCAnJykgKyAnLycgKyByZWxhdGl2ZVVSTC5yZXBsYWNlKC9eXFwvKy8sICcnKVxuICAgIDogYmFzZVVSTDtcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciB1dGlscyA9IHJlcXVpcmUoJy4vLi4vdXRpbHMnKTtcblxuLy8gSGVhZGVycyB3aG9zZSBkdXBsaWNhdGVzIGFyZSBpZ25vcmVkIGJ5IG5vZGVcbi8vIGMuZi4gaHR0cHM6Ly9ub2RlanMub3JnL2FwaS9odHRwLmh0bWwjaHR0cF9tZXNzYWdlX2hlYWRlcnNcbnZhciBpZ25vcmVEdXBsaWNhdGVPZiA9IFtcbiAgJ2FnZScsICdhdXRob3JpemF0aW9uJywgJ2NvbnRlbnQtbGVuZ3RoJywgJ2NvbnRlbnQtdHlwZScsICdldGFnJyxcbiAgJ2V4cGlyZXMnLCAnZnJvbScsICdob3N0JywgJ2lmLW1vZGlmaWVkLXNpbmNlJywgJ2lmLXVubW9kaWZpZWQtc2luY2UnLFxuICAnbGFzdC1tb2RpZmllZCcsICdsb2NhdGlvbicsICdtYXgtZm9yd2FyZHMnLCAncHJveHktYXV0aG9yaXphdGlvbicsXG4gICdyZWZlcmVyJywgJ3JldHJ5LWFmdGVyJywgJ3VzZXItYWdlbnQnXG5dO1xuXG4vKipcbiAqIFBhcnNlIGhlYWRlcnMgaW50byBhbiBvYmplY3RcbiAqXG4gKiBgYGBcbiAqIERhdGU6IFdlZCwgMjcgQXVnIDIwMTQgMDg6NTg6NDkgR01UXG4gKiBDb250ZW50LVR5cGU6IGFwcGxpY2F0aW9uL2pzb25cbiAqIENvbm5lY3Rpb246IGtlZXAtYWxpdmVcbiAqIFRyYW5zZmVyLUVuY29kaW5nOiBjaHVua2VkXG4gKiBgYGBcbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gaGVhZGVycyBIZWFkZXJzIG5lZWRpbmcgdG8gYmUgcGFyc2VkXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBIZWFkZXJzIHBhcnNlZCBpbnRvIGFuIG9iamVjdFxuICovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIHBhcnNlSGVhZGVycyhoZWFkZXJzKSB7XG4gIHZhciBwYXJzZWQgPSB7fTtcbiAgdmFyIGtleTtcbiAgdmFyIHZhbDtcbiAgdmFyIGk7XG5cbiAgaWYgKCFoZWFkZXJzKSB7IHJldHVybiBwYXJzZWQ7IH1cblxuICB1dGlscy5mb3JFYWNoKGhlYWRlcnMuc3BsaXQoJ1xcbicpLCBmdW5jdGlvbiBwYXJzZXIobGluZSkge1xuICAgIGkgPSBsaW5lLmluZGV4T2YoJzonKTtcbiAgICBrZXkgPSB1dGlscy50cmltKGxpbmUuc3Vic3RyKDAsIGkpKS50b0xvd2VyQ2FzZSgpO1xuICAgIHZhbCA9IHV0aWxzLnRyaW0obGluZS5zdWJzdHIoaSArIDEpKTtcblxuICAgIGlmIChrZXkpIHtcbiAgICAgIGlmIChwYXJzZWRba2V5XSAmJiBpZ25vcmVEdXBsaWNhdGVPZi5pbmRleE9mKGtleSkgPj0gMCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBpZiAoa2V5ID09PSAnc2V0LWNvb2tpZScpIHtcbiAgICAgICAgcGFyc2VkW2tleV0gPSAocGFyc2VkW2tleV0gPyBwYXJzZWRba2V5XSA6IFtdKS5jb25jYXQoW3ZhbF0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcGFyc2VkW2tleV0gPSBwYXJzZWRba2V5XSA/IHBhcnNlZFtrZXldICsgJywgJyArIHZhbCA6IHZhbDtcbiAgICAgIH1cbiAgICB9XG4gIH0pO1xuXG4gIHJldHVybiBwYXJzZWQ7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgdXRpbHMgPSByZXF1aXJlKCcuLy4uL3V0aWxzJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gKFxuICB1dGlscy5pc1N0YW5kYXJkQnJvd3NlckVudigpID9cblxuICAvLyBTdGFuZGFyZCBicm93c2VyIGVudnMgaGF2ZSBmdWxsIHN1cHBvcnQgb2YgdGhlIEFQSXMgbmVlZGVkIHRvIHRlc3RcbiAgLy8gd2hldGhlciB0aGUgcmVxdWVzdCBVUkwgaXMgb2YgdGhlIHNhbWUgb3JpZ2luIGFzIGN1cnJlbnQgbG9jYXRpb24uXG4gICAgKGZ1bmN0aW9uIHN0YW5kYXJkQnJvd3NlckVudigpIHtcbiAgICAgIHZhciBtc2llID0gLyhtc2llfHRyaWRlbnQpL2kudGVzdChuYXZpZ2F0b3IudXNlckFnZW50KTtcbiAgICAgIHZhciB1cmxQYXJzaW5nTm9kZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcbiAgICAgIHZhciBvcmlnaW5VUkw7XG5cbiAgICAgIC8qKlxuICAgICogUGFyc2UgYSBVUkwgdG8gZGlzY292ZXIgaXQncyBjb21wb25lbnRzXG4gICAgKlxuICAgICogQHBhcmFtIHtTdHJpbmd9IHVybCBUaGUgVVJMIHRvIGJlIHBhcnNlZFxuICAgICogQHJldHVybnMge09iamVjdH1cbiAgICAqL1xuICAgICAgZnVuY3Rpb24gcmVzb2x2ZVVSTCh1cmwpIHtcbiAgICAgICAgdmFyIGhyZWYgPSB1cmw7XG5cbiAgICAgICAgaWYgKG1zaWUpIHtcbiAgICAgICAgLy8gSUUgbmVlZHMgYXR0cmlidXRlIHNldCB0d2ljZSB0byBub3JtYWxpemUgcHJvcGVydGllc1xuICAgICAgICAgIHVybFBhcnNpbmdOb2RlLnNldEF0dHJpYnV0ZSgnaHJlZicsIGhyZWYpO1xuICAgICAgICAgIGhyZWYgPSB1cmxQYXJzaW5nTm9kZS5ocmVmO1xuICAgICAgICB9XG5cbiAgICAgICAgdXJsUGFyc2luZ05vZGUuc2V0QXR0cmlidXRlKCdocmVmJywgaHJlZik7XG5cbiAgICAgICAgLy8gdXJsUGFyc2luZ05vZGUgcHJvdmlkZXMgdGhlIFVybFV0aWxzIGludGVyZmFjZSAtIGh0dHA6Ly91cmwuc3BlYy53aGF0d2cub3JnLyN1cmx1dGlsc1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIGhyZWY6IHVybFBhcnNpbmdOb2RlLmhyZWYsXG4gICAgICAgICAgcHJvdG9jb2w6IHVybFBhcnNpbmdOb2RlLnByb3RvY29sID8gdXJsUGFyc2luZ05vZGUucHJvdG9jb2wucmVwbGFjZSgvOiQvLCAnJykgOiAnJyxcbiAgICAgICAgICBob3N0OiB1cmxQYXJzaW5nTm9kZS5ob3N0LFxuICAgICAgICAgIHNlYXJjaDogdXJsUGFyc2luZ05vZGUuc2VhcmNoID8gdXJsUGFyc2luZ05vZGUuc2VhcmNoLnJlcGxhY2UoL15cXD8vLCAnJykgOiAnJyxcbiAgICAgICAgICBoYXNoOiB1cmxQYXJzaW5nTm9kZS5oYXNoID8gdXJsUGFyc2luZ05vZGUuaGFzaC5yZXBsYWNlKC9eIy8sICcnKSA6ICcnLFxuICAgICAgICAgIGhvc3RuYW1lOiB1cmxQYXJzaW5nTm9kZS5ob3N0bmFtZSxcbiAgICAgICAgICBwb3J0OiB1cmxQYXJzaW5nTm9kZS5wb3J0LFxuICAgICAgICAgIHBhdGhuYW1lOiAodXJsUGFyc2luZ05vZGUucGF0aG5hbWUuY2hhckF0KDApID09PSAnLycpID9cbiAgICAgICAgICAgIHVybFBhcnNpbmdOb2RlLnBhdGhuYW1lIDpcbiAgICAgICAgICAgICcvJyArIHVybFBhcnNpbmdOb2RlLnBhdGhuYW1lXG4gICAgICAgIH07XG4gICAgICB9XG5cbiAgICAgIG9yaWdpblVSTCA9IHJlc29sdmVVUkwod2luZG93LmxvY2F0aW9uLmhyZWYpO1xuXG4gICAgICAvKipcbiAgICAqIERldGVybWluZSBpZiBhIFVSTCBzaGFyZXMgdGhlIHNhbWUgb3JpZ2luIGFzIHRoZSBjdXJyZW50IGxvY2F0aW9uXG4gICAgKlxuICAgICogQHBhcmFtIHtTdHJpbmd9IHJlcXVlc3RVUkwgVGhlIFVSTCB0byB0ZXN0XG4gICAgKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiBVUkwgc2hhcmVzIHRoZSBzYW1lIG9yaWdpbiwgb3RoZXJ3aXNlIGZhbHNlXG4gICAgKi9cbiAgICAgIHJldHVybiBmdW5jdGlvbiBpc1VSTFNhbWVPcmlnaW4ocmVxdWVzdFVSTCkge1xuICAgICAgICB2YXIgcGFyc2VkID0gKHV0aWxzLmlzU3RyaW5nKHJlcXVlc3RVUkwpKSA/IHJlc29sdmVVUkwocmVxdWVzdFVSTCkgOiByZXF1ZXN0VVJMO1xuICAgICAgICByZXR1cm4gKHBhcnNlZC5wcm90b2NvbCA9PT0gb3JpZ2luVVJMLnByb3RvY29sICYmXG4gICAgICAgICAgICBwYXJzZWQuaG9zdCA9PT0gb3JpZ2luVVJMLmhvc3QpO1xuICAgICAgfTtcbiAgICB9KSgpIDpcblxuICAvLyBOb24gc3RhbmRhcmQgYnJvd3NlciBlbnZzICh3ZWIgd29ya2VycywgcmVhY3QtbmF0aXZlKSBsYWNrIG5lZWRlZCBzdXBwb3J0LlxuICAgIChmdW5jdGlvbiBub25TdGFuZGFyZEJyb3dzZXJFbnYoKSB7XG4gICAgICByZXR1cm4gZnVuY3Rpb24gaXNVUkxTYW1lT3JpZ2luKCkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH07XG4gICAgfSkoKVxuKTtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIHV0aWxzID0gcmVxdWlyZSgnLi8uLi91dGlscycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IChcbiAgdXRpbHMuaXNTdGFuZGFyZEJyb3dzZXJFbnYoKSA/XG5cbiAgLy8gU3RhbmRhcmQgYnJvd3NlciBlbnZzIHN1cHBvcnQgZG9jdW1lbnQuY29va2llXG4gICAgKGZ1bmN0aW9uIHN0YW5kYXJkQnJvd3NlckVudigpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHdyaXRlOiBmdW5jdGlvbiB3cml0ZShuYW1lLCB2YWx1ZSwgZXhwaXJlcywgcGF0aCwgZG9tYWluLCBzZWN1cmUpIHtcbiAgICAgICAgICB2YXIgY29va2llID0gW107XG4gICAgICAgICAgY29va2llLnB1c2gobmFtZSArICc9JyArIGVuY29kZVVSSUNvbXBvbmVudCh2YWx1ZSkpO1xuXG4gICAgICAgICAgaWYgKHV0aWxzLmlzTnVtYmVyKGV4cGlyZXMpKSB7XG4gICAgICAgICAgICBjb29raWUucHVzaCgnZXhwaXJlcz0nICsgbmV3IERhdGUoZXhwaXJlcykudG9HTVRTdHJpbmcoKSk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKHV0aWxzLmlzU3RyaW5nKHBhdGgpKSB7XG4gICAgICAgICAgICBjb29raWUucHVzaCgncGF0aD0nICsgcGF0aCk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKHV0aWxzLmlzU3RyaW5nKGRvbWFpbikpIHtcbiAgICAgICAgICAgIGNvb2tpZS5wdXNoKCdkb21haW49JyArIGRvbWFpbik7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKHNlY3VyZSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgY29va2llLnB1c2goJ3NlY3VyZScpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGRvY3VtZW50LmNvb2tpZSA9IGNvb2tpZS5qb2luKCc7ICcpO1xuICAgICAgICB9LFxuXG4gICAgICAgIHJlYWQ6IGZ1bmN0aW9uIHJlYWQobmFtZSkge1xuICAgICAgICAgIHZhciBtYXRjaCA9IGRvY3VtZW50LmNvb2tpZS5tYXRjaChuZXcgUmVnRXhwKCcoXnw7XFxcXHMqKSgnICsgbmFtZSArICcpPShbXjtdKiknKSk7XG4gICAgICAgICAgcmV0dXJuIChtYXRjaCA/IGRlY29kZVVSSUNvbXBvbmVudChtYXRjaFszXSkgOiBudWxsKTtcbiAgICAgICAgfSxcblxuICAgICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZShuYW1lKSB7XG4gICAgICAgICAgdGhpcy53cml0ZShuYW1lLCAnJywgRGF0ZS5ub3coKSAtIDg2NDAwMDAwKTtcbiAgICAgICAgfVxuICAgICAgfTtcbiAgICB9KSgpIDpcblxuICAvLyBOb24gc3RhbmRhcmQgYnJvd3NlciBlbnYgKHdlYiB3b3JrZXJzLCByZWFjdC1uYXRpdmUpIGxhY2sgbmVlZGVkIHN1cHBvcnQuXG4gICAgKGZ1bmN0aW9uIG5vblN0YW5kYXJkQnJvd3NlckVudigpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHdyaXRlOiBmdW5jdGlvbiB3cml0ZSgpIHt9LFxuICAgICAgICByZWFkOiBmdW5jdGlvbiByZWFkKCkgeyByZXR1cm4gbnVsbDsgfSxcbiAgICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgICAgfTtcbiAgICB9KSgpXG4pO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgdXRpbHMgPSByZXF1aXJlKCcuLy4uL3V0aWxzJyk7XG52YXIgc2V0dGxlID0gcmVxdWlyZSgnLi8uLi9jb3JlL3NldHRsZScpO1xudmFyIGJ1aWxkRnVsbFBhdGggPSByZXF1aXJlKCcuLi9jb3JlL2J1aWxkRnVsbFBhdGgnKTtcbnZhciBidWlsZFVSTCA9IHJlcXVpcmUoJy4vLi4vaGVscGVycy9idWlsZFVSTCcpO1xudmFyIGh0dHAgPSByZXF1aXJlKCdodHRwJyk7XG52YXIgaHR0cHMgPSByZXF1aXJlKCdodHRwcycpO1xudmFyIGh0dHBGb2xsb3cgPSByZXF1aXJlKCdmb2xsb3ctcmVkaXJlY3RzJykuaHR0cDtcbnZhciBodHRwc0ZvbGxvdyA9IHJlcXVpcmUoJ2ZvbGxvdy1yZWRpcmVjdHMnKS5odHRwcztcbnZhciB1cmwgPSByZXF1aXJlKCd1cmwnKTtcbnZhciB6bGliID0gcmVxdWlyZSgnemxpYicpO1xudmFyIHBrZyA9IHJlcXVpcmUoJy4vLi4vLi4vcGFja2FnZS5qc29uJyk7XG52YXIgY3JlYXRlRXJyb3IgPSByZXF1aXJlKCcuLi9jb3JlL2NyZWF0ZUVycm9yJyk7XG52YXIgZW5oYW5jZUVycm9yID0gcmVxdWlyZSgnLi4vY29yZS9lbmhhbmNlRXJyb3InKTtcblxudmFyIGlzSHR0cHMgPSAvaHR0cHM6Py87XG5cbi8qZXNsaW50IGNvbnNpc3RlbnQtcmV0dXJuOjAqL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBodHRwQWRhcHRlcihjb25maWcpIHtcbiAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIGRpc3BhdGNoSHR0cFJlcXVlc3QocmVzb2x2ZVByb21pc2UsIHJlamVjdFByb21pc2UpIHtcbiAgICB2YXIgcmVzb2x2ZSA9IGZ1bmN0aW9uIHJlc29sdmUodmFsdWUpIHtcbiAgICAgIHJlc29sdmVQcm9taXNlKHZhbHVlKTtcbiAgICB9O1xuICAgIHZhciByZWplY3QgPSBmdW5jdGlvbiByZWplY3QodmFsdWUpIHtcbiAgICAgIHJlamVjdFByb21pc2UodmFsdWUpO1xuICAgIH07XG4gICAgdmFyIGRhdGEgPSBjb25maWcuZGF0YTtcbiAgICB2YXIgaGVhZGVycyA9IGNvbmZpZy5oZWFkZXJzO1xuXG4gICAgLy8gU2V0IFVzZXItQWdlbnQgKHJlcXVpcmVkIGJ5IHNvbWUgc2VydmVycylcbiAgICAvLyBPbmx5IHNldCBoZWFkZXIgaWYgaXQgaGFzbid0IGJlZW4gc2V0IGluIGNvbmZpZ1xuICAgIC8vIFNlZSBodHRwczovL2dpdGh1Yi5jb20vYXhpb3MvYXhpb3MvaXNzdWVzLzY5XG4gICAgaWYgKCFoZWFkZXJzWydVc2VyLUFnZW50J10gJiYgIWhlYWRlcnNbJ3VzZXItYWdlbnQnXSkge1xuICAgICAgaGVhZGVyc1snVXNlci1BZ2VudCddID0gJ2F4aW9zLycgKyBwa2cudmVyc2lvbjtcbiAgICB9XG5cbiAgICBpZiAoZGF0YSAmJiAhdXRpbHMuaXNTdHJlYW0oZGF0YSkpIHtcbiAgICAgIGlmIChCdWZmZXIuaXNCdWZmZXIoZGF0YSkpIHtcbiAgICAgICAgLy8gTm90aGluZyB0byBkby4uLlxuICAgICAgfSBlbHNlIGlmICh1dGlscy5pc0FycmF5QnVmZmVyKGRhdGEpKSB7XG4gICAgICAgIGRhdGEgPSBCdWZmZXIuZnJvbShuZXcgVWludDhBcnJheShkYXRhKSk7XG4gICAgICB9IGVsc2UgaWYgKHV0aWxzLmlzU3RyaW5nKGRhdGEpKSB7XG4gICAgICAgIGRhdGEgPSBCdWZmZXIuZnJvbShkYXRhLCAndXRmLTgnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiByZWplY3QoY3JlYXRlRXJyb3IoXG4gICAgICAgICAgJ0RhdGEgYWZ0ZXIgdHJhbnNmb3JtYXRpb24gbXVzdCBiZSBhIHN0cmluZywgYW4gQXJyYXlCdWZmZXIsIGEgQnVmZmVyLCBvciBhIFN0cmVhbScsXG4gICAgICAgICAgY29uZmlnXG4gICAgICAgICkpO1xuICAgICAgfVxuXG4gICAgICAvLyBBZGQgQ29udGVudC1MZW5ndGggaGVhZGVyIGlmIGRhdGEgZXhpc3RzXG4gICAgICBoZWFkZXJzWydDb250ZW50LUxlbmd0aCddID0gZGF0YS5sZW5ndGg7XG4gICAgfVxuXG4gICAgLy8gSFRUUCBiYXNpYyBhdXRoZW50aWNhdGlvblxuICAgIHZhciBhdXRoID0gdW5kZWZpbmVkO1xuICAgIGlmIChjb25maWcuYXV0aCkge1xuICAgICAgdmFyIHVzZXJuYW1lID0gY29uZmlnLmF1dGgudXNlcm5hbWUgfHwgJyc7XG4gICAgICB2YXIgcGFzc3dvcmQgPSBjb25maWcuYXV0aC5wYXNzd29yZCB8fCAnJztcbiAgICAgIGF1dGggPSB1c2VybmFtZSArICc6JyArIHBhc3N3b3JkO1xuICAgIH1cblxuICAgIC8vIFBhcnNlIHVybFxuICAgIHZhciBmdWxsUGF0aCA9IGJ1aWxkRnVsbFBhdGgoY29uZmlnLmJhc2VVUkwsIGNvbmZpZy51cmwpO1xuICAgIHZhciBwYXJzZWQgPSB1cmwucGFyc2UoZnVsbFBhdGgpO1xuICAgIHZhciBwcm90b2NvbCA9IHBhcnNlZC5wcm90b2NvbCB8fCAnaHR0cDonO1xuXG4gICAgaWYgKCFhdXRoICYmIHBhcnNlZC5hdXRoKSB7XG4gICAgICB2YXIgdXJsQXV0aCA9IHBhcnNlZC5hdXRoLnNwbGl0KCc6Jyk7XG4gICAgICB2YXIgdXJsVXNlcm5hbWUgPSB1cmxBdXRoWzBdIHx8ICcnO1xuICAgICAgdmFyIHVybFBhc3N3b3JkID0gdXJsQXV0aFsxXSB8fCAnJztcbiAgICAgIGF1dGggPSB1cmxVc2VybmFtZSArICc6JyArIHVybFBhc3N3b3JkO1xuICAgIH1cblxuICAgIGlmIChhdXRoKSB7XG4gICAgICBkZWxldGUgaGVhZGVycy5BdXRob3JpemF0aW9uO1xuICAgIH1cblxuICAgIHZhciBpc0h0dHBzUmVxdWVzdCA9IGlzSHR0cHMudGVzdChwcm90b2NvbCk7XG4gICAgdmFyIGFnZW50ID0gaXNIdHRwc1JlcXVlc3QgPyBjb25maWcuaHR0cHNBZ2VudCA6IGNvbmZpZy5odHRwQWdlbnQ7XG5cbiAgICB2YXIgb3B0aW9ucyA9IHtcbiAgICAgIHBhdGg6IGJ1aWxkVVJMKHBhcnNlZC5wYXRoLCBjb25maWcucGFyYW1zLCBjb25maWcucGFyYW1zU2VyaWFsaXplcikucmVwbGFjZSgvXlxcPy8sICcnKSxcbiAgICAgIG1ldGhvZDogY29uZmlnLm1ldGhvZC50b1VwcGVyQ2FzZSgpLFxuICAgICAgaGVhZGVyczogaGVhZGVycyxcbiAgICAgIGFnZW50OiBhZ2VudCxcbiAgICAgIGFnZW50czogeyBodHRwOiBjb25maWcuaHR0cEFnZW50LCBodHRwczogY29uZmlnLmh0dHBzQWdlbnQgfSxcbiAgICAgIGF1dGg6IGF1dGhcbiAgICB9O1xuXG4gICAgaWYgKGNvbmZpZy5zb2NrZXRQYXRoKSB7XG4gICAgICBvcHRpb25zLnNvY2tldFBhdGggPSBjb25maWcuc29ja2V0UGF0aDtcbiAgICB9IGVsc2Uge1xuICAgICAgb3B0aW9ucy5ob3N0bmFtZSA9IHBhcnNlZC5ob3N0bmFtZTtcbiAgICAgIG9wdGlvbnMucG9ydCA9IHBhcnNlZC5wb3J0O1xuICAgIH1cblxuICAgIHZhciBwcm94eSA9IGNvbmZpZy5wcm94eTtcbiAgICBpZiAoIXByb3h5ICYmIHByb3h5ICE9PSBmYWxzZSkge1xuICAgICAgdmFyIHByb3h5RW52ID0gcHJvdG9jb2wuc2xpY2UoMCwgLTEpICsgJ19wcm94eSc7XG4gICAgICB2YXIgcHJveHlVcmwgPSBwcm9jZXNzLmVudltwcm94eUVudl0gfHwgcHJvY2Vzcy5lbnZbcHJveHlFbnYudG9VcHBlckNhc2UoKV07XG4gICAgICBpZiAocHJveHlVcmwpIHtcbiAgICAgICAgdmFyIHBhcnNlZFByb3h5VXJsID0gdXJsLnBhcnNlKHByb3h5VXJsKTtcbiAgICAgICAgdmFyIG5vUHJveHlFbnYgPSBwcm9jZXNzLmVudi5ub19wcm94eSB8fCBwcm9jZXNzLmVudi5OT19QUk9YWTtcbiAgICAgICAgdmFyIHNob3VsZFByb3h5ID0gdHJ1ZTtcblxuICAgICAgICBpZiAobm9Qcm94eUVudikge1xuICAgICAgICAgIHZhciBub1Byb3h5ID0gbm9Qcm94eUVudi5zcGxpdCgnLCcpLm1hcChmdW5jdGlvbiB0cmltKHMpIHtcbiAgICAgICAgICAgIHJldHVybiBzLnRyaW0oKTtcbiAgICAgICAgICB9KTtcblxuICAgICAgICAgIHNob3VsZFByb3h5ID0gIW5vUHJveHkuc29tZShmdW5jdGlvbiBwcm94eU1hdGNoKHByb3h5RWxlbWVudCkge1xuICAgICAgICAgICAgaWYgKCFwcm94eUVsZW1lbnQpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHByb3h5RWxlbWVudCA9PT0gJyonKSB7XG4gICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHByb3h5RWxlbWVudFswXSA9PT0gJy4nICYmXG4gICAgICAgICAgICAgICAgcGFyc2VkLmhvc3RuYW1lLnN1YnN0cihwYXJzZWQuaG9zdG5hbWUubGVuZ3RoIC0gcHJveHlFbGVtZW50Lmxlbmd0aCkgPT09IHByb3h5RWxlbWVudCkge1xuICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIHBhcnNlZC5ob3N0bmFtZSA9PT0gcHJveHlFbGVtZW50O1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cblxuICAgICAgICBpZiAoc2hvdWxkUHJveHkpIHtcbiAgICAgICAgICBwcm94eSA9IHtcbiAgICAgICAgICAgIGhvc3Q6IHBhcnNlZFByb3h5VXJsLmhvc3RuYW1lLFxuICAgICAgICAgICAgcG9ydDogcGFyc2VkUHJveHlVcmwucG9ydFxuICAgICAgICAgIH07XG5cbiAgICAgICAgICBpZiAocGFyc2VkUHJveHlVcmwuYXV0aCkge1xuICAgICAgICAgICAgdmFyIHByb3h5VXJsQXV0aCA9IHBhcnNlZFByb3h5VXJsLmF1dGguc3BsaXQoJzonKTtcbiAgICAgICAgICAgIHByb3h5LmF1dGggPSB7XG4gICAgICAgICAgICAgIHVzZXJuYW1lOiBwcm94eVVybEF1dGhbMF0sXG4gICAgICAgICAgICAgIHBhc3N3b3JkOiBwcm94eVVybEF1dGhbMV1cbiAgICAgICAgICAgIH07XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHByb3h5KSB7XG4gICAgICBvcHRpb25zLmhvc3RuYW1lID0gcHJveHkuaG9zdDtcbiAgICAgIG9wdGlvbnMuaG9zdCA9IHByb3h5Lmhvc3Q7XG4gICAgICBvcHRpb25zLmhlYWRlcnMuaG9zdCA9IHBhcnNlZC5ob3N0bmFtZSArIChwYXJzZWQucG9ydCA/ICc6JyArIHBhcnNlZC5wb3J0IDogJycpO1xuICAgICAgb3B0aW9ucy5wb3J0ID0gcHJveHkucG9ydDtcbiAgICAgIG9wdGlvbnMucGF0aCA9IHByb3RvY29sICsgJy8vJyArIHBhcnNlZC5ob3N0bmFtZSArIChwYXJzZWQucG9ydCA/ICc6JyArIHBhcnNlZC5wb3J0IDogJycpICsgb3B0aW9ucy5wYXRoO1xuXG4gICAgICAvLyBCYXNpYyBwcm94eSBhdXRob3JpemF0aW9uXG4gICAgICBpZiAocHJveHkuYXV0aCkge1xuICAgICAgICB2YXIgYmFzZTY0ID0gQnVmZmVyLmZyb20ocHJveHkuYXV0aC51c2VybmFtZSArICc6JyArIHByb3h5LmF1dGgucGFzc3dvcmQsICd1dGY4JykudG9TdHJpbmcoJ2Jhc2U2NCcpO1xuICAgICAgICBvcHRpb25zLmhlYWRlcnNbJ1Byb3h5LUF1dGhvcml6YXRpb24nXSA9ICdCYXNpYyAnICsgYmFzZTY0O1xuICAgICAgfVxuICAgIH1cblxuICAgIHZhciB0cmFuc3BvcnQ7XG4gICAgdmFyIGlzSHR0cHNQcm94eSA9IGlzSHR0cHNSZXF1ZXN0ICYmIChwcm94eSA/IGlzSHR0cHMudGVzdChwcm94eS5wcm90b2NvbCkgOiB0cnVlKTtcbiAgICBpZiAoY29uZmlnLnRyYW5zcG9ydCkge1xuICAgICAgdHJhbnNwb3J0ID0gY29uZmlnLnRyYW5zcG9ydDtcbiAgICB9IGVsc2UgaWYgKGNvbmZpZy5tYXhSZWRpcmVjdHMgPT09IDApIHtcbiAgICAgIHRyYW5zcG9ydCA9IGlzSHR0cHNQcm94eSA/IGh0dHBzIDogaHR0cDtcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKGNvbmZpZy5tYXhSZWRpcmVjdHMpIHtcbiAgICAgICAgb3B0aW9ucy5tYXhSZWRpcmVjdHMgPSBjb25maWcubWF4UmVkaXJlY3RzO1xuICAgICAgfVxuICAgICAgdHJhbnNwb3J0ID0gaXNIdHRwc1Byb3h5ID8gaHR0cHNGb2xsb3cgOiBodHRwRm9sbG93O1xuICAgIH1cblxuICAgIGlmIChjb25maWcubWF4Q29udGVudExlbmd0aCAmJiBjb25maWcubWF4Q29udGVudExlbmd0aCA+IC0xKSB7XG4gICAgICBvcHRpb25zLm1heEJvZHlMZW5ndGggPSBjb25maWcubWF4Q29udGVudExlbmd0aDtcbiAgICB9XG5cbiAgICAvLyBDcmVhdGUgdGhlIHJlcXVlc3RcbiAgICB2YXIgcmVxID0gdHJhbnNwb3J0LnJlcXVlc3Qob3B0aW9ucywgZnVuY3Rpb24gaGFuZGxlUmVzcG9uc2UocmVzKSB7XG4gICAgICBpZiAocmVxLmFib3J0ZWQpIHJldHVybjtcblxuICAgICAgLy8gdW5jb21wcmVzcyB0aGUgcmVzcG9uc2UgYm9keSB0cmFuc3BhcmVudGx5IGlmIHJlcXVpcmVkXG4gICAgICB2YXIgc3RyZWFtID0gcmVzO1xuICAgICAgc3dpdGNoIChyZXMuaGVhZGVyc1snY29udGVudC1lbmNvZGluZyddKSB7XG4gICAgICAvKmVzbGludCBkZWZhdWx0LWNhc2U6MCovXG4gICAgICBjYXNlICdnemlwJzpcbiAgICAgIGNhc2UgJ2NvbXByZXNzJzpcbiAgICAgIGNhc2UgJ2RlZmxhdGUnOlxuICAgICAgICAvLyBhZGQgdGhlIHVuemlwcGVyIHRvIHRoZSBib2R5IHN0cmVhbSBwcm9jZXNzaW5nIHBpcGVsaW5lXG4gICAgICAgIHN0cmVhbSA9IChyZXMuc3RhdHVzQ29kZSA9PT0gMjA0KSA/IHN0cmVhbSA6IHN0cmVhbS5waXBlKHpsaWIuY3JlYXRlVW56aXAoKSk7XG5cbiAgICAgICAgLy8gcmVtb3ZlIHRoZSBjb250ZW50LWVuY29kaW5nIGluIG9yZGVyIHRvIG5vdCBjb25mdXNlIGRvd25zdHJlYW0gb3BlcmF0aW9uc1xuICAgICAgICBkZWxldGUgcmVzLmhlYWRlcnNbJ2NvbnRlbnQtZW5jb2RpbmcnXTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG5cbiAgICAgIC8vIHJldHVybiB0aGUgbGFzdCByZXF1ZXN0IGluIGNhc2Ugb2YgcmVkaXJlY3RzXG4gICAgICB2YXIgbGFzdFJlcXVlc3QgPSByZXMucmVxIHx8IHJlcTtcblxuICAgICAgdmFyIHJlc3BvbnNlID0ge1xuICAgICAgICBzdGF0dXM6IHJlcy5zdGF0dXNDb2RlLFxuICAgICAgICBzdGF0dXNUZXh0OiByZXMuc3RhdHVzTWVzc2FnZSxcbiAgICAgICAgaGVhZGVyczogcmVzLmhlYWRlcnMsXG4gICAgICAgIGNvbmZpZzogY29uZmlnLFxuICAgICAgICByZXF1ZXN0OiBsYXN0UmVxdWVzdFxuICAgICAgfTtcblxuICAgICAgaWYgKGNvbmZpZy5yZXNwb25zZVR5cGUgPT09ICdzdHJlYW0nKSB7XG4gICAgICAgIHJlc3BvbnNlLmRhdGEgPSBzdHJlYW07XG4gICAgICAgIHNldHRsZShyZXNvbHZlLCByZWplY3QsIHJlc3BvbnNlKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHZhciByZXNwb25zZUJ1ZmZlciA9IFtdO1xuICAgICAgICBzdHJlYW0ub24oJ2RhdGEnLCBmdW5jdGlvbiBoYW5kbGVTdHJlYW1EYXRhKGNodW5rKSB7XG4gICAgICAgICAgcmVzcG9uc2VCdWZmZXIucHVzaChjaHVuayk7XG5cbiAgICAgICAgICAvLyBtYWtlIHN1cmUgdGhlIGNvbnRlbnQgbGVuZ3RoIGlzIG5vdCBvdmVyIHRoZSBtYXhDb250ZW50TGVuZ3RoIGlmIHNwZWNpZmllZFxuICAgICAgICAgIGlmIChjb25maWcubWF4Q29udGVudExlbmd0aCA+IC0xICYmIEJ1ZmZlci5jb25jYXQocmVzcG9uc2VCdWZmZXIpLmxlbmd0aCA+IGNvbmZpZy5tYXhDb250ZW50TGVuZ3RoKSB7XG4gICAgICAgICAgICBzdHJlYW0uZGVzdHJveSgpO1xuICAgICAgICAgICAgcmVqZWN0KGNyZWF0ZUVycm9yKCdtYXhDb250ZW50TGVuZ3RoIHNpemUgb2YgJyArIGNvbmZpZy5tYXhDb250ZW50TGVuZ3RoICsgJyBleGNlZWRlZCcsXG4gICAgICAgICAgICAgIGNvbmZpZywgbnVsbCwgbGFzdFJlcXVlc3QpKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHN0cmVhbS5vbignZXJyb3InLCBmdW5jdGlvbiBoYW5kbGVTdHJlYW1FcnJvcihlcnIpIHtcbiAgICAgICAgICBpZiAocmVxLmFib3J0ZWQpIHJldHVybjtcbiAgICAgICAgICByZWplY3QoZW5oYW5jZUVycm9yKGVyciwgY29uZmlnLCBudWxsLCBsYXN0UmVxdWVzdCkpO1xuICAgICAgICB9KTtcblxuICAgICAgICBzdHJlYW0ub24oJ2VuZCcsIGZ1bmN0aW9uIGhhbmRsZVN0cmVhbUVuZCgpIHtcbiAgICAgICAgICB2YXIgcmVzcG9uc2VEYXRhID0gQnVmZmVyLmNvbmNhdChyZXNwb25zZUJ1ZmZlcik7XG4gICAgICAgICAgaWYgKGNvbmZpZy5yZXNwb25zZVR5cGUgIT09ICdhcnJheWJ1ZmZlcicpIHtcbiAgICAgICAgICAgIHJlc3BvbnNlRGF0YSA9IHJlc3BvbnNlRGF0YS50b1N0cmluZyhjb25maWcucmVzcG9uc2VFbmNvZGluZyk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmVzcG9uc2UuZGF0YSA9IHJlc3BvbnNlRGF0YTtcbiAgICAgICAgICBzZXR0bGUocmVzb2x2ZSwgcmVqZWN0LCByZXNwb25zZSk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgLy8gSGFuZGxlIGVycm9yc1xuICAgIHJlcS5vbignZXJyb3InLCBmdW5jdGlvbiBoYW5kbGVSZXF1ZXN0RXJyb3IoZXJyKSB7XG4gICAgICBpZiAocmVxLmFib3J0ZWQpIHJldHVybjtcbiAgICAgIHJlamVjdChlbmhhbmNlRXJyb3IoZXJyLCBjb25maWcsIG51bGwsIHJlcSkpO1xuICAgIH0pO1xuXG4gICAgLy8gSGFuZGxlIHJlcXVlc3QgdGltZW91dFxuICAgIGlmIChjb25maWcudGltZW91dCkge1xuICAgICAgLy8gU29tZXRpbWUsIHRoZSByZXNwb25zZSB3aWxsIGJlIHZlcnkgc2xvdywgYW5kIGRvZXMgbm90IHJlc3BvbmQsIHRoZSBjb25uZWN0IGV2ZW50IHdpbGwgYmUgYmxvY2sgYnkgZXZlbnQgbG9vcCBzeXN0ZW0uXG4gICAgICAvLyBBbmQgdGltZXIgY2FsbGJhY2sgd2lsbCBiZSBmaXJlZCwgYW5kIGFib3J0KCkgd2lsbCBiZSBpbnZva2VkIGJlZm9yZSBjb25uZWN0aW9uLCB0aGVuIGdldCBcInNvY2tldCBoYW5nIHVwXCIgYW5kIGNvZGUgRUNPTk5SRVNFVC5cbiAgICAgIC8vIEF0IHRoaXMgdGltZSwgaWYgd2UgaGF2ZSBhIGxhcmdlIG51bWJlciBvZiByZXF1ZXN0LCBub2RlanMgd2lsbCBoYW5nIHVwIHNvbWUgc29ja2V0IG9uIGJhY2tncm91bmQuIGFuZCB0aGUgbnVtYmVyIHdpbGwgdXAgYW5kIHVwLlxuICAgICAgLy8gQW5kIHRoZW4gdGhlc2Ugc29ja2V0IHdoaWNoIGJlIGhhbmcgdXAgd2lsbCBkZXZvcmluZyBDUFUgbGl0dGxlIGJ5IGxpdHRsZS5cbiAgICAgIC8vIENsaWVudFJlcXVlc3Quc2V0VGltZW91dCB3aWxsIGJlIGZpcmVkIG9uIHRoZSBzcGVjaWZ5IG1pbGxpc2Vjb25kcywgYW5kIGNhbiBtYWtlIHN1cmUgdGhhdCBhYm9ydCgpIHdpbGwgYmUgZmlyZWQgYWZ0ZXIgY29ubmVjdC5cbiAgICAgIHJlcS5zZXRUaW1lb3V0KGNvbmZpZy50aW1lb3V0LCBmdW5jdGlvbiBoYW5kbGVSZXF1ZXN0VGltZW91dCgpIHtcbiAgICAgICAgcmVxLmFib3J0KCk7XG4gICAgICAgIHJlamVjdChjcmVhdGVFcnJvcigndGltZW91dCBvZiAnICsgY29uZmlnLnRpbWVvdXQgKyAnbXMgZXhjZWVkZWQnLCBjb25maWcsICdFQ09OTkFCT1JURUQnLCByZXEpKTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlmIChjb25maWcuY2FuY2VsVG9rZW4pIHtcbiAgICAgIC8vIEhhbmRsZSBjYW5jZWxsYXRpb25cbiAgICAgIGNvbmZpZy5jYW5jZWxUb2tlbi5wcm9taXNlLnRoZW4oZnVuY3Rpb24gb25DYW5jZWxlZChjYW5jZWwpIHtcbiAgICAgICAgaWYgKHJlcS5hYm9ydGVkKSByZXR1cm47XG5cbiAgICAgICAgcmVxLmFib3J0KCk7XG4gICAgICAgIHJlamVjdChjYW5jZWwpO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgLy8gU2VuZCB0aGUgcmVxdWVzdFxuICAgIGlmICh1dGlscy5pc1N0cmVhbShkYXRhKSkge1xuICAgICAgZGF0YS5vbignZXJyb3InLCBmdW5jdGlvbiBoYW5kbGVTdHJlYW1FcnJvcihlcnIpIHtcbiAgICAgICAgcmVqZWN0KGVuaGFuY2VFcnJvcihlcnIsIGNvbmZpZywgbnVsbCwgcmVxKSk7XG4gICAgICB9KS5waXBlKHJlcSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlcS5lbmQoZGF0YSk7XG4gICAgfVxuICB9KTtcbn07XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJhc3NlcnRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwic3RyZWFtXCIpOyIsIi8qKlxuICogRGV0ZWN0IEVsZWN0cm9uIHJlbmRlcmVyIHByb2Nlc3MsIHdoaWNoIGlzIG5vZGUsIGJ1dCB3ZSBzaG91bGRcbiAqIHRyZWF0IGFzIGEgYnJvd3Nlci5cbiAqL1xuXG5pZiAodHlwZW9mIHByb2Nlc3MgPT09ICd1bmRlZmluZWQnIHx8IHByb2Nlc3MudHlwZSA9PT0gJ3JlbmRlcmVyJykge1xuICBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vYnJvd3Nlci5qcycpO1xufSBlbHNlIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL25vZGUuanMnKTtcbn1cbiIsIi8qKlxuICogVGhpcyBpcyB0aGUgd2ViIGJyb3dzZXIgaW1wbGVtZW50YXRpb24gb2YgYGRlYnVnKClgLlxuICpcbiAqIEV4cG9zZSBgZGVidWcoKWAgYXMgdGhlIG1vZHVsZS5cbiAqL1xuXG5leHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2RlYnVnJyk7XG5leHBvcnRzLmxvZyA9IGxvZztcbmV4cG9ydHMuZm9ybWF0QXJncyA9IGZvcm1hdEFyZ3M7XG5leHBvcnRzLnNhdmUgPSBzYXZlO1xuZXhwb3J0cy5sb2FkID0gbG9hZDtcbmV4cG9ydHMudXNlQ29sb3JzID0gdXNlQ29sb3JzO1xuZXhwb3J0cy5zdG9yYWdlID0gJ3VuZGVmaW5lZCcgIT0gdHlwZW9mIGNocm9tZVxuICAgICAgICAgICAgICAgJiYgJ3VuZGVmaW5lZCcgIT0gdHlwZW9mIGNocm9tZS5zdG9yYWdlXG4gICAgICAgICAgICAgICAgICA/IGNocm9tZS5zdG9yYWdlLmxvY2FsXG4gICAgICAgICAgICAgICAgICA6IGxvY2Fsc3RvcmFnZSgpO1xuXG4vKipcbiAqIENvbG9ycy5cbiAqL1xuXG5leHBvcnRzLmNvbG9ycyA9IFtcbiAgJyMwMDAwQ0MnLCAnIzAwMDBGRicsICcjMDAzM0NDJywgJyMwMDMzRkYnLCAnIzAwNjZDQycsICcjMDA2NkZGJywgJyMwMDk5Q0MnLFxuICAnIzAwOTlGRicsICcjMDBDQzAwJywgJyMwMENDMzMnLCAnIzAwQ0M2NicsICcjMDBDQzk5JywgJyMwMENDQ0MnLCAnIzAwQ0NGRicsXG4gICcjMzMwMENDJywgJyMzMzAwRkYnLCAnIzMzMzNDQycsICcjMzMzM0ZGJywgJyMzMzY2Q0MnLCAnIzMzNjZGRicsICcjMzM5OUNDJyxcbiAgJyMzMzk5RkYnLCAnIzMzQ0MwMCcsICcjMzNDQzMzJywgJyMzM0NDNjYnLCAnIzMzQ0M5OScsICcjMzNDQ0NDJywgJyMzM0NDRkYnLFxuICAnIzY2MDBDQycsICcjNjYwMEZGJywgJyM2NjMzQ0MnLCAnIzY2MzNGRicsICcjNjZDQzAwJywgJyM2NkNDMzMnLCAnIzk5MDBDQycsXG4gICcjOTkwMEZGJywgJyM5OTMzQ0MnLCAnIzk5MzNGRicsICcjOTlDQzAwJywgJyM5OUNDMzMnLCAnI0NDMDAwMCcsICcjQ0MwMDMzJyxcbiAgJyNDQzAwNjYnLCAnI0NDMDA5OScsICcjQ0MwMENDJywgJyNDQzAwRkYnLCAnI0NDMzMwMCcsICcjQ0MzMzMzJywgJyNDQzMzNjYnLFxuICAnI0NDMzM5OScsICcjQ0MzM0NDJywgJyNDQzMzRkYnLCAnI0NDNjYwMCcsICcjQ0M2NjMzJywgJyNDQzk5MDAnLCAnI0NDOTkzMycsXG4gICcjQ0NDQzAwJywgJyNDQ0NDMzMnLCAnI0ZGMDAwMCcsICcjRkYwMDMzJywgJyNGRjAwNjYnLCAnI0ZGMDA5OScsICcjRkYwMENDJyxcbiAgJyNGRjAwRkYnLCAnI0ZGMzMwMCcsICcjRkYzMzMzJywgJyNGRjMzNjYnLCAnI0ZGMzM5OScsICcjRkYzM0NDJywgJyNGRjMzRkYnLFxuICAnI0ZGNjYwMCcsICcjRkY2NjMzJywgJyNGRjk5MDAnLCAnI0ZGOTkzMycsICcjRkZDQzAwJywgJyNGRkNDMzMnXG5dO1xuXG4vKipcbiAqIEN1cnJlbnRseSBvbmx5IFdlYktpdC1iYXNlZCBXZWIgSW5zcGVjdG9ycywgRmlyZWZveCA+PSB2MzEsXG4gKiBhbmQgdGhlIEZpcmVidWcgZXh0ZW5zaW9uIChhbnkgRmlyZWZveCB2ZXJzaW9uKSBhcmUga25vd25cbiAqIHRvIHN1cHBvcnQgXCIlY1wiIENTUyBjdXN0b21pemF0aW9ucy5cbiAqXG4gKiBUT0RPOiBhZGQgYSBgbG9jYWxTdG9yYWdlYCB2YXJpYWJsZSB0byBleHBsaWNpdGx5IGVuYWJsZS9kaXNhYmxlIGNvbG9yc1xuICovXG5cbmZ1bmN0aW9uIHVzZUNvbG9ycygpIHtcbiAgLy8gTkI6IEluIGFuIEVsZWN0cm9uIHByZWxvYWQgc2NyaXB0LCBkb2N1bWVudCB3aWxsIGJlIGRlZmluZWQgYnV0IG5vdCBmdWxseVxuICAvLyBpbml0aWFsaXplZC4gU2luY2Ugd2Uga25vdyB3ZSdyZSBpbiBDaHJvbWUsIHdlJ2xsIGp1c3QgZGV0ZWN0IHRoaXMgY2FzZVxuICAvLyBleHBsaWNpdGx5XG4gIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiB3aW5kb3cucHJvY2VzcyAmJiB3aW5kb3cucHJvY2Vzcy50eXBlID09PSAncmVuZGVyZXInKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICAvLyBJbnRlcm5ldCBFeHBsb3JlciBhbmQgRWRnZSBkbyBub3Qgc3VwcG9ydCBjb2xvcnMuXG4gIGlmICh0eXBlb2YgbmF2aWdhdG9yICE9PSAndW5kZWZpbmVkJyAmJiBuYXZpZ2F0b3IudXNlckFnZW50ICYmIG5hdmlnYXRvci51c2VyQWdlbnQudG9Mb3dlckNhc2UoKS5tYXRjaCgvKGVkZ2V8dHJpZGVudClcXC8oXFxkKykvKSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIC8vIGlzIHdlYmtpdD8gaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL2EvMTY0NTk2MDYvMzc2NzczXG4gIC8vIGRvY3VtZW50IGlzIHVuZGVmaW5lZCBpbiByZWFjdC1uYXRpdmU6IGh0dHBzOi8vZ2l0aHViLmNvbS9mYWNlYm9vay9yZWFjdC1uYXRpdmUvcHVsbC8xNjMyXG4gIHJldHVybiAodHlwZW9mIGRvY3VtZW50ICE9PSAndW5kZWZpbmVkJyAmJiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQgJiYgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnN0eWxlICYmIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zdHlsZS5XZWJraXRBcHBlYXJhbmNlKSB8fFxuICAgIC8vIGlzIGZpcmVidWc/IGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9hLzM5ODEyMC8zNzY3NzNcbiAgICAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgd2luZG93LmNvbnNvbGUgJiYgKHdpbmRvdy5jb25zb2xlLmZpcmVidWcgfHwgKHdpbmRvdy5jb25zb2xlLmV4Y2VwdGlvbiAmJiB3aW5kb3cuY29uc29sZS50YWJsZSkpKSB8fFxuICAgIC8vIGlzIGZpcmVmb3ggPj0gdjMxP1xuICAgIC8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvVG9vbHMvV2ViX0NvbnNvbGUjU3R5bGluZ19tZXNzYWdlc1xuICAgICh0eXBlb2YgbmF2aWdhdG9yICE9PSAndW5kZWZpbmVkJyAmJiBuYXZpZ2F0b3IudXNlckFnZW50ICYmIG5hdmlnYXRvci51c2VyQWdlbnQudG9Mb3dlckNhc2UoKS5tYXRjaCgvZmlyZWZveFxcLyhcXGQrKS8pICYmIHBhcnNlSW50KFJlZ0V4cC4kMSwgMTApID49IDMxKSB8fFxuICAgIC8vIGRvdWJsZSBjaGVjayB3ZWJraXQgaW4gdXNlckFnZW50IGp1c3QgaW4gY2FzZSB3ZSBhcmUgaW4gYSB3b3JrZXJcbiAgICAodHlwZW9mIG5hdmlnYXRvciAhPT0gJ3VuZGVmaW5lZCcgJiYgbmF2aWdhdG9yLnVzZXJBZ2VudCAmJiBuYXZpZ2F0b3IudXNlckFnZW50LnRvTG93ZXJDYXNlKCkubWF0Y2goL2FwcGxld2Via2l0XFwvKFxcZCspLykpO1xufVxuXG4vKipcbiAqIE1hcCAlaiB0byBgSlNPTi5zdHJpbmdpZnkoKWAsIHNpbmNlIG5vIFdlYiBJbnNwZWN0b3JzIGRvIHRoYXQgYnkgZGVmYXVsdC5cbiAqL1xuXG5leHBvcnRzLmZvcm1hdHRlcnMuaiA9IGZ1bmN0aW9uKHYpIHtcbiAgdHJ5IHtcbiAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkodik7XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIHJldHVybiAnW1VuZXhwZWN0ZWRKU09OUGFyc2VFcnJvcl06ICcgKyBlcnIubWVzc2FnZTtcbiAgfVxufTtcblxuXG4vKipcbiAqIENvbG9yaXplIGxvZyBhcmd1bWVudHMgaWYgZW5hYmxlZC5cbiAqXG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbmZ1bmN0aW9uIGZvcm1hdEFyZ3MoYXJncykge1xuICB2YXIgdXNlQ29sb3JzID0gdGhpcy51c2VDb2xvcnM7XG5cbiAgYXJnc1swXSA9ICh1c2VDb2xvcnMgPyAnJWMnIDogJycpXG4gICAgKyB0aGlzLm5hbWVzcGFjZVxuICAgICsgKHVzZUNvbG9ycyA/ICcgJWMnIDogJyAnKVxuICAgICsgYXJnc1swXVxuICAgICsgKHVzZUNvbG9ycyA/ICclYyAnIDogJyAnKVxuICAgICsgJysnICsgZXhwb3J0cy5odW1hbml6ZSh0aGlzLmRpZmYpO1xuXG4gIGlmICghdXNlQ29sb3JzKSByZXR1cm47XG5cbiAgdmFyIGMgPSAnY29sb3I6ICcgKyB0aGlzLmNvbG9yO1xuICBhcmdzLnNwbGljZSgxLCAwLCBjLCAnY29sb3I6IGluaGVyaXQnKVxuXG4gIC8vIHRoZSBmaW5hbCBcIiVjXCIgaXMgc29tZXdoYXQgdHJpY2t5LCBiZWNhdXNlIHRoZXJlIGNvdWxkIGJlIG90aGVyXG4gIC8vIGFyZ3VtZW50cyBwYXNzZWQgZWl0aGVyIGJlZm9yZSBvciBhZnRlciB0aGUgJWMsIHNvIHdlIG5lZWQgdG9cbiAgLy8gZmlndXJlIG91dCB0aGUgY29ycmVjdCBpbmRleCB0byBpbnNlcnQgdGhlIENTUyBpbnRvXG4gIHZhciBpbmRleCA9IDA7XG4gIHZhciBsYXN0QyA9IDA7XG4gIGFyZ3NbMF0ucmVwbGFjZSgvJVthLXpBLVolXS9nLCBmdW5jdGlvbihtYXRjaCkge1xuICAgIGlmICgnJSUnID09PSBtYXRjaCkgcmV0dXJuO1xuICAgIGluZGV4Kys7XG4gICAgaWYgKCclYycgPT09IG1hdGNoKSB7XG4gICAgICAvLyB3ZSBvbmx5IGFyZSBpbnRlcmVzdGVkIGluIHRoZSAqbGFzdCogJWNcbiAgICAgIC8vICh0aGUgdXNlciBtYXkgaGF2ZSBwcm92aWRlZCB0aGVpciBvd24pXG4gICAgICBsYXN0QyA9IGluZGV4O1xuICAgIH1cbiAgfSk7XG5cbiAgYXJncy5zcGxpY2UobGFzdEMsIDAsIGMpO1xufVxuXG4vKipcbiAqIEludm9rZXMgYGNvbnNvbGUubG9nKClgIHdoZW4gYXZhaWxhYmxlLlxuICogTm8tb3Agd2hlbiBgY29uc29sZS5sb2dgIGlzIG5vdCBhIFwiZnVuY3Rpb25cIi5cbiAqXG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbmZ1bmN0aW9uIGxvZygpIHtcbiAgLy8gdGhpcyBoYWNrZXJ5IGlzIHJlcXVpcmVkIGZvciBJRTgvOSwgd2hlcmVcbiAgLy8gdGhlIGBjb25zb2xlLmxvZ2AgZnVuY3Rpb24gZG9lc24ndCBoYXZlICdhcHBseSdcbiAgcmV0dXJuICdvYmplY3QnID09PSB0eXBlb2YgY29uc29sZVxuICAgICYmIGNvbnNvbGUubG9nXG4gICAgJiYgRnVuY3Rpb24ucHJvdG90eXBlLmFwcGx5LmNhbGwoY29uc29sZS5sb2csIGNvbnNvbGUsIGFyZ3VtZW50cyk7XG59XG5cbi8qKlxuICogU2F2ZSBgbmFtZXNwYWNlc2AuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IG5hbWVzcGFjZXNcbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cbmZ1bmN0aW9uIHNhdmUobmFtZXNwYWNlcykge1xuICB0cnkge1xuICAgIGlmIChudWxsID09IG5hbWVzcGFjZXMpIHtcbiAgICAgIGV4cG9ydHMuc3RvcmFnZS5yZW1vdmVJdGVtKCdkZWJ1ZycpO1xuICAgIH0gZWxzZSB7XG4gICAgICBleHBvcnRzLnN0b3JhZ2UuZGVidWcgPSBuYW1lc3BhY2VzO1xuICAgIH1cbiAgfSBjYXRjaChlKSB7fVxufVxuXG4vKipcbiAqIExvYWQgYG5hbWVzcGFjZXNgLlxuICpcbiAqIEByZXR1cm4ge1N0cmluZ30gcmV0dXJucyB0aGUgcHJldmlvdXNseSBwZXJzaXN0ZWQgZGVidWcgbW9kZXNcbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cbmZ1bmN0aW9uIGxvYWQoKSB7XG4gIHZhciByO1xuICB0cnkge1xuICAgIHIgPSBleHBvcnRzLnN0b3JhZ2UuZGVidWc7XG4gIH0gY2F0Y2goZSkge31cblxuICAvLyBJZiBkZWJ1ZyBpc24ndCBzZXQgaW4gTFMsIGFuZCB3ZSdyZSBpbiBFbGVjdHJvbiwgdHJ5IHRvIGxvYWQgJERFQlVHXG4gIGlmICghciAmJiB0eXBlb2YgcHJvY2VzcyAhPT0gJ3VuZGVmaW5lZCcgJiYgJ2VudicgaW4gcHJvY2Vzcykge1xuICAgIHIgPSBwcm9jZXNzLmVudi5ERUJVRztcbiAgfVxuXG4gIHJldHVybiByO1xufVxuXG4vKipcbiAqIEVuYWJsZSBuYW1lc3BhY2VzIGxpc3RlZCBpbiBgbG9jYWxTdG9yYWdlLmRlYnVnYCBpbml0aWFsbHkuXG4gKi9cblxuZXhwb3J0cy5lbmFibGUobG9hZCgpKTtcblxuLyoqXG4gKiBMb2NhbHN0b3JhZ2UgYXR0ZW1wdHMgdG8gcmV0dXJuIHRoZSBsb2NhbHN0b3JhZ2UuXG4gKlxuICogVGhpcyBpcyBuZWNlc3NhcnkgYmVjYXVzZSBzYWZhcmkgdGhyb3dzXG4gKiB3aGVuIGEgdXNlciBkaXNhYmxlcyBjb29raWVzL2xvY2Fsc3RvcmFnZVxuICogYW5kIHlvdSBhdHRlbXB0IHRvIGFjY2VzcyBpdC5cbiAqXG4gKiBAcmV0dXJuIHtMb2NhbFN0b3JhZ2V9XG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5mdW5jdGlvbiBsb2NhbHN0b3JhZ2UoKSB7XG4gIHRyeSB7XG4gICAgcmV0dXJuIHdpbmRvdy5sb2NhbFN0b3JhZ2U7XG4gIH0gY2F0Y2ggKGUpIHt9XG59XG4iLCIvKipcbiAqIEhlbHBlcnMuXG4gKi9cblxudmFyIHMgPSAxMDAwO1xudmFyIG0gPSBzICogNjA7XG52YXIgaCA9IG0gKiA2MDtcbnZhciBkID0gaCAqIDI0O1xudmFyIHkgPSBkICogMzY1LjI1O1xuXG4vKipcbiAqIFBhcnNlIG9yIGZvcm1hdCB0aGUgZ2l2ZW4gYHZhbGAuXG4gKlxuICogT3B0aW9uczpcbiAqXG4gKiAgLSBgbG9uZ2AgdmVyYm9zZSBmb3JtYXR0aW5nIFtmYWxzZV1cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ3xOdW1iZXJ9IHZhbFxuICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zXVxuICogQHRocm93cyB7RXJyb3J9IHRocm93IGFuIGVycm9yIGlmIHZhbCBpcyBub3QgYSBub24tZW1wdHkgc3RyaW5nIG9yIGEgbnVtYmVyXG4gKiBAcmV0dXJuIHtTdHJpbmd8TnVtYmVyfVxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKHZhbCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgdmFyIHR5cGUgPSB0eXBlb2YgdmFsO1xuICBpZiAodHlwZSA9PT0gJ3N0cmluZycgJiYgdmFsLmxlbmd0aCA+IDApIHtcbiAgICByZXR1cm4gcGFyc2UodmFsKTtcbiAgfSBlbHNlIGlmICh0eXBlID09PSAnbnVtYmVyJyAmJiBpc05hTih2YWwpID09PSBmYWxzZSkge1xuICAgIHJldHVybiBvcHRpb25zLmxvbmcgPyBmbXRMb25nKHZhbCkgOiBmbXRTaG9ydCh2YWwpO1xuICB9XG4gIHRocm93IG5ldyBFcnJvcihcbiAgICAndmFsIGlzIG5vdCBhIG5vbi1lbXB0eSBzdHJpbmcgb3IgYSB2YWxpZCBudW1iZXIuIHZhbD0nICtcbiAgICAgIEpTT04uc3RyaW5naWZ5KHZhbClcbiAgKTtcbn07XG5cbi8qKlxuICogUGFyc2UgdGhlIGdpdmVuIGBzdHJgIGFuZCByZXR1cm4gbWlsbGlzZWNvbmRzLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBzdHJcbiAqIEByZXR1cm4ge051bWJlcn1cbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cbmZ1bmN0aW9uIHBhcnNlKHN0cikge1xuICBzdHIgPSBTdHJpbmcoc3RyKTtcbiAgaWYgKHN0ci5sZW5ndGggPiAxMDApIHtcbiAgICByZXR1cm47XG4gIH1cbiAgdmFyIG1hdGNoID0gL14oKD86XFxkKyk/XFwuP1xcZCspICoobWlsbGlzZWNvbmRzP3xtc2Vjcz98bXN8c2Vjb25kcz98c2Vjcz98c3xtaW51dGVzP3xtaW5zP3xtfGhvdXJzP3xocnM/fGh8ZGF5cz98ZHx5ZWFycz98eXJzP3x5KT8kL2kuZXhlYyhcbiAgICBzdHJcbiAgKTtcbiAgaWYgKCFtYXRjaCkge1xuICAgIHJldHVybjtcbiAgfVxuICB2YXIgbiA9IHBhcnNlRmxvYXQobWF0Y2hbMV0pO1xuICB2YXIgdHlwZSA9IChtYXRjaFsyXSB8fCAnbXMnKS50b0xvd2VyQ2FzZSgpO1xuICBzd2l0Y2ggKHR5cGUpIHtcbiAgICBjYXNlICd5ZWFycyc6XG4gICAgY2FzZSAneWVhcic6XG4gICAgY2FzZSAneXJzJzpcbiAgICBjYXNlICd5cic6XG4gICAgY2FzZSAneSc6XG4gICAgICByZXR1cm4gbiAqIHk7XG4gICAgY2FzZSAnZGF5cyc6XG4gICAgY2FzZSAnZGF5JzpcbiAgICBjYXNlICdkJzpcbiAgICAgIHJldHVybiBuICogZDtcbiAgICBjYXNlICdob3Vycyc6XG4gICAgY2FzZSAnaG91cic6XG4gICAgY2FzZSAnaHJzJzpcbiAgICBjYXNlICdocic6XG4gICAgY2FzZSAnaCc6XG4gICAgICByZXR1cm4gbiAqIGg7XG4gICAgY2FzZSAnbWludXRlcyc6XG4gICAgY2FzZSAnbWludXRlJzpcbiAgICBjYXNlICdtaW5zJzpcbiAgICBjYXNlICdtaW4nOlxuICAgIGNhc2UgJ20nOlxuICAgICAgcmV0dXJuIG4gKiBtO1xuICAgIGNhc2UgJ3NlY29uZHMnOlxuICAgIGNhc2UgJ3NlY29uZCc6XG4gICAgY2FzZSAnc2Vjcyc6XG4gICAgY2FzZSAnc2VjJzpcbiAgICBjYXNlICdzJzpcbiAgICAgIHJldHVybiBuICogcztcbiAgICBjYXNlICdtaWxsaXNlY29uZHMnOlxuICAgIGNhc2UgJ21pbGxpc2Vjb25kJzpcbiAgICBjYXNlICdtc2Vjcyc6XG4gICAgY2FzZSAnbXNlYyc6XG4gICAgY2FzZSAnbXMnOlxuICAgICAgcmV0dXJuIG47XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gIH1cbn1cblxuLyoqXG4gKiBTaG9ydCBmb3JtYXQgZm9yIGBtc2AuXG4gKlxuICogQHBhcmFtIHtOdW1iZXJ9IG1zXG4gKiBAcmV0dXJuIHtTdHJpbmd9XG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5mdW5jdGlvbiBmbXRTaG9ydChtcykge1xuICBpZiAobXMgPj0gZCkge1xuICAgIHJldHVybiBNYXRoLnJvdW5kKG1zIC8gZCkgKyAnZCc7XG4gIH1cbiAgaWYgKG1zID49IGgpIHtcbiAgICByZXR1cm4gTWF0aC5yb3VuZChtcyAvIGgpICsgJ2gnO1xuICB9XG4gIGlmIChtcyA+PSBtKSB7XG4gICAgcmV0dXJuIE1hdGgucm91bmQobXMgLyBtKSArICdtJztcbiAgfVxuICBpZiAobXMgPj0gcykge1xuICAgIHJldHVybiBNYXRoLnJvdW5kKG1zIC8gcykgKyAncyc7XG4gIH1cbiAgcmV0dXJuIG1zICsgJ21zJztcbn1cblxuLyoqXG4gKiBMb25nIGZvcm1hdCBmb3IgYG1zYC5cbiAqXG4gKiBAcGFyYW0ge051bWJlcn0gbXNcbiAqIEByZXR1cm4ge1N0cmluZ31cbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cbmZ1bmN0aW9uIGZtdExvbmcobXMpIHtcbiAgcmV0dXJuIHBsdXJhbChtcywgZCwgJ2RheScpIHx8XG4gICAgcGx1cmFsKG1zLCBoLCAnaG91cicpIHx8XG4gICAgcGx1cmFsKG1zLCBtLCAnbWludXRlJykgfHxcbiAgICBwbHVyYWwobXMsIHMsICdzZWNvbmQnKSB8fFxuICAgIG1zICsgJyBtcyc7XG59XG5cbi8qKlxuICogUGx1cmFsaXphdGlvbiBoZWxwZXIuXG4gKi9cblxuZnVuY3Rpb24gcGx1cmFsKG1zLCBuLCBuYW1lKSB7XG4gIGlmIChtcyA8IG4pIHtcbiAgICByZXR1cm47XG4gIH1cbiAgaWYgKG1zIDwgbiAqIDEuNSkge1xuICAgIHJldHVybiBNYXRoLmZsb29yKG1zIC8gbikgKyAnICcgKyBuYW1lO1xuICB9XG4gIHJldHVybiBNYXRoLmNlaWwobXMgLyBuKSArICcgJyArIG5hbWUgKyAncyc7XG59XG4iLCIvKipcbiAqIE1vZHVsZSBkZXBlbmRlbmNpZXMuXG4gKi9cblxudmFyIHR0eSA9IHJlcXVpcmUoJ3R0eScpO1xudmFyIHV0aWwgPSByZXF1aXJlKCd1dGlsJyk7XG5cbi8qKlxuICogVGhpcyBpcyB0aGUgTm9kZS5qcyBpbXBsZW1lbnRhdGlvbiBvZiBgZGVidWcoKWAuXG4gKlxuICogRXhwb3NlIGBkZWJ1ZygpYCBhcyB0aGUgbW9kdWxlLlxuICovXG5cbmV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vZGVidWcnKTtcbmV4cG9ydHMuaW5pdCA9IGluaXQ7XG5leHBvcnRzLmxvZyA9IGxvZztcbmV4cG9ydHMuZm9ybWF0QXJncyA9IGZvcm1hdEFyZ3M7XG5leHBvcnRzLnNhdmUgPSBzYXZlO1xuZXhwb3J0cy5sb2FkID0gbG9hZDtcbmV4cG9ydHMudXNlQ29sb3JzID0gdXNlQ29sb3JzO1xuXG4vKipcbiAqIENvbG9ycy5cbiAqL1xuXG5leHBvcnRzLmNvbG9ycyA9IFsgNiwgMiwgMywgNCwgNSwgMSBdO1xuXG50cnkge1xuICB2YXIgc3VwcG9ydHNDb2xvciA9IHJlcXVpcmUoJ3N1cHBvcnRzLWNvbG9yJyk7XG4gIGlmIChzdXBwb3J0c0NvbG9yICYmIHN1cHBvcnRzQ29sb3IubGV2ZWwgPj0gMikge1xuICAgIGV4cG9ydHMuY29sb3JzID0gW1xuICAgICAgMjAsIDIxLCAyNiwgMjcsIDMyLCAzMywgMzgsIDM5LCA0MCwgNDEsIDQyLCA0MywgNDQsIDQ1LCA1NiwgNTcsIDYyLCA2MywgNjgsXG4gICAgICA2OSwgNzQsIDc1LCA3NiwgNzcsIDc4LCA3OSwgODAsIDgxLCA5MiwgOTMsIDk4LCA5OSwgMTEyLCAxMTMsIDEyOCwgMTI5LCAxMzQsXG4gICAgICAxMzUsIDE0OCwgMTQ5LCAxNjAsIDE2MSwgMTYyLCAxNjMsIDE2NCwgMTY1LCAxNjYsIDE2NywgMTY4LCAxNjksIDE3MCwgMTcxLFxuICAgICAgMTcyLCAxNzMsIDE3OCwgMTc5LCAxODQsIDE4NSwgMTk2LCAxOTcsIDE5OCwgMTk5LCAyMDAsIDIwMSwgMjAyLCAyMDMsIDIwNCxcbiAgICAgIDIwNSwgMjA2LCAyMDcsIDIwOCwgMjA5LCAyMTQsIDIxNSwgMjIwLCAyMjFcbiAgICBdO1xuICB9XG59IGNhdGNoIChlcnIpIHtcbiAgLy8gc3dhbGxvdyAtIHdlIG9ubHkgY2FyZSBpZiBgc3VwcG9ydHMtY29sb3JgIGlzIGF2YWlsYWJsZTsgaXQgZG9lc24ndCBoYXZlIHRvIGJlLlxufVxuXG4vKipcbiAqIEJ1aWxkIHVwIHRoZSBkZWZhdWx0IGBpbnNwZWN0T3B0c2Agb2JqZWN0IGZyb20gdGhlIGVudmlyb25tZW50IHZhcmlhYmxlcy5cbiAqXG4gKiAgICQgREVCVUdfQ09MT1JTPW5vIERFQlVHX0RFUFRIPTEwIERFQlVHX1NIT1dfSElEREVOPWVuYWJsZWQgbm9kZSBzY3JpcHQuanNcbiAqL1xuXG5leHBvcnRzLmluc3BlY3RPcHRzID0gT2JqZWN0LmtleXMocHJvY2Vzcy5lbnYpLmZpbHRlcihmdW5jdGlvbiAoa2V5KSB7XG4gIHJldHVybiAvXmRlYnVnXy9pLnRlc3Qoa2V5KTtcbn0pLnJlZHVjZShmdW5jdGlvbiAob2JqLCBrZXkpIHtcbiAgLy8gY2FtZWwtY2FzZVxuICB2YXIgcHJvcCA9IGtleVxuICAgIC5zdWJzdHJpbmcoNilcbiAgICAudG9Mb3dlckNhc2UoKVxuICAgIC5yZXBsYWNlKC9fKFthLXpdKS9nLCBmdW5jdGlvbiAoXywgaykgeyByZXR1cm4gay50b1VwcGVyQ2FzZSgpIH0pO1xuXG4gIC8vIGNvZXJjZSBzdHJpbmcgdmFsdWUgaW50byBKUyB2YWx1ZVxuICB2YXIgdmFsID0gcHJvY2Vzcy5lbnZba2V5XTtcbiAgaWYgKC9eKHllc3xvbnx0cnVlfGVuYWJsZWQpJC9pLnRlc3QodmFsKSkgdmFsID0gdHJ1ZTtcbiAgZWxzZSBpZiAoL14obm98b2ZmfGZhbHNlfGRpc2FibGVkKSQvaS50ZXN0KHZhbCkpIHZhbCA9IGZhbHNlO1xuICBlbHNlIGlmICh2YWwgPT09ICdudWxsJykgdmFsID0gbnVsbDtcbiAgZWxzZSB2YWwgPSBOdW1iZXIodmFsKTtcblxuICBvYmpbcHJvcF0gPSB2YWw7XG4gIHJldHVybiBvYmo7XG59LCB7fSk7XG5cbi8qKlxuICogSXMgc3Rkb3V0IGEgVFRZPyBDb2xvcmVkIG91dHB1dCBpcyBlbmFibGVkIHdoZW4gYHRydWVgLlxuICovXG5cbmZ1bmN0aW9uIHVzZUNvbG9ycygpIHtcbiAgcmV0dXJuICdjb2xvcnMnIGluIGV4cG9ydHMuaW5zcGVjdE9wdHNcbiAgICA/IEJvb2xlYW4oZXhwb3J0cy5pbnNwZWN0T3B0cy5jb2xvcnMpXG4gICAgOiB0dHkuaXNhdHR5KHByb2Nlc3Muc3RkZXJyLmZkKTtcbn1cblxuLyoqXG4gKiBNYXAgJW8gdG8gYHV0aWwuaW5zcGVjdCgpYCwgYWxsIG9uIGEgc2luZ2xlIGxpbmUuXG4gKi9cblxuZXhwb3J0cy5mb3JtYXR0ZXJzLm8gPSBmdW5jdGlvbih2KSB7XG4gIHRoaXMuaW5zcGVjdE9wdHMuY29sb3JzID0gdGhpcy51c2VDb2xvcnM7XG4gIHJldHVybiB1dGlsLmluc3BlY3QodiwgdGhpcy5pbnNwZWN0T3B0cylcbiAgICAuc3BsaXQoJ1xcbicpLm1hcChmdW5jdGlvbihzdHIpIHtcbiAgICAgIHJldHVybiBzdHIudHJpbSgpXG4gICAgfSkuam9pbignICcpO1xufTtcblxuLyoqXG4gKiBNYXAgJW8gdG8gYHV0aWwuaW5zcGVjdCgpYCwgYWxsb3dpbmcgbXVsdGlwbGUgbGluZXMgaWYgbmVlZGVkLlxuICovXG5cbmV4cG9ydHMuZm9ybWF0dGVycy5PID0gZnVuY3Rpb24odikge1xuICB0aGlzLmluc3BlY3RPcHRzLmNvbG9ycyA9IHRoaXMudXNlQ29sb3JzO1xuICByZXR1cm4gdXRpbC5pbnNwZWN0KHYsIHRoaXMuaW5zcGVjdE9wdHMpO1xufTtcblxuLyoqXG4gKiBBZGRzIEFOU0kgY29sb3IgZXNjYXBlIGNvZGVzIGlmIGVuYWJsZWQuXG4gKlxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5mdW5jdGlvbiBmb3JtYXRBcmdzKGFyZ3MpIHtcbiAgdmFyIG5hbWUgPSB0aGlzLm5hbWVzcGFjZTtcbiAgdmFyIHVzZUNvbG9ycyA9IHRoaXMudXNlQ29sb3JzO1xuXG4gIGlmICh1c2VDb2xvcnMpIHtcbiAgICB2YXIgYyA9IHRoaXMuY29sb3I7XG4gICAgdmFyIGNvbG9yQ29kZSA9ICdcXHUwMDFiWzMnICsgKGMgPCA4ID8gYyA6ICc4OzU7JyArIGMpO1xuICAgIHZhciBwcmVmaXggPSAnICAnICsgY29sb3JDb2RlICsgJzsxbScgKyBuYW1lICsgJyAnICsgJ1xcdTAwMWJbMG0nO1xuXG4gICAgYXJnc1swXSA9IHByZWZpeCArIGFyZ3NbMF0uc3BsaXQoJ1xcbicpLmpvaW4oJ1xcbicgKyBwcmVmaXgpO1xuICAgIGFyZ3MucHVzaChjb2xvckNvZGUgKyAnbSsnICsgZXhwb3J0cy5odW1hbml6ZSh0aGlzLmRpZmYpICsgJ1xcdTAwMWJbMG0nKTtcbiAgfSBlbHNlIHtcbiAgICBhcmdzWzBdID0gZ2V0RGF0ZSgpICsgbmFtZSArICcgJyArIGFyZ3NbMF07XG4gIH1cbn1cblxuZnVuY3Rpb24gZ2V0RGF0ZSgpIHtcbiAgaWYgKGV4cG9ydHMuaW5zcGVjdE9wdHMuaGlkZURhdGUpIHtcbiAgICByZXR1cm4gJyc7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIG5ldyBEYXRlKCkudG9JU09TdHJpbmcoKSArICcgJztcbiAgfVxufVxuXG4vKipcbiAqIEludm9rZXMgYHV0aWwuZm9ybWF0KClgIHdpdGggdGhlIHNwZWNpZmllZCBhcmd1bWVudHMgYW5kIHdyaXRlcyB0byBzdGRlcnIuXG4gKi9cblxuZnVuY3Rpb24gbG9nKCkge1xuICByZXR1cm4gcHJvY2Vzcy5zdGRlcnIud3JpdGUodXRpbC5mb3JtYXQuYXBwbHkodXRpbCwgYXJndW1lbnRzKSArICdcXG4nKTtcbn1cblxuLyoqXG4gKiBTYXZlIGBuYW1lc3BhY2VzYC5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gbmFtZXNwYWNlc1xuICogQGFwaSBwcml2YXRlXG4gKi9cblxuZnVuY3Rpb24gc2F2ZShuYW1lc3BhY2VzKSB7XG4gIGlmIChudWxsID09IG5hbWVzcGFjZXMpIHtcbiAgICAvLyBJZiB5b3Ugc2V0IGEgcHJvY2Vzcy5lbnYgZmllbGQgdG8gbnVsbCBvciB1bmRlZmluZWQsIGl0IGdldHMgY2FzdCB0byB0aGVcbiAgICAvLyBzdHJpbmcgJ251bGwnIG9yICd1bmRlZmluZWQnLiBKdXN0IGRlbGV0ZSBpbnN0ZWFkLlxuICAgIGRlbGV0ZSBwcm9jZXNzLmVudi5ERUJVRztcbiAgfSBlbHNlIHtcbiAgICBwcm9jZXNzLmVudi5ERUJVRyA9IG5hbWVzcGFjZXM7XG4gIH1cbn1cblxuLyoqXG4gKiBMb2FkIGBuYW1lc3BhY2VzYC5cbiAqXG4gKiBAcmV0dXJuIHtTdHJpbmd9IHJldHVybnMgdGhlIHByZXZpb3VzbHkgcGVyc2lzdGVkIGRlYnVnIG1vZGVzXG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5mdW5jdGlvbiBsb2FkKCkge1xuICByZXR1cm4gcHJvY2Vzcy5lbnYuREVCVUc7XG59XG5cbi8qKlxuICogSW5pdCBsb2dpYyBmb3IgYGRlYnVnYCBpbnN0YW5jZXMuXG4gKlxuICogQ3JlYXRlIGEgbmV3IGBpbnNwZWN0T3B0c2Agb2JqZWN0IGluIGNhc2UgYHVzZUNvbG9yc2AgaXMgc2V0XG4gKiBkaWZmZXJlbnRseSBmb3IgYSBwYXJ0aWN1bGFyIGBkZWJ1Z2AgaW5zdGFuY2UuXG4gKi9cblxuZnVuY3Rpb24gaW5pdCAoZGVidWcpIHtcbiAgZGVidWcuaW5zcGVjdE9wdHMgPSB7fTtcblxuICB2YXIga2V5cyA9IE9iamVjdC5rZXlzKGV4cG9ydHMuaW5zcGVjdE9wdHMpO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGtleXMubGVuZ3RoOyBpKyspIHtcbiAgICBkZWJ1Zy5pbnNwZWN0T3B0c1trZXlzW2ldXSA9IGV4cG9ydHMuaW5zcGVjdE9wdHNba2V5c1tpXV07XG4gIH1cbn1cblxuLyoqXG4gKiBFbmFibGUgbmFtZXNwYWNlcyBsaXN0ZWQgaW4gYHByb2Nlc3MuZW52LkRFQlVHYCBpbml0aWFsbHkuXG4gKi9cblxuZXhwb3J0cy5lbmFibGUobG9hZCgpKTtcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInR0eVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJ1dGlsXCIpOyIsIid1c2Ugc3RyaWN0JztcbmNvbnN0IG9zID0gcmVxdWlyZSgnb3MnKTtcbmNvbnN0IGhhc0ZsYWcgPSByZXF1aXJlKCdoYXMtZmxhZycpO1xuXG5jb25zdCBlbnYgPSBwcm9jZXNzLmVudjtcblxubGV0IGZvcmNlQ29sb3I7XG5pZiAoaGFzRmxhZygnbm8tY29sb3InKSB8fFxuXHRoYXNGbGFnKCduby1jb2xvcnMnKSB8fFxuXHRoYXNGbGFnKCdjb2xvcj1mYWxzZScpKSB7XG5cdGZvcmNlQ29sb3IgPSBmYWxzZTtcbn0gZWxzZSBpZiAoaGFzRmxhZygnY29sb3InKSB8fFxuXHRoYXNGbGFnKCdjb2xvcnMnKSB8fFxuXHRoYXNGbGFnKCdjb2xvcj10cnVlJykgfHxcblx0aGFzRmxhZygnY29sb3I9YWx3YXlzJykpIHtcblx0Zm9yY2VDb2xvciA9IHRydWU7XG59XG5pZiAoJ0ZPUkNFX0NPTE9SJyBpbiBlbnYpIHtcblx0Zm9yY2VDb2xvciA9IGVudi5GT1JDRV9DT0xPUi5sZW5ndGggPT09IDAgfHwgcGFyc2VJbnQoZW52LkZPUkNFX0NPTE9SLCAxMCkgIT09IDA7XG59XG5cbmZ1bmN0aW9uIHRyYW5zbGF0ZUxldmVsKGxldmVsKSB7XG5cdGlmIChsZXZlbCA9PT0gMCkge1xuXHRcdHJldHVybiBmYWxzZTtcblx0fVxuXG5cdHJldHVybiB7XG5cdFx0bGV2ZWwsXG5cdFx0aGFzQmFzaWM6IHRydWUsXG5cdFx0aGFzMjU2OiBsZXZlbCA+PSAyLFxuXHRcdGhhczE2bTogbGV2ZWwgPj0gM1xuXHR9O1xufVxuXG5mdW5jdGlvbiBzdXBwb3J0c0NvbG9yKHN0cmVhbSkge1xuXHRpZiAoZm9yY2VDb2xvciA9PT0gZmFsc2UpIHtcblx0XHRyZXR1cm4gMDtcblx0fVxuXG5cdGlmIChoYXNGbGFnKCdjb2xvcj0xNm0nKSB8fFxuXHRcdGhhc0ZsYWcoJ2NvbG9yPWZ1bGwnKSB8fFxuXHRcdGhhc0ZsYWcoJ2NvbG9yPXRydWVjb2xvcicpKSB7XG5cdFx0cmV0dXJuIDM7XG5cdH1cblxuXHRpZiAoaGFzRmxhZygnY29sb3I9MjU2JykpIHtcblx0XHRyZXR1cm4gMjtcblx0fVxuXG5cdGlmIChzdHJlYW0gJiYgIXN0cmVhbS5pc1RUWSAmJiBmb3JjZUNvbG9yICE9PSB0cnVlKSB7XG5cdFx0cmV0dXJuIDA7XG5cdH1cblxuXHRjb25zdCBtaW4gPSBmb3JjZUNvbG9yID8gMSA6IDA7XG5cblx0aWYgKHByb2Nlc3MucGxhdGZvcm0gPT09ICd3aW4zMicpIHtcblx0XHQvLyBOb2RlLmpzIDcuNS4wIGlzIHRoZSBmaXJzdCB2ZXJzaW9uIG9mIE5vZGUuanMgdG8gaW5jbHVkZSBhIHBhdGNoIHRvXG5cdFx0Ly8gbGlidXYgdGhhdCBlbmFibGVzIDI1NiBjb2xvciBvdXRwdXQgb24gV2luZG93cy4gQW55dGhpbmcgZWFybGllciBhbmQgaXRcblx0XHQvLyB3b24ndCB3b3JrLiBIb3dldmVyLCBoZXJlIHdlIHRhcmdldCBOb2RlLmpzIDggYXQgbWluaW11bSBhcyBpdCBpcyBhbiBMVFNcblx0XHQvLyByZWxlYXNlLCBhbmQgTm9kZS5qcyA3IGlzIG5vdC4gV2luZG93cyAxMCBidWlsZCAxMDU4NiBpcyB0aGUgZmlyc3QgV2luZG93c1xuXHRcdC8vIHJlbGVhc2UgdGhhdCBzdXBwb3J0cyAyNTYgY29sb3JzLiBXaW5kb3dzIDEwIGJ1aWxkIDE0OTMxIGlzIHRoZSBmaXJzdCByZWxlYXNlXG5cdFx0Ly8gdGhhdCBzdXBwb3J0cyAxNm0vVHJ1ZUNvbG9yLlxuXHRcdGNvbnN0IG9zUmVsZWFzZSA9IG9zLnJlbGVhc2UoKS5zcGxpdCgnLicpO1xuXHRcdGlmIChcblx0XHRcdE51bWJlcihwcm9jZXNzLnZlcnNpb25zLm5vZGUuc3BsaXQoJy4nKVswXSkgPj0gOCAmJlxuXHRcdFx0TnVtYmVyKG9zUmVsZWFzZVswXSkgPj0gMTAgJiZcblx0XHRcdE51bWJlcihvc1JlbGVhc2VbMl0pID49IDEwNTg2XG5cdFx0KSB7XG5cdFx0XHRyZXR1cm4gTnVtYmVyKG9zUmVsZWFzZVsyXSkgPj0gMTQ5MzEgPyAzIDogMjtcblx0XHR9XG5cblx0XHRyZXR1cm4gMTtcblx0fVxuXG5cdGlmICgnQ0knIGluIGVudikge1xuXHRcdGlmIChbJ1RSQVZJUycsICdDSVJDTEVDSScsICdBUFBWRVlPUicsICdHSVRMQUJfQ0knXS5zb21lKHNpZ24gPT4gc2lnbiBpbiBlbnYpIHx8IGVudi5DSV9OQU1FID09PSAnY29kZXNoaXAnKSB7XG5cdFx0XHRyZXR1cm4gMTtcblx0XHR9XG5cblx0XHRyZXR1cm4gbWluO1xuXHR9XG5cblx0aWYgKCdURUFNQ0lUWV9WRVJTSU9OJyBpbiBlbnYpIHtcblx0XHRyZXR1cm4gL14oOVxcLigwKlsxLTldXFxkKilcXC58XFxkezIsfVxcLikvLnRlc3QoZW52LlRFQU1DSVRZX1ZFUlNJT04pID8gMSA6IDA7XG5cdH1cblxuXHRpZiAoZW52LkNPTE9SVEVSTSA9PT0gJ3RydWVjb2xvcicpIHtcblx0XHRyZXR1cm4gMztcblx0fVxuXG5cdGlmICgnVEVSTV9QUk9HUkFNJyBpbiBlbnYpIHtcblx0XHRjb25zdCB2ZXJzaW9uID0gcGFyc2VJbnQoKGVudi5URVJNX1BST0dSQU1fVkVSU0lPTiB8fCAnJykuc3BsaXQoJy4nKVswXSwgMTApO1xuXG5cdFx0c3dpdGNoIChlbnYuVEVSTV9QUk9HUkFNKSB7XG5cdFx0XHRjYXNlICdpVGVybS5hcHAnOlxuXHRcdFx0XHRyZXR1cm4gdmVyc2lvbiA+PSAzID8gMyA6IDI7XG5cdFx0XHRjYXNlICdBcHBsZV9UZXJtaW5hbCc6XG5cdFx0XHRcdHJldHVybiAyO1xuXHRcdFx0Ly8gTm8gZGVmYXVsdFxuXHRcdH1cblx0fVxuXG5cdGlmICgvLTI1Nihjb2xvcik/JC9pLnRlc3QoZW52LlRFUk0pKSB7XG5cdFx0cmV0dXJuIDI7XG5cdH1cblxuXHRpZiAoL15zY3JlZW58Xnh0ZXJtfF52dDEwMHxednQyMjB8XnJ4dnR8Y29sb3J8YW5zaXxjeWd3aW58bGludXgvaS50ZXN0KGVudi5URVJNKSkge1xuXHRcdHJldHVybiAxO1xuXHR9XG5cblx0aWYgKCdDT0xPUlRFUk0nIGluIGVudikge1xuXHRcdHJldHVybiAxO1xuXHR9XG5cblx0aWYgKGVudi5URVJNID09PSAnZHVtYicpIHtcblx0XHRyZXR1cm4gbWluO1xuXHR9XG5cblx0cmV0dXJuIG1pbjtcbn1cblxuZnVuY3Rpb24gZ2V0U3VwcG9ydExldmVsKHN0cmVhbSkge1xuXHRjb25zdCBsZXZlbCA9IHN1cHBvcnRzQ29sb3Ioc3RyZWFtKTtcblx0cmV0dXJuIHRyYW5zbGF0ZUxldmVsKGxldmVsKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB7XG5cdHN1cHBvcnRzQ29sb3I6IGdldFN1cHBvcnRMZXZlbCxcblx0c3Rkb3V0OiBnZXRTdXBwb3J0TGV2ZWwocHJvY2Vzcy5zdGRvdXQpLFxuXHRzdGRlcnI6IGdldFN1cHBvcnRMZXZlbChwcm9jZXNzLnN0ZGVycilcbn07XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJvc1wiKTsiLCIndXNlIHN0cmljdCc7XG5tb2R1bGUuZXhwb3J0cyA9IChmbGFnLCBhcmd2KSA9PiB7XG5cdGFyZ3YgPSBhcmd2IHx8IHByb2Nlc3MuYXJndjtcblx0Y29uc3QgcHJlZml4ID0gZmxhZy5zdGFydHNXaXRoKCctJykgPyAnJyA6IChmbGFnLmxlbmd0aCA9PT0gMSA/ICctJyA6ICctLScpO1xuXHRjb25zdCBwb3MgPSBhcmd2LmluZGV4T2YocHJlZml4ICsgZmxhZyk7XG5cdGNvbnN0IHRlcm1pbmF0b3JQb3MgPSBhcmd2LmluZGV4T2YoJy0tJyk7XG5cdHJldHVybiBwb3MgIT09IC0xICYmICh0ZXJtaW5hdG9yUG9zID09PSAtMSA/IHRydWUgOiBwb3MgPCB0ZXJtaW5hdG9yUG9zKTtcbn07XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJ6bGliXCIpOyIsIid1c2Ugc3RyaWN0JztcblxudmFyIENhbmNlbCA9IHJlcXVpcmUoJy4vQ2FuY2VsJyk7XG5cbi8qKlxuICogQSBgQ2FuY2VsVG9rZW5gIGlzIGFuIG9iamVjdCB0aGF0IGNhbiBiZSB1c2VkIHRvIHJlcXVlc3QgY2FuY2VsbGF0aW9uIG9mIGFuIG9wZXJhdGlvbi5cbiAqXG4gKiBAY2xhc3NcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGV4ZWN1dG9yIFRoZSBleGVjdXRvciBmdW5jdGlvbi5cbiAqL1xuZnVuY3Rpb24gQ2FuY2VsVG9rZW4oZXhlY3V0b3IpIHtcbiAgaWYgKHR5cGVvZiBleGVjdXRvciAhPT0gJ2Z1bmN0aW9uJykge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ2V4ZWN1dG9yIG11c3QgYmUgYSBmdW5jdGlvbi4nKTtcbiAgfVxuXG4gIHZhciByZXNvbHZlUHJvbWlzZTtcbiAgdGhpcy5wcm9taXNlID0gbmV3IFByb21pc2UoZnVuY3Rpb24gcHJvbWlzZUV4ZWN1dG9yKHJlc29sdmUpIHtcbiAgICByZXNvbHZlUHJvbWlzZSA9IHJlc29sdmU7XG4gIH0pO1xuXG4gIHZhciB0b2tlbiA9IHRoaXM7XG4gIGV4ZWN1dG9yKGZ1bmN0aW9uIGNhbmNlbChtZXNzYWdlKSB7XG4gICAgaWYgKHRva2VuLnJlYXNvbikge1xuICAgICAgLy8gQ2FuY2VsbGF0aW9uIGhhcyBhbHJlYWR5IGJlZW4gcmVxdWVzdGVkXG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdG9rZW4ucmVhc29uID0gbmV3IENhbmNlbChtZXNzYWdlKTtcbiAgICByZXNvbHZlUHJvbWlzZSh0b2tlbi5yZWFzb24pO1xuICB9KTtcbn1cblxuLyoqXG4gKiBUaHJvd3MgYSBgQ2FuY2VsYCBpZiBjYW5jZWxsYXRpb24gaGFzIGJlZW4gcmVxdWVzdGVkLlxuICovXG5DYW5jZWxUb2tlbi5wcm90b3R5cGUudGhyb3dJZlJlcXVlc3RlZCA9IGZ1bmN0aW9uIHRocm93SWZSZXF1ZXN0ZWQoKSB7XG4gIGlmICh0aGlzLnJlYXNvbikge1xuICAgIHRocm93IHRoaXMucmVhc29uO1xuICB9XG59O1xuXG4vKipcbiAqIFJldHVybnMgYW4gb2JqZWN0IHRoYXQgY29udGFpbnMgYSBuZXcgYENhbmNlbFRva2VuYCBhbmQgYSBmdW5jdGlvbiB0aGF0LCB3aGVuIGNhbGxlZCxcbiAqIGNhbmNlbHMgdGhlIGBDYW5jZWxUb2tlbmAuXG4gKi9cbkNhbmNlbFRva2VuLnNvdXJjZSA9IGZ1bmN0aW9uIHNvdXJjZSgpIHtcbiAgdmFyIGNhbmNlbDtcbiAgdmFyIHRva2VuID0gbmV3IENhbmNlbFRva2VuKGZ1bmN0aW9uIGV4ZWN1dG9yKGMpIHtcbiAgICBjYW5jZWwgPSBjO1xuICB9KTtcbiAgcmV0dXJuIHtcbiAgICB0b2tlbjogdG9rZW4sXG4gICAgY2FuY2VsOiBjYW5jZWxcbiAgfTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gQ2FuY2VsVG9rZW47XG4iLCIndXNlIHN0cmljdCc7XG5cbi8qKlxuICogU3ludGFjdGljIHN1Z2FyIGZvciBpbnZva2luZyBhIGZ1bmN0aW9uIGFuZCBleHBhbmRpbmcgYW4gYXJyYXkgZm9yIGFyZ3VtZW50cy5cbiAqXG4gKiBDb21tb24gdXNlIGNhc2Ugd291bGQgYmUgdG8gdXNlIGBGdW5jdGlvbi5wcm90b3R5cGUuYXBwbHlgLlxuICpcbiAqICBgYGBqc1xuICogIGZ1bmN0aW9uIGYoeCwgeSwgeikge31cbiAqICB2YXIgYXJncyA9IFsxLCAyLCAzXTtcbiAqICBmLmFwcGx5KG51bGwsIGFyZ3MpO1xuICogIGBgYFxuICpcbiAqIFdpdGggYHNwcmVhZGAgdGhpcyBleGFtcGxlIGNhbiBiZSByZS13cml0dGVuLlxuICpcbiAqICBgYGBqc1xuICogIHNwcmVhZChmdW5jdGlvbih4LCB5LCB6KSB7fSkoWzEsIDIsIDNdKTtcbiAqICBgYGBcbiAqXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYWxsYmFja1xuICogQHJldHVybnMge0Z1bmN0aW9ufVxuICovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIHNwcmVhZChjYWxsYmFjaykge1xuICByZXR1cm4gZnVuY3Rpb24gd3JhcChhcnIpIHtcbiAgICByZXR1cm4gY2FsbGJhY2suYXBwbHkobnVsbCwgYXJyKTtcbiAgfTtcbn07XG4iLCJjb25zdCBGaW5kRmlsZXMgPSByZXF1aXJlKFwibm9kZS1maW5kLWZpbGVzXCIpO1xyXG5cclxuZXhwb3J0IGxldCBjbnQ9MCxlcnJvcnM9MDtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBmaW5kRmlsZXMocm9vdEZvbGRlciwgZmlsZU1vZGlmaWVkRGF0ZSwgb25GaWxlKSB7XHJcbiAgICB2YXIgZmluZGVyID0gbmV3IEZpbmRGaWxlcyh7XHJcbiAgICAgICAgcm9vdEZvbGRlcixcclxuICAgICAgICBmaWxlTW9kaWZpZWREYXRlXHJcbiAgICB9KTtcclxuICAgIHZhciByZXN1bHQscmVzb2x2ZSxyZWplY3Q7XHJcbiAgICBjbnQ9MDsgZXJyb3JzPTA7XHJcblxyXG4gICAgZmluZGVyLm9uKFwibWF0Y2hcIiwgZnVuY3Rpb24oc3RyUGF0aCwgc3RhdCkge1xyXG4gICAgICAgIGlmIChvbkZpbGUpIG9uRmlsZShzdHJQYXRoLCBzdGF0KTtcclxuICAgICAgICBjbnQrKztcclxuICAgIH0pO1xyXG4gICAgZmluZGVyLm9uKFwiY29tcGxldGVcIiwgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgcmVzb2x2ZShjbnQpO1xyXG4gICAgfSk7XHJcbiAgICBmaW5kZXIub24oXCJwYXRoZXJyb3JcIiwgZnVuY3Rpb24oZXJyLCBzdHJQYXRoKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJFcnJvciBmb3IgUGF0aCBcIiArIHN0clBhdGggKyBcIiBcIiArIGVycik7ICAvLyBOb3RlIHRoYXQgYW4gZXJyb3IgaW4gYWNjZXNzaW5nIGEgcGFydGljdWxhciBmaWxlIGRvZXMgbm90IHN0b3AgdGhlIHdob2xlIHNob3dcclxuICAgICAgICBlcnJvcnMrKztcclxuICAgIH0pO1xyXG4gICAgZmluZGVyLm9uKFwiZXJyb3JcIiwgZnVuY3Rpb24oZXJyKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJHbG9iYWwgRXJyb3IgXCIgKyBlcnIpO1xyXG4gICAgICAgIGVycm9ycysrO1xyXG4gICAgfSk7XHJcblxyXG4gICAgcmVzdWx0ID0gbmV3IFByb21pc2UoKF9yZXNvbHZlLF9yZWplY3QpPT57XHJcbiAgICAgICAgcmVzb2x2ZSA9IF9yZXNvbHZlO1xyXG4gICAgICAgIHJlamVjdCA9IF9yZWplY3Q7XHJcbiAgICAgICAgZmluZGVyLnN0YXJ0U2VhcmNoKCk7XHJcbiAgICB9KTtcclxuICAgIHJldHVybiByZXN1bHQ7XHJcbn1cclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19pbXBvcnREZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydERlZmF1bHQpIHx8IGZ1bmN0aW9uIChtb2QpIHtcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IFwiZGVmYXVsdFwiOiBtb2QgfTtcbn07XG5jb25zdCBmc18xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCJmc1wiKSk7XG5jb25zdCBhc3luY18xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCJhc3luY1wiKSk7XG5jb25zdCBwYXRoXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcInBhdGhcIikpO1xuY29uc3QgZXZlbnRzXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcImV2ZW50c1wiKSk7XG52YXIgRXZlbnRFbWl0dGVyID0gZXZlbnRzXzEuZGVmYXVsdC5FdmVudEVtaXR0ZXI7XG4vKioqXG4gKiBUaGlzIGNsYXNzIHJlY3Vyc2l2ZWx5IGZpbmRzIGZpbGVzIHRoYXQgbWF0Y2ggdGhlIGZpbHRlciBmdW5jdGlvbiBwYXNzZWQgdG8gdGhlIGNvbnN0cnVjdG9yXG4gKiBBbiBhbHRlcm5hdGl2ZSBjb25zdHJ1Y3RvciB0YWtlcyBhIGZpbGVNb2RpZmllZERhdGUgYW5kIHJldHVybnMgYWxsIGZpbGVzIHRoYXQgaGF2ZSBiZWVuIG1vZGlmaWVkIHNpbmNlIHRoYXQgZGF0ZVxuICogdGhpcyBjbGFzcyBlbWl0cyBhIG51bWJlciBvZiBldmVudHNcbiAqIG9uIFwibWF0Y2hcIiBpcyBlbWl0dGVkIGZvciBldmVyeSBwYXRoIHRoYXQgbWF0Y2hlc1xuICovXG5jbGFzcyBmaW5kZXIgZXh0ZW5kcyBFdmVudEVtaXR0ZXIge1xuICAgIGNvbnN0cnVjdG9yKG9wdGlvbnMpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgaWYgKG9wdGlvbnMuZmlsZU1vZGlmaWVkRGF0ZSkge1xuICAgICAgICAgICAgb3B0aW9ucy5maWx0ZXJGdW5jdGlvbiA9IChzdHJQYXRoLCBmc1N0YXQpID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gKGZzU3RhdC5tdGltZSA+IG9wdGlvbnMuZmlsZU1vZGlmaWVkRGF0ZSk7XG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICAgIGlmICghb3B0aW9ucy5maWx0ZXJGdW5jdGlvbikge1xuICAgICAgICAgICAgb3B0aW9ucy5maWx0ZXJGdW5jdGlvbiA9ICgpID0+IHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5vcHRpb25zID0gb3B0aW9ucztcbiAgICB9XG4gICAgc3RhcnRTZWFyY2goKSB7XG4gICAgICAgIHRoaXMucmVjdXJzZUZvbGRlcih0aGlzLm9wdGlvbnMucm9vdEZvbGRlciwgKGVycikgPT4ge1xuICAgICAgICAgICAgaWYgKGVycikge1xuICAgICAgICAgICAgICAgIHRoaXMuZW1pdChcImVycm9yXCIsIGVycik7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhcIlRoaXMgU2hvdWxkIENhbGwgd2hlbiBldmVyeXRoaW5nIGlzIGZpbmlzaGVkXCIpO1xuICAgICAgICAgICAgdGhpcy5lbWl0KFwiY29tcGxldGVcIik7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICByZWN1cnNlRm9sZGVyKHN0ckZvbGRlck5hbWUsIGZvbGRlckNvbXBsZXRlQ2FsbGJhY2spIHtcbiAgICAgICAgZnNfMS5kZWZhdWx0LnJlYWRkaXIoc3RyRm9sZGVyTmFtZSwgKGVyciwgZmlsZXMpID0+IHtcbiAgICAgICAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgICAgICAgICB0aGlzLm9uUGF0aEVycm9yKGVyciwgc3RyRm9sZGVyTmFtZSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZvbGRlckNvbXBsZXRlQ2FsbGJhY2soZXJyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICghZmlsZXMpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZm9sZGVyQ29tcGxldGVDYWxsYmFjayhudWxsKTsgLy8gVGhpcyBpcyBqdXN0IGFuIGVtcHR5IGZvbGRlclxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYXN5bmNfMS5kZWZhdWx0LmVhY2goZmlsZXMsIChmaWxlLCBjYWxsYmFjaykgPT4ge1xuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBzdHJQYXRoID0gcGF0aF8xLmRlZmF1bHQuam9pbihzdHJGb2xkZXJOYW1lLCBmaWxlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5vblBhdGhFcnJvcihlLCBzdHJQYXRoKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGNhbGxiYWNrKG51bGwpOyAvLyBEb24ndCByZXR1cm4gZXJyb3IgdG8gY2FsbGJhY2sgb3Igd2Ugd2lsbCBtaXNzIG90aGVyIGZpbGVzIGluIGRpcmVjdG9yeVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGlzLm9uRmlsZUZvdW5kKHN0clBhdGgsIGNhbGxiYWNrKTtcbiAgICAgICAgICAgIH0sIChlcnIpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoZXJyKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMub25QYXRoRXJyb3IoZXJyLCBzdHJGb2xkZXJOYW1lKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgIGlmKHN0ckZvbGRlck5hbWUubGVuZ3RoIDwgMjApXG4gICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImZpbmlzaGVkIFwiICsgc3RyRm9sZGVyTmFtZSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZvbGRlckNvbXBsZXRlQ2FsbGJhY2soZXJyKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgb25GaWxlRm91bmQoc3RyUGF0aCwgY2FsbGJhY2spIHtcbiAgICAgICAgZnNfMS5kZWZhdWx0LmxzdGF0KHN0clBhdGgsIChlcnIsIHN0YXQpID0+IHtcbiAgICAgICAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgICAgICAgICB0aGlzLm9uUGF0aEVycm9yKGVyciwgc3RyUGF0aCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGNhbGxiYWNrKG51bGwpOyAvLyBEb24ndCByZXR1cm4gZXJyb3IgdG8gY2FsbGJhY2sgb3Igd2Ugd2lsbCBtaXNzIG90aGVyIGZpbGVzIGluIGRpcmVjdG9yeVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCFzdGF0KSB7XG4gICAgICAgICAgICAgICAgdGhpcy5vblBhdGhFcnJvcihuZXcgRXJyb3IoXCJDb3VsZCBub3QgZ2V0IHN0YXQgZm9yIGZpbGUgXCIgKyBzdHJQYXRoKSwgc3RyUGF0aCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGNhbGxiYWNrKG51bGwpOyAvLyBEb24ndCByZXR1cm4gZXJyb3IgdG8gY2FsbGJhY2sgb3Igd2Ugd2lsbCBtaXNzIG90aGVyIGZpbGVzIGluIGRpcmVjdG9yeVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHN0YXQuaXNEaXJlY3RvcnkoKSkge1xuICAgICAgICAgICAgICAgIHRoaXMuY2hlY2tNYXRjaChzdHJQYXRoLCBzdGF0KTtcbiAgICAgICAgICAgICAgICB0aGlzLnJlY3Vyc2VGb2xkZXIoc3RyUGF0aCwgKGVycikgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAoZXJyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm9uUGF0aEVycm9yKGVyciwgc3RyUGF0aCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGNhbGxiYWNrKG51bGwpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jaGVja01hdGNoKHN0clBhdGgsIHN0YXQpO1xuICAgICAgICAgICAgICAgIHJldHVybiBjYWxsYmFjayhudWxsKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGNoZWNrTWF0Y2goc3RyUGF0aCwgc3RhdCkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5maWx0ZXJGdW5jdGlvbihzdHJQYXRoLCBzdGF0KSkge1xuICAgICAgICAgICAgICAgIHRoaXMuZW1pdChcIm1hdGNoXCIsIHN0clBhdGgsIHN0YXQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGNhdGNoIChlKSB7XG4gICAgICAgICAgICB0aGlzLm9uUGF0aEVycm9yKGUsIHN0clBhdGgpO1xuICAgICAgICB9XG4gICAgfVxuICAgIG9uUGF0aEVycm9yKGVyciwgc3RyUGF0aCkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgdGhpcy5lbWl0KFwicGF0aGVycm9yXCIsIGVyciwgc3RyUGF0aCk7XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgIC8vQWxyZWFkeSBlbWl0dGVkIGEgcGF0aCBlcnJvciBhbmQgdGhlIGhhbmRsZXIgZmFpbGVkIG11c3Qgbm90IHRocm93IGVycm9yIG9yIG90aGVyIGZpbGVzIHdpbGwgZmFpbCB0byBwcm9jZXNzIHRvb1xuICAgICAgICAgICAgdGhpcy5lbWl0KFwiZXJyb3JcIiwgbmV3IEVycm9yKFwiRXJyb3IgaW4gcGF0aCBFcnJvciBIYW5kbGVyXCIgKyBlKSk7XG4gICAgICAgIH1cbiAgICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZpbmRlcjtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPW5vZGUtZmluZC1maWxlcy5qcy5tYXAiLCIvKmdsb2JhbCBzZXRJbW1lZGlhdGU6IGZhbHNlLCBzZXRUaW1lb3V0OiBmYWxzZSwgY29uc29sZTogZmFsc2UgKi9cbihmdW5jdGlvbiAoKSB7XG5cbiAgICB2YXIgYXN5bmMgPSB7fTtcblxuICAgIC8vIGdsb2JhbCBvbiB0aGUgc2VydmVyLCB3aW5kb3cgaW4gdGhlIGJyb3dzZXJcbiAgICB2YXIgcm9vdCwgcHJldmlvdXNfYXN5bmM7XG5cbiAgICByb290ID0gdGhpcztcbiAgICBpZiAocm9vdCAhPSBudWxsKSB7XG4gICAgICBwcmV2aW91c19hc3luYyA9IHJvb3QuYXN5bmM7XG4gICAgfVxuXG4gICAgYXN5bmMubm9Db25mbGljdCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcm9vdC5hc3luYyA9IHByZXZpb3VzX2FzeW5jO1xuICAgICAgICByZXR1cm4gYXN5bmM7XG4gICAgfTtcblxuICAgIGZ1bmN0aW9uIG9ubHlfb25jZShmbikge1xuICAgICAgICB2YXIgY2FsbGVkID0gZmFsc2U7XG4gICAgICAgIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIGlmIChjYWxsZWQpIHRocm93IG5ldyBFcnJvcihcIkNhbGxiYWNrIHdhcyBhbHJlYWR5IGNhbGxlZC5cIik7XG4gICAgICAgICAgICBjYWxsZWQgPSB0cnVlO1xuICAgICAgICAgICAgZm4uYXBwbHkocm9vdCwgYXJndW1lbnRzKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vLy8gY3Jvc3MtYnJvd3NlciBjb21wYXRpYmxpdHkgZnVuY3Rpb25zIC8vLy9cblxuICAgIHZhciBfZWFjaCA9IGZ1bmN0aW9uIChhcnIsIGl0ZXJhdG9yKSB7XG4gICAgICAgIGlmIChhcnIuZm9yRWFjaCkge1xuICAgICAgICAgICAgcmV0dXJuIGFyci5mb3JFYWNoKGl0ZXJhdG9yKTtcbiAgICAgICAgfVxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFyci5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICAgICAgaXRlcmF0b3IoYXJyW2ldLCBpLCBhcnIpO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIHZhciBfbWFwID0gZnVuY3Rpb24gKGFyciwgaXRlcmF0b3IpIHtcbiAgICAgICAgaWYgKGFyci5tYXApIHtcbiAgICAgICAgICAgIHJldHVybiBhcnIubWFwKGl0ZXJhdG9yKTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgcmVzdWx0cyA9IFtdO1xuICAgICAgICBfZWFjaChhcnIsIGZ1bmN0aW9uICh4LCBpLCBhKSB7XG4gICAgICAgICAgICByZXN1bHRzLnB1c2goaXRlcmF0b3IoeCwgaSwgYSkpO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdHM7XG4gICAgfTtcblxuICAgIHZhciBfcmVkdWNlID0gZnVuY3Rpb24gKGFyciwgaXRlcmF0b3IsIG1lbW8pIHtcbiAgICAgICAgaWYgKGFyci5yZWR1Y2UpIHtcbiAgICAgICAgICAgIHJldHVybiBhcnIucmVkdWNlKGl0ZXJhdG9yLCBtZW1vKTtcbiAgICAgICAgfVxuICAgICAgICBfZWFjaChhcnIsIGZ1bmN0aW9uICh4LCBpLCBhKSB7XG4gICAgICAgICAgICBtZW1vID0gaXRlcmF0b3IobWVtbywgeCwgaSwgYSk7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gbWVtbztcbiAgICB9O1xuXG4gICAgdmFyIF9rZXlzID0gZnVuY3Rpb24gKG9iaikge1xuICAgICAgICBpZiAoT2JqZWN0LmtleXMpIHtcbiAgICAgICAgICAgIHJldHVybiBPYmplY3Qua2V5cyhvYmopO1xuICAgICAgICB9XG4gICAgICAgIHZhciBrZXlzID0gW107XG4gICAgICAgIGZvciAodmFyIGsgaW4gb2JqKSB7XG4gICAgICAgICAgICBpZiAob2JqLmhhc093blByb3BlcnR5KGspKSB7XG4gICAgICAgICAgICAgICAga2V5cy5wdXNoKGspO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBrZXlzO1xuICAgIH07XG5cbiAgICAvLy8vIGV4cG9ydGVkIGFzeW5jIG1vZHVsZSBmdW5jdGlvbnMgLy8vL1xuXG4gICAgLy8vLyBuZXh0VGljayBpbXBsZW1lbnRhdGlvbiB3aXRoIGJyb3dzZXItY29tcGF0aWJsZSBmYWxsYmFjayAvLy8vXG4gICAgaWYgKHR5cGVvZiBwcm9jZXNzID09PSAndW5kZWZpbmVkJyB8fCAhKHByb2Nlc3MubmV4dFRpY2spKSB7XG4gICAgICAgIGlmICh0eXBlb2Ygc2V0SW1tZWRpYXRlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBhc3luYy5uZXh0VGljayA9IGZ1bmN0aW9uIChmbikge1xuICAgICAgICAgICAgICAgIHNldEltbWVkaWF0ZShmbik7XG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgYXN5bmMubmV4dFRpY2sgPSBmdW5jdGlvbiAoZm4pIHtcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KGZuLCAwKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIGFzeW5jLm5leHRUaWNrID0gcHJvY2Vzcy5uZXh0VGljaztcbiAgICB9XG5cbiAgICBhc3luYy5lYWNoID0gZnVuY3Rpb24gKGFyciwgaXRlcmF0b3IsIGNhbGxiYWNrKSB7XG4gICAgICAgIGNhbGxiYWNrID0gY2FsbGJhY2sgfHwgZnVuY3Rpb24gKCkge307XG4gICAgICAgIGlmICghYXJyLmxlbmd0aCkge1xuICAgICAgICAgICAgcmV0dXJuIGNhbGxiYWNrKCk7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGNvbXBsZXRlZCA9IDA7XG4gICAgICAgIF9lYWNoKGFyciwgZnVuY3Rpb24gKHgpIHtcbiAgICAgICAgICAgIGl0ZXJhdG9yKHgsIG9ubHlfb25jZShmdW5jdGlvbiAoZXJyKSB7XG4gICAgICAgICAgICAgICAgaWYgKGVycikge1xuICAgICAgICAgICAgICAgICAgICBjYWxsYmFjayhlcnIpO1xuICAgICAgICAgICAgICAgICAgICBjYWxsYmFjayA9IGZ1bmN0aW9uICgpIHt9O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgY29tcGxldGVkICs9IDE7XG4gICAgICAgICAgICAgICAgICAgIGlmIChjb21wbGV0ZWQgPj0gYXJyLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2sobnVsbCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KSk7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgYXN5bmMuZm9yRWFjaCA9IGFzeW5jLmVhY2g7XG5cbiAgICBhc3luYy5lYWNoU2VyaWVzID0gZnVuY3Rpb24gKGFyciwgaXRlcmF0b3IsIGNhbGxiYWNrKSB7XG4gICAgICAgIGNhbGxiYWNrID0gY2FsbGJhY2sgfHwgZnVuY3Rpb24gKCkge307XG4gICAgICAgIGlmICghYXJyLmxlbmd0aCkge1xuICAgICAgICAgICAgcmV0dXJuIGNhbGxiYWNrKCk7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGNvbXBsZXRlZCA9IDA7XG4gICAgICAgIHZhciBpdGVyYXRlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIHN5bmMgPSB0cnVlO1xuICAgICAgICAgICAgaXRlcmF0b3IoYXJyW2NvbXBsZXRlZF0sIGZ1bmN0aW9uIChlcnIpIHtcbiAgICAgICAgICAgICAgICBpZiAoZXJyKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrKGVycik7XG4gICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrID0gZnVuY3Rpb24gKCkge307XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBjb21wbGV0ZWQgKz0gMTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNvbXBsZXRlZCA+PSBhcnIubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjayhudWxsKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzeW5jKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXN5bmMubmV4dFRpY2soaXRlcmF0ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVyYXRlKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHN5bmMgPSBmYWxzZTtcbiAgICAgICAgfTtcbiAgICAgICAgaXRlcmF0ZSgpO1xuICAgIH07XG4gICAgYXN5bmMuZm9yRWFjaFNlcmllcyA9IGFzeW5jLmVhY2hTZXJpZXM7XG5cbiAgICBhc3luYy5lYWNoTGltaXQgPSBmdW5jdGlvbiAoYXJyLCBsaW1pdCwgaXRlcmF0b3IsIGNhbGxiYWNrKSB7XG4gICAgICAgIHZhciBmbiA9IF9lYWNoTGltaXQobGltaXQpO1xuICAgICAgICBmbi5hcHBseShudWxsLCBbYXJyLCBpdGVyYXRvciwgY2FsbGJhY2tdKTtcbiAgICB9O1xuICAgIGFzeW5jLmZvckVhY2hMaW1pdCA9IGFzeW5jLmVhY2hMaW1pdDtcblxuICAgIHZhciBfZWFjaExpbWl0ID0gZnVuY3Rpb24gKGxpbWl0KSB7XG5cbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uIChhcnIsIGl0ZXJhdG9yLCBjYWxsYmFjaykge1xuICAgICAgICAgICAgY2FsbGJhY2sgPSBjYWxsYmFjayB8fCBmdW5jdGlvbiAoKSB7fTtcbiAgICAgICAgICAgIGlmICghYXJyLmxlbmd0aCB8fCBsaW1pdCA8PSAwKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGNhbGxiYWNrKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgY29tcGxldGVkID0gMDtcbiAgICAgICAgICAgIHZhciBzdGFydGVkID0gMDtcbiAgICAgICAgICAgIHZhciBydW5uaW5nID0gMDtcblxuICAgICAgICAgICAgKGZ1bmN0aW9uIHJlcGxlbmlzaCAoKSB7XG4gICAgICAgICAgICAgICAgaWYgKGNvbXBsZXRlZCA+PSBhcnIubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBjYWxsYmFjaygpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHdoaWxlIChydW5uaW5nIDwgbGltaXQgJiYgc3RhcnRlZCA8IGFyci5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgc3RhcnRlZCArPSAxO1xuICAgICAgICAgICAgICAgICAgICBydW5uaW5nICs9IDE7XG4gICAgICAgICAgICAgICAgICAgIGl0ZXJhdG9yKGFycltzdGFydGVkIC0gMV0sIGZ1bmN0aW9uIChlcnIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjayhlcnIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrID0gZnVuY3Rpb24gKCkge307XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb21wbGV0ZWQgKz0gMTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBydW5uaW5nIC09IDE7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGNvbXBsZXRlZCA+PSBhcnIubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXBsZW5pc2goKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pKCk7XG4gICAgICAgIH07XG4gICAgfTtcblxuXG4gICAgdmFyIGRvUGFyYWxsZWwgPSBmdW5jdGlvbiAoZm4pIHtcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBhcmdzID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzKTtcbiAgICAgICAgICAgIHJldHVybiBmbi5hcHBseShudWxsLCBbYXN5bmMuZWFjaF0uY29uY2F0KGFyZ3MpKTtcbiAgICAgICAgfTtcbiAgICB9O1xuICAgIHZhciBkb1BhcmFsbGVsTGltaXQgPSBmdW5jdGlvbihsaW1pdCwgZm4pIHtcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBhcmdzID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzKTtcbiAgICAgICAgICAgIHJldHVybiBmbi5hcHBseShudWxsLCBbX2VhY2hMaW1pdChsaW1pdCldLmNvbmNhdChhcmdzKSk7XG4gICAgICAgIH07XG4gICAgfTtcbiAgICB2YXIgZG9TZXJpZXMgPSBmdW5jdGlvbiAoZm4pIHtcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBhcmdzID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzKTtcbiAgICAgICAgICAgIHJldHVybiBmbi5hcHBseShudWxsLCBbYXN5bmMuZWFjaFNlcmllc10uY29uY2F0KGFyZ3MpKTtcbiAgICAgICAgfTtcbiAgICB9O1xuXG5cbiAgICB2YXIgX2FzeW5jTWFwID0gZnVuY3Rpb24gKGVhY2hmbiwgYXJyLCBpdGVyYXRvciwgY2FsbGJhY2spIHtcbiAgICAgICAgdmFyIHJlc3VsdHMgPSBbXTtcbiAgICAgICAgYXJyID0gX21hcChhcnIsIGZ1bmN0aW9uICh4LCBpKSB7XG4gICAgICAgICAgICByZXR1cm4ge2luZGV4OiBpLCB2YWx1ZTogeH07XG4gICAgICAgIH0pO1xuICAgICAgICBlYWNoZm4oYXJyLCBmdW5jdGlvbiAoeCwgY2FsbGJhY2spIHtcbiAgICAgICAgICAgIGl0ZXJhdG9yKHgudmFsdWUsIGZ1bmN0aW9uIChlcnIsIHYpIHtcbiAgICAgICAgICAgICAgICByZXN1bHRzW3guaW5kZXhdID0gdjtcbiAgICAgICAgICAgICAgICBjYWxsYmFjayhlcnIpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0sIGZ1bmN0aW9uIChlcnIpIHtcbiAgICAgICAgICAgIGNhbGxiYWNrKGVyciwgcmVzdWx0cyk7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgYXN5bmMubWFwID0gZG9QYXJhbGxlbChfYXN5bmNNYXApO1xuICAgIGFzeW5jLm1hcFNlcmllcyA9IGRvU2VyaWVzKF9hc3luY01hcCk7XG4gICAgYXN5bmMubWFwTGltaXQgPSBmdW5jdGlvbiAoYXJyLCBsaW1pdCwgaXRlcmF0b3IsIGNhbGxiYWNrKSB7XG4gICAgICAgIHJldHVybiBfbWFwTGltaXQobGltaXQpKGFyciwgaXRlcmF0b3IsIGNhbGxiYWNrKTtcbiAgICB9O1xuXG4gICAgdmFyIF9tYXBMaW1pdCA9IGZ1bmN0aW9uKGxpbWl0KSB7XG4gICAgICAgIHJldHVybiBkb1BhcmFsbGVsTGltaXQobGltaXQsIF9hc3luY01hcCk7XG4gICAgfTtcblxuICAgIC8vIHJlZHVjZSBvbmx5IGhhcyBhIHNlcmllcyB2ZXJzaW9uLCBhcyBkb2luZyByZWR1Y2UgaW4gcGFyYWxsZWwgd29uJ3RcbiAgICAvLyB3b3JrIGluIG1hbnkgc2l0dWF0aW9ucy5cbiAgICBhc3luYy5yZWR1Y2UgPSBmdW5jdGlvbiAoYXJyLCBtZW1vLCBpdGVyYXRvciwgY2FsbGJhY2spIHtcbiAgICAgICAgYXN5bmMuZWFjaFNlcmllcyhhcnIsIGZ1bmN0aW9uICh4LCBjYWxsYmFjaykge1xuICAgICAgICAgICAgaXRlcmF0b3IobWVtbywgeCwgZnVuY3Rpb24gKGVyciwgdikge1xuICAgICAgICAgICAgICAgIG1lbW8gPSB2O1xuICAgICAgICAgICAgICAgIGNhbGxiYWNrKGVycik7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSwgZnVuY3Rpb24gKGVycikge1xuICAgICAgICAgICAgY2FsbGJhY2soZXJyLCBtZW1vKTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICAvLyBpbmplY3QgYWxpYXNcbiAgICBhc3luYy5pbmplY3QgPSBhc3luYy5yZWR1Y2U7XG4gICAgLy8gZm9sZGwgYWxpYXNcbiAgICBhc3luYy5mb2xkbCA9IGFzeW5jLnJlZHVjZTtcblxuICAgIGFzeW5jLnJlZHVjZVJpZ2h0ID0gZnVuY3Rpb24gKGFyciwgbWVtbywgaXRlcmF0b3IsIGNhbGxiYWNrKSB7XG4gICAgICAgIHZhciByZXZlcnNlZCA9IF9tYXAoYXJyLCBmdW5jdGlvbiAoeCkge1xuICAgICAgICAgICAgcmV0dXJuIHg7XG4gICAgICAgIH0pLnJldmVyc2UoKTtcbiAgICAgICAgYXN5bmMucmVkdWNlKHJldmVyc2VkLCBtZW1vLCBpdGVyYXRvciwgY2FsbGJhY2spO1xuICAgIH07XG4gICAgLy8gZm9sZHIgYWxpYXNcbiAgICBhc3luYy5mb2xkciA9IGFzeW5jLnJlZHVjZVJpZ2h0O1xuXG4gICAgdmFyIF9maWx0ZXIgPSBmdW5jdGlvbiAoZWFjaGZuLCBhcnIsIGl0ZXJhdG9yLCBjYWxsYmFjaykge1xuICAgICAgICB2YXIgcmVzdWx0cyA9IFtdO1xuICAgICAgICBhcnIgPSBfbWFwKGFyciwgZnVuY3Rpb24gKHgsIGkpIHtcbiAgICAgICAgICAgIHJldHVybiB7aW5kZXg6IGksIHZhbHVlOiB4fTtcbiAgICAgICAgfSk7XG4gICAgICAgIGVhY2hmbihhcnIsIGZ1bmN0aW9uICh4LCBjYWxsYmFjaykge1xuICAgICAgICAgICAgaXRlcmF0b3IoeC52YWx1ZSwgZnVuY3Rpb24gKHYpIHtcbiAgICAgICAgICAgICAgICBpZiAodikge1xuICAgICAgICAgICAgICAgICAgICByZXN1bHRzLnB1c2goeCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNhbGxiYWNrKCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSwgZnVuY3Rpb24gKGVycikge1xuICAgICAgICAgICAgY2FsbGJhY2soX21hcChyZXN1bHRzLnNvcnQoZnVuY3Rpb24gKGEsIGIpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gYS5pbmRleCAtIGIuaW5kZXg7XG4gICAgICAgICAgICB9KSwgZnVuY3Rpb24gKHgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4geC52YWx1ZTtcbiAgICAgICAgICAgIH0pKTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICBhc3luYy5maWx0ZXIgPSBkb1BhcmFsbGVsKF9maWx0ZXIpO1xuICAgIGFzeW5jLmZpbHRlclNlcmllcyA9IGRvU2VyaWVzKF9maWx0ZXIpO1xuICAgIC8vIHNlbGVjdCBhbGlhc1xuICAgIGFzeW5jLnNlbGVjdCA9IGFzeW5jLmZpbHRlcjtcbiAgICBhc3luYy5zZWxlY3RTZXJpZXMgPSBhc3luYy5maWx0ZXJTZXJpZXM7XG5cbiAgICB2YXIgX3JlamVjdCA9IGZ1bmN0aW9uIChlYWNoZm4sIGFyciwgaXRlcmF0b3IsIGNhbGxiYWNrKSB7XG4gICAgICAgIHZhciByZXN1bHRzID0gW107XG4gICAgICAgIGFyciA9IF9tYXAoYXJyLCBmdW5jdGlvbiAoeCwgaSkge1xuICAgICAgICAgICAgcmV0dXJuIHtpbmRleDogaSwgdmFsdWU6IHh9O1xuICAgICAgICB9KTtcbiAgICAgICAgZWFjaGZuKGFyciwgZnVuY3Rpb24gKHgsIGNhbGxiYWNrKSB7XG4gICAgICAgICAgICBpdGVyYXRvcih4LnZhbHVlLCBmdW5jdGlvbiAodikge1xuICAgICAgICAgICAgICAgIGlmICghdikge1xuICAgICAgICAgICAgICAgICAgICByZXN1bHRzLnB1c2goeCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNhbGxiYWNrKCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSwgZnVuY3Rpb24gKGVycikge1xuICAgICAgICAgICAgY2FsbGJhY2soX21hcChyZXN1bHRzLnNvcnQoZnVuY3Rpb24gKGEsIGIpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gYS5pbmRleCAtIGIuaW5kZXg7XG4gICAgICAgICAgICB9KSwgZnVuY3Rpb24gKHgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4geC52YWx1ZTtcbiAgICAgICAgICAgIH0pKTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICBhc3luYy5yZWplY3QgPSBkb1BhcmFsbGVsKF9yZWplY3QpO1xuICAgIGFzeW5jLnJlamVjdFNlcmllcyA9IGRvU2VyaWVzKF9yZWplY3QpO1xuXG4gICAgdmFyIF9kZXRlY3QgPSBmdW5jdGlvbiAoZWFjaGZuLCBhcnIsIGl0ZXJhdG9yLCBtYWluX2NhbGxiYWNrKSB7XG4gICAgICAgIGVhY2hmbihhcnIsIGZ1bmN0aW9uICh4LCBjYWxsYmFjaykge1xuICAgICAgICAgICAgaXRlcmF0b3IoeCwgZnVuY3Rpb24gKHJlc3VsdCkge1xuICAgICAgICAgICAgICAgIGlmIChyZXN1bHQpIHtcbiAgICAgICAgICAgICAgICAgICAgbWFpbl9jYWxsYmFjayh4KTtcbiAgICAgICAgICAgICAgICAgICAgbWFpbl9jYWxsYmFjayA9IGZ1bmN0aW9uICgpIHt9O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2soKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSwgZnVuY3Rpb24gKGVycikge1xuICAgICAgICAgICAgbWFpbl9jYWxsYmFjaygpO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIGFzeW5jLmRldGVjdCA9IGRvUGFyYWxsZWwoX2RldGVjdCk7XG4gICAgYXN5bmMuZGV0ZWN0U2VyaWVzID0gZG9TZXJpZXMoX2RldGVjdCk7XG5cbiAgICBhc3luYy5zb21lID0gZnVuY3Rpb24gKGFyciwgaXRlcmF0b3IsIG1haW5fY2FsbGJhY2spIHtcbiAgICAgICAgYXN5bmMuZWFjaChhcnIsIGZ1bmN0aW9uICh4LCBjYWxsYmFjaykge1xuICAgICAgICAgICAgaXRlcmF0b3IoeCwgZnVuY3Rpb24gKHYpIHtcbiAgICAgICAgICAgICAgICBpZiAodikge1xuICAgICAgICAgICAgICAgICAgICBtYWluX2NhbGxiYWNrKHRydWUpO1xuICAgICAgICAgICAgICAgICAgICBtYWluX2NhbGxiYWNrID0gZnVuY3Rpb24gKCkge307XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNhbGxiYWNrKCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSwgZnVuY3Rpb24gKGVycikge1xuICAgICAgICAgICAgbWFpbl9jYWxsYmFjayhmYWxzZSk7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgLy8gYW55IGFsaWFzXG4gICAgYXN5bmMuYW55ID0gYXN5bmMuc29tZTtcblxuICAgIGFzeW5jLmV2ZXJ5ID0gZnVuY3Rpb24gKGFyciwgaXRlcmF0b3IsIG1haW5fY2FsbGJhY2spIHtcbiAgICAgICAgYXN5bmMuZWFjaChhcnIsIGZ1bmN0aW9uICh4LCBjYWxsYmFjaykge1xuICAgICAgICAgICAgaXRlcmF0b3IoeCwgZnVuY3Rpb24gKHYpIHtcbiAgICAgICAgICAgICAgICBpZiAoIXYpIHtcbiAgICAgICAgICAgICAgICAgICAgbWFpbl9jYWxsYmFjayhmYWxzZSk7XG4gICAgICAgICAgICAgICAgICAgIG1haW5fY2FsbGJhY2sgPSBmdW5jdGlvbiAoKSB7fTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY2FsbGJhY2soKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9LCBmdW5jdGlvbiAoZXJyKSB7XG4gICAgICAgICAgICBtYWluX2NhbGxiYWNrKHRydWUpO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIC8vIGFsbCBhbGlhc1xuICAgIGFzeW5jLmFsbCA9IGFzeW5jLmV2ZXJ5O1xuXG4gICAgYXN5bmMuc29ydEJ5ID0gZnVuY3Rpb24gKGFyciwgaXRlcmF0b3IsIGNhbGxiYWNrKSB7XG4gICAgICAgIGFzeW5jLm1hcChhcnIsIGZ1bmN0aW9uICh4LCBjYWxsYmFjaykge1xuICAgICAgICAgICAgaXRlcmF0b3IoeCwgZnVuY3Rpb24gKGVyciwgY3JpdGVyaWEpIHtcbiAgICAgICAgICAgICAgICBpZiAoZXJyKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrKGVycik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBjYWxsYmFjayhudWxsLCB7dmFsdWU6IHgsIGNyaXRlcmlhOiBjcml0ZXJpYX0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9LCBmdW5jdGlvbiAoZXJyLCByZXN1bHRzKSB7XG4gICAgICAgICAgICBpZiAoZXJyKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGNhbGxiYWNrKGVycik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB2YXIgZm4gPSBmdW5jdGlvbiAobGVmdCwgcmlnaHQpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGEgPSBsZWZ0LmNyaXRlcmlhLCBiID0gcmlnaHQuY3JpdGVyaWE7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBhIDwgYiA/IC0xIDogYSA+IGIgPyAxIDogMDtcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIGNhbGxiYWNrKG51bGwsIF9tYXAocmVzdWx0cy5zb3J0KGZuKSwgZnVuY3Rpb24gKHgpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHgudmFsdWU7XG4gICAgICAgICAgICAgICAgfSkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9O1xuXG4gICAgYXN5bmMuYXV0byA9IGZ1bmN0aW9uICh0YXNrcywgY2FsbGJhY2spIHtcbiAgICAgICAgY2FsbGJhY2sgPSBjYWxsYmFjayB8fCBmdW5jdGlvbiAoKSB7fTtcbiAgICAgICAgdmFyIGtleXMgPSBfa2V5cyh0YXNrcyk7XG4gICAgICAgIGlmICgha2V5cy5sZW5ndGgpIHtcbiAgICAgICAgICAgIHJldHVybiBjYWxsYmFjayhudWxsKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciByZXN1bHRzID0ge307XG5cbiAgICAgICAgdmFyIGxpc3RlbmVycyA9IFtdO1xuICAgICAgICB2YXIgYWRkTGlzdGVuZXIgPSBmdW5jdGlvbiAoZm4pIHtcbiAgICAgICAgICAgIGxpc3RlbmVycy51bnNoaWZ0KGZuKTtcbiAgICAgICAgfTtcbiAgICAgICAgdmFyIHJlbW92ZUxpc3RlbmVyID0gZnVuY3Rpb24gKGZuKSB7XG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3RlbmVycy5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICAgICAgICAgIGlmIChsaXN0ZW5lcnNbaV0gPT09IGZuKSB7XG4gICAgICAgICAgICAgICAgICAgIGxpc3RlbmVycy5zcGxpY2UoaSwgMSk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIHZhciB0YXNrQ29tcGxldGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBfZWFjaChsaXN0ZW5lcnMuc2xpY2UoMCksIGZ1bmN0aW9uIChmbikge1xuICAgICAgICAgICAgICAgIGZuKCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfTtcblxuICAgICAgICBhZGRMaXN0ZW5lcihmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBpZiAoX2tleXMocmVzdWx0cykubGVuZ3RoID09PSBrZXlzLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIGNhbGxiYWNrKG51bGwsIHJlc3VsdHMpO1xuICAgICAgICAgICAgICAgIGNhbGxiYWNrID0gZnVuY3Rpb24gKCkge307XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIF9lYWNoKGtleXMsIGZ1bmN0aW9uIChrKSB7XG4gICAgICAgICAgICB2YXIgdGFzayA9ICh0YXNrc1trXSBpbnN0YW5jZW9mIEZ1bmN0aW9uKSA/IFt0YXNrc1trXV06IHRhc2tzW2tdO1xuICAgICAgICAgICAgdmFyIHRhc2tDYWxsYmFjayA9IGZ1bmN0aW9uIChlcnIpIHtcbiAgICAgICAgICAgICAgICB2YXIgYXJncyA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cywgMSk7XG4gICAgICAgICAgICAgICAgaWYgKGFyZ3MubGVuZ3RoIDw9IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgYXJncyA9IGFyZ3NbMF07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHNhZmVSZXN1bHRzID0ge307XG4gICAgICAgICAgICAgICAgICAgIF9lYWNoKF9rZXlzKHJlc3VsdHMpLCBmdW5jdGlvbihya2V5KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzYWZlUmVzdWx0c1tya2V5XSA9IHJlc3VsdHNbcmtleV07XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICBzYWZlUmVzdWx0c1trXSA9IGFyZ3M7XG4gICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrKGVyciwgc2FmZVJlc3VsdHMpO1xuICAgICAgICAgICAgICAgICAgICAvLyBzdG9wIHN1YnNlcXVlbnQgZXJyb3JzIGhpdHRpbmcgY2FsbGJhY2sgbXVsdGlwbGUgdGltZXNcbiAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2sgPSBmdW5jdGlvbiAoKSB7fTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdHNba10gPSBhcmdzO1xuICAgICAgICAgICAgICAgICAgICBhc3luYy5uZXh0VGljayh0YXNrQ29tcGxldGUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICB2YXIgcmVxdWlyZXMgPSB0YXNrLnNsaWNlKDAsIE1hdGguYWJzKHRhc2subGVuZ3RoIC0gMSkpIHx8IFtdO1xuICAgICAgICAgICAgdmFyIHJlYWR5ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBfcmVkdWNlKHJlcXVpcmVzLCBmdW5jdGlvbiAoYSwgeCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gKGEgJiYgcmVzdWx0cy5oYXNPd25Qcm9wZXJ0eSh4KSk7XG4gICAgICAgICAgICAgICAgfSwgdHJ1ZSkgJiYgIXJlc3VsdHMuaGFzT3duUHJvcGVydHkoayk7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgaWYgKHJlYWR5KCkpIHtcbiAgICAgICAgICAgICAgICB0YXNrW3Rhc2subGVuZ3RoIC0gMV0odGFza0NhbGxiYWNrLCByZXN1bHRzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHZhciBsaXN0ZW5lciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJlYWR5KCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlbW92ZUxpc3RlbmVyKGxpc3RlbmVyKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhc2tbdGFzay5sZW5ndGggLSAxXSh0YXNrQ2FsbGJhY2ssIHJlc3VsdHMpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICBhZGRMaXN0ZW5lcihsaXN0ZW5lcik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH07XG5cbiAgICBhc3luYy53YXRlcmZhbGwgPSBmdW5jdGlvbiAodGFza3MsIGNhbGxiYWNrKSB7XG4gICAgICAgIGNhbGxiYWNrID0gY2FsbGJhY2sgfHwgZnVuY3Rpb24gKCkge307XG4gICAgICAgIGlmICghdGFza3MubGVuZ3RoKSB7XG4gICAgICAgICAgICByZXR1cm4gY2FsbGJhY2soKTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgd3JhcEl0ZXJhdG9yID0gZnVuY3Rpb24gKGl0ZXJhdG9yKSB7XG4gICAgICAgICAgICByZXR1cm4gZnVuY3Rpb24gKGVycikge1xuICAgICAgICAgICAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2suYXBwbHkobnVsbCwgYXJndW1lbnRzKTtcbiAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2sgPSBmdW5jdGlvbiAoKSB7fTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBhcmdzID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzLCAxKTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIG5leHQgPSBpdGVyYXRvci5uZXh0KCk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChuZXh0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhcmdzLnB1c2god3JhcEl0ZXJhdG9yKG5leHQpKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFyZ3MucHVzaChjYWxsYmFjayk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgYXN5bmMubmV4dFRpY2soZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaXRlcmF0b3IuYXBwbHkobnVsbCwgYXJncyk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH07XG4gICAgICAgIH07XG4gICAgICAgIHdyYXBJdGVyYXRvcihhc3luYy5pdGVyYXRvcih0YXNrcykpKCk7XG4gICAgfTtcblxuICAgIHZhciBfcGFyYWxsZWwgPSBmdW5jdGlvbihlYWNoZm4sIHRhc2tzLCBjYWxsYmFjaykge1xuICAgICAgICBjYWxsYmFjayA9IGNhbGxiYWNrIHx8IGZ1bmN0aW9uICgpIHt9O1xuICAgICAgICBpZiAodGFza3MuY29uc3RydWN0b3IgPT09IEFycmF5KSB7XG4gICAgICAgICAgICBlYWNoZm4ubWFwKHRhc2tzLCBmdW5jdGlvbiAoZm4sIGNhbGxiYWNrKSB7XG4gICAgICAgICAgICAgICAgaWYgKGZuKSB7XG4gICAgICAgICAgICAgICAgICAgIGZuKGZ1bmN0aW9uIChlcnIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBhcmdzID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzLCAxKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChhcmdzLmxlbmd0aCA8PSAxKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJncyA9IGFyZ3NbMF07XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjay5jYWxsKG51bGwsIGVyciwgYXJncyk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sIGNhbGxiYWNrKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHZhciByZXN1bHRzID0ge307XG4gICAgICAgICAgICBlYWNoZm4uZWFjaChfa2V5cyh0YXNrcyksIGZ1bmN0aW9uIChrLCBjYWxsYmFjaykge1xuICAgICAgICAgICAgICAgIHRhc2tzW2tdKGZ1bmN0aW9uIChlcnIpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGFyZ3MgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMsIDEpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoYXJncy5sZW5ndGggPD0gMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgYXJncyA9IGFyZ3NbMF07XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0c1trXSA9IGFyZ3M7XG4gICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrKGVycik7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9LCBmdW5jdGlvbiAoZXJyKSB7XG4gICAgICAgICAgICAgICAgY2FsbGJhY2soZXJyLCByZXN1bHRzKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIGFzeW5jLnBhcmFsbGVsID0gZnVuY3Rpb24gKHRhc2tzLCBjYWxsYmFjaykge1xuICAgICAgICBfcGFyYWxsZWwoeyBtYXA6IGFzeW5jLm1hcCwgZWFjaDogYXN5bmMuZWFjaCB9LCB0YXNrcywgY2FsbGJhY2spO1xuICAgIH07XG5cbiAgICBhc3luYy5wYXJhbGxlbExpbWl0ID0gZnVuY3Rpb24odGFza3MsIGxpbWl0LCBjYWxsYmFjaykge1xuICAgICAgICBfcGFyYWxsZWwoeyBtYXA6IF9tYXBMaW1pdChsaW1pdCksIGVhY2g6IF9lYWNoTGltaXQobGltaXQpIH0sIHRhc2tzLCBjYWxsYmFjayk7XG4gICAgfTtcblxuICAgIGFzeW5jLnNlcmllcyA9IGZ1bmN0aW9uICh0YXNrcywgY2FsbGJhY2spIHtcbiAgICAgICAgY2FsbGJhY2sgPSBjYWxsYmFjayB8fCBmdW5jdGlvbiAoKSB7fTtcbiAgICAgICAgaWYgKHRhc2tzLmNvbnN0cnVjdG9yID09PSBBcnJheSkge1xuICAgICAgICAgICAgYXN5bmMubWFwU2VyaWVzKHRhc2tzLCBmdW5jdGlvbiAoZm4sIGNhbGxiYWNrKSB7XG4gICAgICAgICAgICAgICAgaWYgKGZuKSB7XG4gICAgICAgICAgICAgICAgICAgIGZuKGZ1bmN0aW9uIChlcnIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBhcmdzID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzLCAxKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChhcmdzLmxlbmd0aCA8PSAxKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJncyA9IGFyZ3NbMF07XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjay5jYWxsKG51bGwsIGVyciwgYXJncyk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sIGNhbGxiYWNrKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHZhciByZXN1bHRzID0ge307XG4gICAgICAgICAgICBhc3luYy5lYWNoU2VyaWVzKF9rZXlzKHRhc2tzKSwgZnVuY3Rpb24gKGssIGNhbGxiYWNrKSB7XG4gICAgICAgICAgICAgICAgdGFza3Nba10oZnVuY3Rpb24gKGVycikge1xuICAgICAgICAgICAgICAgICAgICB2YXIgYXJncyA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cywgMSk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChhcmdzLmxlbmd0aCA8PSAxKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhcmdzID0gYXJnc1swXTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICByZXN1bHRzW2tdID0gYXJncztcbiAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2soZXJyKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0sIGZ1bmN0aW9uIChlcnIpIHtcbiAgICAgICAgICAgICAgICBjYWxsYmFjayhlcnIsIHJlc3VsdHMpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgYXN5bmMuaXRlcmF0b3IgPSBmdW5jdGlvbiAodGFza3MpIHtcbiAgICAgICAgdmFyIG1ha2VDYWxsYmFjayA9IGZ1bmN0aW9uIChpbmRleCkge1xuICAgICAgICAgICAgdmFyIGZuID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIGlmICh0YXNrcy5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgdGFza3NbaW5kZXhdLmFwcGx5KG51bGwsIGFyZ3VtZW50cyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiBmbi5uZXh0KCk7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgZm4ubmV4dCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gKGluZGV4IDwgdGFza3MubGVuZ3RoIC0gMSkgPyBtYWtlQ2FsbGJhY2soaW5kZXggKyAxKTogbnVsbDtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICByZXR1cm4gZm47XG4gICAgICAgIH07XG4gICAgICAgIHJldHVybiBtYWtlQ2FsbGJhY2soMCk7XG4gICAgfTtcblxuICAgIGFzeW5jLmFwcGx5ID0gZnVuY3Rpb24gKGZuKSB7XG4gICAgICAgIHZhciBhcmdzID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzLCAxKTtcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiBmbi5hcHBseShcbiAgICAgICAgICAgICAgICBudWxsLCBhcmdzLmNvbmNhdChBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMpKVxuICAgICAgICAgICAgKTtcbiAgICAgICAgfTtcbiAgICB9O1xuXG4gICAgdmFyIF9jb25jYXQgPSBmdW5jdGlvbiAoZWFjaGZuLCBhcnIsIGZuLCBjYWxsYmFjaykge1xuICAgICAgICB2YXIgciA9IFtdO1xuICAgICAgICBlYWNoZm4oYXJyLCBmdW5jdGlvbiAoeCwgY2IpIHtcbiAgICAgICAgICAgIGZuKHgsIGZ1bmN0aW9uIChlcnIsIHkpIHtcbiAgICAgICAgICAgICAgICByID0gci5jb25jYXQoeSB8fCBbXSk7XG4gICAgICAgICAgICAgICAgY2IoZXJyKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9LCBmdW5jdGlvbiAoZXJyKSB7XG4gICAgICAgICAgICBjYWxsYmFjayhlcnIsIHIpO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIGFzeW5jLmNvbmNhdCA9IGRvUGFyYWxsZWwoX2NvbmNhdCk7XG4gICAgYXN5bmMuY29uY2F0U2VyaWVzID0gZG9TZXJpZXMoX2NvbmNhdCk7XG5cbiAgICBhc3luYy53aGlsc3QgPSBmdW5jdGlvbiAodGVzdCwgaXRlcmF0b3IsIGNhbGxiYWNrKSB7XG4gICAgICAgIGlmICh0ZXN0KCkpIHtcbiAgICAgICAgICAgIHZhciBzeW5jID0gdHJ1ZTtcbiAgICAgICAgICAgIGl0ZXJhdG9yKGZ1bmN0aW9uIChlcnIpIHtcbiAgICAgICAgICAgICAgICBpZiAoZXJyKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBjYWxsYmFjayhlcnIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoc3luYykge1xuICAgICAgICAgICAgICAgICAgICBhc3luYy5uZXh0VGljayhmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhc3luYy53aGlsc3QodGVzdCwgaXRlcmF0b3IsIGNhbGxiYWNrKTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBhc3luYy53aGlsc3QodGVzdCwgaXRlcmF0b3IsIGNhbGxiYWNrKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHN5bmMgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGNhbGxiYWNrKCk7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgYXN5bmMuZG9XaGlsc3QgPSBmdW5jdGlvbiAoaXRlcmF0b3IsIHRlc3QsIGNhbGxiYWNrKSB7XG4gICAgICAgIHZhciBzeW5jID0gdHJ1ZTtcbiAgICAgICAgaXRlcmF0b3IoZnVuY3Rpb24gKGVycikge1xuICAgICAgICAgICAgaWYgKGVycikge1xuICAgICAgICAgICAgICAgIHJldHVybiBjYWxsYmFjayhlcnIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHRlc3QoKSkge1xuICAgICAgICAgICAgICAgIGlmIChzeW5jKSB7XG4gICAgICAgICAgICAgICAgICAgIGFzeW5jLm5leHRUaWNrKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFzeW5jLmRvV2hpbHN0KGl0ZXJhdG9yLCB0ZXN0LCBjYWxsYmFjayk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgYXN5bmMuZG9XaGlsc3QoaXRlcmF0b3IsIHRlc3QsIGNhbGxiYWNrKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBjYWxsYmFjaygpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgc3luYyA9IGZhbHNlO1xuICAgIH07XG5cbiAgICBhc3luYy51bnRpbCA9IGZ1bmN0aW9uICh0ZXN0LCBpdGVyYXRvciwgY2FsbGJhY2spIHtcbiAgICAgICAgaWYgKCF0ZXN0KCkpIHtcbiAgICAgICAgICAgIHZhciBzeW5jID0gdHJ1ZTtcbiAgICAgICAgICAgIGl0ZXJhdG9yKGZ1bmN0aW9uIChlcnIpIHtcbiAgICAgICAgICAgICAgICBpZiAoZXJyKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBjYWxsYmFjayhlcnIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoc3luYykge1xuICAgICAgICAgICAgICAgICAgICBhc3luYy5uZXh0VGljayhmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhc3luYy51bnRpbCh0ZXN0LCBpdGVyYXRvciwgY2FsbGJhY2spO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGFzeW5jLnVudGlsKHRlc3QsIGl0ZXJhdG9yLCBjYWxsYmFjayk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBzeW5jID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBjYWxsYmFjaygpO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIGFzeW5jLmRvVW50aWwgPSBmdW5jdGlvbiAoaXRlcmF0b3IsIHRlc3QsIGNhbGxiYWNrKSB7XG4gICAgICAgIHZhciBzeW5jID0gdHJ1ZTtcbiAgICAgICAgaXRlcmF0b3IoZnVuY3Rpb24gKGVycikge1xuICAgICAgICAgICAgaWYgKGVycikge1xuICAgICAgICAgICAgICAgIHJldHVybiBjYWxsYmFjayhlcnIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCF0ZXN0KCkpIHtcbiAgICAgICAgICAgICAgICBpZiAoc3luYykge1xuICAgICAgICAgICAgICAgICAgICBhc3luYy5uZXh0VGljayhmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhc3luYy5kb1VudGlsKGl0ZXJhdG9yLCB0ZXN0LCBjYWxsYmFjayk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgYXN5bmMuZG9VbnRpbChpdGVyYXRvciwgdGVzdCwgY2FsbGJhY2spO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGNhbGxiYWNrKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICBzeW5jID0gZmFsc2U7XG4gICAgfTtcblxuICAgIGFzeW5jLnF1ZXVlID0gZnVuY3Rpb24gKHdvcmtlciwgY29uY3VycmVuY3kpIHtcbiAgICAgICAgaWYgKGNvbmN1cnJlbmN5ID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIGNvbmN1cnJlbmN5ID0gMTtcbiAgICAgICAgfVxuICAgICAgICBmdW5jdGlvbiBfaW5zZXJ0KHEsIGRhdGEsIHBvcywgY2FsbGJhY2spIHtcbiAgICAgICAgICBpZihkYXRhLmNvbnN0cnVjdG9yICE9PSBBcnJheSkge1xuICAgICAgICAgICAgICBkYXRhID0gW2RhdGFdO1xuICAgICAgICAgIH1cbiAgICAgICAgICBfZWFjaChkYXRhLCBmdW5jdGlvbih0YXNrKSB7XG4gICAgICAgICAgICAgIHZhciBpdGVtID0ge1xuICAgICAgICAgICAgICAgICAgZGF0YTogdGFzayxcbiAgICAgICAgICAgICAgICAgIGNhbGxiYWNrOiB0eXBlb2YgY2FsbGJhY2sgPT09ICdmdW5jdGlvbicgPyBjYWxsYmFjayA6IG51bGxcbiAgICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgICBpZiAocG9zKSB7XG4gICAgICAgICAgICAgICAgcS50YXNrcy51bnNoaWZ0KGl0ZW0pO1xuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHEudGFza3MucHVzaChpdGVtKTtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIGlmIChxLnNhdHVyYXRlZCAmJiBxLnRhc2tzLmxlbmd0aCA9PT0gY29uY3VycmVuY3kpIHtcbiAgICAgICAgICAgICAgICAgIHEuc2F0dXJhdGVkKCk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgYXN5bmMubmV4dFRpY2socS5wcm9jZXNzKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciB3b3JrZXJzID0gMDtcbiAgICAgICAgdmFyIHEgPSB7XG4gICAgICAgICAgICB0YXNrczogW10sXG4gICAgICAgICAgICBjb25jdXJyZW5jeTogY29uY3VycmVuY3ksXG4gICAgICAgICAgICBzYXR1cmF0ZWQ6IG51bGwsXG4gICAgICAgICAgICBlbXB0eTogbnVsbCxcbiAgICAgICAgICAgIGRyYWluOiBudWxsLFxuICAgICAgICAgICAgcHVzaDogZnVuY3Rpb24gKGRhdGEsIGNhbGxiYWNrKSB7XG4gICAgICAgICAgICAgIF9pbnNlcnQocSwgZGF0YSwgZmFsc2UsIGNhbGxiYWNrKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB1bnNoaWZ0OiBmdW5jdGlvbiAoZGF0YSwgY2FsbGJhY2spIHtcbiAgICAgICAgICAgICAgX2luc2VydChxLCBkYXRhLCB0cnVlLCBjYWxsYmFjayk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgcHJvY2VzczogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIGlmICh3b3JrZXJzIDwgcS5jb25jdXJyZW5jeSAmJiBxLnRhc2tzLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgdGFzayA9IHEudGFza3Muc2hpZnQoKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHEuZW1wdHkgJiYgcS50YXNrcy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHEuZW1wdHkoKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB3b3JrZXJzICs9IDE7XG4gICAgICAgICAgICAgICAgICAgIHZhciBzeW5jID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIG5leHQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB3b3JrZXJzIC09IDE7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGFzay5jYWxsYmFjaykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhc2suY2FsbGJhY2suYXBwbHkodGFzaywgYXJndW1lbnRzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChxLmRyYWluICYmIHEudGFza3MubGVuZ3RoICsgd29ya2VycyA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHEuZHJhaW4oKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHEucHJvY2VzcygpO1xuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICB2YXIgY2IgPSBvbmx5X29uY2UoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGNiQXJncyA9IGFyZ3VtZW50cztcblxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHN5bmMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhc3luYy5uZXh0VGljayhmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5leHQuYXBwbHkobnVsbCwgY2JBcmdzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV4dC5hcHBseShudWxsLCBhcmd1bWVudHMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgd29ya2VyKHRhc2suZGF0YSwgY2IpO1xuICAgICAgICAgICAgICAgICAgICBzeW5jID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGxlbmd0aDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBxLnRhc2tzLmxlbmd0aDtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBydW5uaW5nOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHdvcmtlcnM7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIHJldHVybiBxO1xuICAgIH07XG5cbiAgICBhc3luYy5jYXJnbyA9IGZ1bmN0aW9uICh3b3JrZXIsIHBheWxvYWQpIHtcbiAgICAgICAgdmFyIHdvcmtpbmcgICAgID0gZmFsc2UsXG4gICAgICAgICAgICB0YXNrcyAgICAgICA9IFtdO1xuXG4gICAgICAgIHZhciBjYXJnbyA9IHtcbiAgICAgICAgICAgIHRhc2tzOiB0YXNrcyxcbiAgICAgICAgICAgIHBheWxvYWQ6IHBheWxvYWQsXG4gICAgICAgICAgICBzYXR1cmF0ZWQ6IG51bGwsXG4gICAgICAgICAgICBlbXB0eTogbnVsbCxcbiAgICAgICAgICAgIGRyYWluOiBudWxsLFxuICAgICAgICAgICAgcHVzaDogZnVuY3Rpb24gKGRhdGEsIGNhbGxiYWNrKSB7XG4gICAgICAgICAgICAgICAgaWYoZGF0YS5jb25zdHJ1Y3RvciAhPT0gQXJyYXkpIHtcbiAgICAgICAgICAgICAgICAgICAgZGF0YSA9IFtkYXRhXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgX2VhY2goZGF0YSwgZnVuY3Rpb24odGFzaykge1xuICAgICAgICAgICAgICAgICAgICB0YXNrcy5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE6IHRhc2ssXG4gICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjazogdHlwZW9mIGNhbGxiYWNrID09PSAnZnVuY3Rpb24nID8gY2FsbGJhY2sgOiBudWxsXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICBpZiAoY2FyZ28uc2F0dXJhdGVkICYmIHRhc2tzLmxlbmd0aCA9PT0gcGF5bG9hZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2FyZ28uc2F0dXJhdGVkKCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBhc3luYy5uZXh0VGljayhjYXJnby5wcm9jZXNzKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBwcm9jZXNzOiBmdW5jdGlvbiBwcm9jZXNzKCkge1xuICAgICAgICAgICAgICAgIGlmICh3b3JraW5nKSByZXR1cm47XG4gICAgICAgICAgICAgICAgaWYgKHRhc2tzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICBpZihjYXJnby5kcmFpbikgY2FyZ28uZHJhaW4oKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHZhciB0cyA9IHR5cGVvZiBwYXlsb2FkID09PSAnbnVtYmVyJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gdGFza3Muc3BsaWNlKDAsIHBheWxvYWQpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiB0YXNrcy5zcGxpY2UoMCk7XG5cbiAgICAgICAgICAgICAgICB2YXIgZHMgPSBfbWFwKHRzLCBmdW5jdGlvbiAodGFzaykge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGFzay5kYXRhO1xuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgaWYoY2FyZ28uZW1wdHkpIGNhcmdvLmVtcHR5KCk7XG4gICAgICAgICAgICAgICAgd29ya2luZyA9IHRydWU7XG4gICAgICAgICAgICAgICAgd29ya2VyKGRzLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIHdvcmtpbmcgPSBmYWxzZTtcblxuICAgICAgICAgICAgICAgICAgICB2YXIgYXJncyA9IGFyZ3VtZW50cztcbiAgICAgICAgICAgICAgICAgICAgX2VhY2godHMsIGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZGF0YS5jYWxsYmFjaykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEuY2FsbGJhY2suYXBwbHkobnVsbCwgYXJncyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgICAgIHByb2Nlc3MoKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBsZW5ndGg6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGFza3MubGVuZ3RoO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHJ1bm5pbmc6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gd29ya2luZztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIGNhcmdvO1xuICAgIH07XG5cbiAgICB2YXIgX2NvbnNvbGVfZm4gPSBmdW5jdGlvbiAobmFtZSkge1xuICAgICAgICByZXR1cm4gZnVuY3Rpb24gKGZuKSB7XG4gICAgICAgICAgICB2YXIgYXJncyA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cywgMSk7XG4gICAgICAgICAgICBmbi5hcHBseShudWxsLCBhcmdzLmNvbmNhdChbZnVuY3Rpb24gKGVycikge1xuICAgICAgICAgICAgICAgIHZhciBhcmdzID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzLCAxKTtcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIGNvbnNvbGUgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjb25zb2xlLmVycm9yKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKGNvbnNvbGVbbmFtZV0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9lYWNoKGFyZ3MsIGZ1bmN0aW9uICh4KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZVtuYW1lXSh4KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfV0pKTtcbiAgICAgICAgfTtcbiAgICB9O1xuICAgIGFzeW5jLmxvZyA9IF9jb25zb2xlX2ZuKCdsb2cnKTtcbiAgICBhc3luYy5kaXIgPSBfY29uc29sZV9mbignZGlyJyk7XG4gICAgLyphc3luYy5pbmZvID0gX2NvbnNvbGVfZm4oJ2luZm8nKTtcbiAgICBhc3luYy53YXJuID0gX2NvbnNvbGVfZm4oJ3dhcm4nKTtcbiAgICBhc3luYy5lcnJvciA9IF9jb25zb2xlX2ZuKCdlcnJvcicpOyovXG5cbiAgICBhc3luYy5tZW1vaXplID0gZnVuY3Rpb24gKGZuLCBoYXNoZXIpIHtcbiAgICAgICAgdmFyIG1lbW8gPSB7fTtcbiAgICAgICAgdmFyIHF1ZXVlcyA9IHt9O1xuICAgICAgICBoYXNoZXIgPSBoYXNoZXIgfHwgZnVuY3Rpb24gKHgpIHtcbiAgICAgICAgICAgIHJldHVybiB4O1xuICAgICAgICB9O1xuICAgICAgICB2YXIgbWVtb2l6ZWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgYXJncyA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cyk7XG4gICAgICAgICAgICB2YXIgY2FsbGJhY2sgPSBhcmdzLnBvcCgpO1xuICAgICAgICAgICAgdmFyIGtleSA9IGhhc2hlci5hcHBseShudWxsLCBhcmdzKTtcbiAgICAgICAgICAgIGlmIChrZXkgaW4gbWVtbykge1xuICAgICAgICAgICAgICAgIGNhbGxiYWNrLmFwcGx5KG51bGwsIG1lbW9ba2V5XSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChrZXkgaW4gcXVldWVzKSB7XG4gICAgICAgICAgICAgICAgcXVldWVzW2tleV0ucHVzaChjYWxsYmFjayk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBxdWV1ZXNba2V5XSA9IFtjYWxsYmFja107XG4gICAgICAgICAgICAgICAgZm4uYXBwbHkobnVsbCwgYXJncy5jb25jYXQoW2Z1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgbWVtb1trZXldID0gYXJndW1lbnRzO1xuICAgICAgICAgICAgICAgICAgICB2YXIgcSA9IHF1ZXVlc1trZXldO1xuICAgICAgICAgICAgICAgICAgICBkZWxldGUgcXVldWVzW2tleV07XG4gICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwLCBsID0gcS5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICBxW2ldLmFwcGx5KG51bGwsIGFyZ3VtZW50cyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XSkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICBtZW1vaXplZC5tZW1vID0gbWVtbztcbiAgICAgICAgbWVtb2l6ZWQudW5tZW1vaXplZCA9IGZuO1xuICAgICAgICByZXR1cm4gbWVtb2l6ZWQ7XG4gICAgfTtcblxuICAgIGFzeW5jLnVubWVtb2l6ZSA9IGZ1bmN0aW9uIChmbikge1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIChmbi51bm1lbW9pemVkIHx8IGZuKS5hcHBseShudWxsLCBhcmd1bWVudHMpO1xuICAgICAgfTtcbiAgICB9O1xuXG4gICAgYXN5bmMudGltZXMgPSBmdW5jdGlvbiAoY291bnQsIGl0ZXJhdG9yLCBjYWxsYmFjaykge1xuICAgICAgICB2YXIgY291bnRlciA9IFtdO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGNvdW50OyBpKyspIHtcbiAgICAgICAgICAgIGNvdW50ZXIucHVzaChpKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gYXN5bmMubWFwKGNvdW50ZXIsIGl0ZXJhdG9yLCBjYWxsYmFjayk7XG4gICAgfTtcblxuICAgIGFzeW5jLnRpbWVzU2VyaWVzID0gZnVuY3Rpb24gKGNvdW50LCBpdGVyYXRvciwgY2FsbGJhY2spIHtcbiAgICAgICAgdmFyIGNvdW50ZXIgPSBbXTtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBjb3VudDsgaSsrKSB7XG4gICAgICAgICAgICBjb3VudGVyLnB1c2goaSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGFzeW5jLm1hcFNlcmllcyhjb3VudGVyLCBpdGVyYXRvciwgY2FsbGJhY2spO1xuICAgIH07XG5cbiAgICBhc3luYy5jb21wb3NlID0gZnVuY3Rpb24gKC8qIGZ1bmN0aW9ucy4uLiAqLykge1xuICAgICAgICB2YXIgZm5zID0gQXJyYXkucHJvdG90eXBlLnJldmVyc2UuY2FsbChhcmd1bWVudHMpO1xuICAgICAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIHRoYXQgPSB0aGlzO1xuICAgICAgICAgICAgdmFyIGFyZ3MgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMpO1xuICAgICAgICAgICAgdmFyIGNhbGxiYWNrID0gYXJncy5wb3AoKTtcbiAgICAgICAgICAgIGFzeW5jLnJlZHVjZShmbnMsIGFyZ3MsIGZ1bmN0aW9uIChuZXdhcmdzLCBmbiwgY2IpIHtcbiAgICAgICAgICAgICAgICBmbi5hcHBseSh0aGF0LCBuZXdhcmdzLmNvbmNhdChbZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgZXJyID0gYXJndW1lbnRzWzBdO1xuICAgICAgICAgICAgICAgICAgICB2YXIgbmV4dGFyZ3MgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMsIDEpO1xuICAgICAgICAgICAgICAgICAgICBjYihlcnIsIG5leHRhcmdzKTtcbiAgICAgICAgICAgICAgICB9XSkpXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZnVuY3Rpb24gKGVyciwgcmVzdWx0cykge1xuICAgICAgICAgICAgICAgIGNhbGxiYWNrLmFwcGx5KHRoYXQsIFtlcnJdLmNvbmNhdChyZXN1bHRzKSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfTtcbiAgICB9O1xuXG4gICAgYXN5bmMuYXBwbHlFYWNoID0gZnVuY3Rpb24gKGZucyAvKmFyZ3MuLi4qLykge1xuICAgICAgICB2YXIgZ28gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgdGhhdCA9IHRoaXM7XG4gICAgICAgICAgICB2YXIgYXJncyA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cyk7XG4gICAgICAgICAgICB2YXIgY2FsbGJhY2sgPSBhcmdzLnBvcCgpO1xuICAgICAgICAgICAgcmV0dXJuIGFzeW5jLmVhY2goZm5zLCBmdW5jdGlvbiAoZm4sIGNiKSB7XG4gICAgICAgICAgICAgICAgZm4uYXBwbHkodGhhdCwgYXJncy5jb25jYXQoW2NiXSkpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGNhbGxiYWNrKTtcbiAgICAgICAgfTtcbiAgICAgICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPiAxKSB7XG4gICAgICAgICAgICB2YXIgYXJncyA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cywgMSk7XG4gICAgICAgICAgICByZXR1cm4gZ28uYXBwbHkodGhpcywgYXJncyk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gZ287XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgLy8gQU1EIC8gUmVxdWlyZUpTXG4gICAgaWYgKHR5cGVvZiBkZWZpbmUgIT09ICd1bmRlZmluZWQnICYmIGRlZmluZS5hbWQpIHtcbiAgICAgICAgZGVmaW5lKFtdLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gYXN5bmM7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICAvLyBOb2RlLmpzXG4gICAgZWxzZSBpZiAodHlwZW9mIG1vZHVsZSAhPT0gJ3VuZGVmaW5lZCcgJiYgbW9kdWxlLmV4cG9ydHMpIHtcbiAgICAgICAgbW9kdWxlLmV4cG9ydHMgPSBhc3luYztcbiAgICB9XG4gICAgLy8gaW5jbHVkZWQgZGlyZWN0bHkgdmlhIDxzY3JpcHQ+IHRhZ1xuICAgIGVsc2Uge1xuICAgICAgICByb290LmFzeW5jID0gYXN5bmM7XG4gICAgfVxuXG59KCkpO1xuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicGF0aFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJldmVudHNcIik7IiwiXHJcbmNvbnN0IGNyYXdsZXIgPSByZXF1aXJlKCcuL2luY2x1ZGUvY3Jhd2xlcicpO1xyXG5jb25zdCBjdyA9IHJlcXVpcmUoJy4vaW5jbHVkZS9jb21tb24td29yZHMuanMnKTtcclxuXHJcbmNvbnN0IE1BWF9XT1JEUyA9IDEwMDAwMDAwO1xyXG5jb25zdCBDQUNIRV9DTFVTVEVSUyA9IGZhbHNlO1xyXG5jb25zdCBNQVhfTk9ERV9GUkVRVUVOQ1kgPSAxMDAwO1xyXG5jb25zdCBUUkFWRVJTRV9TSU1JTEFSID0gdHJ1ZTtcclxuXHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gaGFuZGxlcihldmVudCwgY29udGV4dCkge1xyXG4gIGNyYXdsZXIuaW5pdENyYXdsZXIoXHJcbiAgICBNQVhfV09SRFMsXHJcbiAgICBDQUNIRV9DTFVTVEVSUyxcclxuICAgIE1BWF9OT0RFX0ZSRVFVRU5DWSxcclxuICAgIFRSQVZFUlNFX1NJTUlMQVJcclxuICAgICk7XHJcblxyXG4gIHRyeSB7XHJcblxyXG4gICAgY29uc29sZS5sb2coXCJjcmF3bGluZyBpbiB0aGUgYmFja2dyb3VuZCBzdGFydGluZyBmcm9tIHRvcCAzMDAwIEVuZ2xpc2ggd29yZHMuLi5cIik7XHJcblxyXG4gICAgbGV0IHByb21pc2VzID0gW107XHJcbiAgICBmb3IgKGxldCBjb21tb25Xb3JkIGluIGN3LlRoZU1vc3RDb21tb24zMDAwKSB7XHJcbiAgICAgIHByb21pc2VzLnB1c2goY3Jhd2xlci5sb2FkQ2x1c3Rlcihjb21tb25Xb3JkLCBmYWxzZSkpO1xyXG4gICAgfVxyXG4gICAgYXdhaXQgUHJvbWlzZS5hbGwocHJvbWlzZXMpO1xyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgIHN0YXR1c0NvZGU6IDIwMCxcclxuICAgICAgYm9keToganNvbixcclxuICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICdBY2Nlc3MtQ29udHJvbC1BbGxvdy1PcmlnaW4nOiAnKidcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICB9IGNhdGNoIChlcnIpIHtcclxuICAgIGNvbnNvbGUubG9nKGVycilcclxuICAgIHJldHVybiB7IHN0YXR1c0NvZGU6IDUwMCwgYm9keTogZXJyLnRvU3RyaW5nKCkgfVxyXG4gIH1cclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9