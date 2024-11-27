import type {
	RuntimeWrappedContextInstance,
	RuntimeWrappedOptionsOrContextInstance
} from "../../../runtime/index.d.mts"

export type CreateDefaultContext = (
	options_or_context: RuntimeWrappedOptionsOrContextInstance|undefined
) => RuntimeWrappedContextInstance
