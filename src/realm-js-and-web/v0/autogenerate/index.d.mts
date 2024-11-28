import type {FourtuneFileGenerator} from "../../../fourtune/v0/generator.d.mts"

export type GenerateFactoryFilesOptions = {
	source_file: string
	export_name: string
	destination: string
}

export type GenerateFactoryFiles = (
	options: GenerateFactoryFilesOptions
) => {
	[key: string]: FourtuneFileGenerator
}

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
	generateFactoryFiles: GenerateFactoryFiles,
	generateAsyncSyncVariant: GenerateAsyncSyncVariant,
	generateAsyncSyncVariantFromString: GenerateAsyncSyncVariantFromString
}

export type DefaultExportObject = ExportObject
