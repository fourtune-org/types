import type {JsBundlerPlugin} from "../js/bundler.d.mts"

export type TsBundlerOptions = {
	minify? : boolean
	treeshake? : boolean
	additional_plugins? : JsBundlerPlugin[],
	aliases? : any,
	on_rollup_log_fn? : ((...args: any[]) => any) | null
}

export type TsBundler = (
	project_root : string,
	entry_code : string,
	options? : TsBundlerOptions
) => Promise<string>
