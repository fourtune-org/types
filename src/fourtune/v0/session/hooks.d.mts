import type {FourtuneHookId} from "../hooks.d.mts"
import type {FourtuneSession} from "../session.d.mts"

export type FourtuneSessionHooks = {
	register: (
		id: FourtuneHookId,
		fn: (
			fourtune_session: FourtuneSession
		) => void
	) => void
}
