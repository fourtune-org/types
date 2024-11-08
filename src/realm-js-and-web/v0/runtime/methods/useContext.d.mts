import type {UserContext} from "../types/UserContext.d.mts"
import type {ContextInstance} from "../types/ContextInstance.d.mts"
import type {Project} from "../../project/index.d.mts"

export {Project}

export type UseContext = (
	project : Project,
	options_or_context : UserContext
) => ContextInstance
