import type {FourtuneFileGenerator} from "../generator.d.mts"

export type FourtuneSessionAutogenerate = {
	generateFromTemplate: (
		source_file: string,
		items: {
			[search: string]: string
		}
	) => Promise<string>

	generateAsyncSyncVariant: (
		source_file: string,
		variant: "async" | "sync"
	) => Promise<string>

	generateAsyncSyncVariantFromString: (
		source: string,
		variant: "async" | "sync"
	) => Promise<string>

	addFile: (
		file_path: string,
		generator: FourtuneFileGenerator
	) => void
}
