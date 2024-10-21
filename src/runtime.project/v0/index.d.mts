export interface PackageJSON {
	name: string
	version: string
	description?: string
	author?: string
	license?: string

	[prop : string] : any
}

/**
 * @brief Return the project's package.json as an object.
 */
export type GetProjectPackageJSON = () => PackageJSON

export type Project = {
	package_json : PackageJSON
}

export type DefaultExportObject = {
	getProjectPackageJSON: GetProjectPackageJSON
}
