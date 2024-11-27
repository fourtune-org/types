import type {RuntimeWrappedOptions} from "./RuntimeWrappedOptions.d.mts"
export {RuntimeWrappedOptions}

import type {ContextOptions as ContextOptionsV0} from "../v0/runtime/index.d.mts"
export {ContextOptionsV0}

export type RuntimeWrappedOptionsV0 = {
	_kind: "RuntimeOptions"
	_version: 0
	_options: ContextOptionsV0
}

export declare function isRuntimeWrappedOptionsV0(
	options: RuntimeWrappedOptions
) : options is RuntimeWrappedOptionsV0
