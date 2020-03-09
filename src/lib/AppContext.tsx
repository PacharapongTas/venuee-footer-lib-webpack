import * as React from 'react'

export interface AppContextInterface {
	isLoaderOpen: boolean
	openLoader: () => void
	closeLoader: () => void
	alert: {
		isOpen: boolean
		color: string
		message: string
	}
	openAlert: (message: string, color?: string) => void
	closeAlert: () => void
	modal: {
		isOpen: boolean
		mode: string
	}
}

export default React.createContext<AppContextInterface | null>(null)
