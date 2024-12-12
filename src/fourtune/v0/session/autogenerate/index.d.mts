import type {FourtuneSession} from "../index.d.mts"

export type AutogenerateGenerator = (
	fourtune_session: FourtuneSession,
	category: string | "fourtune",
	file_path: string
) => Promise<string>

export type Autogenerate = {
	addFourtuneFile: (
		file_path: string,
		generator: AutogenerateGenerator
	) => undefined

	addSyntheticFile: (
		category: string,
		file_path: string,
		generator: AutogenerateGenerator
	) => undefined
}
