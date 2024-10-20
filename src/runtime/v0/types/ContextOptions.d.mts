import type {LogLevel} from "./LogLevel.d.mts"
import type {ContextInstance} from "./ContextInstance.d.mts"

export type ContextOptions = {
	/**
	 * @brief Tag of context, can be empty.
	 */
	tag : string

	/**
	 * @brief Retrieve the current log level.
	 */
	getCurrentLogLevel(this : ContextInstance) : LogLevel

	/**
	 * @brief Print a line.
	 */
	printLine(this : ContextInstance, line : string): void

	/**
	 * @brief Log lines with a specific log level.
	 */
	logWithLevel(this : ContextInstance, level : LogLevel, lines : Array<string>) : void

	/**
	 * @brief Determine whether a message should be logged.
	 */
	shouldLog(this : ContextInstance, level : LogLevel) : boolean
	// todo: add parameters like "package_name" and "tag" to shouldLog()
}
