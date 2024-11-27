import type {UserContext} from "../types/UserContext.d.mts"
import type {RuntimeWrappedContext} from "../../../runtime/RuntimeWrappedContext.d.mts"

export type CreateDefaultContext = (
	options_or_context : UserContext
) => RuntimeWrappedContext
