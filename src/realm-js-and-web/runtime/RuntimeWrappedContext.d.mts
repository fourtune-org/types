import type {RuntimeVersionedObject} from "./RuntimeVersionedObject.d.mts"

export type RuntimeWrappedContext = RuntimeVersionedObject & {
	_kind: "RuntimeContext"

	/**
	 * @brief The wrapped instance.
	 */
	_instance : unknown
}
