import type {WrappedContextOrOptions} from "../types/WrappedContextOrOptions.d.mts"
import type {RuntimeWrappedContext} from "../../../runtime/RuntimeWrappedContext.d.mts"
import type {Project} from "../../project/index.d.mts"

export type CreateDefaultContext = (
	project: Project,
	context_or_options: WrappedContextOrOptions|undefined
) => RuntimeWrappedContext
