import type {RuntimeVersionedObject} from "./RuntimeVersionedObject.d.mts"

export type RuntimeWrappedOptions = RuntimeVersionedObject & {
	_kind: "RuntimeOptions"

	/**
	 * @brief The wrapped options.
	 */
	_options : unknown
}
