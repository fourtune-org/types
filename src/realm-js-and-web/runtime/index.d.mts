import type {RuntimeWrappedContextInstance} from "./RuntimeWrappedContextInstance.d.mts"
import type {ContextInstance as ContextInstanceV0} from "../v0/runtime/index.d.mts"

export type RuntimeWrappedContextV0 = {
	readonly _kind: "RuntimeContextInstance"
	readonly _version: 0
	readonly _instance: ContextInstanceV0
}

export declare function isRuntimeWrappedContextInstanceV0(
	context: RuntimeWrappedContextInstance
) : context is RuntimeWrappedContextV0

export {ContextInstanceV0}
export {RuntimeWrappedContextInstance}

export type UseContext = {
	(wrapped_context: RuntimeWrappedContextInstance, version: 1) : ContextInstanceV0
	(wrapped_context: RuntimeWrappedContextInstance, version: number) : unknown
}

/**
 * @brief Get runtime version number
 */
export declare function getRuntimeVersion() : string
