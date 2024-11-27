import type {WrappedContextOrOptions} from "../types/WrappedContextOrOptions.d.mts"
import type {RuntimeWrappedContext} from "../../../runtime/RuntimeWrappedContext.d.mts"

export type CreateDefaultContext = (
	context_or_options: WrappedContextOrOptions|undefined
) => RuntimeWrappedContext
