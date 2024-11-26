import type {RuntimeWrappedContext} from "../../../RuntimeWrappedContext.d.mts"
import type {ContextOptions} from "./ContextOptions.d.mts"

export type UserContext = RuntimeWrappedContext | Partial<ContextOptions>
