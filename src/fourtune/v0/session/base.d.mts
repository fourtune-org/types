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

	// todo: make this sync
	getDependency : (
		dependency_name: string
	) => Promise<unknown>
}
