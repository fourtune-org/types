import type {LogLevel} from "./LogLevel.d.mts"
import type {ContextInstance} from "./ContextInstance.d.mts"

/**
 * @brief Retrieve the current log level.
 */
export type ContextOptionsGetCurrentLogLevel = (
	context: ContextInstance
) => LogLevel

/**
 * @brief Print a line.
 */
export type ContextOptionsPrintLine = (
	context: ContextInstance,
	line: string
) => undefined

/**
 * @brief Log lines with a specific log level.
 */
export type ContextOptionsLogWithLevel = (
	context : ContextInstance,
	level : LogLevel,
	lines : string[]
) => undefined

/**
 * @brief Determine whether a message should be logged.
 * @param package_name The package name of the module making the request.
 * @param tag The tag of the module that is making the request.
 */
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

	getCurrentLogLevel: ContextOptionsGetCurrentLogLevel,
	printLine: ContextOptionsPrintLine,
	logWithLevel: ContextOptionsLogWithLevel,
	shouldLog: ContextOptionsShouldLog
}
