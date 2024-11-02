import type {JsParseAssetURLResult} from "./parseAssetURL.d.mts"

export type JsGetRequestedAssetsFromCode = (
	code : string
) => Promise<false|JsParseAssetURLResult[]>

