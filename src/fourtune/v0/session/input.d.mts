export type FourtuneSessionInputEntry = {
	parents: string[],
	name: string,
	relative_path: string,
	source: string
}

export type FourtuneSessionInput = {
	getSourceFiles : () => FourtuneSessionInputEntry[]
	getAssetFiles: () => FourtuneSessionInputEntry[]
}
