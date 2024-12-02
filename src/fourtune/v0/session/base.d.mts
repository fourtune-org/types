import type {FourtuneConfig} from "../config.d.mts"

export type FourtuneSessionBase = {
	getProjectRoot : () => string
	getProjectConfig : () => FourtuneConfig

	emitWarning: (
		id: string,
		message: string,
		meta: {[key: string]: string}
	) => undefined

	emitError: (
		id: string,
		message: string,
		meta: {[key: string]: string}
	) => undefined

	getDependency : (
		dependency_name: string
	) => Promise<any>
}
