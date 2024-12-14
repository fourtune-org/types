import type {RuntimeContextInstanceInternals} from "../../../_versionless/runtime/RuntimeContextInstanceInternals.d.mts"
import type {Project} from "../../project/index.d.mts"
import type {ContextOptions} from "./ContextOptions.d.mts"
import type {LogLevel } from "./LogLevel.d.mts"

type ContextInstanceLogMethod = {
	[K in LogLevel]: (...messages: string[]) => undefined
} & {
	/**
	 * @brief Log a message with severity "debug".
	 */
	(...messages: string[]) : undefined
}

//
// this interface is used by consumers of the context
//
export type ContextInstance = RuntimeContextInstanceInternals & {
	project : Project

	options : ContextOptions

	log : ContextInstanceLogMethod

	defaults: {
		[K in keyof Omit<ContextOptions, "tag">]: ContextOptions[K]
	}
}
