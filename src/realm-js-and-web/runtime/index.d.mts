export type * from "./context.d.mts"

/**
 * @brief Get runtime version number
 */
export declare function getRuntimeVersion() : string

import type {RuntimeWrappedContextInstance} from "./RuntimeWrappedContextInstance.d.mts"
import type {RuntimeWrappedOptions} from "./RuntimeWrappedOptions.d.mts"

export type RuntimeWrappedOptionsOrContextInstance = RuntimeWrappedContextInstance | RuntimeWrappedOptions
