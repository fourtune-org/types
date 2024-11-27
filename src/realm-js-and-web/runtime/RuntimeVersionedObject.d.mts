// this type represents a versioned object

export type RuntimeVersionedObject = {
	/**
	 * @description
	 * The kind of wrapped object.
	 * Can be "RuntimeOptions" or "RuntimeContextInstance".
	 */
	_kind: string

	/**
	 * @description
	 * The version of the wrapped object.
	 */
	_version: number
}
