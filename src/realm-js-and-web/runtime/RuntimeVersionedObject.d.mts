/**
 * @description
 * Represents a wrapped object.
 */
export type RuntimeVersionedObject = {
	/**
	 * @description
	 * The kind of wrapped object.
	 * Can only be RuntimeContextInstance" (at the moment).
	 */
	_kind: string

	/**
	 * @description
	 * The version of the wrapped object.
	 */
	_version: number
}
