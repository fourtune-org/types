import type {RuntimeWrappedContextInstance} from "./RuntimeWrappedContextInstance.d.mts"
import type {ContextInstance as ContextInstanceV0} from "../v0/runtime/index.d.mts"

export {ContextInstanceV0}
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

export type GetRuntimeVersion = () => string

export type ExportObject = {
	useContext: UseContext,
	getRuntimeVersion: GetRuntimeVersion
}
