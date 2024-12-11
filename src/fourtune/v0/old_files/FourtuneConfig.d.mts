import type {RealmName} from "../../core/v1/index.d.mts"
import type {FourtuneRealmJSOptions} from "./realm/FourtuneRealmJSOptions.d.mts" 
import type {FourtuneFileGenerator} from "./FourtuneFileGenerator.d.mts"

type ConfigBase = {
	realm: {
		name: RealmName
		type: string
		options?: unknown
	}

	autogenerate?: Record<string, FourtuneFileGenerator>
}

type Config<R extends RealmName, OptionsType> = {
	realm: {
		name: R
		options?: OptionsType
	}
}

export type FourtuneConfig = ConfigBase & (
	Config<"js", FourtuneRealmJSOptions>
)
