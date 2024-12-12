export type InputFile = {
	parents: string[]
	name: string
	relative_path: string
	source: string
	synthetic?: boolean
}

export type Input = {
	getSourceFiles: () => InputFile[]
	getAssetFiles: () => InputFile[]
}
