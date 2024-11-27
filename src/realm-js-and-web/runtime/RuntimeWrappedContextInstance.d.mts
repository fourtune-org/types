import type {RuntimeVersionedObject} from "./RuntimeVersionedObject.d.mts"

export type RuntimeWrappedContextInstance = RuntimeVersionedObject & {
	_kind: "RuntimeContextInstance"

	/**
	 * @brief The wrapped instance.
	 */
	_instance : unknown
}
