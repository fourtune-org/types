import type {JsBundlerOptions} from "../js/bundler.d.mts"

export type TsAssetFileBundlerOptions = Omit<
	JsBundlerOptions,
	"input_file_type" | "treeshake"
>

export type TsAssetFileBundler = {
	project_root : string,
	entry_code : string,
	options? : TsAssetFileBundlerOptions
}
