import type {
	RuntimeWrappedContextInstance
} from "../../../runtime/index.d.mts"

import type {ContextOptions} from "../types/ContextOptions.d.mts"

export type CreateDefaultContext = (
	context: RuntimeWrappedContextInstance|Partial<ContextOptions>|undefined
) => RuntimeWrappedContextInstance
