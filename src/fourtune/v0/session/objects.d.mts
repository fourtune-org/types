import type {FourtuneFileGenerator} from "../FourtuneFileGenerator.d.mts"

export type FourtuneSessionObjects = {
	addObject: (
		file_path: string,
		generator: FourtuneFileGenerator
	) => undefined
}
