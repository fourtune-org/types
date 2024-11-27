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
	readonly _kind: string

	/**
	 * @description
	 * The version of the wrapped object.
	 */
	readonly _version: number

	/**
	 * @description
	 * The minor version of the wrapped object.
	 */
	readonly _revision: number
}
