type FourtuneRealmJSPackageType = {
	realm: "realm-js",
	type: "package"
}

type FourtuneRealmJSPackageASType = {
	realm: "realm-js",
	type: "package:async/sync",
	target: {
		function_name: string
	}
}

export type FourtuneConfig = {
	realm: "realm-js" | "realm-c",
	type: string
} & (
	FourtuneRealmJSPackageType   |
	FourtuneRealmJSPackageASType
)

const a : FourtuneConfig = {
	realm: "realm-js",
	type: "package:async/sync",
	target: {
		function_name: "a"
	}
}

/*
type FourtuneJSRealmTypes = {
	"package": {
		target: {}
	},

	"package:async/sync": {
		target: {
			function_name : string,
			dependencies? : string[]
		}
	}
}

export type FourtuneRealm<
	Type extends keyof FourtuneJSRealmTypes
> = {
	"realm-js": {
		type: Type,

		target: FourtuneJSRealmTypes[Type]["target"]
	}
}

export type FourtuneConfig<
	Realm extends keyof FourtuneRealm<T>,
	T extends keyof FourtuneJSRealmTypes
> = {
	realm: Realm
} & (

)


const a : FourtuneConfig<"realm-js", "package:async/sync"> = {
	realm: "realm-js",
	type: "package:async/sync",
}
*/
