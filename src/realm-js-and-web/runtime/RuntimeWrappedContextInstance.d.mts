import type {RuntimeVersionedObject} from "./RuntimeVersionedObject.d.mts"

export type RuntimeWrappedContextInstance = RuntimeVersionedObject & {
	readonly _kind: "RuntimeContextInstance"

	/**
	 * @brief The wrapped instance.
	 */
	readonly _instance : unknown
}
