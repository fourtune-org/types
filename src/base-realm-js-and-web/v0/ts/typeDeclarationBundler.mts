export type TsTypeDeclarationBundlerOptions = {
	externals?: string[]
	on_rollup_log_fn? : ((...args: any[]) => any) | null
}

export type TsTypeDeclarationBundler = (
	project_root : string,
	entry_code : string,
	options? : TsTypeDeclarationBundlerOptions
) => Promise<string>
