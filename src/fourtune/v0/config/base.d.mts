import type {Realm as RealmName} from "../../../core/v1/index.d.mts"
import type {FourtuneSession} from "../session.d.mts"

export type FourtuneConfigAutogenerator = (
	fourtune_session: FourtuneSession,
	file_path: string
) => Promise<string>

export type FourtuneConfigAutogenerate = {
	[file_path: string] : FourtuneConfigAutogenerator
}

export type RealmConfig = {
	realm: RealmName
	type: string
	options?: Record<string, any>
}

export type FourtuneConfigBase = {
	realm: RealmConfig,
	autogenerate?: FourtuneConfigAutogenerate
}
