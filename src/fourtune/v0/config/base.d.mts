import type {Realm} from "../../../core/v1/index.d.mts"
import type {FourtuneSession} from "../session.d.mts"

export type FourtuneConfigAutogenerator = (
	fourtune_session: FourtuneSession,
	file_path: string
) => Promise<string>

export type FourtuneConfigAutogenerate = {
	[file_path: string] : FourtuneConfigAutogenerator
}

export type FourtuneConfigBase = {
	realm: Realm,
	type: string,
	autogenerate?: FourtuneConfigAutogenerate
}
