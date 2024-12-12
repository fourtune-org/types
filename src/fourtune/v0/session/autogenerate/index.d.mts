import type {FourtuneSession} from "../index.d.mts"

export type AutogenerateGenerator<Category extends string> = (
	fourtune_session: FourtuneSession,
	category: Category,
	file_path: string
) => Promise<string>

export type Autogenerate = {
	addFourtuneFile: (
		file_path: string,
		generator: AutogenerateGenerator<"fourtune">
	) => undefined

	addSyntheticFile: (
		category: string,
		file_path: string,
		generator: AutogenerateGenerator<string>
	) => undefined
}
