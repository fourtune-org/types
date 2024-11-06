export type FourtuneRealmJSPackageType = {
	realm: "js",
	type: "package"
}

export type FourtuneRealmJSPackageASType = {
	realm: "js",
	type: "package:async/sync",
	target: {
		function_name: string,
		dependencies: {
			[dependency_name: string]: string
		}
	}
}
