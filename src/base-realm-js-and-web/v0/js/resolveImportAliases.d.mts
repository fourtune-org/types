export type JsAliases = {
	[key : string] : string
}

export type ResolveImportAliasesOptions = {
	filename? : string
	aliases? : JsAliases
}

export type JsResolveImportAliases = (
	code : string, options? : ResolveImportAliasesOptions
) => Promise<{code: string, ast : any}>
