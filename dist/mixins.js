'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.overflowScroll = exports.zIndex = exports.clearFix = exports.expandOnMobile = exports.counter = exports.button = exports.textbox = exports.input = exports.ellipsisText = exports.wrapText = exports.fontStyle = exports.fontFamilies = exports.spaces = exports.textSmall3 = exports.textSmall2 = exports.textSmall1 = exports.textNormal = exports.textLarge1 = exports.textLarge2 = exports.textLarge3 = exports.textLarge4 = exports.textLarge5 = exports.lineHeight = exports.fontSizes = exports.fontWeight = exports.colors = exports.grid = exports.ratioImage = exports.media = exports.screen = undefined;

var _templateObject = _taggedTemplateLiteral(['\n\t\t@media (max-width: ', 'px) {\n\t\t\t', ';\n\t\t}\n\t'], ['\n\t\t@media (max-width: ', 'px) {\n\t\t\t', ';\n\t\t}\n\t']),
    _templateObject2 = _taggedTemplateLiteral(['\n\twidth: 100%;\n\tpadding-bottom: ', '%;\n\t', ';\n'], ['\n\twidth: 100%;\n\tpadding-bottom: ', '%;\n\t', ';\n']),
    _templateObject3 = _taggedTemplateLiteral(['\n\tfont-size: ', ';\n\tline-height: ', ';\n'], ['\n\tfont-size: ', ';\n\tline-height: ', ';\n']),
    _templateObject4 = _taggedTemplateLiteral(['\n\tfont-style: normal;\n\tfont-stretch: normal;\n\tletter-spacing: -0.1px;\n'], ['\n\tfont-style: normal;\n\tfont-stretch: normal;\n\tletter-spacing: -0.1px;\n']),
    _templateObject5 = _taggedTemplateLiteral(['\n\tword-break: break-all;\n\tword-break: break-word;\n'], ['\n\tword-break: break-all;\n\tword-break: break-word;\n']),
    _templateObject6 = _taggedTemplateLiteral(['\n\twhite-space: nowrap;\n\toverflow: hidden;\n\ttext-overflow: ellipsis;\n'], ['\n\twhite-space: nowrap;\n\toverflow: hidden;\n\ttext-overflow: ellipsis;\n']),
    _templateObject7 = _taggedTemplateLiteral(['\n\tbackground-color: ', ';\n\tborder: ', ' !important;\n\toutline: none;\n\tcolor: ', ';\n'], ['\n\tbackground-color: ', ';\n\tborder: ', ' !important;\n\toutline: none;\n\tcolor: ', ';\n']),
    _templateObject8 = _taggedTemplateLiteral(['\n\t', ' ', ' font-family: ', ';\n\tfont-size: ', ' !important;\n\tfont-weight: ', ' !important;\n\twidth: 100%;\n\tpadding: 6px 9px;\n\n\t&::placeholder {\n\t\tcolor: ', ';\n\t}\n'], ['\n\t', ' ', ' font-family: ', ';\n\tfont-size: ', ' !important;\n\tfont-weight: ', ' !important;\n\twidth: 100%;\n\tpadding: 6px 9px;\n\n\t&::placeholder {\n\t\tcolor: ', ';\n\t}\n']),
    _templateObject9 = _taggedTemplateLiteral(['\n\t', ' width: ', ';\n\tpadding: ', ';\n\tborder-radius: 4px;\n\tfont-family: ', ';\n\tfont-size: ', ';\n\tline-height: 20px !important;\n\ttext-align: center;\n\toutline: none;\n\tcursor: ', ';\n\tbackground-color: ', ';\n\tborder: solid 1px ', ';\n\tcolor: ', ';\n'], ['\n\t', ' width: ', ';\n\tpadding: ', ';\n\tborder-radius: 4px;\n\tfont-family: ', ';\n\tfont-size: ', ';\n\tline-height: 20px !important;\n\ttext-align: center;\n\toutline: none;\n\tcursor: ', ';\n\tbackground-color: ', ';\n\tborder: solid 1px ', ';\n\tcolor: ', ';\n']),
    _templateObject10 = _taggedTemplateLiteral(['\n\t', ' font-family: ', ';\n\tfont-size: ', ';\n\ttext-align: right;\n\tcolor: ', ';\n'], ['\n\t', ' font-family: ', ';\n\tfont-size: ', ';\n\ttext-align: right;\n\tcolor: ', ';\n']),
    _templateObject11 = _taggedTemplateLiteral(['\n\t', ';\n'], ['\n\t', ';\n']),
    _templateObject12 = _taggedTemplateLiteral(['\n\t\t', '\n\t'], ['\n\t\t', '\n\t']),
    _templateObject13 = _taggedTemplateLiteral(['\n\t&:after {\n\t\tcontent: \'\';\n\t\tclear: both;\n\t\tdisplay: block;\n\t}\n'], ['\n\t&:after {\n\t\tcontent: \'\';\n\t\tclear: both;\n\t\tdisplay: block;\n\t}\n']),
    _templateObject14 = _taggedTemplateLiteral(['\n\toverflow: scroll;\n\t-webkit-overflow-scrolling: touch;\n'], ['\n\toverflow: scroll;\n\t-webkit-overflow-scrolling: touch;\n']);

var _styledComponents = require('styled-components');

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var screen = exports.screen = {
	xs: 767,
	sm: 991,
	md: 1199
};

var media = exports.media = Object.keys(screen).reduce(function (media, size) {
	media[size] = function () {
		return (0, _styledComponents.css)(_templateObject, screen[size], _styledComponents.css.apply(undefined, arguments));
	};

	return media;
}, {});

var ratioImage = exports.ratioImage = function ratioImage(ratio) {
	var url = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
	return (0, _styledComponents.css)(_templateObject2, 100 / ratio, url && 'background-image: url(' + url + ')');
};

var grid = exports.grid = {
	gutterWidth: 16
};

var colors = exports.colors = {
	black: '#1d1d1d',
	white: '#ffffff',
	blueVenuee: '#1b75bb',
	blueVenuee2: '#7daed4',
	blueVenuee3: '#508CF0',
	blueVenuee4: '#EBF3FF',
	blue3: '#77A6CD',
	blueCTA: '#508CF0',
	blueBorder: '#92B5EF',
	greenVenuee: '#38b449',
	greenVenuee2: '#41D75A',
	greenVenuee3: '#3CBE4B',
	green3: '#EEF5EA',
	greenCTA: '#30D058',
	grayBlue1: '#5a6971',
	grayBlue2: '#8FA3AD',
	grayBlue3: '#b5c0c6',
	gray12: '#B0B0B0',
	gray11: '#757575',
	gray10: '#ededed',
	gray9: '#FAFAFA',
	gray8: '#DADDE4',
	gray7: '#f5f5f5',
	gray6: '#e5e5e5',
	gray5: '#cfcfcf',
	gray4: '#A0A0A0',
	gray3: '#919191',
	gray2: '#505050',
	gray1: '#101010',
	error: '#D24B4B',
	red1: '#D24B4B',
	red2: '#EC5D57',
	yellow: '#F0BB40',
	notification: '#FFFDEB',
	primary: '#505050',
	secondary: '#A0A0A0',
	border: '#e5e5e5',
	border2: '#B3B3B3',
	discount: '#EC5D57',
	greenLine: '#00B901',
	darkBlue: '#0A2463'
};

var fontWeight = exports.fontWeight = {
	bold3: 700,
	bold2: 600,
	bold1: 500,
	normal: 'normal',
	light1: 400,
	light2: 300,
	light3: 200,
	light4: 100
};

var fontSizes = exports.fontSizes = {
	large5: '40px',
	large4: '28px',
	large3: '24px',
	large2: '20px',
	large1: '16px',
	normal: '14px',
	small1: '12px',
	small2: '10px',
	small3: '8px'
};

var lineHeight = exports.lineHeight = {
	large5: '44px',
	large4: '40px',
	large3: '36px',
	large2: '32px',
	large1: '28px',
	normal: '24px',
	small1: '20px',
	small2: '16px',
	small3: '14px'
};

var textLarge5 = exports.textLarge5 = (0, _styledComponents.css)(_templateObject3, fontSizes.large5, lineHeight.large5);
var textLarge4 = exports.textLarge4 = (0, _styledComponents.css)(_templateObject3, fontSizes.large4, lineHeight.large4);
var textLarge3 = exports.textLarge3 = (0, _styledComponents.css)(_templateObject3, fontSizes.large3, lineHeight.large3);
var textLarge2 = exports.textLarge2 = (0, _styledComponents.css)(_templateObject3, fontSizes.large2, lineHeight.large2);
var textLarge1 = exports.textLarge1 = (0, _styledComponents.css)(_templateObject3, fontSizes.large1, lineHeight.large1);

var textNormal = exports.textNormal = (0, _styledComponents.css)(_templateObject3, fontSizes.normal, lineHeight.normal);

var textSmall1 = exports.textSmall1 = (0, _styledComponents.css)(_templateObject3, fontSizes.small1, lineHeight.small1);

var textSmall2 = exports.textSmall2 = (0, _styledComponents.css)(_templateObject3, fontSizes.small2, lineHeight.small2);

var textSmall3 = exports.textSmall3 = (0, _styledComponents.css)(_templateObject3, fontSizes.small3, lineHeight.small3);

var spaces = exports.spaces = {
	large5: grid.gutterWidth * 4 + 'px',
	large4: grid.gutterWidth * 3 + 'px',
	large3: grid.gutterWidth * 2 + 'px',
	large2: grid.gutterWidth * 1.5 + 'px',
	large1: grid.gutterWidth + 'px',
	normal: grid.gutterWidth / 2 + 'px',
	small1: grid.gutterWidth / 4 + 'px',
	small2: grid.gutterWidth / 8 + 'px',
	small3: '1px'
};

var fontFamilies = exports.fontFamilies = {
	default: 'Thonburi'
};

var fontStyle = exports.fontStyle = (0, _styledComponents.css)(_templateObject4);

var wrapText = exports.wrapText = (0, _styledComponents.css)(_templateObject5);

var ellipsisText = exports.ellipsisText = (0, _styledComponents.css)(_templateObject6);

var errorBorder = function errorBorder(_ref) {
	var validationMessage = _ref.validationMessage;
	return validationMessage ? 'solid 1px ' + colors.error : 'none';
};

var getTextboxFontSize = function getTextboxFontSize(_ref2) {
	var heading = _ref2.heading;
	return heading ? fontSizes.large2 : fontSizes.normal;
};

var getTextboxFontWeight = function getTextboxFontWeight(_ref3) {
	var heading = _ref3.heading;
	return heading ? 'bold' : 'normal';
};

var getButtonWidth = function getButtonWidth(props) {
	return function (props) {
		return props.responsive ? '100%' : 'auto';
	};
};

var getButtonPadding = function getButtonPadding(props) {
	return props.slim ? '4px 15px' : '9px 15px';
};

var getDisabledButtonColor = function getDisabledButtonColor(props) {
	return colors[props.disabledColor] || colors.gray3;
};

var getButtonTextColor = function getButtonTextColor(props) {
	if (props.disabled) return getDisabledButtonColor(props);

	return colors[props.color] || colors.gray6;
};

var getButtonBorderColor = function getButtonBorderColor(props) {
	if (props.disabled) return getDisabledButtonColor(props);

	return colors[props.color] || colors.gray4;
};

var input = exports.input = (0, _styledComponents.css)(_templateObject7, colors.gray1, errorBorder, colors.black);

var textbox = exports.textbox = (0, _styledComponents.css)(_templateObject8, input, fontStyle, fontFamilies.default, getTextboxFontSize, getTextboxFontWeight, colors.gray4);

var button = exports.button = (0, _styledComponents.css)(_templateObject9, fontStyle, getButtonWidth, getButtonPadding, fontFamilies.default, fontSizes.normal, function (props) {
	return props.disabled ? 'not-allowed' : 'pointer';
}, colors.white, getButtonBorderColor, getButtonTextColor);

var counter = exports.counter = (0, _styledComponents.css)(_templateObject10, fontStyle, fontFamilies.default, fontSizes.small2, colors.gray4);

var expandOnMobile = exports.expandOnMobile = (0, _styledComponents.css)(_templateObject11, media.sm(_templateObject12, function (props) {
	return props.expandOnMobile ? '\n\t\t\tmargin-left: -' + spaces.normal + ';\n\t\t\tmargin-right: -' + spaces.normal + ';\n\t\t\twidth: calc(100% + ' + spaces.large1 + ');\n\t\t' : null;
}));

var clearFix = exports.clearFix = (0, _styledComponents.css)(_templateObject13);

var zIndex = exports.zIndex = {
	overLayMessageChatNow: 16000161,
	overlay: 5,
	transparentOverlay: 4,
	headerFooter: 3,
	dropdown: 2,
	local: 1
};

var overflowScroll = exports.overflowScroll = (0, _styledComponents.css)(_templateObject14);

exports.default = {
	colors: colors,
	fontSizes: fontSizes,
	fontWeight: fontWeight,
	lineHeight: lineHeight,
	textLarge5: textLarge5,
	textLarge4: textLarge4,
	textLarge3: textLarge3,
	textLarge2: textLarge2,
	textLarge1: textLarge1,
	textNormal: textNormal,
	textSmall1: textSmall1,
	textSmall2: textSmall2,
	textSmall3: textSmall3,
	spaces: spaces,
	media: media,
	ellipsisText: ellipsisText,
	clearFix: clearFix,
	zIndex: zIndex,
	overflowScroll: overflowScroll
};