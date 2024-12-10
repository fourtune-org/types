import type {FourtuneSession} from "./FourtuneSession.d.mts"
import type {FourtuneHookId} from "./FourtuneHookId.d.mts"

export type FourtuneSessionHookFunction = (
	fourtune_session: FourtuneSession,
	hook_id: FourtuneHookId
) => Promise<undefined>
