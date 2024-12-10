import type {FourtuneSessionHookFunction} from "../FourtuneSessionHookFunction.d.mts"
import type {FourtuneHookId} from "../FourtuneHookId.d.mts"

export type FourtuneSessionHooks = {
	register: (
		id: FourtuneHookId,
		fn: FourtuneSessionHookFunction
	) => undefined
}
