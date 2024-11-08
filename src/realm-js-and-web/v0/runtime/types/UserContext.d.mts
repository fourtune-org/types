import type {WrappedContext} from "../WrappedContext.d.mts"
import type {ContextOptions} from "./ContextOptions.d.mts"

export type UserContext = WrappedContext | Partial<ContextOptions>
