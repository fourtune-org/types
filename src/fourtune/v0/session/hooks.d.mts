import type {FourtuneSession} from "../FourtuneSession.d.mts"
import type {FourtuneHookId} from "../FourtuneHookId.d.mts"

export type FourtuneSessionHooks = {
	register: (
		id: FourtuneHookId,
		fn: (
			fourtune_session: FourtuneSession,
			hook_id: FourtuneHookId
		) => Promise<undefined>
	) => undefined
}
