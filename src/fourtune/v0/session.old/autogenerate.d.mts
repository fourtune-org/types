import type {FourtuneFileGenerator} from "../FourtuneFileGenerator.d.mts"

export type FourtuneSessionAutogenerate = {
	addFourtuneFile: (
		file_path: string,
		generator: FourtuneFileGenerator
	) => undefined

	addSyntheticFile: (
		category: string,
		file_path: string,
		generator: FourtuneFileGenerator
	) => undefined
}
