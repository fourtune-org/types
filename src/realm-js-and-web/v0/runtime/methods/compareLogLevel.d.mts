import type {LogLevel} from "../types/LogLevel.d.mts"

type Operator = 
	">"  |
	">=" |
	"<"  |
	"<="

export type CompareLogLevel = (
	log_level_left: LogLevel,
	operator: Operator,
	log_level_right: LogLevel
) => boolean
