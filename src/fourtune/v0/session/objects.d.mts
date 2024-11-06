import type {FourtuneFileGenerator} from "../generator.d.mts"

export type FourtuneSessionObjects = {
	addObject: (
		file_path: string,
		generator: FourtuneFileGenerator
	) => void
}
