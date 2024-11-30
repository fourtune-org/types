import type {TsAliases} from "../index.d.mts"

type Source = {
	source: string,
	output: {
		fn: string,
		factory: string
	}
}

export type {Source as TsGenerateFunctionFactoryCodeForRealmJSAndWebV0Source}

export type TsGenerateFunctionFactoryCodeForRealmJSAndWebV0 = (
	project_root: string,
	source: Source|([Source, Source]),
	code: string,
	expect_async_implementation: boolean|null,
	aliases?: TsAliases
) => Promise<{
	factory: string,
	fn: string
}>
