export type JsBundlerInputFileType = "mjs" | "dts"

export type JsBundlerPlugin = {
	when : "pre" | "post"
	plugin : any
}

export type JsBundlerOptions = {
	input_file_type? : JsBundlerInputFileType
	minify? : boolean
	treeshake? : boolean
	additional_plugins? : JsBundlerPlugin[]
	on_rollup_log_fn? : ((...args: any[]) => any) | null
	externals?: string[]
}

export type JsBundler = (
	project_root : string,
	entry_code : string,
	options? : JsBundlerOptions
) => Promise<string>
