import type {FourtuneConfig} from "../config.d.mts"

export type FourtuneSessionBase = {
	getProjectRoot : () => string
	getProjectConfig : () => FourtuneConfig

	emitWarning: (id: string, meta: any) => void
	emitError: (id: string, meta: any) => void

	getDependency : (
		dependency_name: string
	) => Promise<any>
}
