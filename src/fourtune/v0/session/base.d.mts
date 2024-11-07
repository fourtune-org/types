import type {FourtuneConfig} from "../config.d.mts"

export type FourtuneSessionBase = {
	getProjectRoot : () => string
	getProjectConfig : () => FourtuneConfig

	emitWarning: (
		id: string,
		message: string,
		meta: {[key: string]: string}
	) => void

	emitError: (
		id: string,
		message: string,
		meta: {[key: string]: string}
	) => void

	getDependency : (
		dependency_name: string
	) => Promise<any>
}
