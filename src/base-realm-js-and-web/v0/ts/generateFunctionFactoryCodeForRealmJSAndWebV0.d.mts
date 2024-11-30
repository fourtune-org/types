import type {TsAliases} from "../index.d.mts"

export type TsGenerateFunctionFactoryCodeForRealmJSAndWebV0Source = {
	source: string,
	output: {
		fn: string,
		factory: string
	}
}

export type TsGenerateFunctionFactoryCodeForRealmJSAndWebV0 = (
	project_root: string,
	source: TsGenerateFunctionFactoryCodeForRealmJSAndWebV0Source,
	code: string,
	expect_async_implementation: boolean|null,
	aliases?: TsAliases
) => Promise<{
	factory: string,
	fn: string
}>
