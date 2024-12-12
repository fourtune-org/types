import type {AutogenerateGenerator} from "../../../fourtune/v0/session/autogenerate/index.d.mts"

export type GenerateFactoryFilesOptions = {
	source_file: string
	export_name: string
	destination: string
	only_factory_files?: boolean
}

export type GenerateFactoryFiles = (
	options: GenerateFactoryFilesOptions
) => {
	[key: string]: AutogenerateGenerator<"user">
}

export type ExportObject = {
	generateFactoryFiles: GenerateFactoryFiles
}

export type DefaultExportObject = ExportObject
