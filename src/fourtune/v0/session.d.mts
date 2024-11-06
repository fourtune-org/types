import type {FourtuneSessionBase} from "./session/base.d.mts"
import type {FourtuneSessionHooks} from "./session/hooks.d.mts"
import type {FourtuneSessionInput} from "./session/input.d.mts"
import type {FourtuneSessionAutogenerate} from "./session/autogenerate.d.mts"
import type {FourtuneSessionObjects} from "./session/objects.d.mts"
import type {FourtuneSessionProducts} from "./session/products.d.mts"
import type {FourtuneSessionPaths} from "./session/paths.d.mts"

export type FourtuneSession = FourtuneSessionBase & {
	user_data: any,
	hooks: FourtuneSessionHooks,
	input: FourtuneSessionInput,
	autogenerate: FourtuneSessionAutogenerate,
	objects: FourtuneSessionObjects,
	products: FourtuneSessionProducts,
	paths: FourtuneSessionPaths
}
