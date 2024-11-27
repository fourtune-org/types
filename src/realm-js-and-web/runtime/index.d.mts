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

declare function useContext(
	wrapped_context: RuntimeWrappedContextInstance,
	version: 0
) : ContextInstanceV0

export {useContext}

/**
 * @brief Get runtime version number
 */
export declare function getRuntimeVersion() : string
