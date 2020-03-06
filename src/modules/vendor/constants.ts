export enum VENUE_TYPE {
	HOTEL = 1,
	BAR_AND_RESTAURANT,
	CAFE,
	ROOFTOP,
	RIVER_VIEW,
	CONFERENCE_EXHIBITIOHN_HALL,
	DEPARTMENT_STORE,
	SEMINAR,
	MEETING_ROOM_OFFICE,
	CO_WORKING_SPACE,
	FLIMING_STUDIO,
	OUTDOOR_SPACE,
	UNUSUAL_SPACE,
	VENDOR,
}

export enum VENUE_CARTEGORY {
	SOUVENIR_CARD = 1,
	WEDDING_RING_JEWELLERY,
	PHOTOGRAPH_VIDEO,
	WEDDING_DRESS_TAILORING,
	BRIDAL_BEAUTY,
	WEDDING_PLANNERS,
	MC_PR,
	DECORATION_PROP,
	DJ_BRAND,
	ENTERTAINMENT_PERFORMANCE,
	PRODUCTION_LIGHT_SOUND,
	CATERING_FOOD_BEVERAGE,
}

enum SERVICE_TYPES {
	SOUVENIR_CARD = 1,
	WEDDING_RING_JEWELLERY,
	PHOTOGRAPH_VIDEO,
	WEDDING_DRESS_TAILORING,
	BRIDAL_BEAUTY,
	WEDDING_PLANNERS,
	MC_PR,
	DECORATION_PROP,
	DJ_BRAND,
	ENTERTAINMENT_PERFORMANCE,
	PRODUCTION_LIGHT_SOUND,
	CATERING_FOOD_BEVERAGE,
}

enum SERVICE_SLUG {
	SOUVENIR_CARD = 'gift-and-card',
	WEDDING_RING_JEWELLERY = 'wedding-jewelly',
	PHOTOGRAPH_VIDEO = 'photograph',
	WEDDING_DRESS_TAILORING = 'dress-attire',
	BRIDAL_BEAUTY = 'bridal-beauty',
	WEDDING_PLANNERS = 'organizer-and-planner',
	MC_PR = 'mc-pr',
	DECORATION_PROP = 'decoration',
	DJ_BRAND = 'dj-band',
	ENTERTAINMENT_PERFORMANCE = 'entertainment',
	PRODUCTION_LIGHT_SOUND = 'light-sound',
	CATERING_FOOD_BEVERAGE = 'catering',
}

interface IOption {
	label: string
	value: number
}

export interface IServiceOption extends IOption {
	slug: string
}

export const SERVICE_OPTIONS = () => [
	{
		label: 'supplier-types.catering-food-and-beverage',
		value: SERVICE_TYPES.CATERING_FOOD_BEVERAGE,
		slug: SERVICE_SLUG.CATERING_FOOD_BEVERAGE,
	},
	{
		label: 'supplier-types.entertainment-and-performance',
		value: SERVICE_TYPES.ENTERTAINMENT_PERFORMANCE,
		slug: SERVICE_SLUG.ENTERTAINMENT_PERFORMANCE,
	},
	{
		label: 'supplier-types.photograph-and-video',
		value: SERVICE_TYPES.PHOTOGRAPH_VIDEO,
		slug: SERVICE_SLUG.PHOTOGRAPH_VIDEO,
	},
	{
		label: 'supplier-types.dj-and-band',
		value: SERVICE_TYPES.DJ_BRAND,
		slug: SERVICE_SLUG.DJ_BRAND,
	},

	{
		label: 'supplier-types.production-light-and-sound',
		value: SERVICE_TYPES.PRODUCTION_LIGHT_SOUND,
		slug: SERVICE_SLUG.PRODUCTION_LIGHT_SOUND,
	},
	{
		label: 'supplier-types.decoration-and-prop',
		value: SERVICE_TYPES.DECORATION_PROP,
		slug: SERVICE_SLUG.DECORATION_PROP,
	},
	{
		label: 'supplier-types.organizer-and-planner',
		value: SERVICE_TYPES.WEDDING_PLANNERS,
		slug: SERVICE_SLUG.WEDDING_PLANNERS,
	},
	{
		label: 'supplier-types.mc-and-pr',
		value: SERVICE_TYPES.MC_PR,
		slug: SERVICE_SLUG.MC_PR,
	},

	{
		label: 'supplier-types.bridal-beauty',
		value: SERVICE_TYPES.BRIDAL_BEAUTY,
		slug: SERVICE_SLUG.BRIDAL_BEAUTY,
	},
	{
		label: 'supplier-types.souvenir',
		value: SERVICE_TYPES.SOUVENIR_CARD,
		slug: SERVICE_SLUG.SOUVENIR_CARD,
	},
	{
		label: 'supplier-types.wedding-dress-and-tailoring',
		value: SERVICE_TYPES.WEDDING_DRESS_TAILORING,
		slug: SERVICE_SLUG.WEDDING_DRESS_TAILORING,
	},
	{
		label: 'supplier-types.wedding-ring-and-jewellery',
		value: SERVICE_TYPES.WEDDING_RING_JEWELLERY,
		slug: SERVICE_SLUG.WEDDING_RING_JEWELLERY,
	},
]

export const getSupplierPathName = (slug: string) => `suppliers/categories/${slug}`
export const CARTEGORY_OPTIONS = (t: Function): Array<IOption> => [
	{
		label: t('service-types.catering-food-and-beverage'),
		value: VENUE_CARTEGORY.CATERING_FOOD_BEVERAGE,
	},
	{
		label: t('service-types.entertainment-and-performance'),
		value: VENUE_CARTEGORY.ENTERTAINMENT_PERFORMANCE,
	},
	{
		label: t('service-types.photograph-and-video'),
		value: VENUE_CARTEGORY.PHOTOGRAPH_VIDEO,
	},
	{
		label: t('service-types.dj-and-band'),
		value: VENUE_CARTEGORY.DJ_BRAND,
	},

	{
		label: t('service-types.production-light-and-sound'),
		value: VENUE_CARTEGORY.PRODUCTION_LIGHT_SOUND,
	},
	{
		label: t('service-types.decoration-and-prop'),
		value: VENUE_CARTEGORY.DECORATION_PROP,
	},
	{
		label: t('service-types.organizer-and-planner'),
		value: VENUE_CARTEGORY.WEDDING_PLANNERS,
	},
	{
		label: t('service-types.mc-and-pr'),
		value: VENUE_CARTEGORY.MC_PR,
	},

	{
		label: t('service-types.bridal-beauty'),
		value: VENUE_CARTEGORY.BRIDAL_BEAUTY,
	},
	{
		label: t('service-types.souvenir'),
		value: VENUE_CARTEGORY.SOUVENIR_CARD,
	},
	{
		label: t('service-types.wedding-dress-and-tailoring'),
		value: VENUE_CARTEGORY.WEDDING_DRESS_TAILORING,
	},
	{
		label: t('service-types.wedding-ring-and-jewellery'),
		value: VENUE_CARTEGORY.WEDDING_RING_JEWELLERY,
	},
]

export const VENUE_OPTIONS = (t: Function): Array<IOption> => [
	{
		label: t('venue-type.hotel'),
		value: VENUE_TYPE.HOTEL,
	},
	{
		label: t('venue-type.bar-and-restaurant'),
		value: VENUE_TYPE.BAR_AND_RESTAURANT,
	},
	{
		label: t('venue-type.cafe'),
		value: VENUE_TYPE.CAFE,
	},
	{
		label: t('venue-type.rooftop'),
		value: VENUE_TYPE.ROOFTOP,
	},
	{
		label: t('venue-type.river-view'),
		value: VENUE_TYPE.RIVER_VIEW,
	},
	{
		label: t('venue-type.conference-exhibition-hall'),
		value: VENUE_TYPE.CONFERENCE_EXHIBITIOHN_HALL,
	},
	{
		label: t('venue-type.department-store'),
		value: VENUE_TYPE.DEPARTMENT_STORE,
	},
	{
		label: t('venue-type.seminar'),
		value: VENUE_TYPE.SEMINAR,
	},
	{
		label: t('venue-type.meeting-room-office'),
		value: VENUE_TYPE.MEETING_ROOM_OFFICE,
	},
	{
		label: t('venue-type.co-working-space'),
		value: VENUE_TYPE.CO_WORKING_SPACE,
	},
	{
		label: t('venue-type.filming-studio'),
		value: VENUE_TYPE.FLIMING_STUDIO,
	},
	{
		label: t('venue-type.outdoor-space'),
		value: VENUE_TYPE.OUTDOOR_SPACE,
	},
	{
		label: t('venue-type.unusual-space'),
		value: VENUE_TYPE.UNUSUAL_SPACE,
	},
]

export enum VENUE_PACKAGE_PRICE_UNIT {
	OTHERS = 0,
	PIECE,
	TIME,
}

export const UNIT_PRICE_OPTIONS = [
	{ label: 'ชิ้น', value: VENUE_PACKAGE_PRICE_UNIT.PIECE },
	{ label: 'ครั้ง', value: VENUE_PACKAGE_PRICE_UNIT.TIME },
	{ label: 'อื่นๆ', value: VENUE_PACKAGE_PRICE_UNIT.OTHERS },
]

export enum CREATE_VENDOR_STEP {
	VENDOR = 1,
	PHOTO,
	SERVICE,
}
