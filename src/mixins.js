import { css } from 'styled-components'

export const screen = {
	xs: 767,
	sm: 991,
	md: 1199,
}

export const media = Object.keys(screen).reduce((media, size) => {
	media[size] = (...args) => css`
		@media (max-width: ${screen[size]}px) {
			${css(...args)};
		}
	`

	return media
}, {})

export const ratioImage = (ratio, url = null) => css`
	width: 100%;
	padding-bottom: ${100 / ratio}%;
	${url && `background-image: url(${url})`};
`

export const grid = {
	gutterWidth: 16,
}

export const colors = {
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
	darkBlue: '#0A2463',
}

export const fontWeight = {
	bold3: 700,
	bold2: 600,
	bold1: 500,
	normal: 'normal',
	light1: 400,
	light2: 300,
	light3: 200,
	light4: 100,
}

export const fontSizes = {
	large5: '40px',
	large4: '28px',
	large3: '24px',
	large2: '20px',
	large1: '16px',
	normal: '14px',
	small1: '12px',
	small2: '10px',
	small3: '8px',
}

export const lineHeight = {
	large5: '44px',
	large4: '40px',
	large3: '36px',
	large2: '32px',
	large1: '28px',
	normal: '24px',
	small1: '20px',
	small2: '16px',
	small3: '14px',
}

export const textLarge5 = css`
	font-size: ${fontSizes.large5};
	line-height: ${lineHeight.large5};
`
export const textLarge4 = css`
	font-size: ${fontSizes.large4};
	line-height: ${lineHeight.large4};
`
export const textLarge3 = css`
	font-size: ${fontSizes.large3};
	line-height: ${lineHeight.large3};
`
export const textLarge2 = css`
	font-size: ${fontSizes.large2};
	line-height: ${lineHeight.large2};
`
export const textLarge1 = css`
	font-size: ${fontSizes.large1};
	line-height: ${lineHeight.large1};
`

export const textNormal = css`
	font-size: ${fontSizes.normal};
	line-height: ${lineHeight.normal};
`

export const textSmall1 = css`
	font-size: ${fontSizes.small1};
	line-height: ${lineHeight.small1};
`

export const textSmall2 = css`
	font-size: ${fontSizes.small2};
	line-height: ${lineHeight.small2};
`

export const textSmall3 = css`
	font-size: ${fontSizes.small3};
	line-height: ${lineHeight.small3};
`

export const spaces = {
	large5: `${grid.gutterWidth * 4}px`,
	large4: `${grid.gutterWidth * 3}px`,
	large3: `${grid.gutterWidth * 2}px`,
	large2: `${grid.gutterWidth * 1.5}px`,
	large1: `${grid.gutterWidth}px`,
	normal: `${grid.gutterWidth / 2}px`,
	small1: `${grid.gutterWidth / 4}px`,
	small2: `${grid.gutterWidth / 8}px`,
	small3: '1px',
}

export const fontFamilies = {
	default: 'Thonburi',
}

export const fontStyle = css`
	font-style: normal;
	font-stretch: normal;
	letter-spacing: -0.1px;
`

export const wrapText = css`
	word-break: break-all;
	word-break: break-word;
`

export const ellipsisText = css`
	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;
`

const errorBorder = ({ validationMessage }) =>
	validationMessage ? `solid 1px ${colors.error}` : 'none'

const getTextboxFontSize = ({ heading }) => (heading ? fontSizes.large2 : fontSizes.normal)

const getTextboxFontWeight = ({ heading }) => (heading ? 'bold' : 'normal')

const getButtonWidth = props => props => (props.responsive ? '100%' : 'auto')

const getButtonPadding = props => (props.slim ? '4px 15px' : '9px 15px')

const getDisabledButtonColor = props => colors[props.disabledColor] || colors.gray3

const getButtonTextColor = props => {
	if (props.disabled) return getDisabledButtonColor(props)

	return colors[props.color] || colors.gray6
}

const getButtonBorderColor = props => {
	if (props.disabled) return getDisabledButtonColor(props)

	return colors[props.color] || colors.gray4
}

export const input = css`
	background-color: ${colors.gray1};
	border: ${errorBorder} !important;
	outline: none;
	color: ${colors.black};
`

export const textbox = css`
	${input} ${fontStyle} font-family: ${fontFamilies.default};
	font-size: ${getTextboxFontSize} !important;
	font-weight: ${getTextboxFontWeight} !important;
	width: 100%;
	padding: 6px 9px;

	&::placeholder {
		color: ${colors.gray4};
	}
`

export const button = css`
	${fontStyle} width: ${getButtonWidth};
	padding: ${getButtonPadding};
	border-radius: 4px;
	font-family: ${fontFamilies.default};
	font-size: ${fontSizes.normal};
	line-height: 20px !important;
	text-align: center;
	outline: none;
	cursor: ${props => (props.disabled ? 'not-allowed' : 'pointer')};
	background-color: ${colors.white};
	border: solid 1px ${getButtonBorderColor};
	color: ${getButtonTextColor};
`

export const counter = css`
	${fontStyle} font-family: ${fontFamilies.default};
	font-size: ${fontSizes.small2};
	text-align: right;
	color: ${colors.gray4};
`

export const expandOnMobile = css`
	${media.sm`
		${props =>
			props.expandOnMobile
				? `
			margin-left: -${spaces.normal};
			margin-right: -${spaces.normal};
			width: calc(100% + ${spaces.large1});
		`
				: null}
	`};
`

export const clearFix = css`
	&:after {
		content: '';
		clear: both;
		display: block;
	}
`

export const zIndex = {
	overLayMessageChatNow: 16000161,
	overlay: 5,
	transparentOverlay: 4,
	headerFooter: 3,
	dropdown: 2,
	local: 1,
}

export const overflowScroll = css`
	overflow: scroll;
	-webkit-overflow-scrolling: touch;
`

export default {
	colors,
	fontSizes,
	fontWeight,
	lineHeight,
	textLarge5,
	textLarge4,
	textLarge3,
	textLarge2,
	textLarge1,
	textNormal,
	textSmall1,
	textSmall2,
	textSmall3,
	spaces,
	media,
	ellipsisText,
	clearFix,
	zIndex,
	overflowScroll,
}
