export type IsExpandableName = (
	name: string
) => boolean

export type IsExpandableFilePath = (
	file_name: string
) => boolean

export type ExpandAsyncSyncVariantName = (
	name: string
) => [string, string]

export type ExpandAsyncSyncVariantFilePath = (
	file_path: string
) => [string, string]

export type ExpandAsyncSyncVariantSourceCode = (
	source_file: string,
	variant: "async" | "sync"
) => string

export type ExpandAsyncSyncVariantSourceCodeFromString = (
	code: string,
	variant: "async" | "sync",
	input_source_file_name?: string
) => string

export type ExportObject = {
	isExpandableName: IsExpandableName,
	isExpandableFilePath: IsExpandableFilePath,
	expandAsyncSyncVariantName: ExpandAsyncSyncVariantName,
	expandAsyncSyncVariantFilePath: ExpandAsyncSyncVariantFilePath,
	expandAsyncSyncVariantSourceCode: ExpandAsyncSyncVariantSourceCode,
	expandAsyncSyncVariantSourceCodeFromString: ExpandAsyncSyncVariantSourceCodeFromString
}

export type DefaultExportObject = ExportObject
