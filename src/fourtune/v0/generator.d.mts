import type {FourtuneSession} from "./session.d.mts"

export type FourtuneFileGenerator = (
	fourtune_session: FourtuneSession,
	file_path: string
) => Promise<string>
