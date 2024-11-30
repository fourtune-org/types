import type {TsAliases} from "../index.d.mts"

export type TsGenerateFunctionFactoryCodeSource = {
	source: string,
	output: {
		fn: string,
		factory: string
	}
}

export type TsGenerateFunctionFactoryCode = (
	project_root: string,
	source: TsGenerateFunctionFactoryCodeSource,
	code: string,
	expect_async_implementation: boolean|null,
	aliases?: TsAliases
) => Promise<{
	factory: string,
	fn: string
}>
