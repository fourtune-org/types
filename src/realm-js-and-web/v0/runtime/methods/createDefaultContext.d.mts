import type {
	RuntimeWrappedContextInstance,
	RuntimeWrappedOptionsOrContextInstance
} from "../../../runtime/index.d.mts"

export type CreateDefaultContext = (
	context_or_options: RuntimeWrappedOptionsOrContextInstance|undefined
) => RuntimeWrappedContextInstance
