import type {FourtuneFileGenerator} from "../generator.d.mts"

export type FourtuneAutogenerateGenerateFromTemplate = (
	source_file: string,
	items: {
		[search: string]: string
	}
) => Promise<FourtuneFileGenerator>

export type FourtuneAutogenerateGenerateAsyncSyncVariant = (
	source_file: string,
	variant: "async" | "sync"
) => Promise<FourtuneFileGenerator>

export type FourtuneAutogenerateGenerateAsyncSyncVariantFromString = (
	source: string,
	variant: "async" | "sync"
) => Promise<FourtuneFileGenerator>

export type FourtuneSessionAutogenerate = {
	generateFromTemplate: FourtuneAutogenerateGenerateFromTemplate,
	generateAsyncSyncVariant: FourtuneAutogenerateGenerateAsyncSyncVariant,
	generateAsyncSyncVariantFromString: FourtuneAutogenerateGenerateAsyncSyncVariantFromString,

	addFile: (
		file_path: string,
		generator: FourtuneFileGenerator
	) => void
}
