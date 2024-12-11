export type FourtuneSessionPaths = {
	getBuildPath: (...parts: string[]) => string
	getBuildPathFromProjectRoot: (...parts: string[]) => string

	getObjectsPath: (...parts: string[]) => string
	getObjectsPathFromProjectRoot: (...parts: string[]) => string
}
