import type {UserContext} from "../types/UserContext.d.mts"
import type {ContextInstance} from "../types/ContextInstance.d.mts"
import type {Project} from "../../../runtime.project/v0/index.d.mts"

export {Project}

export type UseContext = (
	project : Project,
	options_or_context : UserContext
) => ContextInstance
