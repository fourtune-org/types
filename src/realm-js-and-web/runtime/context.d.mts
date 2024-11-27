import type {RuntimeWrappedContextInstance} from "./RuntimeWrappedContextInstance.d.mts"
export {RuntimeWrappedContextInstance}

import type {ContextInstance as ContextInstanceV0} from "../v0/runtime/index.d.mts"
export {ContextInstanceV0}

export type RuntimeWrappedContextV0 = {
	_kind: "RuntimeContextInstance"
	_version: 0
	_instance: ContextInstanceV0
}

export declare function isRuntimeWrappedContextInstanceV0(
	context: RuntimeWrappedContextInstance
) : context is RuntimeWrappedContextV0
