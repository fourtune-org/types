export type * from "./methods/createDefaultContext.d.mts"
export type * from "./methods/getRuntimeVersion.d.mts"
export type * from "./methods/useContext.d.mts"

export type * from "../WrappedContext.d.mts"

import type {CreateDefaultContext} from "./methods/createDefaultContext.d.mts"
import type {GetRuntimeVersion} from "./methods/getRuntimeVersion.d.mts"
import type {UseContext} from "./methods/useContext.d.mts"

export type DefaultExportObject = {
	createDefaultContext: CreateDefaultContext,
	getRuntimeVersion: GetRuntimeVersion,
	useContext: UseContext
}
