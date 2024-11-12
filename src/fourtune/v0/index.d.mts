import type {FourtuneSession} from "./session.d.mts"
import type {FourtuneHookId} from "./hooks.d.mts"
import type {FourtuneSessionHookFn as FourtuneHookFn} from "./session/hooks.d.mts"
import type {FourtuneConfig} from "./config.d.mts"
import type {FourtuneFileGenerator} from "./generator.d.mts"

export type FourtuneInputFile = {
	parents: string[]
	name: string
	relative_path: string
	source: string
	synthetic?: boolean
}

export type FourtuneRealmIntegration = {
	getIntegrationAPIVersion: () => Promise<number>,

	preInitialize?: (
		f: FourtuneSession,
		target_configuration: any,
		assets: FourtuneInputFile[],
		source_files: FourtuneInputFile[]
	) => Promise<undefined>,

	initialize: (
		f: FourtuneSession,
		target_configuration: any,
		assets: FourtuneInputFile[],
		source_files: FourtuneInputFile[]
	) => Promise<undefined>,

	initializeProject: (
		f: FourtuneSession,
		writeFile: any
	) => Promise<undefined>
}

export type {
	FourtuneAutogenerateGenerateFromTemplate,
	FourtuneAutogenerateGenerateAsyncSyncVariant,
	FourtuneAutogenerateGenerateAsyncSyncVariantFromString,
	FourtuneAutogenerate
} from "./session/autogenerate.d.mts"

export {
	FourtuneSession,
	FourtuneHookId,
	FourtuneHookFn,
	FourtuneConfig,
	FourtuneFileGenerator
}
