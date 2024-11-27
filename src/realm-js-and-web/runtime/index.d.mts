import type {RuntimeWrappedContextInstance} from "./RuntimeWrappedContextInstance.d.mts"
import type {ContextInstance as ContextInstanceV0} from "../v0/runtime/index.d.mts"

export {ContextInstanceV0}
export {RuntimeWrappedContextInstance}

export type UseContext = {
	(wrapped_context: RuntimeWrappedContextInstance, version: 1) : ContextInstanceV0
	(wrapped_context: RuntimeWrappedContextInstance, version: number) : unknown
}

export type GetRuntimeVersion = () => string

export type ExportObject = {
	useContext: UseContext,
	getRuntimeVersion: GetRuntimeVersion
}
