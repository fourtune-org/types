type Source = {
	source: string,
	output: {
		fn: string,
		factory: string
	}
}

export type {Source as TsGenerateFunctionFactoryCodeSource}

export type TsGenerateFunctionFactoryCode = (
	source: Source|([Source, Source]),
	code: string,
	expect_async_implementation: boolean|null
) => Promise<{
	factory: string,
	fn: string
}>
