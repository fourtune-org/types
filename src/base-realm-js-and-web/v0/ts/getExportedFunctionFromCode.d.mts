export type TsGetExportedFunctionFromCodeResult = null | {
	is_async: boolean
}

export type TsGetExportedFunctionFromCode = (
	code: string,
	function_name: string
) => Promise<TsGetExportedFunctionFromCodeResult>
