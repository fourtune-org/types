export type LoadRealmDependencies = (
	project_root : string,
	realm : string
) => Promise<{
	getDependency(name : string) : any|null
	getPathOfDependency(name : string) : string|null
	getDependencyVersion(name : string) : string|null
	loadDependencyPackageJSON(name : string) : any|null
}|null>

export type InstallRealmDependencies = (
	project_root : string,
	realm : string,
	dependencies : {
		[name: string] : {
			version : string,
			import_code?: string
		}
	}
) => Promise<void>

export type FindProjectRootFromDirectory = (
	project_root : string
) => Promise<string|false>

export type DefaultExportObject = {
	loadRealmDependencies : LoadRealmDependencies,
	installRealmDependencies : InstallRealmDependencies,
	findProjectRootFromDirectory : FindProjectRootFromDirectory
}
