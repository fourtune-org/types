import type {FourtuneFileGenerator} from "../generator.d.mts"

export type FourtuneSessionAutogenerate = {
	generateFromTemplate: (
		source_file: string,
		items: {
			[search: string]: string
		}
	) => Promise<FourtuneFileGenerator>

	generateAsyncSyncVariant: (
		source_file: string,
		variant: "async" | "sync"
	) => Promise<FourtuneFileGenerator>

	generateAsyncSyncVariantFromString: (
		source: string,
		variant: "async" | "sync"
	) => Promise<FourtuneFileGenerator>

	addFile: (
		file_path: string,
		generator: FourtuneFileGenerator
	) => void
}
