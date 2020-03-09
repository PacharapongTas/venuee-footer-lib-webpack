import { SERVICE_TYPES, SERVICE_SLUG } from '../constants'

export const SERVICE_OPTIONS_TH = () => [
	{
		label: 'รับจัดเลี้ยงและอาหารเครื่องดื่ม',
		value: SERVICE_TYPES.CATERING_FOOD_BEVERAGE,
		slug: SERVICE_SLUG.CATERING_FOOD_BEVERAGE,
	},
	{
		label: 'จัดโชว์และการแสดง',
		value: SERVICE_TYPES.ENTERTAINMENT_PERFORMANCE,
		slug: SERVICE_SLUG.ENTERTAINMENT_PERFORMANCE,
	},
	{
		label: 'ช่างถ่ายภาพและวีดีโอ',
		value: SERVICE_TYPES.PHOTOGRAPH_VIDEO,
		slug: SERVICE_SLUG.PHOTOGRAPH_VIDEO,
	},
	{
		label: 'ดีเจและวงดนตรี',
		value: SERVICE_TYPES.DJ_BRAND,
		slug: SERVICE_SLUG.DJ_BRAND,
	},

	{
		label: 'โปรดักชั่น แสง สี เสียง',
		value: SERVICE_TYPES.PRODUCTION_LIGHT_SOUND,
		slug: SERVICE_SLUG.PRODUCTION_LIGHT_SOUND,
	},
	{
		label: 'งานตกแต่งและสิ่งประกอบฉาก',
		value: SERVICE_TYPES.DECORATION_PROP,
		slug: SERVICE_SLUG.DECORATION_PROP,
	},
	{
		label: 'ออแกไนซ์เซอร์และเวดดิ้งแพลนเนอร์',
		value: SERVICE_TYPES.WEDDING_PLANNERS,
		slug: SERVICE_SLUG.WEDDING_PLANNERS,
	},
	{
		label: 'เอ็มซี พีอาร์',
		value: SERVICE_TYPES.MC_PR,
		slug: SERVICE_SLUG.MC_PR,
	},

	{
		label: 'แต่งหน้าเจ้าสาวและความงาม',
		value: SERVICE_TYPES.BRIDAL_BEAUTY,
		slug: SERVICE_SLUG.BRIDAL_BEAUTY,
	},
	{
		label: 'ของชำร่วยและการ์ดแต่งงาน',
		value: SERVICE_TYPES.SOUVENIR_CARD,
		slug: SERVICE_SLUG.SOUVENIR_CARD,
	},
	{
		label: 'ชุดแต่งงานและชุดสูท',
		value: SERVICE_TYPES.WEDDING_DRESS_TAILORING,
		slug: SERVICE_SLUG.WEDDING_DRESS_TAILORING,
	},
	{
		label: 'แหวนแต่งงานและเครื่องประดับ',
		value: SERVICE_TYPES.WEDDING_RING_JEWELLERY,
		slug: SERVICE_SLUG.WEDDING_RING_JEWELLERY,
	},
]