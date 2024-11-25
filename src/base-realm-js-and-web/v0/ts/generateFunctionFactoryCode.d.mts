export type TsGenerateFunctionFactoryCode = (
	source_file: string,
	factory_name: string,
	function_name: string,
	code: string,
	expect_async_implementation: boolean|null
) => Promise<string>
