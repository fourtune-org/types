import type {FourtuneConfig} from "../config/index.d.mts"
import type {Hooks} from "./hooks/index.d.mts"
import type {Input} from "./input/index.d.mts"
import type {Autogenerate} from "./autogenerate/index.d.mts"
import type {Objects} from "./objects/index.d.mts"
import type {Products} from "./products/index.d.mts"
import type {Paths} from "./paths/index.d.mts"

export type FourtuneSession = {
	user_data: unknown

	getProjectRoot: () => string
	getProjectConfig: () => FourtuneConfig
	getRealmOptions: () => unknown

	emitWarning: (id: string, meta?: Record<string, any>) => undefined
	emitError: (id: string, meta?: Record<string, any>) => undefined
	getDependency: (dependency_name: string) => unknown

	hooks: Hooks
	input: Input
	autogenerate: Autogenerate
	objects: Objects
	products: Products
	paths: Paths
}
