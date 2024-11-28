import type {RuntimeWrappedContextInstance} from "../../../_versionless/runtime/index.d.mts"
import type {ContextOptions} from "../types/ContextOptions.d.mts"

export type CreateContext = (
	instance_or_options?: RuntimeWrappedContextInstance|(
		// this prevents someone from both specifying options
		// and a wrapped context instance
		Partial<ContextOptions> & {
			_kind?: never
			_version?: never
			_revision?: never
			_instance?: never
		}
	)
) => RuntimeWrappedContextInstance
