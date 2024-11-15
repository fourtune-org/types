export type TsIsExportedFunctionAsync = (
	code: string, export_name: string
) => Promise<boolean>
