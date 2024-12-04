export type TsTypeDeclarationBundlerOptions = {
	externals?: string[]
}

export type TsTypeDeclarationBundler = (
	project_root : string,
	entry_code : string,
	options? : TsTypeDeclarationBundlerOptions
) => Promise<string>
