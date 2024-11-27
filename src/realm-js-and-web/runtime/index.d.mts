import type {RuntimeWrappedContextInstance as WrappedContextInstance} from "./RuntimeWrappedContextInstance.d.mts"
export type RuntimeWrappedContextInstance = WrappedContextInstance

import type {RuntimeWrappedOptions as WrappedOptions} from "./RuntimeWrappedOptions.d.mts"
export type RuntimeWrappedOptions = WrappedOptions

import type {ContextInstance as ContextInstanceV0} from "../v0/runtime/index.d.mts"

export type RuntimeWrappedContextV0 = {
	_kind: "RuntimeContextInstance"
	_version: 0
	_instance: ContextInstanceV0
}

export declare function isRuntimeWrappedContextV0(
	context: RuntimeWrappedContextInstance
) : context is RuntimeWrappedContextV0

/**
 * @brief Get runtime version number
 */
export declare function getRuntimeVersion() : string
