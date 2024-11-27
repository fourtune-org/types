export type * from "./methods/createDefaultContext.d.mts"

export type * from "./types/ContextInstance.d.mts"
export type * from "./types/ContextOptions.d.mts"
export type * from "./types/FunctionTypeFromFactory.d.mts"
export type * from "./types/LogLevel.d.mts"

import type {CreateDefaultContext} from "./methods/createDefaultContext.d.mts"
import type {CreateOptions} from "./methods/createOptions.d.mts"

export type ExportObject = {
	createOptions: CreateOptions,
	createDefaultContext: CreateDefaultContext
}

export type DefaultExportObject = ExportObject
