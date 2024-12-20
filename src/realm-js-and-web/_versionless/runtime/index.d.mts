import type {RuntimeWrappedContextInstance} from "./RuntimeWrappedContextInstance.d.mts"
import type {RuntimePackageInformation} from "./RuntimePackageInformation.d.mts"
import type {ContextInstance as ContextInstanceV0} from "../../v0/runtime/index.d.mts"

export {ContextInstanceV0}
export {ContextInstanceV0 as ContextInstanceV0Rev0}

export {RuntimePackageInformation}
export {RuntimeWrappedContextInstance}

export type UseContext = {
	/**
	 * @brief
	 * Unwrap a wrapped context instance.
	 * 
	 * @param wrapped_context
	 * The wrapped context instance object.
	 * 
	 * @param version
	 * The expected version number of the context instance.
	 * This will be checked against the actual context instance version.
	 * On version mismatch an error is thrown.
	 * 
	 * @return
	 * The context instance object.
	 */
	(wrapped_context: RuntimeWrappedContextInstance, version: 0) : ContextInstanceV0
	(wrapped_context: RuntimeWrappedContextInstance, version: number) : unknown
}

// vv-- written this way so JSDoc works for this function
export type GetContextMetaData = {
	/**
	 * @brief
	 * Return information about a context.
	 * @param wrapped_context
	 * The wrapped context instance.
	 * @return
	 * An object containing the major and minor (named revision) version number
	 * as well as the package this context was created in.
	 */
	(wrapped_context: RuntimeWrappedContextInstance) : {
		version: {
			major: number,
			revision: number
		},
		package: RuntimePackageInformation
	}
}

export type ExportObject = {
	useContext: UseContext,
	getContextMetaData: GetContextMetaData
}
