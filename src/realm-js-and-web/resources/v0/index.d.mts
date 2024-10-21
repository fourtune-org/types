export type ProjectResource = string | Uint8Array

export type LoadResource = {
	/**
	 * @brief Synchronously load a resource
	 * @description
	 * Synchronously load the resource at `url`.
	 * @param url URL of the resource.
	 * @return
	 * The resources content.
	 */
	(resource : string) : ProjectResource

	/**
	 * @brief Synchronously load a resource
	 * @description
	 * Synchronously load the resource at `url`.
	 * @param url URL of the resource.
	 * @return
	 * URL that points to the loaded resource.
	 */
	asURL(resource : string) : string
}

export type DefaultExportObject = {
	loadResource: LoadResource
}
