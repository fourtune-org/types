import ts from "typescript"

export type TsReadTSConfigFile = (
	tsconfig_path : string,
	project_root : string
) => Promise<ts.CompilerOptions>
