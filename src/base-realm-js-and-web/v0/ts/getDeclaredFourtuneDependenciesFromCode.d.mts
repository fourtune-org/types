export type TsGetDeclaredFourtuneDependenciesFromCode = (
	code: string
) => Promise<Map<string, {
	module_name: string,
	export_name: string
}>>
