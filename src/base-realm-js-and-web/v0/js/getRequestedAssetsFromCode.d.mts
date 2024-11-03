import type {JsParseAssetURLResult} from "./parseAssetURL.d.mts"

export type JsGetRequestedAssetsFromCodeReason =
	"starImportUsed" |
	"getAssetIdentifierUsed" |
	"getAssetDynamicURL"

export type JsGetRequestedAssetsFromCodeResult = {
	used: false,
	assets: null
} | {
	used: true,
	assets: JsParseAssetURLResult
} | {
	used: true,
	assets: "unknown",
	reason: JsGetRequestedAssetsFromCodeReason
}

export type JsGetRequestedAssetsFromCode = (
	code : string
) => Promise<JsGetRequestedAssetsFromCodeResult>

