import type {UserContext} from "../types/UserContext.d.mts"
import type {RuntimeWrappedContext} from "../../../RuntimeWrappedContext.d.mts"

export type CreateDefaultContext = (
	options_or_context : UserContext
) => RuntimeWrappedContext
