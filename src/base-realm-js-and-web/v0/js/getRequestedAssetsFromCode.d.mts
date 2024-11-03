import type {JsParseAssetURLResult} from "./parseAssetURL.d.mts"

export type JsGetRequestedAssetsFromCodeResult = {
	used: false,
	assets: null
} | {
	used: true,
	assets: JsParseAssetURLResult[]
}

export type JsGetRequestedAssetsFromCode = (
	code : string
) => Promise<JsGetRequestedAssetsFromCodeResult>

