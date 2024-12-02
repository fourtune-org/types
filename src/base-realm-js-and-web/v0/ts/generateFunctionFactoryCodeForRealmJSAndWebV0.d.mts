import type {TsAliases} from "../index.d.mts"

type Source = {
	source: string,
	output: {
		fn: string,
		factory: string
	}
}

// remove this as it also depends on "aliases"
// this package is meant to provide APIs
// to typescript , rollup and babel
// not do realm specific things

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
