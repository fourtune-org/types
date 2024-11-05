export type Realm = "js" | "c" | "web"

export type GetVersion = () => number

export type LoadRealmDependencyResult = {
	path: string,
	version: string,
	dependency: any,
	package_json: any
}

export type LoadRealmDependency = (
	project_root: string | "cli",
	realm: Realm,
	dependency_name: string
) => Promise<LoadRealmDependencyResult>

export type DependencyMapEntry = {
	version: string,
	import_code?: string|null
}

export type DependencyMap = {
	[name: string] : DependencyMapEntry
}

export type DependenciesToInstall = {
	api_version: number
	dependencies: DependencyMap
}

export type InstallRealmDependenciesOptions = {
	npm_bin_path?: string,
	force?: boolean
}

export type InstallRealmDependencies = (
	project_root: string | "cli",
	realm: Realm,
	dependencies: DependenciesToInstall,
	options?: InstallRealmDependenciesOptions
) => void

export type FindProjectRootFromDirectory = (
	start_directory: string
) => Promise<string|false>

export type DefaultExportObject = {
	getVersion: GetVersion,
	loadRealmDependency: LoadRealmDependency,
	installRealmDependencies: InstallRealmDependencies,
	findProjectRootFromDirectory: FindProjectRootFromDirectory
}
