export type ProjectAsset = string | Uint8Array

/**
 * @brief Synchronously load a project asset
 * @description
 * Synchronously load the asset at `url`.
 * @param url URL of the asset.
 * @return
 * The asset's content.
 */
export type GetAsset = (url : string) => ProjectAsset

/**
 * @brief Synchronously load a project asset
 * @description
 * Synchronously load the asset at `url`.
 * @param url URL of the asset.
 * @return
 * URL that points to the loaded asset.
 */
export type GetAssetAsURL = (url : string) => string

export type ExportObject = {
	getAsset: GetAsset,
	getAssetAsURL: GetAssetAsURL
}
