export type TsGenerateFunctionFactoryCodeSource = {
	source: string,
	output: {
		fn: string,
		factory: string
	}
}

export type TsGenerateFunctionFactoryCode = (
	source: TsGenerateFunctionFactoryCodeSource,
	code: string,
	expect_async_implementation: boolean|null
) => Promise<{
	factory: string,
	fn: string
}>
