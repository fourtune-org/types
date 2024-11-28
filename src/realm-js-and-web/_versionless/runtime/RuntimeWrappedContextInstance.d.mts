import type {RuntimeVersionedObject} from "./RuntimeVersionedObject.d.mts"
import type {RuntimePackageInformation} from "./RuntimePackageInformation.d.mts"

export type RuntimeWrappedContextInstance = RuntimeVersionedObject & {
	readonly _kind: "RuntimeContextInstance"

	/**
	 * @brief The wrapped instance.
	 */
	readonly _instance : unknown

	/**
	 * @brief Information about the project this instance is from.
	 */
	readonly _package: RuntimePackageInformation
}
