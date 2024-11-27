// this is intentionally not as detailed as a package.json
// the additional information in a package.json is not needed
// for the purpose of this attribute
export type RuntimePackageInformation = {
	name: string
	version: string
	author?: string
	license?: string
}
