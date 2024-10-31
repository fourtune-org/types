export type TsStripTypesFromCodeOptions = {
	filename? : string
	replace_import_extensions? : boolean
}

export type TsStripTypesFromCode = (
	code : string, options? : TsStripTypesFromCodeOptions
) => Promise<string>
