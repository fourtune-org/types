export type ResolveImportAliasesOptions = {
	filename? : string
	aliases? : any
}

export type JsResolveImportAliases = (
	code : string, options? : ResolveImportAliasesOptions
) => Promise<{code: string, ast : any}>
