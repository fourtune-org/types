export type Realm = "js" | "c" | "web"

export type GetVersion = () => number
export type GetExactVersion = () => string

export type SetEnableDebugPrint = (
	enabled: boolean
) => undefined

export type LoadRealmDependencyResult = {
	api_version: number,
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

export type GetRealmDependencyNames = (
	project_root: string | "cli",
	realm: Realm
) => Promise<string[]>

export type DependencyMapEntry = {
	version: string
	isolated?: boolean
} & ({
	import_kind?: "default"
} | {
	import_kind: "star"
} | {
	import_kind: "named"
	imports: {
		[name: string]: string|undefined
	}
})

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
) => Promise<undefined>

export type FindProjectRootFromDirectory = (
	start_directory: string
) => Promise<string|false>

export type DefaultExportObject = {
	getVersion: GetVersion,
	getExactVersion: GetExactVersion,
	setEnableDebugPrint: SetEnableDebugPrint,
	loadRealmDependency: LoadRealmDependency,
	getRealmDependencyNames: GetRealmDependencyNames,
	installRealmDependencies: InstallRealmDependencies,
	findProjectRootFromDirectory: FindProjectRootFromDirectory
}
