export type TsGetDeclaredAnioSoftwareDependenciesFromCode = (
	code: string
) => Promise<Map<string, {
	module_name: string,
	export_name: string
}>>
