import ts from "typescript"

export type TsGetExportsFromCodeDeclarationElement = {
	is_type_only: boolean
	export_name: string
	original_name: string
}

export type TsGetExportsFromCodeEntity = {
	kind: string,
	node: ts.ExportDeclaration|
	      ts.TypeAliasDeclaration|
	      ts.FunctionDeclaration|
	      ts.VariableStatement|
	      ts.ExportAssignment
} & ({
	kind: "named"
	node: ts.ExportDeclaration
	module_name?: string|undefined
	elements: TsGetExportsFromCodeDeclarationElement[]
} | {
	kind: "star"
	node: ts.ExportDeclaration
	module_name: string
} | {
	kind: "type"
	node: ts.TypeAliasDeclaration
	name: string
} | {
	kind: "defaultFunction"
	node: ts.FunctionDeclaration
} | {
	kind: "namedFunction"
	node: ts.FunctionDeclaration
	name: string
} | {
	kind: "variables",
	node: ts.VariableStatement
	elements: {name: string}[]
} | {
	kind: "default",
	node: ts.ExportAssignment,
	expression: string
})

export type TsGetExportsFromCode = (
	code: string
) => Promise<TsGetExportsFromCodeEntity[]>
