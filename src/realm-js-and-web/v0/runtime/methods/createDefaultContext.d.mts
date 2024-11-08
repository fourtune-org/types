import type {UserContext} from "../types/UserContext.d.mts"
import type {WrappedContext} from "../WrappedContext.d.mts"

export type CreateDefaultContext = (
	options_or_context : UserContext
) => WrappedContext
