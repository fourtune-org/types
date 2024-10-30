export type ProjectResource = string | Uint8Array

/**
 * @brief Synchronously load a resource
 * @description
 * Synchronously load the resource at `url`.
 * @param url URL of the resource.
 * @return
 * The resources content.
 */
export type LoadResource = (
	url : string
) => ProjectResource

/**
 * @brief Synchronously load a resource
 * @description
 * Synchronously load the resource at `url`.
 * @param url URL of the resource.
 * @return
 * URL that points to the loaded resource.
 */
export type LoadResourceAsURL = (
	url : string
) => string

export type ExportObject = {
	loadResource: LoadResource,
	loadResourceAsURL: LoadResourceAsURL
}
