import type {LogLevel} from "./LogLevel.d.mts"
import type {ContextInstance} from "./ContextInstance.d.mts"

export type ContextOptionsGetCurrentLogLevel = (
	context: ContextInstance
) => LogLevel

export type ContextOptionsPrintLine = (
	context: ContextInstance,
	line: string
) => undefined

export type ContextOptionsLogWithLevel = (
	context : ContextInstance,
	level : LogLevel,
	lines : string[]
) => undefined

export type ContextOptionsShouldLog = (
	context : ContextInstance,
	level : LogLevel,
	package_name : string,
	tag : string
) => boolean

export type ContextOptions = {
	/**
	 * @brief Tag of context, can be empty.
	 */
	tag : string

	/**
	 * @brief Retrieve the current log level.
	 */
	getCurrentLogLevel: ContextOptionsGetCurrentLogLevel,

	/**
	 * @brief Print a line.
	 */
	printLine: ContextOptionsPrintLine,

	/**
	 * @brief Log lines with a specific log level.
	 */
	logWithLevel: ContextOptionsLogWithLevel,

	/**
	 * @brief Determine whether a message should be logged.
	 * @param package_name The package name of the module making the request.
	 * @param tag The tag of the module that is making the request.
	 */
	shouldLog: ContextOptionsShouldLog
}
