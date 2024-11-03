import type {JsGetRequestedAssetsFromCodeResult} from "./getRequestedAssetsFromCode.mjs"

export type JsGetRequestedAssetsFromFiles = (
	files : string[]
) => Promise<JsGetRequestedAssetsFromCodeResult>
