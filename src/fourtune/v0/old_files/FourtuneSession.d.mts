import type {FourtuneSessionHooks} from "./session/hooks.d.mts"
import type {FourtuneSessionInput} from "./session/input.d.mts"
import type {FourtuneSessionAutogenerate} from "./session/autogenerate.d.mts"
import type {FourtuneSessionObjects} from "./session/objects.d.mts"
import type {FourtuneSessionProducts} from "./session/products.d.mts"
import type {FourtuneSessionPaths} from "./session/paths.d.mts"

import type {FourtuneConfig} from "./FourtuneConfig.d.mts"

export type FourtuneSession = {
	user_data: unknown

	getProjectRoot: () => string
	getProjectConfig: () => FourtuneConfig
	getRealmOptions: () => unknown

	emitWarning: (id: string, meta?: Record<string, any>) => undefined
	emitError: (id: string, meta?: Record<string, any>) => undefined
	getDependency: (dependency_name: string) => unknown

	hooks: FourtuneSessionHooks
	input: FourtuneSessionInput
	autogenerate: FourtuneSessionAutogenerate
	objects: FourtuneSessionObjects
	products: FourtuneSessionProducts
	paths: FourtuneSessionPaths
}
