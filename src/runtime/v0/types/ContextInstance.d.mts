import type {Project} from "../../../runtime.project/v0/index.d.mts"
import type {ContextOptions} from "./ContextOptions.d.mts"

type ContextInstanceLogMethod = {
	/**
	 * @brief Log a message with severity "debug".
	 */
	(...messages: string[]) : void

	/**
	 * @brief Log a message with severity "error".
	 */
	error(...messages: string[]) : void

	/**
	 * @brief Log a message with severity "warning".
	 */
	warn(...messages: string[]) : void

	/**
	 * @brief Log a message with severity "information".
	 */
	info(...messages: string[]) : void

	/**
	 * @brief Log a message with severity "debug".
	 */
	debug(...messages: string[]) : void

	/**
	 * @brief Log a message with severity "trace".
	 */
	trace(...messages: string[]) : void
}

//
// this interface is used by consumers of the context
//
export type ContextInstance = {
	project : Project

	options : ContextOptions

	log : ContextInstanceLogMethod
}
