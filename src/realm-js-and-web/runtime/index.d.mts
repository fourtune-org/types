import type {RuntimeWrappedContext as WrappedContext} from "./RuntimeWrappedContext.d.mts"
export type RuntimeWrappedContext = WrappedContext

import type {ContextInstance as ContextInstanceV0} from "../v0/runtime/index.d.mts"

export type RuntimeWrappedContextV0 = {
	_version: 0
	_instance: ContextInstanceV0
}

export declare function isRuntimeWrappedContextV0(
	context: RuntimeWrappedContext
) : context is RuntimeWrappedContextV0

/**
 * @brief Get runtime version number
 */
export declare function getRuntimeVersion() : string
