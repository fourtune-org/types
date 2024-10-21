import type {UserContext} from "../types/UserContext.d.mts"
import type {WrappedContext} from "../../WrappedContext.d.mts"
import type {Project} from "../../../runtime.project/v0/index.d.mts"

export type CreateDefaultContext = (
	project : Project,
	options_or_context : UserContext
) => WrappedContext
