export type TsResolveImportAliasesOptions = {
	filename? : string
	aliases? : any
}

export type TsResolveImportAliases = (
	code : string, options?: TsResolveImportAliasesOptions
) => Promise<string>
