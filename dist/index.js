'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _templateObject = _taggedTemplateLiteral(['\n    color: ', ';\n'], ['\n    color: ', ';\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _mixins = require('./mixins');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var TestCSS = _styledComponents2.default.div(_templateObject, _mixins.colors.blue3);

var Mycomponent = function Mycomponent() {
    return _react2.default.createElement(
        TestCSS,
        null,
        _react2.default.createElement(
            'h1',
            null,
            ' This is YmtO !! '
        )
    );
};

exports.default = Mycomponent;