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

export type ExpandAsyncSyncVariantSourceFile = (
	source_file: string,
	variant: "async" | "sync"
) => string

export type ExpandAsyncSyncVariantSourceCode = (
	code: string,
	variant: "async" | "sync",
	input_source_file_name?: string
) => string

export type ExportObject = {
	isExpandableName: IsExpandableName,
	isExpandableFilePath: IsExpandableFilePath,
	expandAsyncSyncVariantName: ExpandAsyncSyncVariantName,
	expandAsyncSyncVariantFilePath: ExpandAsyncSyncVariantFilePath,
	expandAsyncSyncVariantSourceFile: ExpandAsyncSyncVariantSourceFile,
	expandAsyncSyncVariantSourceCode: ExpandAsyncSyncVariantSourceCode
}

export type DefaultExportObject = ExportObject
