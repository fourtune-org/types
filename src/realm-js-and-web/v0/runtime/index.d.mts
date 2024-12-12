export type * from "./methods/createContext.d.mts"

export type * from "./types/ContextInstance.d.mts"
export type * from "./types/ContextOptions.d.mts"
export type * from "./types/LogLevel.d.mts"

import type {CreateContext} from "./methods/createContext.d.mts"
import type {CompareLogLevel} from "./methods/compareLogLevel.d.mts"

export type ExportObject = {
	createContext: CreateContext,
	compareLogLevel: CompareLogLevel
}

export type DefaultExportObject = ExportObject
