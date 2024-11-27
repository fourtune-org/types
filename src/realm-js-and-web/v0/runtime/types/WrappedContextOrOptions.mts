import type {RuntimeWrappedContext} from "../../../runtime/RuntimeWrappedContext.d.mts"
import type {ContextOptions} from "./ContextOptions.d.mts"

export type WrappedContextOrOptions = RuntimeWrappedContext | Partial<ContextOptions>
