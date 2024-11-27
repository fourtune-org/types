import type {
	RuntimeWrappedContextInstance
} from "../../../runtime/index.d.mts"

export type CreateDefaultContext = (
	context: RuntimeWrappedContextInstance|undefined
) => RuntimeWrappedContextInstance
