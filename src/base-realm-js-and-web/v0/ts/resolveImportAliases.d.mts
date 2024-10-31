export type TsResolveImportAliasesOptions = {
	aliases? : any
}

export type TsResolveImportAliases = (
	code : string, options?: TsResolveImportAliasesOptions
) => Promise<string>
