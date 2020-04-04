'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports.traverse = exports.parser = exports.types = void 0;

function _react() {
  const data = _interopRequireDefault(require('react'));

  _react = function _react() {
    return data;
  };

  return data;
}

function types() {
  const data = _interopRequireWildcard(require('@babel/types'));

  types = function types() {
    return data;
  };

  return data;
}

Object.defineProperty(exports, 'types', {
  enumerable: true,
  get: function get() {
    return types();
  }
});

function parser() {
  const data = _interopRequireWildcard(require('@babel/parser'));

  parser = function parser() {
    return data;
  };

  return data;
}

Object.defineProperty(exports, 'parser', {
  enumerable: true,
  get: function get() {
    return parser();
  }
});

function traverse() {
  const data = _interopRequireWildcard(require('@babel/traverse'));

  traverse = function traverse() {
    return data;
  };

  return data;
}

Object.defineProperty(exports, 'traverse', {
  enumerable: true,
  get: function get() {
    return traverse();
  }
});

function _getRequireWildcardCache() {
  if (typeof WeakMap !== 'function') return null;
  var cache = new WeakMap();
  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };
  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }
  if (obj === null || (typeof obj !== 'object' && typeof obj !== 'function')) {
    return { default: obj };
  }
  var cache = _getRequireWildcardCache();
  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }
  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }
  newObj.default = obj;
  if (cache) {
    cache.set(obj, newObj);
  }
  return newObj;
}

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}
