import type {RuntimeWrappedOptions} from "../../../runtime/index.d.mts"
import type {ContextOptions} from "../types/ContextOptions.d.mts"

export type CreateOptions = (
	options: ContextOptions|undefined
) => RuntimeWrappedOptions
