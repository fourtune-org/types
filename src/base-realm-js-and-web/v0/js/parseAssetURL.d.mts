export type JsParseAssetURLResult = {
	protocol: string,
	path: string
}

export type JsParseAssetURL = (
	url : string
) => JsParseAssetURLResult
