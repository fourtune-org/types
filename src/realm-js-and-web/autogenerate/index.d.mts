import type {FourtuneFileGenerator} from "../../fourtune/v0/generator.d.mts"

export type GenerateAsyncSyncVariant = (
	source_file: string,
	variant: "async" | "sync"
) => FourtuneFileGenerator

export type GenerateAsyncSyncVariantFromString = (
	code: string,
	variant: "async" | "sync",
	input_source_file_name?: string
) => FourtuneFileGenerator

export type ExportObject = {
	generateAsyncSyncVariant: GenerateAsyncSyncVariant,
	generateAsyncSyncVariantFromString: GenerateAsyncSyncVariantFromString
}

export type DefaultExportObject = ExportObject
