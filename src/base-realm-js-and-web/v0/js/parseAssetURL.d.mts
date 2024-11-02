export type JsAssetURLProtocol = "text" | "js-bundle"

export type JsParseAssetURLResult = {
	protocol: JsAssetURLProtocol,
	path: string
}

export type JsParseAssetURL = (
	url : string
) => JsParseAssetURLResult
