import type {RuntimeContextInstanceInternals} from "../../../runtime/RuntimeContextInstanceInternals.d.mts"
import type {Project} from "../../project/index.d.mts"
import type {ContextOptions} from "./ContextOptions.d.mts"

type ContextInstanceLogMethod = {
	/**
	 * @brief Log a message with severity "debug".
	 */
	(...messages: string[]) : undefined

	/**
	 * @brief Log a message with severity "error".
	 */
	error(...messages: string[]) : undefined

	/**
	 * @brief Log a message with severity "warning".
	 */
	warn(...messages: string[]) : undefined

	/**
	 * @brief Log a message with severity "information".
	 */
	info(...messages: string[]) : undefined

	/**
	 * @brief Log a message with severity "debug".
	 */
	debug(...messages: string[]) : undefined

	/**
	 * @brief Log a message with severity "trace".
	 */
	trace(...messages: string[]) : undefined
}

//
// this interface is used by consumers of the context
//
export type ContextInstance = RuntimeContextInstanceInternals | {
	project : Project

	options : ContextOptions

	log : ContextInstanceLogMethod
}
