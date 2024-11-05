export type GetVersion = () => number

export type LoadRealmDependencyResult = {
	path: string,
	version: string,
	dependency: any,
	package_json: any
}

export type LoadRealmDependency = (
	project_root: string | "cli",
	realm: string,
	dependency_name: string
) => Promise<LoadRealmDependencyResult>

export type DependencyMap = {
	[name: string] : {
		version: string,
		import_code?: string|null
	}
}

export type InstallRealmDependencies = (
	project_root: string,
	realm: string,
	dependencies: DependencyMap,
	npm_bin_path?: string|null
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
