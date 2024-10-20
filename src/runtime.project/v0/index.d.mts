/**
 * @brief Return the project's package.json as an object.
 */
export type GetProjectPackageJSON = () => object

/**
 * @brief Get fourtune configuration as an object.
 */
export type GetFourtuneConfiguration = () => any

export type Project = {
	package_json : object,
	fourtune_configuration : object
}

export type DefaultExportObject = {
	getProjectPackageJSON: GetProjectPackageJSON,
	getFourtuneConfiguration: GetFourtuneConfiguration
}
