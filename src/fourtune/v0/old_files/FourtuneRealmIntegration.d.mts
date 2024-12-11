import type {FourtuneSession} from "./FourtuneSession.d.mts"
import type {FourtuneSessionInputFile} from "./FourtuneSessionInputFile.d.mts"

export type FourtuneRealmIntegration = {
	getIntegrationAPIVersion: () => Promise<number>

	preInitialize?: (
		fourtune_session: FourtuneSession,
		realm_options: unknown,
		asset_files: FourtuneSessionInputFile[],
		source_files: FourtuneSessionInputFile[]
	) => Promise<undefined>

	initialize: (
		fourtune_session: FourtuneSession,
		realm_options: unknown,
		asset_files: FourtuneSessionInputFile[],
		source_files: FourtuneSessionInputFile[]
	) => Promise<undefined>

	initializeProject: (
		fourtune_session: FourtuneSession,
		writeFile: any
	) => Promise<undefined>
}
