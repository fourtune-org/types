export type TsAliases = {
	[key : string] : string
}

export type TsResolveImportAliasesOptions = {
	filename? : string
	aliases? : TsAliases
}

export type TsResolveImportAliases = (
	code : string, options?: TsResolveImportAliasesOptions
) => Promise<string>
