export type IsExpandableName = (
	file_name: string
) => boolean

export type ExpandAsyncSyncVariantName = (
	name: string
) => [string, string]

export type ExpandAsyncSyncVariantFilePath = (
	file_path: string
) => [string, string]

export type ExportObject = {
	isExpandableName: IsExpandableName,
	expandAsyncSyncVariantName: ExpandAsyncSyncVariantName,
	expandAsyncSyncVariantFilePath: ExpandAsyncSyncVariantFilePath
}

export type DefaultExportObject = ExportObject
