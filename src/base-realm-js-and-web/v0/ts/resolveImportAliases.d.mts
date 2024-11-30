import type {TsAliases} from "../index.d.mts"

export type TsResolveImportAliasesOptions = {
	filename? : string
	aliases? : TsAliases
}

export type TsResolveImportAliases = (
	code : string, options?: TsResolveImportAliasesOptions
) => Promise<string>
