import type {JsParseAssetURLResult} from "./parseAssetURL.d.mts"

export type JsGetRequestedAssetsFromCodeResult = false|JsParseAssetURLResult[]|null

export type JsGetRequestedAssetsFromCode = (
	code : string
) => Promise<JsGetRequestedAssetsFromCodeResult>

