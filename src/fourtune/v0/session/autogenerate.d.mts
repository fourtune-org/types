import type {FourtuneFileGenerator} from "../generator.d.mts"

export type FourtuneAutogenerateGenerateFromTemplate = (
	source_file: string,
	items: {
		[search: string]: string
	}
) => FourtuneFileGenerator

export type FourtuneAutogenerateGenerateAsyncSyncVariant = (
	source_file: string,
	variant: "async" | "sync"
) => FourtuneFileGenerator

export type FourtuneAutogenerateGenerateAsyncSyncVariantFromString = (
	source: string,
	variant: "async" | "sync"
) => FourtuneFileGenerator

export type FourtuneAutogenerate = {
	generateFromTemplate: FourtuneAutogenerateGenerateFromTemplate,
	generateAsyncSyncVariant: FourtuneAutogenerateGenerateAsyncSyncVariant,
	generateAsyncSyncVariantFromString: FourtuneAutogenerateGenerateAsyncSyncVariantFromString
}

export type FourtuneSessionAutogenerate = {
	generateFromTemplate: FourtuneAutogenerateGenerateFromTemplate,
	generateAsyncSyncVariant: FourtuneAutogenerateGenerateAsyncSyncVariant,
	generateAsyncSyncVariantFromString: FourtuneAutogenerateGenerateAsyncSyncVariantFromString,

	addFile: (
		file_path: string,
		generator: FourtuneFileGenerator
	) => void
}
