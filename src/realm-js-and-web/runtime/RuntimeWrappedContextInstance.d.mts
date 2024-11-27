import type {RuntimeVersionedObject} from "./RuntimeVersionedObject.d.mts"

export type RuntimeWrappedContextInstance = RuntimeVersionedObject & {
	readonly _kind: "RuntimeContextInstance"

	/**
	 * @brief The wrapped instance.
	 */
	readonly _instance : unknown

	/**
	 * @brief Information about the project this instance is from.
	 */
	// this is intentionally not as detailed as a package.json
	// the additional information in a package.json is not needed
	// for the purpose of this attribute
	readonly _project: {
		name: string
		version: string
		author?: string
		license?: string
	}
}
