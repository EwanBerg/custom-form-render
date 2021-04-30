import 'antd/es/config-provider/style';
import _ConfigProvider from 'antd/es/config-provider';
import React, { useContext, useReducer, createContext, useRef, useEffect, useMemo } from 'react';
import { get, cloneDeep, set, merge, unset, sortedUniqBy } from 'lodash';
import 'antd/es/button/style';
import _Button from 'antd/es/button';
import _CopyOutlined from '@ant-design/icons/es/icons/CopyOutlined';
import 'antd/es/popconfirm/style';
import _Popconfirm from 'antd/es/popconfirm';
import _DeleteOutlined from '@ant-design/icons/es/icons/DeleteOutlined';
import 'antd/es/space/style';
import _Space from 'antd/es/space';
import 'antd/es/table/style';
import _Table from 'antd/es/table';
import 'antd/es/drawer/style';
import _Drawer from 'antd/es/drawer';
import 'antd/es/rate/style';
import _Rate from 'antd/es/rate';
import 'antd/es/cascader/style';
import _Cascader from 'antd/es/cascader';
import 'antd/es/tree-select/style';
import _TreeSelect from 'antd/es/tree-select';
import 'antd/es/checkbox/style';
import _Checkbox from 'antd/es/checkbox';
import 'antd/es/switch/style';
import _Switch from 'antd/es/switch';
import 'antd/es/input-number/style';
import _InputNumber from 'antd/es/input-number';
import 'antd/es/input/style';
import _Input from 'antd/es/input';
import 'antd/es/date-picker/style';
import _DatePicker from 'antd/es/date-picker';
import moment from 'moment';
import 'antd/es/time-picker/style';
import _TimePicker from 'antd/es/time-picker';
import 'antd/es/collapse/style';
import _Collapse from 'antd/es/collapse';
import 'antd/es/select/style';
import _Select from 'antd/es/select';
import 'antd/es/radio/style';
import _Radio from 'antd/es/radio';
import 'antd/es/slider/style';
import _Slider from 'antd/es/slider';
import 'antd/es/upload/style';
import _Upload from 'antd/es/upload';
import _UploadOutlined from '@ant-design/icons/es/icons/UploadOutlined';
import 'antd/es/message/style';
import _message from 'antd/es/message';
import 'antd/es/popover/style';
import _Popover from 'antd/es/popover';
import _PictureOutlined from '@ant-design/icons/es/icons/PictureOutlined';
import zhCN from 'antd/lib/locale/zh_CN';
import Validator from 'async-validator';

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);

    if (enumerableOnly) {
      symbols = symbols.filter(function (sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
    }

    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function (obj) {
      return typeof obj;
    };
  } else {
    _typeof = function (obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};

  var target = _objectWithoutPropertiesLoose(source, excluded);

  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}

function _toArray(arr) {
  return _arrayWithHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableRest();
}

function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}

function _iterableToArrayLimit(arr, i) {
  var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]);

  if (_i == null) return;
  var _arr = [];
  var _n = true;
  var _d = false;

  var _s, _e;

  try {
    for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

  return arr2;
}

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

// {
//   parent: '#',
//   schema: ...,
//   children: []
// }
// TODO: 发布后去掉

window.log1 = function (value) {
  console.log('%ccommon:', 'color: #00A7F7; font-weight: 500;', value);
};

window.log2 = function (value) {
  console.log('%cwarning:', 'color: #f50; font-weight: 500;', value);
};

window.log3 = function (value) {
  console.log('%csuccess:', 'color: #87d068; font-weight: 500;', value);
};

window.log4 = function (value) {
  console.log('%cspecial:', 'color: #722ed1; font-weight: 500;', value);
};

function isUrl(string) {
  var protocolRE = /^(?:\w+:)?\/\/(\S+)$/; // const domainRE = /^[^\s\.]+\.\S{2,}$/;

  if (typeof string !== 'string') return false;
  return protocolRE.test(string);
}
function isCheckBoxType(schema, readOnly) {
  if (readOnly) return false;
  if (schema.widget === 'checkbox') return true;

  if (schema && schema.type === 'boolean') {
    if (schema.widget === undefined) return true;
    return false;
  }
} // a[].b.c => a.b.c

function removeBrackets(string) {
  if (typeof string === 'string') {
    return string.replace(/\[\]/g, '');
  } else {
    return string;
  }
}

function getParentPath(path) {
  if (typeof path === 'string') {
    var pathArr = path.split('.');

    if (pathArr.length === 1) {
      return '#';
    }

    pathArr.pop();
    return pathArr.join('.');
  }

  return '#';
}
function getValueByPath(formData, path) {
  if (path === '#') {
    return formData || {};
  } else if (typeof path === 'string') {
    return get(formData, path);
  }
} //  path: 'a.b[1].c[0]' => { id: 'a.b[].c[]'  dataIndex: [1,0] }

function getDataPath(id, dataIndex) {
  if (id === '#') {
    return id;
  }

  if (typeof id !== 'string') {
    throw Error("id ".concat(id, " is not a string!!! Something wrong here"));
  }

  var _id = id;

  if (Array.isArray(dataIndex)) {
    // const matches = id.match(/\[\]/g) || [];
    // const count = matches.length;
    dataIndex.forEach(function (item) {
      _id = _id.replace(/\[\]/, "[".concat(item, "]"));
    });
  }

  return removeBrackets(_id);
}
function isListType(schema) {
  return schema.type === 'array' && schema.items && schema.enum === undefined;
}
function isObjType(schema) {
  return schema.type === 'object' && schema.properties;
} // TODO: 检验是否丢进去各种schema都能兜底不会crash

function flattenSchema() {
  var _schema = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  var name = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '#';
  var parent = arguments.length > 2 ? arguments[2] : undefined;
  var result = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
  var schema = clone(_schema); // TODO: 是否需要deepClone，这个花费是不是有点大

  var _name = name;

  if (!schema.$id) {
    schema.$id = _name; // 给生成的schema添加一个唯一标识，方便从schema中直接读取
  }

  var children = [];

  if (isObjType(schema)) {
    Object.entries(schema.properties).forEach(function (_ref) {
      var _ref2 = _slicedToArray(_ref, 2),
          key = _ref2[0],
          value = _ref2[1];

      var _key = isListType(value) ? key + '[]' : key;

      var uniqueName = _name === '#' ? _key : _name + '.' + _key;
      children.push(uniqueName);
      flattenSchema(value, uniqueName, _name, result);
    }); // schema.properties = {};
  }

  if (isListType(schema)) {
    Object.entries(schema.items.properties).forEach(function (_ref3) {
      var _ref4 = _slicedToArray(_ref3, 2),
          key = _ref4[0],
          value = _ref4[1];

      var _key = isListType(value) ? key + '[]' : key;

      var uniqueName = _name === '#' ? _key : _name + '.' + _key;
      children.push(uniqueName);
      flattenSchema(value, uniqueName, _name, result);
    }); // schema.items.properties = {};
  }

  var rules = Array.isArray(schema.rules) ? _toConsumableArray(schema.rules) : [];

  if (['boolean', 'function', 'string'].indexOf(_typeof(schema.required)) > -1) {
    rules.push({
      required: schema.required
    }); // TODO: 万一内部已经用重复的required规则？
  }

  if (schema.type) {
    // Check: 为啥一定要有type？
    // TODO: 没有想好 validation 的部分
    result[_name] = {
      parent: parent,
      schema: schema,
      children: children,
      rules: rules
    };
  }

  return result;
} //////////   old

function stringContains(str, text) {
  return str.indexOf(text) > -1;
}

var isObject = function isObject(a) {
  return stringContains(Object.prototype.toString.call(a), 'Object');
}; // 克隆对象
// function clone1(data) {
//   // data = functionToString(data);
//   try {
//     return JSON.parse(JSON.stringify(data));
//   } catch (e) {
//     return data;
//   }
// }

var clone = cloneDeep; // export const clone = clone1;
// export const functionToString = data => {
//   let result;
//   if (isObject(data)) {
//     result = {};
//     Object.keys(data).forEach(key => {
//       result[key] = functionToString(data[key]);
//     });
//     return result;
//   } else if (typeof data === 'function') {
//     return result.toString();
//   }
//   return data;
// };
// '3' => true, 3 => true, undefined => false

function isLooselyNumber(num) {
  if (typeof num === 'number') return true;

  if (typeof num === 'string') {
    return !Number.isNaN(Number(num));
  }

  return false;
}
function isCssLength(str) {
  if (typeof str !== 'string') return false;
  return str.match(/^([0-9])*(%|px|rem|em)$/i);
} // 深度对比

function getFormat(format) {
  var dateFormat;

  switch (format) {
    case 'date':
      dateFormat = 'YYYY-MM-DD';
      break;

    case 'time':
      dateFormat = 'HH:mm:ss';
      break;

    case 'dateTime':
      dateFormat = 'YYYY-MM-DD HH:mm:ss';
      break;

    case 'week':
      dateFormat = 'YYYY-w';
      break;

    case 'year':
      dateFormat = 'YYYY';
      break;

    case 'quarter':
      dateFormat = 'YYYY-Q';
      break;

    case 'month':
      dateFormat = 'YYYY-MM';
      break;

    default:
      // dateTime
      dateFormat = 'YYYY-MM-DD';
  }

  return dateFormat;
}
// JSON无法使用函数值的参数，所以使用"{{...}}"来标记为函数，也可使用@标记，不推荐。

function isExpression(func) {
  // if (typeof func === 'function') {
  //   const funcString = func.toString();
  //   return (
  //     funcString.indexOf('formData') > -1 ||
  //     funcString.indexOf('rootValue') > -1
  //   );
  // }
  // 不再允许函数式的表达式了！
  if (typeof func !== 'string') return false; // 这样的pattern {{.....}}

  var pattern = /^{{(.+)}}$/;
  var reg1 = /^{{(function.+)}}$/;
  var reg2 = /^{{(.+=>.+)}}$/;

  if (typeof func === 'string' && func.match(pattern) && !func.match(reg1) && !func.match(reg2)) {
    return true;
  }

  return false;
}
function parseSingleExpression(func) {
  var formData = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var dataPath = arguments.length > 2 ? arguments[2] : undefined;
  var parentPath = getParentPath(dataPath);
  var parent = getValueByPath(formData, parentPath) || {};

  if (typeof func === 'string') {
    var funcBody = func.substring(2, func.length - 2);
    var match1 = /formData.([a-zA-Z0-9.$_\[\]]+)/g;
    var match2 = /rootValue.([a-zA-Z0-9.$_\[\]]+)/g;
    var str = "\n    return (".concat(funcBody.replaceAll(match1, function (v, m1) {
      return JSON.stringify(getValueByPath(formData, m1));
    }).replaceAll(match2, function (v, m1) {
      return JSON.stringify(getValueByPath(parent, m1));
    }), ")");

    try {
      return Function(str)();
    } catch (error) {
      return func;
    }
  } else return func;
}
var schemaContainsExpression = function schemaContainsExpression(schema) {
  var shallow = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

  if (isObject(schema)) {
    return Object.keys(schema).some(function (key) {
      var value = schema[key];

      if (typeof value === 'string') {
        return isExpression(value);
      } else if (!shallow && isObject(value)) {
        return schemaContainsExpression(value, false);
      }

      return false;
    });
  } else {
    return false;
  }
}; // TODO: 两个优化，1. 可以通过表达式的path来判断，避免一些重复计算

var parseAllExpression = function parseAllExpression(_schema, formData, dataPath) {
  var schema = clone(_schema);
  Object.keys(schema).forEach(function (key) {
    var value = schema[key];

    if (isExpression(value)) {
      schema[key] = parseSingleExpression(value, formData, dataPath);
    } // 有可能叫 xxxProps


    if (typeof key === 'string' && key.toLowerCase().indexOf('props') > -1) {
      var propsObj = schema[key];

      if (isObject(propsObj)) {
        Object.keys(propsObj).forEach(function (k) {
          schema[key][k] = parseSingleExpression(propsObj[k], formData, dataPath);
        });
      }
    }
  });
  return schema;
}; // 判断schema中是否有属性值是函数表达式

var getParentProps = function getParentProps(propName, id, flatten) {
  try {
    var item = flatten[id];
    if (item.schema[propName] !== undefined) return item.schema[propName];

    if (item && item.parent) {
      var parentSchema = flatten[item.parent].schema;

      if (parentSchema[propName] !== undefined) {
        return parentSchema[propName];
      } else {
        return getParentProps(propName, item.parent, flatten);
      }
    }
  } catch (error) {
    return undefined;
  }
};
var getArray = function getArray(arr) {
  var defaultValue = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
  if (Array.isArray(arr)) return arr;
  return defaultValue;
};
function defaultGetValueFromEvent(valuePropName) {
  var event = arguments.length <= 1 ? undefined : arguments[1];

  if (event && event.target && valuePropName in event.target) {
    return event.target[valuePropName];
  }

  return event;
}
var getKeyFromPath = function getKeyFromPath(path) {
  try {
    var keyList = path.split('.');
    var last = keyList.slice(-1)[0];
    return last;
  } catch (error) {
    console.error(error, 'getKeyFromPath');
    return '';
  }
}; // 更多的值获取

var getDisplayValue = function getDisplayValue(value, schema) {
  if (typeof value === 'boolean') {
    return value ? 'yes' : 'no';
  }

  if (isObjType(schema) || isListType(schema)) {
    return '-';
  }

  if (Array.isArray(schema.enum) && Array.isArray(schema.enumNames)) {
    try {
      return schema.enumNames[schema.enum.indexOf(value)];
    } catch (error) {
      return value;
    }
  }

  return value;
}; // 去掉数组里的空元素 {a: [null, {x:1}]} => {a: [{x:1}]}

var removeEmptyItemFromList = function removeEmptyItemFromList(formData) {
  var result = {};

  if (isObject(formData)) {
    Object.keys(formData).forEach(function (key) {
      result[key] = removeEmptyItemFromList(formData[key]);
    });
  } else if (Array.isArray(formData)) {
    result = formData.filter(function (item) {
      if (item && JSON.stringify(item) !== '{}') {
        return true;
      }

      return false;
    });
  } else {
    result = formData;
  }

  return result;
};
var getDescriptorFromSchema = function getDescriptorFromSchema(_ref5) {
  var schema = _ref5.schema,
      _ref5$isRequired = _ref5.isRequired,
      isRequired = _ref5$isRequired === void 0 ? true : _ref5$isRequired;
  var result = {};
  var singleResult = {};

  if (isObjType(schema)) {
    result.type = 'object';

    if (isRequired && schema.required === true) {
      result.required = true;
    }

    result.fields = {};
    Object.keys(schema.properties).forEach(function (key) {
      var item = schema.properties[key]; // 兼容旧的！

      if (Array.isArray(schema.required) && schema.required.indexOf(key) > -1) {
        item.required = true;
      }

      result.fields[key] = getDescriptorFromSchema({
        schema: item,
        isRequired: isRequired
      });
    });
  } else if (isListType(schema)) {
    result.type = 'array';

    if (isRequired && schema.required === true) {
      result.required = true;
    }

    result.defaultField = {
      type: 'object',
      fields: {}
    }; // 目前就默认只有object类型的 TODO:

    Object.keys(schema.items.properties).forEach(function (key) {
      var item = schema.items.properties[key]; // 兼容旧的！

      if (Array.isArray(schema.required) && schema.required.indexOf(key) > -1) {
        item.required = true;
      }

      result.defaultField.fields[key] = getDescriptorFromSchema({
        schema: item,
        isRequired: isRequired
      });
    });
  } else {
    // 单个的逻辑
    var processRule = function processRule(item) {
      if (schema.type) return _objectSpread2(_objectSpread2({}, item), {}, {
        type: schema.type
      });

      if (item.pattern && typeof item.pattern === 'string') {
        return _objectSpread2(_objectSpread2({}, item), {}, {
          pattern: new RegExp(item.pattern)
        });
      }

      return item;
    };

    var required = schema.required,
        rest = _objectWithoutProperties(schema, ["required"]);

    ['type', 'pattern', 'min', 'max', 'len'].forEach(function (key) {
      if (Object.keys(rest).indexOf(key) > -1) {
        singleResult[key] = rest[key];
      }
    });

    switch (schema.type) {
      case 'range':
        singleResult.type = 'array';

      case 'html':
        singleResult.type = 'string';
        break;
    }

    switch (schema.format) {
      case 'email':
      case 'url':
        singleResult.type = schema.format;
        break;
    }

    var requiredRule;

    if (isRequired && schema.required === true) {
      requiredRule = {
        required: true
      };
    }

    if (schema.rules) {
      if (Array.isArray(schema.rules)) {
        var _rules = [];
        schema.rules.forEach(function (item) {
          if (item.required === true) {
            if (isRequired) {
              requiredRule = item;
            }
          } else {
            _rules.push(processRule(item));
          }
        });
        result = [singleResult].concat(_rules);
      } else if (isObject(schema.rules)) {
        // TODO: 规范上不允许rules是object，省一点事儿
        result = [singleResult, processRule(schema.rules)];
      } else {
        result = singleResult;
      }
    } else {
      result = singleResult;
    }

    if (requiredRule) {
      if (Array.isArray(result)) {
        result.push(requiredRule);
      } else if (isObject(result)) {
        result = [result, requiredRule];
      }
    }

    if (schema.format === 'image') {
      var imgValidator = {
        validator: function validator(rule, value) {
          var pattern = /([/|.|w|s|-])*.(jpg|gif|png|bmp|apng|webp|jpeg|json)/;
          if (!value) return true; // 这里判断宽一点，undefined、null、'' 都当做没有填写

          return !!pattern.exec(value) || isUrl(value);
        },
        message: '${title}的类型不是image'
      };

      if (Array.isArray(result)) {
        result.push(imgValidator);
      } else if (isObject(result)) {
        result = [result, imgValidator];
      }
    }
  }

  return result;
}; // async-validator 产出的path没法用，转一下
// "list.1.userName" => "list[1].userName"

var formatPathFromValidator = function formatPathFromValidator(err) {
  var errArr = err.split('.');
  return errArr.map(function (item) {
    if (isNaN(Number(item))) {
      return item;
    } else {
      return "[".concat(item, "]");
    }
  }).reduce(function (a, b) {
    if (b[0] === '[' || a === '') {
      return a + b;
    } else {
      return a + '.' + b;
    }
  }, '');
}; // schema = {
//   type: 'object',
//   properties: {
//     x: {
//       type: 'object',
//       properties: {
//         y: {
//           type: 'string',
//           required: true,
//         },
//       },
//     },
//   },
// };
// path = 'x.y'
// return {required: true, message?: 'xxxx'}

var isPathRequired = function isPathRequired(path, schema) {
  var pathArr = path.split('.');

  while (pathArr.length > 0) {
    var _pathArr = pathArr,
        _pathArr2 = _toArray(_pathArr),
        _path = _pathArr2[0],
        rest = _pathArr2.slice(1);

    _path = _path.split('[')[0];
    var childSchema = void 0;

    if (isObjType(schema)) {
      childSchema = schema.properties[_path];
    } else if (isListType(schema)) {
      childSchema = schema.items.properties[_path];
    }

    pathArr = rest;

    if (childSchema) {
      return isPathRequired(rest.join('.'), childSchema);
    } // 单个的逻辑


    var result = {
      required: false
    };

    if (schema.required === true) {
      result.required = true;
    }

    if (schema.rules) {
      var requiredItem = schema.rules.find(function (item) {
        return item.required;
      });

      if (requiredItem) {
        result = requiredItem;
      }
    }

    return result;
  }
};
var generateDataSkeleton = function generateDataSkeleton(schema) {
  var result = {};

  if (isObjType(schema)) {
    Object.keys(schema.properties).forEach(function (key) {
      var childSchema = schema.properties[key];
      var childResult = generateDataSkeleton(childSchema);
      result[key] = childResult;
    });
  } else if (schema.default !== undefined) {
    result = schema.default;
  } else if (schema.type === 'boolean') {
    result = false;
  } else {
    result = undefined;
  }

  return result;
};
var translateMessage = function translateMessage(msg, schema) {
  if (typeof msg !== 'string') {
    return '';
  }

  if (!schema) return msg;
  msg = msg.replace('${title}', schema.title);
  msg = msg.replace('${type}', schema.format || schema.type); // 兼容代码

  if (schema.min) {
    msg = msg.replace('${min}', schema.min);
  }

  if (schema.max) {
    msg = msg.replace('${max}', schema.max);
  }

  if (schema.rules) {
    var minRule = schema.rules.find(function (r) {
      return r.min !== undefined;
    });

    if (minRule) {
      msg = msg.replace('${min}', minRule.min);
    }

    var maxRule = schema.rules.find(function (r) {
      return r.max !== undefined;
    });

    if (maxRule) {
      msg = msg.replace('${max}', maxRule.max);
    }

    var lenRule = schema.rules.find(function (r) {
      return r.len !== undefined;
    });

    if (lenRule) {
      msg = msg.replace('${len}', lenRule.len);
    }

    var patternRule = schema.rules.find(function (r) {
      return r.pattern !== undefined;
    });

    if (patternRule) {
      msg = msg.replace('${pattern}', patternRule.pattern);
    }
  }

  return msg;
}; // "objectName": {
//   "title": "对象",
//   "description": "这是一个对象类型",
//   "type": "object",
//   "properties": {
//   }
// }
// "listName": {
//   "title": "对象数组",
//   "description": "对象数组嵌套功能",
//   "type": "array",
//   "items": {
//     "type": "object",
//     "properties": {
//     }
//   }
// }

var changeSchema = function changeSchema(_schema, singleChange) {
  var schema = clone(_schema);
  schema = singleChange(schema);

  if (isObjType(schema)) {
    var requiredKeys = [];

    if (Array.isArray(schema.required)) {
      requiredKeys = schema.required;
      delete schema.required;
    }

    Object.keys(schema.properties).forEach(function (key) {
      var item = schema.properties[key];

      if (requiredKeys.indexOf(key) > -1) {
        item.required = true;
      }

      schema.properties[key] = changeSchema(item, singleChange);
    });
  } else if (isListType(schema)) {
    Object.keys(schema.items.properties).forEach(function (key) {
      var item = schema.items.properties[key];
      schema.items.properties[key] = changeSchema(item, singleChange);
    });
  }

  return schema;
};

var updateSchemaToNewVersion = function updateSchemaToNewVersion(schema) {
  return changeSchema(schema, updateSingleSchema);
};

var updateSingleSchema = function updateSingleSchema(schema) {
  try {
    var _schema = clone(schema);

    _schema.rules = _schema.rules || [];
    _schema.props = _schema.props || {};

    if (_schema['ui:options']) {
      _schema.props = _schema['ui:options'];
      delete _schema['ui:options'];
    }

    if (_schema.pattern) {
      var validItem = {
        pattern: _schema.pattern
      };

      if (_schema.message && _schema.message.pattern) {
        validItem.message = _schema.message.pattern;
      }

      _schema.rules.push(validItem);

      delete _schema.pattern;
      delete _schema.message;
    }

    if (_schema.minLength) {
      _schema.rules.push({
        min: _schema.minLength
      });

      delete _schema.minLength;
    }

    if (_schema.maxLength) {
      _schema.rules.push({
        max: _schema.maxLength
      });

      _schema.props.maxLength = _schema.maxLength;
      delete _schema.maxLength;
    }

    if (_schema.min) {
      _schema.rules.push({
        min: _schema.min
      });

      _schema.props.min = _schema.min;
      delete _schema.min;
    }

    if (_schema.max) {
      _schema.rules.push({
        max: _schema.max
      });

      _schema.props.max = _schema.max;
      delete _schema.max;
    }

    if (_schema.step) {
      _schema.props.step = _schema.step;
      delete _schema.step;
    }

    if (_schema.minItems) {
      _schema.props.minItems = _schema.minItems;
      delete _schema.minItems;
    }

    if (_schema.maxItems) {
      _schema.props.maxItems = _schema.maxItems;
      delete _schema.maxItems;
    } //


    if (_schema['ui:className']) {
      _schema.className = _schema['ui:className'];
      delete _schema['ui:className'];
    }

    if (_schema['ui:hidden']) {
      _schema.hidden = _schema['ui:hidden'];
      delete _schema['ui:hidden'];
    }

    if (_schema['ui:readonly']) {
      _schema.readOnly = _schema['ui:readonly']; // 改成驼峰了

      delete _schema['ui:readonly'];
    }

    if (_schema['ui:disabled']) {
      _schema.disabled = _schema['ui:disabled'];
      delete _schema['ui:disabled'];
    }

    if (_schema['ui:width']) {
      _schema.width = _schema['ui:width'];
      delete _schema['ui:width'];
    }

    if (_schema['ui:labelWidth']) {
      _schema.labelWidth = _schema['ui:labelWidth'];
      delete _schema['ui:labelWidth'];
    }

    if (_schema.rules && _schema.rules.length === 0) {
      delete _schema.rules;
    }

    return _schema;
  } catch (error) {
    console.error('旧schema转换失败！', error);
    return schema;
  }
}; // 旧版schema转新版schema
var cleanEmpty = function cleanEmpty(obj) {
  if (Array.isArray(obj)) {
    return obj.map(function (v) {
      return v && isObject(v) ? cleanEmpty(v) : v;
    }).filter(function (v) {
      return !(v == undefined);
    });
  } else if (isObject(obj)) {
    return Object.entries(obj).map(function (_ref6) {
      var _ref7 = _slicedToArray(_ref6, 2),
          k = _ref7[0],
          v = _ref7[1];

      return [k, v && isObject(v) ? cleanEmpty(v) : v];
    }).reduce(function (a, _ref8) {
      var _ref9 = _slicedToArray(_ref8, 2),
          k = _ref9[0],
          v = _ref9[1];

      return v == undefined ? a : (a[k] = v, a);
    }, {});
  } else {
    return obj;
  }
};
var removeHiddenFromResult = function removeHiddenFromResult(data, flatten) {
  Object.keys(flatten).forEach(function (key) {
    var hidden = flatten[key].schema && flatten[key].schema.hidden === true; // TODO: 有表达式的情况

    if (get(data, key) !== undefined && hidden) {
      set(data, key, undefined);
    }
  });
  return data;
};

var Ctx = /*#__PURE__*/createContext(function () {});
var StoreCtx = /*#__PURE__*/createContext({}); // 使用最顶层组件的 setState

var useTools = function useTools() {
  return useContext(Ctx);
}; // 组件最顶层传入的所有props

var useStore = function useStore() {
  return useContext(StoreCtx);
}; // export default logger;

var useSet = function useSet(x) {
  return useReducer(function (a, b) {
    return _objectSpread2(_objectSpread2({}, a), b);
  }, x);
}; // 类似于class component 的 setState

function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css_248z = ".fr-container .fr-card-item {\n  border: 1px solid rgba(0, 0, 0, 0.1);\n  border-radius: 4px;\n  padding: 10px 12px 4px 12px;\n  margin-bottom: 8px;\n  position: relative;\n  display: flex;\n}\n.fr-container .fr-card-item-row {\n  padding-top: 34px;\n}\n.fr-container .fr-card-index {\n  position: absolute;\n  top: 0;\n  left: 0;\n  padding-left: 4px;\n  padding-right: 6px;\n  border-bottom-right-radius: 8px;\n  border-top-left-radius: 3px;\n  background-color: rgba(0, 0, 0, 0.36);\n  font-size: 8px;\n  color: #fff;\n}\n.fr-container .fr-card-toolbar {\n  position: absolute;\n  top: 8px;\n  right: 8px;\n  display: flex;\n}\n";
styleInject(css_248z);

var SimpleList = function SimpleList(_ref) {
  var schema = _ref.schema,
      _ref$displayList = _ref.displayList,
      displayList = _ref$displayList === void 0 ? [] : _ref$displayList,
      dataIndex = _ref.dataIndex,
      deleteItem = _ref.deleteItem,
      addItem = _ref.addItem,
      copyItem = _ref.copyItem,
      getFieldsProps = _ref.getFieldsProps;
  return /*#__PURE__*/React.createElement("div", {
    className: "fr-list-1"
  }, displayList.map(function (item, idx) {
    var fieldsProps = getFieldsProps(idx);
    fieldsProps.displayType = 'inline';

    if (schema.props && schema.props.hideTitle) {
      fieldsProps.hideTitle = true;
    }

    return /*#__PURE__*/React.createElement("div", {
      key: idx,
      style: {
        display: 'flex'
      }
    }, /*#__PURE__*/React.createElement(Core, fieldsProps), /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 6
      }
    }, /*#__PURE__*/React.createElement(_Popconfirm, {
      title: "\u786E\u5B9A\u5220\u9664?",
      onConfirm: function onConfirm() {
        return deleteItem(idx);
      },
      okText: "\u786E\u5B9A",
      cancelText: "\u53D6\u6D88"
    }, /*#__PURE__*/React.createElement(_DeleteOutlined, {
      style: {
        fontSize: 17,
        marginLeft: 8
      }
    })), /*#__PURE__*/React.createElement(_CopyOutlined, {
      style: {
        fontSize: 15,
        marginLeft: 8
      },
      onClick: function onClick() {
        return copyItem(idx);
      }
    })));
  }), /*#__PURE__*/React.createElement(_Button, {
    style: {
      marginTop: displayList.length > 0 ? 0 : 8
    },
    type: "dashed",
    onClick: addItem
  }, "\u65B0\u589E\u4E00\u6761"));
};

var CardList = function CardList(_ref) {
  var _ref$displayList = _ref.displayList,
      displayList = _ref$displayList === void 0 ? [] : _ref$displayList,
      deleteItem = _ref.deleteItem,
      copyItem = _ref.copyItem,
      addItem = _ref.addItem,
      displayType = _ref.displayType,
      getFieldsProps = _ref.getFieldsProps;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "fr-card-list"
  }, displayList.map(function (item, idx) {
    var fieldsProps = getFieldsProps(idx);
    fieldsProps.displayType = displayType;
    return /*#__PURE__*/React.createElement("div", {
      className: "fr-card-item ".concat(displayType === 'row' ? 'fr-card-item-row' : ''),
      key: idx
    }, /*#__PURE__*/React.createElement("div", {
      className: "fr-card-index"
    }, idx + 1), /*#__PURE__*/React.createElement(Core, fieldsProps), /*#__PURE__*/React.createElement(_Space, {
      direction: "horizontal",
      className: "fr-card-toolbar"
    }, /*#__PURE__*/React.createElement(_Popconfirm, {
      title: "\u786E\u5B9A\u5220\u9664?",
      onConfirm: function onConfirm() {
        return deleteItem(idx);
      },
      okText: "\u786E\u5B9A",
      cancelText: "\u53D6\u6D88"
    }, /*#__PURE__*/React.createElement(_DeleteOutlined, {
      style: {
        fontSize: 17,
        marginLeft: 8
      }
    })), /*#__PURE__*/React.createElement(_CopyOutlined, {
      style: {
        fontSize: 16,
        marginLeft: 8
      },
      onClick: function onClick() {
        return copyItem(idx);
      }
    })));
  })), /*#__PURE__*/React.createElement(_Button, {
    style: {
      marginTop: displayList.length > 0 ? 0 : 8
    },
    type: "dashed",
    onClick: addItem
  }, "\u65B0\u589E\u4E00\u6761"));
};

// import ArrowDown from '../../../components/ArrowDown';
var FIELD_LENGTH = 120;

var TableList = function TableList(_ref) {
  var _ref$displayList = _ref.displayList,
      displayList = _ref$displayList === void 0 ? [] : _ref$displayList,
      dataIndex = _ref.dataIndex,
      children = _ref.children,
      deleteItem = _ref.deleteItem,
      addItem = _ref.addItem,
      flatten = _ref.flatten;
  var dataSource = displayList.map(function (item, idx) {
    return {
      index: idx
    };
  });
  var columns = children.map(function (child) {
    var item = flatten[child];
    var schema = item && item.schema || {};
    return {
      dataIndex: child,
      title: schema.required ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("span", {
        className: "fr-label-required"
      }, " *"), /*#__PURE__*/React.createElement("span", null, schema.title)) : schema.title,
      width: FIELD_LENGTH,
      render: function render(value, record, index) {
        // Check: record.index 似乎是antd自己会给的，不错哦
        var childIndex = [].concat(_toConsumableArray(dataIndex), [record.index]);
        return /*#__PURE__*/React.createElement(Core, {
          hideTitle: true,
          displayType: "inline",
          key: index.toString(),
          id: child,
          dataIndex: childIndex
        });
      }
    };
  });
  columns.push({
    title: '操作',
    key: '$action',
    fixed: 'right',
    width: 60,
    render: function render(value, record, idx) {
      return /*#__PURE__*/React.createElement(_Popconfirm, {
        title: "\u786E\u5B9A\u5220\u9664?",
        onConfirm: function onConfirm() {
          return deleteItem(idx);
        },
        okText: "\u786E\u5B9A",
        cancelText: "\u53D6\u6D88"
      }, /*#__PURE__*/React.createElement("a", null, "\u5220\u9664"));
    }
  });
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "w-100 mb2 tr"
  }, /*#__PURE__*/React.createElement(_Button, {
    type: "primary",
    size: "small",
    onClick: addItem
  }, "\u65B0\u589E")), /*#__PURE__*/React.createElement(_Table, {
    scroll: {
      x: 'max-content'
    },
    columns: columns,
    dataSource: dataSource,
    rowKey: "index",
    size: "small",
    pagination: {
      size: 'small',
      hideOnSinglePage: true
    }
  }));
};

var css_248z$1 = ".fr-container .error-message {\n  color: #ff4d4f;\n  min-height: 24px;\n  font-size: 14px;\n  line-height: 1.5715;\n  transition: color 0.3s cubic-bezier(0.215, 0.61, 0.355, 1);\n}\n";
styleInject(css_248z$1);

var ErrorMessage = function ErrorMessage(_ref) {
  var message = _ref.message,
      schema = _ref.schema,
      hideValidation = _ref.hideValidation;
  var msg = '';
  if (typeof message === 'string') msg = message;

  if (Array.isArray(message)) {
    msg = message[0] || '';
  }

  msg = translateMessage(msg, schema);
  return !msg && hideValidation ? null : /*#__PURE__*/React.createElement("div", {
    className: "error-message"
  }, msg);
};

var FIELD_LENGTH$1 = 120;

var DrawerList = function DrawerList(_ref) {
  var _ref$displayList = _ref.displayList,
      displayList = _ref$displayList === void 0 ? [] : _ref$displayList,
      dataPath = _ref.dataPath,
      dataIndex = _ref.dataIndex,
      children = _ref.children,
      deleteItem = _ref.deleteItem,
      addItem = _ref.addItem,
      moveItemDown = _ref.moveItemDown,
      moveItemUp = _ref.moveItemUp,
      flatten = _ref.flatten,
      errorFields = _ref.errorFields,
      getFieldsProps = _ref.getFieldsProps;
  var currentIndex = useRef(-1);

  var _useSet = useSet({
    showDrawer: false
  }),
      _useSet2 = _slicedToArray(_useSet, 2),
      state = _useSet2[0],
      setState = _useSet2[1];

  var showDrawer = state.showDrawer;
  var dataSource = displayList.map(function (item, index) {
    return _objectSpread2(_objectSpread2({}, item), {}, {
      $idx: index
    });
  });
  var columns = children.map(function (child) {
    var item = flatten[child];
    var schema = item && item.schema || {};

    var _dataIndex = getKeyFromPath(child);

    return {
      dataIndex: _dataIndex,
      title: schema.required ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("span", {
        className: "fr-label-required"
      }, " *"), /*#__PURE__*/React.createElement("span", null, schema.title)) : schema.title,
      width: FIELD_LENGTH$1,
      render: function render(value, record) {
        var childPath = getDataPath(child, [record.$idx]);
        var errorObj = errorFields.find(function (item) {
          return item.name == childPath;
        }) || {}; //TODO: 万一error在更深的层，这个办法是find不到的，会展示那一行没有提示。可以整一行加一个红线的方式处理

        return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", null, getDisplayValue(value, schema)), errorObj.error && /*#__PURE__*/React.createElement(ErrorMessage, {
          message: errorObj.error,
          schema: schema
        }));
      }
    };
  });
  columns.push({
    title: '操作',
    key: '$action',
    fixed: 'right',
    width: 80,
    render: function render(value, record, idx) {
      var index = value && value.$idx || 0;
      return /*#__PURE__*/React.createElement(_Space, null, /*#__PURE__*/React.createElement("a", {
        onClick: function onClick() {
          return openDrawer(index);
        }
      }, "\u7F16\u8F91"), /*#__PURE__*/React.createElement(_Popconfirm, {
        title: "\u786E\u5B9A\u5220\u9664?",
        onConfirm: function onConfirm() {
          return deleteItem(index);
        },
        okText: "\u786E\u5B9A",
        cancelText: "\u53D6\u6D88"
      }, /*#__PURE__*/React.createElement("a", null, "\u5220\u9664")));
    }
  });
  var fieldsProps = getFieldsProps(currentIndex.current);

  var openDrawer = function openDrawer(index) {
    currentIndex.current = index;
    setState({
      showDrawer: true
    });
  };

  var closeDrawer = function closeDrawer() {
    currentIndex.current = -1;
    setState({
      showDrawer: false
    });
  };

  var handleAdd = function handleAdd() {
    var newIndex = addItem();
    openDrawer(newIndex);
  };

  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "w-100 mb2 tr"
  }, /*#__PURE__*/React.createElement(_Button, {
    type: "primary",
    size: "small",
    onClick: handleAdd
  }, "\u65B0\u589E")), /*#__PURE__*/React.createElement(_Drawer, {
    width: "600",
    title: "\u7F16\u8F91",
    placement: "right",
    onClose: closeDrawer,
    visible: showDrawer,
    destroyOnClose: true // 必须要加，currentIndex不是一个state，Core不会重新渲染就跪了

  }, /*#__PURE__*/React.createElement("div", {
    className: "fr-container"
  }, /*#__PURE__*/React.createElement(Core, fieldsProps))), /*#__PURE__*/React.createElement(_Table, {
    scroll: {
      x: 'max-content'
    },
    columns: columns,
    dataSource: dataSource,
    rowClassName: function rowClassName(record, idx) {
      var index = record && record.$idx;
      var hasError = errorFields.find(function (item) {
        return item.name.indexOf("".concat(dataPath, "[").concat(index, "]")) > -1;
      });
      return hasError ? 'fr-row-error' : '';
    },
    rowKey: "$idx",
    size: "small",
    pagination: {
      size: 'small',
      hideOnSinglePage: true
    }
  }));
};

var RenderList = function RenderList(_ref) {
  var parentId = _ref.parentId,
      _ref$dataIndex = _ref.dataIndex,
      dataIndex = _ref$dataIndex === void 0 ? [] : _ref$dataIndex,
      _ref$children = _ref.children,
      children = _ref$children === void 0 ? [] : _ref$children,
      errorFields = _ref.errorFields,
      displayType = _ref.displayType;

  var _useStore = useStore(),
      formData = _useStore.formData,
      flatten = _useStore.flatten,
      onItemChange = _useStore.onItemChange,
      removeErrorField = _useStore.removeErrorField;

  var renderWidget = 'list';

  try {
    renderWidget = flatten[parentId].schema.widget;
  } catch (error) {}

  var item = flatten[parentId];
  var schema = item && item.schema; // 计算 list对应的formData

  var dataPath = getDataPath(parentId, dataIndex);
  var listData;

  if (typeof dataPath === 'string') {
    // TODO: listData会有不少“窟窿”，submit 的时候，listData 需要补齐 or filter
    listData = get(formData, dataPath);
  }

  var displayList = Array.isArray(listData) ? listData : [{}];

  var addItem = function addItem() {
    var newList = [].concat(_toConsumableArray(displayList), [{}]);
    var newIndex = newList.length - 1;
    onItemChange(dataPath, newList);
    return newIndex;
  };

  var copyItem = function copyItem(idx) {
    var newItem = displayList[idx];
    var newList = [].concat(_toConsumableArray(displayList.slice(0, idx)), [newItem], _toConsumableArray(displayList.slice(idx)));
    onItemChange(dataPath, newList);
  };

  var deleteItem = function deleteItem(idx) {
    // TODO: 删除元素的时候，也需要delete相对于的校验信息（errorFields）
    // remark: 删除时，不存在的item需要补齐，用null
    var newList = displayList.filter(function (item, kdx) {
      return kdx !== idx;
    });
    onItemChange(dataPath, newList);
    removeErrorField("".concat(dataPath, "[").concat(idx, "]"));
  }; //TODO1: 上线翻页要正确！！现在是错的


  var moveItemUp = function moveItemUp(idx) {
    if (idx === 0) return;
    var currentItem = displayList[idx];
    var itemAbove = displayList[idx - 1];
    var newList = displayList;
    newList[idx] = itemAbove;
    newList[idx - 1] = currentItem;
    onItemChange(dataPath, newList);
  };

  var moveItemDown = function moveItemDown(idx) {
    if (idx >= displayList.length - 1) return;
    var currentItem = displayList[idx];
    var itemBelow = displayList[idx + 1];
    var newList = displayList;
    newList[idx] = itemBelow;
    newList[idx + 1] = currentItem;
    onItemChange(dataPath, newList);
  };

  var itemSchema = {
    type: 'object',
    // properties: (schema.items && schema.items.properties) || {},
    properties: {},
    props: schema.props || {},
    $id: schema.$id
  };
  var itemFlatten = {
    schema: itemSchema,
    children: children
  };

  var getFieldsProps = function getFieldsProps(idx, extraProps) {
    return _objectSpread2({
      _item: itemFlatten,
      dataIndex: [].concat(_toConsumableArray(dataIndex), [idx])
    }, extraProps);
  };

  var displayProps = {
    displayList: displayList,
    schema: schema,
    dataPath: dataPath,
    dataIndex: dataIndex,
    children: children,
    deleteItem: deleteItem,
    addItem: addItem,
    copyItem: copyItem,
    moveItemDown: moveItemDown,
    moveItemUp: moveItemUp,
    listData: listData,
    flatten: flatten,
    errorFields: errorFields,
    displayType: displayType,
    getFieldsProps: getFieldsProps
  };

  switch (renderWidget) {
    case 'list0':
      return /*#__PURE__*/React.createElement(CardList, displayProps);

    case 'list1':
      return /*#__PURE__*/React.createElement(SimpleList, displayProps);

    case 'list2':
      return /*#__PURE__*/React.createElement(TableList, displayProps);

    case 'list3':
      return /*#__PURE__*/React.createElement(DrawerList, displayProps);

    default:
      return /*#__PURE__*/React.createElement(CardList, displayProps);
  }
};

var RenderObject = function RenderObject(_ref) {
  var _ref$children = _ref.children,
      children = _ref$children === void 0 ? [] : _ref$children,
      _ref$dataIndex = _ref.dataIndex,
      dataIndex = _ref$dataIndex === void 0 ? [] : _ref$dataIndex,
      displayType = _ref.displayType,
      hideTitle = _ref.hideTitle;
  return /*#__PURE__*/React.createElement(React.Fragment, null, children.map(function (child, i) {
    var FRProps = {
      displayType: displayType,
      id: child,
      dataIndex: dataIndex,
      hideTitle: hideTitle
    };
    return /*#__PURE__*/React.createElement(Core, _extends({
      key: i.toString()
    }, FRProps));
  }));
};

function useDebouncedCallback(func, wait, options) {
  var _this = this;

  var lastCallTime = useRef(null);
  var lastInvokeTime = useRef(0);
  var timerId = useRef(null);
  var lastArgs = useRef([]);
  var lastThis = useRef();
  var result = useRef();
  var funcRef = useRef(func);
  var mounted = useRef(true);
  funcRef.current = func; // Bypass `requestAnimationFrame` by explicitly setting `wait=0`.

  var useRAF = !wait && wait !== 0 && typeof window !== 'undefined';

  if (typeof func !== 'function') {
    throw new TypeError('Expected a function');
  }

  wait = +wait || 0;
  options = options || {};
  var leading = !!options.leading;
  var trailing = 'trailing' in options ? !!options.trailing : true; // `true` by default

  var maxing = ('maxWait' in options);
  var maxWait = maxing ? Math.max(+options.maxWait || 0, wait) : null;
  useEffect(function () {
    mounted.current = true;
    return function () {
      mounted.current = false;
    };
  }, []); // You may have a question, why we have so many code under the useMemo definition.
  //
  // This was made as we want to escape from useCallback hell and
  // not to initialize a number of functions each time useDebouncedCallback is called.
  //
  // It means that we have less garbage for our GC calls which improves performance.
  // Also, it makes this library smaller.
  //
  // And the last reason, that the code without lots of useCallback with deps is easier to read.
  // You have only one place for that.

  var debounced = useMemo(function () {
    var invokeFunc = function invokeFunc(time) {
      var args = lastArgs.current;
      var thisArg = lastThis.current;
      lastArgs.current = lastThis.current = null;
      lastInvokeTime.current = time;
      return result.current = funcRef.current.apply(thisArg, args);
    };

    var startTimer = function startTimer(pendingFunc, wait) {
      if (useRAF) cancelAnimationFrame(timerId.current);
      timerId.current = useRAF ? requestAnimationFrame(pendingFunc) : setTimeout(pendingFunc, wait);
    };

    var shouldInvoke = function shouldInvoke(time) {
      if (!mounted.current) return false;
      var timeSinceLastCall = time - lastCallTime.current;
      var timeSinceLastInvoke = time - lastInvokeTime.current; // Either this is the first call, activity has stopped and we're at the
      // trailing edge, the system time has gone backwards and we're treating
      // it as the trailing edge, or we've hit the `maxWait` limit.

      return !lastCallTime.current || timeSinceLastCall >= wait || timeSinceLastCall < 0 || maxing && timeSinceLastInvoke >= maxWait;
    };

    var trailingEdge = function trailingEdge(time) {
      timerId.current = null; // Only invoke if we have `lastArgs` which means `func` has been
      // debounced at least once.

      if (trailing && lastArgs.current) {
        return invokeFunc(time);
      }

      lastArgs.current = lastThis.current = null;
      return result.current;
    };

    var timerExpired = function timerExpired() {
      var time = Date.now();

      if (shouldInvoke(time)) {
        return trailingEdge(time);
      } // https://github.com/xnimorz/use-debounce/issues/97


      if (!mounted.current) {
        return;
      } // Remaining wait calculation


      var timeSinceLastCall = time - lastCallTime.current;
      var timeSinceLastInvoke = time - lastInvokeTime.current;
      var timeWaiting = wait - timeSinceLastCall;
      var remainingWait = maxing ? Math.min(timeWaiting, maxWait - timeSinceLastInvoke) : timeWaiting; // Restart the timer

      startTimer(timerExpired, remainingWait);
    };

    var func = function func() {
      var time = Date.now();
      var isInvoking = shouldInvoke(time);

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      lastArgs.current = args;
      lastThis.current = _this;
      lastCallTime.current = time;

      if (isInvoking) {
        if (!timerId.current && mounted.current) {
          // Reset any `maxWait` timer.
          lastInvokeTime.current = lastCallTime.current; // Start the timer for the trailing edge.

          startTimer(timerExpired, wait); // Invoke the leading edge.

          return leading ? invokeFunc(lastCallTime.current) : result.current;
        }

        if (maxing) {
          // Handle invocations in a tight loop.
          startTimer(timerExpired, wait);
          return invokeFunc(lastCallTime.current);
        }
      }

      if (!timerId.current) {
        startTimer(timerExpired, wait);
      }

      return result.current;
    };

    func.cancel = function () {
      if (timerId.current) {
        useRAF ? cancelAnimationFrame(timerId.current) : clearTimeout(timerId.current);
      }

      lastInvokeTime.current = 0;
      lastArgs.current = lastCallTime.current = lastThis.current = timerId.current = null;
    };

    func.isPending = function () {
      return !!timerId.current;
    };

    func.flush = function () {
      return !timerId.current ? result.current : trailingEdge(Date.now());
    };

    return func;
  }, [leading, maxing, wait, maxWait, trailing, useRAF]);
  return debounced;
}

var Title = function Title(_ref) {
  var labelClass = _ref.labelClass,
      labelStyle = _ref.labelStyle,
      schema = _ref.schema,
      displayType = _ref.displayType;

  var _useStore = useStore(),
      globalDisplayType = _useStore.displayType,
      readOnly = _useStore.readOnly;

  var title = schema.title,
      description = schema.description,
      required = schema.required,
      type = schema.type;
  var isObjType = type === 'object';

  var _displayType = schema.displayType || displayType || globalDisplayType || 'column';

  return /*#__PURE__*/React.createElement("div", {
    className: labelClass,
    style: labelStyle
  }, /*#__PURE__*/React.createElement("label", {
    className: "fr-label-title ".concat(isCheckBoxType(schema, readOnly) || _displayType === 'column' ? 'no-colon' : '') // checkbox不带冒号
    ,
    title: title
  }, required === true && /*#__PURE__*/React.createElement("span", {
    className: "fr-label-required"
  }, " *"), /*#__PURE__*/React.createElement("span", {
    className: "".concat(isObjType ? 'b' : '', " ").concat(_displayType === 'column' ? 'flex-none' : '')
  }, title), description && (_displayType === 'row' ? /*#__PURE__*/React.createElement("span", {
    className: "fr-tooltip-toggle",
    "aria-label": description
  }, /*#__PURE__*/React.createElement("i", {
    className: "fr-tooltip-icon"
  }), /*#__PURE__*/React.createElement("div", {
    className: "fr-tooltip-container"
  }, /*#__PURE__*/React.createElement("i", {
    className: "fr-tooltip-triangle"
  }), description)) : _displayType === 'inline' ? null : /*#__PURE__*/React.createElement("span", {
    className: "fr-desc ml2"
  }, "(\xA0", description, "\xA0)"))));
};

var mapping = {
  default: 'input',
  string: 'input',
  array: 'list',
  boolean: 'checkbox',
  integer: 'number',
  number: 'number',
  object: 'map',
  html: 'html',
  'string:upload': 'upload',
  'string:url': 'url',
  'string:dateTime': 'date',
  'string:date': 'date',
  'string:year': 'date',
  'string:month': 'date',
  'string:week': 'date',
  'string:quarter': 'date',
  'string:time': 'time',
  'string:textarea': 'textarea',
  'string:color': 'color',
  'string:image': 'imageInput',
  'range:time': 'timeRange',
  'range:dateTime': 'dateRange',
  'range:date': 'dateRange',
  'range:year': 'dateRange',
  'range:month': 'dateRange',
  'range:week': 'dateRange',
  'range:quarter': 'dateRange',
  '*?enum': 'radio',
  '*?enum_long': 'select',
  'array?enum': 'checkboxes',
  'array?enum_long': 'multiSelect',
  '*?readOnly': 'html' // TODO: 只读模式加上后，这儿要还要2个自定义组件。一个渲染list，一个渲染select

};
function getWidgetName(schema) {
  var _mapping = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : mapping;

  var type = schema.type,
      format = schema.format,
      enums = schema.enum,
      readOnly = schema.readOnly,
      widget = schema.widget; // 如果已经注明了渲染widget，那最好
  // if (schema['ui:widget']) {
  //   return schema['ui:widget'];
  // }

  var list = [];

  if (readOnly) {
    list.push("".concat(type, "?readOnly"));
    list.push('*?readOnly');
  }

  if (enums) {
    // 根据enum长度来智能选择控件
    if (Array.isArray(enums) && (type === 'array' && enums.length > 6 || type !== 'array' && enums.length > 2)) {
      list.push("".concat(type, "?enum_long"));
      list.push('*?enum_long');
    } else {
      list.push("".concat(type, "?enum")); // array 默认使用list，array?enum 默认使用checkboxes，*?enum 默认使用select

      list.push('*?enum');
    }
  }

  var _widget = widget || format;

  if (_widget) {
    list.push("".concat(type, ":").concat(_widget));
  }

  list.push(type); // 放在最后兜底，其他都不match时使用type默认的组件

  var found = '';
  list.some(function (item) {
    found = _mapping[item];
    return !!found;
  });
  return found;
}
var extraSchemaList = {
  checkbox: {
    valuePropName: 'checked'
  },
  switch: {
    valuePropName: 'checked'
  }
};

// mention: createWidget 设计的构架，保证了可以多次使用套壳，而不会互相影响。内部使用了一遍用于解析schema上的字段trigger, valuePropName。外部生成自定义组件的时候还可以再套一层，用于解析 propsMap

var createWidget = function createWidget(mapProps, extraSchema) {
  return function (Component) {
    return function (props) {
      var schema = props.schema,
          rest = _objectWithoutProperties(props, ["schema"]);

      var _schema = _objectSpread2(_objectSpread2({}, schema), extraSchema);

      var propsMap = typeof mapProps === 'function' ? mapProps(_objectSpread2({
        schema: _schema
      }, rest)) : {};

      var _props = _objectSpread2(_objectSpread2({
        schema: _schema
      }, rest), propsMap);

      var finalProps = transformProps(_props);
      return /*#__PURE__*/React.createElement(Component, finalProps);
    };
  };
};
var transformProps = function transformProps(props) {
  var onChange = props.onChange,
      value = props.value,
      defaultValue = props.defaultValue,
      ownSchema = props.schema,
      rest = _objectWithoutProperties(props, ["onChange", "value", "defaultValue", "schema"]);

  var schema = _objectSpread2({}, ownSchema);

  var _ref = schema || {},
      trigger = _ref.trigger,
      valuePropName = _ref.valuePropName;

  var controlProps = {};
  var _valuePropName = 'value';

  var _value = value === undefined ? defaultValue : value;

  if (valuePropName && typeof valuePropName === 'string') {
    _valuePropName = valuePropName;
    controlProps[valuePropName] = _value;
  } else {
    controlProps.value = _value;
  }

  var _onChange = function _onChange() {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var newValue = defaultGetValueFromEvent.apply(void 0, [_valuePropName].concat(args));
    onChange(newValue);
  };

  if (trigger && typeof trigger === 'string') {
    controlProps[trigger] = _onChange;
  } else {
    controlProps.onChange = _onChange;
  } // TODO: 之后 ui:xx 会舍去


  var usefulPropsFromSchema = {
    disabled: schema.disabled || schema['ui:disabled'],
    readOnly: schema.readOnly || schema['ui:readonly'],
    hidden: schema.hidden || schema['ui:hidden'] // $options: schema.options || schema['ui:options'],

  };

  var _props = _objectSpread2(_objectSpread2(_objectSpread2({}, controlProps), {}, {
    schema: schema
  }, usefulPropsFromSchema), rest);

  return _props;
};

var mapProps = function mapProps(_ref) {
  var schema = _ref.schema,
      style = _ref.style,
      _options = _ref.options;
  var options; // 如果已经有外部注入的options了，内部的schema就会被忽略

  if (_options && Array.isArray(_options)) {
    options = _options;
  } else {
    var _ref2 = schema || {},
        enums = _ref2.enum,
        enumNames = _ref2.enumNames;

    options = getArray(enums).map(function (item, idx) {
      var label = enumNames && Array.isArray(enumNames) ? enumNames[idx] : item;
      var isHtml = typeof label === 'string' && label[0] === '<';

      if (isHtml) {
        label = /*#__PURE__*/React.createElement("span", {
          dangerouslySetInnerHTML: {
            __html: label
          }
        });
      }

      return {
        label: label,
        value: item
      };
    });
  }

  return {
    options: options,
    mode: 'multiple',
    style: _objectSpread2({
      width: '100%',
      marginTop: 5
    }, style)
  };
};

var Checkboxes = createWidget(mapProps)(_Checkbox.Group);

var date = (function (_ref) {
  var onChange = _ref.onChange,
      format = _ref.format,
      value = _ref.value,
      style = _ref.style,
      rest = _objectWithoutProperties(_ref, ["onChange", "format", "value", "style"]);

  var dateFormat = getFormat(format); // week的时候会返回 2020-31周 quarter会返回 2020-Q2 需要处理之后才能被 moment

  var _value = value || undefined;

  if (typeof _value === 'string') {
    if (format === 'week') {
      _value = _value ? _value.substring(0, _value.length - 1) : _value;
    }

    if (format === 'quarter') {
      _value = _value.replace('Q', '');
    }
  }

  if (_value) {
    _value = moment(_value, dateFormat);
  }

  var handleChange = function handleChange(value, string) {
    onChange(string);
  };

  var dateParams = {
    value: _value,
    style: _objectSpread2({
      width: '100%'
    }, style),
    onChange: handleChange
  }; // TODO: format是在options里自定义的情况，是否要判断一下要不要showTime

  if (format === 'dateTime') {
    dateParams.showTime = true;
  }

  if (['week', 'month', 'quarter', 'year'].indexOf(format) > -1) {
    dateParams.picker = format;
  }

  dateParams = _objectSpread2(_objectSpread2({}, dateParams), rest);
  return /*#__PURE__*/React.createElement(_DatePicker, dateParams);
});

var time = (function (_ref) {
  var onChange = _ref.onChange,
      format = _ref.format,
      value = _ref.value,
      style = _ref.style,
      rest = _objectWithoutProperties(_ref, ["onChange", "format", "value", "style"]);

  var timeFormat = getFormat(format);

  var _value = value ? moment(value, timeFormat) : undefined;

  var handleChange = function handleChange(value, string) {
    onChange(string);
  };

  var timeParams = _objectSpread2({
    value: _value,
    style: _objectSpread2({
      width: '100%'
    }, style),
    onChange: handleChange
  }, rest);

  return /*#__PURE__*/React.createElement(_TimePicker, timeParams);
});

var RangePicker = _DatePicker.RangePicker;

var DateRange = function DateRange(_ref) {
  var onChange = _ref.onChange,
      format = _ref.format,
      value = _ref.value,
      style = _ref.style,
      rest = _objectWithoutProperties(_ref, ["onChange", "format", "value", "style"]);

  var dateFormat = getFormat(format);

  var _ref2 = Array.isArray(value) ? value : [],
      _ref3 = _slicedToArray(_ref2, 2),
      start = _ref3[0],
      end = _ref3[1]; // week的时候会返回 2020-31周 quarter会返回 2020-Q2 需要处理之后才能被 moment


  if (typeof start === 'string' && typeof end === 'string') {
    if (format === 'week') {
      start = start.substring(0, start.length - 1);
      end = end.substring(0, end.length - 1);
    }

    if (format === 'quarter') {
      start = start.replace('Q', '');
      end = end.replace('Q', '');
    }
  }

  var _value = start && end ? [moment(start, dateFormat), moment(end, dateFormat)] : [];

  var handleChange = function handleChange(value, stringList) {
    onChange(stringList);
  };

  var dateParams = {
    value: _value,
    style: _objectSpread2({
      width: '100%'
    }, style),
    onChange: handleChange
  }; // TODO: format是在options里自定义的情况，是否要判断一下要不要showTime

  if (format === 'dateTime') {
    dateParams.showTime = true;
  }

  if (['week', 'month', 'quarter', 'year'].indexOf(format) > -1) {
    dateParams.picker = format;
  }

  dateParams = _objectSpread2(_objectSpread2({}, dateParams), rest);
  return /*#__PURE__*/React.createElement(RangePicker, dateParams);
};

var RangePicker$1 = _TimePicker.RangePicker;

var TimeRange = function TimeRange(_ref) {
  var onChange = _ref.onChange,
      format = _ref.format,
      value = _ref.value,
      style = _ref.style,
      rest = _objectWithoutProperties(_ref, ["onChange", "format", "value", "style"]);

  var timeFormat = getFormat(format);

  var _ref2 = Array.isArray(value) ? value : [],
      _ref3 = _slicedToArray(_ref2, 2),
      start = _ref3[0],
      end = _ref3[1];

  var _value = start && end ? [moment(start, timeFormat), moment(end, timeFormat)] : [];

  var handleChange = function handleChange(value, stringList) {
    onChange(stringList);
  };

  var timeParams = _objectSpread2({
    style: _objectSpread2({
      width: '100%'
    }, style),
    value: _value,
    onChange: handleChange
  }, rest);

  return /*#__PURE__*/React.createElement(RangePicker$1, timeParams);
};

function map(_ref) {
  var children = _ref.children;
  return /*#__PURE__*/React.createElement("div", {
    className: "w-100"
  }, children);
}

var Panel = _Collapse.Panel;
function map$1(_ref) {
  var children = _ref.children,
      title = _ref.title,
      rest = _objectWithoutProperties(_ref, ["children", "title"]);

  var _useStore = useStore(),
      theme = _useStore.theme,
      displayType = _useStore.displayType;

  if (!title) {
    return /*#__PURE__*/React.createElement("div", {
      className: "w-100"
    }, children);
  }

  if (theme == '1') {
    return /*#__PURE__*/React.createElement("div", {
      className: "w-100"
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 17,
        fontWeight: 500,
        paddingBottom: 4,
        borderBottom: '1px solid rgba( 0, 0, 0, .2 )',
        marginBottom: 16
      }
    }, title), /*#__PURE__*/React.createElement("div", {
      style: {
        marginLeft: displayType == 'row' ? 0 : 12
      }
    }, children));
  }

  return /*#__PURE__*/React.createElement("div", {
    className: "w-100"
  }, /*#__PURE__*/React.createElement(_Collapse, {
    defaultActiveKey: ['1']
  }, /*#__PURE__*/React.createElement(Panel, {
    header: /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 16,
        fontWeight: 500
      }
    }, title),
    key: "1",
    className: "fr-collapse-object"
  }, children)));
} // export default function map({ children, title }) {
//   return <div className="w-100">{children}</div>;
// }

var MultiSelect = function MultiSelect(_ref) {
  var schema = _ref.schema,
      value = _ref.value,
      style = _ref.style,
      _options = _ref.options,
      rest = _objectWithoutProperties(_ref, ["schema", "value", "style", "options"]);

  var options; // 如果已经有外部注入的options了，内部的schema就会被忽略

  if (_options && Array.isArray(_options)) {
    options = _options;
  } else {
    var _ref2 = schema || {},
        enums = _ref2.enum,
        enumNames = _ref2.enumNames;

    options = getArray(enums).map(function (item, idx) {
      var label = enumNames && Array.isArray(enumNames) ? enumNames[idx] : item;
      var isHtml = typeof label === 'string' && label[0] === '<';

      if (isHtml) {
        label = /*#__PURE__*/React.createElement("span", {
          dangerouslySetInnerHTML: {
            __html: label
          }
        });
      }

      return {
        label: label,
        value: item
      };
    });
  }

  var selectProps = _objectSpread2({
    options: options,
    mode: 'multiple',
    style: _objectSpread2({
      width: '100%'
    }, style)
  }, rest);

  var _value = Array.isArray(value) ? value : undefined;

  return /*#__PURE__*/React.createElement(_Select, _extends({
    value: _value
  }, selectProps));
};

var mapProps$1 = function mapProps(_ref) {
  var schema = _ref.schema,
      style = _ref.style,
      _options = _ref.options;
  var options; // 如果已经有外部注入的options了，内部的schema就会被忽略

  if (_options && Array.isArray(_options)) {
    options = _options;
  } else {
    var _ref2 = schema || {},
        enums = _ref2.enum,
        enumNames = _ref2.enumNames;

    options = getArray(enums).map(function (item, idx) {
      var label = enumNames && Array.isArray(enumNames) ? enumNames[idx] : item;
      var isHtml = typeof label === 'string' && label[0] === '<';

      if (isHtml) {
        label = /*#__PURE__*/React.createElement("span", {
          dangerouslySetInnerHTML: {
            __html: label
          }
        });
      }

      return {
        label: label,
        value: item
      };
    });
  }

  return {
    options: options,
    mode: 'multiple',
    style: _objectSpread2({
      width: '100%',
      minWidth: 120,
      marginTop: 5
    }, style)
  };
}; // const A = ({ ...rest }) => {
//   return <Radio.Group {...rest} />;
// };


var Radioes = createWidget(mapProps$1)(_Radio.Group);

var mapProps$2 = function mapProps(_ref) {
  var schema = _ref.schema,
      style = _ref.style,
      _options = _ref.options;
  var options; // 如果已经有外部注入的options了，内部的schema就会被忽略

  if (_options && Array.isArray(_options)) {
    options = _options;
  } else {
    var _ref2 = schema || {},
        enums = _ref2.enum,
        enumNames = _ref2.enumNames;

    options = getArray(enums).map(function (item, idx) {
      var label = enumNames && Array.isArray(enumNames) ? enumNames[idx] : item;
      var isHtml = typeof label === 'string' && label[0] === '<';

      if (isHtml) {
        label = /*#__PURE__*/React.createElement("span", {
          dangerouslySetInnerHTML: {
            __html: label
          }
        });
      }

      return {
        label: label,
        value: item
      };
    });
  }

  return {
    options: options,
    style: _objectSpread2({
      width: '100%'
    }, style)
  };
};

var Component = createWidget(mapProps$2)(_Select);

var SliderWithNumber = function SliderWithNumber(_ref) {
  var schema = _ref.schema,
      value = _ref.value,
      onChange = _ref.onChange,
      hideInput = _ref.hideInput,
      inputProps = _ref.inputProps,
      rest = _objectWithoutProperties(_ref, ["schema", "value", "onChange", "hideInput", "inputProps"]);

  var max = schema.max,
      min = schema.min,
      step = schema.step;
  var setting = {};

  if (max || max === 0) {
    setting = {
      max: max
    };
  }

  if (min || min === 0) {
    setting = _objectSpread2(_objectSpread2({}, setting), {}, {
      min: min
    });
  }

  if (step) {
    setting = _objectSpread2(_objectSpread2({}, setting), {}, {
      step: step
    });
  }

  return /*#__PURE__*/React.createElement("div", {
    className: "fr-slider"
  }, /*#__PURE__*/React.createElement(_Slider, _extends({
    style: {
      flexGrow: 1,
      marginRight: hideInput ? 0 : 12
    }
  }, setting, {
    onChange: onChange,
    value: typeof value === 'number' ? value : min || 0
  }, rest)), hideInput ? null : /*#__PURE__*/React.createElement(_InputNumber, _extends({}, setting, inputProps, {
    style: {
      width: '90px'
    },
    value: value,
    onChange: onChange
  })));
};

function FrUpload(_ref) {
  var action = _ref.action,
      value = _ref.value,
      _onChange = _ref.onChange,
      uploadProps = _ref.uploadProps,
      buttonProps = _ref.buttonProps;

  var props = _objectSpread2({
    name: 'file',
    type: 'file',
    action: action,
    // 旧的兼容
    onChange: function onChange(info) {
      if (info.file.status === 'done') {
        _message.success("".concat(info.file.name, " \u4E0A\u4F20\u6210\u529F"));

        _onChange(info.file.response.url);
      } else if (info.file.status === 'error') {
        _message.error("".concat(info.file.name, " \u4E0A\u4F20\u5931\u8D25"));
      }
    },
    onRemove: function onRemove() {
      _onChange('');
    }
  }, uploadProps);

  var defaultBtnProps = {
    icon: /*#__PURE__*/React.createElement(_UploadOutlined, null),
    children: '上传'
  };

  var btnProps = _objectSpread2(_objectSpread2({}, defaultBtnProps), buttonProps);

  return /*#__PURE__*/React.createElement("div", {
    className: "fr-upload-mod"
  }, /*#__PURE__*/React.createElement(_Upload, _extends({}, props, {
    className: "fr-upload-file"
  }), /*#__PURE__*/React.createElement(_Button, btnProps)), value && /*#__PURE__*/React.createElement("a", {
    href: value,
    target: "_blank",
    rel: "noopener noreferrer",
    className: "fr-upload-preview"
  }, "\u5DF2\u4E0A\u4F20\u5730\u5740"));
}

var DEFAULT_IMG = 'https://img.alicdn.com/tfs/TB14tSiKhTpK1RjSZFKXXa2wXXa-354-330.png';

var PreviewNode = function PreviewNode(_ref) {
  var value = _ref.value;
  return /*#__PURE__*/React.createElement(_Popover, {
    content: /*#__PURE__*/React.createElement("img", {
      src: value || DEFAULT_IMG,
      alt: "\u56FE\u7247\u5730\u5740\u9519\u8BEF",
      className: "fr-preview-image"
    }),
    className: "fr-preview",
    placement: "bottom"
  }, /*#__PURE__*/React.createElement(_PictureOutlined, null));
};

function imageInput(_ref2) {
  var value = _ref2.value,
      rest = _objectWithoutProperties(_ref2, ["value"]);

  return /*#__PURE__*/React.createElement(_Input, _extends({
    value: value,
    addonAfter: /*#__PURE__*/React.createElement(PreviewNode, {
      value: value
    })
  }, rest));
}

var TestNode = function TestNode(_ref) {
  var value = _ref.value;
  var useUrl = isUrl(value);

  if (useUrl) {
    return /*#__PURE__*/React.createElement("a", {
      target: "_blank",
      href: value
    }, "\u6D4B\u8BD5\u94FE\u63A5");
  }

  return /*#__PURE__*/React.createElement("div", null, "\u6D4B\u8BD5\u94FE\u63A5");
};

function imageInput$1(_ref2) {
  var value = _ref2.value,
      rest = _objectWithoutProperties(_ref2, ["value"]);

  return /*#__PURE__*/React.createElement(_Input, _extends({
    value: value,
    addonAfter: /*#__PURE__*/React.createElement(TestNode, {
      value: value
    })
  }, rest));
}

function html(_ref) {
  var value = _ref.value,
      schema = _ref.schema;
  var __html = '-';

  if (schema.type === 'boolean') {
    __html = value === true ? '✔' : '✘';
  } else if (Array.isArray(schema.enum) && Array.isArray(schema.enumNames)) {
    if (['string', 'number'].indexOf(_typeof(value)) > -1) {
      var idx = schema.enum.indexOf(value);
      __html = schema.enumNames[idx] || '-';
    } else if (Array.isArray(value)) {
      var idxStr = '-';
      value.forEach(function (v) {
        var idx = schema.enum.indexOf(v);
        var name = schema.enumNames[idx];

        if (name) {
          idxStr += ',' + name;
        }
      });
      __html = idxStr.replace('-,', '');
    }
  } else if (typeof value === 'number') {
    __html = String(value);
  } else if (typeof value === 'string') {
    __html = value;
  }

  return /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 5,
      minHeight: 22
    },
    dangerouslySetInnerHTML: {
      __html: __html
    }
  });
}

var TextArea = _Input.TextArea;
var FrNumber = createWidget(function (_ref) {
  var style = _ref.style;
  return {
    style: _objectSpread2({
      width: '100%'
    }, style)
  };
})(_InputNumber);
var FrSwitch = createWidget(function (_ref2) {
  var style = _ref2.style;
  return {
    style: _objectSpread2({
      marginTop: 5
    }, style)
  };
})(_Switch);
var FrTextArea = createWidget(function (_ref3) {
  var autoSize = _ref3.autoSize;
  return {
    autoSize: autoSize ? autoSize : {
      minRows: 3
    }
  };
})(TextArea); // TODO: 这个如果 size small可能会有问题

var FrCheckbox = function FrCheckbox(_ref4) {
  var style = _ref4.style,
      rest = _objectWithoutProperties(_ref4, ["style"]);

  return /*#__PURE__*/React.createElement(_Checkbox, _extends({
    style: _objectSpread2({
      paddingTop: 4,
      paddingBottom: 4
    }, style)
  }, rest));
};

var FrTreeSelect = function FrTreeSelect(_ref5) {
  var style = _ref5.style,
      rest = _objectWithoutProperties(_ref5, ["style"]);

  return /*#__PURE__*/React.createElement(_TreeSelect, _extends({
    style: _objectSpread2({
      width: '100%'
    }, style)
  }, rest));
};

var FrCascader = function FrCascader(_ref6) {
  var style = _ref6.style,
      rest = _objectWithoutProperties(_ref6, ["style"]);

  return /*#__PURE__*/React.createElement(_Cascader, _extends({
    style: _objectSpread2({
      width: '100%'
    }, style)
  }, rest));
};

var widgets = {
  input: _Input,
  checkbox: FrCheckbox,
  checkboxes: Checkboxes,
  // checkbox多选
  date: date,
  time: time,
  dateRange: DateRange,
  timeRange: TimeRange,
  imageInput: imageInput,
  url: imageInput$1,
  list: map,
  map: map$1,
  multiSelect: MultiSelect,
  // 下拉多选
  number: FrNumber,
  radio: Radioes,
  select: Component,
  slider: SliderWithNumber,
  // 带滚条的number
  switch: FrSwitch,
  textarea: FrTextArea,
  upload: FrUpload,
  html: html,
  rate: _Rate,
  treeSelect: FrTreeSelect,
  cascader: FrCascader
};

// import Map from '../../widgets/antd/map';

var ErrorSchema = function ErrorSchema(schema) {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      color: 'red'
    }
  }, "schema\u672A\u5339\u914D\u5230\u5C55\u793A\u7EC4\u4EF6\uFF1A"), /*#__PURE__*/React.createElement("div", null, JSON.stringify(schema)));
};

var ExtendedWidget = function ExtendedWidget(_ref) {
  var schema = _ref.schema,
      onChange = _ref.onChange,
      value = _ref.value,
      children = _ref.children,
      onItemChange = _ref.onItemChange,
      formData = _ref.formData,
      getValue = _ref.getValue,
      readOnly = _ref.readOnly,
      dataPath = _ref.dataPath,
      dataIndex = _ref.dataIndex;

  var _useTools = useTools(),
      widgets = _useTools.widgets,
      mapping = _useTools.mapping; // TODO1: 需要查一下卡顿的源头
  // if (isObjType(schema)) {
  //   return <Map value={value} onChange={onChange} children={children} />;
  // }
  // if (isListType(schema)) {
  //   return 'haha';
  // }
  // return <Input value={value} onChange={e => onChange(e.target.value)} />;
  // TODO: 计算是哪个widget，需要优化
  // let widgetName = useMemo(() => getWidgetName(schema, mapping), [
  //   JSON.stringify(schema),
  // ]);


  var widgetName = getWidgetName(schema, mapping);
  var customName = schema.widget || schema['ui:widget'];

  if (customName && widgets[customName]) {
    widgetName = customName;
  }

  if (readOnly && !isObjType(schema) && !isListType(schema)) {
    widgetName = 'html';
  }

  if (!widgetName) {
    widgetName = 'input';
    return /*#__PURE__*/React.createElement(ErrorSchema, {
      schema: schema
    });
  }

  var Widget = widgets[widgetName];
  var extraSchema = extraSchemaList[widgetName];

  var widgetProps = _objectSpread2({
    schema: _objectSpread2(_objectSpread2({}, schema), extraSchema),
    onChange: onChange,
    value: value,
    children: children
  }, schema.props);

  ['title', 'placeholder', 'disabled', 'format'].forEach(function (key) {
    if (schema[key]) {
      widgetProps[key] = schema[key];
    }
  });

  if (schema.default !== undefined) {
    widgetProps.defaultValue = schema.default;
  }

  if (schema.props) {
    widgetProps = _objectSpread2(_objectSpread2({}, widgetProps), schema.props);
  } // 避免传组件不接受的props，按情况传多余的props
  // const isExternalWidget = defaultWidgetNameList.indexOf(widgetName) === -1; // 是否是外部组件


  widgetProps.addons = {
    onItemChange: onItemChange,
    setValue: onItemChange,
    getValue: getValue,
    formData: formData,
    dataPath: dataPath,
    dataIndex: dataIndex
  };
  var finalProps = transformProps(widgetProps);
  return /*#__PURE__*/React.createElement(Widget, finalProps);
};

var areEqual = function areEqual(prev, current) {
  if (prev.schema && prev.schema.$id === '#') {
    return false;
  }

  if (prev.schema && prev.schema.type === 'object') {
    return false;
  }

  if (prev.value === current.value && JSON.stringify(prev.schema) === JSON.stringify(current.schema)) {
    return true;
  }

  return false;
};

var ExtendedWidget$1 = /*#__PURE__*/React.memo(ExtendedWidget, areEqual);

var RenderField = function RenderField(props) {
  var $id = props.$id,
      dataIndex = props.dataIndex,
      item = props.item,
      labelClass = props.labelClass,
      labelStyle = props.labelStyle,
      _contentClass = props.contentClass,
      hasChildren = props.hasChildren,
      children = props.children,
      _props$errorFields = props.errorFields,
      errorFields = _props$errorFields === void 0 ? [] : _props$errorFields,
      hideTitle = props.hideTitle,
      displayType = props.displayType;
  var _schema = item.schema;
  var store = useStore();
  var onItemChange = store.onItemChange,
      formData = store.formData,
      setEditing = store.setEditing,
      touchKey = store.touchKey,
      debounceInput = store.debounceInput,
      readOnly = store.readOnly; // console.log('<renderField>', $id);

  var dataPath = getDataPath($id, dataIndex);
  var errObj = errorFields.find(function (err) {
    return err.name === dataPath;
  });
  var errorMessage = errObj && errObj.error; // 是一个list

  var hasError = Array.isArray(errorMessage) && errorMessage.length > 0; // 补上这个class，会自动让下面所有的展示ui变红！

  var contentClass = hasError ? _contentClass + ' ant-form-item-has-error' : _contentClass;

  var _value = getValueByPath(formData, dataPath);

  var _getValue = function _getValue(path) {
    if (path === '#' || !path) {
      return formData;
    } else if (typeof path === 'string') {
      return getValueByPath(formData, path);
    } else {
      console.error('path has to be a string');
    }
  };

  var contentStyle = {};
  var debouncedSetEditing = useDebouncedCallback(setEditing, 350);

  var _readOnly = readOnly !== undefined ? readOnly : _schema.readOnly; // TODO: 优化一下，只有touch还是false的时候，setTouched


  var onChange = function onChange(value) {
    // 动过的key，算被touch了
    touchKey(dataPath); // 开始编辑，节流

    if (debounceInput) {
      setEditing(true);
      debouncedSetEditing(false);
    }

    if (typeof dataPath === 'string') {
      onItemChange(dataPath, value);
    }
  };

  var titleProps = {
    labelClass: labelClass,
    labelStyle: labelStyle,
    schema: _schema,
    displayType: displayType
  };
  var hideValidation = displayType === 'inline' || _readOnly === true;
  var messageProps = {
    message: errorMessage,
    schema: _schema,
    displayType: displayType,
    hideValidation: hideValidation
  };
  var placeholderTitleProps = {
    className: labelClass,
    style: labelStyle
  };

  var _showTitle = !hideTitle && !!_schema.title; // TODO: 这块最好能判断上一层是list1，


  if (hideTitle && _schema.title) {
    _schema.placeholder = _schema.placeholder || _schema.title;
  }

  var widgetProps = {
    schema: _schema,
    readOnly: _readOnly,
    onChange: onChange,
    getValue: _getValue,
    formData: formData,
    value: _value,
    onItemChange: onItemChange,
    dataIndex: dataIndex,
    dataPath: dataPath
  };
  widgetProps.children = hasChildren ? children : isCheckBoxType(_schema, _readOnly) ? _schema.title : null; // if (_schema && _schema.default !== undefined) {
  //   widgetProps.value = _schema.default;
  // }
  // checkbox必须单独处理，布局太不同了

  if (isCheckBoxType(_schema, _readOnly)) {
    return /*#__PURE__*/React.createElement(React.Fragment, null, _showTitle && /*#__PURE__*/React.createElement("div", placeholderTitleProps), /*#__PURE__*/React.createElement("div", {
      className: contentClass,
      style: contentStyle
    }, /*#__PURE__*/React.createElement(ExtendedWidget$1, widgetProps), /*#__PURE__*/React.createElement(ErrorMessage, messageProps)));
  }

  var titleElement = /*#__PURE__*/React.createElement(Title, titleProps);

  if (isObjType(_schema)) {
    titleElement = /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex'
      }
    }, titleElement, /*#__PURE__*/React.createElement(ErrorMessage, messageProps));
    return /*#__PURE__*/React.createElement("div", {
      className: contentClass,
      style: contentStyle
    }, /*#__PURE__*/React.createElement(ExtendedWidget$1, _extends({}, widgetProps, {
      message: errorMessage,
      title: _showTitle ? titleElement : undefined
    })));
  }

  return /*#__PURE__*/React.createElement(React.Fragment, null, _showTitle && titleElement, /*#__PURE__*/React.createElement("div", {
    className: "".concat(contentClass, " ").concat(hideTitle ? 'fr-content-no-title' : ''),
    style: contentStyle
  }, /*#__PURE__*/React.createElement(ExtendedWidget$1, widgetProps), /*#__PURE__*/React.createElement(ErrorMessage, messageProps)));
};

var Core = function Core(_ref) {
  var _ref$id = _ref.id,
      id = _ref$id === void 0 ? '#' : _ref$id,
      _item = _ref._item,
      _ref$dataIndex = _ref.dataIndex,
      dataIndex = _ref$dataIndex === void 0 ? [] : _ref$dataIndex,
      _ref$hideTitle = _ref.hideTitle,
      hideTitle = _ref$hideTitle === void 0 ? false : _ref$hideTitle,
      _ref$hideValidation = _ref.hideValidation,
      hideValidation = _ref$hideValidation === void 0 ? false : _ref$hideValidation,
      debugCss = _ref.debugCss,
      rest = _objectWithoutProperties(_ref, ["id", "_item", "dataIndex", "hideTitle", "hideValidation", "debugCss"]);

  // console.log('<Core>');
  var snapShot = useRef();

  var _useStore = useStore(),
      displayType = _useStore.displayType,
      column = _useStore.column,
      flatten = _useStore.flatten,
      errorFields = _useStore.errorFields,
      labelWidth = _useStore.labelWidth,
      readOnly = _useStore.readOnly,
      isEditing = _useStore.isEditing,
      formData = _useStore.formData;

  var item = _item ? _item : flatten[id];
  if (!item) return null;
  var _schema = item.schema;
  var dataPath = getDataPath(id, dataIndex);
  var schema = clone(_schema); // TODO: 用deepClone，函数啥的才能正常copy，但是deepClone的代价是不是有点大，是否应该让用户避免schema里写函数
  // 节流部分逻辑，编辑时不执行

  if (isEditing && snapShot.current) {
    schema = snapShot.current;
  } else {
    if (schemaContainsExpression(schema)) {
      schema = parseAllExpression(schema, formData, dataPath);
    }

    snapShot.current = schema;
  }

  if (schema.hidden) {
    return null;
  } // displayType 一层层网上找值


  var _displayType = schema.displayType || rest.displayType || displayType || 'column';

  var isList = isListType(schema);
  var isObj = isObjType(schema);
  var isComplex = isObj || isList;
  var isCheckBox = isCheckBoxType(schema, readOnly);
  var width = schema.width || schema['ui:width'];
  var containerClass = "fr-field ".concat(_displayType === 'inline' ? '' : 'w-100', " flex");
  var labelClass = "fr-label";
  var contentClass = "fr-content"; // common classNames dispite row or column

  switch (schema.type) {
    case 'object':
      if (isObj) {
        if (schema.title) {
          labelClass += ' fr-label-object';
        }

        containerClass += ' fr-field-object';
      }

      break;

    case 'array':
      // list 有两种展示形式！
      if (isList) {
        if (schema.title) {
          labelClass += ' fr-label-list';
        }

        containerClass += ' fr-field-column';
      }

      break;

    case 'boolean':
      if (isCheckBox) {
        contentClass += ' fr-content-column'; // checkbox高度短，需要居中对齐

        containerClass += " flex ".concat(_displayType === 'column' ? 'flex-column' : '');
      }

      break;
  } // column specific className


  if (!isComplex && !isCheckBox) {
    if (_displayType === 'column') {
      containerClass += ' flex-column';
      labelClass += ' fr-label-column';
      contentClass += ' fr-content-column';

      switch (schema.type) {
        case 'object':
          break;

        case 'array':
          if (schema.title && !schema.enum) ;

          break;
      }
    } else if (_displayType === 'row') {
      // row specific className
      containerClass += '';
      labelClass += ' fr-label-row';
      contentClass += ' fr-content-row';

      if (!isObj && !isCheckBox) {
        labelClass += ' flex-shrink-0 fr-label-row';
        contentClass += ' flex-grow-1 relative';
      }
    }
  } // style part


  var columnStyle = {};

  if (!isObj) {
    if (width) {
      columnStyle = {
        width: width,
        paddingRight: '12px'
      };
    } else if (column > 1) {
      columnStyle = {
        width: "calc(100% /".concat(column, ")"),
        paddingRight: '12px'
      };
    }
  } // 真正有效的label宽度需要从现在所在item开始一直往上回溯（设计成了继承关系），找到的第一个有值的 ui:labelWidth


  var effectiveLabelWidth = getParentProps('labelWidth', id, flatten) || labelWidth;

  var _labelWidth = isLooselyNumber(effectiveLabelWidth) ? Number(effectiveLabelWidth) : isCssLength(effectiveLabelWidth) ? effectiveLabelWidth : 110; // 默认是 110px 的长度


  var labelStyle = {
    width: _labelWidth
  };

  if (isComplex || _displayType === 'column') {
    labelStyle = {
      flexGrow: 1
    };
  }

  if (_displayType === 'inline') {
    labelStyle = {
      marginTop: 5,
      paddingLeft: 12
    };
    labelClass = '';
    contentClass += ' fr-content-inline';

    if (containerClass.indexOf('fr-field-object') === -1) {
      containerClass += ' fr-field-inline';
    }
  }

  var hasChildren = item.children && item.children.length > 0;
  var fieldProps = {
    $id: id,
    dataIndex: dataIndex,
    item: _objectSpread2(_objectSpread2({}, item), {}, {
      schema: schema
    }),
    labelClass: labelClass,
    labelStyle: labelStyle,
    contentClass: contentClass,
    errorFields: errorFields,
    hasChildren: hasChildren,
    // 层级间可使用的字段
    displayType: _displayType,
    hideTitle: hideTitle,
    hideValidation: hideValidation
  };
  var objChildren = hasChildren ? /*#__PURE__*/React.createElement("div", {
    className: "flex flex-wrap"
  }, /*#__PURE__*/React.createElement(RenderObject, {
    dataIndex: dataIndex,
    errorFields: errorFields,
    displayType: _displayType,
    hideTitle: hideTitle
  }, item.children)) : null;
  var listChildren = hasChildren ? /*#__PURE__*/React.createElement(RenderList, {
    parentId: id,
    dataIndex: dataIndex,
    errorFields: errorFields,
    displayType: _displayType,
    hideTitle: hideTitle
  }, item.children) : null;
  return /*#__PURE__*/React.createElement("div", {
    style: columnStyle,
    className: "".concat(containerClass, " ").concat(debugCss ? 'debug' : '')
  }, /*#__PURE__*/React.createElement(RenderField, fieldProps, isObj && objChildren, isList && listChildren));
};
//   const fieldProps = { ...rest };
//   return React.cloneElement(children, fieldProps);
// };

var css_248z$2 = ".fr-container {\n  /* Resets */\n  /*\n    This will set table to full width and then\n    all cells will be equal width\n  */\n  /* 1. Fix for Chrome 44 bug.\n    * https://code.google.com/p/chromium/issues/detail?id=506893 */\n  /* Height Percentages - Based off of height of parent */\n  /* Screen Height Percentage */\n  /* String Properties */\n  /* Max Width Percentages */\n  /* Max Width Scale */\n  /* Max Width String Properties */\n}\n.fr-container .outline {\n  outline: 1px solid;\n}\n.fr-container .outline-transparent {\n  outline: 1px solid transparent;\n}\n.fr-container .outline-0 {\n  outline: 0;\n}\n.fr-container .ba {\n  border-style: solid;\n  border-width: 1px;\n}\n.fr-container .bt {\n  border-top-style: solid;\n  border-top-width: 1px;\n}\n.fr-container .br {\n  border-right-style: solid;\n  border-right-width: 1px;\n}\n.fr-container .bb {\n  border-bottom-style: solid;\n  border-bottom-width: 1px;\n}\n.fr-container .bl {\n  border-left-style: solid;\n  border-left-width: 1px;\n}\n.fr-container .bn {\n  border-style: none;\n  border-width: 0;\n}\n.fr-container .br0 {\n  border-radius: 0;\n}\n.fr-container .br1 {\n  border-radius: 0.125rem;\n}\n.fr-container .br2 {\n  border-radius: 0.25rem;\n}\n.fr-container .br3 {\n  border-radius: 0.5rem;\n}\n.fr-container .br4 {\n  border-radius: 1rem;\n}\n.fr-container .br-100 {\n  border-radius: 100%;\n}\n.fr-container .br-pill {\n  border-radius: 9999px;\n}\n.fr-container .br--bottom {\n  border-top-left-radius: 0;\n  border-top-right-radius: 0;\n}\n.fr-container .br--top {\n  border-bottom-left-radius: 0;\n  border-bottom-right-radius: 0;\n}\n.fr-container .br--right {\n  border-top-left-radius: 0;\n  border-bottom-left-radius: 0;\n}\n.fr-container .br--left {\n  border-top-right-radius: 0;\n  border-bottom-right-radius: 0;\n}\n.fr-container .b--dotted {\n  border-style: dotted;\n}\n.fr-container .b--dashed {\n  border-style: dashed;\n}\n.fr-container .b--solid {\n  border-style: solid;\n}\n.fr-container .b--none {\n  border-style: none;\n}\n.fr-container .b--black-10 {\n  border-color: rgba(0, 0, 0, 0.1);\n}\n.fr-container .b--black-20 {\n  border-color: rgba(0, 0, 0, 0.2);\n}\n.fr-container .b--black-30 {\n  border-color: rgba(0, 0, 0, 0.3);\n}\n.fr-container .bw0 {\n  border-width: 0;\n}\n.fr-container .bw1 {\n  border-width: 0.125rem;\n}\n.fr-container .bw2 {\n  border-width: 0.25rem;\n}\n.fr-container .bw3 {\n  border-width: 0.5rem;\n}\n.fr-container .bw4 {\n  border-width: 1rem;\n}\n.fr-container .bw5 {\n  border-width: 2rem;\n}\n.fr-container .bt-0 {\n  border-top-width: 0;\n}\n.fr-container .br-0 {\n  border-right-width: 0;\n}\n.fr-container .bb-0 {\n  border-bottom-width: 0;\n}\n.fr-container .bl-0 {\n  border-left-width: 0;\n}\n.fr-container .shadow-1 {\n  box-shadow: 0 0 4px 2px rgba(0, 0, 0, 0.2);\n}\n.fr-container .shadow-2 {\n  box-shadow: 0 0 8px 2px rgba(0, 0, 0, 0.2);\n}\n.fr-container .shadow-3 {\n  box-shadow: 2px 2px 4px 2px rgba(0, 0, 0, 0.2);\n}\n.fr-container .shadow-4 {\n  box-shadow: 2px 2px 8px 0 rgba(0, 0, 0, 0.2);\n}\n.fr-container .shadow-5 {\n  box-shadow: 4px 4px 8px 0 rgba(0, 0, 0, 0.2);\n}\n.fr-container .top-0 {\n  top: 0;\n}\n.fr-container .right-0 {\n  right: 0;\n}\n.fr-container .bottom-0 {\n  bottom: 0;\n}\n.fr-container .left-0 {\n  left: 0;\n}\n.fr-container .top-1 {\n  top: 1rem;\n}\n.fr-container .right-1 {\n  right: 1rem;\n}\n.fr-container .bottom-1 {\n  bottom: 1rem;\n}\n.fr-container .left-1 {\n  left: 1rem;\n}\n.fr-container .top-2 {\n  top: 2rem;\n}\n.fr-container .right-2 {\n  right: 2rem;\n}\n.fr-container .bottom-2 {\n  bottom: 2rem;\n}\n.fr-container .left-2 {\n  left: 2rem;\n}\n.fr-container .top--1 {\n  top: -1rem;\n}\n.fr-container .right--1 {\n  right: -1rem;\n}\n.fr-container .bottom--1 {\n  bottom: -1rem;\n}\n.fr-container .left--1 {\n  left: -1rem;\n}\n.fr-container .top--2 {\n  top: -2rem;\n}\n.fr-container .right--2 {\n  right: -2rem;\n}\n.fr-container .bottom--2 {\n  bottom: -2rem;\n}\n.fr-container .left--2 {\n  left: -2rem;\n}\n.fr-container .absolute--fill {\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n}\n.fr-container .dn {\n  display: none;\n}\n.fr-container .di {\n  display: inline;\n}\n.fr-container .db {\n  display: block;\n}\n.fr-container .dib {\n  display: inline-block;\n}\n.fr-container .dit {\n  display: inline-table;\n}\n.fr-container .dt {\n  display: table;\n}\n.fr-container .dtc {\n  display: table-cell;\n}\n.fr-container .dt-row {\n  display: table-row;\n}\n.fr-container .dt-row-group {\n  display: table-row-group;\n}\n.fr-container .dt-column {\n  display: table-column;\n}\n.fr-container .dt-column-group {\n  display: table-column-group;\n}\n.fr-container .dt--fixed {\n  table-layout: fixed;\n  width: 100%;\n}\n.fr-container .flex {\n  display: flex;\n}\n.fr-container .inline-flex {\n  display: inline-flex;\n}\n.fr-container .flex-auto {\n  flex: 1 1 auto;\n  min-width: 0;\n  /* 1 */\n  min-height: 0;\n  /* 1 */\n}\n.fr-container .flex-none {\n  flex: none;\n}\n.fr-container .flex-column {\n  flex-direction: column;\n}\n.fr-container .flex-row {\n  flex-direction: row;\n}\n.fr-container .flex-wrap {\n  flex-wrap: wrap;\n}\n.fr-container .flex-nowrap {\n  flex-wrap: nowrap;\n}\n.fr-container .flex-wrap-reverse {\n  flex-wrap: wrap-reverse;\n}\n.fr-container .flex-column-reverse {\n  flex-direction: column-reverse;\n}\n.fr-container .flex-row-reverse {\n  flex-direction: row-reverse;\n}\n.fr-container .items-start {\n  align-items: flex-start;\n}\n.fr-container .items-end {\n  align-items: flex-end;\n}\n.fr-container .items-center {\n  align-items: center;\n}\n.fr-container .items-baseline {\n  align-items: baseline;\n}\n.fr-container .items-stretch {\n  align-items: stretch;\n}\n.fr-container .self-start {\n  align-self: flex-start;\n}\n.fr-container .self-end {\n  align-self: flex-end;\n}\n.fr-container .self-center {\n  align-self: center;\n}\n.fr-container .self-baseline {\n  align-self: baseline;\n}\n.fr-container .self-stretch {\n  align-self: stretch;\n}\n.fr-container .justify-start {\n  justify-content: flex-start;\n}\n.fr-container .justify-end {\n  justify-content: flex-end;\n}\n.fr-container .justify-center {\n  justify-content: center;\n}\n.fr-container .justify-between {\n  justify-content: space-between;\n}\n.fr-container .justify-around {\n  justify-content: space-around;\n}\n.fr-container .content-start {\n  align-content: flex-start;\n}\n.fr-container .content-end {\n  align-content: flex-end;\n}\n.fr-container .content-center {\n  align-content: center;\n}\n.fr-container .content-between {\n  align-content: space-between;\n}\n.fr-container .content-around {\n  align-content: space-around;\n}\n.fr-container .content-stretch {\n  align-content: stretch;\n}\n.fr-container .order-0 {\n  order: 0;\n}\n.fr-container .order-1 {\n  order: 1;\n}\n.fr-container .order-2 {\n  order: 2;\n}\n.fr-container .order-3 {\n  order: 3;\n}\n.fr-container .order-4 {\n  order: 4;\n}\n.fr-container .order-5 {\n  order: 5;\n}\n.fr-container .order-6 {\n  order: 6;\n}\n.fr-container .order-7 {\n  order: 7;\n}\n.fr-container .order-8 {\n  order: 8;\n}\n.fr-container .order-last {\n  order: 99999;\n}\n.fr-container .flex-grow-0 {\n  flex-grow: 0;\n}\n.fr-container .flex-grow-1 {\n  flex-grow: 1;\n}\n.fr-container .flex-shrink-0 {\n  flex-shrink: 0;\n}\n.fr-container .flex-shrink-1 {\n  flex-shrink: 1;\n}\n.fr-container .fw1 {\n  font-weight: 100;\n}\n.fr-container .fw2 {\n  font-weight: 200;\n}\n.fr-container .fw3 {\n  font-weight: 300;\n}\n.fr-container .fw4 {\n  font-weight: 400;\n}\n.fr-container .fw5 {\n  font-weight: 500;\n}\n.fr-container .fw6 {\n  font-weight: 600;\n}\n.fr-container .fw7 {\n  font-weight: 700;\n}\n.fr-container .fw8 {\n  font-weight: 800;\n}\n.fr-container .fw9 {\n  font-weight: 900;\n}\n.fr-container .h1 {\n  height: 1rem;\n}\n.fr-container .h2 {\n  height: 2rem;\n}\n.fr-container .h3 {\n  height: 4rem;\n}\n.fr-container .h4 {\n  height: 8rem;\n}\n.fr-container .h5 {\n  height: 16rem;\n}\n.fr-container .h-25 {\n  height: 25%;\n}\n.fr-container .h-50 {\n  height: 50%;\n}\n.fr-container .h-75 {\n  height: 75%;\n}\n.fr-container .h-100 {\n  height: 100%;\n}\n.fr-container .min-h-100 {\n  min-height: 100%;\n}\n.fr-container .vh-25 {\n  height: 25vh;\n}\n.fr-container .vh-50 {\n  height: 50vh;\n}\n.fr-container .vh-75 {\n  height: 75vh;\n}\n.fr-container .vh-100 {\n  height: 100vh;\n}\n.fr-container .min-vh-100 {\n  min-height: 100vh;\n}\n.fr-container .h-auto {\n  height: auto;\n}\n.fr-container .h-inherit {\n  height: inherit;\n}\n.fr-container .tracked {\n  letter-spacing: 0.1em;\n}\n.fr-container .tracked-tight {\n  letter-spacing: -0.05em;\n}\n.fr-container .tracked-mega {\n  letter-spacing: 0.25em;\n}\n.fr-container .lh-solid {\n  line-height: 1;\n}\n.fr-container .lh-title {\n  line-height: 1.25;\n}\n.fr-container .lh-copy {\n  line-height: 1.5;\n}\n.fr-container .mw-100 {\n  max-width: 100%;\n}\n.fr-container .mw1 {\n  max-width: 1rem;\n}\n.fr-container .mw2 {\n  max-width: 2rem;\n}\n.fr-container .mw3 {\n  max-width: 4rem;\n}\n.fr-container .mw4 {\n  max-width: 8rem;\n}\n.fr-container .mw5 {\n  max-width: 16rem;\n}\n.fr-container .mw6 {\n  max-width: 32rem;\n}\n.fr-container .mw7 {\n  max-width: 48rem;\n}\n.fr-container .mw8 {\n  max-width: 64rem;\n}\n.fr-container .mw9 {\n  max-width: 96rem;\n}\n.fr-container .mw-none {\n  max-width: none;\n}\n.fr-container .w1 {\n  width: 1rem;\n}\n.fr-container .w2 {\n  width: 2rem;\n}\n.fr-container .w3 {\n  width: 4rem;\n}\n.fr-container .w4 {\n  width: 8rem;\n}\n.fr-container .w5 {\n  width: 16rem;\n}\n.fr-container .w-10 {\n  width: 10%;\n}\n.fr-container .w-20 {\n  width: 20%;\n}\n.fr-container .w-25 {\n  width: 25%;\n}\n.fr-container .w-30 {\n  width: 30%;\n}\n.fr-container .w-33 {\n  width: 33%;\n}\n.fr-container .w-34 {\n  width: 34%;\n}\n.fr-container .w-40 {\n  width: 40%;\n}\n.fr-container .w-50 {\n  width: 50%;\n}\n.fr-container .w-60 {\n  width: 60%;\n}\n.fr-container .w-70 {\n  width: 70%;\n}\n.fr-container .w-75 {\n  width: 75%;\n}\n.fr-container .w-80 {\n  width: 80%;\n}\n.fr-container .w-90 {\n  width: 90%;\n}\n.fr-container .w-100 {\n  width: 100%;\n}\n.fr-container .w-third {\n  width: calc(100% / 3);\n}\n.fr-container .w-two-thirds {\n  width: calc(100% / 1.5);\n}\n.fr-container .w-auto {\n  width: auto;\n}\n.fr-container .tl {\n  text-align: left;\n}\n.fr-container .tr {\n  text-align: right;\n}\n.fr-container .tc {\n  text-align: center;\n}\n.fr-container .tj {\n  text-align: justify;\n}\n.fr-container .overflow-visible {\n  overflow: visible;\n}\n.fr-container .overflow-hidden {\n  overflow: hidden;\n}\n.fr-container .overflow-scroll {\n  overflow: scroll;\n}\n.fr-container .overflow-auto {\n  overflow: auto;\n}\n.fr-container .overflow-x-visible {\n  overflow-x: visible;\n}\n.fr-container .overflow-x-hidden {\n  overflow-x: hidden;\n}\n.fr-container .overflow-x-scroll {\n  overflow-x: scroll;\n}\n.fr-container .overflow-x-auto {\n  overflow-x: auto;\n}\n.fr-container .overflow-y-visible {\n  overflow-y: visible;\n}\n.fr-container .overflow-y-hidden {\n  overflow-y: hidden;\n}\n.fr-container .overflow-y-scroll {\n  overflow-y: scroll;\n}\n.fr-container .overflow-y-auto {\n  overflow-y: auto;\n}\n.fr-container .static {\n  position: static;\n}\n.fr-container .relative {\n  position: relative;\n}\n.fr-container .absolute {\n  position: absolute;\n}\n.fr-container .fixed {\n  position: fixed;\n}\n.fr-container .o-100 {\n  opacity: 1;\n}\n.fr-container .o-90 {\n  opacity: 0.9;\n}\n.fr-container .o-80 {\n  opacity: 0.8;\n}\n.fr-container .o-70 {\n  opacity: 0.7;\n}\n.fr-container .o-60 {\n  opacity: 0.6;\n}\n.fr-container .o-50 {\n  opacity: 0.5;\n}\n.fr-container .o-40 {\n  opacity: 0.4;\n}\n.fr-container .o-30 {\n  opacity: 0.3;\n}\n.fr-container .o-20 {\n  opacity: 0.2;\n}\n.fr-container .o-10 {\n  opacity: 0.1;\n}\n.fr-container .o-05 {\n  opacity: 0.05;\n}\n.fr-container .o-025 {\n  opacity: 0.025;\n}\n.fr-container .o-0 {\n  opacity: 0;\n}\n.fr-container .pa0 {\n  padding: 0;\n}\n.fr-container .pa1 {\n  padding: 0.25rem;\n}\n.fr-container .pa2 {\n  padding: 0.5rem;\n}\n.fr-container .pa3 {\n  padding: 1rem;\n}\n.fr-container .pa4 {\n  padding: 2rem;\n}\n.fr-container .pa5 {\n  padding: 4rem;\n}\n.fr-container .pa6 {\n  padding: 8rem;\n}\n.fr-container .pa7 {\n  padding: 16rem;\n}\n.fr-container .pl0 {\n  padding-left: 0;\n}\n.fr-container .pl1 {\n  padding-left: 0.25rem;\n}\n.fr-container .pl2 {\n  padding-left: 0.5rem;\n}\n.fr-container .pl3 {\n  padding-left: 1rem;\n}\n.fr-container .pl4 {\n  padding-left: 2rem;\n}\n.fr-container .pl5 {\n  padding-left: 4rem;\n}\n.fr-container .pl6 {\n  padding-left: 8rem;\n}\n.fr-container .pl7 {\n  padding-left: 16rem;\n}\n.fr-container .pr0 {\n  padding-right: 0;\n}\n.fr-container .pr1 {\n  padding-right: 0.25rem;\n}\n.fr-container .pr2 {\n  padding-right: 0.5rem;\n}\n.fr-container .pr3 {\n  padding-right: 1rem;\n}\n.fr-container .pr4 {\n  padding-right: 2rem;\n}\n.fr-container .pr5 {\n  padding-right: 4rem;\n}\n.fr-container .pr6 {\n  padding-right: 8rem;\n}\n.fr-container .pr7 {\n  padding-right: 16rem;\n}\n.fr-container .pb0 {\n  padding-bottom: 0;\n}\n.fr-container .pb1 {\n  padding-bottom: 0.25rem;\n}\n.fr-container .pb2 {\n  padding-bottom: 0.5rem;\n}\n.fr-container .pb3 {\n  padding-bottom: 1rem;\n}\n.fr-container .pb4 {\n  padding-bottom: 2rem;\n}\n.fr-container .pb5 {\n  padding-bottom: 4rem;\n}\n.fr-container .pb6 {\n  padding-bottom: 8rem;\n}\n.fr-container .pb7 {\n  padding-bottom: 16rem;\n}\n.fr-container .pt0 {\n  padding-top: 0;\n}\n.fr-container .pt1 {\n  padding-top: 0.25rem;\n}\n.fr-container .pt2 {\n  padding-top: 0.5rem;\n}\n.fr-container .pt3 {\n  padding-top: 1rem;\n}\n.fr-container .pt4 {\n  padding-top: 2rem;\n}\n.fr-container .pt5 {\n  padding-top: 4rem;\n}\n.fr-container .pt6 {\n  padding-top: 8rem;\n}\n.fr-container .pt7 {\n  padding-top: 16rem;\n}\n.fr-container .pv0 {\n  padding-top: 0;\n  padding-bottom: 0;\n}\n.fr-container .pv1 {\n  padding-top: 0.25rem;\n  padding-bottom: 0.25rem;\n}\n.fr-container .pv2 {\n  padding-top: 0.5rem;\n  padding-bottom: 0.5rem;\n}\n.fr-container .pv3 {\n  padding-top: 1rem;\n  padding-bottom: 1rem;\n}\n.fr-container .pv4 {\n  padding-top: 2rem;\n  padding-bottom: 2rem;\n}\n.fr-container .pv5 {\n  padding-top: 4rem;\n  padding-bottom: 4rem;\n}\n.fr-container .pv6 {\n  padding-top: 8rem;\n  padding-bottom: 8rem;\n}\n.fr-container .pv7 {\n  padding-top: 16rem;\n  padding-bottom: 16rem;\n}\n.fr-container .ph0 {\n  padding-left: 0;\n  padding-right: 0;\n}\n.fr-container .ph1 {\n  padding-left: 0.25rem;\n  padding-right: 0.25rem;\n}\n.fr-container .ph2 {\n  padding-left: 0.5rem;\n  padding-right: 0.5rem;\n}\n.fr-container .ph3 {\n  padding-left: 1rem;\n  padding-right: 1rem;\n}\n.fr-container .ph4 {\n  padding-left: 2rem;\n  padding-right: 2rem;\n}\n.fr-container .ph5 {\n  padding-left: 4rem;\n  padding-right: 4rem;\n}\n.fr-container .ph6 {\n  padding-left: 8rem;\n  padding-right: 8rem;\n}\n.fr-container .ph7 {\n  padding-left: 16rem;\n  padding-right: 16rem;\n}\n.fr-container .ma1 {\n  margin: 0.25rem;\n}\n.fr-container .ma2 {\n  margin: 0.5rem;\n}\n.fr-container .ma3 {\n  margin: 1rem;\n}\n.fr-container .ma4 {\n  margin: 2rem;\n}\n.fr-container .ma5 {\n  margin: 4rem;\n}\n.fr-container .ma6 {\n  margin: 8rem;\n}\n.fr-container .ma7 {\n  margin: 16rem;\n}\n.fr-container .ma0 {\n  margin: 0;\n}\n.fr-container .ml1 {\n  margin-left: 0.25rem;\n}\n.fr-container .ml2 {\n  margin-left: 0.5rem;\n}\n.fr-container .ml3 {\n  margin-left: 1rem;\n}\n.fr-container .ml4 {\n  margin-left: 2rem;\n}\n.fr-container .ml5 {\n  margin-left: 4rem;\n}\n.fr-container .ml6 {\n  margin-left: 8rem;\n}\n.fr-container .ml7 {\n  margin-left: 16rem;\n}\n.fr-container .ml0 {\n  margin-left: 0;\n}\n.fr-container .mr1 {\n  margin-right: 0.25rem;\n}\n.fr-container .mr2 {\n  margin-right: 0.5rem;\n}\n.fr-container .mr3 {\n  margin-right: 1rem;\n}\n.fr-container .mr4 {\n  margin-right: 2rem;\n}\n.fr-container .mr5 {\n  margin-right: 4rem;\n}\n.fr-container .mr6 {\n  margin-right: 8rem;\n}\n.fr-container .mr7 {\n  margin-right: 16rem;\n}\n.fr-container .mr0 {\n  margin-right: 0;\n}\n.fr-container .mb1 {\n  margin-bottom: 0.25rem;\n}\n.fr-container .mb2 {\n  margin-bottom: 0.5rem;\n}\n.fr-container .mb3 {\n  margin-bottom: 1rem;\n}\n.fr-container .mb4 {\n  margin-bottom: 2rem;\n}\n.fr-container .mb5 {\n  margin-bottom: 4rem;\n}\n.fr-container .mb6 {\n  margin-bottom: 8rem;\n}\n.fr-container .mb7 {\n  margin-bottom: 16rem;\n}\n.fr-container .mb0 {\n  margin-bottom: 0;\n}\n.fr-container .mt1 {\n  margin-top: 0.25rem;\n}\n.fr-container .mt2 {\n  margin-top: 0.5rem;\n}\n.fr-container .mt3 {\n  margin-top: 1rem;\n}\n.fr-container .mt4 {\n  margin-top: 2rem;\n}\n.fr-container .mt5 {\n  margin-top: 4rem;\n}\n.fr-container .mt6 {\n  margin-top: 8rem;\n}\n.fr-container .mt7 {\n  margin-top: 16rem;\n}\n.fr-container .mt0 {\n  margin-top: 0;\n}\n.fr-container .mv1 {\n  margin-top: 0.25rem;\n  margin-bottom: 0.25rem;\n}\n.fr-container .mv2 {\n  margin-top: 0.5rem;\n  margin-bottom: 0.5rem;\n}\n.fr-container .mv3 {\n  margin-top: 1rem;\n  margin-bottom: 1rem;\n}\n.fr-container .mv4 {\n  margin-top: 2rem;\n  margin-bottom: 2rem;\n}\n.fr-container .mv5 {\n  margin-top: 4rem;\n  margin-bottom: 4rem;\n}\n.fr-container .mv6 {\n  margin-top: 8rem;\n  margin-bottom: 8rem;\n}\n.fr-container .mv7 {\n  margin-top: 16rem;\n  margin-bottom: 16rem;\n}\n.fr-container .mv0 {\n  margin-top: 0;\n  margin-bottom: 0;\n}\n.fr-container .mh1 {\n  margin-left: 0.25rem;\n  margin-right: 0.25rem;\n}\n.fr-container .mh2 {\n  margin-left: 0.5rem;\n  margin-right: 0.5rem;\n}\n.fr-container .mh3 {\n  margin-left: 1rem;\n  margin-right: 1rem;\n}\n.fr-container .mh4 {\n  margin-left: 2rem;\n  margin-right: 2rem;\n}\n.fr-container .mh5 {\n  margin-left: 4rem;\n  margin-right: 4rem;\n}\n.fr-container .mh6 {\n  margin-left: 8rem;\n  margin-right: 8rem;\n}\n.fr-container .mh7 {\n  margin-left: 16rem;\n  margin-right: 16rem;\n}\n.fr-container .mh0 {\n  margin-left: 0;\n  margin-right: 0;\n}\n.fr-container .debug * {\n  outline: 1px solid gold;\n}\n.fr-container .debug-white * {\n  outline: 1px solid white;\n}\n.fr-container .debug-black * {\n  outline: 1px solid black;\n}\n.fr-container .debug-grid {\n  background: transparent url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAFElEQVR4AWPAC97/9x0eCsAEPgwAVLshdpENIxcAAAAASUVORK5CYII= ) repeat top left;\n}\n.fr-container .truncate {\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.fr-container .bg-white {\n  background-color: #fff;\n}\n.fr-container .pointer:hover {\n  cursor: pointer;\n}\n.fr-container .link {\n  color: #1890ff;\n  font-size: 14px;\n}\n.fr-container .link:hover {\n  color: #40a9ff;\n  font-size: 14px;\n}\n";
styleInject(css_248z$2);

var css_248z$3 = "/*\n  用于原有样式的覆盖\n */\n.fr-container {\n  /* Row */\n  /* 自定义类 */\n  /* 组件内部样式*/\n  /* 其他样式 */\n}\n.fr-container .fr-field {\n  font-size: 14px;\n  padding: 0;\n  color: rgba(0, 0, 0, 0.85);\n  line-height: 1.5715;\n  margin-bottom: 0;\n}\n.fr-container .fr-field-column {\n  flex-direction: column;\n}\n.fr-container .fr-field-object {\n  flex-direction: column;\n}\n.fr-container .fr-field-inline {\n  margin-bottom: 12px;\n}\n.fr-container .ant-table-cell .fr-field {\n  margin-bottom: 0;\n}\n.fr-container .fr-collapse-object {\n  margin-bottom: 8px;\n  overflow: hidden;\n  background: #f7f7f7;\n  border-radius: 2px;\n}\n.fr-container .fr-collapse-object .ant-collapse-header {\n  padding-bottom: 4px !important;\n  padding-top: 4px !important;\n}\n.fr-container .fr-collapse-object .ant-collapse-content-box {\n  padding: 8px 8px 4px 8px !important;\n}\n.fr-container .fr-collapse-object .ant-collapse-arrow {\n  padding-top: 5px !important;\n}\n.fr-container .fr-label {\n  display: block;\n}\n.fr-container .fr-label-row {\n  text-align: right;\n  flex-shrink: 0;\n  margin-top: 5px;\n}\n.fr-container .fr-label-column {\n  margin-bottom: 4px;\n}\n.fr-container .fr-label-title {\n  display: inline-flex;\n  color: #333;\n  font-size: 14px;\n  min-height: 22px;\n  /* \"\"的标签页占位 */\n  line-height: 22px;\n}\n.fr-container .fr-label-required {\n  margin: 1px 4px 0 0;\n  color: #f5222d;\n  font-size: 14px;\n  font-family: SimSun, sans-serif;\n}\n.fr-container .fr-label-title::after {\n  content: ':';\n  position: relative;\n  top: -0.5px;\n  margin: 0 10px 0 2px;\n}\n.fr-container .fr-label-title.no-colon::after {\n  content: '';\n  margin: 0;\n}\n.fr-container .fr-label-object .fr-label-title {\n  font-size: 16px;\n  color: #222;\n}\n.fr-container .fr-label-list {\n  margin-bottom: 5px;\n}\n.fr-container .fr-content {\n  width: 100%;\n}\n.fr-container .fr-list-1 .fr-content {\n  min-width: 140px;\n}\n.fr-container .fr-list-1 .fr-content-row {\n  flex: 1;\n  position: relative;\n}\n.fr-container .fr-list-1 .fr-content.fr-content-inline {\n  width: unset;\n}\n.fr-container .fr-list-1 .fr-content.fr-content-inline.fr-content-no-title {\n  margin-right: 8px;\n}\n.fr-container .fr-desc {\n  /* margin-top: 3px; */\n  font-size: 12px;\n  word-break: break-all;\n  color: #888;\n}\n.fr-container .fr-validate {\n  margin-left: 12px;\n  font-size: 12px;\n  word-break: break-all;\n  color: #f5222d;\n}\n.fr-container .fr-validate-row {\n  margin: 3px 0 0 0;\n}\n.fr-container .fr-field-row .fr-tooltip-icon {\n  margin: 3px 2px 0 0;\n}\n.fr-container .hover-b--black-20:hover {\n  border-color: rgba(0, 0, 0, 0.3);\n}\n.fr-container .pt44 {\n  padding-top: 46px;\n}\n.fr-container .pv12 {\n  padding-top: 12px;\n  padding-bottom: 12px;\n}\n.fr-container .fr-move-icon {\n  position: absolute;\n  top: 0;\n  right: 0;\n  padding-top: 2px;\n  padding-right: 10px;\n  font-size: 24px;\n  font-weight: 300;\n}\n.fr-container .fr-move-icon:hover {\n  cursor: move;\n}\n.fr-container .fr-color-picker {\n  width: 100%;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  color: #666;\n}\n.fr-container .fr-color-picker .rc-color-picker-trigger {\n  margin-right: 12px;\n  height: 32px;\n  width: 60px;\n  border: 1px solid #e5e5e5;\n}\n.fr-container .fr-color-picker > p {\n  margin: 0;\n  font-size: 14px;\n  line-height: 28px;\n}\n.fr-container .fr-color-picker .rc-color-picker-wrap {\n  display: flex;\n}\n.fr-container .next-input,\n.fr-container .next-number-picker {\n  width: 100%;\n}\n.fr-container .upload-img {\n  max-width: 200px;\n  max-height: 200px;\n  margin-right: 24px;\n}\n.fr-container .fr-preview-image {\n  width: 160px;\n}\n.fr-container .fr-preview {\n  position: relative;\n  cursor: pointer;\n}\n.fr-container .fr-upload-mod,\n.fr-container .fr-upload-file {\n  display: flex;\n}\n.fr-container .fr-upload-mod {\n  align-items: center;\n}\n.fr-container .fr-upload-mod .fr-upload-preview {\n  margin: 0 12px;\n}\n.fr-container .fr-upload-file .ant-upload-list-item {\n  margin: 5px 0 0 8px;\n}\n.fr-container .fr-upload-file .ant-upload-list-item-name {\n  margin-right: 6px;\n}\n.fr-container .fr-upload-file .ant-upload-list-item-info {\n  cursor: pointer;\n}\n.fr-container .fr-upload-file .next-upload-list-text .next-upload-list-item-done,\n.fr-container .fr-upload-file .next-upload-list-text .next-upload-list-item .next-icon {\n  height: 28px;\n  line-height: 28px;\n  margin-left: 12px;\n}\n.fr-container .fr-upload-file .next-upload-list-item-name-wrap {\n  margin-top: -4px;\n}\n.fr-container .fr-sort-help-class {\n  background: #fff;\n}\n.fr-container .fold-icon.fold-icon-active {\n  transform: rotate(0deg);\n}\n.fr-container .fold-icon {\n  transform: rotate(-90deg);\n  transition: transform 0.24s;\n  cursor: pointer;\n  position: relative;\n}\n.fr-container .fold-icon::after {\n  content: '';\n  position: absolute;\n  top: -20px;\n  right: -10px;\n  bottom: -5px;\n  left: -20px;\n}\n.fr-container .fr-tooltip-toggle {\n  cursor: pointer;\n  position: relative;\n}\n.fr-container .fr-tooltip-toggle:hover .fr-tooltip-container {\n  opacity: 1;\n  visibility: visible;\n}\n.fr-container .fr-tooltip-icon {\n  height: 14px;\n  width: 14px;\n  background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAEnUlEQVR42u1bS0iUURT+zd4Y9KDosSihNhYUaBE9YKpFDKKOOmOLahtJ2SoxA2fUdUoQJK5qU0ib6LlxUYJpkY0LE3tQZkU7y7A0e1jnA4Of8pz//5373/+BF44Oc+/c853v3nOf5xpup0QiMZ9kD8mxeDzeTHKXPveSvKXP3+j/GP1/h++QhzIoW1ZWthu/NYKYysvLN5EhKZJ7ZMQEye8ZyjjJfZIk6vS10YWFhcvI4FoC2wfwLkkf6aiBLt8YHovFNhCoFnRlgNQkY9BJbrLeS9uzqFueYAzXJV9ITgKLVsvBPCnuAAifSIe23kBd7zApHHUI8D3JBfptFUlialbYSJIDweep7+Iog7L4jUMdn4HNzeksmxRcdgColyRZWlq6NQOd21AH6rKrFxiBVanxxcXFS6jSdpsAHtLYUODC1FqAum0S0Q7Mqlp+ESlO2zD8DUmJBhcsgS4bJDwBdhUKb1ko+kll6qLR6AJDU4IuuAZ0W2C7kWnrJy1a/QONvjsNjxLp32VjsEzO1OcOkoJJoeJuGuBWGB4nYCCcD4RGmiSJOm35PIup7kokEplr+CQBCzAJeEeJqC22V3jE2IBQWVd+fv48w2cJmAhbp4C7H7bZaf1KoZJBbET8vCEDRgF/pdXGZim1/ifGl344WtTIJJ//B+ggts+K6t4BrAwBH2GjNKo2CuxVqzJeGLDqFemoFnQ0sq0vDHyP4D+KwI1ILqZqpyqsGmFjznStX8tNIzQlbjYUJasVnCo9wAzsjE1npyPgFQPqJvKDRYC8ioWt/200BFD7FRMwIu0nFBNwgNMFm80Fz0mAFIOqVz4IyoS/ZvQ1mQv1MYBqkO8GCSDXTDRjvAoCznAHrH/X0qu4FqE99Voj2AkErOPsg+3w/wqmwDMjHAkkPGdsPITMBqb7t4SFANjCjTkgoI0ZJY+Hwnp5f9MGdtIMOxF35n1ZXDrG38fYmDa48zWcs4eFANxesUtv+jPMZC4PCwE4NWL0DRvcehkHjyEhACdGCxl9vwBwggEyxw0wXhCAOANG34TsAi4k37kA/RliMnND1ANyGX1DGAMe89Og+uSjaRDSAwKucgeIYSEAcQzc8T4ISDGZrSFygVaml6dAQILJfBEiAl4yy/0KZK6WtsMBJwD+v0bcDk/tlp4yveB0cAmQj8hhs7lQE1NoIAQEPGdsazZ3k+3SoahOAvQfisoDBeR2QAmArjvcsbi2i5FMQ+Ay0Jvn6GIE10VWV2MBIiALmKWrMfFylJsRgkIAsAp1NojX47hCZn74HdfjficAAzp3PY6rf9g4GyBhw3/6Axoi0yW48IDtcQwBRVIUOHaQfguSAiYpvB42Od1Cxiz8s5tkpdfGAwOwSFhhy0xXUnV+DpSEbmCwwFiXKcPXbYTKpnSHykIndFsYf01JsDRJTxCDpUGU7nB5SKcfwuWLiooWK38wQXLJwcOFtIoHE/Bh5v6SE2DMdvNN4BE3nszQ93szfTJDclTbU7lAP5pSGIxY5eWzOdL/lXrkKW6Fp7M3XPTi4SR0zz6dnX087fOEq2k8hTc/nydJm57Pj3v5fP4PSqRR6oYkTaUAAAAASUVORK5CYII=');\n  background-size: cover;\n  display: block;\n  margin: 4px 0 0 4px;\n}\n.fr-container .fr-tooltip-container {\n  position: absolute;\n  width: 160px;\n  white-space: initial !important;\n  top: -4px;\n  left: 0;\n  bottom: unset;\n  transform: translateY(-100%);\n  text-align: left;\n  background: #2b222a;\n  padding: 4px;\n  margin-left: -69px;\n  border-radius: 4px;\n  color: #efefef;\n  font-size: 13px;\n  cursor: auto;\n  z-index: 99999;\n  transition: all 0.5s ease;\n  opacity: 0;\n  visibility: hidden;\n  word-wrap: break-word;\n}\n.fr-container .fr-tooltip-triangle {\n  position: absolute;\n  left: 50%;\n  border-left: 5px solid transparent;\n  border-right: 5px solid transparent;\n  border-top: 5px solid #2b222a;\n  transition: all 0.5s ease;\n  content: ' ';\n  font-size: 0;\n  line-height: 0;\n  margin-left: -5px;\n  width: 0;\n  bottom: -5px;\n}\n.fr-container .fr-tooltip-toggle::before,\n.fr-container .fr-tooltip-toggle::after {\n  color: #efefef;\n  font-size: 13px;\n  opacity: 0;\n  pointer-events: none;\n  text-align: center;\n}\n.fr-container .fr-tooltip-toggle:focus::before,\n.fr-container .fr-tooltip-toggle:focus::after,\n.fr-container .fr-tooltip-toggle:hover::before,\n.fr-container .fr-tooltip-toggle:hover::after {\n  opacity: 1;\n  transition: all 0.75s ease;\n}\n.fr-container .fr-slider {\n  display: flex;\n  width: 100%;\n  align-items: center;\n}\n.fr-container .fr-map {\n  display: flex;\n  flex-wrap: wrap;\n}\n.fr-container .fr-arrow-icon {\n  cursor: pointer;\n}\n.fr-container .fr-row-error {\n  background-color: rgba(255, 77, 79, 0.2);\n}\n";
styleInject(css_248z$3);

var typeTemplate = '${title}的类型不是${type}';
var defaultValidateMessagesCN = {
  default: '${title}未通过校验',
  required: '${title}必填',
  whitespace: '${title}不能为空',
  date: {
    format: '${title}的格式错误',
    parse: '${title}无法被解析',
    invalid: '${title}数据不合法'
  },
  types: {
    string: typeTemplate,
    method: typeTemplate,
    array: typeTemplate,
    object: typeTemplate,
    number: typeTemplate,
    date: typeTemplate,
    boolean: typeTemplate,
    integer: typeTemplate,
    float: typeTemplate,
    regexp: typeTemplate,
    email: typeTemplate,
    url: typeTemplate,
    hex: typeTemplate
  },
  string: {
    len: '${title}长度不是${len}',
    min: '${title}长度不能小于${min}',
    max: '${title}长度不能大于${max}',
    range: '${title}长度需在${min}于${max}之间'
  },
  number: {
    len: '${title}不等于${len}',
    min: '${title}不能小于${min}',
    max: '${title}不能大于${max}',
    range: '${title}需在${min}与${max}之间'
  },
  array: {
    len: '${title}长度不是${len}',
    min: '${title}长度不能小于${min}',
    max: '${title}长度不能大于${max}',
    range: '${title}长度需在${min}于${max}之间'
  },
  pattern: {
    mismatch: '${title}未通过正则判断${pattern}'
  }
};

var typeTemplate$1 = '${title} is not a valid ${type}';
var defaultValidateMessages = {
  default: 'Validation error on field ${title}',
  required: '${title} is required',
  // enum: '${title} must be one of [${enum}]',
  whitespace: '${title} cannot be empty',
  date: {
    format: '${title} is invalid for format date',
    parse: '${title} could not be parsed as date',
    invalid: '${title} is invalid date'
  },
  types: {
    string: typeTemplate$1,
    method: typeTemplate$1,
    array: typeTemplate$1,
    object: typeTemplate$1,
    number: typeTemplate$1,
    date: typeTemplate$1,
    boolean: typeTemplate$1,
    integer: typeTemplate$1,
    float: typeTemplate$1,
    regexp: typeTemplate$1,
    email: typeTemplate$1,
    url: typeTemplate$1,
    hex: typeTemplate$1
  },
  string: {
    len: '${title} must be exactly ${len} characters',
    min: '${title} must be at least ${min} characters',
    max: '${title} cannot be longer than ${max} characters',
    range: '${title} must be between ${min} and ${max} characters'
  },
  number: {
    len: '${title} must equal ${len}',
    min: '${title} cannot be less than ${min}',
    max: '${title} cannot be greater than ${max}',
    range: '${title} must be between ${min} and ${max}'
  },
  array: {
    len: '${title} must be exactly ${len} in length',
    min: '${title} cannot be less than ${min} in length',
    max: '${title} cannot be greater than ${max} in length',
    range: '${title} must be between ${min} and ${max} in length'
  },
  pattern: {
    mismatch: '${title} does not match pattern ${pattern}'
  }
};

var validateAll = function validateAll(_ref) {
  var formData = _ref.formData,
      _ref$schema = _ref.schema,
      schema = _ref$schema === void 0 ? {} : _ref$schema,
      _ref$isRequired = _ref.isRequired,
      isRequired = _ref$isRequired === void 0 ? true : _ref$isRequired,
      _ref$touchedKeys = _ref.touchedKeys,
      touchedKeys = _ref$touchedKeys === void 0 ? [] : _ref$touchedKeys,
      _ref$locale = _ref.locale,
      locale = _ref$locale === void 0 ? 'cn' : _ref$locale,
      _ref$validateMessages = _ref.validateMessages,
      validateMessages = _ref$validateMessages === void 0 ? {} : _ref$validateMessages;
  if (Object.keys(schema).length === 0) return Promise.resolve();
  var descriptor = getDescriptorFromSchema({
    schema: schema,
    isRequired: isRequired
  }).fields; // console.log(descriptor, '&&&& descriptor', formData);

  var touchVerifyList = []; // 如果是最后的校验，所有key都touch了，就不用算这个了
  // 因为要整个构建validator在list的情况太复杂了，所以required单独拿出来处理，但是这边有不少单独处理逻辑，例如message

  if (!isRequired) {
    touchedKeys.forEach(function (key) {
      var keyRequired = isPathRequired(key, schema);
      var val = get(formData, key);

      if (!val && keyRequired.required) {
        var _message = keyRequired.message || validateMessages.required || '${title}必填';

        touchVerifyList.push({
          name: key,
          error: [_message]
        });
      }
    });
  }

  var cn = defaultValidateMessagesCN;
  var en = defaultValidateMessages; // TODO: 有些情况会出现没有rules，需要看一下，先兜底

  var validator;

  try {
    validator = new Validator(descriptor);
  } catch (error) {
    return Promise.resolve([]);
  }

  var messageFeed = locale === 'en' ? en : cn;
  merge(messageFeed, validateMessages);
  validator.messages(messageFeed);
  return validator.validate(formData || {}).then(function (res) {
    if (touchVerifyList.length > 0) return touchVerifyList;
    return [];
  }).catch(function (_ref2) {
    var errors = _ref2.errors,
        fields = _ref2.fields;
    // error的name改成正常的path
    var normalizedErrors = getArray(errors).map(function (err) {
      var _path = formatPathFromValidator(err.field);

      return {
        name: _path,
        error: [err.message]
      };
    }); // 添加touched的required

    normalizedErrors = [].concat(_toConsumableArray(normalizedErrors), touchVerifyList); // 合并同名的error

    var _errorFields = [];
    normalizedErrors.forEach(function (item) {
      var matchIndex = _errorFields.findIndex(function (ele) {
        return ele.name === item.name;
      });

      if (matchIndex === -1) {
        _errorFields.push(item);
      } else {
        _errorFields[matchIndex].error = [].concat(_toConsumableArray(_errorFields[matchIndex].error), _toConsumableArray(item.error));
      }
    });
    return _errorFields;
  });
}; // useEffect(() => {

var processData = function processData(data, flatten) {
  // 1. bind 的处理
  var _data = transformDataWithBind(data, flatten); // 2. 去掉list里面所有的空值


  _data = removeEmptyItemFromList(_data); // 3. 去掉hidden的元素

  _data = removeHiddenFromResult(_data, flatten); // 3. 去掉所有的 undefined

  _data = cleanEmpty(_data);
  console.log(_data, 'asdgghrth');
  return _data;
};
var transformDataWithBind = function transformDataWithBind(data, flatten) {
  var _data = clone(data);

  var unbindKeys = [];
  var bindKeys = [];
  var bindArrKeys = [];

  var isMultiBind = function isMultiBind(bind) {
    return Array.isArray(bind) && bind.every(function (item) {
      return typeof item === 'string';
    });
  };

  Object.keys(flatten).forEach(function (key) {
    var bind = flatten[key] && flatten[key].schema && flatten[key].schema.bind;

    var _key = key.replace('[]', '');

    if (bind === false) {
      unbindKeys.push(_key);
    } else if (typeof bind === 'string') {
      bindKeys.push({
        key: _key,
        bind: bind
      });
    } else if (isMultiBind(bind)) {
      bindArrKeys.push({
        key: _key,
        bind: bind
      });
    }
  });

  var handleBindData = function handleBindData(formData) {
    unbindKeys.forEach(function (key) {
      unset(formData, key); // TODO: 光remove了一个key，如果遇到remove了那个key上层的object为空了，object是不是也要去掉。。。不过感觉是伪需求
    });
    bindKeys.forEach(function (item) {
      var key = item.key,
          bind = item.bind;
      var temp = get(formData, key); // 如果已经有值了，要和原来的值合并，而不是覆盖

      var oldVal = get(formData, bind);

      if (isObject(oldVal)) {
        temp = _objectSpread2(_objectSpread2({}, oldVal), temp);
      }

      set(formData, bind, temp);
      unset(formData, key);
    });
    bindArrKeys.forEach(function (item) {
      var key = item.key,
          bind = item.bind;
      var temp = get(formData, key);

      if (Array.isArray(temp)) {
        temp.forEach(function (t, i) {
          if (bind[i]) {
            set(formData, bind[i], t);
          }
        });
      }

      unset(formData, key);
    });
  };

  handleBindData(_data);
  return _data;
}; // 反向，外部赋值formData，bind的字段要转换后赋值给formData
// 思路是一个个bind的字段反向转换 dataPath <=> bindPath

var transformDataWithBind2 = function transformDataWithBind2(data, flatten) {
  var _data = clone(data);

  var bindKeys = [];
  var bindArrKeys = [];

  var isMultiBind = function isMultiBind(bind) {
    return Array.isArray(bind) && bind.every(function (item) {
      return typeof item === 'string';
    });
  };

  Object.keys(flatten).forEach(function (key) {
    var bind = flatten[key] && flatten[key].schema && flatten[key].schema.bind;

    var _key = key.replace('[]', '');

    if (typeof bind === 'string') {
      bindKeys.push({
        key: _key,
        bind: bind
      });
    } else if (isMultiBind(bind)) {
      bindArrKeys.push({
        key: _key,
        bind: bind
      });
    }
  });

  var handleBindData2 = function handleBindData2(newData) {
    bindKeys.forEach(function (item) {
      var key = item.key,
          bind = item.bind;
      var temp = get(newData, bind); // 如果已经有值了，要和原来的值合并，而不是覆盖

      var oldVal = get(newData, key);

      if (isObject(oldVal)) {
        temp = _objectSpread2(_objectSpread2({}, oldVal), temp);
      }

      set(newData, key, temp);
      unset(newData, bind);
    });
    bindArrKeys.forEach(function (item) {
      var key = item.key,
          bind = item.bind;
      var temp = [];
      bind.forEach(function (b) {
        temp.push(get(newData, b));
        unset(newData, b);
      });
      set(newData, key, temp);
    });
  };

  handleBindData2(_data);
  return _data;
};

var useForm = function useForm(props) {
  var _ref = props || {},
      _formData = _ref.formData,
      _onChange = _ref.onChange,
      _onValidate = _ref.onValidate;

  var _useSet = useSet({
    formData: {},
    submitData: {},
    errorFields: [],
    isValidating: false,
    // 是否在提交状态
    outsideValidating: false,
    // 是否开始外部校验，没有外部校验回传的场景，一直是false
    isSubmitting: false,
    isEditing: false,
    // 是否在编辑状态。主要用于优化体验，用户编辑时减少不必要的运算
    allTouched: false,
    // 是否所有表单元素都被碰过了（一键开关，用于提交的时候，默认所有都被touch了）
    touchedKeys: [] // 碰过的key（用于submit之前，判断哪些被碰过了）

  }),
      _useSet2 = _slicedToArray(_useSet, 2),
      state = _useSet2[0],
      setState = _useSet2[1];

  var schemaRef = useRef({});
  var flattenRef = useRef({});
  var clickSubmit = useRef(false); // 点击submit的那一下，不要执行useEffect里的validate

  var beforeFinishRef = useRef();
  var localeRef = useRef('cn');
  var validateMessagesRef = useRef();

  var _data = useRef({}); // 用ref是为了破除闭包的影响


  var _touchedKeys = useRef([]); // 用ref是为了破除闭包的影响


  var innerData = state.formData,
      submitData = state.submitData,
      _state$errorFields = state.errorFields,
      errorFields = _state$errorFields === void 0 ? [] : _state$errorFields,
      isValidating = state.isValidating,
      outsideValidating = state.outsideValidating,
      isSubmitting = state.isSubmitting,
      isEditing = state.isEditing,
      allTouched = state.allTouched,
      touchedKeys = state.touchedKeys;
  var dataFromOutside = props && props.hasOwnProperty('formData');
  var formData = dataFromOutside ? _formData : innerData; // 生成一个基础结构，确保对象内的必填元素也被校验。
  // _data.current = merge(generateDataSkeleton(schemaRef.current), formData);

  _data.current = useMemo(function () {
    return merge(generateDataSkeleton(schemaRef.current), formData);
  }, [JSON.stringify(formData), JSON.stringify(schemaRef.current)]);
  _touchedKeys.current = touchedKeys; // 两个兼容 0.x 的函数

  var _setData = function _setData(data) {
    if (typeof _onChange === 'function') {
      _onChange(data);
    } else {
      setState({
        formData: data
      });
    }
  };

  var _setErrors = function _setErrors(errors) {
    if (typeof _onValidate === 'function') {
      var oldFormatErrors = errors.map(function (item) {
        return item.name;
      });

      _onValidate(oldFormatErrors);
    }

    setState({
      errorFields: errors
    });
  };

  var touchKey = function touchKey(key) {
    if (_touchedKeys.current.indexOf(key) > -1) {
      return;
    }

    var newKeyList = [].concat(_toConsumableArray(_touchedKeys.current), [key]);
    setState({
      touchedKeys: newKeyList
    });
  }; // 为了兼容 0.x


  useEffect(function () {
    // 如果是外部数据，submit没有收束，无校验
    if (dataFromOutside && typeof _onValidate === 'function') {
      setTimeout(function () {
        validateAll({
          formData: _data.current,
          schema: schemaRef.current,
          isRequired: true,
          touchedKeys: _touchedKeys.current,
          locale: localeRef.current,
          validateMessages: validateMessagesRef.current
        }).then(function (res) {
          var oldFormatErrors = res.map(function (item) {
            return item.name;
          });

          _onValidate(oldFormatErrors);
        });
      }, 200);
    }
  }, []); // 这里导致第二次的渲染

  useEffect(function () {
    validateAll({
      formData: _data.current,
      schema: schemaRef.current,
      isRequired: allTouched,
      touchedKeys: _touchedKeys.current,
      locale: localeRef.current,
      validateMessages: validateMessagesRef.current
    }).then(function (res) {
      _setErrors(res);
    });
  }, [JSON.stringify(_data.current), allTouched]);

  var setEditing = function setEditing(isEditing) {
    setState({
      isEditing: isEditing
    });
  };

  var onItemChange = function onItemChange(path, value) {
    if (typeof path !== 'string') return;

    if (path === '#') {
      _setData(_objectSpread2({}, value));

      return;
    }

    set(_data.current, path, value);

    _setData(_objectSpread2({}, _data.current));
  }; // TODO: 全局的没有path, 这个函数要这么写么。。全局的，可以path = #
  // errorFields: [
  //   { name: 'a.b.c', errors: ['Please input your Password!', 'something else is wrong'] },
  // ]


  var syncStuff = function syncStuff(_ref2) {
    var schema = _ref2.schema,
        flatten = _ref2.flatten,
        beforeFinish = _ref2.beforeFinish,
        locale = _ref2.locale,
        validateMessages = _ref2.validateMessages;
    schemaRef.current = schema;
    flattenRef.current = flatten;
    beforeFinishRef.current = beforeFinish;
    localeRef.current = locale;
    validateMessagesRef.current = validateMessages;
  }; // TODO: 外部校验的error要和本地的合并么？
  // TODO!: 这块要优化一下吧


  var setErrorFields = function setErrorFields(error) {
    var newErrorFields = [];

    if (Array.isArray(error)) {
      newErrorFields = [].concat(_toConsumableArray(error), _toConsumableArray(errorFields));
    } else if (error && error.name) {
      newErrorFields = [error].concat(_toConsumableArray(errorFields));
    } else {
      console.log('error format is wrong');
    }

    newErrorFields = sortedUniqBy(newErrorFields, function (item) {
      return item.name;
    });

    _setErrors(newErrorFields);
  }; // TODO: 提取出来，重新写一份，注意要处理async


  var removeErrorField = function removeErrorField(path) {
    var newError = errorFields.map(function (item) {
      return item.name.indexOf(path) === -1;
    });

    _setErrors(newError);
  };

  var getValues = function getValues() {
    return transformDataWithBind(_data.current, flattenRef.current);
  };

  var setValues = function setValues(newFormData) {
    var newData = transformDataWithBind2(newFormData, flattenRef.current);

    _setData(newData);
  };

  var submit = function submit() {
    setState({
      isValidating: true,
      allTouched: true,
      isSubmitting: false
    }); //  https://formik.org/docs/guides/form-submission
    // TODO: 更多的处理，注意处理的时候一定要是copy一份formData，否则submitData会和表单操作实时同步的。。而不是submit再变动了
    // 开始校验。如果校验写在每个renderField，也会有问题，比如table第一页以外的数据是不渲染的，所以都不会触发，而且校验还有异步问题

    validateAll({
      formData: _data.current,
      schema: schemaRef.current,
      touchedKeys: [],
      isRequired: true,
      locale: localeRef.current,
      validateMessages: validateMessagesRef.current
    }).then(function (errors) {
      // 如果有错误，也不停止校验和提交，在onFinish里让用户自己搞
      if (errors && errors.length > 0) {
        console.log('submit:', _data.current, errors);
        setState({
          errorFields: errors
        });
      }

      if (typeof beforeFinishRef.current === 'function') {
        Promise.resolve(processData(_data.current, flattenRef.current)).then(function (res) {
          setState({
            isValidating: true,
            isSubmitting: false,
            outsideValidating: true,
            submitData: res
          });
        });
        return;
      }

      Promise.resolve(processData(_data.current, flattenRef.current)).then(function (res) {
        setState({
          isValidating: false,
          isSubmitting: true,
          submitData: res
        });
      });
    }).catch(function (err) {
      // 不应该走到这边的
      console.log('submit error:', err);
    });
  };

  var resetFields = function resetFields() {
    setState({
      formData: {},
      submitData: {},
      errors: [],
      touchedKeys: [],
      allTouched: false
    });
  }; // const setValue = (id, value, dataIndex) => {
  //   let path = id;
  //   if (dataIndex && Array.isArray(dataIndex)) {
  //     path = getDataPath(id, dataIndex);
  //   }
  //   onItemChange(path, value);
  // };


  var endValidating = function endValidating() {
    return setState({
      isValidating: false,
      outsideValidating: false,
      isSubmitting: true
    });
  };

  var endSubmitting = function endSubmitting() {
    return setState({
      isSubmitting: false,
      isValidating: false,
      outsideValidating: false
    });
  };

  var form = {
    // state
    formData: _data.current,
    schema: schemaRef.current,
    touchedKeys: _touchedKeys.current,
    allTouched: allTouched,
    // methods
    touchKey: touchKey,
    onItemChange: onItemChange,
    // setValue, // 单个
    setValues: setValues,
    getValues: getValues,
    resetFields: resetFields,
    submit: submit,
    submitData: submitData,
    errorFields: errorFields,
    isValidating: isValidating,
    outsideValidating: outsideValidating,
    isSubmitting: isSubmitting,
    endValidating: endValidating,
    endSubmitting: endSubmitting,
    setErrorFields: setErrorFields,
    removeErrorField: removeErrorField,
    isEditing: isEditing,
    setEditing: setEditing,
    syncStuff: syncStuff
  };
  return form;
};

var connectForm = function connectForm(Component) {
  return function (props) {
    var form = useForm();
    return /*#__PURE__*/React.createElement(Component, _extends({}, props, {
      form: form
    }));
  };
};

var defaultFinish = function defaultFinish(data, error) {
  console.log(data, error);
};

function App(_ref) {
  var widgets$1 = _ref.widgets,
      mapping$1 = _ref.mapping,
      form = _ref.form,
      _ref$beforeFinish = _ref.beforeFinish,
      beforeFinish = _ref$beforeFinish === void 0 ? defaultFinish : _ref$beforeFinish,
      _ref$onFinish = _ref.onFinish,
      onFinish = _ref$onFinish === void 0 ? defaultFinish : _ref$onFinish,
      _ref$displayType = _ref.displayType,
      displayType = _ref$displayType === void 0 ? 'column' : _ref$displayType,
      schema = _ref.schema,
      _flatten = _ref.flatten,
      debug = _ref.debug,
      debugCss = _ref.debugCss,
      _ref$locale = _ref.locale,
      locale = _ref$locale === void 0 ? 'cn' : _ref$locale,
      _ref$debounceInput = _ref.debounceInput,
      debounceInput = _ref$debounceInput === void 0 ? false : _ref$debounceInput,
      size = _ref.size,
      configProvider = _ref.configProvider,
      theme = _ref.theme,
      validateMessages = _ref.validateMessages,
      _ref$watch = _ref.watch,
      watch = _ref$watch === void 0 ? {} : _ref$watch,
      config = _ref.config,
      rest = _objectWithoutProperties(_ref, ["widgets", "mapping", "form", "beforeFinish", "onFinish", "displayType", "schema", "flatten", "debug", "debugCss", "locale", "debounceInput", "size", "configProvider", "theme", "validateMessages", "watch", "config"]);

  try {
    var _ = form.submit;
  } catch (error) {
    console.error('form 为必填 props，<FormRender /> 没有接收到 form 属性!');
  }

  var submitData = form.submitData,
      errorFields = form.errorFields,
      isValidating = form.isValidating,
      outsideValidating = form.outsideValidating,
      isSubmitting = form.isSubmitting,
      endValidating = form.endValidating,
      endSubmitting = form.endSubmitting,
      syncStuff = form.syncStuff,
      formData = form.formData,
      isEditing = form.isEditing,
      setErrorFields = form.setErrorFields;
  var flatten = useMemo(function () {
    return _flatten || flattenSchema(schema);
  }, [JSON.stringify(_flatten), JSON.stringify(schema)]);
  useEffect(function () {
    syncStuff({
      schema: schema,
      flatten: flatten,
      beforeFinish: beforeFinish,
      locale: locale,
      validateMessages: validateMessages
    });
  }, [JSON.stringify(_flatten), JSON.stringify(schema)]); // 组件destroy的时候，destroy form，因为useForm可能在上层，所以不一定会跟着destroy

  useEffect(function () {
    return function () {
      form.resetFields();
    };
  }, []);
  var store = useMemo(function () {
    return _objectSpread2(_objectSpread2({
      flatten: flatten
    }, form), {}, {
      displayType: displayType,
      theme: theme,
      debounceInput: debounceInput,
      debug: debug,
      isEditing: isEditing
    }, rest);
  }, [JSON.stringify(flatten), JSON.stringify(formData), JSON.stringify(errorFields)]);
  var tools = useMemo(function () {
    return {
      widgets: _objectSpread2(_objectSpread2({}, widgets), widgets$1),
      mapping: _objectSpread2(_objectSpread2({}, mapping), mapping$1)
    };
  }, []);
  useEffect(function () {
    // 需要外部校验的情况，此时 submitting 还是 false
    if (outsideValidating === true) {
      Promise.resolve(beforeFinish(_objectSpread2({
        data: submitData,
        schema: schema,
        errors: errorFields
      }, config))).then(function (error) {
        if (error) {
          setErrorFields(error);
        }

        endValidating();
      });
      return;
    } // 如果validation结束，submitting开始


    if (isValidating === false && isSubmitting === true) {
      endSubmitting();
      onFinish(submitData, errorFields);
    }
  }, [isValidating, isSubmitting, outsideValidating]);
  var sizeCls = '';

  if (size === 'small') {
    sizeCls = 'fr-form-small';
  } else if (size === 'large') {
    sizeCls = 'fr-form-large';
  }

  var watchList = Object.keys(watch); // TODO: Ctx 这层暂时不用，所有都放在StoreCtx，之后性能优化在把一些常量的东西提取出来

  return /*#__PURE__*/React.createElement(_ConfigProvider, _extends({
    locale: zhCN
  }, configProvider), /*#__PURE__*/React.createElement(StoreCtx.Provider, {
    value: store
  }, /*#__PURE__*/React.createElement(Ctx.Provider, {
    value: tools
  }, /*#__PURE__*/React.createElement("div", {
    className: "fr-container ".concat(sizeCls)
  }, debug ? /*#__PURE__*/React.createElement("div", {
    className: "mv2 bg-black-05 pa2 br2"
  }, /*#__PURE__*/React.createElement("div", null, 'formData:' + JSON.stringify(form.formData)), /*#__PURE__*/React.createElement("div", null, 'errorFields:' + JSON.stringify(form.errorFields)), /*#__PURE__*/React.createElement("div", null, 'touchedKeys:' + JSON.stringify(form.touchedKeys)), /*#__PURE__*/React.createElement("div", null, 'allTouched:' + JSON.stringify(form.allTouched)), /*#__PURE__*/React.createElement("div", null, 'isEditting:' + JSON.stringify(form.isEditing)), /*#__PURE__*/React.createElement("div", null, 'isValidating:' + JSON.stringify(form.isValidating)), /*#__PURE__*/React.createElement("div", null, 'isSubmitting:' + JSON.stringify(form.isSubmitting))) : null, watchList.length > 0 ? watchList.map(function (item, idx) {
    return /*#__PURE__*/React.createElement(Watcher, {
      key: idx.toString(),
      watchKey: item,
      watch: watch,
      formData: formData
    });
  }) : null, /*#__PURE__*/React.createElement(Core, {
    debugCss: debugCss
  })))));
}

var Wrapper = function Wrapper(props) {
  var _props$isOldVersion = props.isOldVersion,
      isOldVersion = _props$isOldVersion === void 0 ? true : _props$isOldVersion,
      schema = props.schema,
      rest = _objectWithoutProperties(props, ["isOldVersion", "schema"]);

  var _schema = schema; // let _schema = completeSchemaWithTheme(schema, theme);

  if (isOldVersion) {
    _schema = updateSchemaToNewVersion(schema);
  }

  return /*#__PURE__*/React.createElement(App, _extends({
    schema: _schema
  }, rest));
};

var Watcher = function Watcher(_ref2) {
  var watchKey = _ref2.watchKey,
      watch = _ref2.watch,
      formData = _ref2.formData;
  var value = getValueByPath(formData, watchKey);
  var watchObj = watch[watchKey];
  var firstMount = useRef(true);
  useEffect(function () {
    var runWatcher = function runWatcher() {
      if (typeof watchObj === 'function') {
        watchObj(value);
      } else if (watchObj && typeof watchObj.handler === 'function') {
        watchObj.handler(value);
      }
    };

    if (firstMount.current) {
      var immediate = watchObj && watchObj.immediate;

      if (immediate) {
        runWatcher();
      }

      firstMount.current = false;
    } else {
      runWatcher();
    }
  }, [JSON.stringify(value)]);
  return null;
};

export default Wrapper;
export { connectForm, createWidget, mapping, useForm, widgets };
