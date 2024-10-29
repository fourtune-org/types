import ts from "typescript"

export type TsInvokeTypeScript = (
	project_root : string,
	host : ts.CompilerHost,
	input_files : string[],
	compiler_options : ts.CompilerOptions
) => Promise<{
	errors: boolean,
	diagnostic_messages: {
		code: number,
		message: string
	}[]
}>
