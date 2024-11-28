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

export type ExportObject = {
	isExpandableName: IsExpandableName,
	isExpandableFilePath: IsExpandableFilePath,
	expandAsyncSyncVariantName: ExpandAsyncSyncVariantName,
	expandAsyncSyncVariantFilePath: ExpandAsyncSyncVariantFilePath
}

export type DefaultExportObject = ExportObject
