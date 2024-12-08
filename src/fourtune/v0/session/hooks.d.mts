import type {FourtuneHookId} from "../hooks.d.mts"
import type {FourtuneSession} from "../session.d.mts"

export type FourtuneSessionHookFn = (
	fourtune_session: FourtuneSession,
	hook_id: FourtuneHookId
) => undefined

export type FourtuneSessionHooks = {
	register: (
		id: FourtuneHookId,
		fn: FourtuneSessionHookFn
	) => undefined
}
