import _ from 'lodash'
import flow from 'lodash/flow'
import qs from 'qs'
import Url from 'url-parse'

class UrlUtils {
	public static buildUrl(
		path: string,
		queryObject: Record<string, any>,
		options?: Record<string, any>,
	) {
		const q = qs.stringify(queryObject, options)
		if (q.length > 0) {
			path += `?${q}`
		}

		return path
	}

	public static getChangeLangUrlByLocation(url: string, locale: string) {
		const URL = new Url(url)
		return UrlUtils.getChangeLangUrl(URL.pathname, URL.query, locale)
	}

	public static getChangeLangUrl(path: string, query: object, locale: string) {
		let cleanPath = this.stripLeadingAndTrailingSlash(path)
		cleanPath = cleanPath.replace(/^(\ben\b|\bth\b)/g, '')

		let url = this.combineUrls(`/${locale}`, cleanPath)

		if (query && !_.isEmpty(query)) {
			url += `?${qs.stringify({ ...query })}`
		}

		return `/${this.stripLeadingAndTrailingSlash(url)}`
	}

	public static combineUrls(...urls: string[]) {
		return urls.map(UrlUtils.stripLeadingAndTrailingSlash).join('/')
	}

	public static getUrlWithoutTrailingSlash(url: string) {
		if (!url) {
			return url
		}

		const index = url.length - 1
		if (url[index] === '/') {
			return url.substring(0, index)
		}

		return url
	}

	public static getUrlWithoutLeadingSlash(url: string) {
		if (url[0] === '/') {
			return url.substring(1)
		}

		return url
	}

	public static stripLeadingAndTrailingSlash(url: string) {
		if (!url) {
			return ''
		}

		return flow(
			UrlUtils.getUrlWithoutLeadingSlash,
			UrlUtils.getUrlWithoutTrailingSlash,
		)(url)
	}

	public static getImageUrlBySize(url: string, size: number) {
		return `https://images.weserv.nl/?url=${url}&w=${size}`
	}
}
export default UrlUtils