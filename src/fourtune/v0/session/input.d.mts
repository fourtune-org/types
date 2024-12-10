import type {FourtuneSessionInputFile} from "../FourtuneSessionInputFile.d.mts"

export type FourtuneSessionInput = {
	getSourceFiles: () => FourtuneSessionInputFile[]
	getAssetFiles: () => FourtuneSessionInputFile[]
}
