export interface PackageJSON {
	name: string
	version: string
	description?: string
	author?: string
	license?: string

	[prop : string] : any
}

export interface FourtuneConfiguration {
	realm: string
	type: string

	target?: any

	[prop : string]: any
}

/**
 * @brief Return the project's package.json as an object.
 */
export type GetProjectPackageJSON = () => PackageJSON

/**
 * @brief Get fourtune configuration as an object.
 */
export type GetFourtuneConfiguration = () => FourtuneConfiguration

export type Project = {
	package_json : PackageJSON,
	fourtune_configuration : FourtuneConfiguration
}

export type DefaultExportObject = {
	getProjectPackageJSON: GetProjectPackageJSON,
	getFourtuneConfiguration: GetFourtuneConfiguration
}
